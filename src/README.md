# CubicLauncher - Aplicación Svelte

## Implementación de Lazy Loading

Esta aplicación ahora incluye un sistema completo de lazy loading para mejorar el rendimiento y la experiencia del usuario.

### Características

- **Carga Dinámica de Componentes**: Los componentes se cargan solo cuando son necesarios
- **Precarga Inteligente**: Los componentes críticos se precargan para mejor UX
- **Caché de Componentes**: Los componentes cargados se almacenan en caché para evitar re-descargas
- **Estrategia Configurable**: Fácil personalización de prioridades de carga y comportamiento de precarga
- **Monitoreo de Rendimiento**: Seguimiento y optimización de rendimiento integrados

### Cómo Funciona

1. **Componentes Críticos**: Header, Hero y Footer se cargan inmediatamente para renderizado inicial rápido
2. **Componentes Lazy**: Otros componentes se cargan dinámicamente cuando cambian las rutas
3. **Precarga**: Los componentes de alta prioridad se precargan después de la carga inicial de la página
4. **Caché**: Una vez cargados, los componentes se almacenan en caché para acceso instantáneo

### Configuración

El comportamiento del lazy loading se puede personalizar en `src/lib/lazyConfig.js`:

```javascript
export const lazyConfig = {
  // Componentes que deben cargarse inmediatamente
  critical: ['Header', 'Hero', 'Footer'],
  
  // Configuración de lazy loading para cada componente
  lazy: {
    Features: {
      path: './components/sections/Features.svelte',
      priority: 'high', // high, medium, low
      preload: true // si debe precargarse
    }
  },
  
  // Estrategia de precarga
  preload: {
    onHover: true,
    afterInitialLoad: true,
    delay: 1000
  }
};
```

### Beneficios de Rendimiento

- **Carga Inicial Más Rápida**: Solo se cargan los componentes críticos inicialmente
- **Bundle Más Pequeño**: Los componentes se dividen en chunks más pequeños
- **Mejor Experiencia de Usuario**: Transiciones suaves con indicadores de carga
- **Caché Optimizado**: Estrategia inteligente de almacenamiento en caché de componentes

### Uso

El sistema de lazy loading está automáticamente integrado en el sistema de enrutamiento. No se necesita código adicional en tus componentes.

### Monitoreo

Puedes monitorear el rendimiento del lazy loading usando las funciones de utilidad:

```javascript
import { getCacheStats } from './utils/lazyLoading.js';

// Obtener estadísticas del caché
const stats = getCacheStats();
console.log('Componentes cargados:', stats.keys);
console.log('Tamaño del caché:', stats.size);
```

### Mejores Prácticas

1. **Priorizar Componentes**: Marca los componentes de uso frecuente como alta prioridad
2. **Precargar Estratégicamente**: Solo precarga componentes que los usuarios probablemente necesiten
3. **Monitorear Rendimiento**: Usa las herramientas de monitoreo integradas para optimizar la carga
4. **Probar Flujos de Usuario**: Asegúrate de que los recorridos críticos del usuario tengan rendimiento de carga óptimo 
