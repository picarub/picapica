/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_13_4_0_vue_loader_lib_selector_type_script_index_0_Search_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_13_4_0_vue_loader_lib_template_compiler_index_id_data_v_772dc56c_hasScoped_false_buble_transforms_node_modules_13_4_0_vue_loader_lib_selector_type_template_index_0_Search_vue__ = __webpack_require__(6);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_13_4_0_vue_loader_lib_selector_type_script_index_0_Search_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_13_4_0_vue_loader_lib_template_compiler_index_id_data_v_772dc56c_hasScoped_false_buble_transforms_node_modules_13_4_0_vue_loader_lib_selector_type_template_index_0_Search_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Headbar_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store_store__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Musicbox_vue__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Idolpost_vue__ = __webpack_require__(18);


/* import components */




//import Idol from './vue/Idol.vue'
//import Tube from './vue/Tube.vue'
//import Motion from './vue/Motion.vue'

const Home = { template: "<div style='margin:1em auto;max-width:1200px;text-align:center;'><router-view></router-view></div>" };
const Default = { template: "<div class='page'>coming soon ...</div>"

  /* setup router | 路由 */
};Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history', /* router working as on a web server */
  routes: [{ path: '/', component: Home,
    children: [{ path: '', component: Default }, { path: 'music', component: __WEBPACK_IMPORTED_MODULE_2__components_Musicbox_vue__["a" /* default */] }, { path: 'idolpost', component: __WEBPACK_IMPORTED_MODULE_3__components_Idolpost_vue__["a" /* default */] }, { path: 'mv', component: Default }, /* This component is not ready for github */
    { path: 'video', component: Default /* This component is not ready for github */
    }]
  }]
});

/* custom Vue global functions | 自定义Vue全局方法 */
Vue.gofetch = (url, name, is_reverse) => {
  fetch(url).then(response => {
    return response.json();
  }).then(data => {
    if (data) {
      //   data = JSON.parse(data)
      if (is_reverse) {
        return data.reverse().forEach(e => {
          __WEBPACK_IMPORTED_MODULE_1__store_store__["a" /* default */].commit('ADD_' + name, e);
        });
      } else {
        return data.forEach(e => {
          __WEBPACK_IMPORTED_MODULE_1__store_store__["a" /* default */].commit('ADD_' + name, e);
        });
      }
    }
  });
};

/* setup root component | 根组件 */
new Vue({
  store: __WEBPACK_IMPORTED_MODULE_1__store_store__["a" /* default */],
  router,
  components: { Headbar: __WEBPACK_IMPORTED_MODULE_0__components_Headbar_vue__["a" /* default */] },
  mounted: function () {
    /* get data from server when created */
    Vue.gofetch('/a/find?keyword=ok', 'SONG');
    Vue.gofetch('/a/find?timeline', 'IDOL_POST', 1);
    this.$router.push('music');
  },
  template: `
   <div id='root'>
    <headbar/>
    <router-view></router-view>
   </div>
  `
}).$mount('#root');

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_13_4_0_vue_loader_lib_selector_type_script_index_0_Headbar_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_13_4_0_vue_loader_lib_template_compiler_index_id_data_v_cd4f2096_hasScoped_false_buble_transforms_node_modules_13_4_0_vue_loader_lib_selector_type_template_index_0_Headbar_vue__ = __webpack_require__(7);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_13_4_0_vue_loader_lib_selector_type_script_index_0_Headbar_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_13_4_0_vue_loader_lib_template_compiler_index_id_data_v_cd4f2096_hasScoped_false_buble_transforms_node_modules_13_4_0_vue_loader_lib_selector_type_template_index_0_Headbar_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Search_vue__ = __webpack_require__(1);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'headbar',
  data() {
    return {
      msg: 'non'
    };
  },
  components: { Search: __WEBPACK_IMPORTED_MODULE_0__Search_vue__["a" /* default */] }
});

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'search',
  props: ['c', 's'],
  data() {
    return {
      value: '',
      placeholder: '搜JPOP试听'
    };
  },
  created: function () {
    /* set search input placeholder properly per second */
    setInterval(() => {
      if (this.$route.path === '/music') {
        return this.placeholder = '搜JPOP试听';
      }
      if (this.$route.path === '/idolpost') {
        return this.placeholder = '搜爱豆po文';
      }
      if (this.$route.path === '/idol') {
        return this.placeholder = '搜爱豆';
      }
      if (this.$route.path === '/mv') {
        return this.placeholder = '搜JPOP MV';
      }
      if (this.$route.path === '/video') {
        return this.placeholder = '搜影片';
      }
      if (this.$route.path === '/drama') {
        return this.placeholder = '搜剧集';
      }
    }, 1000);
  },
  methods: {
    /* get input value and current pathname then request server for data */
    searchit: function () {
      let q = this.value.trim();
      let loc = this.$route.path;
      let url = '';
      if (loc === '/music') {
        url = '/a/find?keyword=' + q;
        Vue.gofetch(url, 'SONG');
        this.value = '';
      }
      if (loc === '/idolpost') {
        url = '/a/find?timeline=' + q;
        Vue.gofetch(url, 'IDOL_POST', 1);
        this.value = '';
      }
      if (loc === '/idol') {
        url = '/a/find?member=' + q;
        Vue.gofetch(url, 'IDOL');
        this.value = '';
      }
      if (loc === '/mv') {
        url = '/a/find?yt=' + q;
        Vue.gofetch(url, 'TUBE', 1);
        this.value = '';
      }
      if (loc === '/video') {
        url = '/a/find?dm=' + q;
        Vue.gofetch(url, 'MOTION', 1);
        this.value = '';
      }
    }
  }
});

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.c,style:(_vm.s)},[_c('div',{staticStyle:{"margin":"0 auto","padding":".3em 0 0","max-width":"16em","position":"relative","width":"100%","height":"3em"}},[_c('i',{staticClass:"fa fa-search hvr-grow",staticStyle:{"margin":".75em 0 0","padding":"0","position":"absolute","right":"0","color":"#bbb"},on:{"click":function($event){$event.preventDefault();_vm.searchit($event)}}}),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.value),expression:"value"}],staticClass:"search",staticStyle:{"width":"100%","height":"2.5em","margin":"0","padding":"0 .5em","border-radius":".5em","border":"solid 1px #ccc","-webkit-appearance":"none"},attrs:{"type":"text","placeholder":_vm.placeholder},domProps:{"value":(_vm.value)},on:{"keyup":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13,$event.key)){ return null; }$event.preventDefault();_vm.searchit($event)},"input":function($event){if($event.target.composing){ return; }_vm.value=$event.target.value}}})])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',{staticClass:"header"},[_c('div',{staticClass:"hb"},[_c('div',{staticClass:"hbb row",staticStyle:{"justify-items":"center","height":"3.5em"}},[_c('div',{staticClass:"col-6 sm-4 left",staticStyle:{"padding":".3em 0 0 .5em"}},[_c('router-link',{attrs:{"to":"/music"}},[_c('img',{staticClass:"hvr-grow",staticStyle:{"height":"3em"},attrs:{"src":"/r/l.png"}})])],1),_vm._v(" "),_c('search',{attrs:{"c":"sm-4 center invisible-xs","s":"padding:.1em .75em 0 0"}}),_vm._v(" "),_c('div',{staticClass:"col-6 sm-4 right",staticStyle:{"padding":".4em .5em 0 0"}},[_c('div',{staticStyle:{"display":"flex","align-items":"center"}},[_c('div',{staticClass:"col-3 sm-6"}),_vm._v(" "),_c('div',{staticClass:"col-3 sm-2"},[_c('router-link',{attrs:{"to":"/idolpost"}},[_c('img',{staticClass:"hvr-grow",staticStyle:{"height":"2.5em"},attrs:{"src":"/r/5.png"}})])],1),_vm._v(" "),_c('div',{staticClass:"col-3 sm-2"},[_c('router-link',{attrs:{"to":"/mv"}},[_c('img',{staticClass:"hvr-grow",staticStyle:{"height":"2.5em"},attrs:{"src":"/r/maru.png"}})])],1),_vm._v(" "),_c('div',{staticClass:"col-3 sm-2"},[_c('router-link',{attrs:{"to":"/video"}},[_c('img',{staticClass:"hvr-grow",staticStyle:{"height":"2.5em"},attrs:{"src":"/r/sun5.png"}})])],1)])])],1)])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

Vue.use(Vuex);

/* harmony default export */ __webpack_exports__["a"] = (new Vuex.Store({
  state: {
    songs: [],
    idol_posts: [],
    idols: [],
    tubes: [],
    motions: []
  },
  getters: {
    ALL_SONG: state => state.songs,
    ALL_IDOL_POST: state => state.idol_posts,
    ALL_IDOL: state => state.idols,
    ALL_TUBE: state => state.tubes,
    ALL_MOTION: state => state.motions
  },
  mutations: {
    ADD_SONG(state, v) {
      state.songs.unshift(v);
    },
    DEL_SONG(state) {
      state.songs = [];
    },
    ADD_IDOL_POST(state, v) {
      state.idol_posts.unshift(v);
    },
    DEL_IDOL_POST(state) {
      state.idol_posts = [];
    },
    ADD_IDOL(state, v) {
      state.idols.unshift(v);
    },
    DEL_IDOL(state) {
      state.idols = [];
    },
    ADD_TUBE(state, v) {
      state.tubes.unshift(v);
    },
    DEL_TUBE(state) {
      state.tubes = [];
    },
    ADD_MOTION(state, v) {
      state.motions.unshift(v);
    },
    DEL_MOTION(state) {
      state.motions = [];
    }
  }
}));

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_13_4_0_vue_loader_lib_selector_type_script_index_0_Musicbox_vue__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_13_4_0_vue_loader_lib_template_compiler_index_id_data_v_7bf0eaba_hasScoped_false_buble_transforms_node_modules_13_4_0_vue_loader_lib_selector_type_template_index_0_Musicbox_vue__ = __webpack_require__(17);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_13_4_0_vue_loader_lib_selector_type_script_index_0_Musicbox_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_13_4_0_vue_loader_lib_template_compiler_index_id_data_v_7bf0eaba_hasScoped_false_buble_transforms_node_modules_13_4_0_vue_loader_lib_selector_type_template_index_0_Musicbox_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Musicbar_vue__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Search_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Idolposttiny_vue__ = __webpack_require__(14);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'musicbox',
  components: {
    Musicbar: __WEBPACK_IMPORTED_MODULE_0__Musicbar_vue__["a" /* default */],
    Search: __WEBPACK_IMPORTED_MODULE_1__Search_vue__["a" /* default */],
    Idolposttiny: __WEBPACK_IMPORTED_MODULE_2__Idolposttiny_vue__["a" /* default */]
  },
  beforeDestroy: function () {
    this.music.pause();
  },
  data() {
    return {
      volume: .4,
      show: Array(500).fill(false),
      playing: Array(500).fill(false),
      img: Array(500).fill('/r/play.png'),
      music: new Audio()
    };
  },
  methods: {
    playplay: function (s, i) {
      if (!this.music.src || this.music.src !== s) {
        this.music.src = s;
      }
      this.music.volume = .38;
      if (this.playing[i] === true) {
        this.playing = Object.assign({}, this.playing, Array(500).fill(false));
        this.show = Object.assign({}, this.show, Array(500).fill(false));
        this.music.pause();
        console.log('stop');
        return;
      }
      if (this.playing[i] === false) {
        this.playing = Object.assign({}, this.playing, Array(500).fill(false));
        this.show = Object.assign({}, this.show, Array(500).fill(false));
        this.$set(this.playing, i, true);
        this.$set(this.show, i, true);
        this.music.play();
        console.log('play');
        this.music.onended = () => {
          this.$set(this.playing, i, false);
          this.$set(this.show, i, false);
        };
        return;
      }
    }
  }
});

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_13_4_0_vue_loader_lib_selector_type_script_index_0_Musicbar_vue__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_13_4_0_vue_loader_lib_template_compiler_index_id_data_v_7b1f8b19_hasScoped_false_buble_transforms_node_modules_13_4_0_vue_loader_lib_selector_type_template_index_0_Musicbar_vue__ = __webpack_require__(13);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_13_4_0_vue_loader_lib_selector_type_script_index_0_Musicbar_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_13_4_0_vue_loader_lib_template_compiler_index_id_data_v_7b1f8b19_hasScoped_false_buble_transforms_node_modules_13_4_0_vue_loader_lib_selector_type_template_index_0_Musicbar_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'musicbar',
  props: ['playplay', 'show'],
  data() {
    return {
      orig: this.$store.getters.ALL_SONG,
      list: this.$store.getters.ALL_SONG,
      stream: true,
      css: {
        tof: 'white-space: nowrap;text-overflow: ellipsis;overflow: hidden;'
      }
    };
  },
  mounted: function () {
    //  console.log(navigator.userAgent)
  },
  watch: {
    orig: function () {
      this.list = this.orig.filter(function (item, index, self) {
        return self.findIndex(function (t) {
          return t.songID === item.songID;
        }) === index;
      });
    }
  }
});

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"margin":"0 auto","max-width":"640px","text-align":"center"}},[_c('transition-group',{staticStyle:{"margin":"0 auto","padding":"0"},attrs:{"appear":"","tag":"div","appear-active-class":"animated flipInX","enter-active-class":"animated flipInX"}},_vm._l((_vm.list),function(ea,i){return _c('div',{key:ea.songID,staticClass:"visible-xs",staticStyle:{"background-color":"#fff","margin":".5em .3em","padding":"0","border-radius":".35em","box-shadow":".2em .2em .4em #c5c5c5"}},[_c('div',{staticClass:"row",staticStyle:{"align-items":"center"}},[_c('div',{staticClass:"col-3 sm-2 hvr-grow",staticStyle:{"position":"relative"},on:{"click":function($event){_vm.playplay(ea.url, i)}}},[_c('div',{staticClass:"right",staticStyle:{"position":"absolute","width":"50%","max-width":"120px","right":".1em","bottom":".25em","color":"rgba(255,255,255,.9)","font-size":"2em"}},[_c('i',{directives:[{name:"show",rawName:"v-show",value:(!_vm.show[i]),expression:"!show[i]"}],staticClass:"fa fa-play",staticStyle:{"display":"block"}})]),_vm._v(" "),(_vm.show[i])?_c('div',{staticClass:"line-scale-party",staticStyle:{"position":"absolute","right":".1em","bottom":".1em"}},[_c('div'),_c('div'),_c('div'),_c('div')]):_vm._e(),_vm._v(" "),(ea.imgUrl)?_c('img',{staticClass:"rounded",staticStyle:{"width":"100%"},attrs:{"src":ea.imgUrl}}):_c('img',{staticClass:"rounded",staticStyle:{"width":"100%"},attrs:{"src":"/r/5.png"}})]),_vm._v(" "),_c('div',{staticClass:"col-9 sm-10 left",staticStyle:{"padding":"0 1em"}},[_c('div',{staticClass:"col-12",staticStyle:{"font-weight":"bolder","font-size":"1.1em"}},[_c('a',{staticStyle:{"color":"#000"},attrs:{"target":"_blank","href":ea.songUrl}},[_vm._v(_vm._s(ea.songName))])]),_vm._v(" "),_c('div',{staticClass:"col-12",staticStyle:{}},[_c('a',{staticStyle:{"color":"#666"},attrs:{"target":"_blank","href":ea.artistUrl}},[_vm._v(_vm._s(ea.artist))])]),_vm._v(" "),_c('div',{staticClass:"col-12",style:('color:#aaa;'+[_vm.css.tof])},[_vm._v(_vm._s(ea.albumName))])])])])})),_vm._v(" "),_c('transition-group',{staticClass:"row",attrs:{"appear":"","tag":"div","appear-active-class":"animated flipInX","enter-active-class":"animated flipInX"}},_vm._l((_vm.list),function(ea,i){return _c('div',{key:ea.songID,staticClass:"col-4 invisible-xs",staticStyle:{"padding":".6em"}},[_c('div',{staticStyle:{"margin":".3em 0","padding":"0","background-color":"#fff","border-radius":".35em","box-shadow":".25em .25em .5em #c5c5c5"}},[_c('div',{staticClass:"hvr-grow",staticStyle:{"position":"relative"},on:{"click":function($event){_vm.playplay(ea.url, i)}}},[_c('div',{staticClass:"right",staticStyle:{"position":"absolute","width":"50%","max-width":"100px","right":".1em","bottom":".25em","color":"rgba(255,255,255,.9)","font-size":"2em"}},[_c('i',{directives:[{name:"show",rawName:"v-show",value:(!_vm.show[i]),expression:"!show[i]"}],staticClass:"fa fa-play",staticStyle:{"display":"block"}})]),_vm._v(" "),(_vm.show[i])?_c('div',{staticClass:"line-scale-party",staticStyle:{"position":"absolute","right":".1em","bottom":".1em"}},[_c('div'),_c('div'),_c('div'),_c('div')]):_vm._e(),_vm._v(" "),(ea.imgUrl)?_c('img',{staticClass:"rounded",staticStyle:{"width":"100%"},attrs:{"src":ea.imgUrl}}):_c('img',{staticClass:"rounded",staticStyle:{"width":"100%"},attrs:{"src":"/r/5.png"}})]),_vm._v(" "),_c('div',{staticClass:"left",staticStyle:{"padding":".5em","height":"7em"}},[_c('div',{staticStyle:{"font-weight":"bolder","font-size":"1.1em"}},[_c('a',{staticStyle:{"color":"#000"},attrs:{"target":"_blank","href":ea.songUrl}},[_vm._v(_vm._s(ea.songName))])]),_vm._v(" "),_c('div',{style:([_vm.css.tof])},[_c('a',{staticStyle:{"color":"#666"},attrs:{"target":"_blank","href":ea.artistUrl}},[_vm._v(_vm._s(ea.artist))])]),_vm._v(" "),_c('div',{style:('color:#aaa;'+[_vm.css.tof])},[_vm._v(_vm._s(ea.albumName))])])])])}))],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_13_4_0_vue_loader_lib_selector_type_script_index_0_Idolposttiny_vue__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_13_4_0_vue_loader_lib_template_compiler_index_id_data_v_7c830735_hasScoped_false_buble_transforms_node_modules_13_4_0_vue_loader_lib_selector_type_template_index_0_Idolposttiny_vue__ = __webpack_require__(16);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_13_4_0_vue_loader_lib_selector_type_script_index_0_Idolposttiny_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_13_4_0_vue_loader_lib_template_compiler_index_id_data_v_7c830735_hasScoped_false_buble_transforms_node_modules_13_4_0_vue_loader_lib_selector_type_template_index_0_Idolposttiny_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'idolposttiny',
  data() {
    return {
      list: this.$store.getters.ALL_IDOL_POST,
      now: moment()
    };
  },
  methods: {
    timetonow: function (t) {
      return moment(t).from(this.now);
    }
  }
});

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',_vm._l((_vm.list),function(po){return _c('div',{staticStyle:{"background":"#fff","border":"solid 1px #e6e6e6","border-bottom":"0"}},[_c('div',{staticStyle:{"display":"flex","width":"100%","align-items":"center","padding":".5em","margin":".5em 0"}},[_c('a',{attrs:{"target":"_blank","href":po.twitter}},[_c('img',{staticClass:"circle hvr-grow",staticStyle:{"max-width":"32px"},attrs:{"src":po.icon}})]),_vm._v(" "),_c('a',{staticStyle:{"color":"#000"},attrs:{"target":"_blank","href":po.twitter}},[_vm._v("  "+_vm._s(po.name))])]),_vm._v(" "),_c('div',{staticStyle:{"font-size":".9em","padding":".5em","text-align":"left"}},[_vm._v(_vm._s(po.title))]),_vm._v(" "),_c('div',{staticStyle:{"color":"#ccc","font-size":".75em","text-align":"left","padding":".5em"}},[_vm._v(_vm._s(_vm.timetonow(po.post_date)))]),_c('br')])}))}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"row page",staticStyle:{"justify-content":"center"}},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"col-12 sm-10 md-8 lg-6 center"},[_c('search',{attrs:{"c":"col-12 visible-xs","s":"padding:0 .75em .5em 0;"}}),_vm._v(" "),_c('musicbar',{attrs:{"playplay":_vm.playplay,"show":_vm.show}}),_vm._v(" "),_c('footer',{staticStyle:{"color":"#777"}},[_vm._v("(c) 2017 c.z.y.")])],1),_vm._v(" "),_c('div',{staticClass:"sm-1 md-2 lg-3 invisible-xs visible-xl",staticStyle:{"margin":".8em 0","padding":"0 1em"}},[_c('idolposttiny')],1)])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sm-1 md-2 lg-3 invisible-xs visible-xl",staticStyle:{"margin":".75em 0","padding":"0 1em"}},[_c('div',{staticStyle:{"background":"#fff","padding":".5em","border":"solid 1px #eee"}},[_c('a',{attrs:{"href":"/jpop"}},[_c('img',{staticStyle:{"width":"100%"},attrs:{"src":"http://www.at-x.com/images/program/fdaccd90caae36823ecb25a795e9c5b2.jpg"}})]),_vm._v(" "),_c('a',{attrs:{"href":"/jpop"}},[_c('img',{staticStyle:{"width":"100%"},attrs:{"src":"http://umaru-ani.me/img/story/2zTjDheu/img01.jpg"}})])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_13_4_0_vue_loader_lib_selector_type_script_index_0_Idolpost_vue__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_13_4_0_vue_loader_lib_template_compiler_index_id_data_v_3be16627_hasScoped_false_buble_transforms_node_modules_13_4_0_vue_loader_lib_selector_type_template_index_0_Idolpost_vue__ = __webpack_require__(21);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_13_4_0_vue_loader_lib_selector_type_script_index_0_Idolpost_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_13_4_0_vue_loader_lib_template_compiler_index_id_data_v_3be16627_hasScoped_false_buble_transforms_node_modules_13_4_0_vue_loader_lib_selector_type_template_index_0_Idolpost_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store_util__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Search_vue__ = __webpack_require__(1);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'akbpost',
  components: { search: __WEBPACK_IMPORTED_MODULE_1__Search_vue__["a" /* default */] },
  data() {
    return {
      orig: this.$store.getters.ALL_IDOL_POST,
      list: this.$store.getters.ALL_IDOL_POST,
      now: moment()
    };
  },
  watch: {
    orig: function () {
      this.list = this.orig.filter(function (item, index, self) {
        return self.findIndex(function (t) {
          return t.post_id === item.post_id;
        }) === index;
      });
    }
  },
  methods: {
    timetonow: function (t) {
      return moment(t).from(this.now);
    },
    htmlstr: function (s) {
      return Object(__WEBPACK_IMPORTED_MODULE_0__store_util__["a" /* urlrify */])(s);
    },
    likeit: function (l) {
      console.log('i like this picture : ' + l);
    }
  }
});

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return urlrify; });


let urlrify = text => {
  let urlRegex = /(https?:\/\/[^\s]+)/g;
  return text.replace(urlRegex, url => {
    return '<a href="' + url + '">' + url + '</a>';
  });
};



/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"row page",staticStyle:{"justify-content":"center"}},[_c('div',{staticClass:"sm-1 md-2 lg-3 invisible-xs visible-xl"}),_vm._v(" "),_c('div',{staticClass:"col-12 sm-10 md-8 lg-6 center"},[_c('search',{attrs:{"c":"visible-xs col-12","s":"margin:.5em 0 -1em 0"}}),_vm._v(" "),_c('transition-group',{staticClass:"col-12",staticStyle:{"margin":"0 auto","max-width":"600px"},attrs:{"appear":"","tag":"div","appear-active-class":"magictime vanishIn","enter-active-class":"magictime vanishIn"}},_vm._l((_vm.list),function(po){return _c('div',{key:po.post_id,staticClass:"post-margin"},[_c('div',{staticClass:"post"},[_c('div',{staticClass:"left row",staticStyle:{"align-items":"center","padding":"1em 0 1em 1em","border-bottom":"solid 1px #e9e9e9"}},[_c('a',{attrs:{"target":"_blank","href":po.twitter}},[_c('img',{staticClass:"circle",staticStyle:{"max-width":"32px","border":"solid 1px #e9e9e9"},attrs:{"src":po.icon}})]),_vm._v(" "),_c('a',{staticStyle:{"font-weight":"bolder","color":"#000"},attrs:{"target":"_blank","href":po.twitter}},[_vm._v("  "+_vm._s(po.name))])]),_vm._v(" "),_c('div',{staticStyle:{"background":"#fff"}},[_c('img',{staticStyle:{"width":"100%"},attrs:{"src":po.thumbnail_url},on:{"dblclick":function($event){_vm.likeit(po.thumbnail_url)}}})]),_vm._v(" "),_c('div',{staticClass:"left",staticStyle:{"padding":"1em"}},[_c('div',{domProps:{"innerHTML":_vm._s(_vm.htmlstr(po.content))}}),_vm._v(" "),_c('div',{staticStyle:{"color":"#aaa","font-size":".75em"}},[_vm._v("\n        "+_vm._s(_vm.timetonow(po.post_date))+"\n       ")]),_vm._v(" "),_c('hr',{staticClass:"visible-xs",staticStyle:{"width":"100%","height":"0","border":"0","border-top":"solid 1px #e6e6ea","margin-top":"2.5em"}})])])])}))],1),_vm._v(" "),_c('div',{staticClass:"sm-1 md-2 lg-3 invisible-xs visible-xl"})])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })
/******/ ]);