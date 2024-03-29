import { onMounted ,ref} from 'vue';
import scene from './scene'
import camera from './camera'
import light from './light'

import renderer from './renderer'
import axesHelper from './axesHelper'
import animate from './animate'

// 场景div
let sceneDiv = ref(null)

scene.add(light.ambientLight)//
scene.add(light.hemiLight)
scene.add(light.dirLight)
scene.add(camera)

scene.add(axesHelper)
import './ground'



export default function initRender(sceneBox,showGround){
    sceneBox.value.appendChild(renderer.domElement)
    scene.scene
    animate()
}