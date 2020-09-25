import React from 'react'
import styled, { keyframes } from 'styled-components'

export default function index(props) {
  function getRandomDuration() {
    return 500 * Math.floor(Math.random() * 5 + 1)
  }
  function getRandomDelay() {
    return 100 * Math.floor(Math.random() * 2 + 0.25)
  }

  const text = props.text
  const splitText = text.split('')
  const FadeInUp = keyframes`
  from {
    opacity: 0;
    filter: blur(15px);
    transform: translate3d(0,-40px,0);
  }
  to {
    opacity: 1;
    filter: blur(0px);
    transform: translate3d(0,0,0);
  }
`
  const FadeOnUp = styled.div`
    display: inline-block;
    animation: ${FadeInUp} ease-out;
    animation-duration: ${(props) => props.duration};
    animation-delay: ${(props) => props.delay};
  `
  return (
    <span {...props}>
      {splitText.map((item) =>
        item === ' ' ? (
          <span>&nbsp;</span>
        ) : (
          <FadeOnUp
            key={item}
            duration={getRandomDuration() + 'ms'}
            delay={getRandomDelay() + 'ms'}
          >
            <span>{item}</span>
          </FadeOnUp>
        )
      )}
    </span>
  )
}
