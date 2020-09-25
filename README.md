# nehoa

> UI Library for React

[![NPM](https://img.shields.io/npm/v/nehoa.svg)](https://www.npmjs.com/package/nehoa) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save nehoa
```

## Usage

### FadeOnUpChar

The FadeOnUpChar Component allows for text to be faded up onto screen, and allows custom styling. 

![image info](./images/FadeOnUpChar.gif)

```jsx
import React, { Component } from 'react'

import {FadeOnUpChar} from 'nehoa'

const App = () => {
  return <FadeOnUpChar text='Hello World' style={{fontSize: '2em'}} />
}
```
### FadeOnDownChar

The FadeOnUpChar Component allows for text to be faded up onto screen, and allows custom styling. 

![image info](./images/FadeOnDownChar.gif)

```jsx
import React, { Component } from 'react'

import {FadeOnDownChar} from 'nehoa'

const App = () => {
  return <FadeOnDownChar text='Hello World' style={{fontSize: '2em'}} />
}
```

### FadeOn 

The FadeOn Component allows for a custom duration or delay on fade onto the screen. 

![image info](./images/FadeOn.gif)

```jsx
import React, { Component } from 'react'

import {FadeOn} from 'nehoa'

const App = () => {
  return <FadeOn duration='3s' delay='3s' style={{fontSize: '5em'}}>Hello World</FadeOn>
}
```

### FadeOut 

The FadeOut Component allows for a custom duration or delay on fading out the screen. 

![image info](./images/FadeOut.gif)

```jsx
import React, { Component } from 'react'

import {FadeOut} from 'nehoa'

const App = () => {
  return <FadeOut duration='3s' delay='3s' style={{fontSize: '5em'}}>Hello World</FadeOut>
}
```

### FadeOnUp 

The FadeOnUp Component allows for a custom duration or delay on fade and up onto the screen. 

![image info](./images/FadeOnUp.gif)

```jsx
import React, { Component } from 'react'

import {FadeOnUp} from 'nehoa'

const App = () => {
  return <FadeOnUp duration='3s' delay='3s' style={{fontSize: '5em'}}>Hello World</FadeOnUp>
}
```

### FadeOnDown

The FadeOnDown Component allows for a custom duration or delay on fade and down onto the screen. 

![image info](./images/FadeOnDown.gif)

```jsx
import React, { Component } from 'react'

import {FadeOnDown} from 'nehoa'

const App = () => {
  return <FadeOnDown duration='3s' delay='3s' style={{fontSize: '5em'}}>Hello World</FadeOnDown>
}
```

## License

MIT © [kima111](https://github.com/kima111)
