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
  Eyepatch: React.Component;
  GlassRoundThick: React.Component;
  SunglassClubmaster: React.Component;
  SunglassWayfarer: React.Component;
}
