# react-guards

Read this in other languages: [简体中文](https://github.com/wsafight/react-guards/blob/main/README.zh-CN.md)

[![Build Status](https://www.travis-ci.org/wsafight/react-guards.svg?branch=main)](https://www.travis-ci.org/wsafight/react-guards)
[![NPM Version](https://badgen.net/npm/v/react-guards)](https://www.npmjs.com/package/react-guards)

Component guarding ability, which can provide whether the component is displayed according to the permission.

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

// show
<ReactGuards>
    213
    <div>324</div>
    <button onClick={() => alert(0)}>213213</button>
</ReactGuards>

// none
<ReactGuards authority='213' allAuthority='22'>
    213
    <div>324</div>
    <button onClick={() => alert(0)}>213213</button>
</ReactGuards>

// show
<ReactGuards authority='213' allAuthority='22,213'>
    213
    <div>324</div>
    <button onClick={() => alert(0)}>213213</button>
</ReactGuards>

// none
<ReactGuards authority='213' allAuthority={['22']}>
    213
    <div>324</div>
    <button onClick={() => alert(0)}>213213</button>
</ReactGuards>

// show
<ReactGuards authority='213' allAuthority={['22', '213']}>
    213
    <div>324</div>
    <button onClick={() => alert(0)}>213213</button>
</ReactGuards>

// show
<ReactGuards authority={Promise.resolve(true)} allAuthority='22,213'>
    213
    <div>324</div>
    <button onClick={() => alert(0)}>213213</button>
</ReactGuards>

// show
<ReactGuards authority={(allAuthority) => Promise.resolve(true)} allAuthority='22,213'>
    213
    <div>324</div>
    <button onClick={() => alert(0)}>213213</button>
</ReactGuards>
```