<script>
let selectedOption = null;

const supportOptions = [
  {
    name: 'Centro de ayuda',
    description: 'Consulta la documentación o busca respuestas a preguntas frecuentes.',
    subOptions: [
      {
        name: 'GitHub',
        href: 'https://github.com/CubicLauncher/CubicLauncher/issues'
      },
      {
        name: 'Discord',
        href: 'https://discord.gg/RxQMDvVYkt'
      }
    ]
  },
  {
    name: 'Reportar bug',
    description: 'Informa de errores o problemas técnicos.',
    subOptions: [
      {
        name: 'GitHub',
        href: 'https://github.com/CubicLauncher/issues'
      },
      {
        name: 'Discord',
        href: 'https://discord.gg/RxQMDvVYkt'
      }
    ]
  },
  {
    name: 'Solicitar función',
    description: 'Sugiere nuevas características o mejoras.',
    subOptions: [
      {
        name: 'GitHub',
        href: 'https://github.com/CubicLauncher/discussions'
      },
      {
        name: 'Discord',
        href: 'https://discord.gg/RxQMDvVYkt'
      }
    ]
  },
  {
    name: 'Discord',
    href: 'https://discord.gg/RxQMDvVYkt',
    description: 'Únete a la comunidad y recibe soporte en tiempo real.'
  }
];

function handleOptionClick(option) {
  if (option.subOptions) {
    selectedOption = option.name;
  } else if (option.href) {
    window.open(option.href, '_blank', 'noopener noreferrer');
  }
}

function handleSubOptionClick(subOption) {
  window.open(subOption.href, '_blank', 'noopener noreferrer');
  selectedOption = null;
}
</script>

<div class="max-w-xl mx-auto py-16 px-4">
  <h1 class="text-3xl font-bold mb-6 text-center text-white">¿Por dónde quieres recibir soporte?</h1>
  <div class="grid gap-6">
    {#each supportOptions as option}
      <div class="space-y-3">
        <button
          type="button"
          class="w-full text-left block p-6 rounded-xl bg-cubic-900 hover:bg-accent-700/80 transition-all duration-300 shadow-lg border border-cubic-800 text-white group focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-opacity-50 transform hover:scale-[1.02]"
          on:click={() => handleOptionClick(option)}
        >
          <div class="flex flex-col">
            <span class="text-lg font-semibold group-hover:text-accent-200 transition-colors duration-300">{option.name}</span>
            <span class="text-cubic-300 text-sm mt-2 group-hover:text-cubic-200 transition-colors duration-300">{option.description}</span>
          </div>
        </button>
        {#if selectedOption === option.name && option.subOptions}
          <div class="flex gap-3 justify-center animate-fadeIn">
            {#each option.subOptions as subOption}
              <button
                type="button"
                class="px-6 py-3 rounded-lg bg-accent-700 text-white hover:bg-accent-600 transition-all duration-300 shadow-lg border border-accent-600 hover:border-accent-500 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-opacity-50 font-medium"
                on:click={() => handleSubOptionClick(subOption)}
              >
                {subOption.name}
              </button>
            {/each}
          </div>
        {/if}
      </div>
    {/each}
  </div>
</div>

<style>
  .bg-cubic-900 { background-color: #181825; }
  .border-cubic-800 { border-color: #232336; }
  .text-cubic-300 { color: #a1a1aa; }
  .hover\:bg-accent-700\/80:hover { background-color: #6d6dd6cc; }
  .bg-accent-700 { background-color: #6d6dd6; }
  .hover\:bg-accent-600:hover { background-color: #5a5ac7; }
  .border-accent-600 { border-color: #5a5ac7; }
  .hover\:border-accent-500:hover { border-color: #4a4ab8; }
  .focus\:ring-accent-500:focus { --tw-ring-color: #4a4ab8; }
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  .animate-fadeIn {
    animation: fadeIn 0.3s ease-out;
  }
</style> 
