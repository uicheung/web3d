---
title: Canvas
description: 'Canvas 对象是进入three.js的入口'
nav: 4
---


`Canvas`对象是你开始定义React Three Fiber Scene的地方

```jsx
import React from 'react'
import { Canvas } from '@react-three/fiber'

const App = () => (
  <Canvas>
    <pointLight position={[10, 10, 10]} />
    <mesh>
      <sphereGeometry />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  </Canvas>
)
```

## Render Props


| 属性             | 描述                                                                                                                                       | 默认值                                                           |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| children        | three.js JSX elements or regular components                                                                                                       |                                                                   |
| gl              | Props that go into the default renderer, or your own renderer. Also accepts a synchronous callback like `gl={canvas => new Renderer({ canvas })}` | `{}`                                                              |
| camera          | Props that go into the default camera, or your own `THREE.Camera`                                                                                 | `{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 5] }`          |
| shadows         | Props that go into `gl.shadowMap`, can be set true for `PCFsoft` or one of the following: 'basic', 'percentage', 'soft', 'variance'               | `false`                                                           |
| raycaster       | Props that go into the default raycaster                                                                                                          | `{}`                                                              |
| frameloop       | Render mode: always, demand, never                                                                                                                | `always`                                                          |
| resize          | Resize config, see react-use-measure's options                                                                                                    | `{ scroll: true, debounce: { scroll: 50, resize: 0 } }`           |
| orthographic    | Creates an orthographic camera                                                                                                                    | `false`                                                           |
| dpr             | Pixel-ratio, use `window.devicePixelRatio`, or automatic: [min, max]                                                                              | `[1, 2]`                                                          |
| legacy          | Enables THREE.ColorManagement.legacyMode in three r139 or later                                                                                   | `false`                                                           |
| linear          | Switch off automatic sRGB encoding and gamma correction                                                                                           | `false`                                                           |
| events          | Configuration for the event manager, as a function of state                                                                                       | `import { events } from "@react-three/fiber"`                     |
| eventSource     | The source where events are being subscribed to, HTMLElement                                                                                      | `React.MutableRefObject<HTMLElement>`, `gl.domElement.parentNode` |
| eventPrefix     | The event prefix that is cast into canvas pointer x/y events                                                                                      | `offset`                                                          |
| flat            | Use `THREE.NoToneMapping` instead of `THREE.ACESFilmicToneMapping`                                                                                | `false`                                                           |
| onCreated       | Callback after the canvas has rendered (but not yet committed)                                                                                    | `(state) => {}`                                                   |
| onPointerMissed | Response for pointer clicks that have missed any target                                                                                           | `(event) => {}`                                                   |

## Render defaults

Canvas uses [createRoot](#createroot) which will create a translucent `THREE.WebGLRenderer` with the following constructor args:

- antialias=true
- alpha=true
- powerPreference="high-performance"

and with the following properties:

- outputEncoding = THREE.sRGBEncoding
- toneMapping = THREE.ACESFilmicToneMapping

It will also create the following scene internals:

- A `THREE.Perspective` camera
- A `THREE.Orthographic` cam if `orthographic` is true
- A `THREE.PCFSoftShadowMap` if `shadows` is true
- A `THREE.Scene` (into which all the JSX is rendered) and a `THREE.Raycaster`

In recent versions of threejs, `THREE.ColorManagement.legacy` will be set to false to enable automatic conversion of colors according to the renderer's configured color space. R3F will handle texture encoding conversion. For more on this topic, see [https://threejs.org/docs/#manual/en/introduction/Color-management](https://threejs.org/docs/#manual/en/introduction/Color-management).

## Custom Canvas

R3F can render to a root, similar to how `react-dom` and all the other React renderers work. This allows you to shave off `react-dom` (~40kb), `react-use-measure` (~3kb) and, if you don't need them, `pointer-events` (~7kb) (you need to explicitly import `events` and add them to the config otherwise).

Roots have the same options and properties as `Canvas`, but you are responsible for resizing it. It requires an existing DOM `<canvas>` object into which it renders.

### CreateRoot

Creates a root targeting a canvas, rendering JSX.

```jsx
import * as THREE from 'three'
import { extend, createRoot, events } from '@react-three/fiber'

// Register the THREE namespace as native JSX elements.
// See below for notes on tree-shaking
extend(THREE)

// Create a react root
const root = createRoot(document.querySelector('canvas'))

// Configure the root, inject events optionally, set camera, etc
root.configure({ events, camera: { position: [0, 0, 50] } })

// createRoot by design is not responsive, you have to take care of resize yourself
window.addEventListener('resize', () => {
  root.configure({ size: { width: window.innerWidth, height: window.innerHeight } })
})

// Trigger resize
window.dispatchEvent(new Event('resize'))

// Render entry point
root.render(<App />)

// Unmount and dispose of memory
// root.unmount()
```

## Tree-shaking

New with v8, the underlying reconciler no longer pulls in the THREE namespace automatically.

This enables a granular catalogue which also enables tree-shaking via the `extend` API:

```jsx
import { extend, createRoot } from '@react-three/fiber'
import { Mesh, BoxGeometry, MeshStandardMaterial } from 'three'

extend({ Mesh, BoxGeometry, MeshStandardMaterial })

createRoot(canvas).render(
  <>
    <mesh>
      <boxGeometry />
      <meshStandardMaterial />
    </mesh>
  </>,
)
```

There's an [official babel plugin](https://github.com/pmndrs/react-three-babel) which will do this for you automatically:

```jsx
// In:

import { createRoot } from '@react-three/fiber'

createRoot(canvasNode).render(
  <mesh>
    <boxGeometry />
    <meshStandardMaterial />
  </mesh>,
)

// Out:

import { createRoot, extend } from '@react-three/fiber'
import { Mesh as _Mesh, BoxGeometry as _BoxGeometry, MeshStandardMaterial as _MeshStandardMaterial } from 'three'

extend({
  Mesh: _Mesh,
  BoxGeometry: _BoxGeometry,
  MeshStandardMaterial: _MeshStandardMaterial,
})

createRoot(canvasNode).render(
  <mesh>
    <boxGeometry />
    <meshStandardMaterial />
  </mesh>,
)
```