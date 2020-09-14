import React from 'react'

import { FadeOn, FadeOnUp } from 'nehoa'
import 'nehoa/dist/index.css'

const App = () => {
  return (<>
  {/* <FadeOn duration='3s' style={{fontSize: '5em'}}>Hello World</FadeOn>
  <br /> */}
  <FadeOnUp duration='3s'style={{fontSize: '5em'}}>Hello World</FadeOnUp>
  </>)
}

export default App
