import * as THREE from 'three'
import scene from '../base/scene'
import gui from '../base/gui'
import * as BufferGeometryUtils  from 'three/examples/jsm/utils/BufferGeometryUtils.js';

import {
    Bone,
    Color,
    CylinderGeometry,
    DoubleSide,
    Float32BufferAttribute,
    MeshPhongMaterial,
    PerspectiveCamera,
    PointLight,
    Scene,
    SkinnedMesh,
    Skeleton,
    SkeletonHelper,
    Vector3,
    Uint16BufferAttribute,
    WebGLRenderer
} from 'three';

let bones = []
let boneMesh
const state = {
    animateBones: false
};

function createGeometry(sizing){

    // 创建几何体
    const geometry = new CylinderGeometry(
        5, // radiusTop
        5, // radiusBottom
        sizing.height, // height
        3, // radiusSegments
        sizing.segmentCount * 3, // heightSegments
        false // openEnded
    );

    // 给几何体添加 索引 和 权重属性
    const position = geometry.attributes.position

    const vertex = new Vector3()
    const skinIndices = []
    const skinWeights = []

    // 第一个皮肤骨骼索引skinindex值是( 10, 2, 0, 0 ). 
    // 第一个皮肤权重skinweight值是( 0.8, 0.2, 0, 0 ). 
    // 这两个皮肤骨骼索引skinindex和皮肤权重skinweight数据表达的意思是
    // 骨骼10 mesh.bones[10]对第一个顶点坐标影响权重80％. 
    // 骨骼2 skeleton.bones[2]对第一个顶点的影响权重20％. 
    // 接下来的两个骨骼权重值的权重为0，因此对顶点坐标没有任何影响.

    for (let index = 0; index < position.count; index++) {
        vertex.fromBufferAttribute(position,index)
        const y = vertex.y + sizing.halfHeight
        console.log('-----');
        console.log('ertex.y',vertex.y , sizing.halfHeight);
        console.log('y',y);
        console.log('sizing.segmentHeight',sizing.segmentHeight);
        const skinIndex = Math.floor(y/sizing.segmentHeight)
        const skinWeight = (y%sizing.segmentHeight)/sizing.segmentHeight
        console.log(skinIndex);
        console.log(skinWeight);
        skinIndices.push(skinIndex,skinIndex+1,0,0)
        skinWeights.push(1-skinWeight,skinWeight,0,0)
    }

    geometry.setAttribute('skinIndex',new Uint16BufferAttribute(skinIndices,4))
    geometry.setAttribute('skinWeight',new Float32BufferAttribute(skinWeights,4))
    console.log('geometry',geometry);
    return geometry
}

function createBones(sizing){

    bones = []
    let prevBone = new Bone()
    prevBone.name = '最外层的bone - '
    bones.push( prevBone )
    prevBone.position.y = -sizing.halfHeight

    for (let index = 0; index < sizing.segmentCount; index++) {
        const bone = new Bone()
        bone.name = '循环生成bone - ' + index
        bone.position.y = -sizing.segmentHeight
        bones.push(bone)
        prevBone.add(bone) // 添加骨骼父子级关系
        prevBone = bone
    }

    console.log(bones);
    return bones
}

// 创建材质
function createMesh(geometry,bones,sizing){
    // 创建网格材质
    const material = new MeshPhongMaterial({
        color:0x155555,
        emissive:0x072534,
        side:DoubleSide,
        flatShading:true,//
        wireframe:true
    })
    // 创建蒙皮网格
    const mesh = new SkinnedMesh(geometry,material)
    console.log('mesh',mesh);
    // 创建骨架 传入骨架数据
    const skeleton = new Skeleton(bones)

    mesh.add(bones[0]) // add 是Object3D的属性

    mesh.bind(skeleton) // bind SkinnedMesh的属性

    return mesh
}

function setupDatGui(){
    let folder = gui.addFolder('生成参数')
    folder.add(state,'animateBones')
    folder.controllers[0].name('Animate Bones')
    
    folder.add(boneMesh,'pose')
    folder.controllers[1].name('.pose()')

    const bones = boneMesh.skeleton.bones
    for (let i = 0; i < bones.length; i++) {
        			const bone = bones[ i ];

					folder = gui.addFolder( 'Bone ' + i );

					folder.add( bone.position, 'x', - 10 + bone.position.x, 10 + bone.position.x );
					folder.add( bone.position, 'y', - 10 + bone.position.y, 10 + bone.position.y );
					folder.add( bone.position, 'z', - 10 + bone.position.z, 10 + bone.position.z );

					folder.add( bone.rotation, 'x', - Math.PI * 0.5, Math.PI * 0.5 );
					folder.add( bone.rotation, 'y', - Math.PI * 0.5, Math.PI * 0.5 );
					folder.add( bone.rotation, 'z', - Math.PI * 0.5, Math.PI * 0.5 );

					folder.add( bone.scale, 'x', 0, 2 );
					folder.add( bone.scale, 'y', 0, 2 );
					folder.add( bone.scale, 'z', 0, 2 );

					folder.controllers[ 0 ].name( 'position.x' );
					folder.controllers[ 1 ].name( 'position.y' );
					folder.controllers[ 2 ].name( 'position.z' );

					folder.controllers[ 3 ].name( 'rotation.x' );
					folder.controllers[ 4 ].name( 'rotation.y' );
					folder.controllers[ 5 ].name( 'rotation.z' );

					folder.controllers[ 6 ].name( 'scale.x' );
					folder.controllers[ 7 ].name( 'scale.y' );
					folder.controllers[ 8 ].name( 'scale.z' );
        
    }
    

}

function bone(){
    // 初始化基础参数 
    const segmentHeight = 8; // 骨骼的
    const segmentCount = 4; // 
    const height = segmentHeight * segmentCount;
    const halfHeight = height * 0.5;

    const sizing = {
        segmentHeight: segmentHeight,
        segmentCount: segmentCount,
        height: height,
        halfHeight: halfHeight
    };

    const geometry = createGeometry(sizing)
    const bones = createBones(sizing)
    boneMesh = createMesh(geometry,bones,sizing)
    scene.add(boneMesh)
    setupDatGui()
}



export default bone

  
