<script>
  import { Github, Heart, Users } from 'lucide-svelte';
</script>

<section id="contributors" class="py-24 px-6 lg:px-8 relative overflow-hidden">
  <!-- Background Effects -->
  <div class="absolute inset-0 bg-gradient-to-b from-cubic-950 via-cubic-900/20 to-cubic-950"></div>
  <div class="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(120,119,198,0.08),transparent_50%)]"></div>
  <div class="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(120,119,198,0.05),transparent_50%)]"></div>
  
  <!-- Floating elements -->
  <div class="absolute top-32 left-16 w-28 h-28 bg-accent-500/10 rounded-full blur-3xl animate-pulse"></div>
  <div class="absolute bottom-32 right-16 w-36 h-36 bg-accent-600/8 rounded-full blur-3xl animate-pulse delay-1500"></div>
  
  <div class="relative z-10 max-w-7xl mx-auto">
    <!-- Header Section -->
    <div class="text-center mb-16">
      <h2 class="text-5xl lg:text-6xl font-bold mb-6">
        <span class="bg-gradient-to-r from-white via-cubic-200 to-cubic-300 bg-clip-text text-transparent">
          Nuestros
        </span>
        <span class="bg-gradient-to-r from-accent-400 via-accent-300 to-accent-500 bg-clip-text text-transparent animate-gradient">
          Colaboradores
        </span>
      </h2>
      <div class="w-24 h-1 bg-gradient-to-r from-accent-500 to-accent-400 mx-auto rounded-full mb-8"></div>
      <p class="text-xl text-cubic-300 max-w-3xl mx-auto leading-relaxed">
        CubicLauncher es posible gracias a la dedicación y pasión de nuestra comunidad. 
        Cada contribución, por pequeña que sea, hace que este proyecto sea mejor.
      </p>
    </div>
    
    <!-- Contributors Grid -->
    <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-4 mb-16">
      <!-- @staFF6773 -->
      <div class="group relative">
        <div class="bg-gradient-to-br from-cubic-900/50 via-cubic-800/30 to-cubic-900/50 backdrop-blur-xl rounded-xl p-3 border border-cubic-800/30 hover:border-accent-500/30 transition-all duration-300 hover:scale-110">
          <div class="text-center space-y-2">
            <div class="w-12 h-12 mx-auto">
              <img src="https://avatars.githubusercontent.com/u/108166164?v=4" alt="@staFF6773" class="w-full h-full rounded-full border-2 border-accent-500/30 shadow-lg shadow-accent-500/25" />
            </div>
            <h4 class="text-sm font-semibold text-white">@staFF6773</h4>
          </div>
        </div>
      </div>
      
      <!-- @santiagolxx -->
      <div class="group relative">
        <div class="bg-gradient-to-br from-cubic-900/50 via-cubic-800/30 to-cubic-900/50 backdrop-blur-xl rounded-xl p-3 border border-cubic-800/30 hover:border-accent-500/30 transition-all duration-300 hover:scale-110">
          <div class="text-center space-y-2">
            <div class="w-12 h-12 mx-auto">
              <img src="https://avatars.githubusercontent.com/u/149891004?v=4" alt="@santiagolxx" class="w-full h-full rounded-full border-2 border-purple-500/30 shadow-lg shadow-purple-500/25" />
            </div>
            <h4 class="text-sm font-semibold text-white">@santiagolxx</h4>
          </div>
        </div>
      </div>
      
      <!-- @DevCheckOG -->
      <div class="group relative">
        <div class="bg-gradient-to-br from-cubic-900/50 via-cubic-800/30 to-cubic-900/50 backdrop-blur-xl rounded-xl p-3 border border-cubic-800/30 hover:border-accent-500/30 transition-all duration-300 hover:scale-110">
          <div class="text-center space-y-2">
            <div class="w-12 h-12 mx-auto">
              <img src="https://avatars.githubusercontent.com/u/126353237?v=4" alt="@DevCheckOG" class="w-full h-full rounded-full border-2 border-green-500/30 shadow-lg shadow-green-500/25" />
            </div>
            <h4 class="text-sm font-semibold text-white">@DevCheckOG</h4>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Community Section -->
    <div class="bg-gradient-to-br from-cubic-900/50 via-cubic-800/30 to-cubic-900/50 backdrop-blur-xl rounded-3xl p-8 border border-cubic-800/30">
      <div class="text-center space-y-8">
        <div class="flex justify-center">
          <div class="w-16 h-16 bg-gradient-to-r from-accent-600 to-accent-500 rounded-2xl flex items-center justify-center shadow-lg shadow-accent-500/25">
            <svelte:component this={Users} class="w-8 h-8 text-white" />
          </div>
        </div>
        
        <div>
          <h3 class="text-3xl font-bold text-white mb-4">Únete a Nuestra Comunidad</h3>
          <p class="text-cubic-300 text-lg leading-relaxed max-w-2xl mx-auto">
            ¿Te apasiona Minecraft y el desarrollo de software? ¡Únete a nuestro equipo de colaboradores! 
            Cada contribución es valiosa, desde reportar bugs hasta desarrollar nuevas funcionalidades.
          </p>
        </div>
        
        <!-- Call to Action -->
        <div class="pt-6">
          <a href="https://github.com/CubicLauncher/CubicLauncher" target="_blank" rel="noopener noreferrer" 
             class="inline-flex items-center space-x-3 bg-gradient-to-r from-accent-600 to-accent-500 hover:from-accent-500 hover:to-accent-400 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-accent-500/25">
            <svelte:component this={Github} class="w-5 h-5" />
            <span>Contribuir en GitHub</span>
            <svelte:component this={Heart} class="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  </div>
</section> 