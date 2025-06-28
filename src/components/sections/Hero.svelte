<script>
  import { Monitor, Apple, Terminal } from 'lucide-svelte';
  
  function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
</script>

<section id="hero" class="pt-32 pb-20 px-6 lg:px-8 relative overflow-hidden">
  <!-- Background Effects -->
  <div class="absolute inset-0 bg-gradient-to-b from-cubic-950 via-cubic-900/50 to-cubic-950"></div>
  <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
  
  <!-- Floating Elements -->
  <div class="absolute top-20 left-10 w-32 h-32 bg-accent-600/10 rounded-full blur-3xl floating"></div>
  <div class="absolute top-40 right-20 w-24 h-24 bg-white/5 rounded-full blur-2xl floating" style="animation-delay: -2s;"></div>
  <div class="absolute bottom-20 left-1/4 w-40 h-40 bg-accent-600/5 rounded-full blur-3xl floating" style="animation-delay: -4s;"></div>
  
  <div class="relative z-10 max-w-7xl mx-auto text-center">
    <div class="mb-8">
      <span class="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-accent-600/20 text-accent-300 border border-accent-600/30 backdrop-blur-sm glow">
        ✨ Nuevo - CubicLauncher
      </span>
    </div>
    
    <h1 class="text-5xl lg:text-7xl font-bold text-white mb-8 tracking-tight leading-tight">
      Tu launcher de
      <span class="hero-gradient animate-gradient">Minecraft</span>
    </h1>
    
    <p class="text-xl lg:text-2xl text-cubic-300 mb-12 max-w-4xl mx-auto leading-relaxed">
      Una excelente opción de código abierto para desarrolladores y usuarios casuales. Gestiona versiones y Java con facilidad.
    </p>
    
    <div class="flex flex-col sm:flex-row gap-6 justify-center mb-16">
      <button class="btn-primary text-lg px-10 py-4 glow">
        Descargar ahora
      </button>
      <button 
        on:click={() => scrollToSection('features')}
        class="btn-secondary text-lg px-10 py-4"
      >
        Ver características
      </button>
    </div>
    
    <!-- Download Options -->
    <div class="flex flex-wrap justify-center gap-6 text-sm">
      <div class="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer">
        <Monitor class="w-4 h-4 text-white" />
        <span class="text-white font-medium">Windows</span>
      </div>
      
      <div class="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer">
        <Apple class="w-4 h-4 text-white" />
        <span class="text-white font-medium">macOS</span>
      </div>
      
      <div class="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer">
        <Terminal class="w-4 h-4 text-white" />
        <span class="text-white font-medium">Linux</span>
      </div>
    </div>
  </div>
</section> 