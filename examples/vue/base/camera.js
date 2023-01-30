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

export default camera;
