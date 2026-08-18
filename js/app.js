/* ========================================
   阅剧云 — 应用逻辑
   ======================================== */

(function () {
    'use strict';

    // ---------- DOM 工具 ----------
    const $ = (sel, ctx = document) => ctx.querySelector(sel);
    const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

    // ---------- 状态管理 ----------
    const state = {
        novelFilter: '全部',
        dramaFilter: '全部',
        novelDisplayCount: 8,
        dramaDisplayCount: 8,
        searchQuery: '',
    };

    // ---------- 渲染：分类 ----------
    function renderCategories() {
        const grid = $('#categoryGrid');
        grid.innerHTML = categories.map(cat => `
            <div class="category-card" data-cat="${cat.name}">
                <div class="category-icon">${cat.icon}</div>
                <div class="category-name">${cat.name}</div>
                <div class="category-count">${cat.count.toLocaleString()}+ 本</div>
            </div>
        `).join('');

        $$('.category-card', grid).forEach(card => {
            card.addEventListener('click', () => {
                const cat = card.dataset.cat;
                state.novelFilter = cat;
                state.dramaFilter = cat;
                // 更新 Tab 高亮
                updateNovelTabs(cat);
                updateDramaTabs(cat);
                renderNovels();
                renderDramas();
                // 滚动到对应区域
                $('#novels').scrollIntoView({ behavior: 'smooth' });
            });
        });
    }

    // ---------- 渲染：小说 Tabs ----------
    function renderNovelTabs() {
        const tabs = $('#novelTabs');
        const allCats = ['全部', ...new Set(novels.map(n => n.category))];
        tabs.innerHTML = allCats.map((cat, i) => `
            <button class="tab-btn ${i === 0 ? 'active' : ''}" data-cat="${cat}">${cat}</button>
        `).join('');

        $$('.tab-btn', tabs).forEach(btn => {
            btn.addEventListener('click', () => {
                state.novelFilter = btn.dataset.cat;
                state.novelDisplayCount = 8;
                updateNovelTabs(btn.dataset.cat);
                renderNovels();
            });
        });
    }

    function updateNovelTabs(activeCat) {
        $$('.tab-btn', $('#novelTabs')).forEach(btn => {
            btn.classList.toggle('active', btn.dataset.cat === activeCat);
        });
    }

    // ---------- 渲染：短剧 Tabs ----------
    function renderDramaTabs() {
        const tabs = $('#dramaTabs');
        const allCats = ['全部', ...new Set(dramas.map(d => d.category))];
        tabs.innerHTML = allCats.map((cat, i) => `
            <button class="tab-btn ${i === 0 ? 'active' : ''}" data-cat="${cat}">${cat}</button>
        `).join('');

        $$('.tab-btn', tabs).forEach(btn => {
            btn.addEventListener('click', () => {
                state.dramaFilter = btn.dataset.cat;
                state.dramaDisplayCount = 8;
                updateDramaTabs(btn.dataset.cat);
                renderDramas();
            });
        });
    }

    function updateDramaTabs(activeCat) {
        $$('.tab-btn', $('#dramaTabs')).forEach(btn => {
            btn.classList.toggle('active', btn.dataset.cat === activeCat);
        });
    }

    // ---------- 过滤逻辑 ----------
    function getFilteredNovels() {
        let list = novels;
        if (state.novelFilter !== '全部') {
            list = list.filter(n => n.category === state.novelFilter);
        }
        if (state.searchQuery) {
            const q = state.searchQuery.toLowerCase();
            list = list.filter(n =>
                n.title.toLowerCase().includes(q) ||
                n.author.toLowerCase().includes(q) ||
                n.tags.some(t => t.includes(q))
            );
        }
        return list;
    }

    function getFilteredDramas() {
        let list = dramas;
        if (state.dramaFilter !== '全部') {
            list = list.filter(d => d.category === state.dramaFilter);
        }
        if (state.searchQuery) {
            const q = state.searchQuery.toLowerCase();
            list = list.filter(d =>
                d.title.toLowerCase().includes(q) ||
                d.actor.toLowerCase().includes(q) ||
                d.tags.some(t => t.includes(q))
            );
        }
        return list;
    }

    // ---------- 渲染：小说卡片 ----------
    function renderNovels() {
        const grid = $('#novelGrid');
        const list = getFilteredNovels().slice(0, state.novelDisplayCount);

        if (list.length === 0) {
            grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:60px 0;color:var(--text-muted);">😢 没有找到相关小说</div>';
            return;
        }

        grid.innerHTML = list.map(novel => `
            <div class="card" data-type="novel" data-title="${novel.title}">
                <div class="card-cover" style="background:${novel.cover}">
                    <span class="card-cover-text">${novel.coverText}</span>
                    ${novel.badge ? `<span class="card-badge ${novel.badge}">${novel.badge === 'hot' ? '🔥 热门' : novel.badge === 'top' ? '⭐ 经典' : '✨ 新作'}</span>` : ''}
                </div>
                <div class="card-body">
                    <div class="card-title">${novel.title}</div>
                    <div class="card-author">${novel.author} · ${novel.platform}</div>
                    <div class="card-tags">
                        ${novel.tags.map(t => `<span class="card-tag">${t}</span>`).join('')}
                    </div>
                    <div class="card-meta">
                        <div class="card-rating"><span class="star">★</span> ${novel.rating}</div>
                        <div class="card-views">${novel.views}</div>
                    </div>
                </div>
            </div>
        `).join('');

        // 绑定点击
        $$('.card', grid).forEach(card => {
            card.addEventListener('click', () => {
                const title = card.dataset.title;
                const novel = novels.find(n => n.title === title);
                if (novel) openModal({ ...novel, type: 'novel' });
            });
        });

        // 加载更多按钮
        const total = getFilteredNovels().length;
        const btn = $('#loadMoreNovels');
        btn.style.display = state.novelDisplayCount >= total ? 'none' : 'inline-flex';
    }

    // ---------- 渲染：短剧卡片 ----------
    function renderDramas() {
        const grid = $('#dramaGrid');
        const list = getFilteredDramas().slice(0, state.dramaDisplayCount);

        if (list.length === 0) {
            grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:60px 0;color:var(--text-muted);">😢 没有找到相关短剧</div>';
            return;
        }

        grid.innerHTML = list.map(drama => `
            <div class="card" data-type="drama" data-title="${drama.title}">
                <div class="card-cover" style="background:${drama.cover}">
                    <span class="card-cover-text">${drama.coverText}</span>
                    ${drama.badge ? `<span class="card-badge ${drama.badge}">${drama.badge === 'hot' ? '🔥 热门' : drama.badge === 'top' ? '⭐ 经典' : '✨ 新作'}</span>` : ''}
                </div>
                <div class="card-body">
                    <div class="card-title">${drama.title}</div>
                    <div class="card-author">${drama.actor} · ${drama.platform}</div>
                    <div class="card-tags">
                        ${drama.tags.map(t => `<span class="card-tag">${t}</span>`).join('')}
                    </div>
                    <div class="card-meta">
                        <div class="card-rating"><span class="star">★</span> ${drama.rating}</div>
                        <div class="card-views">${drama.views}</div>
                    </div>
                </div>
            </div>
        `).join('');

        $$('.card', grid).forEach(card => {
            card.addEventListener('click', () => {
                const title = card.dataset.title;
                const drama = dramas.find(d => d.title === title);
                if (drama) openModal({ ...drama, type: 'drama' });
            });
        });

        const total = getFilteredDramas().length;
        const btn = $('#loadMoreDramas');
        btn.style.display = state.dramaDisplayCount >= total ? 'none' : 'inline-flex';
    }

    // ---------- 渲染：排行榜 ----------
    function renderRanking() {
        // 小说 TOP10
        const novelRank = [...novels].sort((a, b) => b.rating - a.rating).slice(0, 10);
        $('#novelRanking').innerHTML = novelRank.map((n, i) => {
            const cls = i === 0 ? 'gold' : i === 1 ? 'silver' : i === 2 ? 'bronze' : '';
            return `
                <li data-type="novel" data-title="${n.title}">
                    <span class="rank-num ${cls}">${i + 1}</span>
                    <div class="rank-info">
                        <div class="rank-name">${n.title}</div>
                        <div class="rank-detail">${n.author} · ${n.tags.slice(0, 2).join('/')}</div>
                    </div>
                    <span class="rank-score">${n.rating}</span>
                </li>
            `;
        }).join('');

        // 短剧 TOP10
        const dramaRank = [...dramas].sort((a, b) => b.rating - a.rating).slice(0, 10);
        $('#dramaRanking').innerHTML = dramaRank.map((d, i) => {
            const cls = i === 0 ? 'gold' : i === 1 ? 'silver' : i === 2 ? 'bronze' : '';
            return `
                <li data-type="drama" data-title="${d.title}">
                    <span class="rank-num ${cls}">${i + 1}</span>
                    <div class="rank-info">
                        <div class="rank-name">${d.title}</div>
                        <div class="rank-detail">${d.actor} · ${d.tags.slice(0, 2).join('/')}</div>
                    </div>
                    <span class="rank-score">${d.rating}</span>
                </li>
            `;
        }).join('');

        // 排行榜点击
        $$('.ranking-list li').forEach(li => {
            li.addEventListener('click', () => {
                const title = li.dataset.title;
                const type = li.dataset.type;
                const item = type === 'novel' ? novels.find(n => n.title === title) : dramas.find(d => d.title === title);
                if (item) openModal({ ...item, type });
            });
        });
    }

    // ---------- 弹窗 ----------
    function openModal(item) {
        const overlay = $('#modalOverlay');
        const body = $('#modalBody');
        const typeLabel = item.type === 'novel' ? '📖 小说' : '🎬 短剧';
        const subInfo = item.type === 'novel'
            ? `${item.author} · ${item.platform}`
            : `${item.actor} · ${item.platform}`;

        body.innerHTML = `
            <div class="modal-cover" style="background:${item.cover}">
                <span class="modal-cover-text">${item.coverText}</span>
            </div>
            <div class="modal-content">
                <div class="modal-title">${item.title}</div>
                <div class="modal-subtitle">${typeLabel} · ${subInfo}</div>
                <div class="modal-rating">
                    <span class="star" style="color:var(--accent);font-size:1.2rem;">★</span>
                    <span class="score">${item.rating}</span>
                    <span style="color:var(--text-muted);font-size:.85rem;margin-left:8px;">${item.views}</span>
                </div>
                <div class="modal-tags">
                    ${item.tags.map(t => `<span class="modal-tag">${t}</span>`).join('')}
                </div>
                <div class="modal-desc">${item.desc}</div>
                <div class="modal-info">
                    <div class="modal-info-row">
                        <span class="modal-info-label">类型</span>
                        <span class="modal-info-value">${item.type === 'novel' ? '小说' : '短剧'}</span>
                    </div>
                    <div class="modal-info-row">
                        <span class="modal-info-label">分类</span>
                        <span class="modal-info-value">${item.category}</span>
                    </div>
                    <div class="modal-info-row">
                        <span class="modal-info-label">年份</span>
                        <span class="modal-info-value">${item.year}</span>
                    </div>
                    <div class="modal-info-row">
                        <span class="modal-info-label">平台</span>
                        <span class="modal-info-value">${item.platform}</span>
                    </div>
                </div>
            </div>
        `;
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        $('#modalOverlay').classList.remove('active');
        document.body.style.overflow = '';
    }

    // ---------- 搜索 ----------
    function initSearch() {
        const input = $('#searchInput');
        let debounceTimer;

        input.addEventListener('input', () => {
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => {
                state.searchQuery = input.value.trim();
                state.novelDisplayCount = 8;
                state.dramaDisplayCount = 8;
                renderNovels();
                renderDramas();
            }, 300);
        });
    }

    // ---------- 导航滚动效果 ----------
    function initNavScroll() {
        const navbar = $('#navbar');
        const backToTop = $('#backToTop');
        const sections = $$('section[id]');
        const navLinks = $$('.nav-link');

        window.addEventListener('scroll', () => {
            const y = window.scrollY;

            // 导航栏样式
            navbar.classList.toggle('scrolled', y > 50);

            // 回到顶部按钮
            backToTop.classList.toggle('visible', y > 400);

            // 当前 section 高亮
            let current = '';
            sections.forEach(sec => {
                if (y >= sec.offsetTop - 120) current = sec.id;
            });
            navLinks.forEach(link => {
                link.classList.toggle('active', link.dataset.section === current);
            });
        });

        // 平滑滚动
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const target = $('#' + link.dataset.section);
                if (target) target.scrollIntoView({ behavior: 'smooth' });
                $('#navMenu').classList.remove('open');
            });
        });

        // 回到顶部
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ---------- 移动端菜单 ----------
    function initMobileMenu() {
        const toggle = $('#navToggle');
        const menu = $('#navMenu');
        toggle.addEventListener('click', () => {
            menu.classList.toggle('open');
        });
    }

    // ---------- 数字递增动画 ----------
    function animateNumbers() {
        const nums = $$('.stat-num, .stat-number');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.dataset.animated) {
                    entry.target.dataset.animated = 'true';
                    const target = parseInt(entry.target.dataset.target);
                    animateValue(entry.target, 0, target, 1500);
                }
            });
        }, { threshold: 0.3 });

        nums.forEach(n => observer.observe(n));
    }

    function animateValue(el, start, end, duration) {
        const startTime = performance.now();
        const suffix = el.classList.contains('stat-plus') ? '' : '';
        function tick(now) {
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(start + (end - start) * eased);
            el.textContent = current.toLocaleString();
            if (progress < 1) requestAnimationFrame(tick);
            else el.textContent = end.toLocaleString();
        }
        requestAnimationFrame(tick);
    }

    // ---------- 加载更多 ----------
    function initLoadMore() {
        $('#loadMoreNovels').addEventListener('click', () => {
            state.novelDisplayCount += 8;
            renderNovels();
        });
        $('#loadMoreDramas').addEventListener('click', () => {
            state.dramaDisplayCount += 8;
            renderDramas();
        });
    }

    // ---------- 弹窗关闭 ----------
    function initModal() {
        $('#modalClose').addEventListener('click', closeModal);
        $('#modalOverlay').addEventListener('click', (e) => {
            if (e.target === $('#modalOverlay')) closeModal();
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeModal();
        });
    }

    // ---------- 初始化 ----------
    function init() {
        renderCategories();
        renderNovelTabs();
        renderDramaTabs();
        renderNovels();
        renderDramas();
        renderRanking();
        initSearch();
        initNavScroll();
        initMobileMenu();
        initLoadMore();
        initModal();
        animateNumbers();
    }

    // DOM 加载完成后初始化
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
