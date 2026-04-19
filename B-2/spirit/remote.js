// Centralized Back Button (popstate) Handler for Mobile Devices & Browsers
window.addEventListener('popstate', (event) => { 
    if (document.getElementById('infoModalOverlay').classList.contains('active')) {
        document.getElementById('infoModalOverlay').classList.remove('active');
        document.getElementById('infoToggle').focus();
    }
    document.querySelectorAll('.app-grid.expanded-grid').forEach(grid => grid.classList.remove('expanded-grid')); 
    document.querySelectorAll('.cat-section.hidden-cat').forEach(cat => cat.classList.remove('hidden-cat')); 
    document.querySelectorAll('.see-all-btn').forEach(btn => { 
        btn.innerHTML = 'VIEW ALL <svg viewBox="0 0 24 24" style="width:12px;fill:currentColor;margin-left:2px;"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/></svg>'; 
    }); 
});

// TV Remote Support – Keyboard Setup
document.addEventListener('keydown', function(e) {
    const focused = document.activeElement;
    const key = e.key;
    const infoModalOverlay = document.getElementById('infoModalOverlay');

    if (typeof isAppLocked !== 'undefined' && isAppLocked) {
        if (key === 'Enter') {
            e.preventDefault();
            const authSubmitBtn = document.getElementById('authSubmitBtn');
            const authInput = document.getElementById('authInput');
            if(focused === authSubmitBtn || focused === authInput) { verifyPin(); }
        }
        return; 
    }

    if (key === 'Backspace' || key === 'Escape') {
        if (infoModalOverlay.classList.contains('active') || document.querySelector('.expanded-grid')) { 
            e.preventDefault(); history.back(); return; 
        }
    }

    if (key === 'Enter') { if (focused && focused !== document.body) { e.preventDefault(); focused.click(); return; } }
    if (infoModalOverlay.classList.contains('active')) return;
    if (!['ArrowRight', 'ArrowLeft', 'ArrowDown', 'ArrowUp'].includes(key)) return;
    
    e.preventDefault();
    const isCard = focused && focused.classList.contains('channel-card');
    
    if (isCard) {
        const grid = focused.closest('.app-grid');
        const allCards = Array.from(grid ? grid.querySelectorAll('.channel-card') : []);
        const idx = allCards.indexOf(focused);

        if (key === 'ArrowRight') { const next = allCards[idx + 1]; if (next) { next.focus(); scrollCardIntoView(next); return; } focusNextCategory(grid, 'next'); return; }
        if (key === 'ArrowLeft') { const prev = allCards[idx - 1]; if (prev) { prev.focus(); scrollCardIntoView(prev); return; } focusNextCategory(grid, 'prev'); return; }
        if (key === 'ArrowDown') { focusNextCategory(grid, 'next'); return; }
        if (key === 'ArrowUp') { focusNextCategory(grid, 'prev'); return; }
    } else {
        const firstCard = document.querySelector('.channel-card:not(.hidden-cat .channel-card)');
        if (firstCard) { firstCard.focus(); scrollCardIntoView(firstCard); }
    }
});

function scrollCardIntoView(card) { card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' }); }
function focusNextCategory(currentGrid, direction) {
    const allGrids = Array.from(document.querySelectorAll('.cat-section:not(.hidden-cat) .app-grid'));
    const gridIdx = allGrids.indexOf(currentGrid);
    let targetGrid = null;
    if (direction === 'next' && gridIdx < allGrids.length - 1) { targetGrid = allGrids[gridIdx + 1]; } 
    else if (direction === 'prev' && gridIdx > 0) { targetGrid = allGrids[gridIdx - 1]; }

    if (targetGrid) {
        const cards = targetGrid.querySelectorAll('.channel-card');
        const target = direction === 'next' ? cards[0] : cards[cards.length - 1];
        if (target) { target.focus(); scrollCardIntoView(target); target.closest('.cat-section')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); }
    }
}

const cardObserver = new MutationObserver(() => { document.querySelectorAll('.channel-card').forEach(card => { if (!card.getAttribute('tabindex')) card.setAttribute('tabindex', '0'); }); });
const chContainer = document.getElementById('channelsContainer');
if (chContainer) { cardObserver.observe(chContainer, { childList: true, subtree: true }); }