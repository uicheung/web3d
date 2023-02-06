"use strict";
(self["webpackChunkvuepress_vue3"] = self["webpackChunkvuepress_vue3"] || []).push([["examples_vue_views_home_index_vue"],{

/***/ "./examples/vue/base/animate.js":
/*!**************************************!*\
  !*** ./examples/vue/base/animate.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _camera__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./camera */ "./examples/vue/base/camera.js");
/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderer */ "./examples/vue/base/renderer.js");
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controls */ "./examples/vue/base/controls.js");
/* harmony import */ var _scene__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scene */ "./examples/vue/base/scene.js");







const clock = new three__WEBPACK_IMPORTED_MODULE_4__.Clock()
function animate (){
    // console.log('animate');
    _controls__WEBPACK_IMPORTED_MODULE_2__["default"].update()
    const time = clock.getElapsedTime()
    requestAnimationFrame(animate)
    _renderer__WEBPACK_IMPORTED_MODULE_1__["default"].render(_scene__WEBPACK_IMPORTED_MODULE_3__["default"],_camera__WEBPACK_IMPORTED_MODULE_0__["default"])

}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (animate);

/***/ }),

/***/ "./examples/vue/base/axesHelper.js":
/*!*****************************************!*\
  !*** ./examples/vue/base/axesHelper.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");


const axesHelper = new three__WEBPACK_IMPORTED_MODULE_0__.AxesHelper(5)

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (axesHelper);

/***/ }),

/***/ "./examples/vue/base/camera.js":
/*!*************************************!*\
  !*** ./examples/vue/base/camera.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");

// import scene  from './scene';

let camera = new three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera(
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (camera);


/***/ }),

/***/ "./examples/vue/base/controls.js":
/*!***************************************!*\
  !*** ./examples/vue/base/controls.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ "./node_modules/three/examples/jsm/controls/OrbitControls.js");
/* harmony import */ var _camera__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./camera */ "./examples/vue/base/camera.js");
/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderer */ "./examples/vue/base/renderer.js");






// 初始化控制器 
const controls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_2__.OrbitControls(_camera__WEBPACK_IMPORTED_MODULE_0__["default"],_renderer__WEBPACK_IMPORTED_MODULE_1__["default"].domElement)

// 设置控制器阻尼
controls.enableDamping = true

// 设置自动旋转
// control.autoRotate = true

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (controls);

/***/ }),

/***/ "./examples/vue/base/ground.js":
/*!*************************************!*\
  !*** ./examples/vue/base/ground.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scene */ "./examples/vue/base/scene.js");



const mesh = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(
  new three__WEBPACK_IMPORTED_MODULE_1__.PlaneGeometry(2000, 2000),
  new three__WEBPACK_IMPORTED_MODULE_1__.MeshPhongMaterial({ color: 0x999999, depthWrite: false ,transparent : true,opacity : 0.4})
);
mesh.rotation.x = -Math.PI / 2;
_scene__WEBPACK_IMPORTED_MODULE_0__["default"].add(mesh);

const grid = new three__WEBPACK_IMPORTED_MODULE_1__.GridHelper(200, 40, 0x000000, 0x000000);
grid.material.opacity = 0.2;
grid.material.transparent = true;
_scene__WEBPACK_IMPORTED_MODULE_0__["default"].add(grid);


/***/ }),

/***/ "./examples/vue/base/gui.js":
/*!**********************************!*\
  !*** ./examples/vue/base/gui.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var dat_gui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dat.gui */ "./node_modules/dat.gui/build/dat.gui.module.js");


const gui = new dat_gui__WEBPACK_IMPORTED_MODULE_0__.GUI({autoPlace:false})

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gui);

/***/ }),

/***/ "./examples/vue/base/init.js":
/*!***********************************!*\
  !*** ./examples/vue/base/init.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initRender)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _scene__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scene */ "./examples/vue/base/scene.js");
/* harmony import */ var _camera__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./camera */ "./examples/vue/base/camera.js");
/* harmony import */ var _light__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./light */ "./examples/vue/base/light.js");
/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./renderer */ "./examples/vue/base/renderer.js");
/* harmony import */ var _axesHelper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./axesHelper */ "./examples/vue/base/axesHelper.js");
/* harmony import */ var _animate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./animate */ "./examples/vue/base/animate.js");
/* harmony import */ var _ground__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ground */ "./examples/vue/base/ground.js");









// 场景div
let sceneDiv = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null)

_scene__WEBPACK_IMPORTED_MODULE_1__["default"].add(_light__WEBPACK_IMPORTED_MODULE_3__["default"].ambientLight)//
_scene__WEBPACK_IMPORTED_MODULE_1__["default"].add(_light__WEBPACK_IMPORTED_MODULE_3__["default"].hemiLight)
_scene__WEBPACK_IMPORTED_MODULE_1__["default"].add(_light__WEBPACK_IMPORTED_MODULE_3__["default"].dirLight)
_scene__WEBPACK_IMPORTED_MODULE_1__["default"].add(_camera__WEBPACK_IMPORTED_MODULE_2__["default"])

_scene__WEBPACK_IMPORTED_MODULE_1__["default"].add(_axesHelper__WEBPACK_IMPORTED_MODULE_5__["default"])
;



function initRender(sceneBox,showGround){
    sceneBox.value.appendChild(_renderer__WEBPACK_IMPORTED_MODULE_4__["default"].domElement)
    _scene__WEBPACK_IMPORTED_MODULE_1__["default"].scene
    ;(0,_animate__WEBPACK_IMPORTED_MODULE_6__["default"])()
}

/***/ }),

/***/ "./examples/vue/base/light.js":
/*!************************************!*\
  !*** ./examples/vue/base/light.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");

const ambientLight = new three__WEBPACK_IMPORTED_MODULE_0__.AmbientLight( 0xfffeee ); // soft white light

const hemiLight = new three__WEBPACK_IMPORTED_MODULE_0__.HemisphereLight( 0xffffff, 0x444444 );
hemiLight.position.set( 0, 20, 0 );

const dirLight = new three__WEBPACK_IMPORTED_MODULE_0__.DirectionalLight( 0xffffff );
dirLight.position.set( 0, 20, 10 );


const light = {ambientLight ,hemiLight,dirLight}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (light);

/***/ }),

/***/ "./examples/vue/base/renderer.js":
/*!***************************************!*\
  !*** ./examples/vue/base/renderer.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");


const renderer = new three__WEBPACK_IMPORTED_MODULE_0__.WebGLRenderer({
    antialias:true
})

renderer.setSize(window.innerWidth,window.innerHeight)

renderer.shadowMap.enabled = true

// 监听画面变化，更新渲染画面
window.addEventListener("resize", () => {
    //   更新渲染器
    renderer.setSize(window.innerWidth, window.innerHeight);
    //   设置渲染器的像素比
    renderer.setPixelRatio(window.devicePixelRatio);
  });

  
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderer);

/***/ }),

/***/ "./examples/vue/base/scene.js":
/*!************************************!*\
  !*** ./examples/vue/base/scene.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");


const scene = new three__WEBPACK_IMPORTED_MODULE_0__.Scene()
// scene.background = new THREE.Color( 0xe0e0e0 );
scene.fog = new three__WEBPACK_IMPORTED_MODULE_0__.Fog( 0xe0e0e0, 20, 100 );
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scene);

/***/ }),

/***/ "./examples/vue/handle/bone.js":
/*!*************************************!*\
  !*** ./examples/vue/handle/bone.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _base_scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/scene */ "./examples/vue/base/scene.js");
/* harmony import */ var three_addons_libs_lil_gui_module_min_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/addons/libs/lil-gui.module.min.js */ "./node_modules/three/examples/jsm/libs/lil-gui.module.min.js");




// import gui from '../base/gui'

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
  const geometry = new three__WEBPACK_IMPORTED_MODULE_1__.CylinderGeometry(
    2, // radiusTop
    2, // radiusBottom
    sizing.height, // height
    3, // radiusSegments
    sizing.segmentCount * 3, // heightSegments
    true // openEnded
  );

  const position = geometry.attributes.position;
  const vertex = new three__WEBPACK_IMPORTED_MODULE_1__.Vector3();

  for (let i = 0; i < position.count; i++) {
    vertex.fromBufferAttribute(position, i);

    const y = vertex.y + sizing.halfHeight;

    const skinIndex = Math.floor(y / sizing.segmentHeight);
    const skinWeight = (y % sizing.segmentHeight) / sizing.segmentHeight;

    skinIndices.push(skinIndex, skinIndex + 1, 0, 0);
    skinWeights.push(1 - skinWeight, skinWeight, 0, 0);
  }
  geometry.setAttribute("skinIndex", new three__WEBPACK_IMPORTED_MODULE_1__.Uint16BufferAttribute(skinIndices, 4));
  geometry.setAttribute(
    "skinWeight",
    new three__WEBPACK_IMPORTED_MODULE_1__.Float32BufferAttribute(skinWeights, 4)
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
  _base_scene__WEBPACK_IMPORTED_MODULE_0__["default"].add(mesh);
}

function createBones(sizing) {
  bones = [];

  let prevBone = new three__WEBPACK_IMPORTED_MODULE_1__.Bone();
  bones.push(prevBone);
  prevBone.position.y = -sizing.halfHeight;

  for (let i = 0; i < sizing.segmentCount; i++) {
    const bone = new three__WEBPACK_IMPORTED_MODULE_1__.Bone();
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
  const material = new three__WEBPACK_IMPORTED_MODULE_1__.MeshPhongMaterial({
    color: 0xeee333,
    emissive: 0x072534,
    side: three__WEBPACK_IMPORTED_MODULE_1__.DoubleSide,
    flatShading: true,
    wireframe: true,
  });

  const mesh = new three__WEBPACK_IMPORTED_MODULE_1__.SkinnedMesh(geometry, material);
  const skeleton = new three__WEBPACK_IMPORTED_MODULE_1__.Skeleton(bones);

  mesh.add(bones[0]);
  console.log("mesh", mesh);
  console.log(bones);

  mesh.bind(skeleton);

  skeletonHelper = new three__WEBPACK_IMPORTED_MODULE_1__.SkeletonHelper(mesh);
  skeletonHelper.material.linewidth = 2;
  _base_scene__WEBPACK_IMPORTED_MODULE_0__["default"].add(skeletonHelper);

  return mesh;
}

function setupDatGui() {
  let gui = new three_addons_libs_lil_gui_module_min_js__WEBPACK_IMPORTED_MODULE_2__.GUI();
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (bone);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./examples/vue/components/scene.vue?vue&type=style&index=0&id=9548afb8&lang=css":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./examples/vue/components/scene.vue?vue&type=style&index=0&id=9548afb8&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".scene {\n  width: 100vw;\n  height: 100vh;\n  position: absolute;\n  z-index: 100;\n  left: 0;\n  top: 0;\n}\n.guiBox {\n  position: fixed;\n  right: 0;\n  top: 0;\n  z-index: 300;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./examples/vue/components/scene.vue?vue&type=style&index=0&id=9548afb8&lang=css":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./examples/vue/components/scene.vue?vue&type=style&index=0&id=9548afb8&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_6_use_0_scene_vue_vue_type_style_index_0_id_9548afb8_lang_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/less-loader/dist/cjs.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./scene.vue?vue&type=style&index=0&id=9548afb8&lang=css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./examples/vue/components/scene.vue?vue&type=style&index=0&id=9548afb8&lang=css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_6_use_0_scene_vue_vue_type_style_index_0_id_9548afb8_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_6_use_0_scene_vue_vue_type_style_index_0_id_9548afb8_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_6_use_0_scene_vue_vue_type_style_index_0_id_9548afb8_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_6_use_0_scene_vue_vue_type_style_index_0_id_9548afb8_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./examples/vue/components/scene.vue":
/*!*******************************************!*\
  !*** ./examples/vue/components/scene.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _scene_vue_vue_type_template_id_9548afb8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scene.vue?vue&type=template&id=9548afb8 */ "./examples/vue/components/scene.vue?vue&type=template&id=9548afb8");
/* harmony import */ var _scene_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scene.vue?vue&type=script&setup=true&lang=js */ "./examples/vue/components/scene.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _scene_vue_vue_type_style_index_0_id_9548afb8_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scene.vue?vue&type=style&index=0&id=9548afb8&lang=css */ "./examples/vue/components/scene.vue?vue&type=style&index=0&id=9548afb8&lang=css");
/* harmony import */ var _Users_uicheung_Code_vuepress_vuepress2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_Users_uicheung_Code_vuepress_vuepress2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_scene_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_scene_vue_vue_type_template_id_9548afb8__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"examples/vue/components/scene.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./examples/vue/components/scene.vue?vue&type=script&setup=true&lang=js":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./examples/vue/components/scene.vue?vue&type=script&setup=true&lang=js ***!
  \**************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _base_init__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base/init */ "./examples/vue/base/init.js");
/* harmony import */ var _base_scene__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base/scene */ "./examples/vue/base/scene.js");
/* harmony import */ var _base_gui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base/gui */ "./examples/vue/base/gui.js");
/* harmony import */ var _handle_bone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../handle/bone */ "./examples/vue/handle/bone.js");







// 场景div

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'scene',
  setup(__props, { expose }) {
  expose();


let sceneBox = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null)
;(0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(()=>{
  ;(0,_base_init__WEBPACK_IMPORTED_MODULE_1__["default"])(sceneBox)
  ;(0,_handle_bone__WEBPACK_IMPORTED_MODULE_4__["default"])()
  // console.log( document.querySelector('.dg') );
  // document.querySelector('.dg').setAttribute('style',"width: 245px;z-index:300")
  const box = document.querySelector('#guiBox');
// console.log(box);
  box.appendChild(_base_gui__WEBPACK_IMPORTED_MODULE_3__["default"].domElement)
})


const __returned__ = { get sceneBox() { return sceneBox }, set sceneBox(v) { sceneBox = v }, onMounted: vue__WEBPACK_IMPORTED_MODULE_0__.onMounted, ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref, get initRender() { return _base_init__WEBPACK_IMPORTED_MODULE_1__["default"] }, get scene() { return _base_scene__WEBPACK_IMPORTED_MODULE_2__["default"] }, get gui() { return _base_gui__WEBPACK_IMPORTED_MODULE_3__["default"] }, get bone() { return _handle_bone__WEBPACK_IMPORTED_MODULE_4__["default"] } }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

});

/***/ }),

/***/ "./examples/vue/views/home/index.vue":
/*!*******************************************!*\
  !*** ./examples/vue/views/home/index.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_30482db4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=30482db4 */ "./examples/vue/views/home/index.vue?vue&type=template&id=30482db4");
/* harmony import */ var _index_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&setup=true&lang=js */ "./examples/vue/views/home/index.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _Users_uicheung_Code_vuepress_vuepress2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_uicheung_Code_vuepress_vuepress2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_index_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_index_vue_vue_type_template_id_30482db4__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"examples/vue/views/home/index.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./examples/vue/views/home/index.vue?vue&type=script&setup=true&lang=js":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./examples/vue/views/home/index.vue?vue&type=script&setup=true&lang=js ***!
  \**************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_scene_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/scene.vue */ "./examples/vue/components/scene.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'index',
  setup(__props, { expose }) {
  expose();


const __returned__ = { Scene: _components_scene_vue__WEBPACK_IMPORTED_MODULE_0__["default"] }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

});

/***/ }),

/***/ "./examples/vue/components/scene.vue?vue&type=style&index=0&id=9548afb8&lang=css":
/*!***************************************************************************************!*\
  !*** ./examples/vue/components/scene.vue?vue&type=style&index=0&id=9548afb8&lang=css ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_6_use_0_scene_vue_vue_type_style_index_0_id_9548afb8_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/less-loader/dist/cjs.js!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./scene.vue?vue&type=style&index=0&id=9548afb8&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./examples/vue/components/scene.vue?vue&type=style&index=0&id=9548afb8&lang=css");


/***/ }),

/***/ "./examples/vue/components/scene.vue?vue&type=script&setup=true&lang=js":
/*!******************************************************************************!*\
  !*** ./examples/vue/components/scene.vue?vue&type=script&setup=true&lang=js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_6_use_0_scene_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_6_use_0_scene_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./scene.vue?vue&type=script&setup=true&lang=js */ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./examples/vue/components/scene.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./examples/vue/views/home/index.vue?vue&type=script&setup=true&lang=js":
/*!******************************************************************************!*\
  !*** ./examples/vue/views/home/index.vue?vue&type=script&setup=true&lang=js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_6_use_0_index_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_6_use_0_index_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./index.vue?vue&type=script&setup=true&lang=js */ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./examples/vue/views/home/index.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./examples/vue/components/scene.vue?vue&type=template&id=9548afb8":
/*!*************************************************************************!*\
  !*** ./examples/vue/components/scene.vue?vue&type=template&id=9548afb8 ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_6_use_0_scene_vue_vue_type_template_id_9548afb8__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_6_use_0_scene_vue_vue_type_template_id_9548afb8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./scene.vue?vue&type=template&id=9548afb8 */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./examples/vue/components/scene.vue?vue&type=template&id=9548afb8");


/***/ }),

/***/ "./examples/vue/views/home/index.vue?vue&type=template&id=30482db4":
/*!*************************************************************************!*\
  !*** ./examples/vue/views/home/index.vue?vue&type=template&id=30482db4 ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_6_use_0_index_vue_vue_type_template_id_30482db4__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_6_use_0_index_vue_vue_type_template_id_30482db4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./index.vue?vue&type=template&id=30482db4 */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./examples/vue/views/home/index.vue?vue&type=template&id=30482db4");


/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./examples/vue/components/scene.vue?vue&type=template&id=9548afb8":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./examples/vue/components/scene.vue?vue&type=template&id=9548afb8 ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");


const _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  id: "guiBox",
  class: "guiBox"
}, null, -1 /* HOISTED */)
const _hoisted_2 = {
  class: "scene",
  ref: "sceneBox"
}

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" 自定义gui的位置 "),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("> "),
    _hoisted_1,
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, null, 512 /* NEED_PATCH */)
  ]))
}

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./examples/vue/views/home/index.vue?vue&type=template&id=30482db4":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./examples/vue/views/home/index.vue?vue&type=template&id=30482db4 ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");


function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Scene"])
  ]))
}

/***/ })

}]);