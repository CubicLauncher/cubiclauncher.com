// Configuration
const config = {
    defaultPage: 'bienvenida',
    pagesPath: 'pages/',
    fileExtension: '.md',
    navigation: [
        {   
            title: 'Resumen',
            items: [
                { title: 'Bienvenida', file: 'bienvenida' },
                { title: 'Empezando', file: 'empezando' },
                { title: 'Instalación', file: 'instalacion' }
            ]
        },
        {
            title: 'Guías',
            items: [
                { title: 'Configuración', file: 'configuracion' },
                { title: 'Personalización', file: 'personalizacion' },
                { title: 'Temas', file: 'temas' }
            ]
        },
        {
            title: 'Avanzado',
            items: [
                { title: 'API', file: 'api' },
                { title: 'Plugins', file: 'plugins' },
                { title: 'Contribuir', file: 'contribuir' }
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
    const hash = window.location.hash.substring(1);
    const page = hash || config.defaultPage;
    loadPage(page);
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
    if (window.location.hash.substring(1) !== pageName) {
        window.history.pushState({}, '', `#${pageName}`);
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

// Add anchor links to headers for easy sharing
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

// Make loadPage available globally for direct calls from HTML if needed
window.loadPage = loadPage;