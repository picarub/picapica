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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_13_4_0_vue_loader_lib_template_compiler_index_id_data_v_48f44a53_hasScoped_false_buble_transforms_node_modules_13_4_0_vue_loader_lib_selector_type_template_index_0_Search_vue__ = __webpack_require__(6);
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_13_4_0_vue_loader_lib_template_compiler_index_id_data_v_48f44a53_hasScoped_false_buble_transforms_node_modules_13_4_0_vue_loader_lib_selector_type_template_index_0_Search_vue__["a" /* default */],
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_HeadBar_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store_store__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_MusicPage_vue__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_IdolPost_vue__ = __webpack_require__(15);


/* import components */





const Home = { template: "<div style='margin:1em auto;max-width:1200px;text-align:center;'><router-view></router-view><footer style='color:#777'>(c) 2017 picarub</footer></div>" };
const Default = { template: "<div class='page'>coming soon ...</div>"

  /* 路由 */
};Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [{ path: '/', component: Home,
    children: [{ path: '', component: Default }, { path: 'music', component: __WEBPACK_IMPORTED_MODULE_2__components_MusicPage_vue__["a" /* default */] }, { path: 'idolpost', component: __WEBPACK_IMPORTED_MODULE_3__components_IdolPost_vue__["a" /* default */] }, { path: 'mv', component: Default }, { path: 'video', component: Default }]
  }]
});

/* 自定义Vue全局方法 */
Vue.gofetch = (url, name, is_reverse) => {
  if (window.fetch) {
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
      } else {
        console.log('no fetch data');
      }
    });
  } else {
    /*
      let xhr = new XMLHttpRequest()
      if (xhr != null) {
       xhr.onreadystatechange = stateChange
       xhr.open('GET', url, true)
       xhr.send()
      }
      else {
       alert('Not surport for current browser, update please.') 
      }
      function stateChange(){
       if (xhr.readyState == 4){
        if (xhr.status == 200 || xhr.status == 304) {
         console.log('Do Something')
        }
       }
      }
    */
    alert('Not surport for current browser, update please.');
  }
};

/* 根组件 */
new Vue({
  store: __WEBPACK_IMPORTED_MODULE_1__store_store__["a" /* default */],
  router,
  components: { HeadBar: __WEBPACK_IMPORTED_MODULE_0__components_HeadBar_vue__["a" /* default */] },
  mounted: function () {
    Vue.gofetch('/a/find?keyword=ok', 'SONG'); /* 组件挂载后从服务器获取数据 */
    Vue.gofetch('/a/find?timeline', 'IDOL_POST', 1);
    this.$router.push('music'); /* 转到 music 页面 */
  },
  template: `
   <div id='root'>
    <head-bar/>
    <router-view></router-view>
   </div>
  `
}).$mount('#root');

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_13_4_0_vue_loader_lib_selector_type_script_index_0_HeadBar_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_13_4_0_vue_loader_lib_template_compiler_index_id_data_v_d286b6ca_hasScoped_false_buble_transforms_node_modules_13_4_0_vue_loader_lib_selector_type_template_index_0_HeadBar_vue__ = __webpack_require__(7);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_13_4_0_vue_loader_lib_selector_type_script_index_0_HeadBar_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_13_4_0_vue_loader_lib_template_compiler_index_id_data_v_d286b6ca_hasScoped_false_buble_transforms_node_modules_13_4_0_vue_loader_lib_selector_type_template_index_0_HeadBar_vue__["a" /* default */],
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
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'head-bar',
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
    setInterval(() => {
      /* set search input placeholder properly per second | 每秒检测当前所在页面而设定input的placeholder属性，有待改进 */
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
    searchit: function () {
      /* get input value and request server for data base on pathname of current page | 获取当前input输入数据根据当前页面pathname进行request获取数据 */
      let q = this.value.trim();
      let loc = this.$route.path;
      let url = '';
      if (loc === '/music') {
        /* 歌曲 */
        url = '/a/find?keyword=' + q;
        Vue.gofetch(url, 'SONG');
        return this.value = '';
      }
      if (loc === '/idolpost') {
        /* PO文 */
        url = '/a/find?timeline=' + q;
        Vue.gofetch(url, 'IDOL_POST', 1);
        return this.value = '';
      }
      if (loc === '/idol') {
        url = '/a/find?member=' + q;
        Vue.gofetch(url, 'IDOL');
        return this.value = '';
      }
      if (loc === '/mv') {
        url = '/a/find?yt=' + q;
        Vue.gofetch(url, 'TUBE', 1);
        return this.value = '';
      }
      if (loc === '/video') {
        url = '/a/find?dm=' + q;
        Vue.gofetch(url, 'MOTION', 1);
        return this.value = '';
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
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',{staticClass:"header"},[_c('div',{staticClass:"hb"},[_c('div',{staticClass:"hbb row",staticStyle:{"justify-items":"center","height":"3.5em"}},[_vm._m(0),_vm._v(" "),_c('search',{attrs:{"c":"sm-30 center invisible-xs","s":"padding:.1em .75em 0 0"}}),_vm._v(" "),_c('div',{staticClass:"col-50 sm-35 right",staticStyle:{"padding":".4em .5em 0 0"}},[_c('div',{staticStyle:{"display":"flex","align-items":"center"}},[_c('div',{staticClass:"sm-30 invisible-xs"}),_vm._v(" "),_c('div',{staticClass:"col-50 sm-35"},[_c('router-link',{attrs:{"to":"/idolpost"}},[_c('img',{staticClass:"hvr-grow",staticStyle:{"height":"2.5em"},attrs:{"src":"/r/5.png"}}),_vm._v("看微博")])],1),_vm._v(" "),_c('div',{staticClass:"col-50 sm-35"},[_c('router-link',{attrs:{"to":"/music"}},[_c('img',{staticClass:"hvr-grow",staticStyle:{"height":"2.5em"},attrs:{"src":"/r/maru.png"}}),_vm._v("听音乐")])],1)])])],1)])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-50 sm-35 left",staticStyle:{"padding":".3em 0 0 .5em"}},[_c('a',{attrs:{"href":"/jpop"}},[_c('img',{staticClass:"hvr-grow",staticStyle:{"height":"3em"},attrs:{"src":"/r/l.png"}})])])}]
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_13_4_0_vue_loader_lib_selector_type_script_index_0_MusicPage_vue__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_13_4_0_vue_loader_lib_template_compiler_index_id_data_v_3bc2dc86_hasScoped_false_buble_transforms_node_modules_13_4_0_vue_loader_lib_selector_type_template_index_0_MusicPage_vue__ = __webpack_require__(14);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_13_4_0_vue_loader_lib_selector_type_script_index_0_MusicPage_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_13_4_0_vue_loader_lib_template_compiler_index_id_data_v_3bc2dc86_hasScoped_false_buble_transforms_node_modules_13_4_0_vue_loader_lib_selector_type_template_index_0_MusicPage_vue__["a" /* default */],
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MusicBar_vue__ = __webpack_require__(11);
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



/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'music-page',
  components: {
    MusicBar: __WEBPACK_IMPORTED_MODULE_0__MusicBar_vue__["a" /* default */],
    Search: __WEBPACK_IMPORTED_MODULE_1__Search_vue__["a" /* default */]
  },
  beforeDestroy: function () {
    this.music.pause(); /* 转到其它页面时暂停播放 */
  },
  data() {
    return {
      volume: .4,
      show: Array(500).fill(false), /* 歌曲播放提示动画，初始值为false不显示，歌曲列表数组总长度限制在500个 */
      playing: Array(500).fill(false), /* 歌曲是否在播放的状态，初始值长度为500，填充了 false 布尔值的数组 */
      music: new Audio() /* HTML5 Audio组件 */
    };
  },
  methods: {
    playplay: function (s, i) {
      if (!this.music.src || this.music.src !== s) {
        this.music.src = s;
      } /* 点击时初始化music的src属性 */
      this.music.volume = .38; /* 音量 */
      if (this.playing[i] === true) {
        /* 如果点击时歌曲正在播放，所有歌曲的播放状态设为false，播放提示动画设为false，暂停播放音乐 */
        this.playing = Object.assign({}, this.playing, Array(500).fill(false));
        this.show = Object.assign({}, this.show, Array(500).fill(false));
        this.music.pause();
        console.log('stop');
        return;
      }
      if (this.playing[i] === false) {
        /* 如果点击时歌曲处于暂停状态，仅将当前歌曲的播放状态设为true，当前播放提示动画设为true，播放音乐 */
        this.playing = Object.assign({}, this.playing, Array(500).fill(false));
        this.show = Object.assign({}, this.show, Array(500).fill(false));
        this.$set(this.playing, i, true);
        this.$set(this.show, i, true);
        this.music.play();
        console.log('play');
        this.music.onended = () => {
          /* 处理歌曲播放完成事件 */
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_13_4_0_vue_loader_lib_selector_type_script_index_0_MusicBar_vue__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_13_4_0_vue_loader_lib_template_compiler_index_id_data_v_e753e4a0_hasScoped_false_buble_transforms_node_modules_13_4_0_vue_loader_lib_selector_type_template_index_0_MusicBar_vue__ = __webpack_require__(13);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_13_4_0_vue_loader_lib_selector_type_script_index_0_MusicBar_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_13_4_0_vue_loader_lib_template_compiler_index_id_data_v_e753e4a0_hasScoped_false_buble_transforms_node_modules_13_4_0_vue_loader_lib_selector_type_template_index_0_MusicBar_vue__["a" /* default */],
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
  name: 'music-bar',
  props: ['playplay', 'show'], /* 从父组件获取props */
  data() {
    return {
      orig: this.$store.getters.ALL_SONG, /* 从vuex中获取的初始数组 */
      list: this.$store.getters.ALL_SONG, /* 实际渲染数组，根据$watch自动变化 */
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
      /* 去除重复的数据子集 */
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
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"margin":"0 auto","text-align":"center"}},[_c('transition-group',{staticStyle:{"margin":"0 auto"},attrs:{"appear":"","tag":"div","appear-active-class":"animated flipInX","enter-active-class":"animated flipInX"}},_vm._l((_vm.list),function(ea,i){return _c('div',{key:ea.songID,staticClass:"visible-xs rounded",staticStyle:{"background-color":"#fff","margin":".6em .3em","box-shadow":".2em .2em .4em #c5c5c5"}},[_c('div',{staticClass:"row",staticStyle:{"align-items":"center"}},[_c('div',{staticClass:"col-25 hvr-grow",staticStyle:{"position":"relative","margin":"0 0 -.3em"},on:{"click":function($event){_vm.playplay(ea.url, i)}}},[_c('div',{staticClass:"right",staticStyle:{"position":"absolute","width":"50%","right":".1em","bottom":".25em","color":"rgba(255,255,255,.9)"}},[_c('i',{directives:[{name:"show",rawName:"v-show",value:(!_vm.show[i]),expression:"!show[i]"}],staticClass:"fa fa-play fa-2x",staticStyle:{"display":"block"}})]),_vm._v(" "),(_vm.show[i])?_c('div',{staticClass:"line-scale-party",staticStyle:{"position":"absolute","right":".1em","bottom":".1em"}},[_c('div'),_c('div'),_c('div'),_c('div')]):_vm._e(),_vm._v(" "),(ea.imgUrl)?_c('img',{staticClass:"rounded",staticStyle:{"width":"100%"},attrs:{"src":ea.imgUrl}}):_c('img',{staticClass:"rounded",staticStyle:{"width":"100%"},attrs:{"src":"/r/5.png"}})]),_vm._v(" "),_c('div',{staticClass:"left",staticStyle:{"padding":"0 1em"}},[_c('div',{staticStyle:{"font-weight":"bolder","font-size":"1.1em"}},[_c('a',{staticStyle:{"color":"#000"},attrs:{"target":"_blank","href":ea.songUrl}},[_vm._v(_vm._s(ea.songName))])]),_vm._v(" "),_c('div',{staticStyle:{}},[_c('a',{staticStyle:{"color":"#666"},attrs:{"target":"_blank","href":ea.artistUrl}},[_vm._v(_vm._s(ea.artist))])]),_vm._v(" "),_c('div',{style:('color:#aaa;'+[_vm.css.tof])},[_vm._v(_vm._s(ea.albumName))])])])])})),_vm._v(" "),_c('transition-group',{staticClass:"row",attrs:{"appear":"","tag":"div","appear-active-class":"animated flipInX","enter-active-class":"animated flipInX"}},_vm._l((_vm.list),function(ea,i){return _c('div',{key:ea.songID,staticClass:"sm-33 md-25 lg-20 xl-20 invisible-xs",staticStyle:{"padding":".6em"}},[_c('div',{staticStyle:{"margin":".3em 0","padding":"0","background-color":"#fff","border-radius":".35em","box-shadow":".25em .25em .5em #c5c5c5"}},[_c('div',{staticClass:"hvr-grow",staticStyle:{"position":"relative"},on:{"click":function($event){_vm.playplay(ea.url, i)}}},[_c('div',{staticClass:"right",staticStyle:{"position":"absolute","width":"50%","max-width":"100px","right":".1em","bottom":".25em","color":"rgba(255,255,255,.9)"}},[_c('i',{directives:[{name:"show",rawName:"v-show",value:(!_vm.show[i]),expression:"!show[i]"}],staticClass:"fa fa-play fa-4x",staticStyle:{"display":"block"}})]),_vm._v(" "),(_vm.show[i])?_c('div',{staticClass:"line-scale-party",staticStyle:{"position":"absolute","right":".1em","bottom":".1em"}},[_c('div'),_c('div'),_c('div'),_c('div')]):_vm._e(),_vm._v(" "),(ea.imgUrl)?_c('img',{staticClass:"rounded",staticStyle:{"width":"100%"},attrs:{"src":ea.imgUrl}}):_c('img',{staticClass:"rounded",staticStyle:{"width":"100%"},attrs:{"src":"/r/5.png"}})]),_vm._v(" "),_c('div',{staticClass:"left",staticStyle:{"padding":".5em","height":"7em"}},[_c('div',{staticStyle:{"font-weight":"bolder","font-size":"1.1em"}},[_c('a',{staticStyle:{"color":"#000"},attrs:{"target":"_blank","href":ea.songUrl}},[_vm._v(_vm._s(ea.songName))])]),_vm._v(" "),_c('div',{style:([_vm.css.tof])},[_c('a',{staticStyle:{"color":"#666"},attrs:{"target":"_blank","href":ea.artistUrl}},[_vm._v(_vm._s(ea.artist))])]),_vm._v(" "),_c('div',{style:('color:#aaa;'+[_vm.css.tof])},[_vm._v(_vm._s(ea.albumName))])])])])}))],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"row page",staticStyle:{"justify-content":"center"}},[_c('div',{staticClass:"sm-90 md-85 lg-80 xl-75 center"},[_c('search',{attrs:{"c":"visible-xs","s":"padding:0 .75em .5em 0;"}}),_vm._v(" "),_c('music-bar',{attrs:{"playplay":_vm.playplay,"show":_vm.show}})],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_13_4_0_vue_loader_lib_selector_type_script_index_0_IdolPost_vue__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_13_4_0_vue_loader_lib_template_compiler_index_id_data_v_5da2d13e_hasScoped_false_buble_transforms_node_modules_13_4_0_vue_loader_lib_selector_type_template_index_0_IdolPost_vue__ = __webpack_require__(18);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_13_4_0_vue_loader_lib_selector_type_script_index_0_IdolPost_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_13_4_0_vue_loader_lib_template_compiler_index_id_data_v_5da2d13e_hasScoped_false_buble_transforms_node_modules_13_4_0_vue_loader_lib_selector_type_template_index_0_IdolPost_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store_util__ = __webpack_require__(17);
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
  name: 'idol-post',
  components: { search: __WEBPACK_IMPORTED_MODULE_1__Search_vue__["a" /* default */] },
  data() {
    return {
      orig: this.$store.getters.ALL_IDOL_POST, /* 从vuex中获取的初始数组 */
      list: this.$store.getters.ALL_IDOL_POST, /* 实际渲染数组，根据$watch自动变化 */
      now: moment() /* 组件创建时时刻，即现在 */
    };
  },
  watch: {
    orig: function () {
      /* avoid duplicate items | 去除重复的数据子集 */
      this.list = this.orig.filter(function (item, index, self) {
        return self.findIndex(function (t) {
          return t.post_id === item.post_id;
        }) === index;
      });
    }
  },
  methods: {
    timetonow: function (t) {
      return moment(t).from(this.now); /* 现在离t的时间距离 */
    },
    htmlstr: function (s) {
      return Object(__WEBPACK_IMPORTED_MODULE_0__store_util__["a" /* urlrify */])(s); /* 返回innerHTML数据 */
    },
    likeit: function (l) {
      console.log('i like this picture : ' + l);
    }
  }
});

/***/ }),
/* 17 */
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
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"row page",staticStyle:{"justify-content":"center"}},[_c('div',{staticClass:"sm-10 md-15 lg-20 invisible-xs visible-xl"}),_vm._v(" "),_c('div',{staticClass:"sm-80 md-70 lg-60 center"},[_c('search',{attrs:{"c":"visible-xs col-12","s":"margin:.5em 0 -1em 0"}}),_vm._v(" "),_c('transition-group',{staticStyle:{"margin":"0 auto","max-width":"600px"},attrs:{"appear":"","tag":"div","appear-active-class":"","enter-active-class":""}},_vm._l((_vm.list),function(po){return _c('div',{key:po.post_id,staticClass:"post-margin"},[_c('div',{staticClass:"post"},[_c('div',{staticClass:"left row",staticStyle:{"align-items":"center","padding":"1em 0 1em 1em","border-bottom":"solid 1px #e9e9e9"}},[_c('a',{attrs:{"target":"_blank","href":po.twitter}},[_c('img',{staticClass:"circle",staticStyle:{"max-width":"32px","border":"solid 1px #e9e9e9"},attrs:{"src":po.icon}})]),_vm._v(" "),_c('a',{staticStyle:{"font-weight":"bolder","color":"#000"},attrs:{"target":"_blank","href":po.twitter}},[_vm._v("  "+_vm._s(po.name))])]),_vm._v(" "),_c('div',{staticStyle:{"background":"#fff"}},[_c('img',{staticStyle:{"width":"100%"},attrs:{"src":po.thumbnail_url},on:{"dblclick":function($event){_vm.likeit(po.thumbnail_url)}}})]),_vm._v(" "),_c('div',{staticClass:"left",staticStyle:{"padding":"1em"}},[_c('div',{domProps:{"innerHTML":_vm._s(_vm.htmlstr(po.content))}}),_vm._v(" "),_c('div',{staticStyle:{"color":"#aaa","font-size":".75em"}},[_vm._v("\n        "+_vm._s(_vm.timetonow(po.post_date))+"\n       ")]),_vm._v(" "),_c('hr',{staticClass:"visible-xs",staticStyle:{"width":"100%","height":"0","border":"0","border-top":"solid 1px #e6e6ea","margin-top":"2.5em"}})])])])}))],1),_vm._v(" "),_c('div',{staticClass:"sm-10 md-15 lg-20 invisible-xs visible-xl"})])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })
/******/ ]);