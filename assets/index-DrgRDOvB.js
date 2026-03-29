(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function i(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(o){if(o.ep)return;o.ep=!0;const n=i(o);fetch(o.href,n)}})();const l={x:window.innerWidth/2,y:window.innerHeight/2,vx:0,vy:0};window.addEventListener("mousemove",e=>{l.vx=e.clientX-l.x,l.vy=e.clientY-l.y,l.x=e.clientX,l.y=e.clientY},{passive:!0});function g(){if(!document.getElementById("splash-screen"))return;gsap.timeline().from(".splash-credits",{opacity:0,y:10,duration:.8,delay:.5}).from(".splash-title",{opacity:0,scale:.9,filter:"blur(10px)",duration:1.5,ease:"expo.out"},"-=0.4").from(".splash-desc",{opacity:0,y:20,duration:1},"-=1").from(".splash-action",{opacity:0,scale:.8,duration:.8,ease:"back.out(1.7)"},"-=0.5")}function f(){const e=document.getElementById("splash-screen");gsap.to(e,{opacity:0,scale:1.1,filter:"blur(20px)",duration:1.2,ease:"power2.inOut",onComplete:()=>{e.style.display="none",document.body.classList.add("loaded"),x(),b(),w("huangyi"),_()}})}const y=[{src:"./god/01.png",title:"遊戲場景製作 — 黃易群俠傳m",desc:"高精度遊戲場景，PBR 材質到場景燈光渲染。"},{src:"./god/02.png",title:"遊戲場景製作 — 天子傳奇S",desc:"依照以前專案高精度模型重建。"},{src:"./god/03.png",title:"遊戲場景製作 — 飄流幻境RE",desc:"經典場景重製。"},{src:"./god/05.jpg",title:"AI 居家安全監控系統",desc:"YOLOv11 + 遷移學習實現即時危險物品辨識。"}],u={huangyi:{label:"黃易群俠傳m",items:[]},tianzi:{label:"天子傳奇S",items:[]},wlwl:{label:"飄流幻境RE",items:[]},embedded:{label:"嵌入式AI影像",items:[]}};function x(){for(let e=1;e<=12;e++)u.huangyi.items.push({type:"image",src:`./assets/huangyi_${e}.png`,title:`黃易 ${e}`});for(let e=1;e<=29;e++)u.tianzi.items.push({type:"image",src:`./assets/tianzi_${e}.png`,title:`天子 ${e}`})}function b(){const e=document.getElementById("featured-grid");e&&y.forEach(t=>{const i=document.createElement("div");i.className="featured-card reveal",i.innerHTML=`<img src="${t.src}" alt="${t.title}"><div class="card-info"><h3>${t.title}</h3><p>${t.desc}</p></div>`,e.appendChild(i)})}function w(e){const t=document.getElementById("portfolio-grid");t&&(t.innerHTML="",u[e].items.forEach(i=>{const s=document.createElement("div");s.className="grid-item reveal",s.innerHTML=`<img src="${i.src}" alt="${i.title}">`,t.appendChild(s)}))}function _(){const e=new IntersectionObserver(t=>{t.forEach(i=>{i.isIntersecting&&(i.target.classList.add("active"),e.unobserve(i.target))})},{threshold:.1});document.querySelectorAll(".reveal").forEach(t=>e.observe(t))}class E{constructor(t){this.canvas=document.getElementById(t),this.canvas&&(this.gl=this.canvas.getContext("webgl"),this.mouse={x:.5,y:.5,targetX:.5,targetY:.5},this.state={active:0,targetActive:0},this.init())}init(){const t="attribute vec2 p;void main(){gl_Position=vec4(p,0,1);}",i=`
            precision highp float;
            uniform float u_time;
            uniform vec2 u_res;
            uniform vec2 u_mouse;
            uniform float u_active;

            float snoise(vec3 v);
            float sdf(vec3 p) {
                float sphere = length(p) - (1.2 + u_active * 0.4);
                float n = snoise(p * (2.0 + u_active * 2.0) + u_time * 0.3) * (0.3 + u_active * 0.5);
                float spikes = pow(1.0 - abs(snoise(p * 12.0 + u_time * 1.2)), 2.0) * (0.1 + u_active * 0.6);
                return sphere - n - spikes;
            }

            vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}
            vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}
            vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}
            vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}
            float snoise(vec3 v){
                const vec2 C=vec2(1.0/6.0,1.0/3.0);const vec4 D=vec4(0.0,0.5,1.0,2.0);
                vec3 i=floor(v+dot(v,C.yyy));vec3 x0=v-i+dot(i,C.xxx);
                vec3 g=step(x0.yzx,x0.xyz);vec3 l=1.0-g;vec3 i1=min(g.xyz,l.zxy);vec3 i2=max(g.xyz,l.zxy);
                vec3 x1=x0-i1+C.xxx;vec3 x2=x0-i2+C.yyy;vec3 x3=x0-D.yyy;
                i=mod289(i);vec4 p=permute(permute(permute(i.z+vec4(0.0,i1.z,i2.z,1.0))+i.y+vec4(0.0,i1.y,i2.y,1.0))+i.x+vec4(0.0,i1.x,i2.x,1.0));
                float n_=0.142857142857;vec3 ns=n_*D.wyz-D.xzx;vec4 j=p-49.0*floor(p*ns.z*ns.z);
                vec4 x_=floor(j*ns.z);vec4 y_=floor(j-7.0*x_);vec4 x=x_*ns.x+ns.yyyy;vec4 y=y_*ns.x+ns.yyyy;
                vec4 h=1.0-abs(x)-abs(y);vec4 b0=vec4(x.xy,y.xy);vec4 b1=vec4(x.zw,y.zw);
                vec4 s0=floor(b0)*2.0+1.0;vec4 s1=floor(b1)*2.0+1.0;vec4 sh=-step(h,vec4(0.0));
                vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
                vec3 p0=vec3(a0.xy,h.x);vec3 p1=vec3(a0.zw,h.y);vec3 p2=vec3(a1.xy,h.z);vec3 p3=vec3(a1.zw,h.w);
                vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
                p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;
                vec4 m=max(0.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0);
                m=m*m;return 42.0*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
            }

            void main() {
                vec2 uv = (gl_FragCoord.xy - 0.5 * u_res) / min(u_res.x, u_res.y) * 4.0;
                vec3 ro = vec3(0, 0, -4.5);
                vec3 rd = normalize(vec3(uv, 2.5));
                rd.xy += (u_mouse - 0.5) * (0.8 + u_active * 0.5);
                float t = 0.0, d;
                for(int i=0; i<64; i++) {
                    d = sdf(ro + rd * t);
                    if(d < 0.001 || t > 10.0) break;
                    t += d;
                }
                if(t < 10.0) {
                    vec3 p = ro + rd * t;
                    vec2 e = vec2(0.01, 0);
                    vec3 n = normalize(vec3(sdf(p+e.xyy)-sdf(p-e.xyy), sdf(p+e.yxy)-sdf(p-e.yxy), sdf(p+e.yyx)-sdf(p-e.yyx)));
                    float fres = pow(1.0 + dot(rd, n), 4.0);
                    float spec = pow(max(dot(reflect(rd, n), vec3(0.57)), 0.0), 64.0);
                    vec3 col = mix(vec3(0.02), vec3(0.78, 0.66, 0.49), fres * 0.4) + spec * 0.8;
                    gl_FragColor = vec4(col, 1.0);
                } else {
                    gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
                }
            }
        `,s=this.gl.createProgram(),o=this.gl.createShader(this.gl.VERTEX_SHADER);this.gl.shaderSource(o,t),this.gl.compileShader(o);const n=this.gl.createShader(this.gl.FRAGMENT_SHADER);this.gl.shaderSource(n,i),this.gl.compileShader(n),this.gl.attachShader(s,o),this.gl.attachShader(s,n),this.gl.linkProgram(s),this.gl.useProgram(s),this.locs={p:this.gl.getAttribLocation(s,"p"),u_time:this.gl.getUniformLocation(s,"u_time"),u_res:this.gl.getUniformLocation(s,"u_res"),u_mouse:this.gl.getUniformLocation(s,"u_mouse"),u_active:this.gl.getUniformLocation(s,"u_active")};const c=this.gl.createBuffer();this.gl.bindBuffer(this.gl.ARRAY_BUFFER,c),this.gl.bufferData(this.gl.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),this.gl.STATIC_DRAW),this.gl.enableVertexAttribArray(this.locs.p),this.gl.vertexAttribPointer(this.locs.p,2,this.gl.FLOAT,!1,0,0),window.addEventListener("mousemove",a=>{const r=this.canvas.getBoundingClientRect();this.mouse.targetX=(a.clientX-r.left)/r.width,this.mouse.targetY=(a.clientY-r.top)/r.height}),requestAnimationFrame(a=>this.render(a))}setActive(t){this.state.targetActive=t}render(t){this.canvas.width!==innerWidth&&(this.canvas.width=innerWidth,this.canvas.height=innerHeight,this.gl.viewport(0,0,this.canvas.width,this.canvas.height)),this.mouse.x+=(this.mouse.targetX-this.mouse.x)*.1,this.mouse.y+=(this.mouse.targetY-this.mouse.y)*.1,this.state.active+=(this.state.targetActive-this.state.active)*.05,this.gl.uniform1f(this.locs.u_time,t*.001),this.gl.uniform2f(this.locs.u_res,this.canvas.width,this.canvas.height),this.gl.uniform2f(this.locs.u_mouse,this.mouse.x,1-this.mouse.y),this.gl.uniform1f(this.locs.u_active,this.state.active),this.gl.drawArrays(this.gl.TRIANGLES,0,3),requestAnimationFrame(i=>this.render(i))}}const m=new E("ferro-canvas-bg");let d=!1;const p=[{label:"精選作品",icon:"🎨",link:"#featured"},{label:"訓練歷程",icon:"🧠",link:"./public/training-gallery.html"},{label:"關於我",icon:"👤",link:"#about"},{label:"聯絡方式",icon:"✉️",link:"#contact"}];function v(){d=!d;const e=document.getElementById("pie-menu-overlay"),t=e.querySelector(".pie-center");if(d){document.body.classList.add("menu-open"),e.classList.add("active"),m.setActive(1),t.innerHTML="";const i=220;p.forEach((s,o)=>{const n=o/p.length*Math.PI*2-Math.PI/2,c=Math.cos(n)*i,a=Math.sin(n)*i,r=document.createElement("div");r.className="pie-item-node",r.innerHTML=`<i>${s.icon}</i><span>${s.label}</span>`,r.style.left=`${c-60}px`,r.style.top=`${a-60}px`,r.onclick=()=>{s.link.startsWith("#")?(v(),setTimeout(()=>{var h;return(h=document.querySelector(s.link))==null?void 0:h.scrollIntoView({behavior:"smooth"})},600)):window.location.href=s.link},t.appendChild(r),gsap.fromTo(r,{opacity:0,scale:0},{opacity:1,scale:1,duration:.6,delay:o*.1,ease:"back.out(1.7)"})})}else document.body.classList.remove("menu-open"),m.setActive(0),gsap.to(".pie-item-node",{opacity:0,scale:.5,duration:.4,stagger:.05,onComplete:()=>e.classList.remove("active")})}window.toggleMenu=v;window.startExperience=f;document.addEventListener("contextmenu",e=>{e.preventDefault(),v()});window.addEventListener("load",()=>{g(),L()});function L(){const e=document.getElementById("cursor-dot"),t=document.getElementById("cursor-ring");!e||!t||(window.addEventListener("mousemove",i=>{gsap.to(e,{x:i.clientX,y:i.clientY,duration:.1}),gsap.to(t,{x:i.clientX,y:i.clientY,duration:.3})}),document.querySelectorAll("a, button, .pie-item-node, .nav-logo").forEach(i=>{i.addEventListener("mouseenter",()=>t.classList.add("active")),i.addEventListener("mouseleave",()=>t.classList.remove("active"))}))}
