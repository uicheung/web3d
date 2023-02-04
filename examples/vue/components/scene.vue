<template>
  <div class="scene" ref="sceneBox"></div>
</template>

<script setup>
import { onMounted ,ref} from 'vue';
import initRender from '../base/init'

// 场景div
let sceneBox = ref(null)
onMounted(()=>{
  initRender(sceneBox)
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

</style>