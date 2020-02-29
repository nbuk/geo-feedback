!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ScrollBar=t():e.ScrollBar=t()}(window,(function(){return function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="dist/",r(r.s=24)}([function(e,t,r){"use strict";t.__esModule=!0,t.extend=l,t.indexOf=function(e,t){for(var r=0,o=e.length;r<o;r++)if(e[r]===t)return r;return-1},t.escapeExpression=function(e){if("string"!=typeof e){if(e&&e.toHTML)return e.toHTML();if(null==e)return"";if(!e)return e+"";e=""+e}if(!a.test(e))return e;return e.replace(n,i)},t.isEmpty=function(e){return!e&&0!==e||!(!c(e)||0!==e.length)},t.createFrame=function(e){var t=l({},e);return t._parent=e,t},t.blockParams=function(e,t){return e.path=t,e},t.appendContextPath=function(e,t){return(e?e+".":"")+t};var o={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},n=/[&<>"'`=]/g,a=/[&<>"'`=]/;function i(e){return o[e]}function l(e){for(var t=1;t<arguments.length;t++)for(var r in arguments[t])Object.prototype.hasOwnProperty.call(arguments[t],r)&&(e[r]=arguments[t][r]);return e}var u=Object.prototype.toString;t.toString=u;var s=function(e){return"function"==typeof e};s(/x/)&&(t.isFunction=s=function(e){return"function"==typeof e&&"[object Function]"===u.call(e)}),t.isFunction=s;var c=Array.isArray||function(e){return!(!e||"object"!=typeof e)&&"[object Array]"===u.call(e)};t.isArray=c},function(e,t,r){"use strict";t.__esModule=!0;var o=["description","fileName","lineNumber","endLineNumber","message","name","number","stack"];function n(e,t){var r=t&&t.loc,a=void 0,i=void 0,l=void 0,u=void 0;r&&(a=r.start.line,i=r.end.line,l=r.start.column,u=r.end.column,e+=" - "+a+":"+l);for(var s=Error.prototype.constructor.call(this,e),c=0;c<o.length;c++)this[o[c]]=s[o[c]];Error.captureStackTrace&&Error.captureStackTrace(this,n);try{r&&(this.lineNumber=a,this.endLineNumber=i,Object.defineProperty?(Object.defineProperty(this,"column",{value:l,enumerable:!0}),Object.defineProperty(this,"endColumn",{value:u,enumerable:!0})):(this.column=l,this.endColumn=u))}catch(e){}}n.prototype=new Error,t.default=n,e.exports=t.default},function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.HandlebarsEnvironment=c;var n=r(0),a=o(r(1)),i=r(3),l=r(17),u=o(r(5)),s=r(6);t.VERSION="4.7.3";t.COMPILER_REVISION=8;t.LAST_COMPATIBLE_COMPILER_REVISION=7;t.REVISION_CHANGES={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0 <4.3.0",8:">= 4.3.0"};function c(e,t,r){this.helpers=e||{},this.partials=t||{},this.decorators=r||{},i.registerDefaultHelpers(this),l.registerDefaultDecorators(this)}c.prototype={constructor:c,logger:u.default,log:u.default.log,registerHelper:function(e,t){if("[object Object]"===n.toString.call(e)){if(t)throw new a.default("Arg not supported with multiple helpers");n.extend(this.helpers,e)}else this.helpers[e]=t},unregisterHelper:function(e){delete this.helpers[e]},registerPartial:function(e,t){if("[object Object]"===n.toString.call(e))n.extend(this.partials,e);else{if(void 0===t)throw new a.default('Attempting to register a partial called "'+e+'" as undefined');this.partials[e]=t}},unregisterPartial:function(e){delete this.partials[e]},registerDecorator:function(e,t){if("[object Object]"===n.toString.call(e)){if(t)throw new a.default("Arg not supported with multiple decorators");n.extend(this.decorators,e)}else this.decorators[e]=t},unregisterDecorator:function(e){delete this.decorators[e]},resetLoggedPropertyAccesses:function(){s.resetLoggedProperties()}};var d=u.default.log;t.log=d,t.createFrame=n.createFrame,t.logger=u.default},function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.registerDefaultHelpers=function(e){n.default(e),a.default(e),i.default(e),l.default(e),u.default(e),s.default(e),c.default(e)},t.moveHelperToHooks=function(e,t,r){e.helpers[t]&&(e.hooks[t]=e.helpers[t],r||delete e.helpers[t])};var n=o(r(10)),a=o(r(11)),i=o(r(12)),l=o(r(13)),u=o(r(14)),s=o(r(15)),c=o(r(16))},function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(e){"object"==typeof window&&(r=window)}e.exports=r},function(e,t,r){"use strict";t.__esModule=!0;var o=r(0),n={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(e){if("string"==typeof e){var t=o.indexOf(n.methodMap,e.toLowerCase());e=t>=0?t:parseInt(e,10)}return e},log:function(e){if(e=n.lookupLevel(e),"undefined"!=typeof console&&n.lookupLevel(n.level)<=e){var t=n.methodMap[e];console[t]||(t="log");for(var r=arguments.length,o=Array(r>1?r-1:0),a=1;a<r;a++)o[a-1]=arguments[a];console[t].apply(console,o)}}};t.default=n,e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0,t.createProtoAccessControl=function(e){var t=Object.create(null);t.constructor=!1,t.__defineGetter__=!1,t.__defineSetter__=!1,t.__lookupGetter__=!1;var r=Object.create(null);return r.__proto__=!1,{properties:{whitelist:o.createNewLookupObject(r,e.allowedProtoProperties),defaultValue:e.allowProtoPropertiesByDefault},methods:{whitelist:o.createNewLookupObject(t,e.allowedProtoMethods),defaultValue:e.allowProtoMethodsByDefault}}},t.resultIsAllowed=function(e,t,r){return i("function"==typeof e?t.methods:t.properties,r)},t.resetLoggedProperties=function(){Object.keys(a).forEach((function(e){delete a[e]}))};var o=r(19),n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(r(5)),a=Object.create(null);function i(e,t){return void 0!==e.whitelist[t]?!0===e.whitelist[t]:void 0!==e.defaultValue?e.defaultValue:(function(e){!0!==a[e]&&(a[e]=!0,n.log("error",'Handlebars: Access has been denied to resolve the property "'+e+'" because it is not an "own property" of its parent.\nYou can add a runtime option to disable the check or this warning:\nSee https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details'))}(t),!1)}},function(e,t,r){var o=r(8);e.exports=(o.default||o).template({compiler:[8,">= 4.3.0"],main:function(e,t,r,o,n){return'<div class="custom-scroll-bar__wrapper">\r\n    <div class="custom-scroll-bar__ul-wrapper">\r\n\r\n    </div>\r\n    <div class="custom-scroll-bar__slider">\r\n        <div class="custom-scroll-bar__slider__thumb"></div>\r\n    </div>\r\n</div>'},useData:!0})},function(e,t,r){e.exports=r(9).default},function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}t.__esModule=!0;var a=n(r(2)),i=o(r(20)),l=o(r(1)),u=n(r(0)),s=n(r(21)),c=o(r(23));function d(){var e=new a.HandlebarsEnvironment;return u.extend(e,a),e.SafeString=i.default,e.Exception=l.default,e.Utils=u,e.escapeExpression=u.escapeExpression,e.VM=s,e.template=function(t){return s.template(t,e)},e}var f=d();f.create=d,c.default(f),f.default=f,t.default=f,e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0;var o=r(0);t.default=function(e){e.registerHelper("blockHelperMissing",(function(t,r){var n=r.inverse,a=r.fn;if(!0===t)return a(this);if(!1===t||null==t)return n(this);if(o.isArray(t))return t.length>0?(r.ids&&(r.ids=[r.name]),e.helpers.each(t,r)):n(this);if(r.data&&r.ids){var i=o.createFrame(r.data);i.contextPath=o.appendContextPath(r.data.contextPath,r.name),r={data:i}}return a(t,r)}))},e.exports=t.default},function(e,t,r){"use strict";(function(o){t.__esModule=!0;var n,a=r(0),i=r(1),l=(n=i)&&n.__esModule?n:{default:n};t.default=function(e){e.registerHelper("each",(function(e,t){if(!t)throw new l.default("Must pass iterator to #each");var r,n=t.fn,i=t.inverse,u=0,s="",c=void 0,d=void 0;function f(t,r,o){c&&(c.key=t,c.index=r,c.first=0===r,c.last=!!o,d&&(c.contextPath=d+t)),s+=n(e[t],{data:c,blockParams:a.blockParams([e[t],t],[d+t,null])})}if(t.data&&t.ids&&(d=a.appendContextPath(t.data.contextPath,t.ids[0])+"."),a.isFunction(e)&&(e=e.call(this)),t.data&&(c=a.createFrame(t.data)),e&&"object"==typeof e)if(a.isArray(e))for(var p=e.length;u<p;u++)u in e&&f(u,u,u===e.length-1);else if(o.Symbol&&e[o.Symbol.iterator]){for(var h=[],v=e[o.Symbol.iterator](),m=v.next();!m.done;m=v.next())h.push(m.value);for(p=(e=h).length;u<p;u++)f(u,u,u===e.length-1)}else r=void 0,Object.keys(e).forEach((function(e){void 0!==r&&f(r,u-1),r=e,u++})),void 0!==r&&f(r,u-1,!0);return 0===u&&(s=i(this)),s}))},e.exports=t.default}).call(this,r(4))},function(e,t,r){"use strict";t.__esModule=!0;var o,n=r(1),a=(o=n)&&o.__esModule?o:{default:o};t.default=function(e){e.registerHelper("helperMissing",(function(){if(1!==arguments.length)throw new a.default('Missing helper: "'+arguments[arguments.length-1].name+'"')}))},e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0;var o,n=r(0),a=r(1),i=(o=a)&&o.__esModule?o:{default:o};t.default=function(e){e.registerHelper("if",(function(e,t){if(2!=arguments.length)throw new i.default("#if requires exactly one argument");return n.isFunction(e)&&(e=e.call(this)),!t.hash.includeZero&&!e||n.isEmpty(e)?t.inverse(this):t.fn(this)})),e.registerHelper("unless",(function(t,r){if(2!=arguments.length)throw new i.default("#unless requires exactly one argument");return e.helpers.if.call(this,t,{fn:r.inverse,inverse:r.fn,hash:r.hash})}))},e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0,t.default=function(e){e.registerHelper("log",(function(){for(var t=[void 0],r=arguments[arguments.length-1],o=0;o<arguments.length-1;o++)t.push(arguments[o]);var n=1;null!=r.hash.level?n=r.hash.level:r.data&&null!=r.data.level&&(n=r.data.level),t[0]=n,e.log.apply(e,t)}))},e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0,t.default=function(e){e.registerHelper("lookup",(function(e,t,r){return e?r.lookupProperty(e,t):e}))},e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0;var o,n=r(0),a=r(1),i=(o=a)&&o.__esModule?o:{default:o};t.default=function(e){e.registerHelper("with",(function(e,t){if(2!=arguments.length)throw new i.default("#with requires exactly one argument");n.isFunction(e)&&(e=e.call(this));var r=t.fn;if(n.isEmpty(e))return t.inverse(this);var o=t.data;return t.data&&t.ids&&((o=n.createFrame(t.data)).contextPath=n.appendContextPath(t.data.contextPath,t.ids[0])),r(e,{data:o,blockParams:n.blockParams([e],[o&&o.contextPath])})}))},e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0,t.registerDefaultDecorators=function(e){a.default(e)};var o,n=r(18),a=(o=n)&&o.__esModule?o:{default:o}},function(e,t,r){"use strict";t.__esModule=!0;var o=r(0);t.default=function(e){e.registerDecorator("inline",(function(e,t,r,n){var a=e;return t.partials||(t.partials={},a=function(n,a){var i=r.partials;r.partials=o.extend({},i,t.partials);var l=e(n,a);return r.partials=i,l}),t.partials[n.args[0]]=n.fn,a}))},e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0,t.createNewLookupObject=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return o.extend.apply(void 0,[Object.create(null)].concat(t))};var o=r(0)},function(e,t,r){"use strict";function o(e){this.string=e}t.__esModule=!0,o.prototype.toString=o.prototype.toHTML=function(){return""+this.string},t.default=o,e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0,t.checkRevision=function(e){var t=e&&e[0]||1,r=l.COMPILER_REVISION;if(t>=l.LAST_COMPATIBLE_COMPILER_REVISION&&t<=l.COMPILER_REVISION)return;if(t<l.LAST_COMPATIBLE_COMPILER_REVISION){var o=l.REVISION_CHANGES[r],n=l.REVISION_CHANGES[t];throw new i.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+o+") or downgrade your runtime to an older version ("+n+").")}throw new i.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+e[1]+").")},t.template=function(e,t){if(!t)throw new i.default("No environment passed to template");if(!e||!e.main)throw new i.default("Unknown template object: "+typeof e);e.main.decorator=e.main_d,t.VM.checkRevision(e.compiler);var r=e.compiler&&7===e.compiler[0];var o={strict:function(e,t,r){if(!(e&&t in e))throw new i.default('"'+t+'" not defined in '+e,{loc:r});return e[t]},lookupProperty:function(e,t){var r=e[t];return null==r?r:Object.prototype.hasOwnProperty.call(e,t)?r:c.resultIsAllowed(r,o.protoAccessControl,t)?r:void 0},lookup:function(e,t){for(var r=e.length,n=0;n<r;n++){if(null!=(e[n]&&o.lookupProperty(e[n],t)))return e[n][t]}},lambda:function(e,t){return"function"==typeof e?e.call(t):e},escapeExpression:n.escapeExpression,invokePartial:function(r,o,a){a.hash&&(o=n.extend({},o,a.hash),a.ids&&(a.ids[0]=!0)),r=t.VM.resolvePartial.call(this,r,o,a);var l=n.extend({},a,{hooks:this.hooks,protoAccessControl:this.protoAccessControl}),u=t.VM.invokePartial.call(this,r,o,l);if(null==u&&t.compile&&(a.partials[a.name]=t.compile(r,e.compilerOptions,t),u=a.partials[a.name](o,l)),null!=u){if(a.indent){for(var s=u.split("\n"),c=0,d=s.length;c<d&&(s[c]||c+1!==d);c++)s[c]=a.indent+s[c];u=s.join("\n")}return u}throw new i.default("The partial "+a.name+" could not be compiled when running in runtime-only mode")},fn:function(t){var r=e[t];return r.decorator=e[t+"_d"],r},programs:[],program:function(e,t,r,o,n){var a=this.programs[e],i=this.fn(e);return t||n||o||r?a=d(this,e,i,t,r,o,n):a||(a=this.programs[e]=d(this,e,i)),a},data:function(e,t){for(;e&&t--;)e=e._parent;return e},mergeIfNeeded:function(e,t){var r=e||t;return e&&t&&e!==t&&(r=n.extend({},t,e)),r},nullContext:Object.seal({}),noop:t.VM.noop,compilerInfo:e.compiler};function a(t){var r=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],n=r.data;a._setup(r),!r.partial&&e.useData&&(n=p(t,n));var i=void 0,l=e.useBlockParams?[]:void 0;function u(t){return""+e.main(o,t,o.helpers,o.partials,n,l,i)}return e.useDepths&&(i=r.depths?t!=r.depths[0]?[t].concat(r.depths):r.depths:[t]),(u=h(e.main,u,o,r.depths||[],n,l))(t,r)}return a.isTop=!0,a._setup=function(a){if(a.partial)o.protoAccessControl=a.protoAccessControl,o.helpers=a.helpers,o.partials=a.partials,o.decorators=a.decorators,o.hooks=a.hooks;else{var i=n.extend({},t.helpers,a.helpers);!function(e,t){Object.keys(e).forEach((function(r){var o=e[r];e[r]=function(e,t){var r=t.lookupProperty;return s.wrapHelper(e,(function(e){return n.extend({lookupProperty:r},e)}))}(o,t)}))}(i,o),o.helpers=i,e.usePartial&&(o.partials=o.mergeIfNeeded(a.partials,t.partials)),(e.usePartial||e.useDecorators)&&(o.decorators=n.extend({},t.decorators,a.decorators)),o.hooks={},o.protoAccessControl=c.createProtoAccessControl(a);var l=a.allowCallsToHelperMissing||r;u.moveHelperToHooks(o,"helperMissing",l),u.moveHelperToHooks(o,"blockHelperMissing",l)}},a._child=function(t,r,n,a){if(e.useBlockParams&&!n)throw new i.default("must pass block params");if(e.useDepths&&!a)throw new i.default("must pass parent depths");return d(o,t,e[t],r,0,n,a)},a},t.wrapProgram=d,t.resolvePartial=function(e,t,r){e?e.call||r.name||(r.name=e,e=r.partials[e]):e="@partial-block"===r.name?r.data["partial-block"]:r.partials[r.name];return e},t.invokePartial=function(e,t,r){var o=r.data&&r.data["partial-block"];r.partial=!0,r.ids&&(r.data.contextPath=r.ids[0]||r.data.contextPath);var a=void 0;r.fn&&r.fn!==f&&function(){r.data=l.createFrame(r.data);var e=r.fn;a=r.data["partial-block"]=function(t){var r=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return r.data=l.createFrame(r.data),r.data["partial-block"]=o,e(t,r)},e.partials&&(r.partials=n.extend({},r.partials,e.partials))}();void 0===e&&a&&(e=a);if(void 0===e)throw new i.default("The partial "+r.name+" could not be found");if(e instanceof Function)return e(t,r)},t.noop=f;var o,n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(r(0)),a=r(1),i=(o=a)&&o.__esModule?o:{default:o},l=r(2),u=r(3),s=r(22),c=r(6);function d(e,t,r,o,n,a,i){function l(t){var n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],l=i;return!i||t==i[0]||t===e.nullContext&&null===i[0]||(l=[t].concat(i)),r(e,t,e.helpers,e.partials,n.data||o,a&&[n.blockParams].concat(a),l)}return(l=h(r,l,e,i,o,a)).program=t,l.depth=i?i.length:0,l.blockParams=n||0,l}function f(){return""}function p(e,t){return t&&"root"in t||((t=t?l.createFrame(t):{}).root=e),t}function h(e,t,r,o,a,i){if(e.decorator){var l={};t=e.decorator(t,l,r,o&&o[0],a,i,o),n.extend(t,l)}return t}},function(e,t,r){"use strict";t.__esModule=!0,t.wrapHelper=function(e,t){if("function"!=typeof e)return e;return function(){var r=arguments[arguments.length-1];return arguments[arguments.length-1]=t(r),e.apply(this,arguments)}}},function(e,t,r){"use strict";(function(r){t.__esModule=!0,t.default=function(e){var t=void 0!==r?r:window,o=t.Handlebars;e.noConflict=function(){return t.Handlebars===e&&(t.Handlebars=o),e}},e.exports=t.default}).call(this,r(4))},function(e,t,r){"use strict";r.r(t);var o=function(e,t,r){return e&&t&&r||(console.error("CustomScrollBarJS: One or more not specified of required parameters..."),e||console.error("CustomScrollBarJS: listSelector is required param!"),t||console.error("CustomScrollBarJS: listHeight is required param!"),r||console.error("CustomScrollBarJS: listWidth is required param!")),!!(e&&t&&r)};var n=function(e,t){var r=document.querySelector(".custom-scroll-bar__wrapper"),o=document.querySelector(".custom-scroll-bar__ul-wrapper"),n=document.querySelector(".custom-scroll-bar__slider"),a=document.querySelector(".custom-scroll-bar__slider__thumb"),i=document.querySelector(".custom-scrollbar__ul"),l=new Event("ulscroll");t&&(r.addEventListener("mouseover",(function(){n.style.opacity="1",n.style.zIndex=5})),r.addEventListener("mouseout",(function(){n.style.opacity="0",n.style.zIndex=-1})));var u=n.getBoundingClientRect().height-a.getBoundingClientRect().height,s=0,c=0,d=0;o.ontouchstart=function(e){e.preventDefault(),c=Math.floor(e.changedTouches[0].clientY),Date.now()},o.ontouchmove=function(e){e.preventDefault();var t=(e.changedTouches[0].clientY-c)/i.scrollHeight*100,r=d+-t,n=parseInt((i.scrollHeight-o.clientHeight)/i.scrollHeight*100);r>n&&(r=n+.5),r<0&&(r=0),a.style.top=r+"%",i.dispatchEvent(l)},o.ontouchend=function(e){e.preventDefault(),d=parseInt(a.style.top.replace(/[a-z A-Z ()%]/g,""))},r.addEventListener("wheel",(function(e){e.preventDefault(),s+=e.deltaY/5,i.dispatchEvent(l),s<0&&(s=0),s>u&&(s=u),a.style.top="".concat(s,"px")})),a.onmousedown=function(e){e.preventDefault(),document.addEventListener("mousemove",r),document.addEventListener("mouseup",(function e(){document.removeEventListener("mousemove",r),document.removeEventListener("mouseup",e)}));var t=e.clientY-a.getBoundingClientRect().top;function r(e){(s=e.clientY-t-n.getBoundingClientRect().top)<0&&(s=0);var r=n.clientHeight-a.clientHeight;s>r&&(s=r),a.style.top=s+"px",i.dispatchEvent(l)}},i.addEventListener("ulscroll",(function(){var e=a.offsetTop/n.clientHeight*100;i.style.transform="translateY(-".concat(e,"%)")}))},a=r(7),i=r.n(a);r(25);function l(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var u=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options=t}var t,r,a;return t=e,(r=[{key:"init",value:function(){var e=this.options,t=e.listSelector,r=e.listHeight,a=e.listWidth,l=e.listBorder,u=e.sliderOpacity,s=e.thumbColor,c=e.thumbWidth,d=e.thumbOpacity,f=e.thumbShadow,p=e.thumbBorderRadius,h=e.hideOnFocusOut;if(o(t,r,a)){var v=document.querySelector(t),m=v.cloneNode(!0);if(m.classList.add("custom-scrollbar__ul"),m.style.width="100%",v){v.insertAdjacentHTML("afterEnd",i()()),v.remove(),document.querySelector(".custom-scroll-bar__ul-wrapper").prepend(m);var _=document.querySelector(".custom-scroll-bar__wrapper"),g=document.querySelector(".custom-scroll-bar__ul-wrapper"),y=document.querySelector(".custom-scroll-bar__slider"),b=document.querySelector(".custom-scroll-bar__slider__thumb");_.style="height: ".concat(r,";"),g.style="width: ".concat(a,";"),u&&""!=u&&(y.style.backgroundColor="rgba(219, 226, 226, ".concat(u,")")),s&&""!=s&&(b.style.backgroundColor=s),c&&""!=c&&(b.style.width=c),f&&""!=f&&(b.style.boxShadow=f),p&&""!=p&&(b.style.borderRadius=p),d&&""!=d&&(b.style.opacity=d),l&&(_.style.border=l),b.style.height=g.clientHeight/m.scrollHeight*100+"%",n("add",h)}else console.error("Wrong selector: ".concat(t))}}}])&&l(t.prototype,r),a&&l(t,a),e}();t.default=u},function(e,t){}]).default}));