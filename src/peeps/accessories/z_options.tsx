import { Eyepatch } from './Eyepatch';
import { GlassRoundThick } from './GlassRoundThick';
import { SunglassClubmaster } from './SunglassClubmaster';
import { SunglassWayfarer } from './SunglassWayfarer';
import { GlassAviator } from './GlassAviator';
import { GlassButterfly } from './GlassButterfly';
import { GlassButterflyOutline } from './GlassButterflyOutline';
import { GlassClubmaster } from './GlassClubmaster';
import { GlassRound } from './GlassRound';
import { None } from './None';

export const Accessories = {
	None,
	Eyepatch,
	GlassRoundThick,
	SunglassClubmaster,
	SunglassWayfarer,
	GlassAviator,
	GlassButterfly,
	GlassButterflyOutline,
	GlassClubmaster,
	GlassRound
};

export type AccessoryType =
	| 'Eyepatch'
	| 'GlassRoundThick'
	| 'SunglassClubmaster'
	| 'SunglassWayfarer'
	| 'GlassAviator'
	| 'GlassButterfly'
	| 'GlassButterflyOutline'
	| 'GlassClubmaster'
	| 'GlassRound'
	| 'None';
