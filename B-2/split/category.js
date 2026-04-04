// Category Expand Logic (Observer)
const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
            if (node.nodeType === 1 && node.classList.contains('cat-section')) {
                const oldTitle = node.querySelector('.cat-title');
                const grid = node.querySelector('.app-grid');

                if (oldTitle && !oldTitle.hasAttribute('data-modified')) {
                    oldTitle.setAttribute('data-modified', 'true');
                    const titleText = oldTitle.innerText || oldTitle.textContent;

                    const headerWrapper = document.createElement('div');
                    headerWrapper.className = 'netflix-cat-header';

                    const newTitle = document.createElement('div');
                    newTitle.className = 'netflix-cat-title';
                    newTitle.innerText = titleText;

                    const seeAllBtn = document.createElement('button');
                    seeAllBtn.className = 'see-all-btn';
                    seeAllBtn.innerHTML = 'VIEW ALL <svg viewBox="0 0 24 24" style="width:12px;fill:currentColor;margin-left:2px;"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/></svg>';

                    seeAllBtn.onclick = () => {
                        const allCategories = document.querySelectorAll('.cat-section');
                        if (grid.classList.contains('expanded-grid')) {
                            history.back();
                        } else {
                            grid.classList.add('expanded-grid');
                            allCategories.forEach(cat => {
                                if(cat !== node) cat.classList.add('hidden-cat');
                            });
                            seeAllBtn.innerHTML = '<svg viewBox="0 0 24 24" style="width:12px;fill:currentColor;transform:rotate(180deg);margin-right:2px;"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/></svg> RETURN';
                            document.querySelector('.channels-scroll-area').scrollTo({ top: 0, behavior: 'smooth' });
                            history.pushState({ isCategoryExpanded: true }, "", "#category");
                        }
                    };

                    headerWrapper.appendChild(newTitle);
                    headerWrapper.appendChild(seeAllBtn);
                    node.insertBefore(headerWrapper, grid);
                }
            }
        });
    });
});

// Wait slightly to ensure layout.js has injected the #channelsContainer
setTimeout(() => {
    const channelsContainer = document.getElementById('channelsContainer');
    if(channelsContainer) observer.observe(channelsContainer, { childList: true, subtree: true });
}, 500);

window.addEventListener('popstate', (event) => {
    document.querySelectorAll('.app-grid.expanded-grid').forEach(grid => grid.classList.remove('expanded-grid'));
    document.querySelectorAll('.cat-section.hidden-cat').forEach(cat => cat.classList.remove('hidden-cat'));
    document.querySelectorAll('.see-all-btn').forEach(btn => {
        btn.innerHTML = 'VIEW ALL <svg viewBox="0 0 24 24" style="width:12px;fill:currentColor;margin-left:2px;"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/></svg>';
    });
});