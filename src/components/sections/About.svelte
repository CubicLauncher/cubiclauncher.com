<script>
  import { GitBranch, Infinity  } from 'lucide-svelte';
</script>

<section id="about" class="py-24 px-6 lg:px-8 relative overflow-hidden">
  <!-- Background Effects -->
  <div class="absolute inset-0 bg-gradient-to-b from-cubic-950 via-cubic-900/20 to-cubic-950"></div>
  <div class="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.08),transparent_50%)]"></div>
  <div class="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.05),transparent_50%)]"></div>
  
  <!-- Floating elements -->
  <div class="absolute top-20 left-10 w-32 h-32 bg-accent-500/10 rounded-full blur-3xl animate-pulse"></div>
  <div class="absolute bottom-20 right-10 w-40 h-40 bg-accent-600/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
  
  <div class="relative z-10 max-w-7xl mx-auto">
    <!-- Header Section -->
    <div class="text-center mb-16">
      <h2 class="text-5xl lg:text-6xl font-bold mb-6">
        <span class="bg-gradient-to-r from-white via-cubic-200 to-cubic-300 bg-clip-text text-transparent">
          Acerca de
        </span>
        <span class="bg-gradient-to-r from-accent-400 via-accent-300 to-accent-500 bg-clip-text text-transparent animate-gradient">
          CubicLauncher
        </span>
      </h2>
      <div class="w-24 h-1 bg-gradient-to-r from-accent-500 to-accent-400 mx-auto rounded-full"></div>
    </div>
    
    <!-- Main Content Grid -->
    <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      <!-- Left Column - Description -->
      <div class="space-y-8">
        <div class="space-y-6">
          <h3 class="text-3xl font-bold text-white">
            El Launcher que <span class="bg-gradient-to-r from-accent-400 to-accent-500 bg-clip-text text-transparent">Minecraft</span> Merece
          </h3>
          <p class="text-xl text-cubic-300 leading-relaxed">
            CubicLauncher es un launcher moderno y elegante diseñado para ofrecer la mejor experiencia posible. 
            Con un enfoque en la simplicidad y el rendimiento, te permite concentrarte en lo que realmente importa: 
            <span class="text-white font-semibold">disfrutar de Minecraft</span>.
          </p>
          <p class="text-lg text-cubic-400 leading-relaxed">
            Desarrollado con las últimas tecnologías, nuestro launcher combina un diseño minimalista con 
            funcionalidades avanzadas que harán que tu experiencia de juego sea más fluida y agradable.
          </p>
        </div>
        
        <!-- Features List -->
        <div class="space-y-4">
          <div class="flex items-center space-x-4 group">
            <div class="w-8 h-8 bg-gradient-to-r from-accent-600 to-accent-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <span class="text-cubic-200 font-medium">Interfaz moderna y intuitiva</span>
          </div>
          
          <div class="flex items-center space-x-4 group">
            <div class="w-8 h-8 bg-gradient-to-r from-accent-600 to-accent-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <span class="text-cubic-200 font-medium">Rendimiento optimizado</span>
          </div>
          
          <div class="flex items-center space-x-4 group">
            <div class="w-8 h-8 bg-gradient-to-r from-accent-600 to-accent-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
              </svg>
            </div>
            <span class="text-cubic-200 font-medium">Seguridad garantizada</span>
          </div>
          
          <div class="flex items-center space-x-4 group">
            <div class="w-8 h-8 bg-gradient-to-r from-accent-600 to-accent-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </div>
            <span class="text-cubic-200 font-medium">Desarrollado con pasión</span>
          </div>
        </div>
      </div>
      
      <!-- Right Column - Open Source & Free -->
      <div class="relative">
        <!-- Main visual container -->
        <div class="relative bg-gradient-to-br from-cubic-900/50 via-cubic-800/30 to-cubic-900/50 backdrop-blur-xl rounded-3xl p-8 border border-cubic-800/30 overflow-hidden">
          <!-- Background pattern -->
          <div class="absolute inset-0 bg-gradient-to-br from-accent-600/5 via-transparent to-accent-600/5"></div>
          
          <!-- Content -->
          <div class="relative z-10 text-center space-y-6">
            <div class="w-20 h-20 bg-gradient-to-r from-accent-600 to-accent-500 rounded-2xl mx-auto flex items-center justify-center shadow-2xl shadow-accent-500/25">
              <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
              </svg>
            </div>
            
            <div>
              <h4 class="text-2xl font-bold text-white mb-3">100% Gratis y Código Abierto</h4>
              <p class="text-cubic-300 leading-relaxed">
                CubicLauncher es completamente gratuito y de código abierto. Creemos que el software de calidad 
                debe estar disponible para todos, sin restricciones ni costos ocultos.
              </p>
            </div>
            
            <!-- Stats -->
            <div class="grid grid-cols-3 gap-4 pt-4">
              <div class="text-center">
                <div class="text-2xl font-bold text-accent-400">100%</div>
                <div class="text-sm text-cubic-400">Gratis</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold text-accent-400 flex justify-center">
                  <svelte:component this={GitBranch} class="w-6 h-6" />
                </div>
                <div class="text-sm text-cubic-400">Open Source</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold text-accent-400 flex justify-center">
                  <svelte:component this={Infinity} class="w-6 h-6" />
                </div>
                <div class="text-sm text-cubic-400">Posibilidades</div>
              </div>
            </div>
          </div>
          
          <!-- Floating elements inside -->
          <div class="absolute top-4 right-4 w-16 h-16 bg-accent-500/20 rounded-full blur-xl"></div>
          <div class="absolute bottom-4 left-4 w-12 h-12 bg-accent-600/15 rounded-full blur-xl"></div>
        </div>
        
        <!-- Decorative elements -->
        <div class="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-accent-500 to-accent-400 rounded-full opacity-60"></div>
        <div class="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-accent-400 to-accent-300 rounded-full opacity-60"></div>
      </div>
    </div>
  </div>
</section> 