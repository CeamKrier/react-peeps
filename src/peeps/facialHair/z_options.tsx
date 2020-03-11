import { Chin } from './Chin';
import { Full } from './Full';
import { FullMajestic } from './FullMajestic';
import { FullMedium } from './FullMedium';
import { Goatee } from './Goatee';
import { GoateeCircle } from './GoateeCircle';
import { MoustacheDali } from './MoustacheDali';
import { MoustacheHandlebar } from './MoustacheHandlebar';
import { MoustacheImperial } from './MoustacheImperial';
import { MoustachePainters } from './MoustachePainters';
import { MoustachePaintersFilled } from './MoustachePaintersFilled';
import { MoustacheSwashbuckler } from './MoustacheSwashbuckler';
import { MoustacheThin } from './MoustacheThin';
import { MoustacheYosemite } from './MoustacheYosemite';
import { GrayFull } from './GrayFull';
import { MajesticHandlebars } from './MajesticHandlebars';
import { None } from './None'

export const FacialHair = {
	None,
	Chin,
	Full,
	FullMajestic,
	FullMedium,
	Goatee,
	GoateeCircle,
	MoustacheDali,
	MoustacheHandlebar,
	MoustacheImperial,
	MoustachePainters,
	MoustachePaintersFilled,
	MoustacheSwashbuckler,
	MoustacheThin,
	MoustacheYosemite,
	GrayFull,
	MajesticHandlebars
};

export type FacialHairType =
	| 'Chin'
	| 'Full'
	| 'FullMajestic'
	| 'FullMedium'
	| 'Goatee'
	| 'GoateeCircle'
	| 'MoustacheDali'
	| 'MoustacheHandlebar'
	| 'MoustacheImperial'
	| 'MoustachePainters'
	| 'MoustachePaintersFilled'
	| 'MoustacheSwashbuckler'
	| 'MoustacheThin'
	| 'MoustacheYosemite'
	| 'GrayFull'
	| 'MajesticHandlebars'
	| 'None';
