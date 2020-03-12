import { Bike } from "./Bike";
import { ClosedLegBW } from "./ClosedLegBW";
import { ClosedLegWB } from "./ClosedLegWB";
import { CrossedLegs } from "./CrossedLegs";
import { HandsBackBW } from "./HandsBackBW";
import { HandsBackWB } from "./HandsBackWB";
import { MediumBW } from "./MediumBW";
import { MediumWB } from "./MediumWB";
import { OneLegUpBW } from "./OneLegUpBW";
import { OneLegUpWB } from "./OneLegUpWB";
import { WheelChair } from "./Wheelchair";

export const SittingPose = {
  Bike,
  ClosedLegBW,
  ClosedLegWB,
  CrossedLegs,
  HandsBackBW,
  HandsBackWB,
  MediumBW,
  MediumWB,
  OneLegUpBW,
  OneLegUpWB,
  WheelChair
};

export type SittingPoseType =
  | "Bike"
  | "ClosedLegBW"
  | "ClosedLegWB"
  | "CrossedLegs"
  | "HandsBackBW"
  | "HandsBackWB"
  | "MediumBW"
  | "MediumWB"
  | "OneLegUpBW"
  | "OneLegUpWB"
  | "WheelChair";
