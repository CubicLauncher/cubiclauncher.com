# Configuración de CubicLauncher

CubicLauncher permite una gran flexibilidad para ajustar el rendimiento y comportamiento del juego. Puedes acceder a estos ajustes desde el panel de **Configuración** en la interfaz principal.

## Ajustes del Launcher

- **Idioma**: Cambia el idioma de la interfaz (por defecto: Español).
- **Actualización automática**: Mantén el launcher siempre al día con las últimas correcciones.
- **Consola de errores**: Útil para depurar si el juego o el launcher se cierran inesperadamente.
- **Cerrar al iniciar juego**: Opción para cerrar el launcher automáticamente una vez que Minecraft ha arrancado.

## Ajustes de Minecraft

### Versiones
Puedes habilitar la visibilidad de versiones en desarrollo:
- **Mostrar versiones Alpha**: Acceso a las versiones más antiguas de desarrollo.
- **Mostrar versiones Beta**: Acceso a las primeras betas del juego.

### Rendimiento
- **Forzar GPU dedicada**: En equipos con gráficos integrados y dedicados (como laptops), intenta forzar el uso de la tarjeta más potente.

## Java y Memoria

Esta es la sección más importante para garantizar un juego fluido.

- **Memoria Mínima / Máxima**: Ajusta cuánta RAM destinar a Minecraft. 
  - *Recomendación*: Para versiones modernas con mods, se sugieren al menos 4GB (si tu equipo lo permite).
- **Rutas de Java (JRE)**: CubicLauncher te permite definir rutas específicas para diferentes versiones de Java:
  - JRE 8 (para versiones antiguas).
  - JRE 17.
  - JRE 21 (recomendado para versiones actuales).
- **Argumentos JVM**: Añade parámetros adicionales para optimizar el recolector de basura o el rendimiento del procesador.

## Archivo settings.json

Si prefieres editar la configuración manualmente (para usuarios avanzados), puedes encontrar el archivo `settings.json` en la carpeta raíz de CubicLauncher.

```json
{
  "language": "es_es",
  "autoUpdate": true,
  "errorConsole": false,
  "maxMemory": 4,
  "maxMemoryUnit": "GB"
}
```

<div class="alert alert-warning">
    <strong>¡Cuidado!</strong>
    <p>Modificar el archivo settings.json incorrectamente puede causar que el launcher no inicie. Haz una copia de seguridad antes de editar.</p>
</div>
