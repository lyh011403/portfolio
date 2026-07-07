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
        link: 'https://lyh011403.github.io/Smart-Safety-Care_APK/'
    },
    {
        type: 'video',
        src: './assets/Labeler_V1.mp4',
        thumb: './assets/Labeler00.png',
        title: 'AI工具製作 — AI自動標註系統',
        desc: '自主開發的 AI 影像自動標註與批次處理工具，支援智慧標註，顯著縮短人工標註時間並提升資料集效率。',
    },
    {
        type: 'video',
        src: './assets/懺悔的鐘徒.mp4',
        title: 'AI 2D 動畫 — 懺悔的鐘徒',
        desc: '運用 AI 2D 技術進行角色、特效與動態設計，展現流暢的動畫效果與藝術張力。',
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
    'ai-labeler': { label: 'AI自動標註', items: [] },
    'ai-pixel': { label: 'PIXEL轉換', items: [] },
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
        src: './training-gallery.html?v=2',
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
    { type: 'video', src: './assets/embedded_2.mp4', title: 'AI 2D使用(角色，特效，動作)' },
    { type: 'video', src: './assets/懺悔的鐘徒.mp4', title: 'AI 2D — 懺悔的鐘徒' },
    { type: 'video', src: './assets/聚合主母·「厄兆結」.mp4', title: 'AI 2D — 聚合主母·「厄兆結」' },
    { type: 'image', src: './assets/Grass.png', title: 'AI 2D — Grass' },
    { type: 'image', src: './assets/house01.png', title: 'AI 2D — house01' }
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

// 8. AI自動標註 — ai-labeler
CATEGORIES['ai-labeler'].items.push(
    { type: 'image', src: './assets/Labeler00.png', title: 'AI自動標註 — 系統封面' },
    { type: 'video', src: './assets/Labeler_V1.mp4', thumb: './assets/Labeler00.png', title: 'AI自動標註 — 智慧標註展示 V1' },
    { type: 'video', src: './assets/Labeler_V2.mp4', thumb: './assets/Labeler02.png', title: 'AI自動標註 — 智慧標註展示 V2' },
    { type: 'video', src: './assets/Labeler_V3.mp4', thumb: './assets/Labeler03.png', title: 'AI自動標註 — 智慧標註展示 V3' },
    { type: 'image', src: './assets/Labeler01.png', title: 'AI自動標註 — 介面截圖 1' },
    { type: 'image', src: './assets/Labeler02.png', title: 'AI自動標註 — 介面截圖 2' },
    { type: 'image', src: './assets/Labeler03.png', title: 'AI自動標註 — 介面截圖 3' },
    { type: 'image', src: './assets/Labeler04.png', title: 'AI自動標註 — 介面截圖 4' }
);

// 9. PIXEL轉換 — ai-pixel
CATEGORIES['ai-pixel'].items.push(
    { type: 'video', src: './assets/PIXEL02.mp4', thumb: './assets/PIXEL01.png', title: 'PIXEL轉換 — 像素畫生成展示' },
    { type: 'image', src: './assets/PIXEL01.png', title: 'PIXEL轉換 — 介面截圖' }
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
        
        const isVideo = p.type === 'video';
        const mediaHTML = isVideo
            ? `<video src="${p.src}" ${p.thumb ? `poster="${p.thumb}"` : ''} muted loop playsinline></video>`
            : `<img src="${p.src}" alt="${p.title}" loading="${i === 0 ? 'eager' : 'lazy'}">`;

        el.innerHTML = `
            <div class="featured-media">
                ${mediaHTML}
            </div>
            <div class="featured-info">
                <div class="featured-index">${i + 1 < 10 ? '0' : ''}${i + 1}</div>
                <h3>${p.title}</h3>
                <p>${p.desc}</p>
            </div>
        `;
        const mediaPart = el.querySelector('.featured-media');
        mediaPart.addEventListener('click', () => {
            if (p.link) {
                window.open(p.link, '_blank');
            } else {
                openLightbox({ type: p.type || 'image', src: p.src, title: p.title });
            }
        });
        if (p.link) el.classList.add('has-external-link');

        if (isVideo) {
            const v = el.querySelector('video');
            el.addEventListener('mousemove', () => v.play());
            el.addEventListener('mouseleave', () => { v.pause(); v.currentTime = 0; });
        }

        container.appendChild(el);
    });
}

// ============================================================
// 4. RENDER PORTFOLIO GRID
// ============================================================
// 大分類與子分類對應關係
const MAIN_CATEGORIES = {
    'game-art': {
        label: '遊戲美術專案',
        subCats: ['huangyi', 'tianzi', 'wlwl', 'my-3d']
    },
    'ai-tech': {
        label: 'AI 與技術開發',
        subCats: ['embedded', 'ai-labeler', 'ai-pixel']
    },
    'ai-creation': {
        label: 'AI 創作',
        subCats: ['ai-3d', 'ai-2d']
    }
};

let currentMainCat = 'game-art';
let currentSubCat = 'all';
let displayLimit = 12;

// 動態建置二級分類標籤
function buildSubTabs() {
    const bar = document.getElementById('sub-tabs-bar');
    if (!bar) return;
    bar.innerHTML = '';

    // 第一個是「全部」
    const allBtn = document.createElement('button');
    allBtn.className = `sub-tab-btn ${currentSubCat === 'all' ? 'active' : ''}`;
    allBtn.textContent = '全部';
    allBtn.addEventListener('click', () => {
        if (currentSubCat === 'all') return;
        currentSubCat = 'all';
        displayLimit = 12;
        updateSubTabsActive(allBtn);
        triggerPortfolioReload();
    });
    bar.appendChild(allBtn);

    // 依據大分類載入子分類按鈕
    MAIN_CATEGORIES[currentMainCat].subCats.forEach(subKey => {
        const subInfo = CATEGORIES[subKey];
        if (!subInfo) return;
        const btn = document.createElement('button');
        btn.className = `sub-tab-btn ${currentSubCat === subKey ? 'active' : ''}`;
        btn.textContent = subInfo.label;
        btn.addEventListener('click', () => {
            if (currentSubCat === subKey) return;
            currentSubCat = subKey;
            displayLimit = 12;
            updateSubTabsActive(btn);
            triggerPortfolioReload();
        });
        bar.appendChild(btn);
    });
}

function updateSubTabsActive(activeBtn) {
    document.querySelectorAll('.sub-tab-btn').forEach(btn => btn.classList.remove('active'));
    activeBtn.classList.add('active');
}

function triggerPortfolioReload() {
    const grid = document.getElementById('portfolio-grid');
    grid.style.opacity = '0';
    grid.style.transform = 'translateY(12px)';
    setTimeout(() => {
        buildPortfolio();
        grid.style.transition = 'opacity 0.35s, transform 0.35s';
        grid.style.opacity = '1';
        grid.style.transform = 'translateY(0)';
    }, 200);
}

function buildPortfolio() {
    const grid = document.getElementById('portfolio-grid');
    if (!grid) return;
    grid.innerHTML = '';

    // 收集該大分類或二級分類下的所有作品項目
    let itemsToDraw = [];
    if (currentSubCat === 'all') {
        MAIN_CATEGORIES[currentMainCat].subCats.forEach(subKey => {
            const subInfo = CATEGORIES[subKey];
            if (subInfo && subInfo.items) {
                itemsToDraw = itemsToDraw.concat(subInfo.items);
            }
        });
    } else {
        const subInfo = CATEGORIES[currentSubCat];
        if (subInfo && subInfo.items) {
            itemsToDraw = subInfo.items;
        }
    }

    // 判斷是否顯示「展開更多作品」按鈕
    const loadMoreBtn = document.getElementById('load-more-btn');
    if (loadMoreBtn) {
        if (itemsToDraw.length > displayLimit) {
            loadMoreBtn.style.display = 'block';
        } else {
            loadMoreBtn.style.display = 'none';
        }
    }

    // 依據限制顯示特定數量的卡片
    const slicedItems = itemsToDraw.slice(0, displayLimit);

    slicedItems.forEach((item, i) => {
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
                ${linkButton}
            </div>
        `;

        if (item.type === 'video') {
            const v = el.querySelector('video');
            el.addEventListener('mousemove', () => v.play());
            el.addEventListener('mouseleave', () => { v.pause(); v.currentTime = 0; });
        }

        // 如果作品有外部連結，點擊圖片就直接跳轉，不再開啟 Lightbox
        el.addEventListener('click', () => {
            if (item.link) {
                window.open(item.link, '_blank');
            } else {
                openLightbox(item);
            }
        });

        // 為具有連結的項目加上 hover 指標樣式
        if (item.link) el.classList.add('has-external-link');

        grid.appendChild(el);
    });

    observeReveal();
}

// 一級 Tabs 切換事件
document.querySelectorAll('.tabs-bar .tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.tabs-bar .tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        currentMainCat = btn.dataset.cat;
        currentSubCat = 'all';
        displayLimit = 12;
        
        buildSubTabs();
        triggerPortfolioReload();
    });
});

// 初始化載入更多按鈕點擊事件
const loadMoreBtn = document.getElementById('load-more-btn');
if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
        displayLimit += 12; // 每次多加載 12 個項目
        buildPortfolio();
    });
}


// ============================================================
// 5. LIGHTBOX & NAVIGATION
// ============================================================
const lightbox = document.getElementById('lightbox');
const lbImg = document.getElementById('lightbox-img');
const lbVideo = document.getElementById('lightbox-video');
const lbCaption = document.getElementById('lightbox-caption');

let currentItems = [];
let currentIndex = 0;

function openLightbox(item) {
    if (currentCat && CATEGORIES[currentCat]) {
        currentItems = CATEGORIES[currentCat].items;
        currentIndex = currentItems.indexOf(item);
        if (currentIndex === -1) {
             // Fallback for featured items
             currentItems = [item];
             currentIndex = 0;
        }
    } else {
        currentItems = [item];
        currentIndex = 0;
    }

    renderLightboxItem();
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function renderLightboxItem() {
    const item = currentItems[currentIndex];
    if (!item) return;

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
    
    // Update Nav Buttons visibility
    updateLightboxNav();
}

function updateLightboxNav() {
    const nextBtn = document.getElementById('lb-next');
    const prevBtn = document.getElementById('lb-prev');
    const item = currentItems[currentIndex];

    // 如果是簡報/分頁模式 (iframe)，隱藏外層導覽按鈕以免衝突
    const shouldHide = !item || item.type === 'iframe' || currentItems.length <= 1;

    if (nextBtn && prevBtn) {
        nextBtn.style.display = shouldHide ? 'none' : 'flex';
        prevBtn.style.display = shouldHide ? 'none' : 'flex';
    }
}

function nextLightbox() {
    currentIndex = (currentIndex + 1) % currentItems.length;
    renderLightboxItem();
}

function prevLightbox() {
    currentIndex = (currentIndex - 1 + currentItems.length) % currentItems.length;
    renderLightboxItem();
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
document.getElementById('lb-next')?.addEventListener('click', (e) => { e.stopPropagation(); nextLightbox(); });
document.getElementById('lb-prev')?.addEventListener('click', (e) => { e.stopPropagation(); prevLightbox(); });

document.addEventListener('keydown', e => { 
    if (e.key === 'Escape') closeLightbox(); 
    
    // 如果是簡報/分頁模式 (iframe)，不處理左右鍵切換，以免跟簡報內的操作衝突
    const currentItem = currentItems[currentIndex];
    if (currentItem && currentItem.type === 'iframe') return;

    if (e.key === 'ArrowRight' && lightbox.classList.contains('open')) nextLightbox();
    if (e.key === 'ArrowLeft' && lightbox.classList.contains('open')) prevLightbox();
});


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
// 8. MOBILE GYROSCOPE FLUID CANVAS (手機陀螺儀水墨液體搖晃)
// ============================================================
function runMobileFluid(canvas, ctx) {
    let W = window.innerWidth, H = window.innerHeight;
    canvas.width = W; canvas.height = H;

    // 陀螺儀傾斜變數
    let tiltX = 0; // 左右搖晃 (-90 到 90)
    let tiltY = 0; // 前後搖晃 (-180 到 180)，直立時通常為 60
    
    // 平滑後的傾斜角度
    let currentTiltX = 0;
    let currentTiltY = 60; // 預設直立角度

    // 偵測搖晃（加速度變化）
    let lastTiltX = 0;
    let lastTiltY = 60;

    // 監聽陀螺儀事件
    window.addEventListener('deviceorientation', (e) => {
        if (e.gamma !== null) tiltX = e.gamma;
        if (e.beta !== null) tiltY = e.beta;
    }, { passive: true });

    // 觸控互動支援 (讓使用者除了搖晃手機，也能在全螢幕任何區域用手指去攪動水墨)
    const touch = { active: false, x: 0, y: 0, vx: 0, vy: 0 };
    window.addEventListener('touchstart', (e) => {
        touch.active = true;
        const t = e.touches[0];
        touch.x = t.clientX;
        touch.y = t.clientY;
        touch.vx = 0;
        touch.vy = 0;
    }, { passive: true });

    window.addEventListener('touchmove', (e) => {
        if (!touch.active) return;
        const t = e.touches[0];
        const dx = t.clientX - touch.x;
        const dy = t.clientY - touch.y;
        touch.vx = dx;
        touch.vy = dy;
        touch.x = t.clientX;
        touch.y = t.clientY;

        // 觸碰滑動時產生小飛濺墨滴
        if (Math.abs(touch.vx) + Math.abs(touch.vy) > 2) {
            spawnSplash(touch.x, touch.y, touch.vx * 0.4, touch.vy * 0.4, 2);
        }
    }, { passive: true });

    window.addEventListener('touchend', () => {
        touch.active = false;
    }, { passive: true });

    // 大水墨油滴
    class FluidBlob {
        constructor(x, y, r) {
            this.x = x;
            this.y = y;
            this.vx = 0;
            this.vy = 0;
            this.r = r;
        }
        update(gx, gy) {
            // 受重力加速度影響
            this.vx += gx;
            this.vy += gy;

            // 觸控排斥/吸引效果
            if (touch.active) {
                const dx = this.x - touch.x;
                const dy = this.y - touch.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 160 && dist > 1) {
                    const force = (160 - dist) / 160;
                    // 被手指攪動推開，並隨手指速度移動
                    this.vx += (dx / dist) * force * 1.8 + touch.vx * 0.15;
                    this.vy += (dy / dist) * force * 1.8 + touch.vy * 0.15;
                }
            }

            // 阻尼 (水分子黏滯感)
            this.vx *= 0.94;
            this.vy *= 0.94;

            // 更新位置
            this.x += this.vx;
            this.y += this.vy;

            // 邊界碰撞限制 (像在水瓶內部反彈)
            if (this.x < this.r) {
                this.x = this.r;
                this.vx *= -0.55;
            } else if (this.x > W - this.r) {
                this.x = W - this.r;
                this.vx *= -0.55;
            }
            if (this.y < this.r) {
                this.y = this.r;
                this.vy *= -0.55;
            } else if (this.y > H - this.r) {
                this.y = H - this.r;
                this.vy *= -0.55;
            }
        }
        draw() {
            // 創建黃金立體質感漸層，模擬偏左上方的光源反射
            const grad = ctx.createRadialGradient(
                this.x - this.r * 0.22, this.y - this.r * 0.22, this.r * 0.04,
                this.x, this.y, this.r
            );
            grad.addColorStop(0, '#fffbf2');      // 亮面反射 (白金色高光)
            grad.addColorStop(0.25, '#ffe57f');   // 亮黃金
            grad.addColorStop(0.65, '#ffd54f');   // 黃金本色
            grad.addColorStop(0.9, '#ffb300');    // 暖深金色
            grad.addColorStop(1, '#b57c00');      // 邊緣陰影金 (防止純色扁平化)

            ctx.fillStyle = grad;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    // 噴濺的小墨滴 / 氣泡
    class SplashBubble {
        constructor(x, y, vx, vy, r) {
            this.x = x;
            this.y = y;
            this.vx = vx + (Math.random() - 0.5) * 3;
            this.vy = vy + (Math.random() - 0.5) * 3;
            this.r = r;
            this.life = 1.0;
            this.decay = 0.015 + Math.random() * 0.02;
        }
        update(gx, gy) {
            this.vx += gx * 0.5;
            this.vy += gy * 0.5;
            this.vx *= 0.96;
            this.vy *= 0.96;
            this.x += this.vx;
            this.y += this.vy;
            this.life -= this.decay;

            // 邊界限制
            if (this.x < this.r) { this.x = this.r; this.vx *= -0.4; }
            else if (this.x > W - this.r) { this.x = W - this.r; this.vx *= -0.4; }
            if (this.y < this.r) { this.y = this.r; this.vy *= -0.4; }
            else if (this.y > H - this.r) { this.y = H - this.r; this.vy *= -0.4; }
        }
        draw() {
            ctx.save();
            ctx.globalAlpha = this.life;
            
            // 飛濺小球亦使用金屬漸層，展現流光感
            const currentR = this.r * this.life;
            if (currentR > 0.1) {
                const grad = ctx.createRadialGradient(
                    this.x - currentR * 0.2, this.y - currentR * 0.2, currentR * 0.04,
                    this.x, this.y, currentR
                );
                grad.addColorStop(0, '#fffdf5');
                grad.addColorStop(0.3, '#ffd700');
                grad.addColorStop(1, '#b57c00');
                ctx.fillStyle = grad;
            } else {
                ctx.fillStyle = '#ffd700';
            }

            ctx.beginPath();
            ctx.arc(this.x, this.y, currentR, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        }
    }

    // 初始化大墨團 (6個大小不同的油水墨球)
    const blobs = [];
    const numBlobs = 6;
    for (let i = 0; i < numBlobs; i++) {
        const r = 40 + Math.random() * 35; // 半徑 40 ~ 75
        blobs.push(new FluidBlob(
            W / 2 + (Math.random() - 0.5) * 120,
            H / 2 + (Math.random() - 0.5) * 250,
            r
        ));
    }

    let splashes = [];

    function spawnSplash(x, y, vx, vy, count) {
        for (let i = 0; i < count; i++) {
            if (splashes.length > 80) break; // 限制最大數量防止手機卡頓
            const r = 7 + Math.random() * 12;
            splashes.push(new SplashBubble(x, y, vx, vy, r));
        }
    }

    function loop() {
        // 使用純透明清空背景，避免在手機高對比濾鏡下累積色塊造成黑屏
        ctx.clearRect(0, 0, W, H);

        // 平滑傾斜角度 (EMA 濾波，防止抖動)
        currentTiltX += (tiltX - currentTiltX) * 0.1;
        currentTiltY += (tiltY - currentTiltY) * 0.1;

        // 計算重力加速度方向
        // 左右晃動 tiltX 對應到 x 重力 (gamma)
        // 上下傾斜 (我們把手機直立 beta = 60 當作平衡點，向上傾斜或向下傾斜都會改變垂直重力)
        const gx = currentTiltX * 0.14;
        const gy = (currentTiltY - 60) * 0.14 + 0.35; // 預設帶有 0.35 的向下重力

        // 偵測快速晃動手機 (重力突然變化大於閾值，噴濺墨水)
        const deltaX = tiltX - lastTiltX;
        const deltaY = tiltY - lastTiltY;
        const shakeForce = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        if (shakeForce > 20) {
            // 在每個大墨團的中心隨機產生小飛濺墨滴
            blobs.forEach(b => {
                spawnSplash(b.x, b.y, (Math.random() - 0.5) * 12, (Math.random() - 0.5) * 12, 2);
            });
        }
        lastTiltX = tiltX;
        lastTiltY = tiltY;

        // 更新與繪製大墨滴
        blobs.forEach(b => {
            b.update(gx, gy);
            b.draw();
        });

        // 更新與繪製小噴濺
        splashes = splashes.filter(s => s.life > 0);
        splashes.forEach(s => {
            s.update(gx, gy);
            s.draw();
        });

        requestAnimationFrame(loop);
    }

    window.addEventListener('resize', () => {
        W = window.innerWidth; H = window.innerHeight;
        canvas.width = W; canvas.height = H;
    });

    loop();
}

// ============================================================
// 8.5 PARTICLE INK CANVAS (桌面版滑鼠粒子水墨)
// ============================================================
function initInk() {
    const canvas = document.getElementById('ink-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    // 在低耗能模式或減慢動畫偏好下停用
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) { canvas.style.display = 'none'; return; }

    // 手機版 (小於 768px) 乾淨移除，不啟動此物理流體背景，節省電力與效能
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
        canvas.style.display = 'none';
        return;
    }

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
buildSubTabs();
buildPortfolio();
observeReveal();
initInk();
initCursor();


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
        const mx = e.clientX;
        const my = e.clientY;

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

    // 3. Smooth Card Parallax (Optimized)
    function applyParallax() {
        const cards = document.querySelectorAll('.portfolio-item, .skill-card, .featured-item');
        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const xc = rect.width / 2;
                const yc = rect.height / 2;
                const dx = (x - xc) / (rect.width / 2);
                const dy = (y - yc) / (rect.height / 2);
                
                // 更柔順的傾斜計算，縮小角度並增加透視感
                const rotateY = dx * 10; // Max tilt 10deg
                const rotateX = -dy * 10;
                
                card.style.transform = `perspective(1200px) rotateY(${rotateY}deg) rotateX(${rotateX}deg) translateY(-10px) scale(1.02)`;
                card.style.transition = 'transform 0.1s linear'; // 移動時使用極短的 linear 對齊手指
            });

            // 離開時平滑回正 (這是消除抖動的關鍵)
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1200px) rotateY(0deg) rotateX(0deg) translateY(0) scale(1)';
                card.style.transition = 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)'; 
            });

            // 進入時也給予一點過渡
            card.addEventListener('mouseenter', () => {
                card.style.transition = 'transform 0.4s cubic-bezier(0.23, 1, 0.32, 1)';
            });
        });
    }
    applyParallax();    // 4. Tab Spotlight Effect
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            btn.style.setProperty('--x', `${x}px`);
            btn.style.setProperty('--y', `${y}px`);
        });
    });
}
initTextEffects();

// ============================================================
// 13. CONTENT PROTECTION (Right-click & shortcuts)
// ============================================================
function initProtection() {
    // 1. 禁止右鍵選單 (Context Menu)
    document.addEventListener('contextmenu', e => e.preventDefault());

    // 2. 禁止鍵盤快捷鍵 (防開發者工具與存擋)
    document.addEventListener('keydown', e => {
        // F12
        if (e.key === 'F12') e.preventDefault();
        
        // Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C (DevTools)
        if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) {
            e.preventDefault();
        }
        
        // Ctrl+U (View Source)
        if (e.ctrlKey && (e.key === 'u' || e.key === 'U')) e.preventDefault();
        
        // Ctrl+S (Save Page)
        if (e.ctrlKey && (e.key === 's' || e.key === 'S')) e.preventDefault();
    });

    // 3. 禁止拖拽圖片 (加強 CSS 部分)
    document.addEventListener('dragstart', e => {
        if (e.target.nodeName === 'IMG' || e.target.nodeName === 'VIDEO') {
            e.preventDefault();
        }
    }, false);
}
initProtection();
