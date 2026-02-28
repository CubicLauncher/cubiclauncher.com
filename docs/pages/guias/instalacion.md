# Guía de Instalación de CubicLauncher

Bienvenido a la guía oficial de instalación de CubicLauncher. Sigue estos pasos detallados para configurar correctamente el launcher en tu sistema operativo y disfrutar de la mejor experiencia.

## Requisitos de Sistema

Antes de comenzar, asegúrate de que tu equipo cumpla con los siguientes requisitos mínimos para garantizar un funcionamiento fluido.

### Requisitos de Software

- **Java Runtime Environment (JRE)**: **OpenJDK 21 o posterior**. CubicLauncher requiere una versión moderna de Java para funcionar correctamente.
- **Sistema Operativo**: 
  - **Windows**: Windows 10 o Windows 11 (64 bits).
  - **Linux**: Distribuciones modernas (Ubuntu, Arch, Fedora, Debian).
  - **macOS**: macOS 10.15 o superior (Catalina en adelante).

### Requisitos de Hardware

- **Memoria RAM**:
  - Mínimo: 2 GB.
  - Recomendado: 4 GB o más.
- **Procesador (CPU)**: CPU de 64 bits.
- **Gráficos (GPU)**: Compatibilidad con OpenGL 3.3 o superior.
- **Espacio en Disco**: 
  - 100 MB para el launcher básico.
  - Espacio adicional para las versiones de Minecraft.

---

## 1. Descarga del Launcher

Puedes obtener la última versión de CubicLauncher en formato `.jar` desde nuestro sitio oficial o desde GitHub:

- **Sitio Web**: [cubiclauncher.com/descargas](https://www.cubiclauncher.com)
- **GitHub**: [Releases oficial de CubicLauncher](https://github.com/CubicLauncher/CubicLauncher/releases)

---

## 2. Instalación por Sistema Operativo

CubicLauncher se distribuye como un archivo `.jar` ejecutable, lo que permite que funcione en múltiples plataformas de la misma manera.

### Windows
1. Descarga el archivo `CubicLauncher.jar`.
2. Asegúrate de tener instalado **OpenJDK 21**.
3. Haz doble clic en el archivo para iniciar. Si el archivo se abre con un compresor (como WinRAR), haz clic derecho -> **Abrir con** -> **Java(TM) Platform SE binary**.
4. **Ubicación de archivos**: Tus configuraciones y mundos se guardarán en `%APPDATA%\CubicLauncher`.

### Linux
1. Descarga el archivo `CubicLauncher.jar`.
2. Otorga permisos de ejecución al archivo mediante la terminal:
   ```bash
   chmod +x CubicLauncher.jar
   ```
3. Ejecuta el launcher con el siguiente comando:
   ```bash
   java -jar CubicLauncher.jar
   ```
4. **Ubicación de archivos**: Los archivos se almacenarán en la carpeta oculta `~/.cubic`.

### macOS

<div class="alert alert-warning">
    <strong>Versión Experimental:</strong>
    <p>El soporte para macOS se considera experimental. No se han realizado pruebas oficiales en hardware nativo de Apple, por lo que no garantizamos su correcto funcionamiento en este momento.</p>
</div>

1. Descarga el archivo `CubicLauncher.jar`.
2. Debido a las políticas de seguridad de macOS, haz clic derecho sobre el archivo y selecciona **Abrir**.
3. Confirma que deseas abrir la aplicación de un desarrollador no verificado.
4. **Ubicación de archivos**: Se guardarán en `~/Library/Application Support/CubicLauncher`.

---

## 3. Instalación de Java (Recomendado)

Para el mejor rendimiento y compatibilidad, recomendamos encarecidamente el uso de **OpenJDK** a través de **Adoptium Temurin**:

1. Visita [Adoptium.net (Temurin 21)](https://adoptium.net/temurin/releases/?version=21).
2. Selecciona tu sistema operativo y arquitectura (x64 o AArch64 para Mac M1/M2).
3. Descarga el instalador del **JRE** o **JDK** de la versión 21.
4. Sigue los pasos del instalador y asegúrate de marcar la opción **"Set JAVA_HOME variable"** si aparece.

---

## 4. Solución de Problemas Comunes

- **"El archivo no es una aplicación válida"**: Asegúrate de que estás intentando abrir un archivo `.jar` y no un archivo comprimido. Necesitas Java instalado para "ejecutar" el archivo.
- **Error "Incompatible JRE"**: Si recibes este error, significa que tu sistema está usando una versión de Java antigua (como Java 8 o 17). Instala **OpenJDK 21** y asegúrate de que sea la versión por defecto.
- **La consola se cierra rápido**: Intenta ejecutar el launcher desde una terminal/consola de comandos con `java -jar CubicLauncher.jar` para ver el mensaje de error exacto.

---

<div class="alert alert-sugerencia">
    <strong>Soporte en Discord</strong>
    <p>¿Aún tienes problemas? Únete a nuestro <a href="https://discord.gg/WQ5KtQYj">Discord</a> y nuestro equipo te ayudará con gusto.</p>
</div>
