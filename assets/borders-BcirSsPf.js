import{Ct as e,H as t,Ht as n,L as r,Ut as i,Wn as a,Zn as o,_ as s,a as c,c as l,dt as u,g as d,lt as f,n as p,q as m,t as h,u as g,vr as _,w as v}from"./geo-ByoXwtlv.js";import{r as y}from"./random-D6_Aqw4d.js";import{r as b}from"./images-BFoCP3Qy.js";function x(e,t=new _){let[n,r]=e.lighting.sun===`realtime`?p():[e.lighting.sunLon,e.lighting.sunLat];return h(n,r,1,t)}function S(e,t,n=20){let r=new _;t(x(e,r));let i=0;return a=>{e.lighting.sun!==`realtime`||(i+=a)<n||(i=0,t(x(e,r)))}}var C=`
  varying vec3 vN; varying vec3 vView; varying vec3 vWorldN;
  void main() {
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    vN = normalize(normalMatrix * normal);
    vView = normalize(-mv.xyz);
    vWorldN = normalize(mat3(modelMatrix) * normal);
    gl_Position = projectionMatrix * mv;
  }`,w=`
  uniform vec3 sun; uniform float sunlit;
  float sunFactor(vec3 n) { return mix(1.0, smoothstep(-0.35, 0.35, dot(normalize(n), sun)), sunlit); }`,T={id:`atmosphere`,deps:[`atmosphere`,`palette.atmosphere`,`lighting`],build({preset:t}){let n=t.atmosphere,r=new m;if(!n.enabled)return{object:r,dispose(){}};let i=new _,s={color:{value:new v(t.palette.atmosphere)},sun:{value:i},sunlit:{value:n.sunlit}},c={blending:2,transparent:!0,depthWrite:!1},u=new a({uniforms:{...s,k:{value:n.intensity},size:{value:n.size},scaleH:{value:(n.size-1)/n.haloPower}},vertexShader:`
        varying vec3 vWorld; varying vec3 vWorldN;
        void main() {
          vec4 w = modelMatrix * vec4(position, 1.0);
          vWorld = w.xyz;
          vWorldN = normalize(mat3(modelMatrix) * normal);
          gl_Position = projectionMatrix * viewMatrix * w;
        }`,fragmentShader:`
        uniform vec3 color; uniform float k; uniform float size; uniform float scaleH;
        varying vec3 vWorld; varying vec3 vWorldN;
        ${w}
        void main() {
          // How close does this line of sight pass to the planet's centre?
          // (globe sits at the origin) → altitude of the ray's lowest point.
          vec3 dir = normalize(vWorld - cameraPosition);
          float b = length(cross(cameraPosition, dir));
          float h = max(b - 1.0, 0.0);
          // exponential density falloff, faded to exactly 0 at the shell's edge
          float fade = 1.0 - smoothstep(1.0 + (size - 1.0) * 0.45, size, b);
          float i = exp(-h / scaleH) * fade * k * sunFactor(vWorldN);
          gl_FragColor = vec4(color * i, 1.0);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`,side:1,...c});r.add(new e(new o(n.size,96,64),u));let d=[u];if(n.rim>0){let t=new a({uniforms:{...s,k:{value:n.rim},power:{value:n.rimPower}},vertexShader:C,fragmentShader:`
          uniform vec3 color; uniform float k; uniform float power;
          varying vec3 vN; varying vec3 vView; varying vec3 vWorldN;
          ${w}
          void main() {
            float f = pow(1.0 - clamp(dot(vN, vView), 0.0, 1.0), power);
            gl_FragColor = vec4(color * f * k * sunFactor(vWorldN), 1.0);
            #include <tonemapping_fragment>
            #include <colorspace_fragment>
          }`,side:0,...c}),i=new e(new o(1,128,96),t);t.depthTest=!1,i.renderOrder=2,r.add(i),d.push(t)}return{object:r,update:(()=>{let e=S(t,e=>i.copy(e));return t=>{e(t);let i=Math.max(0,1-l.flat*4);u.uniforms.k.value=n.intensity*i,r.visible=i>.001;for(let e of d)e!==u&&(e.uniforms.k.value=n.rim*i)}})(),dispose:()=>b(r,d)}}},E={id:`sky`,once:!0,deps:[`sky`],build({preset:e}){let t=y(3),r=e.sky.stars,a=new Float32Array(r*3),o=new Float32Array(r*3),c=new _,l=new v;for(let e=0;e<r;e++)c.set(t()*2-1,t()*2-1,t()*2-1).normalize().multiplyScalar(80).toArray(a,e*3),l.setHSL(.55+(t()-.5)*.2,.4*t(),.5+t()*.5).toArray(o,e*3);let u=new s;u.setAttribute(`position`,new d(a,3)),u.setAttribute(`color`,new d(o,3));let f=new i({size:e.sky.starSize,sizeAttenuation:!1,vertexColors:!0}),p=new n(u,f);return{object:p,update:e=>void(p.rotation.y+=e*.003),dispose:()=>b(p,[f])}}},D={id:`lights`,deps:[`lighting`],build({preset:e,kit:t}){let n=e.lighting,i=new m,a=new r(`#fff6e8`,n.sunIntensity);return i.add(new g(`#b8c8ff`,n.ambient),a,a.target),{object:i,update:S(e,e=>{a.position.copy(e).multiplyScalar(10),t.sun.value.copy(e)}),dispose(){}}}},O={id:`borders`,deps:[`map`,`palette.border`],build({preset:e,world:n,ground:r}){let i=new m;if(!e.map.borders)return{object:i,dispose(){}};let a=[],o=r+.0015,l=new _,d=new _;for(let e of n.borders)for(let t=1;t<e.length;t++)h(e[t-1][0],e[t-1][1],o,l),h(e[t][0],e[t][1],o,d),a.push(l.x,l.y,l.z,d.x,d.y,d.z);let p=new s;p.setAttribute(`position`,new t(a,3)),c(p,`segments`);let g=new f({color:e.palette.border,transparent:!0,opacity:e.map.borderOpacity});return i.add(new u(p,g)),{object:i,dispose:()=>b(i,[g])}}};export{S as a,E as i,T as n,D as r,O as t};