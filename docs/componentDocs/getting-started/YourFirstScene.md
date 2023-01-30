---
title: 第一个场景
description: 本指南将帮助您设置第一个React Three Fiber场景，并向您介绍其核心概念。
nav: 2
---

本教程将假设您具备一些React知识。

## 设置画布

我们首先从`@react-three/fiber`导入` <Canvas />`组件，并将其放入React树中。

```jsx
import ReactDOM from 'react-dom'
import { Canvas } from '@react-three/fiber'

function App() {
  return (
    <div id="canvas-container">
      <Canvas />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
```

画布组件在后台执行一些重要的设置工作：

- 它设置了一个 **场景** 和一个 **相机**，渲染所需的基本构建块
- 它每一帧渲染场景，你不需要一个传统的渲染循环

> Canvas会响应以适合父节点，因此您可以通过更改父节点的宽度和高度，在本例代码中为 #canvas-container。



## 添加Mesh组建 Adding a Mesh Component

为了在场景中看到实际的东西，我们将添加一个小写的`<mesh />`元素，它直接等价于new THREE.Mesh（）。
```js
<Canvas>
  <mesh />
```

>  请注意，我们不需要导入任何内容，所有three.js对象都将被视为原生JSX元素，可以像平时一样在常规ReactDOM中只写&lt;div /&gt;或&lt;span /&gt;。 一般的three.js中属性的可以在Fibel组件中用驼峰规则。

[`Mesh`](https://threejs.org/docs/#api/en/objects/Mesh)是three.js中的一个基本场景对象，它用于保存在三维空间中表示形状所需的几何体和材质。我们将使用**BoxGeometry**和**MeshStandardMaterial**创建一个新的网格，这些网格将[自动附加](https://docs.pmnd.rs/react-three-fiber/api/objects#attach) 到其父对象下。


```jsx
<Canvas>
  <mesh>
    <boxGeometry />
    <meshStandardMaterial />
  </mesh>
```

让我们暂停一下，以了解这里到底发生了什么。我们刚刚编写的代码相当于这三个.js代码：

```jsx
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)

const renderer = new THREE.WebGLRenderer()
renderer.setSize(width, height)
document.querySelector('#canvas-container').appendChild(renderer.domElement)

const mesh = new THREE.Mesh()
mesh.geometry = new THREE.BoxGeometry()
mesh.material = new THREE.MeshStandardMaterial()

scene.add(mesh)

function animate() {
  requestAnimationFrame(animate)
  renderer.render(scene, camera)
}

animate()
```

### 构造函数参数
根据[`BoxGeometry的文档`](https://threejs.org/docs/#api/en/geometries/BoxGeometry)，我们可以选择传递三个参数：宽度、长度和深度：

```js
new THREE.BoxGeometry(2, 2, 2)
```
为了在Fiber中实现这一点，我们使用`args` prop，它总是接受一个数组，数组中的项表示构造函数的参数。

```jsx
<boxGeometry args={[2, 2, 2]} />
```

> 请注意，每次更改args时，都必须重新构造对象！


## 添加灯光
接下来，我们将把一些灯光添加到场景中，方法是将这些组件放入画布中。


```jsx
<Canvas>
  <ambientLight intensity={0.1} />
  <directionalLight color="red" position={[0, 0, 5]} />
```

### Props
这向我们介绍了Fiber的最后一个基本概念，即React 'props'如何在三个. js对象上工作。 当您在Fiber组件上设置任何prop时，它将在three.js实例上设置相同名称的属性。

让我们关注`ambientLight`，three.js的[文档](https://threejs.org/docs/#api/en/lights/AmbientLight)告诉我们，我们可以选择用颜色构造它，但它也可以接收props。

```jsx
<ambientLight intensity={0.1} />
```

其等效于：

```jsx
const light = new THREE.AmbientLight()
light.intensity = 0.1
```

### 快捷传参

对于具有`.set()` 方法的参数（颜色、向量等），有一些快捷方式。

```jsx
const light = new THREE.DirectionalLight()
light.position.set(0, 0, 5)
light.color.set('red')
```

它与以下JSX内容一样

```jsx
<directionalLight position={[0, 0, 5]} color="red" />
```

还有一些其他的API，请参考[文档](/react-three-fiber/api/objects)。


## 总结

```jsx
<Canvas>
  <ambientLight intensity={0.1} />
  <directionalLight color="red" position={[0, 0, 5]} />
  <mesh>
    <boxGeometry />
    <meshStandardMaterial />
  </mesh>
</Canvas>
```

<Codesandbox id="12q81" />

## 练习

- 尝试不同的材质, 比如 [`MeshNormalMaterial`](https://threejs.org/docs/#api/en/materials/MeshNormalMaterial) or [`MeshBasicMaterial`](https://threejs.org/docs/#api/en/materials/MeshBasicMaterial), give them a color
- 尝试不同的几何体, 比如 [`SphereGeometry`](https://threejs.org/docs/#api/en/geometries/SphereGeometry) or [`OctahedronGeometry`](https://threejs.org/docs/#api/en/geometries/OctahedronGeometry)
- 尝试改变 `mesh`组件的 `position`属性, 用prop设置相同的属性
- 尝试将网格提取到新组件