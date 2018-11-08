(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{279:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"globalevent"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#globalevent","aria-hidden":"true"}},[t._v("#")]),t._v(" globalEvent "),s("Badge",{attrs:{text:"0.14",type:"warn",vertical:"middle"}})],1),t._m(0),t._m(1),t._m(2),t._m(3),s("p",[t._v("API 开发完成后，当需要发送事件时，需要通过以下方法：")]),t._m(4),s("p",[t._v("如何在 weex-html5 组件或模块中分发全局事件？只需在文档元素上分派事件：")]),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9),s("p",[t._v("注册全局事件。")]),t._m(10),s("p",[t._v("示例：")]),t._m(11),t._m(12),s("p",[t._v("取消事件监听。")]),t._m(13),s("p",[t._v("示例：")]),t._m(14),t._m(15),t._m(16),s("p",[t._v("WeexSDK 对获取应用前后台事件做了支持，开发者可以在页面内监听对应的事件，获得应用被前后后这后台，以方便暂停音乐，视频等，只需要指定需要监听的事件名称和回调函数就可以，例如：")]),t._m(17),s("p",[t._v("支持的事件名称：")]),t._m(18),s("p",[t._v("在 "),s("a",{attrs:{href:"http://dotwe.org/vue/c89e85483ca2cb2274837ef027030539",target:"_blank",rel:"noopener noreferrer"}},[t._v("dotWe 上试一试"),s("OutboundLink")],1)]),s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("注意")]),s("p",[t._v("目前只有 platform 为 iOS 和 Android 才能支持。"),s("a",{attrs:{href:"http://weex-project.io/cn/references/weex-variable.html#weex-environment-object",target:"_blank",rel:"noopener noreferrer"}},[t._v("获取当前 platform"),s("OutboundLink")],1)])])])},[function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("code",[this._v("globalEvent")]),this._v(" 用于监听持久性事件，例如定位信息，陀螺仪等的变化。全局事件是需要额外 APIs 处理的次要 API。")])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[this._v("你能通过 "),a("code",[this._v("addEventListener")]),this._v(" 注册事件监听")]),a("li",[this._v("当你不再需要的时候，也可以通过 "),a("code",[this._v("removeEventListener")]),this._v(" 取消事件监听")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[this._v("TIP")]),a("p",[this._v("这是一个实例级别的事件，而非应用级别。")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"如何让你的模块支持全局事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何让你的模块支持全局事件","aria-hidden":"true"}},[this._v("#")]),this._v(" 如何让你的模块支持全局事件")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("/**\n *\n * @param eventName eventName\n * @param params event params\n */")]),t._v("\ninstance"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("fireGlobalEventCallback")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("eventName"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" params"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" evt "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("Event")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'some-type'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nevt"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" foo"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'bar'")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ndocument"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("dispatchEvent")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("evt"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例","aria-hidden":"true"}},[this._v("#")]),this._v(" 示例")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ul",[s("li",[t._v("Android"),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("Map"),s("span",{attrs:{class:"token generics function"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("String"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("Object"),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" params"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("HashMap")]),s("span",{attrs:{class:"token operator"}},[t._v("<")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nparams"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("put")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"key"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{attrs:{class:"token string"}},[t._v('"value"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmWXSDKInstance"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("fireGlobalEventCallback")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"geolocation"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("params"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),s("li",[t._v("IOS"),s("div",{staticClass:"language-objective-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('[weexInstance fireGlobalEvent:@"geolocation" params:@{@"key":@"value"}];\n')])])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api","aria-hidden":"true"}},[this._v("#")]),this._v(" API")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"addeventlistener-eventname-callback"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#addeventlistener-eventname-callback","aria-hidden":"true"}},[this._v("#")]),this._v(" addEventListener(eventName, callback)")])},function(){var t=this.$createElement,a=this._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[this._v("key")]),a("th",[this._v("描述")])])]),a("tbody",[a("tr",[a("td",[a("code",[this._v("eventName {string}")])]),a("td",[this._v("需要监听的事件名称")])]),a("tr",[a("td",[a("code",[this._v("callback {Function}")])]),a("td",[this._v("触发事件后的回调函数")])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" globalEvent "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" weex"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("requireModule")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'globalEvent'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nglobalEvent"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'geolocation'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("log")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'get geolocation'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"removeeventlistener-eventname"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#removeeventlistener-eventname","aria-hidden":"true"}},[this._v("#")]),this._v(" removeEventListener(eventName)")])},function(){var t=this.$createElement,a=this._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[this._v("key")]),a("th",[this._v("描述")])])]),a("tbody",[a("tr",[a("td",[a("code",[this._v("eventName {string}")])]),a("td",[this._v("需要取消的事件名称")])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" globalEvent "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" weex"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("requireModule")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'globalEvent'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nglobalEvent"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("removeEventListener")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'geolocation'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"已有的全局事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#已有的全局事件","aria-hidden":"true"}},[this._v("#")]),this._v(" 已有的全局事件")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"应用前后事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#应用前后事件","aria-hidden":"true"}},[this._v("#")]),this._v(" 应用前后事件")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" globalEvent "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" weex"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("requireModule")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'globalEvent'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nglobalEvent"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'WXApplicationDidBecomeActiveEvent'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("log")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'WXApplicationDidBecomeActiveEvent'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[this._v("WXApplicationDidBecomeActiveEvent 应用被前台的时候触发")]),a("li",[this._v("WXApplicationWillResignActiveEvent 应用即将被后台时候触发")])])}],!1,null,null,null);e.options.__file="globalEvent.md";a.default=e.exports}}]);