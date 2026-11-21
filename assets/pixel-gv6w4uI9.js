import{i as e,n as t,t as n}from"./borders-BcirSsPf.js";import{t as r}from"./countries-1tXWCgSd.js";import{t as i}from"./camera-light-JmZRggxN.js";import{i as a,n as o,r as s,t as c}from"./images-BFoCP3Qy.js";import{At as l,Bt as u,Ct as d,Mt as f,N as p,Qt as m,Sr as h,Un as g,Vn as _,Wn as v,Zn as y,a as b,tr as x,vr as S,w as C,y as w}from"./geo-ByoXwtlv.js";var T={label:`GBA`,extends:`base`,render:{pixelScale:4,toneMapping:`none`,exposure:1},map:{landLift:0,borders:!0,borderOpacity:.5},palette:{background:`#000000`,atmosphere:`#5a9cff`,border:`#173a86`},countries:{visitedColor:`#e8433a`,visitedFill:.42,visitedOutline:1,hoverColor:`#ffffff`,hoverFill:.25,hoverOutline:1},atmosphere:{sunlit:0,intensity:.8},sky:{stars:1800,starSize:1}},E={id:`pixel-earth`,deps:[`pixel`,`map`],async build({preset:e}){let[t,n]=await Promise.all([c(`textures/earth/day.jpg`),c(`textures/earth/water.png`)]),r=new x(t),i=new x(n);i.needsUpdate=!0,r.colorSpace=_,r.anisotropy=4,r.needsUpdate=!0;let a=Math.max(2,Math.round(e.pixel.shadeSteps)),o=new Uint8Array(a*4);for(let e=0;e<a;e++)o.fill(Math.round(255*(.35+.65*e/(a-1))),e*4,e*4+3),o[e*4+3]=255;let u=new p(o,a,1,m);u.minFilter=u.magFilter=f,u.generateMipmaps=!1,u.needsUpdate=!0;let h=b(new y(1,160,96),`uv`),g=new l({map:r,gradientMap:u});g.onBeforeCompile=t=>{t.uniforms.ppWater={value:i},t.uniforms.ppOcean={value:new C(e.pixel.ocean)},t.uniforms.ppOceanMix={value:e.pixel.oceanMix},t.fragmentShader=t.fragmentShader.replace(`#include <common>`,`#include <common>
uniform sampler2D ppWater; uniform vec3 ppOcean; uniform float ppOceanMix;`).replace(`#include <map_fragment>`,`#include <map_fragment>
          float wet = texture2D(ppWater, vMapUv).r;
          float depth = dot(diffuseColor.rgb, vec3(0.3, 0.5, 0.2));
          diffuseColor.rgb = mix(diffuseColor.rgb, ppOcean * (0.75 + depth * 6.0), wet * ppOceanMix);`)},g.customProgramCacheKey=()=>`pp-pixel-earth`;let v=new d(h,g);return{object:v,dispose:()=>s(v,[g,r,i,u])}}},D=`#10286a.#173a86.#1f4fa8.#2a66c4.#3a84d6.#4ba0e0.#3fb0c8.#7ad4d8.#1d4420.#2b6428.#3d8430.#58a23a.#7cbd48.#a8d45a.#76863a.#a29a48.#d6bd66.#ead48a.#c8964a.#a86e36.#74502e.#523822.#6c6860.#918b80.#b8b2a6.#a8c4dc.#dde8f0.#ffffff.#000000.#5a9cff.#9cc8ff.#e8433a.#ff8a5a.#ffd84a`.split(`.`);async function O(e){let{ctx:t}=o(await c(`textures/earth/day.jpg`),128),n=t.getImageData(0,0,128,64).data,r=[];for(let e=0;e<n.length;e+=4)r.push([n[e],n[e+1],n[e+2]]);let i=Array.from({length:e},(t,n)=>[...r[Math.floor((n+.5)/e*r.length)]]);for(let t=0;t<10;t++){let t=i.map(()=>[0,0,0,0]);for(let n of r){let r=0,a=1/0;for(let t=0;t<e;t++){let e=(n[0]-i[t][0])**2+(n[1]-i[t][1])**2+(n[2]-i[t][2])**2;e<a&&(a=e,r=t)}let o=t[r];o[0]+=n[0],o[1]+=n[1],o[2]+=n[2],o[3]++}i=i.map((e,n)=>t[n][3]?[t[n][0]/t[n][3],t[n][1]/t[n][3],t[n][2]/t[n][3]]:e)}let a=e=>Math.round(e).toString(16).padStart(2,`0`);return[...i.map(e=>`#${a(e[0])}${a(e[1])}${a(e[2])}`),`#000000`,`#ffffff`,`#5a9cff`,`#9cc8ff`,`#e8433a`]}var k=72;function A(){let e=new h(1,1,{depthBuffer:!0,minFilter:f,magFilter:f});e.texture.colorSpace=_;let t=Array.from({length:k},()=>new S),n=new v({uniforms:{tex:{value:e.texture},pal:{value:t},count:{value:0},saturation:{value:1},contrast:{value:1},brightness:{value:0},dither:{value:0}},vertexShader:`
      varying vec2 vUv;
      void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,fragmentShader:`
      uniform sampler2D tex; uniform vec3 pal[${k}]; uniform int count;
      uniform float saturation; uniform float contrast; uniform float brightness; uniform float dither;
      varying vec2 vUv;
      vec3 oklab(vec3 c) {
        float l = 0.4122214708 * c.r + 0.5363325363 * c.g + 0.0514459929 * c.b;
        float m = 0.2119034982 * c.r + 0.6806995451 * c.g + 0.1073969566 * c.b;
        float s = 0.0883024619 * c.r + 0.2817188376 * c.g + 0.6299787005 * c.b;
        l = pow(max(l, 0.0), 1.0 / 3.0); m = pow(max(m, 0.0), 1.0 / 3.0); s = pow(max(s, 0.0), 1.0 / 3.0);
        return vec3(0.2104542553 * l + 0.7936177850 * m - 0.0040720468 * s,
                    1.9779984951 * l - 2.4285922050 * m + 0.4505937099 * s,
                    0.0259040371 * l + 0.7827717662 * m - 0.8086757660 * s);
      }
      float bayer(vec2 p) {
        int x = int(mod(p.x, 4.0)), y = int(mod(p.y, 4.0));
        int i = x + y * 4;
        int m[16] = int[16](0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5);
        return float(m[i]) / 16.0 - 0.5;
      }
      void main() {
        vec3 c = texture2D(tex, vUv).rgb; // linear
        vec3 lab = oklab(c);
        // vivid GBA colours: more chroma, a touch more contrast
        lab.yz *= saturation;
        lab.x = (lab.x - 0.55) * contrast + 0.55 + brightness;
        lab.x += bayer(gl_FragCoord.xy) * dither * 0.12;
        vec3 best = pal[0]; float bd = 1e9;
        for (int k = 0; k < ${k}; k++) {
          if (k >= count) break;
          vec3 d = oklab(pal[k]) - lab;
          float dd = dot(d, d);
          if (dd < bd) { bd = dd; best = pal[k]; }
        }
        gl_FragColor = vec4(best, 1.0);
        #include <colorspace_fragment>
      }`,depthTest:!1,depthWrite:!1}),r=new d(new u(2,2),n),i=new g,a=new w;i.add(r);let o=e=>{let r=e.slice(0,k),i=new C;r.forEach((e,n)=>{i.set(e),t[n].set(i.r,i.g,i.b)}),n.uniforms.count.value=r.length},s=``;return{target:e,present(e){e.render(i,a)},resize(t,n){e.setSize(Math.max(1,t),Math.max(1,n))},async apply(e){let t=e.pixel;n.uniforms.saturation.value=t.saturation,n.uniforms.contrast.value=t.contrast,n.uniforms.brightness.value=t.brightness,n.uniforms.dither.value=t.dither;let r=`${t.palette}:${t.colors}`;r!==s&&(s=r,o(t.palette===`auto`?await O(t.colors):D))},dispose(){e.dispose(),n.dispose(),r.geometry.dispose()}}}var j={id:`pixel`,label:`Pixel`,layers:[i(`pixel-light`,`pixel`),e,E,n,r,t],presets:a(Object.assign({"./presets/gba.json":T})),defaultPreset:`gba`,post:A,presetDir:`src/themes/pixel/presets`};export{j as theme};