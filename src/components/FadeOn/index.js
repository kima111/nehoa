import React from 'react'
import styled, { keyframes } from 'styled-components'
export default function index(props) {
  const FadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`
  const FadeOn = styled.div`
    display: inline-block;
    animation: ${FadeIn} linear;
    animation-duration: ${(props) => props.duration};
  `
  return <FadeOn {...props}>{props.children}</FadeOn>
}
