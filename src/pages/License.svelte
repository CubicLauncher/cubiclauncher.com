<script>
  function goBack() {
    window.history.back();
  }
</script>

<section id="license" class="py-20 px-6 lg:px-8 relative overflow-hidden min-h-screen">
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
      
      <h1 class="text-4xl lg:text-5xl font-bold text-white mb-4">Licencias de CubicMC</h1>
      <p class="text-xl text-cubic-300">
        LGPL-2.1 para librerías • GPL-3.0 para proyectos
      </p>
    </div>
    
    <!-- License Content -->
    <div class="bg-cubic-900/50 backdrop-blur-xl rounded-2xl border border-cubic-800/30 p-8 lg:p-12">
      <div class="prose prose-invert max-w-none">
        <div class="space-y-8">
          <!-- License Overview -->
          <div class="grid md:grid-cols-2 gap-6 mb-8">
            <!-- LGPL-2.1 Section -->
            <div class="bg-cubic-800/30 rounded-lg p-6 border border-accent-600/20">
              <h3 class="text-xl font-bold text-accent-300 mb-3">📚 Librerías - LGPL-2.1</h3>
              <p class="text-cubic-300 mb-4">
                Nuestras librerías y componentes reutilizables utilizan la licencia LGPL-2.1, 
                permitiendo mayor flexibilidad para su uso en proyectos comerciales.
              </p>
              <ul class="space-y-2 text-sm text-cubic-300">
                <li>• Permite enlazar con software propietario</li>
                <li>• Ideal para librerías y componentes</li>
                <li>• Menos restrictiva que GPL</li>
              </ul>
            </div>
            
            <!-- GPL-3.0 Section -->
            <div class="bg-cubic-800/30 rounded-lg p-6 border border-accent-600/20">
              <h3 class="text-xl font-bold text-accent-300 mb-3">🚀 Proyectos - GPL-3.0</h3>
              <p class="text-cubic-300 mb-4">
                Nuestros proyectos principales utilizan la licencia GPL-3.0, 
                asegurando que las modificaciones permanezcan abiertas.
              </p>
              <ul class="space-y-2 text-sm text-cubic-300">
                <li>• Código abierto completo</li>
                <li>• Modificaciones deben ser GPL</li>
                <li>• Protege la libertad del software</li>
              </ul>
            </div>
          </div>
          
          <!-- LGPL-2.1 License Header -->
          <div class="text-center border-b border-cubic-800/30 pb-6">
            <h2 class="text-2xl font-bold text-white mb-4">GNU LESSER GENERAL PUBLIC LICENSE</h2>
            <p class="text-cubic-300">Version 2.1, February 1999 - Para librerías</p>
          </div>
          
          <!-- Copyright Notice -->
          <div class="bg-cubic-800/30 rounded-lg p-6">
            <h3 class="text-lg font-semibold text-white mb-3">Copyright (C) 2024 CubicMC</h3>
            <p class="text-cubic-300 leading-relaxed">
              This program is free software; you can redistribute it and/or modify it under the terms of the 
              GNU Lesser General Public License as published by the Free Software Foundation; either version 2.1 
              of the License, or (at your option) any later version.
            </p>
          </div>
          
          <!-- License Text -->
          <div class="space-y-6 text-cubic-300 leading-relaxed">
            <p>
              This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; 
              without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. 
              See the GNU Lesser General Public License for more details.
            </p>
            
            <p>
              You should have received a copy of the GNU Lesser General Public License along with this program; 
              if not, write to the Free Software Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
            </p>
            
            <div class="bg-accent-600/10 border border-accent-600/20 rounded-lg p-6">
              <h4 class="text-lg font-semibold text-accent-300 mb-3">¿Por qué LGPL-2.1 para librerías?</h4>
              <ul class="space-y-2 text-cubic-300">
                <li class="flex items-start space-x-3">
                  <span class="text-accent-400 mt-1">•</span>
                  <span><strong>Flexibilidad:</strong> Permite usar nuestras librerías en proyectos comerciales</span>
                </li>
                <li class="flex items-start space-x-3">
                  <span class="text-accent-400 mt-1">•</span>
                  <span><strong>Adopción:</strong> Facilita la integración en diferentes tipos de proyectos</span>
                </li>
                <li class="flex items-start space-x-3">
                  <span class="text-accent-400 mt-1">•</span>
                  <span><strong>Comunidad:</strong> Fomenta la colaboración manteniendo la libertad</span>
                </li>
                <li class="flex items-start space-x-3">
                  <span class="text-accent-400 mt-1">•</span>
                  <span><strong>Transparencia:</strong> El código fuente de las librerías permanece abierto</span>
                </li>
              </ul>
            </div>
            
            <!-- GPL-3.0 Section -->
            <div class="bg-cubic-800/30 rounded-lg p-6 border-l-4 border-accent-500">
              <h4 class="text-lg font-semibold text-white mb-3">GPL-3.0 para Proyectos Principales</h4>
              <p class="text-cubic-300 mb-4">
                Nuestros proyectos principales como CubicMC Launcher utilizan GPL-3.0 para asegurar que 
                cualquier modificación o derivado permanezca bajo la misma licencia libre.
              </p>
              <div class="bg-accent-600/10 rounded-lg p-4">
                <h5 class="font-semibold text-accent-300 mb-2">Características de GPL-3.0:</h5>
                <ul class="space-y-1 text-sm text-cubic-300">
                  <li>• Cualquier trabajo derivado debe ser GPL-3.0</li>
                  <li>• Protección contra patentes de software</li>
                  <li>• Compatibilidad con licencias Apache 2.0</li>
                  <li>• Garantiza la libertad del software a largo plazo</li>
                </ul>
              </div>
            </div>
            
            <div class="bg-cubic-800/30 rounded-lg p-6">
              <h4 class="text-lg font-semibold text-white mb-3">Tus derechos bajo LGPL-2.1 (Librerías):</h4>
              <ul class="space-y-2 text-cubic-300">
                <li>✅ Usar nuestras librerías en proyectos comerciales</li>
                <li>✅ Modificar el código fuente de las librerías</li>
                <li>✅ Distribuir copias modificadas</li>
                <li>✅ Enlazar con software propietario</li>
                <li>✅ Usar en aplicaciones cerradas</li>
              </ul>
            </div>
            
            <div class="bg-cubic-800/30 rounded-lg p-6">
              <h4 class="text-lg font-semibold text-white mb-3">Tus responsabilidades:</h4>
              <ul class="space-y-2 text-cubic-300">
                <li>📋 Mantener los avisos de copyright originales</li>
                <li>📋 Incluir una copia de la licencia correspondiente</li>
                <li>📋 Documentar los cambios realizados</li>
                <li>📋 Hacer disponible el código fuente modificado de las librerías</li>
                <li>📋 Para proyectos GPL-3.0: cualquier derivado debe ser GPL-3.0</li>
              </ul>
            </div>
          </div>
          
          <!-- Links Section -->
          <div class="border-t border-cubic-800/30 pt-6">
            <h4 class="text-lg font-semibold text-white mb-4">Enlaces útiles:</h4>
            <div class="grid md:grid-cols-2 gap-4">
              <a 
                href="https://www.gnu.org/licenses/old-licenses/lgpl-2.1.html" 
                target="_blank" 
                rel="noopener noreferrer"
                class="flex items-center space-x-3 p-4 bg-cubic-800/30 hover:bg-accent-600/10 rounded-lg transition-all duration-300 group"
              >
                <svg class="w-5 h-5 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
                <span class="text-cubic-300 group-hover:text-white transition-colors duration-300">Licencia LGPL-2.1 completa</span>
              </a>
              
              <a 
                href="https://www.gnu.org/licenses/gpl-3.0.html" 
                target="_blank" 
                rel="noopener noreferrer"
                class="flex items-center space-x-3 p-4 bg-cubic-800/30 hover:bg-accent-600/10 rounded-lg transition-all duration-300 group"
              >
                <svg class="w-5 h-5 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
                <span class="text-cubic-300 group-hover:text-white transition-colors duration-300">Licencia GPL-3.0 completa</span>
              </a>
              
              <a 
                href="https://github.com/CubicLauncher" 
                target="_blank" 
                rel="noopener noreferrer"
                class="flex items-center space-x-3 p-4 bg-cubic-800/30 hover:bg-accent-600/10 rounded-lg transition-all duration-300 group"
              >
                <svg class="w-5 h-5 text-accent-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span class="text-cubic-300 group-hover:text-white transition-colors duration-300">Código fuente en GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section> 