<script>
  const currentYear = new Date().getFullYear();
  
  const footerLinks = {
    product: [
      { name: 'Descargar', href: '#download' },
      { name: 'Características', href: '#features' },
    ],
    community: [
      { name: 'Discord', href: 'https://discord.gg/RxQMDvVYkt' },
      { name: 'GitHub', href: 'https://github.com/CubicLauncher' },
      { name: 'Reddit', href: 'https://www.reddit.com/r/CubicLauncher/' }
    ],
    support: [
      { name: 'Centro de ayuda', href: '/support' },
      { name: 'Reportar bug', href: '/support' },
      { name: 'Solicitar función', href: '/support' }
    ],
    legal: [
      { name: 'Licencia', href: '/license' },
      { name: 'Cookies', href: '/cookies' }
    ]
  };
  
  function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  function handleLinkClick(href) {
    if (href.startsWith('/')) {
      // External page link
      if (typeof window !== 'undefined' && window.navigateTo) {
        window.navigateTo(href);
      } else {
        window.location.href = href;
      }
    } else if (href.startsWith('#')) {
      // Internal section link
      const sectionId = href.replace('#', '');
      scrollToSection(sectionId);
    }
  }
</script>

<footer class="relative overflow-hidden">
  <!-- Background Effects -->
  <div class="absolute inset-0 bg-gradient-to-b from-cubic-950 via-cubic-900/20 to-cubic-950"></div>
  <div class="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.08),transparent_50%)]"></div>
  <div class="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.05),transparent_50%)]"></div>
  
  <!-- Floating elements -->
  <div class="absolute top-10 left-10 w-32 h-32 bg-accent-500/10 rounded-full blur-3xl animate-pulse"></div>
  <div class="absolute bottom-10 right-10 w-40 h-40 bg-accent-600/8 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s;"></div>
  
  <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16">
    <!-- Main Footer Content -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
      <!-- Brand Section -->
      <div class="lg:col-span-2">
        <div class="flex items-center space-x-3 mb-6">
          <div class="w-10 h-10 flex items-center justify-center">
            <img src="/src/assets/icons/CubicLogo.svg" alt="Cubic MC Logo" class="w-full h-full" />
          </div>
          <div class="flex flex-col">
            <h3 class="text-2xl font-bold text-white leading-none">
              <span class="bg-gradient-to-r from-white to-cubic-200 bg-clip-text text-transparent">Cubic</span>
            </h3>
            <span class="text-xs text-cubic-400 font-medium tracking-wider">Launcher</span>
          </div>
        </div>
        
        <p class="text-cubic-300 mb-6 leading-relaxed max-w-md">
          El launcher de Minecraft más moderno y elegante. Diseñado para ofrecer la mejor experiencia posible 
          con un enfoque en la simplicidad y el rendimiento.
        </p>
        
        <!-- Social Links -->
        <div class="flex space-x-4">
          <a href="https://discord.gg/RxQMDvVYkt" class="w-10 h-10 bg-cubic-800/50 hover:bg-accent-600/20 rounded-lg flex items-center justify-center text-cubic-300 hover:text-accent-300 transition-all duration-300 group">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
            </svg>
          </a>
          
          <a href="https://github.com/CubicLauncher" class="w-10 h-10 bg-cubic-800/50 hover:bg-accent-600/20 rounded-lg flex items-center justify-center text-cubic-300 hover:text-accent-300 transition-all duration-300 group">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.237 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          
          <a href="https://www.reddit.com/r/CubicLauncher/" class="w-10 h-10 bg-cubic-800/50 hover:bg-accent-600/20 rounded-lg flex items-center justify-center text-cubic-300 hover:text-accent-300 transition-all duration-300 group">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
            </svg>
          </a>
        </div>
      </div>
      
      <!-- Product Links -->
      <div>
        <h4 class="text-lg font-semibold text-white mb-4">Producto</h4>
        <ul class="space-y-3">
          {#each footerLinks.product as link}
            <li>
              <button 
                on:click={() => handleLinkClick(link.href)}
                class="text-cubic-300 hover:text-white transition-colors duration-300 text-sm"
              >
                {link.name}
              </button>
            </li>
          {/each}
        </ul>
      </div>
      
      <!-- Community Links -->
      <div>
        <h4 class="text-lg font-semibold text-white mb-4">Comunidad</h4>
        <ul class="space-y-3">
          {#each footerLinks.community as link}
            <li>
              <a 
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                class="text-cubic-300 hover:text-white transition-colors duration-300 text-sm"
              >
                {link.name}
              </a>
            </li>
          {/each}
        </ul>
      </div>
      
      <!-- Support Links -->
      <div>
        <h4 class="text-lg font-semibold text-white mb-4">Soporte</h4>
        <ul class="space-y-3">
          {#each footerLinks.support as link}
            <li>
              <a 
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                class="text-cubic-300 hover:text-white transition-colors duration-300 text-sm"
              >
                {link.name}
              </a>
            </li>
          {/each}
        </ul>
      </div>
    </div>
    
    <!-- Bottom Section -->
    <div class="border-t border-cubic-800/30 pt-8">
      <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <!-- Copyright -->
        <div class="text-cubic-400 text-sm">
          © {currentYear} CubicLauncher. Todos los derechos bajo la Licencia GPL-3.0 license
        </div>
        
        <!-- Legal Links -->
        <div class="flex space-x-6">
          {#each footerLinks.legal as link}
            <button 
              on:click={() => handleLinkClick(link.href)}
              class="text-cubic-400 hover:text-white transition-colors duration-300 text-sm"
            >
              {link.name}
            </button>
          {/each}
        </div>
      </div>
    </div>
  </div>
</footer> 