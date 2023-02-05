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
  WebGLRenderer,
} from "three";

import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import scene from "../base/scene";
// import gui from '../base/gui'
import { GUI } from "three/addons/libs/lil-gui.module.min.js";
let camera, renderer, orbit, lights, mesh, bones, skeletonHelper;
const state = {
  animateBones: false,
};
const skinIndices = [];
const skinWeights = [];

const sizing = {
  segmentHeight: 8,
  segmentCount: 8,
  height: 8,
  halfHeight: 4,
};
function createGeometry() {
  const geometry = new CylinderGeometry(
    2, // radiusTop
    2, // radiusBottom
    sizing.height, // height
    3, // radiusSegments
    sizing.segmentCount * 3, // heightSegments
    true // openEnded
  );

  const position = geometry.attributes.position;
  const vertex = new Vector3();

  for (let i = 0; i < position.count; i++) {
    vertex.fromBufferAttribute(position, i);

    const y = vertex.y + sizing.halfHeight;

    const skinIndex = Math.floor(y / sizing.segmentHeight);
    const skinWeight = (y % sizing.segmentHeight) / sizing.segmentHeight;

    skinIndices.push(skinIndex, skinIndex + 1, 0, 0);
    skinWeights.push(1 - skinWeight, skinWeight, 0, 0);
  }
  geometry.setAttribute("skinIndex", new Uint16BufferAttribute(skinIndices, 4));
  geometry.setAttribute(
    "skinWeight",
    new Float32BufferAttribute(skinWeights, 4)
  );

  return geometry;
}

function initBones() {
  const segmentHeight = 8;
  const segmentCount = 4;
  const height = segmentHeight * segmentCount;
  const halfHeight = height * 0.5;

  const sizing = {
    segmentHeight: segmentHeight,
    segmentCount: segmentCount,
    height: height,
    halfHeight: halfHeight,
  };

  const geometry = createGeometry(sizing);
  const bones = createBones(sizing);
  mesh = createMesh(geometry, bones);

  mesh.scale.multiplyScalar(1);
  scene.add(mesh);
}

function createBones(sizing) {
  bones = [];

  let prevBone = new Bone();
  bones.push(prevBone);
  prevBone.position.y = -sizing.halfHeight;

  for (let i = 0; i < sizing.segmentCount; i++) {
    const bone = new Bone();
    bone.name = "循环生成bone - " + i;
    console.log(bones);
    console.log(bone);
    bone.position.y = sizing.segmentHeight;
    bones.push(bone);
    prevBone.add(bone);
    prevBone = bone;
  }

  return bones;
}

function createMesh(geometry, bones) {
  const material = new MeshPhongMaterial({
    color: 0xeee333,
    emissive: 0x072534,
    side: DoubleSide,
    flatShading: true,
    wireframe: true,
  });

  const mesh = new SkinnedMesh(geometry, material);
  const skeleton = new Skeleton(bones);

  mesh.add(bones[0]);
  console.log("mesh", mesh);
  console.log(bones);

  mesh.bind(skeleton);

  skeletonHelper = new SkeletonHelper(mesh);
  skeletonHelper.material.linewidth = 2;
  scene.add(skeletonHelper);

  return mesh;
}

function setupDatGui() {
  let gui = new GUI();
  let folder = gui.addFolder("General Options");

  folder.add(state, "animateBones");

  console.log(folder);
  folder.controllers[0].name("Animate Bones");

  folder.add(mesh, "pose");
  folder.controllers[1].name(".pose()");

  const bones = mesh.skeleton.bones;

  for (let i = 0; i < bones.length; i++) {
    const bone = bones[i];

    folder = gui.addFolder("Bone " + i);

    folder.add(bone.position, "x", -10 + bone.position.x, 10 + bone.position.x);
    folder.add(bone.position, "y", -10 + bone.position.y, 10 + bone.position.y);
    folder.add(bone.position, "z", -10 + bone.position.z, 10 + bone.position.z);

    folder.add(bone.rotation, "x", -Math.PI * 0.5, Math.PI * 0.5);
    folder.add(bone.rotation, "y", -Math.PI * 0.5, Math.PI * 0.5);
    folder.add(bone.rotation, "z", -Math.PI * 0.5, Math.PI * 0.5);

    folder.add(bone.scale, "x", 0, 2);
    folder.add(bone.scale, "y", 0, 2);
    folder.add(bone.scale, "z", 0, 2);

    folder.controllers[0].name("position.x");
    folder.controllers[1].name("position.y");
    folder.controllers[2].name("position.z");

    folder.controllers[3].name("rotation.x");
    folder.controllers[4].name("rotation.y");
    folder.controllers[5].name("rotation.z");

    folder.controllers[6].name("scale.x");
    folder.controllers[7].name("scale.y");
    folder.controllers[8].name("scale.z");
  }
}
function bone() {
  initBones();
  setupDatGui();
}

export default bone;
