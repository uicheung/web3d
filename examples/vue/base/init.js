import { onMounted ,ref} from 'vue';
import scene from './scene'
import camera from './camera'
import gui from './gui'
import renderer from './renderer'
import axesHelper from './axesHelper'
import animate from './animate'

// 场景div
let sceneDiv = ref(null)

scene.add(camera)

scene.add(axesHelper)
window.addEventListener('resize',()=>{

    

})

export default function initRender(sceneBox){
    sceneBox.value.appendChild(renderer.domElement)
    animate()
}