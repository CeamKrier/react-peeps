import React, { CSSProperties } from 'react'
import '../src/css/index.css' // relative to the lib folder

import { AccessoryType } from './accessories/z_options'

interface PeepProps {
  style: CSSProperties;
  accessory: AccessoryType;
}

const Peep: React.FC<PeepProps> = ({style, accessory, body, face, facialHair, hair, viewBox}) => {

  return (
    <React.Fragment>
      <h3>{text}</h3>
    </React.Fragment>
  )
}

export const CirclePeep: React.FC<PeepProps> = ({style, accessory, body, face, facialHair, hair, viewBox, circleStyle}) => {
  return (
    <React.Fragment>
      <h3>{text}</h3>
    </React.Fragment>
  )
}

export default Peep