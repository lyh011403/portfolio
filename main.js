const globalMouse = { x: window.innerWidth / 2, y: window.innerHeight / 2, vx: 0, vy: 0 };
window.addEventListener('mousemove', e => {
    globalMouse.vx = e.clientX - globalMouse.x;
    globalMouse.vy = e.clientY - globalMouse.y;
    globalMouse.x = e.clientX;
    globalMouse.y = e.clientY;
}, { passive: true });

// ============================================================
// 0. SPLASH SCREEN LOGIC
// ============================================================
function initSplash() {
    const splash = document.getElementById('splash-screen');
    if (!splash) return;
    const tl = gsap.timeline();
    tl.from(".splash-credits", { opacity: 0, y: 10, duration: 0.8, delay: 0.5 })
        .from(".splash-title", { opacity: 0, scale: 0.9, filter: "blur(10px)", duration: 1.5, ease: "expo.out" }, "-=0.4")
        .from(".splash-desc", { opacity: 0, y: 20, duration: 1 }, "-=1")
        .from(".splash-action", { opacity: 0, scale: 0.8, duration: 0.8, ease: "back.out(1.7)" }, "-=0.5");
}

function startExperience() {
    const splash = document.getElementById('splash-screen');
    gsap.to(splash, {
        opacity: 0,
        scale: 1.1,
        filter: "blur(20px)",
        duration: 1.2,
        ease: "power2.inOut",
        onComplete: () => {
            splash.style.display = 'none';
            document.body.classList.add('loaded');
            initPortfolioData();
            buildFeatured();
            buildPortfolio('huangyi');
            observeReveal();
        }
    });
}

// ============================================================
// 1. DATA (Game Art & AI Projects)
// ============================================================
const FEATURED = [
    { src: './god/01.png', title: '遊戲場景製作 — 黃易群俠傳m', desc: '高精度遊戲場景，PBR 材質到場景燈光渲染。' },
    { src: './god/02.png', title: '遊戲場景製作 — 天子傳奇S', desc: '依照以前專案高精度模型重建。' },
    { src: './god/03.png', title: '遊戲場景製作 — 飄流幻境RE', desc: '經典場景重製。' },
    { src: './god/05.jpg', title: 'AI 居家安全監控系統', desc: 'YOLOv11 + 遷移學習實現即時危險物品辨識。' }
];

const CATEGORIES = {
    huangyi: { label: '黃易群俠傳m', items: [] },
    tianzi: { label: '天子傳奇S', items: [] },
    wlwl: { label: '飄流幻境RE', items: [] },
    embedded: { label: '嵌入式AI影像', items: [] }
};

function initPortfolioData() {
    for (let i = 1; i <= 12; i++) CATEGORIES.huangyi.items.push({ type: 'image', src: `./assets/huangyi_${i}.png`, title: `黃易 ${i}` });
    for (let i = 1; i <= 29; i++) CATEGORIES.tianzi.items.push({ type: 'image', src: `./assets/tianzi_${i}.png`, title: `天子 ${i}` });
}

// ============================================================
// 2. BUILDERS
// ============================================================
function buildFeatured() {
    const container = document.getElementById('featured-grid');
    if (!container) return;
    FEATURED.forEach(item => {
        const div = document.createElement('div');
        div.className = 'featured-card reveal';
        div.innerHTML = `<img src="${item.src}" alt="${item.title}"><div class="card-info"><h3>${item.title}</h3><p>${item.desc}</p></div>`;
        container.appendChild(div);
    });
}

function buildPortfolio(catKey) {
    const container = document.getElementById('portfolio-grid');
    if (!container) return;
    container.innerHTML = '';
    CATEGORIES[catKey].items.forEach(item => {
        const div = document.createElement('div');
        div.className = 'grid-item reveal';
        div.innerHTML = `<img src="${item.src}" alt="${item.title}">`;
        container.appendChild(div);
    });
}

function observeReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ============================================================
// 3. ADVANCED FERROFLUID ENGINE (BACKGROUND)
// ============================================================
class FerroEngine {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;
        this.gl = this.canvas.getContext('webgl');
        this.mouse = { x: 0.5, y: 0.5, targetX: 0.5, targetY: 0.5 };
        this.state = { active: 0.0, targetActive: 0.0 };
        this.init();
    }

    init() {
        const vs = `attribute vec2 p;void main(){gl_Position=vec4(p,0,1);}`;
        const fs = `
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
        `;
        const prog = this.gl.createProgram();
        const shV = this.gl.createShader(this.gl.VERTEX_SHADER);
        this.gl.shaderSource(shV, vs); this.gl.compileShader(shV);
        const shF = this.gl.createShader(this.gl.FRAGMENT_SHADER);
        this.gl.shaderSource(shF, fs); this.gl.compileShader(shF);
        this.gl.attachShader(prog, shV); this.gl.attachShader(prog, shF);
        this.gl.linkProgram(prog); this.gl.useProgram(prog);
        this.locs = {
            p: this.gl.getAttribLocation(prog, 'p'),
            u_time: this.gl.getUniformLocation(prog, 'u_time'),
            u_res: this.gl.getUniformLocation(prog, 'u_res'),
            u_mouse: this.gl.getUniformLocation(prog, 'u_mouse'),
            u_active: this.gl.getUniformLocation(prog, 'u_active')
        };
        const buf = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, buf);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), this.gl.STATIC_DRAW);
        this.gl.enableVertexAttribArray(this.locs.p);
        this.gl.vertexAttribPointer(this.locs.p, 2, this.gl.FLOAT, false, 0, 0);
        window.addEventListener('mousemove', e => {
            const r = this.canvas.getBoundingClientRect();
            this.mouse.targetX = (e.clientX - r.left) / r.width;
            this.mouse.targetY = (e.clientY - r.top) / r.height;
        });
        requestAnimationFrame((t) => this.render(t));
    }
    setActive(v) { this.state.targetActive = v; }
    render(time) {
        if (this.canvas.width !== innerWidth) {
            this.canvas.width = innerWidth; this.canvas.height = innerHeight;
            this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
        }
        this.mouse.x += (this.mouse.targetX - this.mouse.x) * 0.1;
        this.mouse.y += (this.mouse.targetY - this.mouse.y) * 0.1;
        this.state.active += (this.state.targetActive - this.state.active) * 0.05;
        this.gl.uniform1f(this.locs.u_time, time * 0.001);
        this.gl.uniform2f(this.locs.u_res, this.canvas.width, this.canvas.height);
        this.gl.uniform2f(this.locs.u_mouse, this.mouse.x, 1.0 - this.mouse.y);
        this.gl.uniform1f(this.locs.u_active, this.state.active);
        this.gl.drawArrays(this.gl.TRIANGLES, 0, 3);
        requestAnimationFrame((t) => this.render(t));
    }
}

// ============================================================
// 4. PIE MENU CONTROLLER
// ============================================================
const ferro = new FerroEngine('ferro-canvas-bg');
let isMenuOpen = false;

const MENU_ITEMS = [
    { label: '精選作品', icon: '🎨', link: '#featured' },
    { label: '訓練歷程', icon: '🧠', link: './public/training-gallery.html' },
    { label: '關於我', icon: '👤', link: '#about' },
    { label: '聯絡方式', icon: '✉️', link: '#contact' }
];

function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    const overlay = document.getElementById('pie-menu-overlay');
    const container = overlay.querySelector('.pie-center');

    if (isMenuOpen) {
        document.body.classList.add('menu-open');
        overlay.classList.add('active');
        ferro.setActive(1.0);
        container.innerHTML = '';
        const radius = 220;
        MENU_ITEMS.forEach((item, i) => {
            const angle = (i / MENU_ITEMS.length) * Math.PI * 2 - Math.PI / 2;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            const node = document.createElement('div');
            node.className = 'pie-item-node';
            node.innerHTML = `<i>${item.icon}</i><span>${item.label}</span>`;
            node.style.left = `${x - 60}px`; node.style.top = `${y - 60}px`;
            node.onclick = () => {
                if (item.link.startsWith('#')) {
                    toggleMenu();
                    setTimeout(() => document.querySelector(item.link)?.scrollIntoView({ behavior: 'smooth' }), 600);
                } else window.location.href = item.link;
            };
            container.appendChild(node);
            gsap.fromTo(node, { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, duration: 0.6, delay: i * 0.1, ease: "back.out(1.7)" });
        });
    } else {
        document.body.classList.remove('menu-open');
        ferro.setActive(0.0);
        gsap.to('.pie-item-node', { opacity: 0, scale: 0.5, duration: 0.4, stagger: 0.05, onComplete: () => overlay.classList.remove('active') });
    }
}

// Global Interactions
window.toggleMenu = toggleMenu;
window.startExperience = startExperience;
document.addEventListener('contextmenu', e => { e.preventDefault(); toggleMenu(); });
window.addEventListener('load', () => { initSplash(); initCursor(); });

// Cursor Logic
function initCursor() {
    const dot = document.getElementById('cursor-dot');
    const ring = document.getElementById('cursor-ring');
    if (!dot || !ring) return;
    window.addEventListener('mousemove', e => {
        gsap.to(dot, { x: e.clientX, y: e.clientY, duration: 0.1 });
        gsap.to(ring, { x: e.clientX, y: e.clientY, duration: 0.3 });
    });
    document.querySelectorAll('a, button, .pie-item-node, .nav-logo').forEach(el => {
        el.addEventListener('mouseenter', () => ring.classList.add('active'));
        el.addEventListener('mouseleave', () => ring.classList.remove('active'));
    });
}
