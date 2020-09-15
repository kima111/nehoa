import React from 'react'
import styled, { keyframes } from 'styled-components'
export default function index(props) {
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
    display: inline-block;
    animation: ${FadeInDown} linear;
    animation-duration: ${(props) => props.duration};
  `
  return <FadeOnDown {...props}>{props.children}</FadeOnDown>
}
