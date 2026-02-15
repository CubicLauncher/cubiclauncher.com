# Instalación de CubicLauncher

Para comenzar a usar CubicLauncher, asegúrate de cumplir con los requisitos mínimos y seguir los pasos de instalación para tu sistema operativo.

## Requisitos previos

CubicLauncher está desarrollado en Java 21. Es fundamental tener instalada una versión compatible del Java Runtime Environment (JRE).

- **Java**: Se recomienda **Java 21** para el funcionamiento del launcher.
- **Memoria**: Al menos 2GB de RAM recomendados (ajustable en la configuración).
- **Espacio**: El launcher en sí es ligero, pero Minecraft y sus versiones requerirán espacio adicional.

## Instalación por Sistema Operativo

### Windows
1. Descarga el archivo `.jar` ejecutable desde la sección de [Releases en GitHub](https://github.com/CubicLauncher/CubicLauncher/releases).
2. Asegúrate de tener Java 21 instalado (`java -version` en la terminal).
3. Haz doble clic en el archivo para iniciar.
4. Los archivos de configuración se guardarán en `%APPDATA%\CubicLauncher`.

### Linux
1. Descarga el archivo `.jar`.
2. Otorga permisos de ejecución: `chmod +x CubicLauncher.jar`.
3. Ejecuta con: `java -jar CubicLauncher.jar`.
4. Los archivos de configuración se guardarán en `~/.cubic`.

### macOS
1. Descarga el archivo `.jar`.
2. Asegúrate de tener los permisos necesarios para ejecutar aplicaciones de terceros.
3. Los archivos de configuración se guardarán en `~/Library/Application Support/CubicLauncher`.

## Estructura de archivos

Dentro de la carpeta de CubicLauncher (donde se instale en tu SO), encontrarás:

- `instances/`: Tus perfiles y versiones de Minecraft.
- `settings.json`: Configuración general del launcher.
- `lang/`: Archivos de idioma personalizados.
- `styles/`: Archivos CSS para personalización visual.

<div class="alert alert-info">
    <strong>Sugerencia:</strong>
    <p>Si tienes problemas con la instalación, consulta nuestra sección de <a href="#soporte">Soporte</a>.</p>
</div>
