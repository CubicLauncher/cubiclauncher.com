<script>
  import { Zap, Shield, GitBranch, Code, MousePointer, RefreshCw, Monitor, Palette, Users } from 'lucide-svelte';
  
  const features = [
    {
      title: "Rápido",
      description: "Inicio ultra rápido y navegación fluida. CubicLauncher está optimizado para ofrecer la mejor experiencia de rendimiento.",
      icon: Zap
    },
    {
      title: "Seguro",
      description: "Tu seguridad es nuestra prioridad. Descargas verificadas y protección contra malware integrada.",
      icon: Shield
    },
    {
      title: "Multi-plataforma",
      description: "Disponible en Windows, macOS y Linux. La misma experiencia excepcional en todas las plataformas.",
      icon: Monitor
    },
    {
      title: "Personalizable",
      description: "Adapta CubicLauncher a tu estilo. Temas, colores y configuraciones personalizables para una experiencia única.",
      icon: Palette
    },
    {
      title: "Comunidad Activa",
      description: "Únete a nuestra comunidad. Soporte, tutoriales y actualizaciones constantes de la comunidad.",
      icon: Users
    },
    {
      title: "Open Source",
      description: "Código abierto y transparente. Contribuye al desarrollo y personaliza según tus necesidades.",
      icon: GitBranch
    },
    {
      title: "Gestor de Java",
      description: "Gestión inteligente de Java. Descarga automática y configuración optimizada para cada modpack.",
      icon: Code
    },
    {
      title: "Fácil de Usar",
      description: "Interfaz intuitiva y moderna. Todo lo que necesitas está a un clic de distancia.",
      icon: MousePointer
    },
    {
      title: "Auto-actualizador",
      description: "Mantente siempre actualizado. Descargas automáticas de modpacks y mods sin interrupciones.",
      icon: RefreshCw
    }
  ];
</script>

<section id="features" class="py-20 px-6 lg:px-8 relative overflow-hidden">
  <!-- Background Effects -->
  <div class="absolute inset-0 bg-gradient-to-b from-cubic-950 via-cubic-900/20 to-cubic-950"></div>
  <div class="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(120,119,198,0.08),transparent_50%)]"></div>
  <div class="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(120,119,198,0.05),transparent_50%)]"></div>
  
  <!-- Floating elements -->
  <div class="absolute top-20 left-10 w-32 h-32 bg-accent-500/10 rounded-full blur-3xl animate-pulse"></div>
  <div class="absolute bottom-20 right-10 w-40 h-40 bg-accent-600/8 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s;"></div>
  
  <div class="relative z-10 max-w-7xl mx-auto">
    <div class="text-center mb-16">
      <h2 class="text-4xl lg:text-5xl font-bold text-white mb-6">¿Qué hace especial a CubicLauncher?</h2>
      <p class="text-xl text-cubic-300 max-w-3xl mx-auto">
        Un launcher rápido, seguro y fácil de usar con un fuerte enfoque en la experiencia del usuario.
      </p>
    </div>
    
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each features as feature}
        <div class="card group hover:bg-cubic-800/50 transition-all duration-300">
          <div class="w-16 h-16 bg-accent-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent-600/30 transition-colors duration-300 feature-icon">
            <svelte:component this={feature.icon} class="w-8 h-8 text-accent-300" />
          </div>
          <h3 class="text-xl font-semibold text-white mb-4">{feature.title}</h3>
          <p class="text-cubic-300 leading-relaxed">
            {feature.description}
          </p>
        </div>
      {/each}
    </div>
  </div>
</section> 