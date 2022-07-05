# react-guards

[![Build Status](https://www.travis-ci.org/wsafight/react-guards.svg?branch=main)](https://www.travis-ci.org/wsafight/react-guards)
[![NPM Version](https://badgen.net/npm/v/react-guards)](https://www.npmjs.com/package/react-guards)
[![Downloads](https://img.shields.io/npm/dt/react-guards.svg)](https://www.npmjs.com/package/react-guards)
[![license](https://img.shields.io/github/license/wsafight/react-guards.svg)](https://github.com/wsafight/react-guards/blob/master/license.md)
[![minizipped](https://img.shields.io/bundlephobia/minzip/react-guards.svg)](
https://bundlephobia.com/result?p=react-guards
)

守卫组件，可以根据权限控制组件是否能够展示。

## API

### 组件 API

| 参数 | 说明 | 类型 | 默认值 |
| :----| :---- | :---- | :---- |
| target | 目标值 | string｜string[]｜Promise｜() => Promise | null |
| current | 当前值 |   string｜string[] | null |
| errComponent | 错误时展示组件 | ReactComponent | null |
| loadingComponent | 加载时展示组件 | ReactComponent | null |

### 函数

| 名称  | 描述 | 类型 |
| :----| :---- | :---- |
|   setGlobalCurrent |  设置全局 current，不传递 current 值默认使用 globalCurrent | (current: string ｜ string[]) =>  void | 

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

// 不传递任何数据，展示组件
<ReactGuards>
    213
    <div>324</div>
    <button onClick={() => alert(0)}>213213</button>
</ReactGuards>
```

### 基础

```jsx
import {ReactGuards} from 'react-guards'

// 不展示
<ReactGuards target='213' current='22'>
    213
    <div>324</div>
    <button onClick={() => alert(0)}>213213</button>
</ReactGuards>

// 展示
<ReactGuards target='213' current='22,213'>
    213
    <div>324</div>
    <button onClick={() => alert(0)}>213213</button>
</ReactGuards>

// 不展示
<ReactGuards target='213' current={['22']}>
    213
    <div>324</div>
    <button onClick={() => alert(0)}>213213</button>
</ReactGuards>

// 展示
<ReactGuards target='213' current={['22', '213']}>
    213
    <div>324</div>
    <button onClick={() => alert(0)}>213213</button>
</ReactGuards>

// 不展示
<ReactGuards target={Promise.resolve(false)} current='22,213'>
    213
    <div>324</div>
    <button onClick={() => alert(0)}>213213</button>
</ReactGuards>

// 展示
<ReactGuards target={Promise.resolve(true)} current='22,213'>
    213
    <div>324</div>
    <button onClick={() => alert(0)}>213213</button>
</ReactGuards>

// 展示
<ReactGuards target={(current) => Promise.resolve(true)} current='22,213'>
    213
    <div>324</div>
    <button onClick={() => alert(0)}>213213</button>
</ReactGuards>
```

### 全局 current

```jsx
import {ReactGuards, setGlobalCurrent as setGlobalCurrentForReactGuard} from 'react-guards'

// 设置全局 current
setGlobalCurrentForReactGuard('22,213')

// 展示
<ReactGuards target='22'>
    213
    <div>324</div>
    <button onClick={() => alert(0)}>213213</button>
</ReactGuards>
```

### 错误和加载

```jsx
import { ReactGuards, setGlobalCurrent as setGlobalCurrentForReactGuard } from 'react-guards'

const waitThenError = (): Promise<boolean> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(false)
    }, 2000);
  })
}

const Load = () => <div>加载中</div>

const Error = () => <div>出错了</div>

<ReactGuards target={waitThenError} errComponent={Error} loadingComponent={Load}>
    213
    <div>324</div>
    <button onClick={() => alert(0)}>213213</button>
</ReactGuards>
```