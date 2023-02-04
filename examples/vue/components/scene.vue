<template>
  <div>
    <!-- 自定义gui的位置 -->>
    <div id="guiBox" class="guiBox"></div>
    <div class="scene" ref="sceneBox"></div>
  </div>
</template>

<script setup>

import { onMounted ,ref} from 'vue';
import initRender from '../base/init'
import scene from '../base/scene'
import gui from '../base/gui'
import  bone from  '../handle/bone'


// 场景div
let sceneBox = ref(null)
onMounted(()=>{
  initRender(sceneBox)
  bone()
  // console.log( document.querySelector('.dg') );
  // document.querySelector('.dg').setAttribute('style',"width: 245px;z-index:300")
  const box = document.querySelector('#guiBox');
// console.log(box);
box.appendChild(gui.domElement)
})

</script>

<style>

.scene{
    width: 100vw;
    height: 100vh;
    position: absolute;
    z-index: 100;
    left: 0;
    top: 0;
}
.guiBox{
  position: fixed;
  right: 0;
  top: 0;
  z-index: 300;
}

</style>