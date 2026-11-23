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
        if (themeIcon) themeIcon.textContent = mode === 'light' ? '\u2600' : '\u263D';
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

    // 6. Modal Reader (Works Case Study & Vibe Logs — built safely via DOM/textContent)
    const modal = document.getElementById('jnModal');
    const modalKicker = document.getElementById('jnModalKicker');
    const modalBody = document.getElementById('jnModalBody');
    const modalClose = document.getElementById('jnModalClose');

    function openModal(kicker, contentFragment) {
        if (!modal || !modalBody) return;
        if (modalKicker) modalKicker.textContent = kicker;
        modalBody.replaceChildren(contentFragment);
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
            const title = card.getAttribute('data-work-title') || '';
            const cat = card.getAttribute('data-work-cat') || '';
            const year = card.getAttribute('data-work-year') || '';
            const summary = card.getAttribute('data-work-summary') || '';
            const prompt = card.getAttribute('data-work-prompt') || '';
            const stack = card.getAttribute('data-work-stack') || '';
            const img = card.getAttribute('data-work-img') || '';

            const frag = document.createDocumentFragment();

            if (img) {
                const imgEl = document.createElement('img');
                imgEl.src = img;
                imgEl.alt = title;
                frag.appendChild(imgEl);
            }

            const heading = document.createElement('h2');
            heading.textContent = title;
            frag.appendChild(heading);

            const summaryEl = document.createElement('p');
            summaryEl.className = 'jn-muted';
            summaryEl.style.marginBottom = '0.85rem';
            summaryEl.textContent = summary;
            frag.appendChild(summaryEl);

            const promptBox = document.createElement('div');
            promptBox.className = 'jn-modal-prompt-box';
            const promptLabel = document.createElement('strong');
            promptLabel.className = 'jn-cyan-text';
            promptLabel.textContent = 'VIBE PROMPT ARCHITECTURE:';
            promptBox.appendChild(promptLabel);
            promptBox.appendChild(document.createElement('br'));
            promptBox.appendChild(document.createTextNode(prompt));
            frag.appendChild(promptBox);

            const stackEl = document.createElement('p');
            stackEl.className = 'jn-mono jn-xs jn-muted';
            stackEl.textContent = `STACK: ${stack}`;
            frag.appendChild(stackEl);

            openModal(`${cat.toUpperCase()} // ${year}`, frag);
        });
    });

    document.querySelectorAll('.jn-open-log').forEach(row => {
        const trigger = () => {
            const code = row.getAttribute('data-log-code') || '';
            const cat = row.getAttribute('data-log-cat') || '';
            const date = row.getAttribute('data-log-date') || '';
            const title = row.getAttribute('data-log-title') || '';
            const meta = row.getAttribute('data-log-meta') || '';
            const body = row.getAttribute('data-log-body') || '';

            const frag = document.createDocumentFragment();

            const heading = document.createElement('h2');
            heading.textContent = title;
            frag.appendChild(heading);

            const metaEl = document.createElement('p');
            metaEl.className = 'jn-mono jn-xs jn-cyan-text';
            metaEl.style.marginBottom = '1.15rem';
            metaEl.textContent = meta;
            frag.appendChild(metaEl);

            const bodyWrap = document.createElement('div');
            body.split('\n\n').forEach(paragraphText => {
                const p = document.createElement('p');
                p.style.marginBottom = '0.9rem';
                p.textContent = paragraphText;
                bodyWrap.appendChild(p);
            });
            frag.appendChild(bodyWrap);

            openModal(`${code} · ${cat.toUpperCase()} · ${date}`, frag);
        };
        row.addEventListener('click', trigger);
        row.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                trigger();
            }
        });
    });

    // 7. Copy Email
    const copyBtn = document.getElementById('jnCopyEmailBtn');
    if (copyBtn) {
        copyBtn.addEventListener('click', () => {
            const email = copyBtn.getAttribute('data-email');
            if (navigator.clipboard && email) {
                navigator.clipboard.writeText(email).then(() => {
                    showToast(`Copied ${email} to clipboard`);
                });
            } else if (email) {
                showToast(`Email: ${email}`);
            }
        });
    }
});
