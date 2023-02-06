<template>
  <div>
    <!-- 自定义gui的位置 -->>
    <div id="guiBox" class="guiBox"></div>
    <div class="scene" ref="sceneBox"></div>
    
  </div>
</template>

<script setup>

import { onMounted, ref } from 'vue';
import initRender from '../base/init'
import scene from '../base/scene'
import gui from '../base/gui'
import camera from '../base/camera'
import bone from '../handle/bone'
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import * as THREE from 'three'
import { EquirectangularReflectionMapping, Color } from "three"
import path from 'path-browserify'
console.log(path);
console.log(path.dirname("/asseets/hdr/pedestrian_overpass_1k.hdr"));
console.log(
  path.join(
    __dirname,
    '../asseets/hdr/pedestrian_overpass_1k.hdr')
)

let mixer, action1, action2, action3, actions, clip1, clip2, clip3;
let mixerUpdateDelta;

const params = {
  weight: 0.01,
  timeScale: 1
}

const rgbeLoader = new RGBELoader()
rgbeLoader.loadAsync('/static/hdr/pedestrian_overpass_1k.hdr').then(texture => {
  texture.mapping = THREE.EquirectangularReflectionMapping;
  scene.background = new THREE.Color(0xffee99);
  scene.environment = texture;
})

const loader = new GLTFLoader();
loader.load('/static/glb/wajueji.glb', function (gltf) {
  let model = gltf.scene;
  let animations = gltf.animations;

  model.scale.set(0.1, 0.1, 0.1);
  scene.add(model);
  mixer = new THREE.AnimationMixer(model);
  clip1 = animations[0]
  clip2 = animations[1]
  clip3 = animations[2]

  action1 = mixer.clipAction(clip1);
  action1.loop = THREE.LoopOnce;
  action1.clampWhenFinished = true;

  action2 = mixer.clipAction(clip2);
  action2.loop = THREE.LoopOnce;
  action2.clampWhenFinished = true;

  action3 = mixer.clipAction(clip3);
  action3.loop = THREE.LoopOnce;
  action3.clampWhenFinished = true;

  actions = [ action1, action2, action3 ];
})

let sceneBox = ref(null)

let clock = new THREE.Clock();
mixerUpdateDelta = clock.getDelta();
function setWeight(weight) {
    action1.time = weight;
    action2.time = weight;
    action3.time = weight;
    action1.play();
    action2.play();
    action3.play();
    mixer.update(mixerUpdateDelta);
  }

onMounted(() => {
  initRender(sceneBox)

  const firstFolder = gui.addFolder('firstFolder');
  firstFolder.closed = false;

  firstFolder.add(params, 'weight', 0, 2, 0.01).name('系数').onChange(weight => {
    setWeight(weight);
  });
  const box = document.querySelector('#guiBox');
  camera.position.set(-2, 2, 0);
  box.appendChild(gui.domElement)
})


</script>

<style>
.scene {
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 100;
  left: 0;
  top: 0;
}

.guiBox {
  position: fixed;
  right: 0;
  top: 0;
  z-index: 300;
}
</style>