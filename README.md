# react-guards

Read this in other languages: [简体中文](https://github.com/wsafight/react-guards/blob/main/README.zh-CN.md)

[![Build Status](https://www.travis-ci.org/wsafight/react-guards.svg?branch=main)](https://www.travis-ci.org/wsafight/react-guards)
[![NPM Version](https://badgen.net/npm/v/react-guards)](https://www.npmjs.com/package/react-guards)
[![Downloads](https://img.shields.io/npm/dt/react-guards.svg)](https://www.npmjs.com/package/react-guards)
[![license](https://img.shields.io/github/license/wsafight/react-guards.svg)](https://github.com/wsafight/react-guards/blob/master/license.md)
[![minizipped](https://img.shields.io/bundlephobia/minzip/react-guards.svg)](
https://bundlephobia.com/result?p=react-guards
)


The guard component can control whether the component can be displayed according to the permissions.

## API

### Component API

| Property | Description | Type | Default |
| :----| :---- | :---- | :---- |
| target | target value | string｜string[]｜Promise｜() => Promise | null |
| current | current value |  string｜string[] | null |
| errComponent | Display component on error | ReactComponent | null |
| loadingComponent | Display component on load | ReactComponent | null |

### Function

| Name  | Description | Type |
| :----| :---- | :---- |
|   setGlobalCurrent |  Set global current, do not pass current value by default use globalCurrent | (current: string ｜ string[]) =>  void | 
|   canPassGuard | Determine whether it can pass the guard based on the passed data | ({target, current}) => Promise<boolean> | 

## Installation

```bash
npm install react-guards
```

or

```bash
yarn add react-guards
```

## Usage

```jsx
import {ReactGuards} from 'react-guards'

// Show components without passing any data
<ReactGuards>
    213
    <div>324</div>
    <button onClick={() => alert(0)}>213213</button>
</ReactGuards>
```

### Basic

```jsx
import {ReactGuards} from 'react-guards'

// none
<ReactGuards target='213' current='22'>
    213
    <div>324</div>
    <button onClick={() => alert(0)}>213213</button>
</ReactGuards>

// show
<ReactGuards target='213' current='22,213'>
    213
    <div>324</div>
    <button onClick={() => alert(0)}>213213</button>
</ReactGuards>

// none
<ReactGuards target='213' current={['22']}>
    213
    <div>324</div>
    <button onClick={() => alert(0)}>213213</button>
</ReactGuards>

// show
<ReactGuards target='213' current={['22', '213']}>
    213
    <div>324</div>
    <button onClick={() => alert(0)}>213213</button>
</ReactGuards>

// none
<ReactGuards target={Promise.resolve(false)} current='22,213'>
    213
    <div>324</div>
    <button onClick={() => alert(0)}>213213</button>
</ReactGuards>

// show
<ReactGuards target={Promise.resolve(true)} current='22,213'>
    213
    <div>324</div>
    <button onClick={() => alert(0)}>213213</button>
</ReactGuards>

// show
<ReactGuards target={(current) => Promise.resolve(true)} current='22,213'>
    213
    <div>324</div>
    <button onClick={() => alert(0)}>213213</button>
</ReactGuards>
```

### Global current

```jsx
import { ReactGuards, setGlobalCurrent as setGlobalCurrentForReactGuard } from 'react-guards'

setGlobalCurrentForReactGuard('22,213')

// show
<ReactGuards target='22'>
    213
    <div>324</div>
    <button onClick={() => alert(0)}>213213</button>
</ReactGuards>
```

### error and loading

```jsx
import { ReactGuards, setGlobalCurrent as setGlobalCurrentForReactGuard } from 'react-guards'

const waitThenError = (): Promise<boolean> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(false)
    }, 2000);
  })
}

const Load = () => <div>Loading</div>

const Error = () => <div>Error</div>

<ReactGuards target={waitThenError} errComponent={Error} loadingComponent={Load}>
    213
    <div>324</div>
    <button onClick={() => alert(0)}>213213</button>
</ReactGuards>
```