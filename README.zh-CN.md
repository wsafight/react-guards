# react-guards

[![Build Status](https://www.travis-ci.org/wsafight/react-guards.svg?branch=main)](https://www.travis-ci.org/wsafight/react-guards)
[![NPM Version](https://badgen.net/npm/v/react-guards)](https://www.npmjs.com/package/react-guards)

守卫组件，可以根据权限控制组件是否能够展示。
## API

| 参数 | 说明 | 类型 | 默认值 |
| :----| :---- | :---- | :---- |
| target | 当前需求权限 | string[]/string/Promise/() => Promise | null |
| has | 自己权限 |  string/string[] ｜ null |
| errComponent | 错误时展示组件 | ReactComponent | null |
| loadingComponent | 加载时展示组件 | ReactComponent | null |

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

```jsx
// 不展示
<ReactGuards target='213' has='22'>
    213
    <div>324</div>
    <button onClick={() => alert(0)}>213213</button>
</ReactGuards>

// 展示
<ReactGuards target='213' has='22,213'>
    213
    <div>324</div>
    <button onClick={() => alert(0)}>213213</button>
</ReactGuards>

// 不展示
<ReactGuards target='213' has={['22']}>
    213
    <div>324</div>
    <button onClick={() => alert(0)}>213213</button>
</ReactGuards>

// 展示
<ReactGuards target='213' has={['22', '213']}>
    213
    <div>324</div>
    <button onClick={() => alert(0)}>213213</button>
</ReactGuards>

// 不展示
<ReactGuards target={Promise.resolve(false)} has='22,213'>
    213
    <div>324</div>
    <button onClick={() => alert(0)}>213213</button>
</ReactGuards>

// 展示
<ReactGuards target={Promise.resolve(true)} has='22,213'>
    213
    <div>324</div>
    <button onClick={() => alert(0)}>213213</button>
</ReactGuards>

// 展示
<ReactGuards target={(has) => Promise.resolve(true)} has='22,213'>
    213
    <div>324</div>
    <button onClick={() => alert(0)}>213213</button>
</ReactGuards>
```