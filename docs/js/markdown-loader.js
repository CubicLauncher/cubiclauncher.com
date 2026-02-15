// Configuration
const config = {
    defaultPage: 'welcome',
    pagesPath: 'pages/',
    fileExtension: '.md',
    navigation: [
        {   
            title: 'Resumen',
            items: [
                { title: 'Bienvenida', file: 'welcome' },
                { title: 'Instalación', file: 'instalacion' },
                { title: 'Soporte', file: 'support' }
            ]
        },
        {
            title: 'Guías',
            items: [
                { title: 'Configuración', file: 'configuracion' },
                { title: 'Uso de la Consola', file: 'consola' }
            ]
        },
        {
            title: 'Desarrollo',
            items: [
                { title: 'Contribuir', file: 'contribuir' },
                { title: 'Licencias', file: 'licencias' }
            ]
        }
    ]

};

// Initialize the documentation
document.addEventListener('DOMContentLoaded', () => {
    // Initialize mobile menu toggle
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');
    
    if (menuToggle && sidebar) {
        menuToggle.addEventListener('click', () => {
            sidebar.classList.toggle('active');
        });
    }

    // Close menu when clicking outside on mobile
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768 && 
            !sidebar.contains(e.target) && 
            e.target !== menuToggle) {
            sidebar.classList.remove('active');
        }
    });

    // Initialize Marked.js with syntax highlighting
    marked.setOptions({
        highlight: function(code, lang) {
            if (lang && hljs.getLanguage(lang)) {
                return hljs.highlight(code, { language: lang }).value;
            }
            return hljs.highlightAuto(code).value;
        },
        langPrefix: 'hljs language-',
        gfm: true,
        breaks: true
    });

    // Render navigation
    renderNavigation();

    // Load the initial page
    loadPageFromURL();

    // Handle browser back/forward navigation
    window.addEventListener('popstate', loadPageFromURL);
});

// Render the navigation menu
function renderNavigation() {
    const navContainer = document.getElementById('sidebarNav');
    if (!navContainer) return;

    let navHTML = '';
    
    config.navigation.forEach(section => {
        const sectionId = section.title.toLowerCase().replace(/\s+/g, '-');
        navHTML += `
            <div class="nav-section" id="${sectionId}-section">
                ${section.title ? `
                    <div class="nav-section-title" data-section="${sectionId}">
                        <span class="caret">›</span>
                        ${section.title}
                    </div>
                ` : ''}
                <ul class="nav-section-items">
                    ${section.items.map(item => 
                        `<li><a href="#${item.file}" data-page="${item.file}">${item.title}</a></li>`
                    ).join('')}
                </ul>
            </div>
        `;
    });

    navContainer.innerHTML = navHTML;

    // Add click event listeners to section titles for expand/collapse
    document.querySelectorAll('.nav-section-title').forEach(title => {
        title.addEventListener('click', (e) => {
            e.stopPropagation();
            const sectionId = title.getAttribute('data-section');
            const section = document.getElementById(`${sectionId}-section`);
            const items = section.querySelector('.nav-section-items');
            const caret = section.querySelector('.caret');
            
            section.classList.toggle('collapsed');
            items.style.maxHeight = section.classList.contains('collapsed') ? '0' : `${items.scrollHeight}px`;
            caret.style.transform = section.classList.contains('collapsed') ? 'rotate(0deg)' : 'rotate(90deg)';
        });
    });

    // Add click event listeners to navigation links
    document.querySelectorAll('.sidebar-nav a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = link.getAttribute('data-page');
            if (page) {
                loadPage(page);
                // Close mobile menu after selection
                if (window.innerWidth <= 768) {
                    document.getElementById('sidebar').classList.remove('active');
                }
            }
        });
    });

    // Initialize sections as expanded by default
    setTimeout(() => {
        document.querySelectorAll('.nav-section').forEach(section => {
            const items = section.querySelector('.nav-section-items');
            const caret = section.querySelector('.caret');
            items.style.maxHeight = items.scrollHeight + 'px';
            caret.style.transform = 'rotate(90deg)';
        });
    }, 100);
}

// Load page based on URL hash
function loadPageFromURL() {
    let hash = window.location.hash.substring(1);
    // If there's a # in the hash, it means it's a section link
    const hashParts = hash.split('#');
    const page = hashParts[0] || config.defaultPage;
    loadPage(page);
    
    // If there's a section hash, scroll to it after the page loads
    if (hashParts.length > 1) {
        // Small delay to ensure the page is loaded
        setTimeout(() => {
            const sectionId = hashParts[1];
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView();
            }
        }, 100);
    }
}

// Add edit page link
function addEditPageLink(pageName) {
    const editLink = document.createElement('a');
    editLink.href = `https://github.com/CubicLauncher/cubiclauncher.com/edit/main/docs/pages/${pageName}.md`;
    editLink.className = 'edit-page-link';
    editLink.target = '_blank';
    editLink.rel = 'noopener noreferrer';
    editLink.innerHTML = '\n            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>\n                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>\n            </svg>\n            Editar esta página\n        ';
    
    // Create container if it doesn't exist
    let container = document.querySelector('.content-header');
    if (!container) {
        container = document.createElement('div');
        container.className = 'content-header';
        const contentDiv = document.getElementById('markdownContent');
        contentDiv.parentNode.insertBefore(container, contentDiv);
    }
    
    // Clear any existing edit link and add the new one
    const existingLink = container.querySelector('.edit-page-link');
    if (existingLink) {
        container.removeChild(existingLink);
    }
    container.appendChild(editLink);
}

// Load and render a Markdown page
async function loadPage(pageName) {
    const contentDiv = document.getElementById('markdownContent');
    if (!contentDiv) return;

    // Update active state in navigation
    document.querySelectorAll('.sidebar-nav a').forEach(link => {
        link.classList.toggle('active', link.getAttribute('data-page') === pageName);
    });
    
    // Add edit page link
    addEditPageLink(pageName);

    // Update URL without page reload
    const currentHash = window.location.hash.substring(1);
    const currentSection = currentHash.includes('#') ? currentHash.split('#')[1] : '';
    const newHash = currentSection ? `${pageName}#${currentSection}` : pageName;
    
    if (currentHash !== newHash) {
        window.history.pushState({}, '', `#${newHash}`);
    }

    // Show loading state
    contentDiv.innerHTML = '<div class="loading">Cargando documentación...</div>';

    try {
        const response = await fetch(`${config.pagesPath}${pageName}${config.fileExtension}`);
        
        if (!response.ok) {
            throw new Error('Página no encontrada');
        }

        const markdown = await response.text();
        
        // Render the markdown
        contentDiv.innerHTML = marked.parse(markdown);
        
        // Add anchor links to headers
        addAnchorLinks();
        
        // Apply syntax highlighting to code blocks
        document.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightElement(block);
        });

        // Get and display GitHub author info
        try {
            const filePath = `${config.pagesPath}${pageName}${config.fileExtension}`;
            const authorInfo = await getGitHubAuthorInfo(filePath);
            if (authorInfo) {
                addAuthorInfo(authorInfo);
            }
        } catch (e) {
            console.error('Error loading author info:', e);
        }

    } catch (error) {
        console.error('Error loading page:', error);
        contentDiv.innerHTML = `
            <div class="error">
                <h1>Página no encontrada</h1>
                <p>La página que estás buscando no existe o no está disponible en este momento.</p>
                <p><a href="#${config.defaultPage}">Volver a la página de inicio</a></p>
            </div>
        `;
    }
}

// Function to get GitHub author information for a file
async function getGitHubAuthorInfo(filePath) {
    try {
        // Get the relative path from the docs directory
        const relativePath = filePath.replace(/^.*docs[\\/]/, '').replace(/\\/g, '/');
        const apiUrl = `https://api.github.com/repos/CubicLauncher/cubiclauncher.com/commits?path=docs/${encodeURIComponent(relativePath)}&per_page=1`;
        
        const response = await fetch(apiUrl, {
            headers: {
                'Accept': 'application/vnd.github.v3+json'
            }
        });
        
        if (!response.ok) throw new Error('No se pudo obtener la información del autor');
        
        const commits = await response.json();
        if (commits.length === 0) return null;
        
        const lastCommit = commits[0];
        return {
            username: lastCommit.author?.login || lastCommit.commit.author.name,
            avatar: lastCommit.author?.avatar_url || 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
            date: new Date(lastCommit.commit.author.date).toLocaleDateString()
        };
    } catch (error) {
        console.error('Error obteniendo información del autor:', error);
        return null;
    }
}

// Add anchor links to headers
function addAnchorLinks() {
    const headers = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    
    headers.forEach(header => {
        if (!header.id) {
            // Create an ID from the header text
            const id = header.textContent
                .toLowerCase()
                .replace(/[^\w\u00C0-\u017F\- ]/g, '') // Remove special characters
                .replace(/\s+/g, '-') // Replace spaces with dashes
                .replace(/-+/g, '-') // Replace multiple dashes with one
                .replace(/^-+|-+$/g, ''); // Remove leading/trailing dashes
            
            if (id) {
                header.id = id;
                
                // Add anchor link
                const anchor = document.createElement('a');
                anchor.href = `#${id}`;
                anchor.className = 'header-anchor';
                anchor.innerHTML = '#';
                anchor.ariaHidden = 'true';
                
                header.insertBefore(anchor, header.firstChild);
            }
        }
    });
}

// Add author information and last updated date to the page
function addAuthorInfo(authorInfo) {
    const contentDiv = document.getElementById('markdownContent');
    if (!contentDiv) return;
    
    // Create container for author and update info
    const infoContainer = document.createElement('div');
    infoContainer.className = 'doc-meta-info';
    
    // Get the update date from authorInfo or use current date
    const updateDate = authorInfo?.date || new Date().toLocaleDateString();
    
    // Add author info if available
    if (authorInfo) {
        const authorHtml = `
            <div class="author-info">
                <a href="https://github.com/${authorInfo.username}" target="_blank" rel="noopener noreferrer" class="author-link">
                    <img src="${authorInfo.avatar}" alt="${authorInfo.username}" class="author-avatar">
                    <div class="author-details">
                        <span class="author-name">${authorInfo.username}</span>
                    </div>
                </a>
            </div>
            <div class="last-updated">
                <span class="last-updated-icon">🔄</span>
                <span class="last-updated-text">Actualizado el ${updateDate}</span>
            </div>
        `;
        infoContainer.insertAdjacentHTML('beforeend', authorHtml);
    } else {
        // If no author info, just show the update date
        infoContainer.innerHTML = `
            <div class="last-updated">
                <span class="last-updated-icon">🔄</span>
                <span class="last-updated-text">Actualizado el ${updateDate}</span>
            </div>
        `;
    }
    
    // Add styles
    const styles = `
        <style>
            .doc-meta-info {
                margin: 2.5rem 0 1.5rem 0;
                padding: 1rem 0 0 0;
                border-top: 1px solid var(--border-color);
            }
            .author-info {
                display: flex;
                align-items: center;
                margin-bottom: 0.5rem;
            }
            .author-avatar {
                width: 36px;
                height: 36px;
                border-radius: 50%;
                margin-right: 12px;
                border: 2px solid var(--primary-color);
            }
            .author-details {
                display: flex;
                flex-direction: column;
            }
            .author-name {
                font-weight: 500;
                color: var(--primary-color);
                font-size: 0.95em;
                text-decoration: none;
            }
            .author-name:hover {
                text-decoration: underline;
            }
            .last-updated {
                display: inline-flex;
                align-items: center;
                gap: 6px;
                font-size: 0.85em;
                color: var(--text-color);
                opacity: 0.7;
                margin-top: 0.25rem;
            }
            .last-updated-icon {
                font-size: 0.9em;
            }
            /* Make the avatar and name clickable */
            .author-link {
                display: flex;
                align-items: center;
                text-decoration: none;
                color: inherit;
            }
            .author-link:hover .author-name {
                text-decoration: underline;
            }
        </style>
    `;
    
    // Add everything to the page
    contentDiv.insertAdjacentHTML('beforeend', styles);
    contentDiv.appendChild(infoContainer);
}

// Keep the displayLastUpdated function but make it use the new combined format
function displayLastUpdated(date) {
    const lastUpdated = document.querySelector('.last-updated-text');
    if (lastUpdated) {
        lastUpdated.textContent = `Última actualización: ${date}`;
    }
}

// Function to update the last modified date in the UI
async function updateLastModifiedDate() {
    const CACHE_KEY = 'docs_last_updated';
    const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
    
    // Try to get cached data first
    const cachedData = localStorage.getItem(CACHE_KEY);
    const now = new Date().getTime();
    
    if (cachedData) {
        const { timestamp, date } = JSON.parse(cachedData);
        // If cache is still valid, use it
        if (now - timestamp < CACHE_DURATION) {
            displayLastUpdated(date);
            return;
        }
    }
    
    // If no cache or cache expired, fetch from GitHub
    try {
        const response = await fetch('https://api.github.com/repos/CubicLauncher/cubiclauncher.com/commits?path=docs/pages/&per_page=1');
        if (!response.ok) throw new Error('Failed to fetch commit data');
        
        const commits = await response.json();
        if (commits && commits.length > 0) {
            const lastCommitDate = new Date(commits[0].commit.committer.date);
            const options = { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                timeZoneName: 'short'
            };
            const formattedDate = lastCommitDate.toLocaleDateString('es-ES', options);
            
            // Cache the result
            localStorage.setItem(CACHE_KEY, JSON.stringify({
                timestamp: now,
                date: formattedDate
            }));
            
            displayLastUpdated(formattedDate);
        }
    } catch (error) {
        console.error('Error fetching last update date:', error);
        // If there's an error but we have cached data, use it
        if (cachedData) {
            const { date } = JSON.parse(cachedData);
            displayLastUpdated(date);
        }
    }
}

// Display the last updated date in the UI
function displayLastUpdated(date) {
    const lastUpdated = document.createElement('div');
    lastUpdated.className = 'last-updated';
    lastUpdated.innerHTML = `
        <span class="last-updated-icon">🔄</span>
        <span class="last-updated-text">Última actualización: ${date}</span>
    `;
    
    // Add to the bottom of the content
    const content = document.querySelector('.content');
    const existing = document.querySelector('.last-updated');
    if (existing) {
        existing.replaceWith(lastUpdated);
    } else {
        content.appendChild(lastUpdated);
    }
}

// Call this function when the page loads
document.addEventListener('DOMContentLoaded', () => {
    // Add a small delay to ensure the page is fully loaded
    setTimeout(updateLastModifiedDate, 500);
});

// Make loadPage available globally for direct calls from HTML if needed
window.loadPage = loadPage;
