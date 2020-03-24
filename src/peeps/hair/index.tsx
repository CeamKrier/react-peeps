import React from 'react';
import { Hair, HairType } from './z_options';

interface HairProps {
	piece: HairType;
	strokeColor?: string;
	backgroundColor?: string;
}

const index: React.FC<HairProps> = ({
	piece,
	strokeColor,
	backgroundColor
}) => {
	return React.createElement(Hair[piece], { strokeColor, backgroundColor });
};

export default index;
