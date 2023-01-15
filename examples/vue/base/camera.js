import * as THREE from 'three'
// import scene  from './scene';
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / 
window.innerHeight, 1, 50 );

camera.position.set(0,0,20)
// scene.add( camera );

export default camera