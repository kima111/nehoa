import React from 'react'

import { FadeOn, FadeOnUp, FadeOut } from 'nehoa'
import 'nehoa/dist/index.css'

const App = () => {
  return (<>
  <FadeOn duration='3s' style={{fontSize: '5em'}}>Hello World</FadeOn>
  <br />
  <FadeOnUp duration='3s'style={{fontSize: '5em'}}>Hello World</FadeOnUp>
  <br />
  <FadeOut duration='3s'style={{fontSize: '5em'}}>Hello World</FadeOut>
  </>)
}

export default App
