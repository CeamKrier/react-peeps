import React from 'react'

interface HeadProps {
  hair?: React.ElementType;
  face?: React.ElementType;
  facialHair?: React.ElementType;
  accessory?: React.ElementType;
}

const index: React.FC<HeadProps> = ({ hair, face, facialHair, accessory }) => {
  return (
    <g id='Head' transform='translate(225 0)'>
      <g id='HAIR'>{hair && React.createElement(hair)}</g>
      <g id='FACE' transform='translate(159 186)'>
        {face && React.createElement(face)}
      </g>
      <g id='FACIAL-HAIR' transform='translate(123 338)'>
        {facialHair && React.createElement(facialHair)}
      </g>
      <g id='ACCESORIES' transform='translate(47 241)'>
        {accessory && React.createElement(accessory)}
      </g>
    </g>
  )
}

export default index
