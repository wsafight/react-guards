# react-guards

[![Build Status](https://www.travis-ci.org/wsafight/react-guards.svg?branch=main)](https://www.travis-ci.org/wsafight/react-guards)
[![NPM Version](https://badgen.net/npm/v/react-guards)](https://www.npmjs.com/package/react-guards)

组件守卫，可以根据权限提供组件是否能够展示。

## 安装

```bash
npm install react-guards
```

或者

```bash
yarn add react-guards
```

## 使用

```jsx
import {ReactGuards} from 'react-guards'

// 展示
<ReactGuards>
    213
    <div>324</div>
    <button onClick={() => alert(0)}>213213</button>
</ReactGuards>

// 不展示
<ReactGuards authority='213' allAuthority='22'>
    213
    <div>324</div>
    <button onClick={() => alert(0)}>213213</button>
</ReactGuards>

// 展示
<ReactGuards authority='213' allAuthority='22,213'>
    213
    <div>324</div>
    <button onClick={() => alert(0)}>213213</button>
</ReactGuards>

// 不展示
<ReactGuards authority='213' allAuthority={['22']}>
    213
    <div>324</div>
    <button onClick={() => alert(0)}>213213</button>
</ReactGuards>

// 展示
<ReactGuards authority='213' allAuthority={['22', '213']}>
    213
    <div>324</div>
    <button onClick={() => alert(0)}>213213</button>
</ReactGuards>

// 展示
<ReactGuards authority={Promise.resolve(true)} allAuthority='22,213'>
    213
    <div>324</div>
    <button onClick={() => alert(0)}>213213</button>
</ReactGuards>

// 展示
<ReactGuards authority={(allAuthority) => Promise.resolve(true)} allAuthority='22,213'>
    213
    <div>324</div>
    <button onClick={() => alert(0)}>213213</button>
</ReactGuards>
```