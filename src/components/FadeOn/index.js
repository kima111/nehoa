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
    opacity: 0;
    display: inline-block;
    animation: ${FadeIn} linear forwards;
    animation-duration: ${(props) => props.duration};
    animation-delay: ${(props) => props.delay};
  `
  return <FadeOn {...props}>{props.children}</FadeOn>
}
