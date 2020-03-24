import React from 'react';
import { Face, FaceType } from './z_options';

interface HairProps {
	piece: FaceType;
	strokeColor?: string;
	backgroundColor?: string;
}

const index: React.FC<HairProps> = ({
	piece,
	strokeColor,
	backgroundColor
}) => {
	return React.createElement(Face[piece], { strokeColor, backgroundColor });
};

export default index;
