_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{C8t1:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/index copy",function(){return a("X20c")}])},X20c:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return I}));var c=a("nKUr"),n=a("g4pe"),r=a.n(n),s=a("wx14"),i=a("rePB"),o=a("U8pU"),l=a("ODXe"),b=a("q1tI"),d=a("TSYQ"),j=a.n(d),f=a("H84U"),p=Object(b.createContext)({}),u=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t},m=["xxl","xl","lg","md","sm","xs"],O={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)"},h=new Map,x=-1,g={},y={matchHandlers:{},dispatch:function(e){return g=e,h.forEach((function(e){return e(g)})),h.size>=1},subscribe:function(e){return h.size||this.register(),x+=1,h.set(x,e),e(g),x},unsubscribe:function(e){h.delete(e),h.size||this.unregister()},unregister:function(){var e=this;Object.keys(O).forEach((function(t){var a=O[t],c=e.matchHandlers[a];null===c||void 0===c||c.mql.removeListener(null===c||void 0===c?void 0:c.listener)})),h.clear()},register:function(){var e=this;Object.keys(O).forEach((function(t){var a=O[t],c=function(a){var c=a.matches;e.dispatch(Object(s.a)(Object(s.a)({},g),Object(i.a)({},t,c)))},n=window.matchMedia(a);n.addListener(c),e.matchHandlers[a]={mql:n,listener:c},c(n)}))}},w=function(e,t){var a={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&t.indexOf(c)<0&&(a[c]=e[c]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(c=Object.getOwnPropertySymbols(e);n<c.length;n++)t.indexOf(c[n])<0&&Object.prototype.propertyIsEnumerable.call(e,c[n])&&(a[c[n]]=e[c[n]])}return a},v=(u("top","middle","bottom","stretch"),u("start","end","center","space-around","space-between"),b.forwardRef((function(e,t){var a,c=e.prefixCls,n=e.justify,r=e.align,d=e.className,u=e.style,O=e.children,h=e.gutter,x=void 0===h?0:h,g=e.wrap,v=w(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),N=b.useContext(f.b),E=N.getPrefixCls,C=N.direction,P=b.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),_=Object(l.a)(P,2),S=_[0],L=_[1],z=b.useRef(x);b.useEffect((function(){var e=y.subscribe((function(e){var t=z.current||0;(!Array.isArray(t)&&"object"===Object(o.a)(t)||Array.isArray(t)&&("object"===Object(o.a)(t[0])||"object"===Object(o.a)(t[1])))&&L(e)}));return function(){return y.unsubscribe(e)}}),[]);var B=E("row",c),R=function(){var e=[0,0];return(Array.isArray(x)?x:[x,0]).forEach((function(t,a){if("object"===Object(o.a)(t))for(var c=0;c<m.length;c++){var n=m[c];if(S[n]&&void 0!==t[n]){e[a]=t[n];break}}else e[a]=t||0})),e}(),A=j()(B,(a={},Object(i.a)(a,"".concat(B,"-no-wrap"),!1===g),Object(i.a)(a,"".concat(B,"-").concat(n),n),Object(i.a)(a,"".concat(B,"-").concat(r),r),Object(i.a)(a,"".concat(B,"-rtl"),"rtl"===C),a),d),M=Object(s.a)(Object(s.a)(Object(s.a)({},R[0]>0?{marginLeft:R[0]/-2,marginRight:R[0]/-2}:{}),R[1]>0?{marginTop:R[1]/-2,marginBottom:R[1]/2}:{}),u);return b.createElement(p.Provider,{value:{gutter:R,wrap:g}},b.createElement("div",Object(s.a)({},v,{className:A,style:M,ref:t}),O))})));v.displayName="Row";var N=v,E=function(e,t){var a={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&t.indexOf(c)<0&&(a[c]=e[c]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(c=Object.getOwnPropertySymbols(e);n<c.length;n++)t.indexOf(c[n])<0&&Object.prototype.propertyIsEnumerable.call(e,c[n])&&(a[c[n]]=e[c[n]])}return a};var C=["xs","sm","md","lg","xl","xxl"],P=b.forwardRef((function(e,t){var a,c=b.useContext(f.b),n=c.getPrefixCls,r=c.direction,l=b.useContext(p),d=l.gutter,u=l.wrap,m=e.prefixCls,O=e.span,h=e.order,x=e.offset,g=e.push,y=e.pull,w=e.className,v=e.children,N=e.flex,P=e.style,_=E(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),S=n("col",m),L={};C.forEach((function(t){var a,c={},n=e[t];"number"===typeof n?c.span=n:"object"===Object(o.a)(n)&&(c=n||{}),delete _[t],L=Object(s.a)(Object(s.a)({},L),(a={},Object(i.a)(a,"".concat(S,"-").concat(t,"-").concat(c.span),void 0!==c.span),Object(i.a)(a,"".concat(S,"-").concat(t,"-order-").concat(c.order),c.order||0===c.order),Object(i.a)(a,"".concat(S,"-").concat(t,"-offset-").concat(c.offset),c.offset||0===c.offset),Object(i.a)(a,"".concat(S,"-").concat(t,"-push-").concat(c.push),c.push||0===c.push),Object(i.a)(a,"".concat(S,"-").concat(t,"-pull-").concat(c.pull),c.pull||0===c.pull),Object(i.a)(a,"".concat(S,"-rtl"),"rtl"===r),a))}));var z=j()(S,(a={},Object(i.a)(a,"".concat(S,"-").concat(O),void 0!==O),Object(i.a)(a,"".concat(S,"-order-").concat(h),h),Object(i.a)(a,"".concat(S,"-offset-").concat(x),x),Object(i.a)(a,"".concat(S,"-push-").concat(g),g),Object(i.a)(a,"".concat(S,"-pull-").concat(y),y),a),w,L),B=Object(s.a)({},P);return d&&(B=Object(s.a)(Object(s.a)(Object(s.a)({},d[0]>0?{paddingLeft:d[0]/2,paddingRight:d[0]/2}:{}),d[1]>0?{paddingTop:d[1]/2,paddingBottom:d[1]/2}:{}),B)),N&&(B.flex=function(e){return"number"===typeof e?"".concat(e," ").concat(e," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(e)?"0 0 ".concat(e):e}(N),"auto"!==N||!1!==u||B.minWidth||(B.minWidth=0)),b.createElement("div",Object(s.a)({},_,{style:B,className:z,ref:t}),v)}));P.displayName="Col";var _=P,S=function(e,t){var a={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&t.indexOf(c)<0&&(a[c]=e[c]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(c=Object.getOwnPropertySymbols(e);n<c.length;n++)t.indexOf(c[n])<0&&Object.prototype.propertyIsEnumerable.call(e,c[n])&&(a[c[n]]=e[c[n]])}return a},L=function(e){return b.createElement(f.a,null,(function(t){var a,c=t.getPrefixCls,n=t.direction,r=e.prefixCls,o=e.type,l=void 0===o?"horizontal":o,d=e.orientation,f=void 0===d?"center":d,p=e.className,u=e.children,m=e.dashed,O=e.plain,h=S(e,["prefixCls","type","orientation","className","children","dashed","plain"]),x=c("divider",r),g=f.length>0?"-".concat(f):f,y=!!u,w=j()(x,"".concat(x,"-").concat(l),(a={},Object(i.a)(a,"".concat(x,"-with-text"),y),Object(i.a)(a,"".concat(x,"-with-text").concat(g),y),Object(i.a)(a,"".concat(x,"-dashed"),!!m),Object(i.a)(a,"".concat(x,"-plain"),!!O),Object(i.a)(a,"".concat(x,"-rtl"),"rtl"===n),a),p);return b.createElement("div",Object(s.a)({className:w},h,{role:"separator"}),u&&b.createElement("span",{className:"".concat(x,"-inner-text")},u))}))},z=a("zeV3"),B={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"}}]},name:"star",theme:"filled"},R=a("6VBw"),A=function(e,t){return b.createElement(R.a,Object.assign({},e,{ref:t,icon:B}))};A.displayName="StarFilled";var M=b.forwardRef(A),T=a("vRNQ"),k=a.n(T);function I(){return Object(c.jsxs)("div",{className:k.a.container,children:[Object(c.jsxs)(r.a,{children:[Object(c.jsx)("title",{children:"Jonathan Lurie"}),Object(c.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),Object(c.jsxs)(N,{children:[Object(c.jsx)(_,{xs:2,sm:2,md:4,lg:4,xl:6}),Object(c.jsxs)(_,{xs:20,sm:20,md:16,lg:16,xl:12,children:[Object(c.jsx)(L,{children:Object(c.jsx)("div",{className:k.a["my-face-container"],children:Object(c.jsx)("img",{src:"/images/myface.jpg",className:k.a["my-face"]})})}),Object(c.jsx)("img",{src:"/images/hey.png",className:k.a["hey-img"]}),Object(c.jsxs)("div",{className:k.a.description,children:["My name is ",Object(c.jsx)("span",{children:"Jonathan Lurie"}),",",Object(c.jsx)("br",{}),"I build scientific software, mostly for computing things, moving pixels and triangles."]}),Object(c.jsxs)("div",{className:k.a["job-list"],children:[Object(c.jsxs)(z.b,{className:k.a["job-list-item"],children:[Object(c.jsx)(M,{style:{color:"#ffd500"}}),Object(c.jsx)("span",{className:k.a["job-list-item-when"],children:"now"}),Object(c.jsxs)("span",{className:k.a["job-list-item-what"],children:["building a brain atlas at ",Object(c.jsx)("a",{href:"https://www.epfl.ch/research/domains/bluebrain/",children:"Blue Brain Project"}),", ",Object(c.jsx)("a",{href:"https://www.epfl.ch/",children:"EPFL"}),". Geneva, Switzerland \ud83c\udde8\ud83c\udded"]})]}),Object(c.jsxs)(z.b,{className:k.a["job-list-item"],children:[Object(c.jsx)(M,{style:{color:"#ffd500"}}),Object(c.jsx)("span",{className:"".concat(k.a["job-list-item-when"]," ").concat(k.a["old-jobs"]),children:"previously"}),Object(c.jsx)("span",{className:k.a["job-list-item-what"],children:"building a brain visualization and analysis tools at the MNI/McGill. Montreal, Canada \ud83c\udde8\ud83c\udde6"})]}),Object(c.jsxs)(z.b,{className:k.a["job-list-item"],children:[Object(c.jsx)(M,{style:{color:"#ffd500"}}),Object(c.jsx)("span",{className:"".concat(k.a["job-list-item-when"]," ").concat(k.a["old-jobs"]),children:"before that"}),Object(c.jsx)("span",{className:k.a["job-list-item-what"],children:"Building image/signal processing tools for satelite image processing pipeline, Thales/CNES. Toulouse, France"})]})]}),Object(c.jsx)(L,{})]}),Object(c.jsx)(_,{xs:2,sm:2,md:4,lg:4,xl:6})]})]})}}},[["C8t1",0,1,2]]]);