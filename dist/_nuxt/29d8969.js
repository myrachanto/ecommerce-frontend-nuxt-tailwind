(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{256:function(t,e,r){"use strict";r.d(e,"a",(function(){return d})),r.d(e,"b",(function(){return o}));var n=r(43),d="http://localhost:4400",o=r.n(n).a.create({baseURL:d,timeout:5e4})},293:function(t,e,r){var content=r(345);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("b460e10c",content,!0,{sourceMap:!1})},344:function(t,e,r){"use strict";r(293)},345:function(t,e,r){(e=r(18)(!1)).push([t.i,".section[data-v-0ea566af]{--tw-bg-opacity:1;background-color:rgba(249,250,251,var(--tw-bg-opacity))}.header1[data-v-0ea566af]{display:flex;align-items:center;justify-content:center;font-weight:600;font-size:1.875rem;line-height:2.25rem;--tw-text-opacity:1;color:rgba(17,24,39,var(--tw-text-opacity))}@media (min-width:768px){.header1[data-v-0ea566af]{font-size:3rem;line-height:1;margin-left:2.5rem;margin-right:2.5rem;padding-left:2.5rem;padding-right:2.5rem}}.flexing[data-v-0ea566af]{display:flex;align-items:center;justify-content:center}.griding[data-v-0ea566af]{width:100%}@media (min-width:640px){.griding[data-v-0ea566af]{max-width:640px}}@media (min-width:768px){.griding[data-v-0ea566af]{max-width:768px}}@media (min-width:1024px){.griding[data-v-0ea566af]{max-width:1024px}}@media (min-width:1280px){.griding[data-v-0ea566af]{max-width:1280px}}@media (min-width:1536px){.griding[data-v-0ea566af]{max-width:1536px}}.griding[data-v-0ea566af]{display:grid;grid-gap:2rem;gap:2rem}@media (min-width:768px){.griding[data-v-0ea566af]{margin-top:2.5rem}}@media (min-width:1024px){.griding[data-v-0ea566af]{grid-template-columns:repeat(2,minmax(0,1fr))}}.griding1[data-v-0ea566af]{width:100%}@media (min-width:640px){.griding1[data-v-0ea566af]{max-width:640px}}@media (min-width:768px){.griding1[data-v-0ea566af]{max-width:768px}}@media (min-width:1024px){.griding1[data-v-0ea566af]{max-width:1024px}}@media (min-width:1280px){.griding1[data-v-0ea566af]{max-width:1280px}}@media (min-width:1536px){.griding1[data-v-0ea566af]{max-width:1536px}}.griding1[data-v-0ea566af]{display:grid}@media (min-width:768px){.griding1[data-v-0ea566af]{margin-top:1.25rem}}@media (min-width:1024px){.griding1[data-v-0ea566af]{grid-template-columns:repeat(1,minmax(0,1fr))}}.comment[data-v-0ea566af]{font-weight:400;font-size:1.25rem;line-height:1.75rem;margin:.5rem 1.25rem;--tw-text-opacity:1;color:rgba(55,65,81,var(--tw-text-opacity))}.imaging[data-v-0ea566af]{border-radius:.25rem;overflow:hidden;--tw-shadow:0 10px 15px -3px rgba(0,0,0,0.1),0 4px 6px -2px rgba(0,0,0,0.05);box-shadow:0 0 transparent,0 0 transparent,var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow)}.cardimg1[data-v-0ea566af]{height:8rem;-o-object-fit:cover;object-fit:cover;width:100%;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.cardimg1[data-v-0ea566af]:hover{--tw-scale-x:1.25;--tw-scale-y:1.25}.cardimg1[data-v-0ea566af]{transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s;transition-duration:.5s}@media (min-width:640px){.cardimg1[data-v-0ea566af]{height:100%}}.br[data-v-0ea566af]{margin-top:.5rem;margin-bottom:.5rem}",""]),t.exports=e},375:function(t,e,r){"use strict";r.r(e);r(42);var n=r(7),d=r(256),o={data:function(){return{host:d.a}},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.params,n={},console.log(r),e.prev=3,e.next=6,d.b.get("/blogi/".concat(r.code));case 6:return o=e.sent,data=o.data,n=data,e.abrupt("return",{blog:n});case 12:e.prev=12,e.t0=e.catch(3),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[3,12]])})))()}},m=(r(344),r(8)),component=Object(m.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"section"},[r("h2",{staticClass:"header1"},[t._v("Services")]),t._v(" "),r("div",{staticClass:"flexing"},[r("div",{staticClass:"griding"},[r("div",{staticClass:"comment"},[r("h2",{staticClass:"h2c"},[t._v(t._s(t.blog.title))]),t._v(" "),r("p",{domProps:{innerHTML:t._s(t.blog.intro)}})]),t._v(" "),r("div",{staticClass:"imaging"},[r("img",{staticClass:"cardimg1",attrs:{src:t.host+"/"+t.blog.picture,alt:t.blog.alt}})])])]),t._v(" "),r("div",{staticClass:"flexing"},[r("div",{staticClass:"griding1"},[r("div",{staticClass:"comment"},[r("p",{domProps:{innerHTML:t._s(t.blog.body)}})])])]),t._v(" "),r("div",{staticClass:"flexing"},[r("div",{staticClass:"griding1"},[r("div",{staticClass:"comment"},[r("p",{domProps:{innerHTML:t._s(t.blog.summary)}})])])])])}),[],!1,null,"0ea566af",null);e.default=component.exports}}]);