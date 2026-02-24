# Proton

**Proton** es la potente librería de descarga de alto rendimiento desarrollada en **Rust** para **CubicLauncher**. Su objetivo es gestionar la descarga masiva de archivos de Minecraft (librerías, activos, nativos y el cliente) de forma extremadamente rápida, segura y eficiente.

Al estar escrito en Rust, Proton ofrece una velocidad de procesamiento superior y una gestión de memoria segura, integrándose perfectamente con Java a través de **JNI (Java Native Interface)**.

## Características Principales

- **Descargas Concurrentes**: Utiliza un sistema de semáforos para gestionar cientos de descargas simultáneas sin saturar el sistema (límite de 128 descargas concurrentes).
- **Integridad de Datos**: Verificación automática de archivos mediante hashes (SHA-1) para asegurar que no haya descargas corruptas.
- **Extracción Automática**: Gestiona la extracción de archivos nativos específicos del sistema operativo inmediatamente después de su descarga.
- **Arquitectura Asíncrona**: Basado en `tokio` para operaciones de entrada/salida no bloqueantes.
- **Interoperabilidad (JNI)**: Diseñado específicamente para ser llamado desde el núcleo de CubicLauncher en Java.

---

## Uso desde Java (JNI)

Proton se integra en CubicLauncher mediante la clase `LauncherWrapper`.

### Interfaz de Callback

Para recibir actualizaciones en tiempo real sobre el progreso de la descarga, se utiliza una interfaz de callback en Java:

```java
public interface DownloadCallback {
    void onProgress(int type, int current, int total, String fileName);
    void onComplete();
    void onError(String message);
}
```

### Tipos de Descarga (`type`)
- `0`: Cliente (`.jar` principal)
- `1`: Librerías
- `2`: Activos (Assets)
- `3`: Nativos

### Ejemplo de Implementación

```java
LauncherWrapper.startMinecraftDownload(
    "/ruta/al/juego", 
    "1.20.1", 
    new DownloadCallback() {
        @Override
        public void onProgress(int type, int current, int total, String fileName) {
            float percent = (float) current / total * 100;
            System.out.printf("[%d%%] Descargando %s...%n", (int)percent, fileName);
        }

        @Override
        public void onComplete() {
            System.out.println("¡Descarga completada correctamente!");
        }

        @Override
        public void onError(String message) {
            System.err.println("Error en la descarga: " + message);
        }
    }
);
```

---

## Uso desde Rust

Si deseas utilizar Proton como una biblioteca de Rust en otro proyecto:

### Agregar al `Cargo.toml`
```toml
[dependencies]
proton = { git = "https://github.com/CubicLauncher/Proton" }
```

### Ejemplo de Uso

```rust
use proton::{MinecraftDownloader, resolve_version_data};
use std::path::PathBuf;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let game_path = PathBuf::from("./minecraft");
    let version_id = "1.20.1".to_string();

    // Resolver datos de la versión desde los manifiestos de Mojang
    let version_data = resolve_version_data(version_id).await?;

    // Crear el descargador
    let mut downloader = MinecraftDownloader::new(game_path, version_data);

    // Iniciar descarga (opcionalmente pasando un canal de mpsc para progreso)
    downloader.download_all(None).await?;

    Ok(())
}
```

---

## Detalles Técnicos

### Concurrencia y Rendimiento
Proton utiliza constantes internas para optimizar el rendimiento según el tipo de tarea:
- `MAX_CONCURRENT_DOWNLOADS = 128`: Máximo de conexiones HTTP simultáneas.
- `MAX_CONCURRENT_EXTRACTIONS = 8`: Máximo de hilos dedicados a la descompresión de archivos nativos.

### Estructura de Directorios
La librería organiza automáticamente los archivos siguiendo el estándar de Minecraft:
- `/assets/objects/`: Objetos de recursos indexados por su hash.
- `/assets/indexes/`: Archivos JSON con el índice de activos.
- `/libraries/`: Bibliotecas JAR organizadas por paquetes.
- `/natives/`: Archivos nativos extraídos y listos para ser usados por el cargador.
- `/versions/`: Archivos JSON de configuración de cada versión.
