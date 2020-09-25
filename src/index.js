import React from 'react'
import styles from './styles.module.css'
import FadeOnComponent from './components/FadeOn/index'
import FadeOnUpComponent from './components/FadeOnUp/index'
import FadeOutComponent from './components/FadeOut/index'
import FadeOnDownComponent from './components/FadeOnDown/index'
import FadeOnUpCharComponent from './components/FadeOnPerLetter'
import FadeOnDownCharComponent from './components/FadeDownPerLetter'

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export const FadeOn = (props) => {
  return <FadeOnComponent {...props}>{props.children}</FadeOnComponent>
}

export const FadeOnUp = (props) => {
  return <FadeOnUpComponent {...props}>{props.children}</FadeOnUpComponent>
}

export const FadeOnDown = (props) => {
  return <FadeOnDownComponent {...props}>{props.children}</FadeOnDownComponent>
}

export const FadeOut = (props) => {
  return <FadeOutComponent {...props}>{props.children}</FadeOutComponent>
}

export const FadeOnUpChar = (props) => {
  return (
    <FadeOnUpCharComponent {...props}>{props.children}</FadeOnUpCharComponent>
  )
}

export const FadeOnDownChar = (props) => {
  return (
    <FadeOnDownCharComponent {...props}>{props.children}</FadeOnDownCharComponent>
  )
}
