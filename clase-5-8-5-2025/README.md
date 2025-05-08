# 🧪 Práctica Git para estudiantes con conocimientos de HTML y CSS

## 🧱 Nivel básico

### Iniciar un proyecto y hacer el primer commit
- Crear una carpeta llamada `mi-sitio`.
- Dentro, crear un archivo `index.html` con una estructura básica (`<!DOCTYPE html>`, etc.).
- Inicializar un repositorio con `git init`.
- Añadir y hacer el primer commit:  
  `"Primer commit: agrego index.html"`.

### Agregar una hoja de estilos y hacer commit
- Crear `estilos.css` con algunas reglas básicas (por ejemplo, color de fondo).
- Enlazar el CSS en el `index.html`.
- Añadir ambos archivos y hacer commit:  
  `"Agrego hoja de estilos y la vinculo en index.html"`.

### Modificar el contenido de la página y hacer commit
- Agregar un título `<h1>` y un párrafo en el HTML.
- Hacer `git add` y luego commit:  
  `"Agrego título y párrafo al index.html"`.


## 🌐 Subir el repositorio a un repositorio remoto

### Crear el repositorio en GitHub
1. Ingresar a [github.com](https://github.com) y crear un nuevo repositorio vacío (sin README, .gitignore ni licencia).
2. Copiar la URL del repositorio (por ejemplo: `https://github.com/tuusuario/mi-sitio.git`).

### Conectar y subir desde local
3. En la terminal, dentro de la carpeta `mi-sitio`, ejecutar:
   ```bash
   git remote add origin https://github.com/tuusuario/mi-sitio.git
   git push
   ```

> ✅ ¡Listo! Ahora tu proyecto está también en GitHub.
