const globalMouse = { x: window.innerWidth / 2, y: window.innerHeight / 2, vx: 0, vy: 0 };
window.addEventListener('mousemove', e => {
    globalMouse.vx = e.clientX - globalMouse.x;
    globalMouse.vy = e.clientY - globalMouse.y;
    globalMouse.x = e.clientX;
    globalMouse.y = e.clientY;
}, { passive: true });

// ============================================================
// 0. SPLASH SCREEN LOGIC (NEW)
// ============================================================
function initSplash() {
    const splash = document.getElementById('splash-screen');
    const enterBtn = document.getElementById('enter-btn');
    if (!splash || !enterBtn) return;

    // Entry GSAP
    const tl = gsap.timeline();
    tl.from(".splash-credits", { opacity: 0, y: 10, duration: 0.8, delay: 0.5 })
        .from(".splash-title", { opacity: 0, scale: 0.9, filter: "blur(10px)", duration: 1.5, ease: "expo.out" }, "-=0.4")
        .from(".splash-desc", { opacity: 0, y: 20, duration: 1 }, "-=1")
        .from(".splash-action", { opacity: 0, scale: 0.8, duration: 0.8, ease: "back.out(1.7)" }, "-=0.5");

    enterBtn.addEventListener('click', () => {
        gsap.to(splash, {
            scale: 1.3,
            opacity: 0,
            duration: 1.2,
            ease: "expo.inOut",
            onComplete: () => {
                splash.style.display = 'none';
                document.body.classList.add('loaded');
                // Trigger reveal animations for main site elements if needed
                if (typeof observeReveal === 'function') observeReveal();
            }
        });
    });
}

// ============================================================
// 1. FEATURED (from /god/ folder - all 5 files)
// ============================================================
/* [可修改] 精選作品清單：你可以在這裡更換圖片路徑 (src)、標題 (title) 與描述 (desc) */
const FEATURED = [
    {
        src: './god/01.png',
        title: '遊戲場景製作 — 黃易群俠傳m',
        desc: '高精度遊戲場景，PBR 材質到場景燈光渲染的完整製作流程。',
    },
    {
        src: './god/02.png',
        title: '遊戲場景製作 — 天子傳奇S',
        desc: '依照以前專案高精度模型重建，PBR 材質到場景燈光渲染的完整製作流程。',
    },
    {
        src: './god/03.png',
        title: '遊戲場景製作 — 飄流幻境RE',
        desc: '依照以前專案高精度模型重建。',
    },
    {
        src: './god/04.png',
        title: '角色外觀設計 — AI 3D',
        desc: '角色造型的視覺設計，結合遊戲風格的材質與骨架結構規劃。',
    },
    {
        src: './god/05.jpg',
        title: 'AI 居家安全監控系統',
        desc: '運用 YOLOv8 + 遷移學習實現即時危險物品辨識，並整合 React 前端介面。',
    },
    {
        src: './god/06.jpg',
        title: '自製3D — 個人渲染',
        desc: '個人自主學習 Blender 建模與渲染，帶入到遊戲引擎(unreal)，並加入動作效果。',
    },
];

// ============================================================
// 2. PORTFOLIO CATEGORIES (correct file paths from public/assets)
// ============================================================
/* [可修改] 作品集分類標籤文字 */
const CATEGORIES = {
    huangyi: { label: '黃易群俠傳m', items: [] },
    tianzi: { label: '天子傳奇S', items: [] },
    wlwl: { label: '飄流幻境RE', items: [] },
    embedded: { label: '嵌入式AI影像', items: [] },
    'ai-3d': { label: 'AI 3D', items: [] },
    'ai-2d': { label: 'AI 2D', items: [] },
    'my-3d': { label: '自製3D', items: [] },
};

// 作品集資料載入邏輯 — 統一使用 category_index.ext 格式
// 1. 黃易 — huangyi_1 ~ 12.png
for (let i = 1; i <= 12; i++)
    CATEGORIES.huangyi.items.push({ type: 'image', src: `./assets/huangyi_${i}.png`, title: `黃易群俠傳m ${i}` });

// 2. 天子 — tianzi_1 ~ 29.png
for (let i = 1; i <= 29; i++)
    CATEGORIES.tianzi.items.push({ type: 'image', src: `./assets/tianzi_${i}.png`, title: `天子傳傳奇S ${i}` });

// 3. 飄流 — wlwl_1 ~ 21.png
for (let i = 1; i <= 21; i++)
    CATEGORIES.wlwl.items.push({ type: 'image', src: `./assets/wlwl_${i}.png`, title: `飄流幻境RE ${i}` });

// 4. 嵌入式 AI 影像 — SSC簡報 / APP影片 / 成品展示
CATEGORIES.embedded.items = [
    {
        type: 'iframe',
        src: './ssc.html',
        thumb: './assets/embedded_1.jpg',
        title: 'Smart Safety Care'
    },
    {
        type: 'iframe',
        src: './training-gallery.html',
        thumb: './assets/training_report_new_cover.png',
        title: '訓練數據詳細報告：AI 模型成長分析'
    },
    {
        type: 'video',
        src: './assets/ssc_app.mp4',
        title: 'APP 影片介紹'
    },
    {
        type: 'video',
        src: './assets/ssc_yolov8.mp4',
        title: 'YOLOv8 實機辨識影片'
    },
    {
        type: 'image',
        src: './assets/ssc_demo.png',
        title: '成品展示效果',
        link: 'https://lyh011403.github.io/Smart-Safety-Care_APK/'
    }
];

// 5. AI 3D — ai3d_1~4, 6~11.png（第5張已移除）
for (let i = 1; i <= 11; i++) {
    if (i === 5) continue;
    CATEGORIES['ai-3d'].items.push({ type: 'image', src: `./assets/ai3d_${i}.png`, title: `AI 3D 作品 ${i}` });
}

// 6. AI 2D
CATEGORIES['ai-2d'].items.push(
    { type: 'video', src: './assets/embedded_1.mp4', title: 'AI 2D使用(角色，特效，動作)' },
    { type: 'video', src: './assets/embedded_2.mp4', title: 'AI 2D使用(角色，特效，動作)' }
);

// 7. 自製3D — my3d_1~7 + 影片
CATEGORIES['my-3d'].items.push(
    { type: 'video', src: './assets/my3d_video.mp4', title: '自製3D — Unreal Engine 場景展示' },
    { type: 'image', src: './assets/my3d_5.png', title: '自製3D 截圖 1' },
    { type: 'image', src: './assets/my3d_6.png', title: '自製3D 截圖 2' },
    { type: 'image', src: './assets/my3d_7.png', title: '自製3D 截圖 3' },
    { type: 'image', src: './assets/my3d_11.png', title: '自製3D 渲染 3' },
    { type: 'image', src: './assets/my3d_12.png', title: '自製3D 渲染 4' },
    { type: 'image', src: './assets/my3d_13.png', title: '自製3D 渲染 5' },
    { type: 'image', src: './assets/my3d_14.png', title: '自製3D 渲染 6' },
    { type: 'image', src: './assets/my3d_1.jpg', title: '自製3D 渲染 1' },
    { type: 'image', src: './assets/my3d_2.jpg', title: '自製3D 渲染 2' },
    { type: 'image', src: './assets/my3d_4.jpg', title: '自製3D 渲染 4' },
    { type: 'image', src: './assets/my3d_8.jpg', title: '自製3D 建築渲染 1' },
    { type: 'image', src: './assets/my3d_9.jpg', title: '自製3D 建築渲染 2' },
    { type: 'image', src: './assets/my3d_10.jpg', title: '自製3D 建築渲染 3' }
);

// [修正] 為影片項目增加封面邏輯
CATEGORIES.embedded.items[1].thumb = './assets/embedded_1.jpg'; // 為 APP 影片介紹設定封面
CATEGORIES.embedded.items[2].thumb = './assets/ssc_demo.png'; // 為辨識影片設定封面

// ============================================================
// 3. RENDER FEATURED
// ============================================================
function buildFeatured() {
    const container = document.getElementById('featured-container');
    FEATURED.forEach((p, i) => {
        const el = document.createElement('div');
        el.className = 'featured-item scroll-reveal';
        el.innerHTML = `
            <div class="featured-media">
                <img src="${p.src}" alt="${p.title}" loading="${i === 0 ? 'eager' : 'lazy'}">
            </div>
            <div class="featured-info">
                <div class="featured-index">0${i + 1}</div>
                <h3>${p.title}</h3>
                <p>${p.desc}</p>
            </div>
        `;
        el.querySelector('.featured-media').addEventListener('click', () =>
            openLightbox({ type: 'image', src: p.src, title: p.title })
        );
        container.appendChild(el);
    });
}

// ============================================================
// 4. RENDER PORTFOLIO GRID
// ============================================================
let currentCat = 'huangyi';

function buildPortfolio(cat) {
    currentCat = cat;
    const grid = document.getElementById('portfolio-grid');
    grid.innerHTML = '';

    CATEGORIES[cat].items.forEach((item, i) => {
        const el = document.createElement('div');
        el.className = 'portfolio-item scroll-reveal';
        // 增加 staggered 動畫延遲
        el.style.setProperty('--delay', `${i * 100}ms`);

        // 封面圖：video 加入 poster 支援
        const media = item.type === 'video'
            ? `<video src="${item.src}" ${item.thumb ? `poster="${item.thumb}"` : ''} muted loop playsinline></video>`
            : item.type === 'iframe'
                ? `<img src="${item.thumb || item.src}" alt="${item.title}" loading="lazy">`
                : `<img src="${item.src}" alt="${item.title}" loading="lazy">`;

        // iframe 類型在卡片右下角加上 ▶ 簡報圖示
        const iframeHint = item.type === 'iframe'
            ? `<span class="iframe-hint">&#x1F4CA; 點擊查看簡報</span>`
            : '';

        // 判斷是否有外部連結，如果有，就產生一個 a 標籤按鈕
        const linkButton = item.link
            ? `<a href="${item.link}" target="_blank" class="demo-link-btn" onclick="event.stopPropagation()">🔗 前往實機展示</a>`
            : '';

        el.innerHTML = `
            ${media}
            <div class="portfolio-item-overlay">
                <span>${item.title}</span>
                ${iframeHint}
                ${linkButton} </div>
        `;

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

// Tabs
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const grid = document.getElementById('portfolio-grid');
        grid.style.opacity = '0';
        grid.style.transform = 'translateY(12px)';
        setTimeout(() => {
            buildPortfolio(btn.dataset.cat);
            grid.style.transition = 'opacity 0.35s, transform 0.35s';
            grid.style.opacity = '1';
            grid.style.transform = 'translateY(0)';
        }, 200);
    });
});


// ============================================================
// 5. LIGHTBOX
// ============================================================
const lightbox = document.getElementById('lightbox');
const lbImg = document.getElementById('lightbox-img');
const lbVideo = document.getElementById('lightbox-video');
const lbCaption = document.getElementById('lightbox-caption');

function openLightbox(item) {
    lightbox.classList.add('open');
    lbCaption.textContent = item.title;

    // 清除舊狀態
    lbImg.style.display = 'none';
    lbVideo.style.display = 'none';
    lbVideo.src = '';
    const oldIframe = document.getElementById('lightbox-iframe');
    if (oldIframe) oldIframe.remove();
    const lbInner = document.getElementById('lightbox-inner');
    lbInner.classList.remove('iframe-mode');

    if (item.type === 'video') {
        lbVideo.style.display = 'block';
        lbVideo.src = item.src;
        lbVideo.play();
    } else if (item.type === 'iframe') {
        const iframe = document.createElement('iframe');
        iframe.id = 'lightbox-iframe';
        iframe.src = item.src;
        iframe.allowFullscreen = true;
        lbInner.appendChild(iframe);
        lbInner.classList.add('iframe-mode');
    } else {
        lbImg.style.display = 'block';
        lbImg.src = item.src;
    }
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.classList.remove('open');
    lbVideo.pause();
    lbVideo.src = '';
    const oldIframe = document.getElementById('lightbox-iframe');
    if (oldIframe) oldIframe.remove();
    document.getElementById('lightbox-inner').classList.remove('iframe-mode');
    document.body.style.overflow = '';
}

document.getElementById('lightbox-close').addEventListener('click', closeLightbox);
document.getElementById('lightbox-backdrop').addEventListener('click', closeLightbox);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });


// ============================================================
// 6. NAV & SMOOTH SCROLL
// ============================================================
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
}, { passive: true });

document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        const target = document.querySelector(a.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        // 如果行動版選單開著，點連結後收起
        const mobileMenu = document.getElementById('mobile-menu');
        const hamburger = document.getElementById('nav-hamburger');
        if (mobileMenu && mobileMenu.classList.contains('open')) {
            mobileMenu.classList.remove('open');
            hamburger.classList.remove('open');
        }
    });
});

// ============================================================
// 漢堡選單開關
// ============================================================
const hamburger = document.getElementById('nav-hamburger');
const mobileMenu = document.getElementById('mobile-menu');
if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('open');
        mobileMenu.classList.toggle('open');
    });
}


// ============================================================
// 7. SCROLL REVEAL
// ============================================================
function observeReveal() {
    const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const siblings = Array.from(entry.target.parentElement?.children || []);
                const delay = siblings.indexOf(entry.target) * 80;
                setTimeout(() => entry.target.classList.add('visible'), delay);
                io.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.scroll-reveal:not(.visible)').forEach(el => io.observe(el));
}


// ============================================================
// 8. PARTICLE INK CANVAS (Canvas 2D — no third-party lib)
// ============================================================
function initInk() {
    const canvas = document.getElementById('ink-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    // Disable on low-end or small screens
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.innerWidth < 640;
    if (prefersReduced || isMobile) { canvas.style.display = 'none'; return; }

    let W = window.innerWidth, H = window.innerHeight;
    canvas.width = W; canvas.height = H;

    // Mouse state (Read from global tracker)
    const mouse = globalMouse;

    // --- InkParticle ---
    class InkParticle {
        constructor(x, y, fromMouse = false) {
            this.x = x;
            this.y = y;
            const angle = Math.random() * Math.PI * 2;
            const spd = fromMouse
                ? (0.8 + Math.random() * 2.5)
                : (0.1 + Math.random() * 0.5);
            this.vx = Math.cos(angle) * spd;
            this.vy = Math.sin(angle) * spd;
            this.life = 1.0;
            this.decay = 0.005 + Math.random() * 0.008;
            this.r = fromMouse ? (2 + Math.random() * 6) : (1 + Math.random() * 3);
            const l = 18 + Math.floor(Math.random() * 35);
            const s = 3 + Math.floor(Math.random() * 12);
            this.color = `hsl(28,${s}%,${l}%)`;
        }
        update() {
            this.life -= this.decay;
            this.vx *= 0.975; this.vy *= 0.975;
            // Gentle swirl toward mouse
            const dx = mouse.x - this.x, dy = mouse.y - this.y;
            const d = Math.sqrt(dx * dx + dy * dy);
            if (d < 160 && d > 1) {
                const f = (160 - d) / 160;
                // perpendicular direction
                this.vx += (-dy / d) * f * 0.3;
                this.vy += (dx / d) * f * 0.3;
                this.vx += (dx / d) * f * 0.05;
                this.vy += (dy / d) * f * 0.05;
            }
            this.x += this.vx; this.y += this.vy;
            if (this.life > 0.6) this.r += 0.04;
        }
        draw() {
            ctx.save();
            ctx.globalAlpha = this.life * 0.4;
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.ellipse(
                this.x, this.y,
                this.r, this.r * (0.6 + Math.random() * 0.8),
                Math.atan2(this.vy, this.vx),
                0, Math.PI * 2
            );
            ctx.fill();
            ctx.restore();
        }
    }

    // --- InkStroke (brush trail following mouse fast movement) ---
    class InkStroke {
        constructor(x, y) {
            this.pts = [{ x, y }];
            this.life = 1.0;
            const l = 15 + Math.floor(Math.random() * 25);
            this.color = `hsl(28,8%,${l}%)`;
        }
        add(x, y) { this.pts.push({ x, y }); }
        update() { this.life -= 0.0025; }
        draw() {
            if (this.pts.length < 2) return;
            ctx.save();
            ctx.globalAlpha = this.life * 0.3;
            ctx.strokeStyle = this.color;
            ctx.lineWidth = 1.2;
            ctx.lineCap = ctx.lineJoin = 'round';
            ctx.beginPath();
            ctx.moveTo(this.pts[0].x, this.pts[0].y);
            for (let i = 1; i < this.pts.length - 1; i++) {
                const mx = (this.pts[i].x + this.pts[i + 1].x) / 2;
                const my = (this.pts[i].y + this.pts[i + 1].y) / 2;
                ctx.quadraticCurveTo(this.pts[i].x, this.pts[i].y, mx, my);
            }
            ctx.stroke();
            ctx.restore();
        }
    }

    const MAX_P = 200; // 降低粒子上限提升效能 (500 -> 200)
    let particles = [], strokes = [], currentStroke = null, frame = 0;

    function spawnAmbient() {
        if (particles.length < MAX_P) {
            particles.push(new InkParticle(Math.random() * W, Math.random() * H, false));
        }
    }

    function spawnMouse() {
        const spd = Math.sqrt(mouse.vx * mouse.vx + mouse.vy * mouse.vy);
        if (spd > 4 && particles.length < MAX_P) {
            const count = Math.min(6, Math.floor(spd / 3));
            for (let i = 0; i < count; i++) {
                particles.push(new InkParticle(
                    mouse.x + (Math.random() - 0.5) * 16,
                    mouse.y + (Math.random() - 0.5) * 16,
                    true
                ));
            }
        }
        if (spd > 6) {
            if (!currentStroke) {
                currentStroke = new InkStroke(mouse.x, mouse.y);
                strokes.push(currentStroke);
            } else {
                currentStroke.add(mouse.x, mouse.y);
                if (currentStroke.pts.length > 50) currentStroke = null;
            }
        } else currentStroke = null;
    }

    function loop() {
        // Slow fade (persistence gives "ink spreading" effect)
        ctx.fillStyle = 'rgba(10,10,12,0.055)';
        ctx.fillRect(0, 0, W, H);

        frame++;
        if (frame % 6 === 0) spawnAmbient(); // 降低生成頻率
        if (frame % 2 === 0) spawnMouse(); // 降低滑鼠粒子生成頻率

        strokes = strokes.filter(s => s.life > 0);
        strokes.forEach(s => { s.update(); s.draw(); });

        particles = particles.filter(p => p.life > 0);
        particles.forEach(p => { p.update(); p.draw(); });

        requestAnimationFrame(loop);
    }

    window.addEventListener('resize', () => {
        W = window.innerWidth; H = window.innerHeight;
        canvas.width = W; canvas.height = H;
    });

    loop();
}


// ============================================================
// 9. INIT
// ============================================================
initSplash();
buildFeatured();
buildPortfolio('huangyi');
observeReveal();
initInk();
initCursor();
initFerroNav();


// ============================================================
// 10. TECH CIRCLE CURSOR
// ============================================================
function initCursor() {
    // 只在有 hover 支援的裝置運作
    if (!window.matchMedia('(hover: hover)').matches) return;

    const dot = document.getElementById('cursor-dot');
    const ring = document.getElementById('cursor-ring');
    if (!dot || !ring) return;

    let started = false;

    document.addEventListener('mousemove', (e) => {
        const mx = globalMouse.x;
        const my = globalMouse.y;

        // 即時無延遲追蹤
        dot.style.left = mx + 'px';
        dot.style.top = my + 'px';
        ring.style.left = mx + 'px';
        ring.style.top = my + 'px';

        if (!started) {
            started = true;
            dot.classList.add('visible');
            // 注意： ring 預設隱藏，只有 hover 才會顯示
        }
    }, { passive: true });

    // 離開視窗時隱藏
    document.addEventListener('mouseleave', () => dot.classList.remove('visible'));
    document.addEventListener('mouseenter', () => { if (started) dot.classList.add('visible'); });

    // hover 偵測：觸碰實際可點擊元素時顯示科技環 HUD
    const HOVER_SEL = 'a, button, [role="button"], .portfolio-item img, .portfolio-item video, .featured-media, .tab-btn';

    document.addEventListener('mouseover', (e) => {
        if (e.target.closest(HOVER_SEL)) {
            dot.classList.add('hover');
            ring.classList.add('hover');
        }
    });
    document.addEventListener('mouseout', (e) => {
        if (e.target.closest(HOVER_SEL)) {
            dot.classList.remove('hover');
            ring.classList.remove('hover');
        }
    });
}


// ============================================================
// 11. BACKGROUND MUSIC (BGM) TOGGLE
// ============================================================
function initBGM() {
    const musicBtn = document.getElementById('music-toggle');
    const bgm = document.getElementById('bgm');
    if (!musicBtn || !bgm) return;

    let isPlaying = false;

    // 調整適當音量
    bgm.volume = 0.4;

    musicBtn.addEventListener('click', () => {
        if (isPlaying) {
            bgm.pause();
            isPlaying = false;
            musicBtn.classList.remove('playing');
        } else {
            bgm.play().then(() => {
                isPlaying = true;
                musicBtn.classList.add('playing');
            }).catch(err => console.warn('BGM:', err));
        }
    });

    // 嘗試一進網站自動播放 -> 交給 HTML autoplay 處理
    // 如果瀏覽器嚴格限制(如 Chrome)，我們在第一下 click 時幫忙播起
    const playAttempt = async () => {
        try {
            await bgm.play();
            isPlaying = true;
            musicBtn.classList.add('playing');
        } catch (error) {
            console.log("瀏覽器擋掉背景音樂自動播放 (Auto-play policy)。需等使用者點選任何物件才會發出聲音。");

            // 綁定一次性的任意點擊，觸發音樂播放 (不干涉本身其他 click 行為)
            const playOnce = async () => {
                if (!isPlaying) {
                    try {
                        await bgm.play();
                        isPlaying = true;
                        musicBtn.classList.add('playing');
                    } catch (e) { }
                }
                document.removeEventListener('click', playOnce);
            };
            document.addEventListener('click', playOnce);
        }
    };

    // 給設定緩衝時間進行 Play
    setTimeout(playAttempt, 500);
}
initBGM();

// 12. TEXT EFFECTS (Split & Magnetic)
function initTextEffects() {
    const heroTitle = document.querySelector('.hero-title');
    if (!heroTitle) return;

    // 1. Split Text into spans for individual character animation
    const lines = heroTitle.querySelectorAll('.line');
    lines.forEach(line => {
        const text = line.innerText;
        line.innerHTML = '';
        [...text].forEach(char => {
            const span = document.createElement('span');
            span.className = 'char';
            span.innerText = char === ' ' ? '\u00A0' : char;
            line.appendChild(span);
        });
    });

    // 2. Magnetic Effect (Only on desktop devices with hover support)
    if (window.matchMedia('(hover: hover)').matches) {
        document.addEventListener('mousemove', (e) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;

            const magneticElements = document.querySelectorAll('.hero-title .char, .btn-primary, .nav-logo');
            magneticElements.forEach(el => {
                const rect = el.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;

                const distanceX = mouseX - centerX;
                const distanceY = mouseY - centerY;
                const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

                if (distance < 80) {
                    const strength = 0.3;
                    const moveX = distanceX * strength;
                    const moveY = distanceY * strength;
                    el.style.transform = `translate(${moveX}px, ${moveY}px)`;
                    el.style.transition = 'transform 0.1s linear';
                } else {
                    el.style.transform = '';
                    el.style.transition = 'transform 0.5s var(--ease)';
                }
            });
        });
    }
}
initTextEffects();

// ============================================================
// 13. FERROFLUID WEBGL NAVIGATION & PIE MENU
// ============================================================
function initFerroNav() {
    const container = document.getElementById('ferro-nav-container');
    const canvas = document.getElementById('ferro-canvas');
    const pieMenu = document.getElementById('pie-menu');
    if (!container || !canvas || !pieMenu) return;

    const gl = canvas.getContext('webgl');
    if (!gl) {
        container.innerHTML = '<p style="color:#666; font-size:0.8rem;">WebGL not supported</p>';
        return;
    }

    // --- 1. SHADERS (GLSL) ---
    const vsSource = `
        attribute vec2 position;
        void main() { gl_Position = vec4(position, 0.0, 1.0); }
    `;

    const fsSource = `
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
    `;

    function createShader(type, source) {
        const s = gl.createShader(type);
        gl.shaderSource(s, source);
        gl.compileShader(s);
        if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
            console.error(gl.getShaderInfoLog(s));
            return null;
        }
        return s;
    }

    const program = gl.createProgram();
    gl.attachShader(program, createShader(gl.VERTEX_SHADER, vsSource));
    gl.attachShader(program, createShader(gl.FRAGMENT_SHADER, fsSource));
    gl.linkProgram(program);
    gl.useProgram(program);

    const vertices = new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]);
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    const posAttr = gl.getAttribLocation(program, 'position');
    gl.enableVertexAttribArray(posAttr);
    gl.vertexAttribPointer(posAttr, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(program, 'u_time');
    const uMouse = gl.getUniformLocation(program, 'u_mouse');
    const uRes = gl.getUniformLocation(program, 'u_res');
    const uActive = gl.getUniformLocation(program, 'u_active');

    let mouseX = 0.5, mouseY = 0.5, targetMouseX = 0.5, targetMouseY = 0.5;
    let isMenuActive = false;

    // --- 2. PIE MENU GENERATION ---
    function buildPieMenu() {
        pieMenu.innerHTML = '';
        const cats = Object.keys(CATEGORIES);
        const count = cats.length;
        const radius = window.innerWidth < 768 ? 100 : 130;

        cats.forEach((key, i) => {
            const angle = (i / count) * Math.PI * 2;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            const item = document.createElement('div');
            item.className = 'pie-item';
            if (key === currentCat) item.classList.add('active');
            item.style.transform = `translate(${x}px, ${y}px)`;
            item.innerHTML = `<span>${CATEGORIES[key].label}</span>`;

            item.addEventListener('mouseenter', () => {
                const rect = item.getBoundingClientRect();
                const containerRect = container.getBoundingClientRect();
                targetMouseX = (rect.left + rect.width / 2 - containerRect.left) / containerRect.width;
                targetMouseY = (rect.top + rect.height / 2 - containerRect.top) / containerRect.height;
            });

            item.onclick = (e) => {
                e.stopPropagation();
                if (key === currentCat) return;
                currentCat = key;
                buildPortfolio(key);
                buildPieMenu();
                toggleMenu(false);
            };
            pieMenu.appendChild(item);
        });
    }

    function toggleMenu(force) {
        isMenuActive = force !== undefined ? force : !isMenuActive;
        if (isMenuActive) {
            pieMenu.classList.add('active');
            gsap.fromTo(".pie-item",
                { scale: 0, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.5, stagger: 0.05, ease: "back.out(1.7)" }
            );
            document.getElementById('ferro-hint').innerText = '再次點擊關閉';
        } else {
            gsap.to(".pie-item", { scale: 0, opacity: 0, duration: 0.3, stagger: 0.02, ease: "power2.in" })
                .eventCallback("onComplete", () => pieMenu.classList.remove('active'));
            document.getElementById('ferro-hint').innerText = '點擊核心切換類別';
        }
    }

    function resize() {
        const dpr = Math.min(window.devicePixelRatio || 1, 1.5); // 限制像素比，大幅提升 4K 螢幕效能
        canvas.width = container.clientWidth * dpr;
        canvas.height = container.clientHeight * dpr;
        gl.viewport(0, 0, canvas.width, canvas.height);
        buildPieMenu();
    }
    window.addEventListener('resize', resize);
    resize();

    // --- 3. INTERACTION ---
    canvas.addEventListener('mousemove', (e) => {
        targetMouseX = globalMouse.x / window.innerWidth;
        targetMouseY = globalMouse.y / window.innerHeight;
    });

    canvas.addEventListener('click', () => toggleMenu());

    // --- 4. RENDER LOOP ---
    function render(time) {
        // Smooth mouse move
        mouseX += (targetMouseX - mouseX) * 0.1;
        mouseY += (targetMouseY - mouseY) * 0.1;

        gl.uniform1f(uTime, time * 0.001);
        gl.uniform2f(uMouse, mouseX, mouseY);
        gl.uniform2f(uRes, canvas.width, canvas.height);
        gl.uniform1f(uActive, isMenuActive ? 1.0 : 0.0);

        gl.drawArrays(gl.TRIANGLES, 0, 6);
        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
}
initFerroNav();

