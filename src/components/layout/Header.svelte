<script>
  let isMenuOpen = false;
  let scrolled = false;
  
  // Handle scroll effect
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      scrolled = window.scrollY > 20;
    });
  }
  
  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }
  
  function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    isMenuOpen = false;
  }
</script>

<header class="fixed top-0 w-full z-50 transition-all duration-500 {scrolled ? 'bg-cubic-950/95 backdrop-blur-xl shadow-2xl shadow-black/20' : 'bg-transparent'}">
  <!-- Animated background gradient -->
  <div class="absolute inset-0 bg-gradient-to-b from-cubic-950/90 via-cubic-950/80 to-transparent transition-opacity duration-500 {scrolled ? 'opacity-100' : 'opacity-0'}"></div>
  
  <!-- Subtle border -->
  <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cubic-700/30 to-transparent transition-opacity duration-500 {scrolled ? 'opacity-100' : 'opacity-0'}"></div>
  
  <nav class="relative max-w-7xl mx-auto px-6 lg:px-8">
    <div class="flex justify-between items-center h-20">
      <!-- Logo -->
      <div class="flex-shrink-0">
        <div class="flex items-center space-x-3 group cursor-pointer">
          <!-- Logo icon -->
          <div class="relative">
            <div class="w-10 h-10 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
              <img src="/src/assets/icons/CubicLogo.svg" alt="Cubic MC Logo" class="w-full h-full" />
            </div>
            <!-- Glow effect -->
            <div class="absolute inset-0 bg-gradient-to-br from-accent-500/30 to-accent-600/30 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          
          <!-- Logo text -->
          <div class="flex flex-col">
            <h1 class="text-2xl font-bold text-white leading-none">
              <span class="bg-gradient-to-r from-white to-cubic-200 bg-clip-text text-transparent">Cubic</span>
            </h1>
            <span class="text-xs text-cubic-400 font-medium tracking-wider">Launcher</span>
          </div>
        </div>
      </div>
      
      <!-- Desktop Navigation -->
      <div class="hidden lg:flex items-center space-x-1">
        {#each [
          { id: 'hero', label: 'Inicio' },
          { id: 'features', label: 'Características' },
          { id: 'about', label: 'Acerca de' }
        ] as item}
          <button 
            on:click={() => scrollToSection(item.id)}
            class="relative px-4 py-2 text-sm font-medium text-cubic-300 hover:text-white transition-all duration-300 rounded-lg group"
          >
            <span class="relative z-10">{item.label}</span>
            <!-- Hover background -->
            <div class="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <!-- Underline effect -->
            <div class="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-accent-500 to-accent-400 transform -translate-x-1/2 group-hover:w-full transition-all duration-300"></div>
          </button>
        {/each}
      </div>
      
      <!-- CTA Button -->
      <div class="hidden lg:block">
        <button class="relative px-6 py-2.5 bg-gradient-to-r from-accent-600 to-accent-500 hover:from-accent-500 hover:to-accent-400 text-white text-sm font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent-500/25 group overflow-hidden">
          <span class="relative z-10">Descargar</span>
          <!-- Shimmer effect -->
          <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
        </button>
      </div>
      
      <!-- Mobile menu button -->
      <div class="lg:hidden">
        <button
          on:click={toggleMenu}
          class="relative p-2 text-cubic-300 hover:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500/50 transition-all duration-300 hover:bg-white/5 group"
        >
          <div class="w-6 h-6 flex flex-col justify-center items-center">
            <span class="block w-5 h-0.5 bg-current transform transition-all duration-300 {isMenuOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-1'}"></span>
            <span class="block w-5 h-0.5 bg-current transition-all duration-300 {isMenuOpen ? 'opacity-0' : 'opacity-100'}"></span>
            <span class="block w-5 h-0.5 bg-current transform transition-all duration-300 {isMenuOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-1'}"></span>
          </div>
        </button>
      </div>
    </div>
    
    <!-- Mobile Navigation -->
    {#if isMenuOpen}
      <div class="lg:hidden">
        <div class="relative overflow-hidden rounded-2xl mb-4 border border-cubic-800/30 bg-cubic-950/95 backdrop-blur-xl">
          <div class="px-4 py-6 space-y-2">
            {#each [
              { id: 'hero', label: 'Inicio', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
              { id: 'features', label: 'Características', icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' },
              { id: 'about', label: 'Acerca de', icon: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
            ] as item}
              <button 
                on:click={() => scrollToSection(item.id)}
                class="w-full flex items-center space-x-3 px-4 py-3 text-base font-medium text-cubic-300 hover:text-white transition-all duration-300 rounded-xl hover:bg-white/5 group"
              >
                <svg class="w-5 h-5 text-cubic-400 group-hover:text-accent-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d={item.icon} />
                </svg>
                <span>{item.label}</span>
              </button>
            {/each}
            
            <div class="pt-4 border-t border-cubic-800/30">
              <button class="w-full px-6 py-3 bg-gradient-to-r from-accent-600 to-accent-500 hover:from-accent-500 hover:to-accent-400 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent-500/25 group overflow-hidden">
                <span class="relative z-10">Descargar</span>
                <div class="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    {/if}
  </nav>
</header>  