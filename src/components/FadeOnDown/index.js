import React from 'react'
import styled, { keyframes } from 'styled-components'
const FadeInDown = keyframes`
from {
  opacity: 0;
  transform: translate3d(0,-40px,0);
}
to {
  opacity: 1;
  transform: translate3d(0,0,0);
}
`
const FadeOnDown = styled.div`
opacity: 0;
display: inline-block;
animation: ${FadeInDown} ease-out forwards;
animation-duration: ${(props) => props.duration};
animation-delay: ${(props) => props.delay};
`
export default function index(props) {


  return <FadeOnDown {...props}>{props.children}</FadeOnDown>
}
