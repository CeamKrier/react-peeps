import React, { CSSProperties } from 'react';
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
	backgroundColor
}) => {
	let { x, y, width, height } = viewBox || {
		x: 0,
		y: 0,
		width: 850,
		height: 1200
	};

	const adjustStrokeColor = () => {
		return typeof strokeColor === 'object'
			? 'url(#strokeGradient)'
			: strokeColor;
	};

	const adjustBackgroundColor = () => {
		return typeof backgroundColor === 'object'
			? 'url(#backgroundGradient)'
			: backgroundColor;
	};

	const mainContent = (
		<svg style={style} viewBox={`${x} ${y} ${width} ${height}`}>
			{typeof strokeColor === 'object' && (
				<defs>
					<linearGradient
						id='strokeGradient'
						x1='0%'
						y1='0%'
						x2='50%'
						y2='100%'
						gradientTransform={`rotate(${strokeColor.degree || 0})`}>
						<stop offset='0%' stop-color={strokeColor.firstColor} />
						<stop offset='100%' stop-color={strokeColor.secondColor} />
					</linearGradient>
				</defs>
			)}
			{typeof backgroundColor === 'object' && (
				<defs>
					<linearGradient
						id='backgroundGradient'
						x1='0%'
						y1='0%'
						x2='50%'
						y2='100%'
						gradientTransform={`rotate(${backgroundColor.degree || 0})`}>
						<stop offset='0%' stop-color={backgroundColor.firstColor} />
						<stop offset='100%' stop-color={backgroundColor.secondColor} />
					</linearGradient>
				</defs>
			)}
			<g>
				{body &&
					React.createElement(Pose, {
						piece: body,
						strokeColor: adjustStrokeColor(),
						backgroundColor: adjustBackgroundColor()
					})}
				{React.createElement(Head, {
					hairPiece: hair,
					facePiece: face,
					facialHairPiece: facialHair,
					accessoryPiece: accessory,
					strokeColor: adjustStrokeColor(),
					backgroundColor: adjustBackgroundColor()
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
