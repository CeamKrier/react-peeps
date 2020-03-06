import { Eyepatch } from './Eyepatch'
import { GlassRoundThick } from './GlassRoundThick'
import { SunglassClubmaster } from './SunglassClubmaster'
import { SunglassWayfarer } from './SunglassWayfarer'

export const Accessories = {
  Eyepatch,
  GlassRoundThick,
  SunglassClubmaster,
  SunglassWayfarer
}

export interface AccessoryType {
  Eyepatch: React.ElementType;
  GlassRoundThick: React.ElementType;
  SunglassClubmaster: React.ElementType;
  SunglassWayfarer: React.ElementType;
}
