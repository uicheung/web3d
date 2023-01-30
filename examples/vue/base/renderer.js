import * as THREE from 'three'
import camera from './camera'

const renderer = new THREE.WebGLRenderer({
    antialias:true
})

renderer.setSize(window.innerWidth,window.innerHeight)

renderer.shadowMap.enabled = true

// 监听画面变化，更新渲染画面
window.addEventListener("resize", () => {
    //   console.log("画面变化了");
    // 更新摄像头
    camera.aspect = window.innerWidth / window.innerHeight;
    //   更新摄像机的投影矩阵
    camera.updateProjectionMatrix();
  
    //   更新渲染器
    renderer.setSize(window.innerWidth, window.innerHeight);
    //   设置渲染器的像素比
    renderer.setPixelRatio(window.devicePixelRatio);
  });
  

export default renderer