# react-guards

Read this in other languages: [简体中文](https://github.com/wsafight/react-guards/blob/main/README.zh-CN.md)

[![Build Status](https://www.travis-ci.org/wsafight/react-guards.svg?branch=main)](https://www.travis-ci.org/wsafight/react-guards)
[![NPM Version](https://badgen.net/npm/v/react-guards)](https://www.npmjs.com/package/react-guards)

The guard component can control whether the component can be displayed according to the permissions.

## API

| Property | Description | Type | Default |
| :----| :---- | :---- | :---- |
| target | Current Requirement Permissions | string/Promise/() => Promise | null |
| has | all permission |  string/string[] ｜ null |
| errComponent | Display component on error | ReactComponent | null |
| loadingComponent | Display component on load | ReactComponent | null |


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

// Show child components without passing any data
<ReactGuards>
    213
    <div>324</div>
    <button onClick={() => alert(0)}>213213</button>
</ReactGuards>
```

```jsx
// none
<ReactGuards target='213' has='22'>
    213
    <div>324</div>
    <button onClick={() => alert(0)}>213213</button>
</ReactGuards>

// show
<ReactGuards target='213' has='22,213'>
    213
    <div>324</div>
    <button onClick={() => alert(0)}>213213</button>
</ReactGuards>

// none
<ReactGuards target='213' has={['22']}>
    213
    <div>324</div>
    <button onClick={() => alert(0)}>213213</button>
</ReactGuards>

// show
<ReactGuards target='213' has={['22', '213']}>
    213
    <div>324</div>
    <button onClick={() => alert(0)}>213213</button>
</ReactGuards>

// show
<ReactGuards target={Promise.resolve(true)} has='22,213'>
    213
    <div>324</div>
    <button onClick={() => alert(0)}>213213</button>
</ReactGuards>

// show
<ReactGuards target={(has) => Promise.resolve(true)} has='22,213'>
    213
    <div>324</div>
    <button onClick={() => alert(0)}>213213</button>
</ReactGuards>
```