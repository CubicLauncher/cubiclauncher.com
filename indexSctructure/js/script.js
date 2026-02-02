// Botón Volver al inicio
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.remove('hidden');
    } else {
        backToTopButton.classList.add('hidden');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Desplazamiento suave para enlaces de anclaje
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Alternar menú móvil
const mobileMenuButton = document.getElementById('mobile-menu-button');
if (mobileMenuButton) {
    mobileMenuButton.addEventListener('click', function () {
        const menu = document.querySelector('.nav-links');
        if (menu) {
            menu.classList.toggle('hidden');
            menu.classList.toggle('flex');
            menu.classList.toggle('flex-col');
            menu.classList.toggle('absolute');
            menu.classList.toggle('top-16');
            menu.classList.toggle('right-6');
            menu.classList.toggle('bg-cubic-darker');
            menu.classList.toggle('p-4');
            menu.classList.toggle('rounded-lg');
            menu.classList.toggle('shadow-xl');
            menu.classList.toggle('border');
            menu.classList.toggle('border-cubic-border');
        }
    });
}

// Obtener la última versión de GitHub
async function fetchLatestVersion() {
    const versionTag = document.getElementById('version-tag');
    if (!versionTag) return;

    try {
        const response = await fetch('https://api.github.com/repos/CubicLauncher/CubicLauncher/tags');
        if (!response.ok) throw new Error('Network response was not ok');

        const tags = await response.json();
        if (tags && tags.length > 0) {
            const latestTag = tags[0].name;
            versionTag.textContent = `CubicLauncher ${latestTag}`;
        }
    } catch (error) {
        console.error('Error fetching latest version:', error);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    fetchLatestVersion();
    fetchContributors();
});

// Obtener contribuidores de GitHub
async function fetchContributors() {
    const container = document.getElementById('contributors-container');
    if (!container) return;

    try {
        const response = await fetch('https://api.github.com/repos/CubicLauncher/CubicLauncher/contributors');
        if (!response.ok) throw new Error('Network response was not ok');

        const contributors = await response.json();
        if (contributors && contributors.length > 0) {
            container.innerHTML = '';

            contributors
                .filter(contributor => contributor.type !== 'Bot')
                .forEach(contributor => {
                    const contributorLink = document.createElement('a');
                    contributorLink.href = contributor.html_url;
                    contributorLink.target = '_blank';
                    contributorLink.className = 'group flex flex-col items-center gap-2 transition-transform hover:scale-110';

                    contributorLink.innerHTML = `
                            <div class="relative w-16 h-16 rounded-full overflow-hidden border-2 border-cubic-border group-hover:border-cubic-primary transition-colors">
                                <img src="${contributor.avatar_url}" alt="${contributor.login}" class="w-full h-full object-cover">
                            </div>
                            <span class="text-sm font-medium text-cubic-text-secondary group-hover:text-cubic-text-primary transition-colors">${contributor.login}</span>
                        `;

                    container.appendChild(contributorLink);
                });
        } else {
            container.innerHTML = '<p class="text-cubic-text-secondary">No se encontraron contribuidores.</p>';
        }
    } catch (error) {
        console.error('Error fetching contributors:', error);
        container.innerHTML = '<p class="text-cubic-text-secondary">Error al cargar contribuidores.</p>';
    }
}