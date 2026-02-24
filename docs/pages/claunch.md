# CLaunch

**CLaunch** es la librería de lanzamiento de Minecraft desarrollada por CubicLauncher. Está diseñada para ser una solución integral y fácil de usar para lanzar Minecraft en múltiples entornos, gestionando automáticamente la complejidad de las dependencias, nativos y argumentos de la JVM.

## Soporte de Versiones

CLaunch es compatible con prácticamente todas las versiones de Minecraft gracias a su sistema de resolución de JSON dinámico:

- **Vanilla**: Soporte total desde las versiones actuales hasta las clásicas.
- **Snapshots**: Compatibilidad nativa con versiones de desarrollo.
- **Alphas y Betas**: Manejo correcto de argumentos legacy y estructuras de activos antiguas.
- **Modloaders**: Detección automática y carga de **Forge**, **NeoForge** y **Fabric**.

---

## Punto de Entrada: `Launcher`

La clase `com.cubiclauncher.claunch.Launcher` es la interfaz principal.

### Métodos de Lanzamiento

| Método | Retorno | Descripción |
| :--- | :--- | :--- |
| `launch(...)` | `void` | Ejecuta el juego y hereda la E/S. El hilo se bloquea hasta que el juego cierra. |
| `launchWithProcess(...)` | `Process` | Inicia el juego y devuelve el proceso para monitoreo asíncrono. |
| `launchWithDPrime(...)` | `Process` | Variante optimizada para entornos con variables de entorno DPrime. |

#### Parámetros Principales:
- `versionJsonPath`: Ruta absoluta al archivo `.json` de la versión (ej. `1.20.1.json`).
- `gameDir`: Directorio raíz donde CLaunch buscará las carpetas `shared/`, `libraries/` y `assets/`.
- `instanceDir`: Directorio específico de la instancia de juego (donde se guardan `saves`, `mods`, `config`).
- `cracked`: Si es `true`, deshabilita la validación con los servidores de Mojang y permite jugar offline.

---

## Procesamiento de Argumentos

CLaunch incluye un sistema inteligente de construcción de comandos que procesa dinámicamente:

### Argumentos de la JVM
- **Gestión de Memoria**: Configura `-Xms` y `-Xmx` basándose en los parámetros de entrada.
- **Detección de OS**: Evalúa las reglas del JSON para aplicar argumentos específicos según el sistema operativo (Windows, Linux, macOS).
- **Entorno No-Premium**: Cuando `cracked` es true, inyecta variables de sistema para redirigir las APIs de autenticación y sesiones, evitando cuelgues al intentar conectar con servidores oficiales.

### Argumentos del Juego
- **Resolución**: Aplica `--width`, `--height` y otros flags estándar.
- **Soporte Legacy**: Para versiones antiguas (Alphas, Betas), procesa la cadena `minecraftArguments` clásica.
- **Soporte Moderno**: Para versiones nuevas, procesa el array de argumentos condicionales.

---

## Configuración Avanzada: `LaunchOptions`

Permite configurar características específicas del lanzamiento de la instancia de juego:

```java
LaunchOptions options = LaunchOptions.defaults()
    .withDemo(false)                                     // Habilitar/Deshabilitar modo demo
    .withQuickPlayMultiplayer("play.cubicserver.com")    // Conexión automática a servidor
    // Opcionalmente:
    // .withQuickPlaySingleplayer("Mi Mundo") 
    // .withQuickPlayRealms("realm-id")
```

---

## Sistema de Modloaders

CLaunch detecta automáticamente el tipo de cargador analizando el ID de la versión y las bibliotecas presentes:

### Fabric
Se detecta si el ID contiene "fabric". CLaunch resuelve el classpath incluyendo las bibliotecas del intermediario y del loader según la jerarquía del JSON.

### Forge / NeoForge
- **Herencia**: Maneja versiones que heredan de una base Vanilla (comun en Forge moderno).
- **Universal JAR**: Busca y prioriza el archivo universal de Forge en el classpath.
- **Argumentos JVM**: Procesa reglas del sistema operativo para argumentos específicos de Forge.

---

## Estructura de Archivos Requerida

CLaunch sigue un estándar de organización eficiente para compartir recursos entre versiones:

```text
. (Directorio Raíz / gameDir)
└── shared/
    ├── versions/
    │   └── 1.20.1/
    │       ├── 1.20.1.json
    │       └── 1.20.1.jar
    ├── libraries/      (JARs de Mojang y modloaders)
    ├── assets/         (Recursos: sonidos, texturas)
    │   ├── indexes/
    │   └── objects/
    └── natives/        (DLLs/SOs extraídas automáticamente)
```

---

## Ejemplo Completo: Lanzamiento de Fabric con Modos Especiales

```java
import com.cubiclauncher.claunch.Launcher;
import com.cubiclauncher.claunch.models.LaunchOptions;
import java.nio.file.Paths;
import java.util.HashMap;
import java.util.Map;

public class LauncherApp {
    public static void main(String[] args) {
        try {
            // 1. Configurar opciones de juego
            LaunchOptions options = LaunchOptions.defaults()
                    .withQuickPlayMultiplayer("vanilla.cubiclauncher.com");

            // 2. Variables de entorno adicionales (opcional)
            Map<String, String> env = new HashMap<>();
            env.put("MESA_GL_VERSION_OVERRIDE", "4.5");

            // 3. Lanzar el proceso
            Process p = Launcher.launchWithProcess(
                    "/home/user/.minecraft/shared/versions/fabric-1.20.1/fabric-1.20.1.json",
                    "/home/user/.minecraft",
                    Paths.get("/home/user/.minecraft/instances/mi-instancia"),
                    "JugadorCubic",
                    "/usr/lib/jvm/java-17-openjdk/bin/java",
                    "2G", "4G",  // RAM Min/Max
                    1920, 1080,  // Resolución
                    true,        // No-Premium
                    options,
                    env
            );

            System.out.println("Juego iniciado con PID: " + p.pid());
            
        } catch (Exception e) {
            System.err.println("Error crítico al lanzar: " + e.getMessage());
        }
    }
}
```

---

## Resolución de Problemas (FAQ)

### ¿Cómo maneja CLaunch las diferentes versiones de Java?
CLaunch no busca Java automáticamente; requiere que proporciones la ruta al ejecutable. Sin embargo, lee el campo `javaVersion` del JSON para informar al launcher principal sobre los requerimientos mínimos de JRE.

### ¿CLaunch descarga los archivos faltantes?
**No.** CLaunch es la biblioteca de *lanzamiento*, no de descarga. Debes asegurarte de que las bibliotecas y el JAR del cliente ya existan en la carpeta `shared/` antes de llamar a `launch()`.

### Error: "Main class not found"
Esto ocurre si el JSON de la versión está corrupto o si la jerarquía de herencia no puede encontrar la clase principal (ej. `net.minecraft.client.main.Main`). Revisa que los archivos `.json` base existan en `shared/versions/`.
