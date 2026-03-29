(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function o(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(i){if(i.ep)return;i.ep=!0;const n=o(i);fetch(i.href,n)}})();const h={x:window.innerWidth/2,y:window.innerHeight/2,vx:0,vy:0};window.addEventListener("mousemove",e=>{h.vx=e.clientX-h.x,h.vy=e.clientY-h.y,h.x=e.clientX,h.y=e.clientY},{passive:!0});function G(){const e=document.getElementById("splash-screen"),t=document.getElementById("enter-btn");if(!e||!t)return;gsap.timeline().from(".splash-credits",{opacity:0,y:10,duration:.8,delay:.5}).from(".splash-title",{opacity:0,scale:.9,filter:"blur(10px)",duration:1.5,ease:"expo.out"},"-=0.4").from(".splash-desc",{opacity:0,y:20,duration:1},"-=1").from(".splash-action",{opacity:0,scale:.8,duration:.8,ease:"back.out(1.7)"},"-=0.5"),t.addEventListener("click",()=>{gsap.to(e,{scale:1.3,opacity:0,duration:1.2,ease:"expo.inOut",onComplete:()=>{e.style.display="none",document.body.classList.add("loaded"),typeof C=="function"&&C()}})})}const V=[{src:"./god/01.png",title:"遊戲場景製作 — 黃易群俠傳m",desc:"高精度遊戲場景，PBR 材質到場景燈光渲染的完整製作流程。"},{src:"./god/02.png",title:"遊戲場景製作 — 天子傳奇S",desc:"依照以前專案高精度模型重建，PBR 材質到場景燈光渲染的完整製作流程。"},{src:"./god/03.png",title:"遊戲場景製作 — 飄流幻境RE",desc:"依照以前專案高精度模型重建。"},{src:"./god/04.png",title:"角色外觀設計 — AI 3D",desc:"角色造型的視覺設計，結合遊戲風格的材質與骨架結構規劃。"},{src:"./god/05.jpg",title:"AI 居家安全監控系統",desc:"運用 YOLOv8 + 遷移學習實現即時危險物品辨識，並整合 React 前端介面。"},{src:"./god/06.jpg",title:"自製3D — 個人渲染",desc:"個人自主學習 Blender 建模與渲染，帶入到遊戲引擎(unreal)，並加入動作效果。"}],y={huangyi:{label:"黃易群俠傳m",items:[]},tianzi:{label:"天子傳奇S",items:[]},wlwl:{label:"飄流幻境RE",items:[]},embedded:{label:"嵌入式AI影像",items:[]},"ai-3d":{label:"AI 3D",items:[]},"ai-2d":{label:"AI 2D",items:[]},"my-3d":{label:"自製3D",items:[]}};for(let e=1;e<=12;e++)y.huangyi.items.push({type:"image",src:`./assets/huangyi_${e}.png`,title:`黃易群俠傳m ${e}`});for(let e=1;e<=29;e++)y.tianzi.items.push({type:"image",src:`./assets/tianzi_${e}.png`,title:`天子傳傳奇S ${e}`});for(let e=1;e<=21;e++)y.wlwl.items.push({type:"image",src:`./assets/wlwl_${e}.png`,title:`飄流幻境RE ${e}`});y.embedded.items=[{type:"iframe",src:"./ssc.html",thumb:"./assets/embedded_1.jpg",title:"Smart Safety Care"},{type:"iframe",src:"./training-gallery.html",thumb:"./assets/training_report_new_cover.png",title:"訓練數據詳細報告：AI 模型成長分析"},{type:"video",src:"./assets/ssc_app.mp4",title:"APP 影片介紹"},{type:"video",src:"./assets/ssc_yolov8.mp4",title:"YOLOv8 實機辨識影片"},{type:"image",src:"./assets/ssc_demo.png",title:"成品展示效果",link:"https://lyh011403.github.io/Smart-Safety-Care_APK/"}];for(let e=1;e<=11;e++)e!==5&&y["ai-3d"].items.push({type:"image",src:`./assets/ai3d_${e}.png`,title:`AI 3D 作品 ${e}`});y["ai-2d"].items.push({type:"video",src:"./assets/embedded_1.mp4",title:"AI 2D使用(角色，特效，動作)"},{type:"video",src:"./assets/embedded_2.mp4",title:"AI 2D使用(角色，特效，動作)"});y["my-3d"].items.push({type:"video",src:"./assets/my3d_video.mp4",title:"自製3D — Unreal Engine 場景展示"},{type:"image",src:"./assets/my3d_5.png",title:"自製3D 截圖 1"},{type:"image",src:"./assets/my3d_6.png",title:"自製3D 截圖 2"},{type:"image",src:"./assets/my3d_7.png",title:"自製3D 截圖 3"},{type:"image",src:"./assets/my3d_11.png",title:"自製3D 渲染 3"},{type:"image",src:"./assets/my3d_12.png",title:"自製3D 渲染 4"},{type:"image",src:"./assets/my3d_13.png",title:"自製3D 渲染 5"},{type:"image",src:"./assets/my3d_14.png",title:"自製3D 渲染 6"},{type:"image",src:"./assets/my3d_1.jpg",title:"自製3D 渲染 1"},{type:"image",src:"./assets/my3d_2.jpg",title:"自製3D 渲染 2"},{type:"image",src:"./assets/my3d_4.jpg",title:"自製3D 渲染 4"},{type:"image",src:"./assets/my3d_8.jpg",title:"自製3D 建築渲染 1"},{type:"image",src:"./assets/my3d_9.jpg",title:"自製3D 建築渲染 2"},{type:"image",src:"./assets/my3d_10.jpg",title:"自製3D 建築渲染 3"});y.embedded.items[1].thumb="./assets/embedded_1.jpg";y.embedded.items[2].thumb="./assets/ssc_demo.png";function K(){const e=document.getElementById("featured-container");V.forEach((t,o)=>{const s=document.createElement("div");s.className="featured-item scroll-reveal",s.innerHTML=`
            <div class="featured-media">
                <img src="${t.src}" alt="${t.title}" loading="${o===0?"eager":"lazy"}">
            </div>
            <div class="featured-info">
                <div class="featured-index">0${o+1}</div>
                <h3>${t.title}</h3>
                <p>${t.desc}</p>
            </div>
        `,s.querySelector(".featured-media").addEventListener("click",()=>j({type:"image",src:t.src,title:t.title})),e.appendChild(s)})}let $="huangyi";function F(e){$=e;const t=document.getElementById("portfolio-grid");t.innerHTML="",y[e].items.forEach((o,s)=>{const i=document.createElement("div");i.className="portfolio-item scroll-reveal",i.style.setProperty("--delay",`${s*100}ms`);const n=o.type==="video"?`<video src="${o.src}" ${o.thumb?`poster="${o.thumb}"`:""} muted loop playsinline></video>`:o.type==="iframe"?`<img src="${o.thumb||o.src}" alt="${o.title}" loading="lazy">`:`<img src="${o.src}" alt="${o.title}" loading="lazy">`,r=o.type==="iframe"?'<span class="iframe-hint">&#x1F4CA; 點擊查看簡報</span>':"",l=o.link?`<a href="${o.link}" target="_blank" class="demo-link-btn" onclick="event.stopPropagation()">🔗 前往實機展示</a>`:"";if(i.innerHTML=`
            ${n}
            <div class="portfolio-item-overlay">
                <span>${o.title}</span>
                ${r}
                ${l} </div>
        `,o.type==="video"){const x=i.querySelector("video");i.addEventListener("mouseenter",()=>x.play()),i.addEventListener("mouseleave",()=>{x.pause(),x.currentTime=0})}i.addEventListener("click",()=>j(o)),t.appendChild(i)}),C()}document.querySelectorAll(".tab-btn").forEach(e=>{e.addEventListener("click",()=>{document.querySelectorAll(".tab-btn").forEach(o=>o.classList.remove("active")),e.classList.add("active");const t=document.getElementById("portfolio-grid");t.style.opacity="0",t.style.transform="translateY(12px)",setTimeout(()=>{F(e.dataset.cat),t.style.transition="opacity 0.35s, transform 0.35s",t.style.opacity="1",t.style.transform="translateY(0)"},200)})});const Y=document.getElementById("lightbox"),T=document.getElementById("lightbox-img"),L=document.getElementById("lightbox-video"),J=document.getElementById("lightbox-caption");function j(e){Y.classList.add("open"),J.textContent=e.title,T.style.display="none",L.style.display="none",L.src="";const t=document.getElementById("lightbox-iframe");t&&t.remove();const o=document.getElementById("lightbox-inner");if(o.classList.remove("iframe-mode"),e.type==="video")L.style.display="block",L.src=e.src,L.play();else if(e.type==="iframe"){const s=document.createElement("iframe");s.id="lightbox-iframe",s.src=e.src,s.allowFullscreen=!0,o.appendChild(s),o.classList.add("iframe-mode")}else T.style.display="block",T.src=e.src;document.body.style.overflow="hidden"}function q(){Y.classList.remove("open"),L.pause(),L.src="";const e=document.getElementById("lightbox-iframe");e&&e.remove(),document.getElementById("lightbox-inner").classList.remove("iframe-mode"),document.body.style.overflow=""}document.getElementById("lightbox-close").addEventListener("click",q);document.getElementById("lightbox-backdrop").addEventListener("click",q);document.addEventListener("keydown",e=>{e.key==="Escape"&&q()});const Q=document.getElementById("nav");window.addEventListener("scroll",()=>{Q.classList.toggle("scrolled",window.scrollY>50)},{passive:!0});document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",t=>{const o=document.querySelector(e.getAttribute("href"));o&&(t.preventDefault(),o.scrollIntoView({behavior:"smooth",block:"start"}));const s=document.getElementById("mobile-menu"),i=document.getElementById("nav-hamburger");s&&s.classList.contains("open")&&(s.classList.remove("open"),i.classList.remove("open"))})});const P=document.getElementById("nav-hamburger"),H=document.getElementById("mobile-menu");P&&H&&P.addEventListener("click",()=>{P.classList.toggle("open"),H.classList.toggle("open")});function C(){const e=new IntersectionObserver(t=>{t.forEach(o=>{var s;if(o.isIntersecting){const n=Array.from(((s=o.target.parentElement)==null?void 0:s.children)||[]).indexOf(o.target)*80;setTimeout(()=>o.target.classList.add("visible"),n),e.unobserve(o.target)}})},{threshold:.1});document.querySelectorAll(".scroll-reveal:not(.visible)").forEach(t=>e.observe(t))}function Z(){const e=document.getElementById("ink-canvas");if(!e)return;const t=e.getContext("2d"),o=window.matchMedia("(prefers-reduced-motion: reduce)").matches,s=window.innerWidth<640;if(o||s){e.style.display="none";return}let i=window.innerWidth,n=window.innerHeight;e.width=i,e.height=n;const r=h;class l{constructor(a,c,m=!1){this.x=a,this.y=c;const g=Math.random()*Math.PI*2,B=m?.8+Math.random()*2.5:.1+Math.random()*.5;this.vx=Math.cos(g)*B,this.vy=Math.sin(g)*B,this.life=1,this.decay=.005+Math.random()*.008,this.r=m?2+Math.random()*6:1+Math.random()*3;const z=18+Math.floor(Math.random()*35),u=3+Math.floor(Math.random()*12);this.color=`hsl(28,${u}%,${z}%)`}update(){this.life-=this.decay,this.vx*=.975,this.vy*=.975;const a=r.x-this.x,c=r.y-this.y,m=Math.sqrt(a*a+c*c);if(m<160&&m>1){const g=(160-m)/160;this.vx+=-c/m*g*.3,this.vy+=a/m*g*.3,this.vx+=a/m*g*.05,this.vy+=c/m*g*.05}this.x+=this.vx,this.y+=this.vy,this.life>.6&&(this.r+=.04)}draw(){t.save(),t.globalAlpha=this.life*.4,t.fillStyle=this.color,t.beginPath(),t.ellipse(this.x,this.y,this.r,this.r*(.6+Math.random()*.8),Math.atan2(this.vy,this.vx),0,Math.PI*2),t.fill(),t.restore()}}class x{constructor(a,c){this.pts=[{x:a,y:c}],this.life=1;const m=15+Math.floor(Math.random()*25);this.color=`hsl(28,8%,${m}%)`}add(a,c){this.pts.push({x:a,y:c})}update(){this.life-=.0025}draw(){if(!(this.pts.length<2)){t.save(),t.globalAlpha=this.life*.3,t.strokeStyle=this.color,t.lineWidth=1.2,t.lineCap=t.lineJoin="round",t.beginPath(),t.moveTo(this.pts[0].x,this.pts[0].y);for(let a=1;a<this.pts.length-1;a++){const c=(this.pts[a].x+this.pts[a+1].x)/2,m=(this.pts[a].y+this.pts[a+1].y)/2;t.quadraticCurveTo(this.pts[a].x,this.pts[a].y,c,m)}t.stroke(),t.restore()}}}const _=200;let p=[],f=[],v=null,I=0;function S(){p.length<_&&p.push(new l(Math.random()*i,Math.random()*n,!1))}function w(){const d=Math.sqrt(r.vx*r.vx+r.vy*r.vy);if(d>4&&p.length<_){const a=Math.min(6,Math.floor(d/3));for(let c=0;c<a;c++)p.push(new l(r.x+(Math.random()-.5)*16,r.y+(Math.random()-.5)*16,!0))}d>6?v?(v.add(r.x,r.y),v.pts.length>50&&(v=null)):(v=new x(r.x,r.y),f.push(v)):v=null}function M(){t.fillStyle="rgba(10,10,12,0.055)",t.fillRect(0,0,i,n),I++,I%6===0&&S(),I%2===0&&w(),f=f.filter(d=>d.life>0),f.forEach(d=>{d.update(),d.draw()}),p=p.filter(d=>d.life>0),p.forEach(d=>{d.update(),d.draw()}),requestAnimationFrame(M)}window.addEventListener("resize",()=>{i=window.innerWidth,n=window.innerHeight,e.width=i,e.height=n}),M()}G();K();F("huangyi");C();Z();ee();N();function ee(){if(!window.matchMedia("(hover: hover)").matches)return;const e=document.getElementById("cursor-dot"),t=document.getElementById("cursor-ring");if(!e||!t)return;let o=!1;document.addEventListener("mousemove",i=>{const n=h.x,r=h.y;e.style.left=n+"px",e.style.top=r+"px",t.style.left=n+"px",t.style.top=r+"px",o||(o=!0,e.classList.add("visible"))},{passive:!0}),document.addEventListener("mouseleave",()=>e.classList.remove("visible")),document.addEventListener("mouseenter",()=>{o&&e.classList.add("visible")});const s='a, button, [role="button"], .portfolio-item img, .portfolio-item video, .featured-media, .tab-btn';document.addEventListener("mouseover",i=>{i.target.closest(s)&&(e.classList.add("hover"),t.classList.add("hover"))}),document.addEventListener("mouseout",i=>{i.target.closest(s)&&(e.classList.remove("hover"),t.classList.remove("hover"))})}function te(){const e=document.getElementById("music-toggle"),t=document.getElementById("bgm");if(!e||!t)return;let o=!1;t.volume=.4,e.addEventListener("click",()=>{o?(t.pause(),o=!1,e.classList.remove("playing")):t.play().then(()=>{o=!0,e.classList.add("playing")}).catch(i=>console.warn("BGM:",i))}),setTimeout(async()=>{try{await t.play(),o=!0,e.classList.add("playing")}catch{console.log("瀏覽器擋掉背景音樂自動播放 (Auto-play policy)。需等使用者點選任何物件才會發出聲音。");const n=async()=>{if(!o)try{await t.play(),o=!0,e.classList.add("playing")}catch{}document.removeEventListener("click",n)};document.addEventListener("click",n)}},500)}te();function se(){const e=document.querySelector(".hero-title");if(!e)return;e.querySelectorAll(".line").forEach(o=>{const s=o.innerText;o.innerHTML="",[...s].forEach(i=>{const n=document.createElement("span");n.className="char",n.innerText=i===" "?" ":i,o.appendChild(n)})}),window.matchMedia("(hover: hover)").matches&&document.addEventListener("mousemove",o=>{const s=o.clientX,i=o.clientY;document.querySelectorAll(".hero-title .char, .btn-primary, .nav-logo").forEach(r=>{const l=r.getBoundingClientRect(),x=l.left+l.width/2,_=l.top+l.height/2,p=s-x,f=i-_;if(Math.sqrt(p*p+f*f)<80){const S=p*.3,w=f*.3;r.style.transform=`translate(${S}px, ${w}px)`,r.style.transition="transform 0.1s linear"}else r.style.transform="",r.style.transition="transform 0.5s var(--ease)"})})}se();function N(){const e=document.getElementById("ferro-nav-container"),t=document.getElementById("ferro-canvas"),o=document.getElementById("pie-menu");if(!e||!t||!o)return;const s=t.getContext("webgl");if(!s){e.innerHTML='<p style="color:#666; font-size:0.8rem;">WebGL not supported</p>';return}const i=`
        attribute vec2 position;
        void main() { gl_Position = vec4(position, 0.0, 1.0); }
    `,n=`
        precision highp float;
        uniform float u_time;
        uniform vec2 u_mouse;
        uniform vec2 u_res;
        uniform float u_active; // Is menu open?

        // --- Simplex 3D Noise ---
        vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
        vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
        vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
        vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

        float snoise(vec3 v) {
            const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
            const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);
            vec3 i  = floor(v + dot(v, C.yyy) );
            vec3 x0 = v - i + dot(i, C.xxx) ;
            vec3 g = step(x0.yzx, x0.xyz);
            vec3 l = 1.0 - g;
            vec3 i1 = min( g.xyz, l.zxy );
            vec3 i2 = max( g.xyz, l.zxy );
            vec3 x1 = x0 - i1 + C.xxx;
            vec3 x2 = x0 - i2 + C.yyy;
            vec3 x3 = x0 - D.yyy;
            i = mod289(i);
            vec4 p = permute( permute( permute(
                     i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
                   + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
                   + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));
            float n_ = 0.142857142857;
            vec3  ns = n_ * D.wyz - D.xzx;
            vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
            vec4 x_ = floor(j * ns.z);
            vec4 y_ = floor(j - 7.0 * x_ );
            vec4 x = x_ *ns.x + ns.yyyy;
            vec4 y = y_ *ns.x + ns.yyyy;
            vec4 h = 1.0 - abs(x) - abs(y);
            vec4 b0 = vec4( x.xy, y.xy );
            vec4 b1 = vec4( x.zw, y.zw );
            vec4 s0 = floor(b0)*2.0 + 1.0;
            vec4 s1 = floor(b1)*2.0 + 1.0;
            vec4 sh = -step(h, vec4(0.0));
            vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
            vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;
            vec3 p0 = vec3(a0.xy,h.x);
            vec3 p1 = vec3(a0.zw,h.y);
            vec3 p2 = vec3(a1.xy,h.z);
            vec3 p3 = vec3(a1.zw,h.w);
            vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
            p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
            vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
            m = m * m;
            return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3) ) );
        }

        // --- SDF Scene ---
        float sdf(vec3 p) {
            float time = u_time * 0.4;
            
            // Mouse distance influence
            vec2 m = (u_mouse - 0.5) * 2.0; 
            m.y *= -1.0;
            vec3 target = vec3(m * 1.5, 0.0);
            float distToMouse = length(p - target);
            
            // Ridged Noise for spikes
            float n = snoise(p * 2.5 + time);
            float spikes = pow(1.0 - abs(n), 3.5); // Ridged noise formula
            
            // Influence of mouse on spikes
            float mouseFact = smoothstep(2.5, 0.0, distToMouse);
            spikes *= (1.0 + mouseFact * 3.0);
            
            // Core sphere
            float sphere = length(p) - (1.1 + u_active * 0.3);
            return sphere - (spikes * 0.15);
        }

        vec3 getNormal(vec3 p) {
            vec2 e = vec2(0.001, 0.0);
            return normalize(vec3(
                sdf(p + e.xyy) - sdf(p - e.xyy),
                sdf(p + e.yxy) - sdf(p - e.yxy),
                sdf(p + e.yyx) - sdf(p - e.yyx)
            ));
        }

        void main() {
            vec2 uv = (gl_FragCoord.xy - 0.5 * u_res) / min(u_res.x, u_res.y);
            vec3 ro = vec3(0.0, 0.0, -4.5); // Camera
            vec3 rd = normalize(vec3(uv, 1.5)); // Direction

            float d = 0.0;
            float t = 0.0;
            vec3 p;
            
            // Raymarch (減低步數提升效能：80 -> 48)
            for(int i=0; i<48; i++) {
                p = ro + rd * t;
                d = sdf(p);
                if(d < 0.001 || t > 10.0) break;
                t += d;
            }

            vec3 color = vec3(0.01); // Background almost black

            if(t < 10.0) {
                vec3 n = getNormal(p);
                vec3 viewDir = normalize(ro - p);
                
                // Ferrofluid Look: Black/Metallic
                float fresnel = pow(1.0 - max(0.0, dot(n, viewDir)), 5.0);
                float spec = pow(max(0.0, dot(reflect(-viewDir, n), vec3(0.0, 1.0, 1.0))), 20.0);
                
                // Dark material with high specular
                color = vec3(0.02); // Base
                color += spec * 0.5 * vec3(0.8, 0.9, 1.0); // Specular highlight
                color += fresnel * vec3(0.5, 0.4, 0.3); // Edge glow (goldish)
                
                // Subtle ambient occlusion
                color *= (1.0 - float(t)/10.0);
            }

            gl_FragColor = vec4(color, 1.0);
        }
    `;function r(u,R){const b=s.createShader(u);return s.shaderSource(b,R),s.compileShader(b),s.getShaderParameter(b,s.COMPILE_STATUS)?b:(console.error(s.getShaderInfoLog(b)),null)}const l=s.createProgram();s.attachShader(l,r(s.VERTEX_SHADER,i)),s.attachShader(l,r(s.FRAGMENT_SHADER,n)),s.linkProgram(l),s.useProgram(l);const x=new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),_=s.createBuffer();s.bindBuffer(s.ARRAY_BUFFER,_),s.bufferData(s.ARRAY_BUFFER,x,s.STATIC_DRAW);const p=s.getAttribLocation(l,"position");s.enableVertexAttribArray(p),s.vertexAttribPointer(p,2,s.FLOAT,!1,0,0);const f=s.getUniformLocation(l,"u_time"),v=s.getUniformLocation(l,"u_mouse"),I=s.getUniformLocation(l,"u_res"),S=s.getUniformLocation(l,"u_active");let w=.5,M=.5,d=.5,a=.5,c=!1;function m(){o.innerHTML="";const u=Object.keys(y),R=u.length,b=window.innerWidth<768?100:130;u.forEach((k,W)=>{const O=W/R*Math.PI*2,X=Math.cos(O)*b,U=Math.sin(O)*b,E=document.createElement("div");E.className="pie-item",k===$&&E.classList.add("active"),E.style.transform=`translate(${X}px, ${U}px)`,E.innerHTML=`<span>${y[k].label}</span>`,E.addEventListener("mouseenter",()=>{const A=E.getBoundingClientRect(),D=e.getBoundingClientRect();d=(A.left+A.width/2-D.left)/D.width,a=(A.top+A.height/2-D.top)/D.height}),E.onclick=A=>{A.stopPropagation(),k!==$&&($=k,F(k),m(),g(!1))},o.appendChild(E)})}function g(u){c=u!==void 0?u:!c,c?(o.classList.add("active"),gsap.fromTo(".pie-item",{scale:0,opacity:0},{scale:1,opacity:1,duration:.5,stagger:.05,ease:"back.out(1.7)"}),document.getElementById("ferro-hint").innerText="再次點擊關閉"):(gsap.to(".pie-item",{scale:0,opacity:0,duration:.3,stagger:.02,ease:"power2.in"}).eventCallback("onComplete",()=>o.classList.remove("active")),document.getElementById("ferro-hint").innerText="點擊核心切換類別")}function B(){const u=Math.min(window.devicePixelRatio||1,1.5);t.width=e.clientWidth*u,t.height=e.clientHeight*u,s.viewport(0,0,t.width,t.height),m()}window.addEventListener("resize",B),B(),t.addEventListener("mousemove",u=>{d=h.x/window.innerWidth,a=h.y/window.innerHeight}),t.addEventListener("click",()=>g());function z(u){w+=(d-w)*.1,M+=(a-M)*.1,s.uniform1f(f,u*.001),s.uniform2f(v,w,M),s.uniform2f(I,t.width,t.height),s.uniform1f(S,c?1:0),s.drawArrays(s.TRIANGLES,0,6),requestAnimationFrame(z)}requestAnimationFrame(z)}N();
