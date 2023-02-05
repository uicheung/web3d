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
import bone from '../handle/bone'
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader"
import { EquirectangularReflectionMapping, Color } from "three"
import path from 'path-browserify'
console.log(path);
console.log(path.dirname("/asseets/hdr/pedestrian_overpass_1k.hdr"));
console.log(
  path.join(
    __dirname,
    '../asseets/hdr/pedestrian_overpass_1k.hdr')
)

let mixerUpdateDelta;
const params = {
  weight: 0.01,
  timeScale: 1
}

const rgbeLoader = new RGBELoader()
rgbeLoader.loadAsync('/examples/vue/assets/hdr/pedestrian_overpass_1k.hdr')





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