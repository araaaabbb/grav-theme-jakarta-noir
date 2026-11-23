document.addEventListener('DOMContentLoaded', () => {
    const htmlEl = document.documentElement;
    const toast = document.getElementById('jnToast');
    let toastTimer;

    function showToast(message) {
        if (!toast) return;
        toast.textContent = message;
        toast.classList.add('show');
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => toast.classList.remove('show'), 3000);
    }

    // 1. Light / Dark Mode Switcher
    const themeToggle = document.getElementById('jnThemeToggle');
    const themeIcon = document.getElementById('jnThemeIcon');
    const themeText = document.getElementById('jnThemeText');

    function syncThemeUI(mode) {
        if (themeIcon) themeIcon.innerHTML = mode === 'light' ? '&#9728;' : '&#9789;';
        if (themeText) themeText.textContent = mode === 'light' ? 'Light' : 'Dark';
    }
    syncThemeUI(htmlEl.getAttribute('data-theme') || 'dark');

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const current = htmlEl.getAttribute('data-theme') || 'dark';
            const next = current === 'dark' ? 'light' : 'dark';
            htmlEl.setAttribute('data-theme', next);
            try { localStorage.setItem('jn-color-mode', next); } catch (e) {}
            syncThemeUI(next);
            showToast(`Switched to ${next.toUpperCase()} mode`);
        });
    }

    // 2. Inspect Vibe Prompts Overlay Toggle
    const promptToggle = document.getElementById('jnPromptToggle');
    if (promptToggle) {
        promptToggle.addEventListener('click', () => {
            const active = document.body.classList.toggle('show-prompts');
            promptToggle.setAttribute('aria-pressed', active ? 'true' : 'false');
            showToast(active ? 'Vibe Prompt specs visible' : 'Vibe Prompt specs hidden');
        });
    }

    // 3. Mobile Navigation Drawer
    const mobileBtn = document.getElementById('jnMobileBtn');
    const navLinks = document.getElementById('jnNavLinks');
    if (mobileBtn && navLinks) {
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('open');
        });
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => navLinks.classList.remove('open'));
        });
    }

    // 4. Featured Artwork Reel Switcher [01] [02] [03]
    const reelTabs = document.querySelectorAll('.jn-reel-tab');
    const reelSlides = document.querySelectorAll('.jn-reel-slide');
    reelTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const idx = tab.getAttribute('data-reel-idx');
            reelTabs.forEach(t => t.classList.remove('active'));
            reelSlides.forEach(s => s.classList.remove('active'));
            tab.classList.add('active');
            const target = document.querySelector(`.jn-reel-slide[data-reel-slide="${idx}"]`);
            if (target) target.classList.add('active');
        });
    });

    // 5. Works Category Filtering
    const filterBtns = document.querySelectorAll('.jn-filter-btn');
    const workCards = document.querySelectorAll('.jn-work-card');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.getAttribute('data-filter');
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            workCards.forEach(card => {
                const cat = card.getAttribute('data-category');
                card.style.display = (filter === 'all' || cat === filter) ? '' : 'none';
            });
        });
    });

    // 6. Modal Reader (Works Case Study & Vibe Logs)
    const modal = document.getElementById('jnModal');
    const modalKicker = document.getElementById('jnModalKicker');
    const modalBody = document.getElementById('jnModalBody');
    const modalClose = document.getElementById('jnModalClose');

    function openModal(kicker, htmlContent) {
        if (!modal || !modalBody) return;
        if (modalKicker) modalKicker.textContent = kicker;
        modalBody.innerHTML = htmlContent;
        modal.classList.add('open');
        modal.setAttribute('aria-hidden', 'false');
    }

    function closeModal() {
        if (!modal) return;
        modal.classList.remove('open');
        modal.setAttribute('aria-hidden', 'true');
    }

    if (modalClose) modalClose.addEventListener('click', closeModal);
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
    }
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });

    document.querySelectorAll('.jn-open-work').forEach(btn => {
        btn.addEventListener('click', () => {
            const card = btn.closest('.jn-work-card');
            if (!card) return;
            const title = card.getAttribute('data-work-title');
            const cat = card.getAttribute('data-work-cat');
            const year = card.getAttribute('data-work-year');
            const summary = card.getAttribute('data-work-summary');
            const prompt = card.getAttribute('data-work-prompt');
            const stack = card.getAttribute('data-work-stack');
            const img = card.getAttribute('data-work-img');

            const imgHtml = img ? `<img src="${img}" alt="${title}" />` : '';
            openModal(`${cat.toUpperCase()} // ${year}`, `
                ${imgHtml}
                <h2>${title}</h2>
                <p class="jn-muted" style="margin-bottom:0.85rem;">${summary}</p>
                <div class="jn-modal-prompt-box">
                    <strong class="jn-cyan-text">VIBE PROMPT ARCHITECTURE:</strong><br/>
                    ${prompt}
                </div>
                <p class="jn-mono jn-xs jn-muted">STACK: ${stack}</p>
            `);
        });
    });

    document.querySelectorAll('.jn-open-log').forEach(row => {
        const trigger = () => {
            const code = row.getAttribute('data-log-code');
            const cat = row.getAttribute('data-log-cat');
            const date = row.getAttribute('data-log-date');
            const title = row.getAttribute('data-log-title');
            const meta = row.getAttribute('data-log-meta');
            const body = row.getAttribute('data-log-body');

            const paragraphs = body.split('\n\n').map(p => `<p style="margin-bottom:0.9rem;">${p}</p>`).join('');
            openModal(`${code} · ${cat.toUpperCase()} · ${date}`, `
                <h2>${title}</h2>
                <p class="jn-mono jn-xs jn-cyan-text" style="margin-bottom:1.15rem;">${meta}</p>
                <div>${paragraphs}</div>
            `);
        };
        row.addEventListener('click', trigger);
        row.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                trigger();
            }
        });
    });

    // 7. Copy Email & Brief Form
    const copyBtn = document.getElementById('jnCopyEmailBtn');
    if (copyBtn) {
        copyBtn.addEventListener('click', () => {
            const email = copyBtn.getAttribute('data-email');
            if (navigator.clipboard && email) {
                navigator.clipboard.writeText(email).then(() => {
                    showToast(`Copied ${email} to clipboard`);
                });
            } else {
                showToast(`Email: ${email}`);
            }
        });
    }

    const contactForm = document.getElementById('jnContactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const fd = new FormData(contactForm);
            const name = fd.get('name') || 'Partner';
            const scope = fd.get('scope') || 'Project';
            showToast(`Brief received from ${name} (${scope}).`);
            contactForm.reset();
        });
    }
});
