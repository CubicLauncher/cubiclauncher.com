<script>
  function goBack() {
    window.history.back();
  }
</script>

<section id="cookies" class="py-20 px-6 lg:px-8 relative overflow-hidden min-h-screen">
  <!-- Background Effects -->
  <div class="absolute inset-0 bg-gradient-to-b from-cubic-950 via-cubic-900/20 to-cubic-950"></div>
  <div class="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.08),transparent_50%)]"></div>
  <div class="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.05),transparent_50%)]"></div>
  
  <!-- Floating elements -->
  <div class="absolute top-20 left-10 w-32 h-32 bg-accent-500/10 rounded-full blur-3xl animate-pulse"></div>
  <div class="absolute bottom-20 right-10 w-40 h-40 bg-accent-600/8 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s;"></div>
  
  <div class="relative z-10 max-w-4xl mx-auto">
    <!-- Header -->
    <div class="text-center mb-12">
      <button 
        on:click={goBack}
        class="inline-flex items-center space-x-2 text-cubic-300 hover:text-white transition-colors duration-300 mb-6 group"
      >
        <svg class="w-5 h-5 transform group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
        </svg>
        <span>Volver</span>
      </button>
      
      <h1 class="text-4xl lg:text-5xl font-bold text-white mb-4">Política de Cookies</h1>
      <p class="text-xl text-cubic-300">
        Información sobre el uso de cookies en CubicLauncher
      </p>
    </div>
    
    <!-- Cookies Content -->
    <div class="bg-cubic-900/50 backdrop-blur-xl rounded-2xl border border-cubic-800/30 p-8 lg:p-12">
      <div class="prose prose-invert max-w-none">
        <div class="space-y-8">
          <!-- Introduction -->
          <div class="text-center border-b border-cubic-800/30 pb-6">
            <h2 class="text-2xl font-bold text-white mb-4">¿Qué son las cookies?</h2>
            <p class="text-cubic-300">
              Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas nuestro sitio web.
            </p>
          </div>
          
          <!-- What we use cookies for -->
          <div class="bg-cubic-800/30 rounded-lg p-6">
            <h3 class="text-lg font-semibold text-white mb-3">¿Para qué usamos las cookies?</h3>
            <ul class="space-y-2 text-cubic-300">
              <li class="flex items-start space-x-3">
                <span class="text-accent-400 mt-1">•</span>
                <span><strong>Funcionalidad:</strong> Para recordar tus preferencias y configuraciones</span>
              </li>
              <li class="flex items-start space-x-3">
                <span class="text-accent-400 mt-1">•</span>
                <span><strong>Análisis:</strong> Para entender cómo usas nuestro sitio y mejorarlo</span>
              </li>
              <li class="flex items-start space-x-3">
                <span class="text-accent-400 mt-1">•</span>
                <span><strong>Seguridad:</strong> Para proteger tu cuenta y prevenir fraudes</span>
              </li>
              <li class="flex items-start space-x-3">
                <span class="text-accent-400 mt-1">•</span>
                <span><strong>Experiencia:</strong> Para personalizar el contenido que ves</span>
              </li>
            </ul>
          </div>
          
          <!-- Types of cookies -->
          <div class="space-y-6">
            <h3 class="text-2xl font-bold text-white">Tipos de cookies que utilizamos</h3>
            
            <div class="grid md:grid-cols-2 gap-6">
              <!-- Essential Cookies -->
              <div class="bg-accent-600/10 border border-accent-600/20 rounded-lg p-6">
                <h4 class="text-lg font-semibold text-accent-300 mb-3">🍪 Cookies Esenciales</h4>
                <p class="text-cubic-300 text-sm leading-relaxed mb-3">
                  Necesarias para el funcionamiento básico del sitio web. No se pueden desactivar.
                </p>
                <ul class="text-cubic-300 text-sm space-y-1">
                  <li>• Autenticación de usuarios</li>
                  <li>• Preferencias de idioma</li>
                  <li>• Configuraciones de seguridad</li>
                </ul>
              </div>
              
              <!-- Analytics Cookies -->
              <div class="bg-cubic-800/30 rounded-lg p-6">
                <h4 class="text-lg font-semibold text-white mb-3">📊 Cookies de Análisis</h4>
                <p class="text-cubic-300 text-sm leading-relaxed mb-3">
                  Nos ayudan a entender cómo interactúas con nuestro sitio para mejorarlo.
                </p>
                <ul class="text-cubic-300 text-sm space-y-1">
                  <li>• Estadísticas de visitas</li>
                  <li>• Páginas más populares</li>
                  <li>• Tiempo de permanencia</li>
                </ul>
              </div>
              
              <!-- Functional Cookies -->
              <div class="bg-cubic-800/30 rounded-lg p-6">
                <h4 class="text-lg font-semibold text-white mb-3">⚙️ Cookies Funcionales</h4>
                <p class="text-cubic-300 text-sm leading-relaxed mb-3">
                  Mejoran la funcionalidad y personalización de tu experiencia.
                </p>
                <ul class="text-cubic-300 text-sm space-y-1">
                  <li>• Recordar configuraciones</li>
                  <li>• Preferencias de tema</li>
                  <li>• Configuraciones del launcher</li>
                </ul>
              </div>
              
              <!-- Third-party Cookies -->
              <div class="bg-cubic-800/30 rounded-lg p-6">
                <h4 class="text-lg font-semibold text-white mb-3">🔗 Cookies de Terceros</h4>
                <p class="text-cubic-300 text-sm leading-relaxed mb-3">
                  Servicios externos que mejoran nuestra funcionalidad.
                </p>
                <ul class="text-cubic-300 text-sm space-y-1">
                  <li>• Google Analytics</li>
                  <li>• Discord (integración)</li>
                  <li>• GitHub (integración)</li>
                </ul>
              </div>
            </div>
          </div>
          
          <!-- Cookie management -->
          <div class="bg-accent-600/10 border border-accent-600/20 rounded-lg p-6">
            <h4 class="text-lg font-semibold text-accent-300 mb-3">¿Cómo gestionar las cookies?</h4>
            <div class="space-y-4 text-cubic-300">
              <div>
                <h5 class="font-semibold text-white mb-2">En tu navegador:</h5>
                <ul class="text-sm space-y-1 ml-4">
                  <li>• <strong>Chrome:</strong> Configuración > Privacidad y seguridad > Cookies</li>
                  <li>• <strong>Firefox:</strong> Opciones > Privacidad y seguridad > Cookies</li>
                  <li>• <strong>Safari:</strong> Preferencias > Privacidad > Cookies</li>
                  <li>• <strong>Edge:</strong> Configuración > Cookies y permisos del sitio</li>
                </ul>
              </div>
              
              <div>
                <h5 class="font-semibold text-white mb-2">En CubicLauncher:</h5>
                <p class="text-sm">
                  Puedes gestionar tus preferencias de cookies desde la configuración del launcher 
                  en cualquier momento.
                </p>
              </div>
            </div>
          </div>
          
          <!-- Privacy commitment -->
          <div class="bg-cubic-800/30 rounded-lg p-6">
            <h4 class="text-lg font-semibold text-white mb-3">Nuestro compromiso con tu privacidad</h4>
            <div class="space-y-3 text-cubic-300">
              <div class="flex items-start space-x-3">
                <span class="text-accent-400 mt-1">🔒</span>
                <span>No vendemos ni compartimos tus datos personales con terceros</span>
              </div>
              <div class="flex items-start space-x-3">
                <span class="text-accent-400 mt-1">📝</span>
                <span>Utilizamos solo las cookies necesarias para mejorar tu experiencia</span>
              </div>
              <div class="flex items-start space-x-3">
                <span class="text-accent-400 mt-1">🎯</span>
                <span>Puedes desactivar las cookies no esenciales en cualquier momento</span>
              </div>
              <div class="flex items-start space-x-3">
                <span class="text-accent-400 mt-1">📧</span>
                <span>Contacta con nosotros si tienes preguntas sobre privacidad</span>
              </div>
            </div>
          </div>
          
          <!-- Contact section -->
          <div class="border-t border-cubic-800/30 pt-6">
            <h4 class="text-lg font-semibold text-white mb-4">¿Tienes preguntas?</h4>
            <p class="text-cubic-300 mb-4">
              Si tienes alguna pregunta sobre nuestra política de cookies o el uso de datos, 
              no dudes en contactarnos:
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              
              <a 
                href="https://discord.com/invite/RxQMDvVYkt" 
                target="_blank" 
                rel="noopener noreferrer"
                class="flex items-center space-x-3 p-4 bg-cubic-800/30 hover:bg-accent-600/10 rounded-lg transition-all duration-300 group"
              >
                <svg class="w-5 h-5 text-accent-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
                <span class="text-cubic-300 group-hover:text-white transition-colors duration-300">Discord</span>
              </a>
            </div>
          </div>
          
          <!-- Last updated -->
          <div class="text-center text-cubic-400 text-sm border-t border-cubic-800/30 pt-6">
            <p>Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section> 