// ============================================================
// PORTFOLIO MAIN.JS — Corrected Data & Content
// ============================================================

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
    { type: 'image', src: './assets/my3d_1.jpg', title: '自製3D 渲染 1' },
    { type: 'image', src: './assets/my3d_2.jpg', title: '自製3D 渲染 2' },
    { type: 'image', src: './assets/my3d_3.jpg', title: '自製3D 渲染 3' },
    { type: 'image', src: './assets/my3d_4.jpg', title: '自製3D 渲染 4' },
    { type: 'image', src: './assets/my3d_8.jpg', title: '自製3D 建築渲染 1' },
    { type: 'image', src: './assets/my3d_9.jpg', title: '自製3D 建築渲染 2' },
    { type: 'image', src: './assets/my3d_10.jpg', title: '自製3D 建築渲染 3' }
);

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

        // 封面圖：video 用 video 標籤、iframe 用 thumb 圖片、其他用 img
        const media = item.type === 'video'
            ? `<video src="${item.src}" muted loop playsinline></video>`
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

    // Mouse state
    const mouse = { x: W / 2, y: H / 2, vx: 0, vy: 0 };
    document.addEventListener('mousemove', e => {
        mouse.vx = e.clientX - mouse.x;
        mouse.vy = e.clientY - mouse.y;
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    }, { passive: true });

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

    const MAX_P = 500;
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
        if (frame % 4 === 0) spawnAmbient();
        spawnMouse();

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
buildFeatured();
buildPortfolio('huangyi');
observeReveal();
initInk();

// ============================================================
// 10. TECH CIRCLE CURSOR
// ============================================================
function initCursor() {
    // 桌面端裝置檢測
    const isDesktop = window.matchMedia('(hover: hover)').matches;
    if (!isDesktop) return;

    const ring = document.getElementById('cursor-ring');
    const dot = document.getElementById('cursor-dot');
    if (!ring || !dot) return;

    // 第一次偵測到滑鼠才顯示
    let started = false;

    document.addEventListener('mousemove', (e) => {
        const mx = e.clientX;
        const my = e.clientY;

        // 零延遲：直接更新中心點與外圈
        dot.style.left = mx + 'px';
        dot.style.top = my + 'px';
        ring.style.left = mx + 'px';
        ring.style.top = my + 'px';

        if (!started) {
            started = true;
            ring.classList.add('visible');
            dot.classList.add('visible');
        }
    }, { passive: true });

    // 離開視窗時隱藏
    document.addEventListener('mouseleave', () => {
        ring.classList.remove('visible');
        dot.classList.remove('visible');
    });
    document.addEventListener('mouseenter', () => {
        if (started) {
            ring.classList.add('visible');
            dot.classList.add('visible');
        }
    });

    // 放開/按下 (可自由變化, 目前取消點擊大小變化)
    document.addEventListener('mousedown', () => {
        dot.style.transform = 'translate(-50%,-50%) scale(0.8)';
    });
    document.addEventListener('mouseup', () => {
        dot.style.transform = '';
    });

    // hover 偵測：凡是可點擊元素
    const HOVER_SEL = 'a, button, [role="button"], .portfolio-item, .tab-btn, .featured-item';

    function setHover(on) {
        ring.classList.toggle('hover', on);
        dot.classList.toggle('hover', on);
    }

    document.addEventListener('mouseover', (e) => {
        if (e.target.closest(HOVER_SEL)) setHover(true);
    });
    document.addEventListener('mouseout', (e) => {
        if (e.target.closest(HOVER_SEL)) setHover(false);
    });
}

initCursor();

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
            }).catch(err => {
                console.warn('BGM 自動播放被擋掉:', err);
            });
        }
    });
}
initBGM();
