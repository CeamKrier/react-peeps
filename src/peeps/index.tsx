import React, { CSSProperties, useMemo } from 'react';
import Head from './head';
import Pose from './pose';
import { GradientType } from './types';

export { BustPose, BustPoseType } from './pose/bust/z_options';
export { SittingPose, SittingPoseType } from './pose/sitting/z_options';
export { StandingPose, StandingPoseType } from './pose/standing/z_options';
export { Hair, HairType } from './hair/z_options';
export { Accessories, AccessoryType } from './accessories/z_options';
export { Face, FaceType } from './face/z_options';
export { FacialHair, FacialHairType } from './facialHair/z_options';

import { HairType } from './hair/z_options';
import { AccessoryType } from './accessories/z_options';
import { FaceType } from './face/z_options';
import { FacialHairType } from './facialHair/z_options';
import { StandingPoseType } from './pose/standing/z_options';
import { SittingPoseType } from './pose/sitting/z_options';
import { BustPoseType } from './pose/bust/z_options';

interface PeepProps {
	style?: CSSProperties;
	accessory?: AccessoryType;
	body?: BustPoseType | SittingPoseType | StandingPoseType;
	face?: FaceType;
	facialHair?: FacialHairType;
	hair?: HairType;
	viewBox?: { x: string; y: string; width: string; height: string };
	circleStyle?: CSSProperties;
	strokeColor?: string | GradientType;
	backgroundColor?: string | GradientType;
	wrapperBackground?: string | GradientType;
}

const Peep: React.FC<PeepProps> = ({
	style,
	accessory,
	body,
	face,
	facialHair,
	hair,
	viewBox,
	circleStyle,
	strokeColor,
	backgroundColor,
	wrapperBackground,
}) => {
	let { x, y, width, height } = viewBox || {
		x: 0,
		y: 0,
		width: 850,
		height: 1200,
	};

	const adjustStrokeColor = () => {
		return typeof strokeColor === 'object'
			? `url(#strokeGradient${uniqueIdentifier})`
			: strokeColor;
	};

	const adjustBackgroundColor = () => {
		return typeof backgroundColor === 'object'
			? `url(#backgroundGradient${uniqueIdentifier})`
			: backgroundColor;
	};

	const adjustWrapperBackground = () => {
		return typeof wrapperBackground === 'object'
			? `url(#wrapperGradient${uniqueIdentifier})`
			: wrapperBackground;
	};

	const uniqueIdentifier = useMemo(() => {
		return '_' + Math.random().toString(36).substr(2, 9)
	}, [])

	const mainContent = (
		<svg style={style} viewBox={`${x} ${y} ${width} ${height}`}>
			{typeof strokeColor === 'object' && (
				<defs>
					<linearGradient
						id={`strokeGradient${uniqueIdentifier}`}
						x1='0%'
						y1='0%'
						x2='50%'
						y2='100%'
						gradientTransform={`rotate(${strokeColor.degree || 0})`}>
						<stop offset='0%' stopColor={strokeColor.firstColor} />
						<stop offset='100%' stopColor={strokeColor.secondColor} />
					</linearGradient>
				</defs>
			)}
			{typeof backgroundColor === 'object' && (
				<defs>
					<linearGradient
						id={`backgroundGradient${uniqueIdentifier}`}
						x1='0%'
						y1='0%'
						x2='50%'
						y2='100%'
						gradientTransform={`rotate(${backgroundColor.degree || 0})`}>
						<stop offset='0%' stopColor={backgroundColor.firstColor} />
						<stop offset='100%' stopColor={backgroundColor.secondColor} />
					</linearGradient>
				</defs>
			)}
			{typeof wrapperBackground === 'object' &&
				(wrapperBackground.type === 'RadialGradient' ? (
					<defs>
						<radialGradient
							id={`wrapperGradient${uniqueIdentifier}`}>
							<stop offset='0%' stopColor={wrapperBackground.firstColor} />
							<stop offset='100%' stopColor={wrapperBackground.secondColor} />
						</radialGradient>
					</defs>
				) : (
					<defs>
						<linearGradient
							id={`wrapperGradient${uniqueIdentifier}`}
							x1='0%'
							y1='0%'
							x2='50%'
							y2='100%'
							gradientTransform={`rotate(${wrapperBackground.degree || 0})`}>
							<stop offset='0%' stopColor={wrapperBackground.firstColor} />
							<stop offset='100%' stopColor={wrapperBackground.secondColor} />
						</linearGradient>
					</defs>
				))}
			{wrapperBackground && (
				<rect
					x={x}
					y={y}
					width='100%'
					height='100%'
					fill={adjustWrapperBackground()}
					rx='30'></rect>
			)}
			<g>
				{body &&
					React.createElement(Pose, {
						piece: body,
						strokeColor: adjustStrokeColor(),
						backgroundColor: adjustBackgroundColor(),
					})}
				{React.createElement(Head, {
					hairPiece: hair,
					facePiece: face,
					facialHairPiece: facialHair,
					accessoryPiece: accessory,
					strokeColor: adjustStrokeColor(),
					backgroundColor: adjustBackgroundColor(),
				})}
			</g>
		</svg>
	);

	return circleStyle ? (
		<div style={circleStyle}>{mainContent}</div>
	) : (
		mainContent
	);
};

export default Peep;
