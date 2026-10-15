import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{i as t,r as n}from"./framework-ItqtACJ4.js";import{a as r,i,n as a,r as o,t as s}from"./Triangle-NWK9lPYx.js";var c=e(t(),1),l=n(),u=`#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`,d=`#version 300 es
precision highp float;

uniform float uTime;
uniform float uAmplitude;
uniform vec3 uColorStops[3];
uniform vec2 uResolution;
uniform float uBlend;
uniform float uLightMode;
uniform vec2 uPointer;
uniform float uFollow;

out vec4 fragColor;

vec3 permute(vec3 x) {
  return mod(((x * 34.0) + 1.0) * x, 289.0);
}

float snoise(vec2 v){
  const vec4 C = vec4(
      0.211324865405187, 0.366025403784439,
      -0.577350269189626, 0.024390243902439
  );
  vec2 i  = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);

  vec3 p = permute(
      permute(i.y + vec3(0.0, i1.y, 1.0))
    + i.x + vec3(0.0, i1.x, 1.0)
  );

  vec3 m = max(
      0.5 - vec3(
          dot(x0, x0),
          dot(x12.xy, x12.xy),
          dot(x12.zw, x12.zw)
      ),
      0.0
  );
  m = m * m;
  m = m * m;

  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);

  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

struct ColorStop {
  vec3 color;
  float position;
};

#define COLOR_RAMP(colors, factor, finalColor) {              \\
  int index = 0;                                            \\
  for (int i = 0; i < 2; i++) {                               \\
     ColorStop currentColor = colors[i];                    \\
     bool isInBetween = currentColor.position <= factor;    \\
     index = int(mix(float(index), float(i), float(isInBetween))); \\
  }                                                         \\
  ColorStop currentColor = colors[index];                   \\
  ColorStop nextColor = colors[index + 1];                  \\
  float range = nextColor.position - currentColor.position; \\
  float lerpFactor = (factor - currentColor.position) / range; \\
  finalColor = mix(currentColor.color, nextColor.color, lerpFactor); \\
}

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution;
  vec2 drift = (uPointer - 0.5) * uFollow;
  vec2 p = uv + drift * vec2(1.18, 0.72);

  ColorStop colors[3];
  colors[0] = ColorStop(uColorStops[0], 0.0);
  colors[1] = ColorStop(uColorStops[1], 0.5);
  colors[2] = ColorStop(uColorStops[2], 1.0);

  vec3 rampColor;
  COLOR_RAMP(colors, clamp(p.x, 0.0, 1.0), rampColor);

  float n1 = snoise(vec2(p.x * 1.55 + uTime * 0.09, p.y * 1.12 + uTime * 0.07));
  float n2 = snoise(vec2(p.x * 3.05 - uTime * 0.05, p.y * 2.35 + uTime * 0.04));
  float n3 = snoise(vec2(p.x * 0.72 + uTime * 0.03, p.y * 0.88 - uTime * 0.02));
  float field = 0.44 + 0.32 * n1 + 0.22 * n2 + 0.16 * n3;

  float height = snoise(vec2(p.x * 2.0 + uTime * 0.1, uTime * 0.25)) * 0.5 * uAmplitude;
  height = exp(height);
  height = (p.y * 1.45 - height + 0.42);
  float intensity = 0.55 * height;
  float curtain = smoothstep(0.10 - uBlend * 0.5, 0.24 + uBlend * 0.5, intensity);

  float energy = clamp(field * 0.82 + curtain * 0.52, 0.0, 1.0);
  energy *= mix(0.62, 1.0, smoothstep(0.0, 0.38, uv.y));

  vec3 auroraColor = intensity * rampColor;

  if (uLightMode > 0.5) {
    vec3 chroma = pow(clamp(rampColor, 0.0, 1.0), vec3(1.12));
    float chromaPeak = max(chroma.r, max(chroma.g, chroma.b));
    chroma /= max(chromaPeak, 0.0001);
    chroma = mix(chroma, chroma * vec3(1.05, 0.97, 0.9), 0.22);
    float coverage = clamp(energy * 0.94, 0.0, 0.9);
    vec3 paper = vec3(0.985, 0.96, 0.94);
    fragColor = vec4(mix(paper, chroma, coverage), 1.0);
  } else {
    float auroraAlpha = smoothstep(0.20 - uBlend * 0.5, 0.20 + uBlend * 0.5, intensity);
    fragColor = vec4(auroraColor * auroraAlpha, auroraAlpha);
  }
}
`;function f(e){let{colorStops:t=[`#5227FF`,`#7cff67`,`#5227FF`],amplitude:n=1,blend:f=.5,lightMode:p=!1}=e,m=(0,c.useRef)(e),h=(0,c.useRef)(null);return(0,c.useEffect)(()=>{m.current=e}),(0,c.useEffect)(()=>{let e=h.current;if(!e)return;let c=new i({alpha:!0,premultipliedAlpha:!0,antialias:!0}),l=c.gl;l.clearColor(0,0,0,0),l.enable(l.BLEND),l.blendFunc(l.ONE,l.ONE_MINUS_SRC_ALPHA),l.canvas.style.backgroundColor=`transparent`;let g=new s(l);g.attributes.uv&&delete g.attributes.uv;let _=t.map(e=>{let t=new a(e);return[t.r,t.g,t.b]}),v=new r(l,{vertex:u,fragment:d,uniforms:{uTime:{value:0},uAmplitude:{value:n},uColorStops:{value:_},uResolution:{value:[e.offsetWidth,e.offsetHeight]},uBlend:{value:f},uLightMode:{value:+!!p},uPointer:{value:[.5,.5]},uFollow:{value:m.current.follow??.2}}});function y(){if(!e)return;let t=Math.max(1,e.offsetWidth),n=Math.max(1,e.offsetHeight);c.setSize(t,n),v.uniforms.uResolution.value=[t,n]}window.addEventListener(`resize`,y);let b=new ResizeObserver(y),x=new o(l,{geometry:g,program:v});e.appendChild(l.canvas),b.observe(e);let S=.5,C=.5,w=.5,T=.5,E=t=>{if(t.pointerType===`touch`)return;let n=e.getBoundingClientRect();n.width===0||n.height===0||(w=(t.clientX-n.left)/n.width,T=1-(t.clientY-n.top)/n.height)};window.addEventListener(`pointermove`,E,{passive:!0});let D=0,O=e=>{D=requestAnimationFrame(O);let{time:n=e*.01,speed:r=1}=m.current;S+=(w-S)*.055,C+=(T-C)*.055,v.uniforms.uTime.value=n*r*.1,v.uniforms.uAmplitude.value=m.current.amplitude??1,v.uniforms.uBlend.value=m.current.blend??f,v.uniforms.uLightMode.value=m.current.lightMode??p?1:0,v.uniforms.uFollow.value=m.current.follow??.2,v.uniforms.uPointer.value=[S,C];let i=m.current.colorStops??t;v.uniforms.uColorStops.value=i.map(e=>{let t=new a(e);return[t.r,t.g,t.b]}),c.render({scene:x})};return D=requestAnimationFrame(O),y(),()=>{cancelAnimationFrame(D),window.removeEventListener(`resize`,y),window.removeEventListener(`pointermove`,E),b.disconnect(),e&&l.canvas.parentNode===e&&e.removeChild(l.canvas),l.getExtension(`WEBGL_lose_context`)?.loseContext()}},[n,f,p]),(0,l.jsx)(`div`,{ref:h,className:`aurora-container`})}export{f as default};