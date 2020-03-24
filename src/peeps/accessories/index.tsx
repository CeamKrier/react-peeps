import React from 'react';
import { Accessories, AccessoryType } from './z_options';

interface AccessoriesProps {
	piece: AccessoryType;
	strokeColor?: string;
	backgroundColor?: string;
}

const index: React.FC<AccessoriesProps> = ({
	piece,
	strokeColor,
	backgroundColor
}) => {
	return React.createElement(Accessories[piece], {
		strokeColor,
		backgroundColor
	});
};

export default index;
