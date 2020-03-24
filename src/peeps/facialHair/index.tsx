import React from 'react';
import { FacialHair, FacialHairType } from './z_options';

interface FacialHairProps {
	piece: FacialHairType;
	strokeColor?: string;
	backgroundColor?: string;
}

const index: React.FC<FacialHairProps> = ({
	piece,
	strokeColor,
	backgroundColor
}) => {
	return React.createElement(FacialHair[piece], {
		strokeColor,
		backgroundColor
	});
};

export default index;
