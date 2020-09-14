# nehoa

> Made with create-react-library

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

## License

MIT © [kima111](https://github.com/kima111)
