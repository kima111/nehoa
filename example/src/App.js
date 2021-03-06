import React from 'react'

import { FadeOn, FadeOnUp, FadeOut, FadeOnDown, FadeOnUpChar, FadeOnDownChar } from 'nehoa'
import 'nehoa/dist/index.css'

const App = () => {
  return (<>
  <FadeOn duration='3s' delay='3s' style={{fontSize: '2em'}}>Hello World</FadeOn>
  <br />
  <FadeOut duration='3s'delay='3s' style={{fontSize: '2em'}}>Hello World</FadeOut>
  <br />
  <FadeOnDown duration='3s'delay='3s' style={{fontSize: '2em'}}>Hello World</FadeOnDown>
  <br />
  <FadeOnUp duration='3s'delay='3s' style={{fontSize: '2em'}}>Hello World</FadeOnUp>
  <br />
  <br />
  <br />
  <br />
  <FadeOnUpChar text='Hello World' style={{fontSize: '2em'}} />
  <br />
  <br />
  <br />
  <br />
  <FadeOnDownChar text='Hello World' style={{fontSize: '2em'}}/>
  </>)
}

export default App
