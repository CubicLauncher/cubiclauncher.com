# CubicLauncher - Web oficial

Una web moderna y responsiva construida con **Svelte** y **Tailwind CSS**. Esta aplicación incluye un diseño elegante con múltiples secciones, navegación suave, formularios interactivos y una experiencia de usuario optimizada.

## Características

- **Framework Moderno**: Construido con Svelte para un rendimiento excepcional
- **Diseño Responsivo**: Optimizado para todos los dispositivos y tamaños de pantalla
- **Tailwind CSS**: Framework de estilos moderno y personalizable
- **Navegación Suave**: Desplazamiento automático entre secciones
- **Formularios Interactivos**: Con validación y retroalimentación visual
- **Animaciones**: Efectos visuales atractivos y transiciones
- **SEO Optimizado**: Meta tags y estructura semántica

## Secciones Incluidas

1. **Header**: Navegación fija con menú responsivo
2. **Hero**: Sección principal con elementos de llamada a la acción
3. **Features**: Características del producto con iconos
4. **About**: Información de la empresa y equipo
5. **Contact**: Formulario de contacto e información
6. **Footer**: Enlaces, redes sociales y suscripción al boletín

## Tecnologías Utilizadas

- **Svelte 4**: Framework de JavaScript moderno
- **Vite**: Herramienta de construcción rápida
- **Tailwind CSS**: Framework de CSS utility-first
- **PostCSS**: Procesador de CSS
- **Autoprefixer**: Prefijos automáticos de proveedores para CSS

## Instalación

1. **Clona el repositorio**:
   ```bash
   git clone <tu-repositorio>
   cd cubiclauncher.com
   ```

2. **Instala las dependencias**:
   ```bash
   npm install
   ```

3. **Inicia el servidor de desarrollo**:
   ```bash
   npm run dev
   ```

4. **Abre tu navegador**:
   ```
   http://localhost:3000
   ```

## Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la construcción de producción

## Estructura del Proyecto

```
cubiclauncher.com/
├── src/
│   ├── components/
│   │   ├── Header.svelte
│   │   ├── Hero.svelte
│   │   ├── Features.svelte
│   │   ├── About.svelte
│   │   ├── Contact.svelte
│   │   └── Footer.svelte
│   ├── app.css
│   ├── App.svelte
│   └── main.js
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── svelte.config.js
└── README.md
```

## Personalización

### Colores
Los colores principales se pueden personalizar en `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    // ... tonos adicionales
    900: '#1e3a8a',
  }
}
```

### Componentes
Cada sección está modularizada en componentes Svelte independientes en `src/components/`.

### Estilos
Los estilos globales y componentes personalizados se encuentran en `src/app.css`.

## Diseño Responsivo

La aplicación está completamente optimizada para:
- **Móviles**: 320px - 768px
- **Tablets**: 768px - 1024px
- **Escritorio**: 1024px+

## Configuración de Producción

Para desplegar en producción:

1. **Construye la aplicación**:
   ```bash
   npm run build
   ```

2. **Los archivos generados estarán en `dist/`**

3. **Sube el contenido de `dist/` a tu servidor web**

## Características Destacadas

- **Navegación Suave**: Desplazamiento automático entre secciones
- **Formularios Interactivos**: Con simulación de envío y retroalimentación
- **Animaciones CSS**: Efectos de hover y transiciones suaves
- **Iconos SVG**: Integrados directamente en los componentes
- **Tipografía**: Fuente Inter de Google Fonts
- **Gradientes**: Efectos visuales modernos

## Licencia

Este proyecto está bajo la Licencia GPL-3.0. Consulta el archivo `LICENSE` para más detalles.

---

**Desarrollado utilizando Svelte y Tailwind CSS** 
