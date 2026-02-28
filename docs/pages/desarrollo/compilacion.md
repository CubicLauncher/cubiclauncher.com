# Compilación y Ejecución Local

Esta guía está dirigida a desarrolladores que desean descargar el código fuente de CubicLauncher, compilarlo y ejecutarlo en su propio entorno local.

## Requisitos previos

Antes de comenzar, asegúrate de tener instalado lo siguiente:

- **Git**: Para clonar el repositorio.
- **OpenJDK 21 JDK**: Es fundamental contar con el **JDK** (Java Development Kit) de la versión 21. No basta con el JRE (Runtime Environment).
  - Recomendamos descargar **Adoptium Temurin 21**.
- **IDE (Opcional pero recomendado)**: 
  - **IntelliJ IDEA** (Excelente soporte para Gradle y JavaFX).
  - **VS Code** (Con las extensiones de Java correspondientes).

---

##  Pasos para la ejecución local

Sigue estos comandos en tu terminal para poner en marcha el proyecto:

### 1. Clonar el repositorio
Primero, descarga el código fuente a tu equipo:
```bash
git clone https://github.com/CubicLauncher/CubicLauncher.git
cd CubicLauncher
```

### 2. Dar permisos al wrapper de Gradle (Solo Linux/macOS)
Asegúrate de que el script de Gradle tenga permisos de ejecución:
```bash
chmod +x gradlew
```

### 3. Ejecutar el proyecto
Puedes iniciar el launcher directamente sin necesidad de compilar un archivo final:
```bash
./gradlew run
```
*En Windows usa `gradlew.bat run`*

---

## Compilación y Generación del JAR

Si deseas generar el archivo ejecutable (`.jar`) para distribuirlo o probarlo fuera del entorno de desarrollo:

### Verificar la compilación
Si solo deseas comprobar que no hay errores de sintaxis o fallos en el código:
```bash
./gradlew build
```

### Generar el Fat JAR (Recomendado para distribución)
Para crear un archivo ejecutable que contenga todas las librerías necesarias (incluyendo JavaFX) en un solo archivo:
```bash
./gradlew fatJar
```

Una vez finalizado, el archivo se generará en la carpeta:
`build/libs/CubicLauncher-all.jar` (o similar)

### Limpiar compilaciones anteriores
Si experimentas errores extraños al compilar, puedes realizar una limpieza de los archivos temporales de Gradle:
```bash
./gradlew clean
```

---

## Desarrollo de la Interfaz (JavaFX)

CubicLauncher utiliza **JavaFX** para su interfaz gráfica. Si planeas modificar el diseño:
- Los archivos de vista se encuentran en `src/main/resources/`.
- Los estilos visuales se definen mediante archivos **CSS**.

---

<div class="alert alert-note">
    <strong>Sugerencia para contribuciones:</strong>
    <p>Antes de enviar un Pull Request, comprueba que el proyecto no tenga fallos con <code>./gradlew build</code> y que el ejecutable se genere sin problemas usando <code>./gradlew fatJar</code>.</p>
</div>
