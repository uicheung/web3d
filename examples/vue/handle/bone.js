import * as THREE from 'three'
import scene from '../base/scene'
import gui from '../base/gui'
import * as BufferGeometryUtils  from 'three/examples/jsm/utils/BufferGeometryUtils.js';

function bone(){


    // 1. 创建一个BufferGeometry，并添加skinIndex和skinWeight两个属性。
    let head = new THREE.SphereGeometry(3, 60, 40);
    let eye_l = new THREE.BoxGeometry(2, 1, 1);
    // eye_l.translate(2, 1, 1)
    eye_l.applyMatrix4(new THREE.Matrix4().makeTranslation(10, 1, 1))

    console.log(new THREE.Matrix4().makeTranslation(2, 1, 1));
    console.log(eye_l);

    console.log(head);
    let eye_r = new THREE.BoxGeometry(2, 1, 1);
    let mouth = new THREE.BoxGeometry(2, 0.4, 1);
    // head.merge(eye_l, new THREE.Matrix4().makeTranslation(2, 1, 1))
    // head.merge(eye_r, new THREE.Matrix4().makeTranslation(2, 1, -1))
    // head.merge(mouth, new THREE.Matrix4().makeTranslation(2, -1, 0))

    const headGeometries = BufferGeometryUtils.mergeBufferGeometries([head,eye_l,eye_r,mouth], false);
    
    let body = new THREE.BoxGeometry(5, 10, 8, 1, 20, 1);
    let leg_l = new THREE.CylinderGeometry(2, 2, 14, 8, 14);
    let leg_r = new THREE.CylinderGeometry(2, 2, 14, 8, 14);
    let arm_l = new THREE.CylinderGeometry(1, 1, 12, 8, 11);
    let arm_r = new THREE.CylinderGeometry(1, 1, 12, 8, 11);
    let human = body.clone();
    
    // human.merge(head, new THREE.Matrix4().makeTranslation(0, 8, 0));
    // human.merge(leg_l, new THREE.Matrix4().makeTranslation(0, -12, 2.1));
    // human.merge(leg_r, new THREE.Matrix4().makeTranslation(0, -12, -2.1));
    // human.merge(arm_l, new THREE.Matrix4().makeTranslation(0, -1, 5.3));
    // human.merge(arm_r, new THREE.Matrix4().makeTranslation(0, -1, -5.3));

    const mergedGeometries = BufferGeometryUtils.mergeBufferGeometries([headGeometries,body,leg_l,leg_r,arm_l,arm_r], false);
    
    var skinIndices = [];
    var skinWeights = [];
    let position = human.attributes.position;
    var vertex = new THREE.Vector3();
 
for(let i=0; i<position.count; i++) {
    vertex.fromBufferAttribute(position, i);
    if(vertex.z > 4.3 && vertex.y >= 0) {
        skinIndices.push(9,0,0,0);
        skinWeights.push(1,0,0,0);
    } else if (vertex.z < -4.3 && vertex.y >= 0) {
        skinIndices.push(10,0,0,0);
        skinWeights.push(1,0,0,0);
    } else if (vertex.z > 4.3 && vertex.y < 0) {
        skinIndices.push(11,0,0,0);
        skinWeights.push(1,0,0,0);
    } else if (vertex.z < -4.3 && vertex.y < 0) {
        skinIndices.push(12,0,0,0);
        skinWeights.push(1,0,0,0);
    } else if (vertex.y <= 5 && vertex.y >= -5) {
        let w = (vertex.y + 5) / 10;
        skinIndices.push(0,2,0,0);
        skinWeights.push(Math.sqrt(w),1-Math.sqrt(w),0,0);
    } else if (vertex.y > 5) {
        skinIndices.push(1,0,0,0);
        skinWeights.push(1,0,0,0);
    } else if(vertex.y < -5 && vertex.y >= -12 && vertex.z > 0) {
        skinIndices.push(3,0,0,0);
        skinWeights.push(1,0,0,0);
    } else if (vertex.y < -12 && vertex.z > 0) {
        skinIndices.push(5,0,0,0);
        skinWeights.push(1,0,0,0);
    } else if (vertex.y < -5 && vertex.y >= -12 && vertex.z < 0) {
        skinIndices.push(4,0,0,0);
        skinWeights.push(1,0,0,0);
    } else {
        skinIndices.push(6,0,0,0);
        skinWeights.push(1,0,0,0);
    }
}
 
human.setAttribute('skinIndex', new THREE.Uint16BufferAttribute(skinIndices, 4));
human.setAttribute('skinWeight', new THREE.Float32BufferAttribute(skinWeights, 4));



//  2. 创建骨骼Bone

    let bones = [];
    let bone1 = new THREE.Bone(); //胸
    bone1.position.y = 5;
    let bone2 = new THREE.Bone(); //头
    bone2.position.y = 3;
    let bone3 = new THREE.Bone(); //尾椎
    bone3.position.y = -10;
     
    let bone4 = new THREE.Bone(); //左腿上
    bone4.position.y = -0.1;
    bone4.position.z = 2.1;
    let bone5 = new THREE.Bone(); //右腿上
    bone5.position.y = -0.1;
    bone5.position.z = -2.1;
    let bone6 = new THREE.Bone(); //左腿中
    bone6.position.y = -7;
    let bone7 = new THREE.Bone(); //右腿中
    bone7.position.y = -7;
    let bone8 = new THREE.Bone(); //左腿下
    bone8.position.y = -7;
    let bone9 = new THREE.Bone(); //右腿下
    bone9.position.y = -7;
     
    let bone10 = new THREE.Bone(); //左臂上
    bone10.position.z = 5.3;
    let bone11 = new THREE.Bone(); //右臂上
    bone11.position.z = -5.3;
    let bone12 = new THREE.Bone(); //左臂中
    bone12.position.y = -6;
    let bone13 = new THREE.Bone(); //右臂中
    bone13.position.y = -6;
    let bone14 = new THREE.Bone(); //左臂下
    bone14.position.y = -6;
    let bone15 = new THREE.Bone(); //右臂下
    bone15.position.y = -6;
     
    // 胸 添加 
    bone1.add(bone2);// 头
    bone1.add(bone3);// 尾椎
    bone1.add(bone10)//左臂上
    bone1.add(bone11)//右臂上
     
    // 尾椎添加
    bone3.add(bone4);// 右腿上
    bone3.add(bone5);// 左腿上
     
    bone4.add(bone6);// 右腿上 添加右腿中
    bone5.add(bone7);
    bone6.add(bone8);
    bone7.add(bone9);
    bone10.add(bone12)
    bone11.add(bone13)
    bone12.add(bone14)
    bone13.add(bone15)
     
    bones.push(bone1); // 胸，头，尾椎，左臂上，右臂上
    bones.push(bone2);
    bones.push(bone3);
    bones.push(bone4);
    bones.push(bone5);
    bones.push(bone6);
    bones.push(bone7);
    bones.push(bone8);
    bones.push(bone9);
    bones.push(bone10);
    bones.push(bone11);
    bones.push(bone12);
    bones.push(bone13);
    bones.push(bone14);
    bones.push(bone15);


    // 3. 创建蒙皮材质Material
    let material = new THREE.MeshPhongMaterial({
        // skinning: true,
        color: 0x156289,
        emissive: 0x072534,
        side: THREE.DoubleSide,
        flatShading: true,
        opacity:0.3,
        transparent:true
        // wireframe: true,
    })
    // 4. 根据BufferGeometry和Material创建蒙皮网格SkinnedMesh
    let mesh = new THREE.SkinnedMesh(human, material);

    // 5. 根据Bone创建骨架Skeleton
    let skeleton = new THREE.Skeleton(bones);
    // 6. SkinnedMesh添加骨骼根节点
    mesh.add(bones[0]);
    // 7. SkinnedMesh绑定骨架
    mesh.bind(skeleton);
    console.log(material);

    // 8. 添加界面交互GUI
    guifn(mesh)

    scene.add(mesh)

}

function guifn(mesh){
    var bones = mesh.skeleton.bones;
    console.log('bones',bones);
     
    gui.add( mesh, "pose" );

    gui.add(bones[1].position, "x").min(0).max(5).step(0.01).name("头移动位置").
    onChange((value) => {
      console.log("值被修改：", value);
    })
    .onFinishChange((value) => {
      console.log("完全停下来:", value);
    });

    gui.add(bones[0].rotation, "y").min(bones[0].rotation.y - Math.PI/4).max(bones[0].rotation.y + Math.PI/4).step(0.01).name("旋转bones[0]");


gui.add(bones[0].rotation, 'y', bones[0].rotation.y - Math.PI/4, bones[0].rotation.y + Math.PI/4);
  

}

export default bone

  
