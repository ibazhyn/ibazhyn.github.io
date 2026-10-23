const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/three.module-CzecZNGx.js","assets/rolldown-runtime-QTnfLwEv.js","assets/GLTFLoader-B-WKxm0P.js","assets/BufferGeometryUtils-VMmQyR_1.js","assets/LineSegments2-DlmrvVaL.js","assets/LineMaterial-DFr9FDMT.js","assets/LineSegmentsGeometry-CqlizAPP.js"])))=>i.map(i=>d[i]);
import{t as e}from"./index-XyyJ_FA7.js";import{a as t,c as n,i as r,n as i,o as a,s as o,t as s}from"./hero-intro-BmrumpwW.js";var c=1.6,l=2.06,u=.6,d=.33,f=26,p=.26,ee=.26,te=0,ne=-.045,re=20*Math.PI/180,ie=12*Math.PI/180,ae=.1,oe=4.5,se=6e-4,ce={"top-left":[-3.1,1.7,.35],"top-right":[3.1,1.7,.35],"bottom-left":[-3.1,-1,.35],"bottom-right":[3.1,-1,.35]},m={colour:13954648,power:128,distance:9,decay:1.6,seconds:.48,settled:.01},h={colour:15131868,metalness:.85,roughness:.34,clearcoat:.2,clearcoatRoughness:.32},g=1,le={colour:2762804,metalness:.02,roughness:.96,clearcoat:0,clearcoatRoughness:1,environment:0},_={colour:15859400,threshold:15,coreWidth:1.25,haloWidth:3.8,coreOpacity:.92,haloOpacity:.2,headThreshold:28,headCoreWidth:1,headHaloWidth:3.2,headCoreOpacity:.42,headHaloOpacity:.1,seconds:.42};function ue(e,t,n,r){let i=new e.EdgesGeometry(n.geometry,r.threshold),a=new t.LineSegmentsGeometry().fromEdgesGeometry(i);i.dispose();let o=n=>{let r=new t.LineMaterial({color:_.colour,transparent:!0,opacity:0,blending:e.AdditiveBlending,depthTest:!0,depthWrite:!1,toneMapped:!1,dashed:!1,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4});return r.linewidth=n,r},s=o(r.coreWidth),c=o(r.haloWidth),l=new t.LineSegments2(a,s),u=new t.LineSegments2(a,c);for(let e of[u,l])e.frustumCulled=!1,e.renderOrder=(n.renderOrder||0)+2,e.raycast=()=>{},e.layers.set(r.layer),e.visible=!1,n.add(e);return{setHot(e){let t=e<.004?0:e,n=t>0;l.visible=n,u.visible=n,s.opacity=t*r.coreOpacity,c.opacity=t*r.haloOpacity},dispose(){n.remove(l),n.remove(u),a.dispose(),s.dispose(),c.dispose()}}}function de(e){let t=e.getAttribute(`position`),n=-.5,r=.5,i=.06,a=.42,o=new Float32Array(1728),s=new Float32Array(1728),c=new Uint16Array(1728);for(let e=0;e<t.count;e++){let l=t.getX(e),u=t.getY(e),d=t.getZ(e);if(d<.45)continue;let f=Math.floor((l-n)/(r-n)*48),p=Math.floor((u-i)/(a-i)*36);if(f<0||p<0||f>=48||p>=36)continue;let ee=p*48+f;o[ee]+=1,s[ee]+=d,c[ee]+=1}let l=[];for(let e=1;e<35;e++)for(let t=1;t<47;t++){if(o[e*48+t]>0)continue;let n=0,r=0,i=0;for(let a=-2;a<=2;a++)for(let l=-2;l<=2;l++){if(l===0&&a===0)continue;let u=(e+a)*48+(t+l);o[u]>0&&(n+=1,r+=s[u],i+=c[u])}n>=8&&l.push({xi:t,yi:e,score:n,z:i?r/i:.66})}let u=e=>n+(e+.5)/48*(r-n),d=e=>i+(e+.5)/36*(a-i),f=e=>{let t=l.filter(t=>u(t.xi)*e>.12);if(t.length===0)return null;let n=0,r=0,i=0,a=0;for(let e of t)n+=u(e.xi)*e.score,r+=d(e.yi)*e.score,i+=e.z*e.score,a+=e.score;return{x:n/a,y:r/a,z:i/a+.04}};return[f(-1)??{x:v.left[0],y:v.left[1],z:v.left[2]},f(1)??{x:v.right[0],y:v.right[1],z:v.right[2]}]}function fe(e){let t=document.createElement(`canvas`);t.width=64,t.height=64;let n=t.getContext(`2d`);if(!n)return null;let r=n.createRadialGradient(32,32,1,32,32,31);r.addColorStop(0,`rgb(241, 254, 200)`),r.addColorStop(.3,`rgb(241, 254, 200)`),r.addColorStop(.65,`rgba(241, 254, 200, 0.45)`),r.addColorStop(1,`rgba(241, 254, 200, 0)`),n.fillStyle=r,n.fillRect(0,0,64,64);let i=new e.CanvasTexture(t);return i.needsUpdate=!0,i}function pe(e,t){let n=fe(e),r=de(t.geometry),i=[];for(let a of r){let r=new e.SpriteMaterial({map:n??void 0,color:_.colour,transparent:!0,opacity:0,blending:e.AdditiveBlending,depthTest:!1,depthWrite:!1,toneMapped:!1}),o=new e.Sprite(r);o.position.set(a.x,a.y,a.z),o.scale.setScalar(v.size),o.renderOrder=20,o.frustumCulled=!1,o.visible=!1,o.raycast=()=>{},t.add(o),i.push({setHot(e){let t=e<.004?0:e;o.visible=t>0,r.opacity=t*Te.flash},dispose(){t.remove(o),r.dispose()}})}if(n){let e=i[i.length-1],t=e?.dispose;e&&(e.dispose=()=>{t?.(),n.dispose()})}return i}var me=[{kind:`box`,at:[-2.18,1.72,.5],scale:.24,tilt:[.42,.55,.18],bob:.28,tumble:.05,blur:0},{kind:`icosahedron`,at:[-2.12,.4,1.05],scale:.56,tilt:[.48,.82,.16],bob:.4,tumble:.09,blur:0},{kind:`tetrahedron`,at:[-1.45,-.28,.32],scale:.22,tilt:[.08,.35,-.15],bob:.5,tumble:.14,blur:0},{kind:`torus`,at:[-2.12,-1.22,1.15],scale:.4,tilt:[1.12,.22,.28],bob:.36,tumble:.1,blur:0},{kind:`box`,at:[2.02,1.12,.62],scale:.28,tilt:[.32,.5,.2],bob:.3,tumble:.06,blur:0},{kind:`tetrahedron`,at:[1.98,.32,.48],scale:.24,tilt:[.18,1.15,.12],bob:.48,tumble:.12,blur:0},{kind:`box`,at:[2.08,-.98,1.72],scale:.82,tilt:[.12,.38,-.16],bob:.22,tumble:.03,blur:0}],he=.85,ge=.7,_e=.55,ve=2.2,ye=3.4,be=.028,xe=.03,Se=.2;function Ce(e,t){switch(t){case`icosahedron`:return new e.IcosahedronGeometry(1,0);case`tetrahedron`:return new e.TetrahedronGeometry(1,0);case`box`:return new e.BoxGeometry(1,1,1);case`torus`:return new e.TorusGeometry(.78,.26,6,10)}}var we={colour:10134700,roughness:.22,clearcoat:1,clearcoatRoughness:.06},Te={colour:1120286,roughness:.1,clearcoat:1,clearcoatRoughness:.04,flash:1},v={left:[-.28,.25,.7],right:[.28,.25,.7],size:.09},Ee={cap:`/models/acc-cap.glb`,frames:`/models/acc-frames.glb`,beret:`/models/acc-beret.glb`,headset:`/models/acc-headset.glb`},De=62,y={colour:16183786,roughness:.34,specular:.48,environment:1.2,clearcoat:.72,clearcoatRoughness:.16},b={throw:1.15,lift:.22,spin:2.4,stagger:.45,rate:5.2,settled:.004};function Oe(e,t){let n=t.index?t.toNonIndexed():t,r=n.getAttribute(`position`),i=new Float32Array(r.count*3);for(let e=0;e<r.count;e+=3){let t=0,n=0,a=0;for(let i=0;i<3;i+=1)t+=r.getX(e+i),n+=r.getY(e+i),a+=r.getZ(e+i);t/=3,n/=3,a/=3;for(let r=0;r<3;r+=1)i[(e+r)*3]=t,i[(e+r)*3+1]=n,i[(e+r)*3+2]=a}return n.setAttribute(`aCentroid`,new e.BufferAttribute(i,3)),n}var ke=`
  vec3 rel = transformed - aCentroid;

  // 0 on the side the plates come from, 1 on the far side.
  vec3 spread = aCentroid - uCentre;
  float side = dot(normalize(spread + 1e-5), uFrom) * 0.5 + 0.5;
  float delay = (1.0 - side) * uStagger;
  float p = clamp((uProgress - delay) / max(1e-4, 1.0 - uStagger), 0.0, 1.0);
  p = p * p * (3.0 - 2.0 * p);

  // One hash per plate, from its own middle, so the scatter is stable across
  // frames and identical on every machine - a random() here would boil.
  float h = fract(sin(dot(aCentroid, vec3(12.9898, 78.233, 37.719))) * 43758.5453);

  float angle = (1.0 - p) * uSpin * (h - 0.5) * 2.0;
  vec3 axis = normalize(vec3(h - 0.5, 0.5 - fract(h * 7.0), fract(h * 13.0) - 0.5) + 1e-4);
  float c = cos(angle);
  float s = sin(angle);
  rel = rel * c + cross(axis, rel) * s + axis * dot(axis, rel) * (1.0 - c);

  // Collapsed to a point at the start: a plate at full size sitting out in the
  // dark is a chip of debris, and four of them read as breakage rather than as
  // an entrance.
  rel *= p;

  vec3 carry = uFrom * (uThrow * (1.0 - p));
  carry.y += uLift * (1.0 - p) * (h + 0.4);
  transformed = aCentroid + rel + carry;
`,Ae=[{at:[-2.6,3.4,2.2],size:[5.5,5.5],power:72},{at:[2.9,1.1,2.6],size:[4,4],power:34},{at:[.2,-2.8,1.6],size:[5,5],power:12},{at:[0,1.2,-3.2],size:[4.5,4.5],power:19}],je=1.05,Me=1.15,Ne=.6,Pe=1.5,Fe=2302252,Ie=.4,Le=[{at:[-2.4,.35,.6],size:[1.1,4.4],colour:15859400,power:18},{at:[2.5,.15,.4],size:[1,4],colour:13683928,power:12},{at:[.2,.5,-2.4],size:[2.2,3],colour:9077912,power:10},{at:[.1,2.7,.2],size:[2.8,2.8],colour:15859400,power:7,overhead:!0},{at:[-1.15,.55,3.2],size:[1.5,2.4],colour:15266e3,power:8},{at:[1.35,.25,3.15],size:[1.2,2],colour:16187368,power:5}],x={depth:-6.5,intensity:1,overscan:1.04},Re={size:[1.15,1.85],depth:-1.15,intensity:2.6},ze={origin:[.5,-.16],direction:[.06,1],colour:15859400,spread:.42,length:2.4,fade:1.35,saturation:.85,speed:.55,noise:.06,distortion:.045,follow:.12,farGain:1.55,nearGain:5.4,floor:2302252,frame:1/30},S={stops:[2893632,7234168,15859400],amplitude:1.15,blend:.42,speed:.42,offset:.02,farGain:.42,nearGain:3.9,floor:2302252},Be=`
  uniform float uTime;
  uniform vec3 uStopA;
  uniform vec3 uStopB;
  uniform vec3 uStopC;
  uniform vec3 uGround;
  uniform float uAmplitude;
  uniform float uBlend;
  uniform float uOffset;
  uniform float uGain;
  uniform float uFeather;
  uniform vec2 uPointer;
  uniform float uFollow;

  varying vec2 vUv;

  vec3 permute(vec3 x) {
    return mod(((x * 34.0) + 1.0) * x, 289.0);
  }

  float snoise(vec2 v) {
    const vec4 C = vec4(
      0.211324865405187, 0.366025403784439,
      -0.577350269189626, 0.024390243902439
    );
    vec2 i = floor(v + dot(v, C.yy));
    vec2 x0 = v - i + dot(i, C.xx);
    vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod(i, 289.0);

    vec3 p = permute(
      permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0)
    );

    vec3 m = max(0.5 - vec3(
      dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)
    ), 0.0);
    m = m * m;
    m = m * m;

    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);

    vec3 g;
    g.x = a0.x * x0.x + h.x * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  vec3 ramp(float t) {
    return t < 0.5
      ? mix(uStopA, uStopB, clamp(t * 2.0, 0.0, 1.0))
      : mix(uStopB, uStopC, clamp((t - 0.5) * 2.0, 0.0, 1.0));
  }

  void main() {
    // The curtain leans with the pointer, which is what stops it reading as
    // wallpaper: the reader moves and the light moves with them.
    float lean = (uPointer.x - 0.5) * uFollow;
    vec2 uv = vec2(clamp(vUv.x + lean, 0.0, 1.0), vUv.y);

    vec3 hue = ramp(uv.x);

    float curtain = snoise(vec2(uv.x * 2.0 + uTime * 0.1, uTime * 0.25))
      * 0.5 * uAmplitude;
    curtain = exp(curtain);
    curtain = uv.y * 2.0 - curtain + uOffset;

    float intensity = 0.6 * curtain;
    float edge = smoothstep(0.20 - uBlend * 0.5, 0.20 + uBlend * 0.5, intensity);
    vec3 colour = intensity * hue * edge;

    if (uFeather > 0.0) {
      float away = length((vUv - 0.5) * vec2(1.0, 1.6)) * 2.0;
      colour *= 1.0 - smoothstep(uFeather, 1.0, away);
    }

    gl_FragColor = vec4(uGround + max(colour, 0.0) * uGain, 1.0);
  }
`,Ve=[{at:[.04,-1.06,1.25],size:[3.5,1.5],rgb:`206,220,240`,alpha:.3,softness:.85},{at:[.1,-.15,-1.9],size:[7.5,6.2],rgb:`150,180,235`,alpha:.035,softness:1}];function He(e,t,n){let r=document.createElement(`canvas`);r.width=256,r.height=256;let i=r.getContext(`2d`);if(!i)return null;let a=i.createRadialGradient(128,128,0,128,128,128);return a.addColorStop(0,`rgba(${e},${t})`),a.addColorStop(.45*n,`rgba(${e},${t*.45})`),a.addColorStop(n,`rgba(${e},0)`),a.addColorStop(1,`rgba(${e},0)`),i.fillStyle=a,i.fillRect(0,0,256,256),r}async function Ue(e,t){let n=await fetch(e);if(!n.ok)throw Error(`model`);let r=Number(n.headers.get(`content-length`));if(!t||!n.body||!Number.isFinite(r)||r<=0)return n.arrayBuffer();let i=n.body.getReader(),a=[],o=0;for(;;){let{done:e,value:n}=await i.read();if(e)break;a.push(n),o+=n.byteLength,t(Math.min(1,o/r))}let s=new Uint8Array(o),c=0;for(let e of a)s.set(e,c),c+=e.byteLength;return s.buffer}async function C(de,fe,v){let De=Ue(de,v),[C,{GLTFLoader:We},{LineSegments2:Ge},{LineSegmentsGeometry:Ke},{LineMaterial:qe}]=await Promise.all([e(()=>import(`./three.module-CzecZNGx.js`).then(e=>e.i),__vite__mapDeps([0,1])),e(()=>import(`./GLTFLoader-B-WKxm0P.js`),__vite__mapDeps([2,0,1,3])),e(()=>import(`./LineSegments2-DlmrvVaL.js`).then(e=>e.n),__vite__mapDeps([4,1,0,5,6])),e(()=>import(`./LineSegmentsGeometry-CqlizAPP.js`).then(e=>e.n),__vite__mapDeps([6,1,0])),e(()=>import(`./LineMaterial-DFr9FDMT.js`).then(e=>e.n),__vite__mapDeps([5,1,0]))]),Je={LineSegments2:Ge,LineSegmentsGeometry:Ke,LineMaterial:qe},Ye=document.createElement(`canvas`);Ye.className=`test-hero__surface`;let w;try{w=new C.WebGLRenderer({canvas:Ye,alpha:!0,antialias:!0,powerPreference:`high-performance`})}catch{return null}let Xe=()=>{w.dispose(),w.getContext()?.getExtension(`WEBGL_lose_context`)?.loseContext()};w.setClearAlpha(0),w.toneMapping=C.AgXToneMapping,w.toneMappingExposure=je,w.transmissionResolutionScale=Ne,w.shadowMap.enabled=!1;let T=new C.Scene,E=new C.PerspectiveCamera(f,1,.1,60);E.layers.enable(g);let Ze=new C.Scene,Qe=new C.BoxGeometry(1,1,1),$e=new C.MeshStandardMaterial({side:C.BackSide,color:Fe,roughness:1,metalness:0}),et=new C.Mesh(Qe,$e);et.scale.setScalar(22),Ze.add(et),Ze.add(new C.AmbientLight(Fe,Ie));let tt=[];for(let e of Le){let t=new C.PlaneGeometry(e.size[0],e.size[1]),n=new C.MeshBasicMaterial({color:e.colour,side:C.DoubleSide});n.color.multiplyScalar(e.power);let r=new C.Mesh(t,n);r.position.set(e.at[0],e.at[1],e.at[2]),`overhead`in e&&e.overhead?r.rotation.x=-Math.PI/2:r.lookAt(0,0,0),Ze.add(r),tt.push(r)}let nt=new C.PMREMGenerator(w),rt=nt.fromScene(Ze,.035);T.environment=rt.texture,T.environmentIntensity=Me;let it=new C.Scene,at=[],ot=new C.BoxGeometry(1,1,1),st=new C.MeshStandardMaterial({side:C.BackSide,color:2369066,roughness:1,metalness:0}),ct=new C.Mesh(ot,st);ct.scale.setScalar(20),it.add(ct),it.add(new C.AmbientLight(14672872,.6));for(let e of Ae){let t=new C.PlaneGeometry(e.size[0],e.size[1]),n=new C.MeshBasicMaterial({color:16777215,side:C.DoubleSide});n.color.multiplyScalar(e.power);let r=new C.Mesh(t,n);r.position.set(e.at[0],e.at[1],e.at[2]),r.lookAt(0,0,0),it.add(r),at.push(r)}let lt=nt.fromScene(it,.04);for(let e of at)e.geometry.dispose(),e.material.dispose();ot.dispose(),st.dispose(),nt.dispose();for(let e of tt)e.geometry.dispose(),e.material.dispose();Qe.dispose(),$e.dispose();let D=[],ut=[],dt=new C.Color(fe).convertSRGBToLinear(),ft=(e,t,n,r,i=0,a=0,o=dt)=>{let s={uTime:{value:0},uStopA:{value:new C.Color(S.stops[0]).convertSRGBToLinear()},uStopB:{value:new C.Color(S.stops[1]).convertSRGBToLinear()},uStopC:{value:new C.Color(S.stops[2]).convertSRGBToLinear()},uGround:{value:o},uAmplitude:{value:S.amplitude},uBlend:{value:S.blend},uOffset:{value:S.offset},uGain:{value:t},uFeather:{value:n},uPointer:{value:new C.Vector2(.5,.42)},uFollow:{value:.12},uAspect:{value:new C.Vector2(1,1)}},c=new C.ShaderMaterial({uniforms:s,vertexShader:`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:Be,depthWrite:!1,toneMapped:!1}),l=new C.Mesh(new C.PlaneGeometry(r?r[0]:1,r?r[1]:1),c);return l.position.set(i,a,e.depth),l.frustumCulled=!1,T.add(l),D.push(l),s},pt=()=>{for(let e of D)e.geometry.dispose(),e.material.dispose();for(let e of ut)e.dispose();rt.dispose(),lt.dispose(),Xe()},O=ft(x,S.farGain,0,null,0,0,dt),mt=D[0];mt&&(mt.visible=!1);let ht=ft(Re,S.nearGain,.35,Re.size,.06,.02,new C.Color(S.floor).convertSRGBToLinear()),gt=D[1];if(gt&&(gt.visible=!1),!mt)return pt(),null;for(let e of Ve.slice(0,1)){let t=He(e.rgb,e.alpha,e.softness);if(!t)continue;let n=new C.CanvasTexture(t);n.colorSpace=C.SRGBColorSpace;let r=new C.Mesh(new C.PlaneGeometry(e.size[0],e.size[1]),new C.MeshBasicMaterial({map:n,transparent:!0,depthWrite:!1,blending:C.AdditiveBlending,toneMapped:!1}));r.position.set(e.at[0],e.at[1],e.at[2]),r.frustumCulled=!1,r.renderOrder=2,T.add(r),D.push(r),ut.push(n)}let k=new C.Group;T.add(k);let A=new C.PointLight(m.colour,0,m.distance,m.decay);A.position.set(...ce[`top-right`]),A.layers.enable(g),T.add(A);let j=new C.PointLight(m.colour,0,18,1.05);j.position.copy(A.position),j.layers.enable(g),T.add(j);let _t=0,M=0,vt=0,N=1,P=0,yt=0,bt=0,xt=0,St=0,F=1,Ct=new We,I=null;try{let e=await De,t=await new Promise((t,n)=>{Ct.parse(e,de.slice(0,de.lastIndexOf(`/`)+1),t,n)});I=t.scene.getObjectByName(`CRYSTAL_MouseLook`)??t.scene}catch{I=null}if(!I)return pt(),null;let wt=[],L=[];I.traverse(e=>{let t=e;if(t.isMesh){if(t.frustumCulled=!1,t.name===`Face`)t.material=new C.MeshPhysicalMaterial({color:h.colour,metalness:h.metalness,roughness:h.roughness,transmission:0,clearcoat:h.clearcoat,clearcoatRoughness:h.clearcoatRoughness,side:C.FrontSide,flatShading:!0}),t.userData.kind=`face`;else{let e=t.name.startsWith(`Iris`),n=e?Te:we,r=new C.MeshPhysicalMaterial({color:n.colour,metalness:0,roughness:n.roughness,clearcoat:n.clearcoat,clearcoatRoughness:n.clearcoatRoughness,transmission:0,side:C.DoubleSide,...e?{emissive:_.colour,emissiveIntensity:0,toneMapped:!1}:{}});t.material=r,t.userData.kind=`head`,e&&L.push({setHot(e){r.emissiveIntensity=e*Te.flash}})}wt.push(t)}}),k.add(I);let R=[],Tt=0,Et=0,Dt=0,z=1,Ot=e=>{e!==Tt&&(Dt=Et,z=0,Tt=e)};for(let e of wt)e.userData.kind===`face`&&(R.push(ue(C,Je,e,{threshold:_.headThreshold,coreWidth:_.headCoreWidth,haloWidth:_.headHaloWidth,coreOpacity:_.headCoreOpacity,haloOpacity:_.headHaloOpacity,layer:0})),L.length===0&&L.push(...pe(C,e)));let kt=new C.HemisphereLight(3815496,1183768,.22);kt.layers.set(g),T.add(kt);let At=new C.MeshLambertMaterial({color:le.colour,flatShading:!0,side:C.DoubleSide}),jt=[At],B=[],Mt=[];me.forEach((e,t)=>{let n=Ce(C,e.kind),r=new C.Mesh(n,At);r.frustumCulled=!1,r.rotation.set(e.tilt[0],e.tilt[1],e.tilt[2]),r.userData.index=t,r.renderOrder=e.blur===0?3:4,r.layers.set(g);let i=new C.Group;i.position.set(e.at[0],e.at[1],e.at[2]),i.scale.setScalar(e.scale),i.layers.set(g),i.add(r),T.add(i);let a=new C.Vector3(Math.sin(t*2.17+.3),Math.cos(t*1.53+.8),Math.sin(t*.91+1.4)).normalize(),o=ue(C,Je,r,{threshold:_.threshold,coreWidth:_.coreWidth,haloWidth:_.haloWidth,coreOpacity:_.coreOpacity,haloOpacity:_.haloOpacity,layer:g});B.push({group:i,mesh:r,edges:o,rest:new C.Vector3(e.at[0],e.at[1],e.at[2]),axis:a,spin:new C.Vector3,scale:e.scale,bob:e.bob,tumble:e.tumble,phase:t*1.7+.4,blur:e.blur,hot:0,hotTarget:0,delay:0}),Mt.push(r)});let V=n(B.length),Nt=Math.max(...B.map(e=>Math.hypot(e.rest.x,e.rest.y)),1);for(let e of B){e.delay=a(Math.hypot(e.rest.x,e.rest.y),Nt,B.length);let t=o(e.rest,0);e.group.position.set(t.x,t.y,t.z),e.group.scale.setScalar(e.scale*t.scale)}let H=new C.WebGLRenderTarget(2,2,{minFilter:C.LinearFilter,magFilter:C.LinearFilter});H.texture.colorSpace=C.NoColorSpace;let U=H.clone();U.texture.colorSpace=C.NoColorSpace;let W=new C.WebGLRenderTarget(2,2,{minFilter:C.LinearFilter,magFilter:C.LinearFilter,depthBuffer:!0});W.texture.colorSpace=C.NoColorSpace;let G=H.clone();G.texture.colorSpace=C.NoColorSpace;let K=new C.FramebufferTexture(2,2);K.minFilter=C.LinearFilter,K.magFilter=C.LinearFilter,K.generateMipmaps=!1,K.colorSpace=C.NoColorSpace;let q=new C.OrthographicCamera(-1,1,1,-1,0,1),J=new C.Scene,Pt=`
    attribute vec3 position;
    attribute vec2 uv;
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = vec4(position.xy, 0.0, 1.0);
    }
  `,Y={t:{value:H.texture},dir:{value:new C.Vector2},premul:{value:1}},Ft=new C.RawShaderMaterial({uniforms:Y,vertexShader:Pt,fragmentShader:`
      precision highp float;
      uniform sampler2D t;
      uniform vec2 dir;
      uniform float premul;
      varying vec2 vUv;
      vec4 tap(vec2 uv) {
        vec4 s = texture2D(t, uv);
        return premul > 0.5 ? vec4(s.rgb * s.a, s.a) : s;
      }
      void main() {
        vec4 sum = vec4(0.0);
        sum += tap(vUv - dir * 4.0) * 0.051;
        sum += tap(vUv - dir * 3.0) * 0.0918;
        sum += tap(vUv - dir * 2.0) * 0.12245;
        sum += tap(vUv - dir * 1.0) * 0.1531;
        sum += tap(vUv) * 0.1633;
        sum += tap(vUv + dir * 1.0) * 0.1531;
        sum += tap(vUv + dir * 2.0) * 0.12245;
        sum += tap(vUv + dir * 3.0) * 0.0918;
        sum += tap(vUv + dir * 4.0) * 0.051;
        gl_FragColor = sum;
      }
    `,depthTest:!1,depthWrite:!1}),X=new C.RawShaderMaterial({uniforms:{t:{value:K}},vertexShader:Pt,fragmentShader:`
      precision highp float;
      uniform sampler2D t;
      varying vec2 vUv;
      void main() {
        gl_FragColor = texture2D(t, vUv);
      }
    `,depthTest:!1,depthWrite:!1}),It={tBlur:{value:G.texture},tMask:{value:H.texture}},Lt=new C.RawShaderMaterial({uniforms:It,vertexShader:Pt,fragmentShader:`
      precision highp float;
      uniform sampler2D tBlur;
      uniform sampler2D tMask;
      varying vec2 vUv;
      void main() {
        vec4 blur = texture2D(tBlur, vUv);
        float m = clamp(texture2D(tMask, vUv).r, 0.0, 1.0);
        gl_FragColor = vec4(blur.rgb, blur.a * m);
      }
    `,transparent:!0,depthTest:!1,depthWrite:!1}),Rt=new C.MeshBasicMaterial({color:16777215,toneMapped:!1}),Z=new C.Mesh(new C.PlaneGeometry(2,2),X);J.add(Z);let zt=(e,t)=>{let n=Math.min(window.devicePixelRatio||1,Pe),r=Math.max(2,Math.floor(e*n)),i=Math.max(2,Math.floor(t*n)),a=Math.max(2,Math.floor(r/2)),o=Math.max(2,Math.floor(i/2));K.dispose(),K=new C.FramebufferTexture(r,i),K.minFilter=C.LinearFilter,K.magFilter=C.LinearFilter,K.generateMipmaps=!1,K.colorSpace=C.NoColorSpace,X.uniforms.t.value=K,H.setSize(a,o),U.setSize(a,o),W.setSize(a,o),G.setSize(a,o)},Bt=(e,t,n)=>{let{width:r,height:i}=H;Z.material=Ft,Y.t.value=e,Y.dir.value.set(t/r,0),Y.premul.value=n,w.setRenderTarget(U),w.setClearColor(0,0),w.clear(),w.render(J,q),Y.t.value=U.texture,Y.dir.value.set(0,t/i),Y.premul.value=0,w.setRenderTarget(H),w.clear(),w.render(J,q)},Vt=()=>{O.uTime.value=bt,ht.uTime.value=bt;for(let e of B)e.group.visible=!0;if(w.setRenderTarget(null),w.render(T,E),!B.some(e=>e.blur>0))return;w.copyFramebufferToTexture(K),Z.material=X,X.uniforms.t.value=K,w.setRenderTarget(H),w.setClearColor(0,0),w.clear(),w.render(J,q),Bt(H.texture,2.8,1),Z.material=X,X.uniforms.t.value=H.texture,w.setRenderTarget(G),w.clear(),w.render(J,q);let e=D.map(e=>e.visible);for(let e of B)e.group.visible=e.blur>0;k.visible=!1;for(let e of D)e.visible=!1;T.overrideMaterial=Rt,w.setRenderTarget(W),w.setClearColor(0,0),w.clear(),w.render(T,E),T.overrideMaterial=null,k.visible=!0,D.forEach((t,n)=>{t.visible=e[n]??!1});for(let e of B)e.group.visible=!0;Bt(W.texture,2.8,1),Z.material=Lt,It.tBlur.value=G.texture,It.tMask.value=H.texture,w.setRenderTarget(null);let t=w.autoClear;w.autoClear=!1,w.render(J,q),w.autoClear=t},Ht=new C.Raycaster;Ht.layers.enable(g);let Ut=new C.Vector2,Wt=new C.Sphere,Gt=new C.Vector3,Kt=0,qt=0,Jt=0,Yt=0,Xt=0,Zt=!1,Qt=[],$t=null,en=new C.Vector3(...ce[`top-right`]).normalize(),tn=new Map,nn=(e,t)=>{let n=new C.Box3().setFromObject(t),r={uProgress:{value:0},uFrom:{value:en.clone()},uCentre:{value:n.getCenter(new C.Vector3)}};t.traverse(e=>{let t=e;if(!t.isMesh)return;t.frustumCulled=!1;let n=Oe(C,t.geometry);n!==t.geometry&&t.geometry.dispose(),t.geometry=n;let i=new C.MeshPhysicalMaterial({color:y.colour,metalness:0,roughness:y.roughness,specularIntensity:y.specular,envMap:lt.texture,envMapIntensity:y.environment,clearcoat:y.clearcoat,clearcoatRoughness:y.clearcoatRoughness,transmission:0,flatShading:!0,side:C.FrontSide});i.onBeforeCompile=e=>{Object.assign(e.uniforms,r,{uThrow:{value:b.throw},uLift:{value:b.lift},uSpin:{value:b.spin},uStagger:{value:b.stagger}}),e.vertexShader=e.vertexShader.replace(`void main() {`,`attribute vec3 aCentroid;
             uniform float uProgress;
             uniform float uThrow;
             uniform float uLift;
             uniform float uSpin;
             uniform float uStagger;
             uniform vec3 uFrom;
             uniform vec3 uCentre;
             void main() {`).replace(`#include <begin_vertex>`,`#include <begin_vertex>\n${ke}`)},i.customProgramCacheKey=()=>`accessory-plates`,t.material=i,Qt.push(t)});let i={object:t,uniforms:r,level:0,target:0};$t===e&&(i.target=1,i.uniforms.uFrom.value.copy(en)),k.add(t),t.visible=!0,r.uProgress.value=1,w.compile(T,E),r.uProgress.value=0,t.visible=i.target>0,tn.set(e,i)};for(let e of Object.keys(Ee))Ct.loadAsync(Ee[e]).then(t=>{Zt||nn(e,t.scene)}).catch(()=>{});let rn=te,an=ne,Q=te,$=ne,on=(e,t)=>Math.max(-t,Math.min(t,e)),sn=()=>{let e=f*Math.PI/360,n=r(St,t(P)/s.seconds,yt);E.position.set(0,p,n),E.lookAt(0,ee,0),E.updateProjectionMatrix();let i=2*(n-x.depth)*Math.tan(e);mt.scale.set(i*F*x.overscan,i*x.overscan,1)},cn=(e,t)=>{let n=f*Math.PI/360;F=e/t,O.uAspect.value.set(F,1),ht.uAspect.value.set(Re.size[0]/Re.size[1],1);let r=l/(2*u*Math.tan(n)),i=c/(2*d*Math.tan(n)*F);St=Math.max(r,i),E.aspect=F,sn()};k.rotation.set($,Q,-Q*ae);for(let e of B)e.edges.setHot(1);for(let e of R)e.setHot(1);for(let e of L)e.setHot(1);w.compile(T,E);for(let e of B)e.edges.setHot(0);for(let e of R)e.setHot(0);for(let e of L)e.setHot(0);return{canvas:Ye,aim(e,t){rn=on(e*re*1.35,re),an=on(t*ie*1.35,ie),Jt=e,Yt=t,O.uPointer.value.set(e*.5+.5,t*.5+.5),ht.uPointer.value.copy(O.uPointer.value)},release(){rn=te,an=ne,Jt=0,Yt=0,O.uPointer.value.set(.5,.42),ht.uPointer.value.copy(O.uPointer.value)},probe(e,t){if(e===null||t===null){for(let e of B)e.hotTarget=0;Ot(0);return}Ut.set(e,-t),E.updateMatrixWorld(),Ht.setFromCamera(Ut,E);let n=-1,r=1/0;for(let[e,t]of B.entries()){Wt.center.copy(t.group.position),Wt.radius=Math.max(t.scale,.28)*1.15;let i=Ht.ray.intersectSphere(Wt,Gt);if(!i)continue;let a=i.distanceTo(E.position);a<r&&(r=a,n=e)}let i=Ht.intersectObjects(wt,!1)[0],a=i?.distance??1/0,o=!!i&&a<=r&&(i?.object.userData.kind===`face`||i?.object.userData.kind===`head`);o&&(n=-1),Ot(+!!o);for(let[e,t]of B.entries()){let r=+(e===n);r===1&&t.hotTarget===0&&t.spin.set((Math.random()-.5)*2*he,(Math.random()-.5)*2*he,(Math.random()-.5)*2*he),t.hotTarget=r}},exit(e){yt=Math.max(0,Math.min(1,e)),P=i(P,0,yt,V),sn()},accent(e){e&&A.position.set(...ce[e]);let t=+!!e;t!==_t&&(vt=M,N=0,_t=t)},wear(e,t){$t=e,e&&t&&en.set(...ce[t]).normalize();for(let[t,n]of tn){let r=+(t===e);r===1&&n.uniforms.uFrom.value.copy(en),n.target=r}},step(e){let n=1-Math.exp(-e*oe);if(Q+=(rn-Q)*n,$+=(an-$)*n,k.rotation.set($,Q,-Q*ae),N<1){N=Math.min(1,N+e/m.seconds);let t=N,n=t*t*(3-2*t);M=vt+(_t-vt)*n}A.intensity=M*m.power,j.intensity=M*m.power*1.55,j.position.copy(A.position),j.position.z+=1.7;let r=1-Math.exp(-e*b.rate);for(let e of tn.values())e.level!==e.target&&(e.level=Math.abs(e.target-e.level)<b.settled?e.target:e.level+(e.target-e.level)*r,e.uniforms.uProgress.value=e.level,e.object.visible=e.level>0);P<V&&(P=i(P,e,yt,V),sn()),Xt+=e;let a=1-Math.exp(-e*ye);Kt+=(Jt-Kt)*a,qt+=(Yt-qt)*a;let c=1-Math.exp(-e*ve);if(z<1){z=Math.min(1,z+e/_.seconds);let t=z;Et=Dt+(Tt-Dt)*(t*t*(3-2*t))}for(let e of R)e.setHot(Et);for(let e of L)e.setHot(Et);let l=!1;for(let n of B){n.hot+=(n.hotTarget-n.hot)*c,n.edges.setHot(n.hot);let r=n.hotTarget>.5?_e:ge;n.spin.multiplyScalar(Math.exp(-e*r)),(n.hotTarget>0||n.hot>.01||n.spin.lengthSq()>.002)&&(l=!0);let i=Math.sin(Xt*n.bob+n.phase)*be*(n.blur===2?.4:1),a=Se*(.22+n.blur*.2+Math.max(0,n.rest.z)*.1),u=o(n.rest,(t(P)-n.delay)/s.seconds);n.group.position.set(u.x-Kt*a,u.y+qt*a*.7+i+n.hot*.04,u.z),n.group.scale.setScalar(n.scale*u.scale*(1+xe*n.hot)),n.mesh.rotateOnAxis(n.axis,n.tumble*e),n.mesh.rotateX(n.spin.x*e),n.mesh.rotateY(n.spin.y*e),n.mesh.rotateZ(n.spin.z*e)}let u=Math.abs(rn-Q)>se||Math.abs(an-$)>se||Math.abs(_t-M)>m.settled||P<V||l||z<1||[...tn.values()].some(e=>e.level!==e.target);bt+=e,xt+=e,!(!u&&xt<ze.frame)&&(xt=0,Vt())},settled(){return!1},resize(e,t){w.setPixelRatio(Math.min(window.devicePixelRatio||1,Pe)),w.setSize(e,t,!1),zt(e,t),cn(e,t),Vt()},dispose(){Zt=!0;for(let e of R)e.dispose();for(let e of L)e.dispose?.();for(let e of B)e.edges.dispose();for(let e of[...wt,...Qt])e.geometry.dispose(),e.material.dispose();for(let e of Mt)e.geometry.dispose();for(let e of jt)e.dispose();Ft.dispose(),X.dispose(),Lt.dispose(),Rt.dispose(),Z.geometry.dispose(),K.dispose(),H.dispose(),U.dispose(),W.dispose(),G.dispose(),pt(),Ye.remove()}}}export{De as SCENE_BUILD,C as createGlassHead};