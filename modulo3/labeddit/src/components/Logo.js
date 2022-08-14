import React from 'react'
import VectorBottomLeft from '../assets/VectorBottomLeft.png'
import VectorBottomRight from '../assets/VectorBottomRight.png'
import VectorTopLeft from '../assets/VectorTopLeft.png'
import VectorTopRight from '../assets/VectorTopRight.png'
import Styled from 'styled-components'

export default function Logo() {
  return (
    <div>
      <TopLeft src={VectorTopLeft} />
      <TopRight src={VectorTopRight} />
      <BottomLeft src={VectorBottomLeft} />
      <BottomRight src={VectorBottomRight} />
    </div>
  )
}
const BottomRight = Styled.img`
position: absolute;
left: 48.83%;
right: 41.36%;
top: 14.9%;
`

const BottomLeft = Styled.img`
position: absolute;
left: 39.02%;
right: 51.17%;
top: 14.9%;
`

const TopLeft = Styled.img`
position: absolute;
left: 39.02%;
right: 51.17%;
top: 10.36%;
`
const TopRight = Styled.img`
position: absolute;
left: 48.83%;
right: 41.36%;
top: 10.36%;
`
