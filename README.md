<link rel="stylesheet" href="md.css">

# Nehoa

> UI Library for React

[![NPM](https://img.shields.io/npm/v/nehoa.svg)](https://www.npmjs.com/package/nehoa) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)


## Description
:desert_island: **Nehoa** (nĕ-hō'-a), v.
 Is a Hawaiian word that means to be strong; to be able; to be bold. Like the name and the state, this is a React Library consisting of bold, useful, and beautiful tools/effects to help you create a stunning site. Currently this is just the begining, and the component library just consists of text effects for now, but more is on the way. As this is a React library, a peer dependency is React. In addition this library has a dependency on Styled Components. 

## Install

```bash
npm install --save nehoa
```

## Text Effects

| Title | Description | Import | Usage | Example |
|-------------|-------------|--------|-------|---------|
|**FadeOnUpChar**|The FadeOnUpChar Component allows for text to be faded up onto screen, and allows custom styling.|`import {FadeOnUpChar} from 'nehoa'`|`<FadeOnUpChar text='Hello World' style={{fontSize: '2em'}} />`|![image info](./images/FadeOnUpChar.gif)|
|**FadeOnDownChar**|The FadeOnDownChar Component allows for text to be faded down onto screen, and allows custom styling. |`import {FadeOnDownChar} from 'nehoa'`|`<FadeOnDownChar text='Hello World' style={{fontSize: '2em'}}/>`|![image info](./images/FadeOnDownChar.gif)|
|**FadeOn**|The FadeOn Component allows for a custom duration or delay on fade onto the screen.|`import {FadeOn} from 'nehoa'`|`<FadeOn duration='3s' delay='3s' style={{fontSize: '2em'}}>Hello World</FadeOn>`|![image info](./images/FadeOn.gif)|
|**FadeOut**|The FadeOut Component allows for a custom duration or delay on fading out the screen.|`import {FadeOut} from 'nehoa'`|`<FadeOut duration='3s' delay='3s' style={{fontSize: '2em'}}>Hello World</FadeOut>`|![image info](./images/FadeOut.gif)|
|**FadeOnUp**|The FadeOnUp Component allows for a custom duration or delay on fade and up onto the screen.|`import {FadeOnUp} from 'nehoa'`|`<FadeOnUp duration='3s' delay='3s' style={{fontSize: '2em'}}>Hello World</FadeOnUp>`|![image info](./images/FadeOnUp.gif)|
|**FadeOnDown**|The FadeOnDown Component allows for a custom duration or delay on fade and down onto the screen.|`import {FadeOnDown} from 'nehoa'`|`<FadeOnDown duration='3s' delay='3s' style={{fontSize: '2em'}}>Hello World</FadeOnDown>`|![image info](./images/FadeOnDown.gif)|


## License

MIT © [kima111](https://github.com/kima111)
