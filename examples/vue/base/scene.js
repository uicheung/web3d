import * as THREE from 'three';

const scene = new THREE.Scene()
// scene.background = new THREE.Color( 0xe0e0e0 );
scene.fog = new THREE.Fog( 0xe0e0e0, 20, 100 );
export default scene