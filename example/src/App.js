import React from 'react'

import { ExampleComponent, FadeOn } from 'nehoa'
import 'nehoa/dist/index.css'

const App = () => {
  return <FadeOn duration='3s' style={{fontSize: '5em'}}>Hello World</FadeOn>
}

export default App
