import React from 'react'
import styled, { keyframes } from 'styled-components'
const FadeInUp = keyframes`
from {
  opacity: 0;
  transform: translate3d(0,40px,0);
}
to {
  opacity: 1;
  transform: translate3d(0,0,0);
}
`
const FadeOnUp = styled.div`
  opacity: 0;
  display: inline-block;
  animation: ${FadeInUp} ease-out forwards;
  animation-duration: ${(props) => props.duration};
  animation-delay: ${(props) => props.delay};
`
export default function index(props) {

  return <FadeOnUp {...props}>{props.children}</FadeOnUp>
}
