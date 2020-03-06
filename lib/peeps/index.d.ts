import React, { CSSProperties } from 'react';
export { Body } from './body/z_options';
export { Hair } from './hair/z_options';
export { Accessories } from './accessories/z_options';
export { Face } from './face/z_options';
export { FacialHair } from './facialHair/z_options';
import { BodyType } from './body/z_options';
import { HairType } from './hair/z_options';
import { AccessoryType } from './accessories/z_options';
import { FaceType } from './face/z_options';
import { FacialHairType } from './facialHair/z_options';
interface PeepProps {
    style?: CSSProperties;
    accessory?: React.ElementType<AccessoryType>;
    body?: React.ElementType<BodyType>;
    face?: React.ElementType<FaceType>;
    facialHair?: React.ElementType<FacialHairType>;
    hair?: React.ElementType<HairType>;
    viewBox?: {
        x: string;
        y: string;
        width: string;
        height: string;
    };
    circleStyle?: CSSProperties;
}
declare const Peep: React.FC<PeepProps>;
export declare const CirclePeep: React.FC<PeepProps>;
export default Peep;
