// Lista de páginas disponibles
let availablePages = [];

// Verificar si marked está disponible
function isMarkedReady() {
    return typeof window.markedParse === 'function' && typeof marked !== 'undefined';
}

// Función para esperar a que marked esté listo
function waitForMarked() {
    return new Promise((resolve) => {
        if (isMarkedReady()) {
            resolve();
            return;
        }
        
        const checkInterval = setInterval(() => {
            if (isMarkedReady()) {
                clearInterval(checkInterval);
                resolve();
            }
        }, 100);
        
        // Timeout after 5 seconds
        setTimeout(() => {
            clearInterval(checkInterval);
            console.error('Timed out waiting for marked.js to load');
            resolve(); // Resolve anyway to prevent blocking
        }, 5000);
    });
}

// Función para cargar la lista de páginas disponibles
async function loadAvailablePages() {
    try {
        const response = await fetch('pages/');
        if (!response.ok) {
            console.error('No se pudo cargar el directorio de páginas, usando página por defecto');
            availablePages = ['bienvenida.md'];
            return;
        }
        
        const html = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const links = Array.from(doc.querySelectorAll('a'));
        
        availablePages = links
            .map(link => link.getAttribute('href'))
            .filter(href => href && href.endsWith('.md'))
            .map(href => {
                // Obtener solo el nombre del archivo sin la ruta
                const filename = href.split('/').pop().replace(/\.md$/, '');
                return filename;
            })
            .filter(Boolean); // Remove any empty strings
            
        if (availablePages.length === 0) {
            console.warn('No se encontraron archivos .md en el directorio pages/');
            availablePages = ['bienvenida']; // Página por defecto
        }
        
        updateSidebar();
        
        // Cargar la primera página disponible si no hay hash
        if (!window.location.hash && availablePages.length > 0) {
            const defaultPage = availablePages[0];
            console.log(`Cargando página por defecto: ${defaultPage}`);
            loadMarkdownContent(defaultPage);
        }
    } catch (error) {
        console.error('Error al cargar la lista de páginas:', error);
        availablePages = ['bienvenida']; // Página por defecto
        updateSidebar();
    }
}

// Función para actualizar la barra lateral
function updateSidebar() {
    const sidebar = document.getElementById('sidebar-nav');
    if (!sidebar) return;
    
    // Agrupar páginas por categoría
    const pagesByCategory = availablePages.reduce((acc, page) => {
        const category = page.split('-')[0] || 'general';
        if (!acc[category]) {
            acc[category] = [];
        }
        acc[category].push(page);
        return acc;
    }, {});
    
    // Generar HTML de la barra lateral
    let sidebarHTML = '';
    
    Object.entries(pagesByCategory).forEach(([category, pages]) => {
        const categoryName = category.charAt(0).toUpperCase() + category.slice(1);
        
        sidebarHTML += `
            <div class="mb-6">
                <ul class="space-y-1">
                    ${pages.map(page => `
                        <li>
                            <a href="#${page}" class="nav-link block px-6 py-2 text-cubic-text-secondary hover:bg-cubic-accent hover:text-cubic-primary transition-colors duration-200">
                                ${page.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                            </a>
                        </li>
                    `).join('')}
                </ul>
            </div>
        `;
    });
    
    sidebar.innerHTML = sidebarHTML;
    
    // Agregar manejadores de eventos a los enlaces
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = link.getAttribute('href').substring(1);
            loadMarkdownContent(page);
        });
    });
}

// Función para cargar el contenido Markdown
async function loadMarkdownContent(page) {
  try {
    // Esperar a que marked esté listo
    await waitForMarked();
    
    const response = await fetch(`pages/${page}.md`);
    if (!response.ok) {
      throw new Error('Página no encontrada');
    }
    
    const markdown = await response.text();
    
    // Verificar nuevamente antes de parsear
    if (!isMarkedReady()) {
      console.error('markedParse no está disponible después de esperar');
      document.getElementById('content').innerHTML = `<div class="p-4 bg-red-100 text-red-800 rounded">
        <p>Error: No se pudo cargar el procesador de Markdown.</p>
        <pre class="mt-2 p-2 bg-white rounded overflow-auto">${markdown}</pre>
      </div>`;
      return;
    }
    
    try {
      const html = window.markedParse(markdown);
      document.getElementById('content').innerHTML = html;
    } catch (parseError) {
      console.error('Error al procesar el markdown:', parseError);
      document.getElementById('content').innerHTML = `<div class="p-4 bg-yellow-100 text-yellow-800 rounded">
        <p>Error al procesar el contenido Markdown:</p>
        <pre class="mt-2 p-2 bg-white rounded overflow-auto">${parseError.message}</pre>
        <details class="mt-2">
          <summary class="cursor-pointer font-medium">Ver contenido original</summary>
          <pre class="mt-2 p-2 bg-gray-100 rounded overflow-auto">${markdown}</pre>
        </details>
      </div>`;
    }
    
    // Actualizar el estado activo del menú
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.remove('bg-cubic-accent', 'text-cubic-primary');
      link.classList.add('text-cubic-text-secondary');
      if (link.getAttribute('href') === `#${page}`) {
        link.classList.add('bg-cubic-accent', 'text-cubic-primary');
        link.classList.remove('text-cubic-text-secondary');
      }
    });
    
    // Actualizar la URL sin recargar la página
    window.history.pushState({ page }, null, `#${page}`);
  } catch (error) {
    console.error('Error al cargar el contenido:', error);
    document.getElementById('content').innerHTML = `
      <div class="p-4 bg-red-100 text-red-800 rounded">
        <p>Error al cargar la página: ${error.message}</p>
      </div>`;
  }
}

// Manejar la navegación
function handleNavigation() {
    window.addEventListener('popstate', () => {
        const params = new URLSearchParams(window.location.search);
        const page = params.get('page');
        loadMarkdownContent(page ? `${page}.md` : 'bienvenida.md');
    });
}

// Inicializar cuando el DOM esté listo
async function onDOMContentLoaded() {
    try {
        await loadAvailablePages();
        updateSidebar();
        handleNavigation();
        
        // Cargar la página solicitada o la página de bienvenida por defecto
        const params = new URLSearchParams(window.location.search);
        const page = params.get('page');
        await loadMarkdownContent(page ? `${page}.md` : 'bienvenida.md');
    } catch (error) {
        console.error('Error al inicializar:', error);
    }
}

// Iniciar la carga del contenido
window.markedLoaderInitialized = onDOMContentLoaded;

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', onDOMContentLoaded);
} else {
    onDOMContentLoaded();
}
