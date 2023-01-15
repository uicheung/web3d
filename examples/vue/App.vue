<template>
    <div class="hello">
      <h3>{{ message }}</h3>
      <Scene />
    </div>
  </template>
  
  <script setup>
  import { onMounted ,ref} from 'vue';

  import Scene from './components/scene.vue'
  const  message = ref('Hello World"') 

  </script>
  
  <style>
  h3 {
    margin: 40px 0 0;
    color: #42b983;
  }
  </style>