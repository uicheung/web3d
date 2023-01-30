---
title: 介绍
description: React-three-fiber是基于three.js的react渲染器.
nav: 0
---


# 介绍
React-three-fiber 是一个基于three.js的React渲染器

用可重复使用的、独立的组件声明性地构建场景，这些组件对状态做出反应，易于交互，并且可以参与react的生态系统。
```
npm install three @types/three @react-three/fiber
```
## 它有局限性吗？
没有,在Threejs中运行的,在这里正常运行,没有例外。
它比普通的Threejs慢吗？
不，没有开销。组件在React外部渲染。由于Reacts的调度能力，它在规模上优于Threejs。

## 它能跟上Threejs的频繁功能更新吗？
对，它只在JSX中表达Threejs，`＜mesh/＞`动态地转换为`new THREE.mesh()`。
如果新的Threejs版本添加、删除或更改了功能，它将立即提供给您，而不依赖于此库的更新。

## 举个例子？
<table>
  <tbody>
    <tr>
      <td style="width:50%">
        制作一个具有自己状态、对用户输入做出反应并参与渲染循环。（现场演示）。
        <br/>
        两个旋转的橙色方块，鼠标悬停时变成紫色 (<a href="https://codesandbox.io/s/rrppl0y8l4?file=/src/App.js">在线🌰</a>).
      </td>
      <td style="width:50%">
        <a href="https://codesandbox.io/s/rrppl0y8l4">
          <img
            src="https://github.com/pmndrs/react-three-fiber/raw/master/docs/basic-app.gif"
            alt="Two spinning orange cubes that turn purple on mouse over"
            width="252px"
            height="60px"
          />
        </a>
      </td>
    </tr>
  </tbody>
</table>

```jsx
import { createRoot } from 'react-dom/client'
import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

function Box(props) {
  // 该引用可以使我们能够直接访问网格对象
  const mesh = useRef()
  // 为悬停和活动状态设置状态
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // 将该组件订阅到渲染循环，每帧旋转网格
  useFrame((state, delta) => (mesh.current.rotation.x += delta))
  // 返回视图,用JSX来表示常规的three.js元素
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

createRoot(document.getElementById('root')).render(
  <Canvas>
    <ambientLight />
    <pointLight position={[10, 10, 10]} />
    <Box position={[-1.2, 0, 0]} />
    <Box position={[1.2, 0, 0]} />
  </Canvas>,
)
```

<details>
  <summary>用TypeScript的例子</summary>

```bash
npm install @types/three
```

```tsx
import * as THREE from 'three'
import { createRoot } from 'react-dom/client'
import React, { useRef, useState } from 'react'
import { Canvas, useFrame, ThreeElements } from '@react-three/fiber'

function Box(props: ThreeElements['mesh']) {
  const mesh = useRef<THREE.Mesh>(null!)
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  useFrame((state, delta) => (mesh.current.rotation.x += delta))
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

createRoot(document.getElementById('root')).render(
  <Canvas>
    <ambientLight />
    <pointLight position={[10, 10, 10]} />
    <Box position={[-1.2, 0, 0]} />
    <Box position={[1.2, 0, 0]} />
  </Canvas>,
)
```

Live demo: https://codesandbox.io/s/icy-tree-brnsm?file=/src/App.tsx

</details>

<details>
  <summary>用React Native的例子</summary>

For installation instructions see [react native installation instructions](https://docs.pmnd.rs/react-three-fiber/getting-started/installation#react-native).

```jsx
import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber/native'

function Box(props) {
  const mesh = useRef(null)
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  useFrame((state, delta) => (mesh.current.rotation.x += delta))
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

</details>

## 在这之前

你需要精通React和Threejs，然后才能开始。如果您不熟悉React，请咨询官方文档[React docs](https://reactjs.org/docs/getting-started.html), 特别是hooks [the section about hooks](https://reactjs.org/docs/hooks-reference.html). 至于Threejs，请确保至少浏览以下链接：

1. Make sure you have a [basic grasp of Threejs](https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene). Keep that site open.
2. When you know what a scene is, a camera, mesh, geometry, material, fork the [demo above](https://github.com/pmndrs/react-three-fiber#what-does-it-look-like).
3. [Look up](https://threejs.org/docs/index.html#api/en/objects/Mesh) the JSX elements that you see (mesh, ambientLight, etc), _all_ threejs exports are native to three-fiber.
4. Try changing some values, scroll through our [API](https://docs.pmnd.rs/react-three-fiber) to see what the various settings and hooks do.

Some helpful material:

- [Threejs-docs](https://threejs.org/docs) and [examples](https://threejs.org/examples)
- [Discover Threejs](https://discoverthreejs.com), especially the [Tips and Tricks](https://discoverthreejs.com/tips-and-tricks) chapter for best practices
- [Bruno Simons Threejs Jouney](https://threejs-journey.com), arguably the best learning resource, now includes a full [R3F chapter](https://threejs-journey.com/lessons/what-are-react-and-react-three-fiber)

<a href="https://threejs-journey.com">
  <img src="https://github.com/pmndrs/react-three-fiber/raw/master/docs/banner-journey.jpg" />
</a>

## 生态系统
围绕着three-fiber，有一个充满活力和广泛的生态系统，充满了库、插件和抽象概念。

- [`@react-three/drei`](https://github.com/pmndrs/drei) &ndash; 有用的插件，这本身就是一个生态系统
- [`@react-three/gltfjsx`](https://github.com/pmndrs/gltfjsx) &ndash;转换GLTFs到 JSX组建
- [`@react-three/postprocessing`](https://github.com/pmndrs/react-postprocessing) &ndash; post-processing effects
- [`@react-three/test-renderer`](https://github.com/pmndrs/react-three-fiber/tree/master/packages/test-renderer) &ndash; for unit tests in node
- [`@react-three/flex`](https://github.com/pmndrs/react-three-flex) &ndash; flexbox for react-three-fiber
- [`@react-three/xr`](https://github.com/pmndrs/react-xr) &ndash; VR/AR controllers and events
- [`@react-three/csg`](https://github.com/pmndrs/react-three-csg) &ndash; constructive solid geometry
- [`@react-three/rapier`](https://github.com/pmndrs/react-three-rapier) &ndash; 3D physics using Rapier
- [`@react-three/cannon`](https://github.com/pmndrs/use-cannon) &ndash; 3D physics using Cannon
- [`@react-three/p2`](https://github.com/pmndrs/use-p2) &ndash; 2D physics using P2
- [`@react-three/a11y`](https://github.com/pmndrs/react-three-a11y) &ndash; real a11y for your scene
- [`@react-three/gpu-pathtracer`](https://github.com/pmndrs/react-three-gpu-pathtracer) &ndash; realistic path tracing
- [`create-r3f-app next`](https://github.com/pmndrs/react-three-next) &ndash; nextjs starter
- [`lamina`](https://github.com/pmndrs/lamina) &ndash; layer based shader materials
- [`zustand`](https://github.com/pmndrs/zustand) &ndash; flux based state management
- [`jotai`](https://github.com/pmndrs/jotai) &ndash; atoms based state management
- [`valtio`](https://github.com/pmndrs/valtio) &ndash; proxy based state management
- [`react-spring`](https://github.com/pmndrs/react-spring) &ndash; a spring-physics-based animation library
- [`framer-motion-3d`](https://www.framer.com/docs/three-introduction/) &ndash; framer motion, a popular animation library
- [`use-gesture`](https://github.com/pmndrs/react-use-gesture) &ndash; mouse/touch gestures
- [`leva`](https://github.com/pmndrs/leva) &ndash; create GUI controls in seconds
- [`maath`](https://github.com/pmndrs/maath) &ndash; a kitchen sink for math helpers
- [`miniplex`](https://github.com/hmans/miniplex) &ndash; ECS (entity management system)
- [`composer-suite`](https://github.com/hmans/composer-suite) &ndash; composing shaders, particles, effects and game mechanics

## 怎么赞助

If you like this project, please consider helping out. All contributions are welcome as well as donations to [Opencollective](https://opencollective.com/react-three-fiber), or in crypto `BTC: 36fuguTPxGCNnYZSRdgdh6Ea94brCAjMbH`, `ETH: 0x6E3f79Ea1d0dcedeb33D3fC6c34d2B1f156F2682`.

## 赞助人

Thank you to all our backers! 🙏

<a href="https://opencollective.com/react-three-fiber#backers" target="_blank">
  <img src="https://opencollective.com/react-three-fiber/backers.svg?width=890" />
</a>

## 代码贡献者

This project exists thanks to all the people who contribute.

<a href="https://github.com/pmndrs/react-three-fiber/graphs/contributors">
  <img src="https://opencollective.com/react-three-fiber/contributors.svg?width=890" />
</a>






