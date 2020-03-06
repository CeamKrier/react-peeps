import { Angry } from './Angry'
import { Blank } from './Blank'
import { Calm } from './Calm'
import { Cheeky } from './Cheeky'
import { Concerned } from './Concerned'
import { Contempt } from './Contempt'
import { Cute } from './Cute'
import { Driven } from './Driven'
import { EatingHappy } from './EatingHappy'
import { EyesClosed } from './EyesClosed'
import { OldAged } from './OldAged'
import { Serious } from './Serious'
import { Smile } from './Smile'
import { Solemn } from './Solemn'
import { Suspicious } from './Suspicious'
import { Tired } from './Tired'
import { VeryAngry } from './VeryAngry'

export const Face = {
  Angry,
  Blank,
  Calm,
  Cheeky,
  Concerned,
  Contempt,
  Cute,
  Driven,
  EatingHappy,
  EyesClosed,
  OldAged,
  Serious,
  Smile,
  Solemn,
  Suspicious,
  Tired,
  VeryAngry
}

export interface FaceType {
  Angry: React.ElementType;
  Blank: React.ElementType;
  Calm: React.ElementType;
  Cheeky: React.ElementType;
  Concerned: React.ElementType;
  Contempt: React.ElementType;
  Cute: React.ElementType;
  Driven: React.ElementType;
  EatingHappy: React.ElementType;
  EyesClosed: React.ElementType;
  OldAged: React.ElementType;
  Serious: React.ElementType;
  Smile: React.ElementType;
  Solemn: React.ElementType;
  Suspicious: React.ElementType;
  Tired: React.ElementType;
  VeryAngr: React.ElementType;
}
