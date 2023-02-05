import * as THREE from "three";
// import scene  from './scene';

let camera = new THREE.PerspectiveCamera(
  105,
  window.innerWidth / window.innerHeight,
  1,
  50
);
camera.position.set(-5, 3, 10);
camera.lookAt(0, 2, 0);


// 监听画面变化，更新渲染画面
window.addEventListener("resize", () => {
  //   console.log("画面变化了");
  // 更新摄像头
  camera.aspect = window.innerWidth / window.innerHeight;
  //   更新摄像机的投影矩阵
  camera.updateProjectionMatrix();

});
export default camera;
