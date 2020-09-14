# nehoa

> UI Library for React

[![NPM](https://img.shields.io/npm/v/nehoa.svg)](https://www.npmjs.com/package/nehoa) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save nehoa
```

## Usage

### FadeOn 

The FadeOn Component allows for a custom duration on fade onto the screen. 

![image info](./images/FadeOn.gif)

```jsx
import React, { Component } from 'react'

import {FadeOn} from 'nehoa'

const App = () => {
  return <FadeOn duration='3s' style={{fontSize: '5em'}}>Hello World</FadeOn>
}
```

### FadeOnUp 

The FadeOnUp Component allows for a custom duration on fade and up onto the screen. 

![image info](./images/FadeOnUp.gif)

```jsx
import React, { Component } from 'react'

import {FadeOnUp} from 'nehoa'

const App = () => {
  return <FadeOnUp duration='3s' style={{fontSize: '5em'}}>Hello World</FadeOnUp>
}
```

## License

MIT © [kima111](https://github.com/kima111)
