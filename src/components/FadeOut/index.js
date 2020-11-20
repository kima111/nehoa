import React from 'react'
import styled, { keyframes } from 'styled-components'
const FadeOutStyle = keyframes`
from {
  opacity: 1;
}
to {
  opacity: 0;
}
`
const FadeOut = styled.div`
  display: inline-block;
  animation: ${FadeOutStyle} linear forwards;
  animation-duration: ${(props) => props.duration};
  animation-delay: ${(props) => props.delay};
`
export default function index(props) {

  return <FadeOut {...props}>{props.children}</FadeOut>
}
