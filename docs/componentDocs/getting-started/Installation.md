---
title: 安装
description: Learn how to install react-three-fiber
nav: 1
---

# 安装

```bash
npm install three @react-three/fiber
```

> Fiber与React v18.0.0+兼容，可与ReactDOM和React Native配合使用。

开始使用React Three Fiber并不像你想象的那么难，但各种框架可能需要特别注意。
我们为每个流行的框架提供了入门指南：

- Create React App
- Next.js
- CDN w/o build tools
- React Native

如果你只是想试一试，就把这个复制到你自己仓库 [example on codesandbox](https://codesandbox.io/s/rrppl0y8l4?file=/src/App.js)!

## 创建 React App

`create-react-app` 会开箱即用，这里没什么特别的！

```bash
# Create app
npx create-react-app my-app
cd my-app

# Install dependencies
npm install three @react-three/fiber

# Start
npm run start
```

## Next.js

它应该可以开箱即用，但在three.js生态系统中会遇到未经翻译的插件，在这种情况下，您可以安装`next-transpile-modules`模块：

```bash
npm install next-transpile-modules --save-dev
```

然后，将此添加到 `next.config.js`

```js
const withTM = require('next-transpile-modules')(['three'])
module.exports = withTM()
```

请务必查看 [official next.js starter](https://github.com/pmndrs/react-three-next), too!

## 没有构建工具

您可以将React Three Fiber与[esm.sh](https://esm.sh)中支持浏览器的ES模块一起使用以及由[htm](https://github.com/developit/htm)支持的类似JSX的语法.

```jsx
import ReactDOM from 'https://esm.sh/react-dom'
import React, { useRef, useState } from 'https://esm.sh/react'
import { Canvas, useFrame } from 'https://esm.sh/@react-three/fiber'
import htm from 'https://esm.sh/htm'

const html = htm.bind(React.createElement)
ReactDOM.render(html`<${Canvas}>...<//>`, document.getElementById('root'))
```

<details>
<summary>完整例子</summary>

```jsx
import ReactDOM from 'https://esm.sh/react-dom'
import React, { useRef, useState } from 'https://esm.sh/react'
import { Canvas, useFrame } from 'https://esm.sh/@react-three/fiber'
import htm from 'https://esm.sh/htm'

const html = htm.bind(React.createElement)

function Box(props) {
  const mesh = useRef()
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))
  return html` <mesh
    ...${props}
    ref=${mesh}
    scale=${active ? 1.5 : 1}
    onClick=${() => setActive(!active)}
    onPointerOver=${() => setHover(true)}
    onPointerOut=${() => setHover(false)}
  >
    <boxGeometry args=${[1, 1, 1]} />
    <meshStandardMaterial color=${hovered ? 'hotpink' : 'orange'} />
  </mesh>`
}

ReactDOM.render(
  html` <${Canvas}>
    <ambientLight />
    <pointLight position=${[10, 10, 10]} />
    <${Box} position=${[-1.2, 0, 0]} />
    <${Box} position=${[1.2, 0, 0]} />
  <//>`,
  document.getElementById('root'),
)
```

</details>

## React Native

R3F v8 adds support for react-native and can be imported from `@react-three/fiber/native`. We use `expo-gl` and `expo-asset` under the hood for WebGL2 bindings and ensuring interplay between Metro and threejs loaders.

To get started, create an app via `expo` or `react-native`:

```bash
# Create a managed/bare app
npx create-expo-app
cd my-app

# or

# Create and link bare app
npx react-native init my-app
npx install-expo-modules@latest
cd my-app
```

Then install dependencies (for manual installation or migration, see [expo modules installation](https://docs.expo.dev/bare/installing-expo-modules)):

```bash
# Automatically install
expo install expo-gl

# Install NPM dependencies
npm install three @react-three/fiber
```

Some configuration may be required to tell the Metro bundler about your assets if you use `useLoader` or Drei abstractions like `useGLTF` and `useTexture`:

```js
// metro.config.js
module.exports = {
  resolver: {
    sourceExts: ['js', 'jsx', 'json', 'ts', 'tsx', 'cjs'],
    assetExts: ['glb', 'gltf', 'png', 'jpg'],
  },
}
```

R3F's API is completely x-platform, so you can use [events](https://docs.pmnd.rs/react-three-fiber/api/events) and [hooks](https://docs.pmnd.rs/react-three-fiber/api/hooks) just as you would on the web.

Just make sure to import from `@react-three/fiber/native` or `@react-three/drei/native` to use their native targets.

```jsx
import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber/native'

function Box(props) {
  const mesh = useRef(null)
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  useFrame((state, delta) => (mesh.current.rotation.x += 0.01))
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

export default function App() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
    </Canvas>
  )
}
```
