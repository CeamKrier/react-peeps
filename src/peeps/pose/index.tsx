//@ts-nocheck
import React from 'react';
import { BustPose, BustPoseType } from './bust/z_options';
import { SittingPose, SittingPoseType } from './sitting/z_options';
import { StandingPose, StandingPoseType } from './standing/z_options';

interface PoseProps {
	piece: BustPoseType | SittingPoseType | StandingPoseType;
	strokeColor?: string;
	backgroundColor?: string;
}

const index: React.FC<PoseProps> = ({
	piece,
	strokeColor,
	backgroundColor
}) => {
	return React.createElement(
		BustPose[piece] || SittingPose[piece] || StandingPose[piece],
		{ strokeColor, backgroundColor }
	);
};

export default index;
