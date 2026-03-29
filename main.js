const globalMouse = { x: window.innerWidth / 2, y: window.innerHeight / 2, vx: 0, vy: 0 };
window.addEventListener('mousemove', e => {
    globalMouse.vx = e.clientX - globalMouse.x;
    globalMouse.vy = e.clientY - globalMouse.y;
    globalMouse.x = e.clientX;
    globalMouse.y = e.clientY;
}, { passive: true });

// ============================================================
// 0. DATA DEFINITIONS
// ============================================================
const FEATURED = [
    { src: './god/01.png', title: '遊戲場景製作 — 黃易群俠傳m', desc: '高精度遊戲場景，PBR 材質到場景燈光渲染的完整製作流程。' },
    { src: './god/02.png', title: '遊戲場景製作 — 天子傳奇S', desc: '依照專案高精度模型重建，PBR 材質到場景燈光渲染的完整流程。' },
    { src: './god/03.png', title: '遊戲場景製作 — 飄流幻境RE', desc: '依照以前專案高精度模型重建。' },
    { src: './god/04.png', title: '角色外觀設計 — AI 3D', desc: '角色造型的視覺設計，結合遊戲風格的材質與結構規劃。' },
    { src: './god/05.jpg', title: 'AI 居家安全監控系統', desc: '運用 YOLOv8 實現即時危險物品辨識，並整合 React 前端。' },
    { src: './god/06.jpg', title: '自製3D — 個人渲染', desc: '自主學習 Blender 建模與渲染，帶入到 Unreal Engine。' }
];

const CATEGORIES = {
    huangyi: { label: '黃易群俠傳m', items: [] },
    tianzi: { label: '天子傳奇S', items: [] },
    wlwl: { label: '飄流幻境RE', items: [] },
    embedded: { label: '嵌入式AI影像', items: [] },
    'ai-3d': { label: 'AI 3D', items: [] },
    'ai-2d': { label: 'AI 2D', items: [] },
    'my-3d': { label: '自製3D', items: [] },
};

// Populate Data
for (let i = 1; i <= 12; i++) CATEGORIES.huangyi.items.push({ type: 'image', src: `./assets/huangyi_${i}.png`, title: `黃易群俠傳m ${i}` });
for (let i = 1; i <= 29; i++) CATEGORIES.tianzi.items.push({ type: 'image', src: `./assets/tianzi_${i}.png`, title: `天子傳奇S ${i}` });
for (let i = 1; i <= 21; i++) CATEGORIES.wlwl.items.push({ type: 'image', src: `./assets/wlwl_${i}.png`, title: `飄流幻境RE ${i}` });

CATEGORIES.embedded.items = [
    { type: 'iframe', src: './ssc.html', thumb: './assets/embedded_1.jpg', title: 'Smart Safety Care' },
    { type: 'iframe', src: './training-gallery.html', thumb: './assets/training_report_new_cover.png', title: '訓練數據詳細報告：AI 模型分析' },
    { type: 'video', src: './assets/ssc_app.mp4', title: 'APP 影片介紹', thumb: './assets/embedded_1.jpg' },
    { type: 'video', src: './assets/ssc_yolov8.mp4', title: 'YOLOv8 實機辨識影片', thumb: './assets/ssc_demo.png' },
    { type: 'image', src: './assets/ssc_demo.png', title: '成品展示效果', link: 'https://lyh011403.github.io/Smart-Safety-Care_APK/' }
];

for (let i = 1; i <= 11; i++) { if (i !== 5) CATEGORIES['ai-3d'].items.push({ type: 'image', src: `./assets/ai3d_${i}.png`, title: `AI 3D 作品 ${i}` }); }
CATEGORIES['ai-2d'].items.push({ type: 'video', src: './assets/embedded_1.mp4', title: 'AI 2D使用(角色，特效，動作)' }, { type: 'video', src: './assets/embedded_2.mp4', title: 'AI 2D使用(角色，特效，動作)' });
CATEGORIES['my-3d'].items.push({ type: 'video', src: './assets/my3d_video.mp4', title: '自製3D — Unreal Engine 展示' });
[5, 6, 7, 11, 12, 13, 14, 1, 2, 4, 8, 9, 10].forEach(i => {
    let ext = (i <= 7 || i >= 11) ? 'png' : 'jpg';
    CATEGORIES['my-3d'].items.push({ type: 'image', src: `./assets/my3d_${i}.${ext}`, title: `自製3D 渲染 ${i}` });
});

// ============================================================
// 1. RENDER LOGIC
// ============================================================
function buildFeatured() {
    const container = document.getElementById('featured-container');
    if (!container) return;
    container.innerHTML = '';
    FEATURED.forEach((p, i) => {
        const el = document.createElement('div');
        el.className = 'featured-item scroll-reveal';
        el.innerHTML = `
            <div class="featured-media"><img src="${p.src}" alt="${p.title}" loading="lazy"></div>
            <div class="featured-info">
                <div class="featured-index">0${i + 1}</div>
                <h3>${p.title}</h3>
                <p>${p.desc}</p>
            </div>
        `;
        el.querySelector('.featured-media').addEventListener('click', () => openLightbox({ type: 'image', src: p.src, title: p.title }));
        container.appendChild(el);
    });
}

function buildPortfolio(cat) {
    const grid = document.getElementById('portfolio-grid');
    if (!grid) return;
    grid.innerHTML = '';
    CATEGORIES[cat].items.forEach((item, i) => {
        const el = document.createElement('div');
        el.className = 'portfolio-item scroll-reveal';
        el.style.setProperty('--delay', `${i * 50}ms`);
        const media = item.type === 'video' ? `<video src="${item.src}" ${item.thumb ? `poster="${item.thumb}"` : ''} muted loop playsinline></video>` : `<img src="${item.thumb || item.src}" alt="${item.title}" loading="lazy">`;
        const iframeHint = item.type === 'iframe' ? `<span class="iframe-hint">📊 查看詳細報告</span>` : '';
        const linkBtn = item.link ? `<a href="${item.link}" target="_blank" class="demo-link-btn" onclick="event.stopPropagation()">🔗 DEMO</a>` : '';
        el.innerHTML = `${media}<div class="portfolio-item-overlay"><span>${item.title}</span>${iframeHint}${linkBtn}</div>`;
        if (item.type === 'video') {
            const v = el.querySelector('video');
            el.addEventListener('mouseenter', () => v.play());
            el.addEventListener('mouseleave', () => { v.pause(); v.currentTime = 0; });
        }
        el.addEventListener('click', () => openLightbox(item));
        grid.appendChild(el);
    });
    observeReveal();
}

window.changeCategory = function (cat) {
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(btn => {
        btn.classList.remove('active');
        if (btn.innerText.includes(CATEGORIES[cat].label)) btn.classList.add('active');
    });
    buildPortfolio(cat);
};

// ============================================================
// 2. CORE COMPONENTS
// ============================================================
function initSplash() {
    const splash = document.getElementById('splash-screen');
    const enterBtn = document.getElementById('enter-btn');
    if (!splash || !enterBtn) return;
    enterBtn.onclick = () => {
        gsap.to(splash, { opacity: 0, scale: 1.1, duration: 1, ease: "power2.inOut", onComplete: () => { splash.style.display = 'none'; document.body.classList.add('loaded'); observeReveal(); } });
    };
}

function observeReveal() {
    const io = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                io.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.scroll-reveal:not(.visible)').forEach(el => io.observe(el));
}

function initTextEffects() {
    const heroTitle = document.querySelector('.hero-title');
    if (!heroTitle) return;
    // Initial reveal is handled by CSS animations for the overhaul style
    // Magnetic logic if necessary
    if (window.matchMedia('(hover: hover)').matches) {
        document.addEventListener('mousemove', e => {
            const elements = document.querySelectorAll('.hero-title span, .btn-primary, .nav-logo');
            elements.forEach(el => {
                const rect = el.getBoundingClientRect();
                const dx = e.clientX - (rect.left + rect.width / 2);
                const dy = e.clientY - (rect.top + rect.height / 2);
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 100) {
                    el.style.transform = `translate(${dx * 0.2}px, ${dy * 0.2}px)`;
                } else {
                    el.style.transform = '';
                }
            });
        });
    }
}

function initCursor() {
    if (!window.matchMedia('(hover: hover)').matches) return;
    const dot = document.getElementById('cursor-dot');
    const ring = document.getElementById('cursor-ring');
    document.addEventListener('mousemove', e => {
        gsap.to(dot, { x: e.clientX, y: e.clientY, duration: 0, overwrite: true });
        gsap.to(ring, { x: e.clientX, y: e.clientY, duration: 0.15, overwrite: true });
    });
}

function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lbImg = document.getElementById('lightbox-img');
    const lbVideo = document.getElementById('lightbox-video');
    const lbInner = document.getElementById('lightbox-inner');
    const closeBtn = document.getElementById('lightbox-close');
    const backdrop = document.getElementById('lightbox-backdrop');

    window.openLightbox = (item) => {
        lightbox.classList.add('open');
        lbImg.style.display = lbVideo.style.display = 'none';
        const oldIf = document.getElementById('lightbox-iframe'); if (oldIf) oldIf.remove();
        if (item.type === 'video') { lbVideo.style.display = 'block'; lbVideo.src = item.src; lbVideo.play(); }
        else if (item.type === 'iframe') {
            const f = document.createElement('iframe'); f.id = 'lightbox-iframe'; f.src = item.src; f.allowFullscreen = true;
            lbInner.appendChild(f); lbInner.classList.add('iframe-mode');
        } else { lbImg.style.display = 'block'; lbImg.src = item.src; }
        document.body.style.overflow = 'hidden';
    };

    const close = () => { lightbox.classList.remove('open'); lbVideo.pause(); document.body.style.overflow = ''; lbInner.classList.remove('iframe-mode'); };
    closeBtn.onclick = backdrop.onclick = close;
}

function initInk() {
    const canvas = document.getElementById('ink-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let W = window.innerWidth, H = window.innerHeight;
    canvas.width = W; canvas.height = H;
    // Simple particle effect
    let particles = [];
    class P {
        constructor() { this.reset(); }
        reset() { this.x = Math.random() * W; this.y = Math.random() * H; this.vx = (Math.random() - 0.5) * 0.5; this.vy = (Math.random() - 0.5) * 0.5; this.life = 0.5 + Math.random() * 0.5; }
        update() { this.x += this.vx; this.y += this.vy; this.life -= 0.002; if (this.life <= 0) this.reset(); }
        draw() { ctx.fillStyle = `rgba(200,169,126,${this.life * 0.1})`; ctx.beginPath(); ctx.arc(this.x, this.y, 1, 0, Math.PI * 2); ctx.fill(); }
    }
    for (let i = 0; i < 100; i++) particles.push(new P());
    function loop() { ctx.clearRect(0, 0, W, H); particles.forEach(p => { p.update(); p.draw(); }); requestAnimationFrame(loop); }
    loop();
}

function initBGM() {
    const bgm = document.getElementById('bgm');
    if (bgm) { bgm.volume = 0.3; document.addEventListener('click', () => bgm.play(), { once: true }); }
}

// ============================================================
// 3. START EXPERIENCE
// ============================================================
function init() {
    initSplash();
    buildFeatured();
    buildPortfolio('huangyi');
    initLightbox();
    initInk();
    initCursor();
    initBGM();
    initTextEffects();
}

document.addEventListener('DOMContentLoaded', init);
