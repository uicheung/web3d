"use strict";
(self["webpackChunkvuepress_vue3"] = self["webpackChunkvuepress_vue3"] || []).push([["examples_vue_views_room_index_vue"],{

/***/ "./examples/vue/handle/SpriteCanvas.js":
/*!*********************************************!*\
  !*** ./examples/vue/handle/SpriteCanvas.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SpriteCanvas)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");


class SpriteCanvas {
  constructor(
    camera,
    text = "helloworld",
    position = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(0, 0, 0),
    euler = new three__WEBPACK_IMPORTED_MODULE_0__.Euler(0, 0, 0)
  ) {
    this.fns = [];
    // 创建canvas对象
    const canvas = document.createElement("canvas");
    canvas.setAttribute("style","")
    canvas.width = 1024;
    canvas.height = 1024;
    // canvas.style.position = "absolute";
    // canvas.style.top = "0px";
    // canvas.style.left = "0px";
    // canvas.style.zIndex = "1";
    // canvas.style.transformOrigin = "0 0";
    // canvas.style.transform = "scale(0.1)";
    const context = canvas.getContext("2d");
    this.context = context;
    context.fillStyle = "rgba(100,100,100,1)";
    context.fillRect(0, 256, 1024, 512);
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.font = "bold 200px Arial";
    context.fillStyle = "rgba(255,255,255,1)";
    context.fillText(text, canvas.width / 2, canvas.height / 2);

    let texture = new three__WEBPACK_IMPORTED_MODULE_0__.CanvasTexture(canvas);

    const material = new three__WEBPACK_IMPORTED_MODULE_0__.SpriteMaterial({
      map: texture,
      color: 0xffffff,
      alphaMap: texture,
      side: three__WEBPACK_IMPORTED_MODULE_0__.DoubleSide,
      transparent: true,
      // blending: THREE.AdditiveBlending,
    });
    this.mesh = new three__WEBPACK_IMPORTED_MODULE_0__.Sprite(material);
    this.mesh.scale.set(0.5, 0.5, 0.5);
    this.mesh.position.copy(position);
    // this.mesh.rotation.copy(euler);

    // console.log(this);

    // 创建射线
    this.raycaster = new three__WEBPACK_IMPORTED_MODULE_0__.Raycaster();
    this.mouse = new three__WEBPACK_IMPORTED_MODULE_0__.Vector2();

    // 事件的监听
    window.addEventListener("click", (event) => {
      this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      this.mouse.y = -((event.clientY / window.innerHeight) * 2 - 1);

      this.raycaster.setFromCamera(this.mouse, camera);

      event.mesh = this.mesh;
      event.spriteCanvas = this;

      // console.log(this.mouse);
      const intersects = this.raycaster.intersectObject(this.mesh);
      // console.log(intersects);
      if (intersects.length > 0) {
        this.fns.forEach((fn) => {
          fn(event);
        });
      }
    });
  }
  onClick(fn) {
    this.fns.push(fn);
  }
}


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./examples/vue/components/room/index.vue?vue&type=style&index=0&id=44142f36&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./examples/vue/components/room/index.vue?vue&type=style&index=0&id=44142f36&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../static/img/location.png */ "./static/img/location.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../static/img/loading.png */ "./static/img/loading.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n}\n.container {\n  height: 100vh;\n  width: 100vw;\n  background-color: #f0f0f0;\n}\n.map {\n  width: 300px;\n  height: 260px;\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  overflow: hidden;\n  border-radius: 10px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\n}\n.map > img {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n.map > .tag {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 30px;\n  height: 30px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: cover;\n  z-index: 1000;\n}\n.loading {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-size: cover;\n  filter: blur(50px);\n  z-index: 100;\n}\n.progress {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  z-index: 101;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 20px;\n  color: #fff;\n}\n.progress > img {\n  padding: 0 15px;\n}\n.title {\n  width: 180px;\n  height: 40px;\n  position: fixed;\n  right: 100px;\n  top: 50px;\n  background-color: rgba(0, 0, 0, 0.5);\n  line-height: 40px;\n  text-align: center;\n  color: #fff;\n  border-radius: 5px;\n  z-index: 110;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./examples/vue/components/room/index.vue?vue&type=style&index=0&id=44142f36&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./examples/vue/components/room/index.vue?vue&type=style&index=0&id=44142f36&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_6_use_0_index_vue_vue_type_style_index_0_id_44142f36_lang_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./index.vue?vue&type=style&index=0&id=44142f36&lang=css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./examples/vue/components/room/index.vue?vue&type=style&index=0&id=44142f36&lang=css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_6_use_0_index_vue_vue_type_style_index_0_id_44142f36_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_6_use_0_index_vue_vue_type_style_index_0_id_44142f36_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_6_use_0_index_vue_vue_type_style_index_0_id_44142f36_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_6_use_0_index_vue_vue_type_style_index_0_id_44142f36_lang_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./static/img/loading.gif":
/*!********************************!*\
  !*** ./static/img/loading.gif ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/gif;base64,R0lGODlhIAAQAOZKACAgICoqKsDAwH9/fz8/P4CAgN/f39XV1erq6khISLCwsIyMjL+/v+Dg4HBwcPPz85mZmR8fH3NzcxUVFeLi4re3t2ZmZkBAQB0dHY+PjwwMDE9PT6enp5GRkUxMTDMzM0dHR05OTrOzs6qqqnd3d25ubvb29tTU1Lm5uZOTk9vb2xoaGo2NjWxsbMfHx8zMzFhYWLi4uMbGxlVVVfHx8fDw8CEhITk5OQkJCeXl5XJycg8PDw4ODjg4OAsLC4iIiPT09KOjo97e3lxcXEZGRiQkJLGxsSsrK////wAAAP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFAABKACwAAAAAIAAQAAAHTIBJgoOEhYaHhUiKi4yNjo+KgpCTlIuSlZiOl5mcSJudmJ+TIwQEI5mikASCBKhJmatJraGvmKSmrqCcqbqPvL2Nv8CWtcOQiMjJhoEAIfkEBQAASgAsDQAFAAYABgAABxaAOQMBAQOCSYhJg4lJhIyFjIaDhTmBACH5BAUAAEoALAwABAAIAAgAAAcigEgMFhERFgyCH0mLSR+DjIyEkIuFk0mGloeKjI6ChIaIgQAh+QQFAABKACwKAAIADAAMAAAHOoBISBQZCRMTCRkUgkgyG0mQkRsyg4+RlxuEl5tJhZyXhp+Rh6KQiKVJiaiKlpyZja2SlIKEhoiKgoEAIfkEBQAASgAsCAABABAADgAAB0iASEgGEhpJh4gaEgaCg0OIkIhDjEgSkZdJEkgohpiQGig6npc6PaORPTunkDuqq4c7pq9JPaKzOpyvoJWvmo6nk42EnZ+LgoEAIfkEBQAASgAsBQABABYADgAAB0eASAYeSYWGh4hJHgZISAOJkIgDSCdFkZdJRScdmJgdMJ2XMAGhkQE+pZA+qKmIPqSthwGgsYYwnLWFHZW5mo65k4KErYtIgQAh+QQFAABKACwCAAEAHAAOAAAHRoBIKUmEhYaHiIUpSDQEiY+QBDRGkJWJRiSWmoUkIJubIDafmjY4o5Y4pqeQOKKrjzaer4kgmbOIJJS3h0aNu4WSgr+Ei4EAIfkEBQAASgAsAQABAB4ADgAABx+ASYKDhIWGh4iJiouMjY6PkJGSk5SVlpeYmZqbnI6BACH5BAUAAEoALA4ABgAEAAQAAAcNgDMCAoJISIOGhIMzgQAh+QQFAABKACwNAAUABgAGAAAHFoArBQcHBYJIiEiDiUiEjIWMhoOFK4EAIfkEBQAASgAsDAAEAAgACAAAByKASRcQDQ0QF4IvSItIL4OMjISQi4WTSIaWh4qMjoKEhoiBACH5BAUAAEoALAoAAgAMAAwAAAc6gElJGA4VCAgVDhiCSTcKSJCRCjeDj5GXCoSXm0iFnJeGn5GHopCIpUiJqIqWnJmNrZKUgoSGiIqCgQAh+QQFAABKACwIAAEAEAAOAAAHSIBJSQALD0iHiA8LAIKDQYiQiEGMSQuRl0gLSUSGmJAPRCyelywuo5EuNaeQNaqrhzWmr0guorMsnK+gla+ajqeTjYSdn4uCgQAh+QQFAABKACwFAAEAFgAOAAAHR4BJACJIhYaHiEgiAElJBYmQiAVJRyqRl0gqRyWYmCUcnZccB6GRB0ClkECoqYhApK2HB6CxhhyctYUllbmajrmTgoSti0mBACH5BAUAAEoALAIAAQAcAA4AAAdGgEktSISFhoeIhS1JPAKJj5ACPCGQlYkhP5aahT8xm5sxQp+aQiajliamp5AmoquPQp6viTGZs4g/lLeHIY27hZKCv4SLgQAh+QQFAABKACwBAAEAHgAOAAAHH4BIgoOEhYaHiImKi4yNjo+QkZKTlJWWl5iZmpucjoEAOw0K");

/***/ }),

/***/ "./static/img/map.gif":
/*!****************************!*\
  !*** ./static/img/map.gif ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("./img/af481c1361439b7ed4ecfb83068c1e9a.gif");

/***/ }),

/***/ "./examples/vue/components/room/index.vue":
/*!************************************************!*\
  !*** ./examples/vue/components/room/index.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_44142f36__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=44142f36 */ "./examples/vue/components/room/index.vue?vue&type=template&id=44142f36");
/* harmony import */ var _index_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&setup=true&lang=js */ "./examples/vue/components/room/index.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _index_vue_vue_type_style_index_0_id_44142f36_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=44142f36&lang=css */ "./examples/vue/components/room/index.vue?vue&type=style&index=0&id=44142f36&lang=css");
/* harmony import */ var _Users_uicheung_Code_vuepress_vuepress2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_Users_uicheung_Code_vuepress_vuepress2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_index_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_index_vue_vue_type_template_id_44142f36__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"examples/vue/components/room/index.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./examples/vue/components/room/index.vue?vue&type=script&setup=true&lang=js":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./examples/vue/components/room/index.vue?vue&type=script&setup=true&lang=js ***!
  \*******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ "./node_modules/three/examples/jsm/controls/OrbitControls.js");
/* harmony import */ var three_examples_jsm_loaders_RGBELoader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three/examples/jsm/loaders/RGBELoader */ "./node_modules/three/examples/jsm/loaders/RGBELoader.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var _handle_SpriteCanvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../handle/SpriteCanvas */ "./examples/vue/handle/SpriteCanvas.js");

  
  
  
  
  
  
  
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'index',
  setup(__props, { expose }) {
  expose();

  let tagDiv = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
  let progress = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0);
  // 初始化场景
  const scene = new three__WEBPACK_IMPORTED_MODULE_2__.Scene();
  // 初始化相机
  const camera = new three__WEBPACK_IMPORTED_MODULE_2__.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  // 设置相机位置
  camera.position.set(0, 0, 0);
  // 初始化渲染器
  const renderer = new three__WEBPACK_IMPORTED_MODULE_2__.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  
  const container = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
  
  const render = () => {
    renderer.render(scene, camera);
    requestAnimationFrame(render);
  };
  
  // 创建辅助坐标轴
  // const axes = new THREE.AxesHelper(5);
  // scene.add(axes);
  
  // 添加立方体
  const geometry = new three__WEBPACK_IMPORTED_MODULE_2__.BoxGeometry(10, 10, 10);
  geometry.scale(1, 1, -1);
  // const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  // const cube = new THREE.Mesh(geometry, material);
  // scene.add(cube);
  
  // 挂载完毕之后获取dom
  (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(() => {
    function moveTag(name) {
      let positions = {
        客厅: [100, 110],
        厨房: [180, 190],
        阳台: [50, 50],
        卧室: [160, 40],
        走廊: [150, 90],
      };
      if (positions[name]) {
        gsap__WEBPACK_IMPORTED_MODULE_3__["default"].to(tagDiv.value, {
          duration: 1,
          x: positions[name][0],
          y: positions[name][1],
          ease: "power3.inOut",
        });
      }
    }
    tagDiv.value.style.cssText = `
      transform: translate(100px,110px);
    `;
  
    // 创建客厅
    let livingIndex = 0;
    let livingUrl = "./img/livingroom/";
    let livingPosition = new three__WEBPACK_IMPORTED_MODULE_2__.Vector3(0, 0, 0);
    const living = new Room("客厅", livingIndex, livingUrl, livingPosition);
  
    // 创建厨房
    let kitPosition = new three__WEBPACK_IMPORTED_MODULE_2__.Vector3(-5, 0, -10);
    let kitIndex = 3;
    let textureUrl = "./img/kitchen";
    let kitEuler = new three__WEBPACK_IMPORTED_MODULE_2__.Euler(0, -Math.PI / 2, 0);
    const room = new Room("厨房", kitIndex, textureUrl, kitPosition, kitEuler);
    // 创建文字精灵
    const text = new _handle_SpriteCanvas__WEBPACK_IMPORTED_MODULE_1__["default"](camera, "厨房", new three__WEBPACK_IMPORTED_MODULE_2__.Vector3(-1, 0, -3));
    // text.mesh.rotation.y = Math.PI / 3;
    scene.add(text.mesh);
    text.onClick(() => {
      console.log("厨房");
      gsap__WEBPACK_IMPORTED_MODULE_3__["default"].to(camera.position, {
        x: kitPosition.x,
        y: kitPosition.y,
        z: kitPosition.z,
        duration: 1,
      });
      moveTag("厨房");
    });
  
    // 创建客厅文字精灵
    const textLiving = new _handle_SpriteCanvas__WEBPACK_IMPORTED_MODULE_1__["default"](
      camera,
      "客厅",
      new three__WEBPACK_IMPORTED_MODULE_2__.Vector3(-4, 0, -6)
    );
    scene.add(textLiving.mesh);
    textLiving.onClick(() => {
      console.log("客厅");
      gsap__WEBPACK_IMPORTED_MODULE_3__["default"].to(camera.position, {
        x: livingPosition.x,
        y: livingPosition.y,
        z: livingPosition.z,
        duration: 1,
      });
      moveTag("客厅");
    });
  
    // 创建阳台
    let balconyPosition = new three__WEBPACK_IMPORTED_MODULE_2__.Vector3(0, 0, 15);
    let balconyIndex = 8;
    let balconyUrl = "./img/balcony";
    let balconyEuler = new three__WEBPACK_IMPORTED_MODULE_2__.Euler(0, Math.PI / 16, 0);
    const balcony = new Room(
      "阳台",
      balconyIndex,
      balconyUrl,
      balconyPosition,
      balconyEuler
    );
  
    // 创建阳台文字精灵
    const textBalcony = new _handle_SpriteCanvas__WEBPACK_IMPORTED_MODULE_1__["default"](
      camera,
      "阳台",
      new three__WEBPACK_IMPORTED_MODULE_2__.Vector3(0, 0, 3)
    );
    scene.add(textBalcony.mesh);
    textBalcony.onClick(() => {
      console.log("阳台");
      gsap__WEBPACK_IMPORTED_MODULE_3__["default"].to(camera.position, {
        x: balconyPosition.x,
        y: balconyPosition.y,
        z: balconyPosition.z,
        duration: 1,
      });
      moveTag("阳台");
    });
  
    // 创建阳台回客厅文字精灵
    const textBalconyToLiving = new _handle_SpriteCanvas__WEBPACK_IMPORTED_MODULE_1__["default"](
      camera,
      "客厅",
      new three__WEBPACK_IMPORTED_MODULE_2__.Vector3(-1, 0, 11)
    );
    scene.add(textBalconyToLiving.mesh);
    textBalconyToLiving.onClick(() => {
      console.log("客厅");
      gsap__WEBPACK_IMPORTED_MODULE_3__["default"].to(camera.position, {
        x: livingPosition.x,
        y: livingPosition.y,
        z: livingPosition.z,
        duration: 1,
      });
      moveTag("客厅");
    });
  
    // 创建走廊
    let hallwayPosition = new three__WEBPACK_IMPORTED_MODULE_2__.Vector3(-15, 0, 0);
    let hallwayIndex = 9;
    let hallwayUrl = "./img/corridor";
    let hallwayEuler = new three__WEBPACK_IMPORTED_MODULE_2__.Euler(0, -Math.PI + Math.PI / 16, 0);
    const hallway = new Room(
      "走廊",
      hallwayIndex,
      hallwayUrl,
      hallwayPosition,
      hallwayEuler
    );
  
    // 走廊文字精灵
    const textCorridor = new _handle_SpriteCanvas__WEBPACK_IMPORTED_MODULE_1__["default"](
      camera,
      "走廊",
      new three__WEBPACK_IMPORTED_MODULE_2__.Vector3(-4, 0, 0.5)
    );
    scene.add(textCorridor.mesh);
    textCorridor.onClick(() => {
      console.log("走廊");
      gsap__WEBPACK_IMPORTED_MODULE_3__["default"].to(camera.position, {
        x: hallwayPosition.x,
        y: hallwayPosition.y,
        z: hallwayPosition.z,
        duration: 1,
      });
      moveTag("走廊");
    });
  
    // 创建走廊回客厅文字精灵
    const textCorridorToLiving = new _handle_SpriteCanvas__WEBPACK_IMPORTED_MODULE_1__["default"](
      camera,
      "客厅",
      new three__WEBPACK_IMPORTED_MODULE_2__.Vector3(-11, 0, 0)
    );
    scene.add(textCorridorToLiving.mesh);
    textCorridorToLiving.onClick(() => {
      console.log("客厅");
      gsap__WEBPACK_IMPORTED_MODULE_3__["default"].to(camera.position, {
        x: livingPosition.x,
        y: livingPosition.y,
        z: livingPosition.z,
        duration: 1,
      });
      moveTag("客厅");
    });
  
    // 创建主卧
    let mainPosition = new three__WEBPACK_IMPORTED_MODULE_2__.Vector3(-25, 0, 2);
    let mainIndex = 18;
    let mainUrl = "./img/bedroom";
    // let mainEuler = new THREE.Euler(0, -Math.PI / 2, 0);
    const main = new Room(
      "主卧",
      mainIndex,
      mainUrl,
      mainPosition
      // mainEuler
    );
    // 主卧文字精灵
    const textMain = new _handle_SpriteCanvas__WEBPACK_IMPORTED_MODULE_1__["default"](
      camera,
      "主卧",
      new three__WEBPACK_IMPORTED_MODULE_2__.Vector3(-19, 0, 2)
    );
    scene.add(textMain.mesh);
    textMain.onClick(() => {
      console.log("主卧");
      gsap__WEBPACK_IMPORTED_MODULE_3__["default"].to(camera.position, {
        x: mainPosition.x,
        y: mainPosition.y,
        z: mainPosition.z,
        duration: 1,
      });
      moveTag("主卧");
    });
    // 创建主卧回走廊文字精灵
    const textMainToCorridor = new _handle_SpriteCanvas__WEBPACK_IMPORTED_MODULE_1__["default"](
      camera,
      "走廊",
      new three__WEBPACK_IMPORTED_MODULE_2__.Vector3(-23, 0, -2)
    );
    scene.add(textMainToCorridor.mesh);
    textMainToCorridor.onClick(() => {
      console.log("走廊");
      gsap__WEBPACK_IMPORTED_MODULE_3__["default"].to(camera.position, {
        x: hallwayPosition.x,
        y: hallwayPosition.y,
        z: hallwayPosition.z,
        duration: 1,
      });
      moveTag("走廊");
    }),
      container.value.appendChild(renderer.domElement);
    render();
  
    let isMouseDown = false;
  
    // 监听鼠标按下事件
    window.addEventListener(
      "mousedown",
      () => {
        isMouseDown = true;
      },
      false
    );
    // 监听鼠标抬起事件
    window.addEventListener(
      "mouseup",
      () => {
        isMouseDown = false;
      },
      false
    );
    // 监听鼠标移动事件
    window.addEventListener(
      "mousemove",
      (e) => {
        if (isMouseDown) {
          camera.rotation.y += (e.movementX / window.innerWidth) * Math.PI;
          // camera.rotation.x += (e.movementY / window.innerHeight) * Math.PI;
        }
      },
      false
    );
  });
  
  class Room {
    constructor(
      name,
      roomIndex,
      textureUrl,
      position = new three__WEBPACK_IMPORTED_MODULE_2__.Vector3(0, 0, 0),
      euler = new three__WEBPACK_IMPORTED_MODULE_2__.Euler(0, 0, 0)
    ) {
      this.name = name;
      // 添加立方体
      const geometry = new three__WEBPACK_IMPORTED_MODULE_2__.BoxGeometry(10, 10, 10);
      geometry.scale(1, 1, -1);
      // const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
      // const cube = new THREE.Mesh(geometry, material);
      // scene.add(cube);
  
      // 4_b,
      var arr = [
        `${roomIndex}_l`,
        `${roomIndex}_r`,
        `${roomIndex}_u`,
        `${roomIndex}_d`,
        `${roomIndex}_b`,
        `${roomIndex}_f`,
      ];
      var boxMaterials = [];
  
      arr.forEach((item) => {
        // 纹理加载
        let texture = new three__WEBPACK_IMPORTED_MODULE_2__.TextureLoader().load(`./static/${textureUrl}/${item}.jpg`);
        // 创建材质
        if (item === `${roomIndex}_u` || item === `${roomIndex}_d`) {
          texture.rotation = Math.PI;
          texture.center = new three__WEBPACK_IMPORTED_MODULE_2__.Vector2(0.5, 0.5);
          boxMaterials.push(new three__WEBPACK_IMPORTED_MODULE_2__.MeshBasicMaterial({ map: texture }));
        } else {
          boxMaterials.push(new three__WEBPACK_IMPORTED_MODULE_2__.MeshBasicMaterial({ map: texture }));
        }
      });
      const cube = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(geometry, boxMaterials);
      cube.position.copy(position);
      cube.rotation.copy(euler);
      // cube.geometry.scale(1, 1, -1);
      scene.add(cube);
  
      three__WEBPACK_IMPORTED_MODULE_2__.DefaultLoadingManager.onProgress = function (item, loaded, total) {
        console.log(item, loaded, total);
        progress.value = new Number((loaded / total) * 100).toFixed(2);
      };
    }
  }
  
const __returned__ = { get tagDiv() { return tagDiv }, set tagDiv(v) { tagDiv = v }, get progress() { return progress }, set progress(v) { progress = v }, scene, camera, renderer, container, render, geometry, Room, get THREE() { return three__WEBPACK_IMPORTED_MODULE_2__ }, get OrbitControls() { return three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_4__.OrbitControls }, get RGBELoader() { return three_examples_jsm_loaders_RGBELoader__WEBPACK_IMPORTED_MODULE_5__.RGBELoader }, ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref, onMounted: vue__WEBPACK_IMPORTED_MODULE_0__.onMounted, get gsap() { return gsap__WEBPACK_IMPORTED_MODULE_3__["default"] }, get SpriteCanvas() { return _handle_SpriteCanvas__WEBPACK_IMPORTED_MODULE_1__["default"] } }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

});

/***/ }),

/***/ "./examples/vue/views/room/index.vue":
/*!*******************************************!*\
  !*** ./examples/vue/views/room/index.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_8d0a22a0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=8d0a22a0 */ "./examples/vue/views/room/index.vue?vue&type=template&id=8d0a22a0");
/* harmony import */ var _index_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&setup=true&lang=js */ "./examples/vue/views/room/index.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _Users_uicheung_Code_vuepress_vuepress2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_uicheung_Code_vuepress_vuepress2_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_index_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_index_vue_vue_type_template_id_8d0a22a0__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"examples/vue/views/room/index.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./examples/vue/views/room/index.vue?vue&type=script&setup=true&lang=js":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./examples/vue/views/room/index.vue?vue&type=script&setup=true&lang=js ***!
  \**************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_room_index_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/room/index.vue */ "./examples/vue/components/room/index.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'index',
  setup(__props, { expose }) {
  expose();


const __returned__ = { Room: _components_room_index_vue__WEBPACK_IMPORTED_MODULE_0__["default"] }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

});

/***/ }),

/***/ "./examples/vue/components/room/index.vue?vue&type=style&index=0&id=44142f36&lang=css":
/*!********************************************************************************************!*\
  !*** ./examples/vue/components/room/index.vue?vue&type=style&index=0&id=44142f36&lang=css ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_6_use_0_index_vue_vue_type_style_index_0_id_44142f36_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./index.vue?vue&type=style&index=0&id=44142f36&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./examples/vue/components/room/index.vue?vue&type=style&index=0&id=44142f36&lang=css");


/***/ }),

/***/ "./examples/vue/components/room/index.vue?vue&type=script&setup=true&lang=js":
/*!***********************************************************************************!*\
  !*** ./examples/vue/components/room/index.vue?vue&type=script&setup=true&lang=js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_6_use_0_index_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_6_use_0_index_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./index.vue?vue&type=script&setup=true&lang=js */ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./examples/vue/components/room/index.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./examples/vue/views/room/index.vue?vue&type=script&setup=true&lang=js":
/*!******************************************************************************!*\
  !*** ./examples/vue/views/room/index.vue?vue&type=script&setup=true&lang=js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_6_use_0_index_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_6_use_0_index_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./index.vue?vue&type=script&setup=true&lang=js */ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./examples/vue/views/room/index.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./examples/vue/components/room/index.vue?vue&type=template&id=44142f36":
/*!******************************************************************************!*\
  !*** ./examples/vue/components/room/index.vue?vue&type=template&id=44142f36 ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_6_use_0_index_vue_vue_type_template_id_44142f36__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_6_use_0_index_vue_vue_type_template_id_44142f36__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./index.vue?vue&type=template&id=44142f36 */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./examples/vue/components/room/index.vue?vue&type=template&id=44142f36");


/***/ }),

/***/ "./examples/vue/views/room/index.vue?vue&type=template&id=8d0a22a0":
/*!*************************************************************************!*\
  !*** ./examples/vue/views/room/index.vue?vue&type=template&id=8d0a22a0 ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_6_use_0_index_vue_vue_type_template_id_8d0a22a0__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_6_use_0_index_vue_vue_type_template_id_8d0a22a0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./index.vue?vue&type=template&id=8d0a22a0 */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./examples/vue/views/room/index.vue?vue&type=template&id=8d0a22a0");


/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./examples/vue/components/room/index.vue?vue&type=template&id=44142f36":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./examples/vue/components/room/index.vue?vue&type=template&id=44142f36 ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _static_img_map_gif__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../static/img/map.gif */ "./static/img/map.gif");
/* harmony import */ var _static_img_loading_gif__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../static/img/loading.gif */ "./static/img/loading.gif");





const _hoisted_1 = {
  class: "container",
  ref: "container"
}
const _hoisted_2 = { class: "map" }
const _hoisted_3 = {
  class: "tag",
  ref: "tagDiv"
}
const _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _static_img_map_gif__WEBPACK_IMPORTED_MODULE_1__["default"],
  alt: ""
}, null, -1 /* HOISTED */)
const _hoisted_5 = {
  key: 0,
  class: "loading"
}
const _hoisted_6 = {
  key: 1,
  class: "progress"
}
const _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: _static_img_loading_gif__WEBPACK_IMPORTED_MODULE_2__["default"],
  alt: ""
}, null, -1 /* HOISTED */)
const _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", { class: "title" }, "全景看房", -1 /* HOISTED */)

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, null, 512 /* NEED_PATCH */),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, null, 512 /* NEED_PATCH */),
      _hoisted_4
    ]),
    ($setup.progress != 100)
      ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_5))
      : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
    ($setup.progress != 100)
      ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_6, [
          _hoisted_7,
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "新房奔跑中：" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.progress) + "%", 1 /* TEXT */)
        ]))
      : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
    _hoisted_8
  ], 64 /* STABLE_FRAGMENT */))
}

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./examples/vue/views/room/index.vue?vue&type=template&id=8d0a22a0":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./examples/vue/views/room/index.vue?vue&type=template&id=8d0a22a0 ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");


function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Room"])
  ]))
}

/***/ }),

/***/ "./static/img/loading.png":
/*!********************************!*\
  !*** ./static/img/loading.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e39bef101984e792fee1.png";

/***/ }),

/***/ "./static/img/location.png":
/*!*********************************!*\
  !*** ./static/img/location.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "32c192b25a27addc4065.png";

/***/ })

}]);