(function(){"use strict";var t={5307:function(t,e,a){var n=a(9242),r=a(3396);function s(t,e,a,n,s,i){const o=(0,r.up)("page-header"),u=(0,r.up)("router-view"),c=(0,r.up)("page-footer");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)(o),(0,r.Wm)(u),(0,r.Wm)(c)])}const i=t=>((0,r.dD)("data-v-d8604766"),t=t(),(0,r.Cn)(),t),o={id:"block-header"},u=i((()=>(0,r._)("h1",{id:"title"},"Have you visited every state?",-1))),c=[u];function l(t,e,a,n,s,i){return(0,r.wg)(),(0,r.iD)("div",o,c)}var d={name:"PageHeader"},p=a(89);const h=(0,p.Z)(d,[["render",l],["__scopeId","data-v-d8604766"]]);var v=h;const f={class:"footer"},m={class:"m-2"},g={class:"p-3"},b=(0,r._)("br",null,null,-1),y={class:"p-3"},w=(0,r._)("br",null,null,-1),A={class:"p-3"},S={class:"credits"},z=(0,r._)("a",{href:"https://icons8.com/icon/43632/map"},"Icons8",-1),k=(0,r._)("p",{class:"text-right p-2"},[(0,r.Uk)("Header image by "),(0,r._)("a",{href:"https://unsplash.com/photos/KpBXAOs80YI"},"@CHRISLAWTON")],-1);function D(t,e,a,n,s,i){const o=(0,r.up)("router-link"),u=(0,r.up)("P");return(0,r.wg)(),(0,r.iD)("div",f,[(0,r._)("div",m,[(0,r._)("span",g,[(0,r.Wm)(o,{to:"/"},{default:(0,r.w5)((()=>[(0,r.Uk)("Home")])),_:1})]),b,(0,r._)("span",y,[(0,r.Wm)(o,{to:"/about"},{default:(0,r.w5)((()=>[(0,r.Uk)("About this site")])),_:1})]),w,(0,r._)("span",A,[(0,r.Wm)(o,{to:"/visitedStates"},{default:(0,r.w5)((()=>[(0,r.Uk)("All visited states")])),_:1})])]),(0,r._)("div",S,[(0,r.Wm)(u,null,{default:(0,r.w5)((()=>[(0,r.Uk)("Map Icon by "),z])),_:1}),k])])}var V={name:"PageFooter"};const O=(0,p.Z)(V,[["render",D]]);var j=O;const x={class:"state-list-container"};function W(t,e,a,n,s,i){const o=(0,r.up)("state-summary"),u=(0,r.up)("state-detail");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)(o,{states:s.states},null,8,["states"]),(0,r._)("div",x,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(s.states,(t=>((0,r.wg)(),(0,r.iD)("div",{class:"state-container",key:t.name},[(0,r.Wm)(u,{state:t,onUpdateVisited:i.updateVisited},null,8,["state","onUpdateVisited"])])))),128))])])}var C=a(7139),E="data:image/png;base64,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";const Z=t=>((0,r.dD)("data-v-66d8b0f9"),t=t(),(0,r.Cn)(),t),P={class:"state-info"},F={class:"state-name"},M=Z((()=>(0,r._)("img",{class:"map-icon",src:E},null,-1)));function T(t,e,a,s,i,o){const u=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",P,[(0,r._)("span",F,(0,C.zw)(a.state.name),1),(0,r._)("div",null,[(0,r.wy)((0,r._)("input",{class:"visit-state",type:"checkbox","onUpdate:modelValue":e[0]||(e[0]=t=>i.visited=t)},null,512),[[n.e8,i.visited]])]),(0,r._)("div",null,[(0,r.Wm)(u,{to:{name:"StateMap",params:{state:a.state.name}}},{default:(0,r.w5)((()=>[M])),_:1},8,["to"])])])}var X={name:"StateDetail",emits:["update-visited"],props:{state:Object},data(){return{visited:this.state.visited}},watch:{visited(){this.$emit("update-visited",this.state.name,this.visited)}}};const Y=(0,p.Z)(X,[["render",T],["__scopeId","data-v-66d8b0f9"]]);var _=Y;const L={key:0},q={key:0,id:"all-visited-message"};function H(t,e,a,n,s,i){return a.states.length>0?((0,r.wg)(),(0,r.iD)("div",L,[(0,r._)("h3",null,"You have visited "+(0,C.zw)(i.totalVisited)+" "+(0,C.zw)(i.units),1),i.areAllVisited?((0,r.wg)(),(0,r.iD)("p",q,"You have visited everywhere!")):(0,r.kq)("",!0)])):(0,r.kq)("",!0)}var I={name:"StateSummary",props:{states:Array},computed:{totalVisited(){let t=0;return this.states.forEach((e=>{1==e.visited&&t++})),t},areAllVisited(){return this.totalVisited===this.states.length},units(){return 1===this.totalVisited?"state":"states"}}};const U=(0,p.Z)(I,[["render",H],["__scopeId","data-v-071c3072"]]);var R=U,K={name:"StateList",components:{StateDetail:_,StateSummary:R},data(){return{states:[]}},mounted(){this.fetchAllStates()},methods:{fetchAllStates(){this.$stateService.getAllStates().then((t=>{this.states=t})).catch((t=>{alert("Sorry, unable to fetch state list"),console.log(t)}))},updateVisited(t,e){this.$stateService.setVisited(t,e).then((()=>{this.fetchAllStates()})).catch((t=>{alert("Sorry, unable to update this state"),console.error(t)}))}}};const N=(0,p.Z)(K,[["render",W],["__scopeId","data-v-9a878ac4"]]);var G=N,B={name:"App",components:{PageHeader:v,PageFooter:j,StateList:G},mounted(){this.$stateService.getAllStates().then((t=>console.log(t)))}};const J=(0,p.Z)(B,[["render",s]]);var Q=J,$=a(4161),tt={getAllStates(){return $.Z.get("/api/states").then((t=>t.data))},getAllVisitedStates(){return $.Z.get("/api/visitedStates").then((t=>(console.log(t),t.data)))},setVisited(t,e){let a={visited:e};return $.Z.patch("/api/states/"+t,a).then((t=>t.data))},getOneState(t){return $.Z.get(`/api/state/${t}`).then((t=>t.data))}},et=a(2483);const at=(0,r._)("h2",null,"Where have you traveled to?",-1),nt=(0,r._)("p",null,"Use this site to keep track of how many states you have visited",-1),rt=(0,r._)("p",null,"A Vus.js site by Tramaine Stanford",-1),st=[at,nt,rt];function it(t,e,a,n,s,i){return(0,r.wg)(),(0,r.iD)("div",null,st)}var ot={name:"AboutSite"};const ut=(0,p.Z)(ot,[["render",it]]);var ct=ut;const lt={class:"state-map"},dt={key:0},pt={key:1},ht={key:2,id:"map-container"};function vt(t,e,a,n,s,i){const o=(0,r.up)("l-tile-layer"),u=(0,r.up)("l-map");return(0,r.wg)(),(0,r.iD)("div",lt,[(0,r._)("h2",null,"The state of "+(0,C.zw)(s.state.name),1),s.state.visited?((0,r.wg)(),(0,r.iD)("p",dt,"You have visited this state")):((0,r.wg)(),(0,r.iD)("p",pt,"You have not visited this state")),s.dataReady?((0,r.wg)(),(0,r.iD)("div",ht,[(0,r.Wm)(u,{ref:"map",onReady:i.onMapReady,zoom:s.state.zoom,center:i.mapCenter},{default:(0,r.w5)((()=>[(0,r.Wm)(o,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:"© OpenStreetMap contributors"})])),_:1},8,["onReady","zoom","center"])])):(0,r.kq)("",!0)])}var ft=a(9772),mt={name:"StateMap",components:{LMap:ft.iA,LTileLayer:ft.Hw},data(){return{state:{},dataReady:!1,mapReady:!1}},mounted(){this.state.name=this.$route.params.state,this.fetchStateData()},methods:{onMapReady(){this.mapReady=!0,this.setMapView()},setMapView(){this.dataReady&&this.mapReady&&this.$refs.map.leafletObject.setView(this.mapCenter,this.state.zoom)},fetchStateData(){this.$stateService.getOneState(this.state.name).then((t=>{this.state=t,this.dataReady=!0,this.setMapView()})).catch((t=>{t.response&&404===t.response.statys?(this.state.name="?",alert("Page not found")):(alert("Sorry, error fetching data about this state"),console.log(t))}))}},computed:{mapCenter(){return[this.state.lat,this.state.lon]}}};const gt=(0,p.Z)(mt,[["render",vt],["__scopeId","data-v-3bb35d9b"]]);var bt=gt;const yt=(0,r._)("h2",null,[(0,r._)("b",null,"Error 404: Page not found")],-1),wt=[yt];function At(t,e,a,n,s,i){return(0,r.wg)(),(0,r.iD)("div",null,wt)}var St={name:"PathNotFound"};const zt=(0,p.Z)(St,[["render",At]]);var kt=zt;function Dt(t,e,a,n,s,i){return(0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(s.visitedStates,(t=>((0,r.wg)(),(0,r.iD)("div",{key:t.name},[(0,r._)("h2",null,(0,C.zw)(t.name),1)])))),128)}var Vt={name:"VisitedStates",data(){return{visitedStates:[]}},mounted(){this.fetchAllVisitedStates()},methods:{fetchAllVisitedStates(){this.$stateService.getAllVisitedStates().then((t=>{this.visitedStates=t})).catch((t=>{alert("Sorry, unable to fetch visited states"),console.log(t)}))}}};const Ot=(0,p.Z)(Vt,[["render",Dt]]);var jt=Ot,xt=(0,et.p7)({history:(0,et.r5)(),routes:[{path:"/",name:"StateList",component:G},{path:"/about",name:"AboutSite",component:ct},{path:"/map/:state",name:"StateMap",component:bt},{path:"/:pathMatch(.*)",name:"PathNotFound",component:kt},{path:"/VisitedStates",name:"VisitedStates",component:jt}]});let Wt=(0,n.ri)(Q);Wt.config.globalProperties.$stateService=tt,Wt.use(xt),Wt.mount("#app")}},e={};function a(n){var r=e[n];if(void 0!==r)return r.exports;var s=e[n]={exports:{}};return t[n].call(s.exports,s,s.exports,a),s.exports}a.m=t,function(){var t=[];a.O=function(e,n,r,s){if(!n){var i=1/0;for(l=0;l<t.length;l++){n=t[l][0],r=t[l][1],s=t[l][2];for(var o=!0,u=0;u<n.length;u++)(!1&s||i>=s)&&Object.keys(a.O).every((function(t){return a.O[t](n[u])}))?n.splice(u--,1):(o=!1,s<i&&(i=s));if(o){t.splice(l--,1);var c=r();void 0!==c&&(e=c)}}return e}s=s||0;for(var l=t.length;l>0&&t[l-1][2]>s;l--)t[l]=t[l-1];t[l]=[n,r,s]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){var t,e=Object.getPrototypeOf?function(t){return Object.getPrototypeOf(t)}:function(t){return t.__proto__};a.t=function(n,r){if(1&r&&(n=this(n)),8&r)return n;if("object"===typeof n&&n){if(4&r&&n.__esModule)return n;if(16&r&&"function"===typeof n.then)return n}var s=Object.create(null);a.r(s);var i={};t=t||[null,e({}),e([]),e(e)];for(var o=2&r&&n;"object"==typeof o&&!~t.indexOf(o);o=e(o))Object.getOwnPropertyNames(o).forEach((function(t){i[t]=function(){return n[t]}}));return i["default"]=function(){return n},a.d(s,i),s}}(),function(){a.d=function(t,e){for(var n in e)a.o(e,n)&&!a.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){a.f={},a.e=function(t){return Promise.all(Object.keys(a.f).reduce((function(e,n){return a.f[n](t,e),e}),[]))}}(),function(){a.u=function(t){return"js/"+t+"."+{93:"5341abaa",153:"aa885bc4",431:"9c2128b0",858:"b5cffcb7",891:"c4698b01"}[t]+".js"}}(),function(){a.miniCssF=function(t){}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="client:";a.l=function(n,r,s,i){if(t[n])t[n].push(r);else{var o,u;if(void 0!==s)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var d=c[l];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==e+s){o=d;break}}o||(u=!0,o=document.createElement("script"),o.charset="utf-8",o.timeout=120,a.nc&&o.setAttribute("nonce",a.nc),o.setAttribute("data-webpack",e+s),o.src=n),t[n]=[r];var p=function(e,a){o.onerror=o.onload=null,clearTimeout(h);var r=t[n];if(delete t[n],o.parentNode&&o.parentNode.removeChild(o),r&&r.forEach((function(t){return t(a)})),e)return e(a)},h=setTimeout(p.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=p.bind(null,o.onerror),o.onload=p.bind(null,o.onload),u&&document.head.appendChild(o)}}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){a.p="/"}(),function(){var t={143:0};a.f.j=function(e,n){var r=a.o(t,e)?t[e]:void 0;if(0!==r)if(r)n.push(r[2]);else{var s=new Promise((function(a,n){r=t[e]=[a,n]}));n.push(r[2]=s);var i=a.p+a.u(e),o=new Error,u=function(n){if(a.o(t,e)&&(r=t[e],0!==r&&(t[e]=void 0),r)){var s=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;o.message="Loading chunk "+e+" failed.\n("+s+": "+i+")",o.name="ChunkLoadError",o.type=s,o.request=i,r[1](o)}};a.l(i,u,"chunk-"+e,e)}},a.O.j=function(e){return 0===t[e]};var e=function(e,n){var r,s,i=n[0],o=n[1],u=n[2],c=0;if(i.some((function(e){return 0!==t[e]}))){for(r in o)a.o(o,r)&&(a.m[r]=o[r]);if(u)var l=u(a)}for(e&&e(n);c<i.length;c++)s=i[c],a.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return a.O(l)},n=self["webpackChunkclient"]=self["webpackChunkclient"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(5307)}));n=a.O(n)})();
//# sourceMappingURL=app.4d946306.js.map