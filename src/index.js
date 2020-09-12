import React from 'react'
import styles from './styles.module.css'
import FadeOnComponent from './components/FadeOn/index'

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export const FadeOn = (props) => {
  return <FadeOnComponent {...props}>{props.children}</FadeOnComponent>
}
