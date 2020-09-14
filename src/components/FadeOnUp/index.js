import React from 'react'
import styled, { keyframes } from 'styled-components'
export default function index(props) {
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
    display: inline-block;
    animation: ${FadeInUp} linear;
    animation-duration: ${(props) => props.duration};
  `
  return <FadeOnUp {...props}>{props.children}</FadeOnUp>
}
