// Back to top button
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

// Smooth scroll for anchor links
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

// Mobile menu toggle
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

// Fetch latest version from GitHub
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
        // Keep the default hardcoded version if fetch fails
    }
}

document.addEventListener('DOMContentLoaded', fetchLatestVersion);