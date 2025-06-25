# Estructura del Proyecto Cubic MC

Este documento describe la organización y estructura de archivos del proyecto Cubic MC.

## 📁 Estructura de Directorios

```
src/
├── components/          # Componentes de Svelte
│   ├── layout/         # Componentes de layout (Header, Footer, etc.)
│   ├── ui/             # Componentes de interfaz reutilizables
│   ├── sections/       # Componentes de secciones de página
│   └── index.js        # Exportaciones centralizadas
├── lib/                # Librerías y constantes
│   └── constants.js    # Constantes de la aplicación
├── utils/              # Funciones utilitarias
│   └── scroll.js       # Utilidades de scroll
├── types/              # Definiciones de tipos
│   └── index.js        # Tipos y interfaces
├── styles/             # Archivos de estilos
│   └── app.css         # Estilos principales
├── assets/             # Recursos estáticos
│   ├── icons/          # Iconos SVG
│   └── extra/          # Otros recursos
├── App.svelte          # Componente principal
└── main.js             # Punto de entrada
```

## 🧩 Componentes

### Layout Components (`components/layout/`)
- **Header.svelte**: Navegación principal y logo

### UI Components (`components/ui/`)
- **Button.svelte**: Botón reutilizable con variantes
- **Card.svelte**: Contenedor de tarjeta con efectos

### Section Components (`components/sections/`)
- **Hero.svelte**: Sección principal de bienvenida
- **Features.svelte**: Sección de características
- **About.svelte**: Sección acerca de

## 📚 Librerías y Utilidades

### Constants (`lib/constants.js`)
- Configuración de la aplicación
- Datos de navegación
- Datos de características

### Utils (`utils/scroll.js`)
- Funciones de scroll suave
- Detección de elementos en viewport
- Listeners de scroll optimizados

### Types (`types/index.js`)
- Definiciones de tipos TypeScript/JSDoc
- Constantes de tipos para componentes

## 🎨 Estilos

Los estilos están organizados en `styles/app.css` y utilizan Tailwind CSS para el diseño.

## 📦 Importaciones

Para facilitar las importaciones, se puede usar el archivo de índice:

```javascript
// Importación individual
import Header from './components/layout/Header.svelte';

// O usando el índice (recomendado)
import { Header, Button, Hero } from './components';
```

## 🔧 Convenciones

1. **Nomenclatura**: PascalCase para componentes, camelCase para utilidades
2. **Organización**: Componentes agrupados por función
3. **Documentación**: JSDoc para funciones y tipos
4. **Consistencia**: Estructura similar en todos los componentes 