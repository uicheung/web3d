import * as THREE from 'three'
const ambientLight = new THREE.AmbientLight( 0xfffeee ); // soft white light

const hemiLight = new THREE.HemisphereLight( 0xffffff, 0x444444 );
hemiLight.position.set( 0, 20, 0 );

const dirLight = new THREE.DirectionalLight( 0xffffff );
dirLight.position.set( 0, 20, 10 );


const light = {ambientLight ,hemiLight,dirLight}
export default light