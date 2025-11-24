// Configuration
const config = {
    defaultPage: 'bienvenida',
    pagesPath: 'pages/',
    fileExtension: '.md',
    navigation: [
        {
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
        navHTML += `
            <div class="nav-section">
                <ul>
                    ${section.items.map(item => 
                        `<li><a href="#${item.file}" data-page="${item.file}">${item.title}</a></li>`
                    ).join('')}
                </ul>
            </div>
        `;
    });

    navContainer.innerHTML = navHTML;

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
}

// Load page based on URL hash
function loadPageFromURL() {
    const hash = window.location.hash.substring(1);
    const page = hash || config.defaultPage;
    loadPage(page);
}

// Load and render a Markdown page
async function loadPage(pageName) {
    const contentDiv = document.getElementById('markdownContent');
    if (!contentDiv) return;

    // Update active state in navigation
    document.querySelectorAll('.sidebar-nav a').forEach(link => {
        link.classList.toggle('active', link.getAttribute('data-page') === pageName);
    });

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