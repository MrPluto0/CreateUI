(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{412:function(t,e,n){var i;self,t.exports=(i=n(1),(()=>{"use strict";var t={442:(t,e,n)=>{n.d(e,{default:()=>r});var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ct-chatbox",class:t.sent?"ct-chatbox__left":"ct-chatbox__right",style:{"--bg-color":t.bgColorCopy,"--max-width":t.width+"px"}},[n("div",{staticClass:"ct-chatbox__outer"},[t.avatar?n("div",{staticClass:"ct-chatbox__avatar"},[n("img",{attrs:{src:t.avatar,alt:""}})]):t._e(),t._v(" "),n("div",{staticClass:"ct-chatbox__inner"},[t.name?n("div",{staticClass:"ct-chatbox__name"},[t._v(t._s(t.name))]):t._e(),t._v(" "),t._l(t.text,(function(e,i){return n("div",{key:i,staticClass:"ct-chatbox__main",class:0===i?"ct-chatbox__first":""},[n("div",{staticClass:"ct-chatbox__msg"},[t._v(t._s(e))]),t._v(" "),t.stamp&&i+1===t.text.length?n("div",{staticClass:"ct-chatbox__stamp"},[t._v("\n          "+t._s(t.stamp)+"\n        ")]):t._e()])}))],2)])])};i._withStripped=!0;const o={name:"CtChatbox",props:{text:{required:!0,type:Array},sent:{type:Boolean,default:!1},name:{type:String,default:void 0},avatar:{type:String,default:void 0},stamp:{type:String,default:void 0},bgColor:{type:String,default:void 0},width:{type:Number,default:300}},data:function(){return{bgColorCopy:""}},mounted:function(){this.bgColorCopy=this.bgColor,this.bgColorCopy||(this.bgColorCopy=this.sent?"#a8ddfa":"#dde3e7")}};var a=(0,n(0).Z)(o,i,[],!1,null,null,null);a.options.__file="packages/chatbox/src/main.vue";const s=a.exports;s.install=function(t){t.component(s.name,s)};const r=s},684:(t,e,n)=>{n.d(e,{default:()=>_});var i=n(895),o=n.n(i),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"ct-scaleFade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"ct-loading",style:{"--bgColor":t.bgColor,"--spinnerColor":t.spinnerColor,"--fontColor":t.fontColor}},[n("div",{staticClass:"ct-loading-box"},[""===t.spinner?n("div",{class:"ct-loading-anime__"+t.animeStyle}):n("div",{staticClass:"ct-loading__spinner",class:t.spinner}),t._v(" "),""!==t.text?n("div",{staticClass:"ct-loading__title"},[t._v(t._s(t.text))]):t._e()])])])};a._withStripped=!0;var s=(0,n(0).Z)({name:"CtLoading",data:function(){return{visible:!1,text:"Loading...",animeStyle:"normal",spinner:"",spinnerColor:"#0ba5f8",fontColor:"#008fdb",bgColor:"rgba(0, 0, 0, 0.6)"}}},a,[],!1,null,null,null);s.options.__file="packages/loading/src/loading.vue";const r=s.exports;function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){u(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var d=o().extend(r),f=function(t,e){e.value?o().nextTick((function(){t.instance.visible=!0,e.modifiers.fullscreen?(t.mask.style.zIndex="9999",document.body.appendChild(t.mask)):t.appendChild(t.mask)})):t.instance.visible=!1};const p={install:function(t){t.directive("loading",{bind:function(t,e){var n=new d({el:document.createElement("div"),data:l({fullscreen:!!e.modifiers.fullscreen},e.arg)});t.instance=n,t.mask=n.$el,""===t.style.position&&(t.style.position="relative"),e.value&&f(t,e)},update:function(t,e){e.oldValue!==e.value&&f(t,e)},unbind:function(t){t.mask.parentNode.removeChild(t.mask),t.instance&&t.instance.$destroy()}})}};var v=null,m=o().extend(r);function h(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(t.fullscreen&&v)return v;var e=new m({el:document.createElement("div"),data:t.data}),n=t.fullscreen?document.body:t.target;return o().nextTick((function(){e.visible=!0,""===n.style.position&&(n.style.position="relative"),n.appendChild(e.$el)})),t.fullscreen&&(v=e),e}m.prototype.close=function(){var t=this;this.visible=!1,setTimeout((function(){t.fullscreen&&v&&(v=null),t.$el&&t.$el.parentNode&&t.$el.parentNode.removeChild(t.$el),t.$destroy()}),300)};const _={install:function(t){t.use(p),t.prototype.$loading=h},directive:p,service:h}},715:(t,e,n)=>{n.d(e,{default:()=>c});var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fade-vertical",appear:""}},[t.isShow?n("div",{staticClass:"ct-bg-mask"},[n("div",{staticClass:"ct-modal-wrapper"},[n("div",{staticClass:"ct-modal-main"},[n("div",{staticClass:"ct-modal-title"},[t._v("\n          "+t._s(t.title)+"\n        ")]),t._v(" "),n("div",{staticClass:"ct-modal-content",class:"ct-create__align-"+t.align},[t._v("\n          "+t._s(t.content)+"\n        ")])]),t._v(" "),n("div",{staticClass:"ct-modal-btns"},[n("button",{staticClass:"ct-modal-confirm-btn",on:{click:function(e){return t.clickHandler("confirm")}}},[t._v("\n          确定\n        ")]),t._v(" "),n("button",{staticClass:"ct-modal-cancel-btn",on:{click:function(e){return t.clickHandler("cancel")}}},[t._v("\n          取消\n        ")])])])]):t._e()])};i._withStripped=!0;var o=(0,n(0).Z)({name:"ct-modal",data:function(){return{isShow:!0,title:"标题",content:"这是一段自定义内容",align:"center",success:null}},methods:{clickHandler:function(t){this.isShow=!1,"confirm"===t&&"function"==typeof this.success&&this.success()}}},i,[],!1,null,null,null);o.options.__file="packages/modal/src/main.vue";const a=o.exports;var s=n(895),r=n.n(s);const c=function(t){var e=new(r().extend(a))({data:t});e.$mount(),document.body.appendChild(e.$el)}},492:(t,e,n)=>{n.d(e,{default:()=>r});var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("audio",{ref:t.refer,attrs:{id:"audio",src:t.src},on:{timeupdate:t.updateTime,ended:t.ended}}),t._v(" "),n("div",{staticClass:"ct-music-wrapper",style:{"--main-color":t.color,"--min-width":t.width+"px","--bg-color":t.bgColor}},[n("div",{staticClass:"ct-music-btn"},[n("i",{staticClass:"iconfont",class:t.isPlay?"icon-zanting":"icon-shipinbofangshibofang",on:{click:t.togglePlay}})]),t._v(" "),n("div",{staticClass:"ct-music-process-wrapper"},[n("div",{staticClass:"ct-music__name"},[t._v(t._s(t.name))]),t._v(" "),n("div",{staticClass:"ct-music__process-fill",style:{width:t.sildePercent+"%"}}),t._v(" "),n("div",{staticClass:"ct-music__process"})])])])};i._withStripped=!0;const o={name:"CtMusicbox",model:{prop:"isPlay",event:"input"},props:{src:{required:!0,type:null},name:{default:"Your Music Name",type:String},color:{default:"#b42b51",type:String},bgColor:{default:"#efefef",type:String},isPlay:{default:!1,type:Boolean},refer:{default:"audio",type:String},width:{default:100}},data:function(){return{sildePercent:0,audio:null,audioCtx:null,source:null}},mounted:function(){this.audio=this.$refs[this.refer]},methods:{togglePlay:function(){this.audioCtx&&"suspended"===this.audioCtx.state&&this.audioCtx.resume(),this.$emit("input",!this.isPlay)},updateTime:function(t){this.sildePercent=parseInt(t.target.currentTime/this.audio.duration*100)},ended:function(){this.$emit("input",!1),this.$emit("handleEnded")},getAudioCtx:function(){return this.audioCtx=new(window.AudioContext||window.webkitAudioContext),this.audioCtx},getAudioAnalyser:function(){this.audioCtx||(this.audioCtx=new(window.AudioContext||window.webkitAudioContext));var t=this.audioCtx,e=t.createAnalyser(),n=document.getElementById("audio");return this.source=this.source||t.createMediaElementSource(n),this.source.connect(e),e.connect(t.destination),e}},watch:{isPlay:function(t){this.audioCtx&&"suspended"===this.audioCtx.state&&this.audioCtx.resume(),t?this.audio.play():this.audio.pause()}}};var a=(0,n(0).Z)(o,i,[],!1,null,null,null);a.options.__file="packages/musicbox/src/main.vue";const s=a.exports;s.install=function(t){t.component(s.name,s)};const r=s},141:(t,e,n)=>{n.d(e,{default:()=>d});var i=n(895),o=n.n(i),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fade-vertical",appear:""}},[t.closed?t._e():n("div",{staticClass:"ct-toast-wrapper",class:"ct-toast-"+t.type,style:{top:t.offset+"px"}},[n("p",{staticClass:"ct-toast-content"},[t._v(t._s(t.content))])])])};a._withStripped=!0;const s={name:"ct-toast",data:function(){return{closed:!1,content:"提示信息",type:"success",offset:20,duration:1e3,timer:null,closeFunc:null}},mounted:function(){var t=this;this.timer=setTimeout((function(){t.closed||t.close()}),this.duration)},methods:{close:function(){this.closed=!0,"function"==typeof this.closeFunc&&this.closeFunc()}}};var r=(0,n(0).Z)(s,a,[],!1,null,null,null);r.options.__file="packages/toast/src/main.vue";const c=r.exports;var l=[];function u(t){var e=o().extend(c);t.closeFunc=function(){u.close(n)};var n=new e({data:t});n.$mount(),document.body.appendChild(n.$el);var i=t.offset||20;l.forEach((function(t){t.$data.offset+=n.$el.offsetHeight+i})),l.push(n)}u.close=function(t){l=l.filter((function(e){return e!==t}))},["info","success","error","warning"].forEach((function(t){u[t]=function(e){return"string"==typeof e?e={type:t,offset:20,content:e}:(e.type=t,e.offset=20),u(e)}}));const d=u},0:(t,e,n)=>{function i(t,e,n,i,o,a,s,r){var c,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=n,l._compiled=!0),i&&(l.functional=!0),a&&(l._scopeId="data-v-"+a),s?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},l._ssrRegister=c):o&&(c=r?function(){o.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:o),c)if(l.functional){l._injectStyles=c;var u=l.render;l.render=function(t,e){return c.call(e),u(t,e)}}else{var d=l.beforeCreate;l.beforeCreate=d?[].concat(d,c):[c]}return{exports:t,options:l}}n.d(e,{Z:()=>i})},895:t=>{t.exports=i}},e={};function n(i){var o=e[i];if(void 0!==o)return o.exports;var a=e[i]={exports:{}};return t[i](a,a.exports,n),a.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);var o={};return(()=>{n.d(o,{default:()=>f});var t=n(141),e=n(715),i=n(442),a=n(684),s=n(492);function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var u=[i.default,s.default],d=function(n){u.forEach((function(t){null!=t&&t.name&&n.component(t.name,t)})),n.use(a.default.directive),n.prototype.$toast=t.default,n.prototype.$modal=e.default,n.prototype.$loading=a.default.service};"undefined"!=typeof window&&window.Vue&&d(window.Vue);const f=c(c({install:d},u),{},{Toast:t.default,Modal:e.default,Loading:a.default})})(),o.default})())}}]);