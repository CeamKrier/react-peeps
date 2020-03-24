import React, { CSSProperties } from 'react';
import Head from './head';
import Pose from './pose';

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
	strokeColor?: string;
	backgroundColor?: string;
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

	return circleStyle ? (
		<div style={circleStyle}>
			<svg style={style} viewBox={`${x} ${y} ${width} ${height}`}>
				<g>
					{body &&
						React.createElement(Pose, {
							piece: body,
							strokeColor,
							backgroundColor
						})}
					{React.createElement(Head, {
						hairPiece: hair,
						facePiece: face,
						facialHairPiece: facialHair,
						accessoryPiece: accessory,
						strokeColor,
						backgroundColor
					})}
				</g>
			</svg>
		</div>
	) : (
		<svg style={style} viewBox={`${x} ${y} ${width} ${height}`}>
			<g>
				{body &&
					React.createElement(Pose, {
						piece: body,
						strokeColor,
						backgroundColor
					})}
				{React.createElement(Head, {
					hairPiece: hair,
					facePiece: face,
					facialHairPiece: facialHair,
					accessoryPiece: accessory,
					strokeColor,
					backgroundColor
				})}
			</g>
		</svg>
	);
};

export default Peep;
