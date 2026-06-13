
   
        /* --- Core System Light / Dark Theme Tracker --- */
        const themeToggleBtn = document.getElementById('theme-toggle');
        const activeSystemTheme = localStorage.getItem('theme') || 'dark';
        
        document.documentElement.setAttribute('data-theme', activeSystemTheme);

        themeToggleBtn.addEventListener('click', () => {
            const currentThemeNode = document.documentElement.getAttribute('data-theme');
            let structuralThemeTarget = 'dark';
            
            if (currentThemeNode === 'dark') {
                structuralThemeTarget = 'light';
            }
            
            document.documentElement.setAttribute('data-theme', structuralThemeTarget);
            localStorage.setItem('theme', structuralThemeTarget);
        });

        /* --- Fully Responsive Navigation Controller --- */
        const mobileMenuTrigger = document.getElementById('mobile-menu');
        const navigationLinksFrame = document.querySelector('.nav-links');
        const specificLinkItems = document.querySelectorAll('.nav-links a');

        mobileMenuTrigger.addEventListener('click', () => {
            mobileMenuTrigger.classList.toggle('active');
            navigationLinksFrame.classList.toggle('active');
        });

        specificLinkItems.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuTrigger.classList.remove('active');
                navigationLinksFrame.classList.remove('active');
            });
        });

        /* --- System Automated Typewriter Handler --- */
        const dynamicTextNode = document.querySelector('.typewriter');
        if (dynamicTextNode) {
            const arrayWords = JSON.parse(dynamicTextNode.getAttribute('data-words') || '[]');
            let structuralWordPointer = 0, operationalCharIndex = 0, toggleDeletionState = false;

            function processTypeEngine() {
                if (arrayWords.length === 0) return;
                const singleTargetWord = arrayWords[structuralWordPointer];
                
                dynamicTextNode.textContent = toggleDeletionState 
                    ? singleTargetWord.substring(0, operationalCharIndex--) 
                    : singleTargetWord.substring(0, operationalCharIndex++);

                if (!toggleDeletionState && operationalCharIndex === singleTargetWord.length + 1) { 
                    toggleDeletionState = true; 
                    setTimeout(processTypeEngine, 1800); 
                } else if (toggleDeletionState && operationalCharIndex === 0) { 
                    toggleDeletionState = false; 
                    structuralWordPointer = (structuralWordPointer + 1) % arrayWords.length; 
                    setTimeout(processTypeEngine, 600); 
                } else { 
                    setTimeout(processTypeEngine, toggleDeletionState ? 40 : 110); 
                }
            }
            document.addEventListener('DOMContentLoaded', () => setTimeout(processTypeEngine, 500));
        }

        /* --- UI Catalog Interactive Filtering Rules Engine --- */
        const controlButtons = document.querySelectorAll('.filter-btn');
        const dynamicProductCards = document.querySelectorAll('.software-card');

        controlButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                controlButtons.forEach(node => node.classList.remove('active'));
                btn.classList.add('active');

                const parsingCategory = btn.getAttribute('data-filter');

                dynamicProductCards.forEach(card => {
                    card.style.transform = 'scale(0.95)';
                    card.style.opacity = '0';
                    
                    setTimeout(() => {
                        if (parsingCategory === 'all' || card.getAttribute('data-category') === parsingCategory) {
                            card.classList.remove('hidden');
                            setTimeout(() => {
                                card.style.transform = 'scale(1)';
                                card.style.opacity = '1';
                            }, 50);
                        } else {
                            card.classList.add('hidden');
                        }
                    }, 300);
                });
            });
        });

        /* --- Advanced Viewport Intersection & Skill Bar Trigger Watcher --- */
        const scrollingViewportObserver = new IntersectionObserver((monitoredElements) => {
            monitoredElements.forEach(item => { 
                if (item.isIntersecting) {
                    item.target.classList.add('active'); 
                    
                    // Specific Logic to cascade progress animations safely inside active states
                    const internalSkillBars = item.target.querySelectorAll('.bar');
                    if (internalSkillBars.length > 0) {
                        internalSkillBars.forEach(bar => {
                            bar.style.width = bar.getAttribute('data-width');
                        });
                    }
                }
            });
        }, { threshold: 0.08 });
        
        document.querySelectorAll('.reveal').forEach(node => scrollingViewportObserver.observe(node));
    