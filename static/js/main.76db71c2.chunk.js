(this["webpackJsonpreact-three-fiber-pavillon"]=this["webpackJsonpreact-three-fiber-pavillon"]||[]).push([[0],{30:function(t,e,n){},36:function(t,e,n){"use strict";n.r(e);var o=n(22),r=n.n(o),c=n(1),i=(n(30),n(3)),s=n(5),b=n(10),a=n(26),j=n(2),u=n(6);function O(t){var e=Object(c.useRef)(),n=Object(c.useState)(!1),o=Object(s.a)(n,2),r=o[0],a=o[1],j=Object(c.useState)(!1),O=Object(s.a)(j,2),p=O[0],x=O[1];return Object(b.c)((function(){e.current.rotation.x=e.current.rotation.y+=.01})),Object(u.jsxs)("mesh",Object(i.a)(Object(i.a)({},t),{},{ref:e,scale:p?[1.5,1.5,1.5]:[1,1,1],onClick:function(t){return x(!p)},onPointerOver:function(t){return a(!0)},onPointerOut:function(t){return a(!1)},children:[Object(u.jsx)("boxBufferGeometry",{args:[1,1,1]}),Object(u.jsx)("meshStandardMaterial",{color:r?"hotpink":"white"})]}))}Object(b.b)({OrbitControls:a.a});var p=function(){var t=Object(b.d)(),e=t.camera,n=t.gl.domElement,o=Object(c.useRef)();return Object(b.c)((function(){return o.current.update()})),Object(u.jsx)("orbitControls",{ref:o,args:[e,n],autoRotate:!1,enableZoom:!1})};function x(){var t=Object(b.d)().scene,e=(new j.CubeTextureLoader).load(["./img/skybox/px.png","./img/skybox/nx.png","./img/skybox/py.png","./img/skybox/ny.png","./img/skybox/pz.png","./img/skybox/nz.png"]);return t.background=e,null}function g(){return Object(u.jsxs)(b.a,{children:[Object(u.jsx)(p,{}),Object(u.jsx)("ambientLight",{intensity:.4}),Object(u.jsx)("spotLight",{position:[10,10,10],angle:.15,penumbra:.8}),Object(u.jsx)("pointLight",{position:[-10,-10,-10]}),Object(u.jsx)(O,{position:[-10,0,-4]}),Object(u.jsx)(O,{position:[5,0,10]}),Object(u.jsx)(O,{position:[10,5,-8]}),Object(u.jsx)(x,{})]})}r.a.render(Object(u.jsx)(g,{}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.76db71c2.chunk.js.map