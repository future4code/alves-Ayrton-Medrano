import React from 'react'
import VectorBottomLeft from '../../assets/VectorBottomLeft.png'
import VectorBottomRight from '../../assets/VectorBottomRight.png'
import VectorTopLeft from '../../assets/VectorTopLeft.png'
import VectorTopRight from '../../assets/VectorTopRight.png'
import Styled from 'styled-components'

export default function LogoHeader() {
  return (
    <>
      <TopLeft src={VectorTopLeft} />
      <TopRight src={VectorTopRight} />
      <BottomLeft src={VectorBottomLeft} />
      <BottomRight src={VectorBottomRight} />
    </>
  )
}

const BottomRight = Styled.img`
position: absolute;
left: 50%;
right: 46.73%;
top: 4.48%;
bottom: 90.98%;
width: 14.01px;
height: 14.31px;

`

const BottomLeft = Styled.img`
position: absolute;
left: 46.73%;
right: 50%;
top: 4.48%;
bottom: 90.98%;
width: 14.01px;
height: 14.31px;
`

const TopLeft = Styled.img`
position: absolute;
left: 46.73%;
right: 50%;
top: 2.93%;
bottom: 92.52%;
width: 14.01px;
height: 14.31px;
`
const TopRight = Styled.img`
position: absolute;
left: 50%;
right: 46.73%;
top: 2.93%;
bottom: 92.52%;
width: 14.01px;
height: 14.31px;
`
