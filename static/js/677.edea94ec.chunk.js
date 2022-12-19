/*! For license information please see 677.edea94ec.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkproduct_inventory=self.webpackChunkproduct_inventory||[]).push([[677],{8514:function(t,e,r){r.d(e,{Q7:function(){return u},eI:function(){return l},l9:function(){return c}});var n,o,i,a=r(168),s=r(7743),c=(0,s.Ps)(n||(n=(0,a.Z)(["\n  mutation Mutation(\n    $name: String!\n    $description: String!\n    $color: String!\n    $stock: Int!\n    $price: Float!\n    $category_id: ID!\n  ) {\n    createProduct(\n      name: $name\n      description: $description\n      color: $color\n      stock: $stock\n      price: $price\n      category_id: $category_id\n    ) {\n      id\n      name\n      description\n      color\n      stock\n      price\n      category_id\n    }\n  }\n"]))),u=(0,s.Ps)(o||(o=(0,a.Z)(["\n  mutation Mutation(\n    $updateProductId: ID!\n    $name: String\n    $description: String\n    $color: String\n    $stock: Int\n    $price: Float\n    $categoryId: ID\n  ) {\n    updateProduct(\n      id: $updateProductId\n      name: $name\n      description: $description\n      color: $color\n      stock: $stock\n      price: $price\n      category_id: $categoryId\n    ) {\n      name\n      description\n      color\n      stock\n      price\n      category_id\n      id\n    }\n  }\n"]))),l=(0,s.Ps)(i||(i=(0,a.Z)(["\n  mutation Mutation($removeProductId: ID!) {\n    removeProduct(id: $removeProductId) {\n      id\n      name\n      description\n      color\n      stock\n      price\n      category_id\n    }\n  }\n"])))},6825:function(t,e,r){r.d(e,{Tj:function(){return l},X6:function(){return u},bt:function(){return c}});var n,o,i,a=r(168),s=r(7743),c=(0,s.Ps)(n||(n=(0,a.Z)(["\n  query($id: ID!) {\n    Category(id: $id){\n      name,\n      description,\n      Products {\n        id,\n        name\n      }\n    }\n  }\n"]))),u=(0,s.Ps)(o||(o=(0,a.Z)(["\n  query {\n    allCategories{\n      id,\n      name,\n      description\n    }\n  }\n"]))),l=(0,s.Ps)(i||(i=(0,a.Z)(["\n  query($id: ID!) {\n    Product(id: $id){\n      name,\n      description,\n      color,\n      stock,\n      price,\n      category_id\n    }\n  }\n"])))},8677:function(t,e,r){r.r(e),r.d(e,{default:function(){return j}});var n=r(4165),o=r(5861),i=r(885),a=r(2791),s=r(4376),c=r(7689),u=r(6578),l=r(6825),d=r(8514),h=r(3767),p=r(3400),f=r(890),v=r(6151),y=r(8141),g=r(1098),m=r(184),b=function(t){var e=t.updateLoading,r=t.removeLoading,n=t.stock,o=t.handleIncreaseStock,i=t.handleDecreaseStock,a=t.handleRemoveProduct;return(0,m.jsxs)(h.Z,{direction:"row",spacing:2,children:[(0,m.jsx)(p.Z,{"aria-label":"increase",color:"primary",component:"label",onClick:function(){return o(n)},children:(0,m.jsx)(y.Z,{})}),(0,m.jsxs)(f.Z,{sx:{textAlign:"left"},variant:"overline",children:["Stock: ",e?"Loading...":n]}),(0,m.jsx)(p.Z,{"aria-label":"decrease",color:"primary",disabled:0===n,component:"label",onClick:function(){return i(n)},children:(0,m.jsx)(g.Z,{})}),(0,m.jsx)(v.Z,{sx:{mt:2},disabled:r,variant:"contained",color:"error",onClick:function(){return a()},children:r?"Loading...":"Remove"})]})},w=r(7394),k=function(t){var e=t.name,r=(0,c.UO)().categoryId,n=(0,c.s0)();return(0,m.jsxs)(h.Z,{sx:{marginTop:4,marginBottom:4},direction:"row",spacing:2,justifyContent:"center",children:[(0,m.jsx)(p.Z,{"aria-label":"back",color:"primary",component:"label",onClick:function(){return n("/category/".concat(r))},children:(0,m.jsx)(w.Z,{})}),(0,m.jsxs)(f.Z,{sx:{mt:5},variant:"h4",children:["Name:",e]})]})},O=function(t){var e=t.description,r=t.color,n=t.price,o=function(t){var e=t.label,r=t.value;return(0,m.jsxs)(f.Z,{sx:{textAlign:"left"},variant:"body1",gutterBottom:!0,children:[(0,m.jsx)("b",{children:e}),": ",r]})};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(o,{label:"Description",value:e}),(0,m.jsx)(o,{label:"Color",value:r}),(0,m.jsx)(o,{label:"Price",value:n})]})},x=function(){var t=(0,a.useState)(),e=(0,i.Z)(t,2),r=e[0],h=e[1],p=(0,c.s0)(),f=(0,c.UO)(),v=f.categoryId,y=f.productId,g=(0,u.a)(l.Tj,{variables:{id:y}}),w=g.error,x=g.loading,P=g.data,j=g.refetch;(0,a.useEffect)((function(){P&&h(P.Product)}),[P]);var E=(0,s.D)(d.Q7,{refetchQueries:[{query:l.bt,variables:{id:v}}]}),S=(0,i.Z)(E,2),_=S[0],C=S[1].loading,I=(0,s.D)(d.eI,{refetchQueries:[{query:l.bt,variables:{id:v}}]}),L=(0,i.Z)(I,2),R=L[0],Z=L[1].loading,Q=function(){var t=(0,o.Z)((0,n.Z)().mark((function t(e){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_({variables:{updateProductId:y,stock:e+1}});case 2:j();case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),D=function(){var t=(0,o.Z)((0,n.Z)().mark((function t(e){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0===e){t.next=4;break}return t.next=3,_({variables:{updateProductId:y,stock:e-1}});case 3:j();case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),$=function(){var t=(0,o.Z)((0,n.Z)().mark((function t(){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,R({variables:{removeProductId:y}});case 2:p("/category/".concat(null===r||void 0===r?void 0:r.category_id));case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();if(w)return(0,m.jsx)(m.Fragment,{children:"Sorry, There was an error to fetch data"});if(x)return(0,m.jsx)(m.Fragment,{children:"Loading..."});if(r){var F=r.name,q=r.description,M=r.color,T=r.price,H=r.stock;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(k,{name:F}),(0,m.jsx)(O,{description:q,color:M,price:T}),(0,m.jsx)(b,{updateLoading:C,removeLoading:Z,stock:H,handleIncreaseStock:Q,handleDecreaseStock:D,handleRemoveProduct:$})]})}return(0,m.jsx)(m.Fragment,{children:"Nothing to be displayed..."})},P=x,j=function(){return(0,m.jsx)(P,{})}},8141:function(t,e,r){var n=r(4836);e.Z=void 0;var o=n(r(5649)),i=r(184),a=(0,o.default)((0,i.jsx)("path",{d:"M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}),"AddCircleOutline");e.Z=a},1098:function(t,e,r){var n=r(4836);e.Z=void 0;var o=n(r(5649)),i=r(184),a=(0,o.default)((0,i.jsx)("path",{d:"M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}),"RemoveCircleOutline");e.Z=a},5861:function(t,e,r){function n(t,e,r,n,o,i,a){try{var s=t[i](a),c=s.value}catch(u){return void r(u)}s.done?e(c):Promise.resolve(c).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function s(t){n(a,o,i,s,c,"next",t)}function c(t){n(a,o,i,s,c,"throw",t)}s(void 0)}))}}r.d(e,{Z:function(){return o}})},4165:function(t,e,r){r.d(e,{Z:function(){return o}});var n=r(1002);function o(){o=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},s=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(I){l=function(t,e,r){return t[e]=r}}function d(t,e,r,n){var o=e&&e.prototype instanceof f?e:f,a=Object.create(o.prototype),s=new S(n||[]);return i(a,"_invoke",{value:x(t,r,s)}),a}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(I){return{type:"throw",arg:I}}}t.wrap=d;var p={};function f(){}function v(){}function y(){}var g={};l(g,s,(function(){return this}));var m=Object.getPrototypeOf,b=m&&m(m(_([])));b&&b!==e&&r.call(b,s)&&(g=b);var w=y.prototype=f.prototype=Object.create(g);function k(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function o(i,a,s,c){var u=h(t[i],t,a);if("throw"!==u.type){var l=u.arg,d=l.value;return d&&"object"==(0,n.Z)(d)&&r.call(d,"__await")?e.resolve(d.__await).then((function(t){o("next",t,s,c)}),(function(t){o("throw",t,s,c)})):e.resolve(d).then((function(t){l.value=t,s(l)}),(function(t){return o("throw",t,s,c)}))}c(u.arg)}var a;i(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return a=a?a.then(n,n):n()}})}function x(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return C()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var s=P(a,r);if(s){if(s===p)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=h(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===p)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function P(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,P(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),p;var o=h(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,p;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function _(t){if(t){var e=t[s];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:C}}function C(){return{value:void 0,done:!0}}return v.prototype=y,i(w,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:v,configurable:!0}),v.displayName=l(y,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,l(t,u,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},k(O.prototype),l(O.prototype,c,(function(){return this})),t.AsyncIterator=O,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new O(d(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},k(w),l(w,u,"Generator"),l(w,s,(function(){return this})),l(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=_,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var s=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(s&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:_(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},t}},4376:function(t,e,r){r.d(e,{D:function(){return l}});var n=r(9388),o=r(2791),i=r(3124),a=r(5970),s=r(2364),c=r(9484),u=r(5046);function l(t,e){var r=(0,u.x)(null===e||void 0===e?void 0:e.client);(0,s.Vp)(t,s.n_.Mutation);var l=(0,o.useState)({called:!1,loading:!1,client:r}),d=l[0],h=l[1],p=(0,o.useRef)({result:d,mutationId:0,isMounted:!0,client:r,mutation:t,options:e});Object.assign(p.current,{client:r,options:e,mutation:t});var f=(0,o.useCallback)((function(t){void 0===t&&(t={});var e=p.current,r=e.client,o=e.options,s=e.mutation,u=(0,n.pi)((0,n.pi)({},o),{mutation:s});p.current.result.loading||u.ignoreResults||!p.current.isMounted||h(p.current.result={loading:!0,error:void 0,data:void 0,called:!0,client:r});var l=++p.current.mutationId,d=(0,i.J)(u,t);return r.mutate(d).then((function(e){var n,o,i,s=e.data,u=e.errors,f=u&&u.length>0?new c.c({graphQLErrors:u}):void 0;if(l===p.current.mutationId&&!d.ignoreResults){var v={called:!0,loading:!1,data:s,error:f,client:r};p.current.isMounted&&!(0,a.D)(p.current.result,v)&&h(p.current.result=v)}return null===(o=null===(n=p.current.options)||void 0===n?void 0:n.onCompleted)||void 0===o||o.call(n,e.data,d),null===(i=t.onCompleted)||void 0===i||i.call(t,e.data,d),e})).catch((function(e){var n,o,i,s;if(l===p.current.mutationId&&p.current.isMounted){var c={loading:!1,error:e,data:void 0,called:!0,client:r};(0,a.D)(p.current.result,c)||h(p.current.result=c)}if((null===(n=p.current.options)||void 0===n?void 0:n.onError)||d.onError)return null===(i=null===(o=p.current.options)||void 0===o?void 0:o.onError)||void 0===i||i.call(o,e,d),null===(s=t.onError)||void 0===s||s.call(t,e,d),{data:void 0,errors:e};throw e}))}),[]),v=(0,o.useCallback)((function(){p.current.isMounted&&h({called:!1,loading:!1,client:r})}),[]);return(0,o.useEffect)((function(){return p.current.isMounted=!0,function(){p.current.isMounted=!1}}),[]),[f,(0,n.pi)({reset:v},d)]}},6578:function(t,e,r){r.d(e,{a:function(){return O}});var n=r(9388),o=r(3855),i=r(2791),a=r.t(i,2),s=r(1064),c=!1,u=a.useSyncExternalStore||function(t,e,r){var n=e();__DEV__&&!c&&n!==e()&&(c=!0,__DEV__&&o.kG.error("The result of getSnapshot should be cached to avoid an infinite loop"));var a=i.useState({inst:{value:n,getSnapshot:e}}),u=a[0].inst,d=a[1];return s.JC?i.useLayoutEffect((function(){Object.assign(u,{value:n,getSnapshot:e}),l(u)&&d({inst:u})}),[t,n,e]):Object.assign(u,{value:n,getSnapshot:e}),i.useEffect((function(){return l(u)&&d({inst:u}),t((function(){l(u)&&d({inst:u})}))}),[t]),n};function l(t){var e=t.value,r=t.getSnapshot;try{return e!==r()}catch(n){return!0}}var d=r(5970),h=r(3124),p=r(9819),f=r(9484),v=r(8055),y=r(2364),g=r(5046),m=r(616),b=r(3200),w=r(5598),k=Object.prototype.hasOwnProperty;function O(t,e){return void 0===e&&(e=Object.create(null)),function(t,e){var r=(0,i.useRef)();r.current&&t===r.current.client&&e===r.current.query||(r.current=new x(t,e,r.current));var n=r.current,o=(0,i.useState)(0),a=(o[0],o[1]);return n.forceUpdate=function(){a((function(t){return t+1}))},n}((0,g.x)(e.client),t).useQuery(e)}var x=function(){function t(t,e,r){this.client=t,this.query=e,this.asyncResolveFns=new Set,this.optionsToIgnoreOnce=new(s.sy?WeakSet:Set),this.ssrDisabledResult=(0,m.J)({loading:!0,data:void 0,error:void 0,networkStatus:v.I.loading}),this.skipStandbyResult=(0,m.J)({loading:!1,data:void 0,error:void 0,networkStatus:v.I.ready}),this.toQueryResultCache=new(s.mr?WeakMap:Map),(0,y.Vp)(e,y.n_.Query);var n=r&&r.result,o=n&&n.data;o&&(this.previousData=o)}return t.prototype.forceUpdate=function(){__DEV__&&o.kG.warn("Calling default no-op implementation of InternalState#forceUpdate")},t.prototype.asyncUpdate=function(){var t=this;return new Promise((function(e){t.asyncResolveFns.add(e),t.optionsToIgnoreOnce.add(t.watchQueryOptions),t.forceUpdate()}))},t.prototype.useQuery=function(t){var e=this;this.renderPromises=(0,i.useContext)((0,p.K)()).renderPromises,this.useOptions(t);var r=this.useObservableQuery(),n=u((0,i.useCallback)((function(){if(e.renderPromises)return function(){};var t=function(){var t=e.result,n=r.getCurrentResult();t&&t.loading===n.loading&&t.networkStatus===n.networkStatus&&(0,d.D)(t.data,n.data)||e.setResult(n)},n=r.subscribe(t,(function o(i){var a=r.last;n.unsubscribe();try{r.resetLastResults(),n=r.subscribe(t,o)}finally{r.last=a}if(!k.call(i,"graphQLErrors"))throw i;var s=e.result;(!s||s&&s.loading||!(0,d.D)(i,s.error))&&e.setResult({data:s&&s.data,error:i,loading:!1,networkStatus:v.I.error})}));return function(){return n.unsubscribe()}}),[r,this.renderPromises,this.client.disableNetworkFetches]),(function(){return e.getCurrentResult()}),(function(){return e.getCurrentResult()}));this.unsafeHandlePartialRefetch(n);var o=this.toQueryResult(n);return!o.loading&&this.asyncResolveFns.size&&(this.asyncResolveFns.forEach((function(t){return t(o)})),this.asyncResolveFns.clear()),o},t.prototype.useOptions=function(e){var r,n=this.createWatchQueryOptions(this.queryHookOptions=e),o=this.watchQueryOptions;!this.optionsToIgnoreOnce.has(o)&&(0,d.D)(n,o)||(this.watchQueryOptions=n,o&&this.observable&&(this.optionsToIgnoreOnce.delete(o),this.observable.reobserve(this.getObsQueryOptions()),this.previousData=(null===(r=this.result)||void 0===r?void 0:r.data)||this.previousData,this.result=void 0)),this.onCompleted=e.onCompleted||t.prototype.onCompleted,this.onError=e.onError||t.prototype.onError,!this.renderPromises&&!this.client.disableNetworkFetches||!1!==this.queryHookOptions.ssr||this.queryHookOptions.skip?this.queryHookOptions.skip||"standby"===this.watchQueryOptions.fetchPolicy?this.result=this.skipStandbyResult:this.result!==this.ssrDisabledResult&&this.result!==this.skipStandbyResult||(this.result=void 0):this.result=this.ssrDisabledResult},t.prototype.getObsQueryOptions=function(){var t=[],e=this.client.defaultOptions.watchQuery;return e&&t.push(e),this.queryHookOptions.defaultOptions&&t.push(this.queryHookOptions.defaultOptions),t.push((0,b.o)(this.observable&&this.observable.options,this.watchQueryOptions)),t.reduce(h.J)},t.prototype.createWatchQueryOptions=function(t){var e;void 0===t&&(t={});var r=t.skip,o=(t.ssr,t.onCompleted,t.onError,t.defaultOptions,(0,n._T)(t,["skip","ssr","onCompleted","onError","defaultOptions"])),i=Object.assign(o,{query:this.query});if(!this.renderPromises||"network-only"!==i.fetchPolicy&&"cache-and-network"!==i.fetchPolicy||(i.fetchPolicy="cache-first"),i.variables||(i.variables={}),r){var a=i.fetchPolicy,s=void 0===a?this.getDefaultFetchPolicy():a,c=i.initialFetchPolicy,u=void 0===c?s:c;Object.assign(i,{initialFetchPolicy:u,fetchPolicy:"standby"})}else i.fetchPolicy||(i.fetchPolicy=(null===(e=this.observable)||void 0===e?void 0:e.options.initialFetchPolicy)||this.getDefaultFetchPolicy());return i},t.prototype.getDefaultFetchPolicy=function(){var t,e;return(null===(t=this.queryHookOptions.defaultOptions)||void 0===t?void 0:t.fetchPolicy)||(null===(e=this.client.defaultOptions.watchQuery)||void 0===e?void 0:e.fetchPolicy)||"cache-first"},t.prototype.onCompleted=function(t){},t.prototype.onError=function(t){},t.prototype.useObservableQuery=function(){var t=this.observable=this.renderPromises&&this.renderPromises.getSSRObservable(this.watchQueryOptions)||this.observable||this.client.watchQuery(this.getObsQueryOptions());this.obsQueryFields=(0,i.useMemo)((function(){return{refetch:t.refetch.bind(t),reobserve:t.reobserve.bind(t),fetchMore:t.fetchMore.bind(t),updateQuery:t.updateQuery.bind(t),startPolling:t.startPolling.bind(t),stopPolling:t.stopPolling.bind(t),subscribeToMore:t.subscribeToMore.bind(t)}}),[t]);var e=!(!1===this.queryHookOptions.ssr||this.queryHookOptions.skip);return this.renderPromises&&e&&(this.renderPromises.registerSSRObservable(t),t.getCurrentResult().loading&&this.renderPromises.addObservableQueryPromise(t)),t},t.prototype.setResult=function(t){var e=this.result;e&&e.data&&(this.previousData=e.data),this.result=t,this.forceUpdate(),this.handleErrorOrCompleted(t)},t.prototype.handleErrorOrCompleted=function(t){var e=this;t.loading||Promise.resolve().then((function(){t.error?e.onError(t.error):t.data&&e.onCompleted(t.data)})).catch((function(t){__DEV__&&o.kG.warn(t)}))},t.prototype.getCurrentResult=function(){return this.result||this.handleErrorOrCompleted(this.result=this.observable.getCurrentResult()),this.result},t.prototype.toQueryResult=function(t){var e=this.toQueryResultCache.get(t);if(e)return e;var r=t.data,o=(t.partial,(0,n._T)(t,["data","partial"]));return this.toQueryResultCache.set(t,e=(0,n.pi)((0,n.pi)((0,n.pi)({data:r},o),this.obsQueryFields),{client:this.client,observable:this.observable,variables:this.observable.variables,called:!this.queryHookOptions.skip,previousData:this.previousData})),!e.error&&(0,w.O)(t.errors)&&(e.error=new f.c({graphQLErrors:t.errors})),e},t.prototype.unsafeHandlePartialRefetch=function(t){!t.partial||!this.queryHookOptions.partialRefetch||t.loading||t.data&&0!==Object.keys(t.data).length||"cache-only"===this.observable.options.fetchPolicy||(Object.assign(t,{loading:!0,networkStatus:v.I.refetch}),this.observable.refetch())},t}()}}]);
//# sourceMappingURL=677.edea94ec.chunk.js.map