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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(8)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_13_4_0_vue_loader_lib_selector_type_script_index_0_Search_vue__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_13_4_0_vue_loader_lib_template_compiler_index_id_data_v_6c70b42c_hasScoped_true_buble_transforms_node_modules_13_4_0_vue_loader_lib_selector_type_template_index_0_Search_vue__ = __webpack_require__(13);
function injectStyle (ssrContext) {
  __webpack_require__(10)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6c70b42c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_13_4_0_vue_loader_lib_selector_type_script_index_0_Search_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_13_4_0_vue_loader_lib_template_compiler_index_id_data_v_6c70b42c_hasScoped_true_buble_transforms_node_modules_13_4_0_vue_loader_lib_selector_type_template_index_0_Search_vue__["a" /* default */],
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
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_HeadBar_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store_store__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_MusicPage_MusicPage_vue__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_IdolPostPage_IdolPostPage_vue__ = __webpack_require__(24);


/* import components */





const Home = { template: "<div style='margin:1em auto;max-width:1200px;text-align:center;'><router-view></router-view><footer style='color:#777'>(c) 2017 picarub</footer></div>" };
const Default = { template: "<div class='page'>coming soon ...</div>"

  /* 路由 */
};Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [{ path: '/', component: Home,
    children: [{ path: '', component: Default }, { path: 'music', component: __WEBPACK_IMPORTED_MODULE_2__components_MusicPage_MusicPage_vue__["a" /* default */] }, { path: 'idolpost', component: __WEBPACK_IMPORTED_MODULE_3__components_IdolPostPage_IdolPostPage_vue__["a" /* default */] }]
  }]
});

/* 自定义Vue全局方法 */
Vue.gofetch = (url, name, is_reverse, is_local_storage) => {
  if (window.fetch) {
    fetch(url).then(response => {
      return response.json();
    }).then(data => {
      if (data) {
        //   data = JSON.parse(data)
        if (is_local_storage) localStorage.setItem(name, JSON.stringify(data));
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
    if (localStorage.SONG && localStorage.SONG != '') {
      var songs = JSON.parse(localStorage.getItem('SONG'));
      songs.forEach(e => __WEBPACK_IMPORTED_MODULE_1__store_store__["a" /* default */].commit('ADD_SONG', e));
    } else Vue.gofetch('/a/find?keyword=ok', 'SONG', 0, 1); /* 组件挂载后从服务器获取数据 */
    Vue.gofetch('/a/find?timeline', 'IDOL_POST', 1);
    //    this.$router.push('a/music') /* 转到 music 页面 */
  },
  template: `
   <div id='root'>
    <head-bar/>
    <router-view></router-view>
   </div>
  `
}).$mount('#root');

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_13_4_0_vue_loader_lib_selector_type_script_index_0_HeadBar_vue__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_13_4_0_vue_loader_lib_template_compiler_index_id_data_v_50b0aac7_hasScoped_true_buble_transforms_node_modules_13_4_0_vue_loader_lib_selector_type_template_index_0_HeadBar_vue__ = __webpack_require__(14);
function injectStyle (ssrContext) {
  __webpack_require__(6)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-50b0aac7"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_13_4_0_vue_loader_lib_selector_type_script_index_0_HeadBar_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_13_4_0_vue_loader_lib_template_compiler_index_id_data_v_50b0aac7_hasScoped_true_buble_transforms_node_modules_13_4_0_vue_loader_lib_selector_type_template_index_0_HeadBar_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(7);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("02a9f8cc", content, true);

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".header[data-v-50b0aac7]{position:fixed;left:0;right:0;margin:0 auto;width:100%;background:#fff;text-align:center;border-bottom:1px solid #ddd;z-index:99999}.header-sub[data-v-50b0aac7]{max-width:900px;height:3.5em;margin:0 auto;background:#fff;text-align:center}.header-row[data-v-50b0aac7]{justify-items:center;height:3.5em}.header-menu[data-v-50b0aac7]{padding-top:.2em;padding-right:.75em;display:flex;align-items:center}.logo[data-v-50b0aac7]{padding-top:.3em;padding-left:.5em}.logo-img[data-v-50b0aac7]{height:3em}.img-menu[data-v-50b0aac7]{height:2.75em}.menu-font[data-v-50b0aac7]{color:#555;overflow:hidden;white-space:nowrap}", ""]);

// exports


/***/ }),
/* 8 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Search_vue__ = __webpack_require__(3);
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
  name: 'head-bar',
  components: { Search: __WEBPACK_IMPORTED_MODULE_0__Search_vue__["a" /* default */] }
});

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(11);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("0072d6fe", content, true);

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".input[data-v-6c70b42c]{position:relative;margin:0 auto;padding:.3em 0 0;max-width:16em;width:100%;height:3em}.input-icon[data-v-6c70b42c]{position:absolute;right:0;margin:.75em 0 0;padding:0;color:#bbb}.input-search[data-v-6c70b42c]{margin:0;padding:0 .5em;width:100%;height:2.5em;border-radius:.5em;border:1px solid #ccc;-webkit-appearance:none}", ""]);

// exports


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
      /* 每秒检测当前所在页面而设定input的placeholder属性，有待改进 */
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
      /* 获取当前input输入数据根据当前页面pathname进行request获取数据 */
      let q = this.value.trim();
      let loc = this.$route.path;
      let url = '';
      if (loc === '/music') {
        /* 歌曲 */
        url = '/a/find?keyword=' + q;
        Vue.gofetch(url, 'SONG', 0, 1);
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
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.c,style:(_vm.s)},[_c('div',{staticClass:"input"},[_c('i',{staticClass:"fa fa-search hvr-grow input-icon",on:{"click":function($event){$event.preventDefault();_vm.searchit($event)}}}),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.value),expression:"value"}],staticClass:"search input-search",attrs:{"type":"text","placeholder":_vm.placeholder},domProps:{"value":(_vm.value)},on:{"keyup":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13,$event.key)){ return null; }$event.preventDefault();_vm.searchit($event)},"input":function($event){if($event.target.composing){ return; }_vm.value=$event.target.value}}})])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',{staticClass:"header"},[_c('div',{staticClass:"header-sub"},[_c('div',{staticClass:"row header-row"},[_vm._m(0),_vm._v(" "),_c('search',{attrs:{"c":"sm-30 center invisible-xs","s":"padding:.1em .75em 0 0"}}),_vm._v(" "),_c('div',{staticClass:"col-50 sm-35 right header-menu"},[_c('div',{staticClass:"sm-30 invisible-xs"}),_vm._v(" "),_c('div',{staticClass:"col-50 sm-35"},[_c('router-link',{staticClass:"menu-font",attrs:{"to":"music"}},[_c('img',{staticClass:"hvr-grow img-menu",attrs:{"src":"/r/maru.png"}}),_vm._v("听音乐\n         ")])],1),_vm._v(" "),_c('div',{staticClass:"col-50 sm-35"},[_c('router-link',{staticClass:"menu-font",attrs:{"to":"idolpost"}},[_c('img',{staticClass:"hvr-grow img-menu",attrs:{"src":"/r/5.png"}}),_vm._v("看PO文\n         ")])],1)])],1)])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-50 sm-35 left logo"},[_c('a',{attrs:{"href":"/jpop"}},[_c('img',{staticClass:"hvr-grow logo-img",attrs:{"src":"/r/l.png"}})])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 15 */
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
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_13_4_0_vue_loader_lib_selector_type_script_index_0_MusicPage_vue__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_13_4_0_vue_loader_lib_template_compiler_index_id_data_v_6ab7070d_hasScoped_false_buble_transforms_node_modules_13_4_0_vue_loader_lib_selector_type_template_index_0_MusicPage_vue__ = __webpack_require__(23);
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_13_4_0_vue_loader_lib_template_compiler_index_id_data_v_6ab7070d_hasScoped_false_buble_transforms_node_modules_13_4_0_vue_loader_lib_selector_type_template_index_0_MusicPage_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MusicBar_vue__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Search_vue__ = __webpack_require__(3);
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
      show: Array(500).fill(false), /* 歌曲播放提示动画，初始值为false不显示，数组长度500，超出部分不具播放功能，需作处理 */
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
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_13_4_0_vue_loader_lib_selector_type_script_index_0_MusicBar_vue__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_13_4_0_vue_loader_lib_template_compiler_index_id_data_v_267fb5d5_hasScoped_true_buble_transforms_node_modules_13_4_0_vue_loader_lib_selector_type_template_index_0_MusicBar_vue__ = __webpack_require__(22);
function injectStyle (ssrContext) {
  __webpack_require__(19)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-267fb5d5"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_13_4_0_vue_loader_lib_selector_type_script_index_0_MusicBar_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_13_4_0_vue_loader_lib_template_compiler_index_id_data_v_267fb5d5_hasScoped_true_buble_transforms_node_modules_13_4_0_vue_loader_lib_selector_type_template_index_0_MusicBar_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(20);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("60cc24cc", content, true);

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".box-small[data-v-267fb5d5]{margin:.6em .3em;background-color:#fff;box-shadow:.2em .2em .4em #c5c5c5}.box-big[data-v-267fb5d5]{margin:.3em 0;padding:0;background-color:#fff;border-radius:.35em;box-shadow:.25em .25em .5em #c5c5c5}.cover-small[data-v-267fb5d5]{position:relative;margin-bottom:-.3em;overflow:hidden}.cover-big[data-v-267fb5d5]{position:relative;width:100%;overflow:hidden}.icon-play[data-v-267fb5d5]{position:absolute;right:.1em;bottom:.25em;width:50%;color:hsla(0,0%,100%,.9)}.icon-playing[data-v-267fb5d5]{position:absolute;right:.1em;bottom:.1em}.info-bar-small[data-v-267fb5d5]{padding:0 1em}.info-bar-big[data-v-267fb5d5]{padding:.5em;height:7em}.song-name[data-v-267fb5d5]{font-weight:bolder;font-size:1.1em}.img-cover[data-v-267fb5d5]{width:100%;transform:scale(1)}.img-cover[data-v-267fb5d5],.img-cover[data-v-267fb5d5]:hover{-webkit-transition:transform 1s;-ms-transition:transform 1s;-moz-transition:transform 1s;-o-transition:transform 1s;transition:transform 1s}.img-cover[data-v-267fb5d5]:hover{transform:scale(1.25)}", ""]);

// exports


/***/ }),
/* 21 */
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
      list: this.$store.getters.ALL_SONG /* 实际渲染数组，根据$watch自动变化 */
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
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"margin-auto center"},[_c('transition-group',{staticClass:"margin-auto",attrs:{"appear":"","tag":"div","appear-active-class":"animated flipInX","enter-active-class":"animated flipInX"}},_vm._l((_vm.list),function(ea,i){return _c('div',{key:ea.songID,staticClass:"visible-xs rounded box-small"},[_c('div',{staticClass:"row item-center"},[_c('div',{staticClass:"col-25 cover-small",on:{"click":function($event){_vm.playplay(ea.url, i)}}},[(ea.imgUrl)?_c('img',{staticClass:"rounded img-cover w-100",attrs:{"src":ea.imgUrl}}):_c('img',{staticClass:"rounded img-cover w-100",attrs:{"src":"/r/5.png"}}),_vm._v(" "),_c('div',{staticClass:"right icon-play"},[_c('i',{directives:[{name:"show",rawName:"v-show",value:(!_vm.show[i]),expression:"!show[i]"}],staticClass:"fa fa-play fa-2x",staticStyle:{"display":"block"}})]),_vm._v(" "),(_vm.show[i])?_c('div',{staticClass:"line-scale-party icon-playing"},[_c('div'),_vm._v(" "),_c('div'),_vm._v(" "),_c('div'),_vm._v(" "),_c('div')]):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"col-75 left info-bar-small"},[_c('div',{staticClass:"song-name"},[_c('a',{staticClass:"black",attrs:{"target":"_blank","href":ea.songUrl}},[_vm._v(_vm._s(ea.songName))])]),_vm._v(" "),_c('div',{staticClass:"ellipsis"},[_c('a',{staticClass:"gray-666",attrs:{"target":"_blank","href":ea.artistUrl}},[_vm._v(_vm._s(ea.artist))])]),_vm._v(" "),_c('div',{staticClass:"gray-aaa ellipsis"},[_vm._v(_vm._s(ea.albumName))])])])])})),_vm._v(" "),_c('transition-group',{staticClass:"row",attrs:{"appear":"","tag":"div","appear-active-class":"animated flipInX","enter-active-class":"animated flipInX"}},_vm._l((_vm.list),function(ea,i){return _c('div',{key:ea.songID,staticClass:"sm-33 md-25 lg-20 xl-20 invisible-xs",staticStyle:{"padding":".6em"}},[_c('div',{staticClass:"box-big"},[_c('div',{staticClass:"cover-big",on:{"click":function($event){_vm.playplay(ea.url, i)}}},[(ea.imgUrl)?_c('img',{staticClass:"rounded cover-big",attrs:{"src":ea.imgUrl}}):_c('img',{staticClass:"rounded img-cover w-100",attrs:{"src":"/r/5.png"}}),_vm._v(" "),_c('div',{staticClass:"right icon-play"},[_c('i',{directives:[{name:"show",rawName:"v-show",value:(!_vm.show[i]),expression:"!show[i]"}],staticClass:"fa fa-play fa-3x",staticStyle:{"display":"block"}})]),_vm._v(" "),(_vm.show[i])?_c('div',{staticClass:"line-scale-party icon-playing"},[_c('div'),_vm._v(" "),_c('div'),_vm._v(" "),_c('div'),_vm._v(" "),_c('div')]):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"left info-bar-big"},[_c('div',{staticClass:"song-name"},[_c('a',{staticClass:"black",attrs:{"target":"_blank","href":ea.songUrl}},[_vm._v(_vm._s(ea.songName))])]),_vm._v(" "),_c('div',{staticClass:"ellipsis"},[_c('a',{staticClass:"gray-666",attrs:{"target":"_blank","href":ea.artistUrl}},[_vm._v(_vm._s(ea.artist))])]),_vm._v(" "),_c('div',{staticClass:"gray-aaa ellipsis"},[_vm._v(_vm._s(ea.albumName))])])])])}))],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"row page justify-center"},[_c('div',{staticClass:"sm-90 md-85 lg-80 center",staticStyle:{"max-width":"900px"}},[_c('search',{attrs:{"c":"visible-xs","s":"padding:0 .75em .5em 0;"}}),_vm._v(" "),_c('music-bar',{attrs:{"playplay":_vm.playplay,"show":_vm.show}})],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_13_4_0_vue_loader_lib_selector_type_script_index_0_IdolPostPage_vue__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_13_4_0_vue_loader_lib_template_compiler_index_id_data_v_15ed3cb0_hasScoped_true_buble_transforms_node_modules_13_4_0_vue_loader_lib_selector_type_template_index_0_IdolPostPage_vue__ = __webpack_require__(29);
function injectStyle (ssrContext) {
  __webpack_require__(25)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-15ed3cb0"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_13_4_0_vue_loader_lib_selector_type_script_index_0_IdolPostPage_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_13_4_0_vue_loader_lib_template_compiler_index_id_data_v_15ed3cb0_hasScoped_true_buble_transforms_node_modules_13_4_0_vue_loader_lib_selector_type_template_index_0_IdolPostPage_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(26);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("94dc8146", content, true);

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".instagram[data-v-15ed3cb0]{margin:0 auto;max-width:600px}.ins-icon[data-v-15ed3cb0]{padding:1em 0 1em 1em;align-items:center;border-bottom:1px solid #e9e9e9}.ins-icon-img[data-v-15ed3cb0]{max-width:32px;border:1px solid #e9e9e9}.ins-name[data-v-15ed3cb0]{font-weight:bolder;color:#000}.ins-content[data-v-15ed3cb0]{padding:1em}.ins-time[data-v-15ed3cb0]{color:#aaa;font-size:.75em}.ins-seperate[data-v-15ed3cb0]{margin-top:2.5em;width:100%;height:0;border:0;border-top:1px solid #e6e6ea}", ""]);

// exports


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store_util__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Search_vue__ = __webpack_require__(3);
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
  name: 'idol-post',
  components: { search: __WEBPACK_IMPORTED_MODULE_1__Search_vue__["a" /* default */] },
  data() {
    return {
      orig: this.$store.getters.ALL_IDOL_POST, /* 从vuex中获取的初始数组 */
      list: this.$store.getters.ALL_IDOL_POST, /* 实际渲染数组，根据$watch自动变化 */
      now: moment() /* 组件创建时时间 */
    };
  },
  watch: {
    orig: function () {
      /* 去除重复的数据 */
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
/* 28 */
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
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"row page justify-center"},[_c('div',{staticClass:"sm-10 md-15 lg-20 invisible-xs visible-xl"}),_vm._v(" "),_c('div',{staticClass:"sm-80 md-70 lg-60 center"},[_c('search',{attrs:{"c":"visible-xs col-12","s":"padding:.5em .5em 0 0"}}),_vm._v(" "),_c('div',{staticClass:"instagram"},_vm._l((_vm.list),function(po){return _c('div',{key:po.post_id,staticClass:"post-margin"},[_c('div',{staticClass:"post"},[_c('div',{staticClass:"left row ins-icon"},[_c('a',{attrs:{"target":"_blank","href":po.twitter}},[_c('img',{staticClass:"circle ins-icon-img",attrs:{"src":po.icon}})]),_vm._v(" "),_c('a',{staticClass:"ins-name",attrs:{"target":"_blank","href":po.twitter}},[_vm._v("  "+_vm._s(po.name))])]),_vm._v(" "),_c('div',{staticStyle:{"background":"#fff"}},[_c('img',{staticClass:"w-100",attrs:{"src":po.thumbnail_url},on:{"dblclick":function($event){_vm.likeit(po.thumbnail_url)}}})]),_vm._v(" "),_c('div',{staticClass:"ins-content left"},[_c('div',{domProps:{"innerHTML":_vm._s(_vm.htmlstr(po.content))}}),_vm._v(" "),_c('div',{staticClass:"ins-time"},[_vm._v(_vm._s(_vm.timetonow(po.post_date)))]),_vm._v(" "),_c('hr',{staticClass:"visible-xs ins-seperate"})])])])}))],1),_vm._v(" "),_c('div',{staticClass:"sm-10 md-15 lg-20 invisible-xs visible-xl"})])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })
/******/ ]);