# Reproductor Musical — Proyecto en React

Esta aplicación recrea la interfaz visual de un reproductor de música móvil diseñado para presentar el álbum *Más* de **Alejandro Sanz**. El proyecto traslada un diseño estático a una aplicación web real dividida en piezas independientes y reutilizables, respetando la distribución, los colores y la jerarquía visual del diseño original.

![Captura del resultado final](./public/preview.png)

---

## Proceso de Creación

El desarrollo de la aplicación se organizó en cuatro etapas:

1. **Preparación del entorno:** Se creó la base del proyecto y se ajustaron los estilos generales para centrar la interfaz dentro de un marco que simula la pantalla de un teléfono móvil.
2. **División en piezas independientes (Componentes):** Para evitar tener todo el código en un solo archivo, la pantalla se dividió en **7 componentes visuales** separados (encabezado, ficha del artista, controles de reproducción, casillas de verificación, barra de búsqueda, carrusel de iconos y menú inferior). Esto facilita su mantenimiento y reutilización.
3. **Separación de los datos del diseño:** Toda la información variable (nombre del cantante, título del disco, fotografía, texto del buscador e iconos) se extrajo fuera del diseño hacia un único archivo central. Además, cada pieza cuenta con valores de respaldo por defecto para que la aplicación siempre muestre contenido válido.
4. **Interactividad en las barras de reproducción:** Se añadió respuesta al clic en las dos barras horizontales de los controles para que el usuario pueda adelantar o atrasar el progreso de cada barra de forma independiente.

---

## Árbol de Componentes y Estructura del Proyecto

A continuación se muestra la estructura esencial del proyecto (excluyendo carpetas automáticas del sistema como `node_modules`):

```text
act2_alejandrosanz_hectorreyes/
├── public/
│   ├── alejandro-sanz.jpg     # Fotografía de Alejandro Sanz (artista por defecto)
│   ├── bad-bunny.jpg          # Fotografía de Bad Bunny
│   ├── pablo-alboran.jpg      # Fotografía de Pablo Alborán
│   ├── the-weekend.jpg        # Fotografía de The Weeknd
│   └── preview.png            # Captura de pantalla del resultado final
├── src/
│   ├── components/            # Piezas visuales de la interfaz
│   │   ├── Header.jsx         # Encabezado con la hora, nombre del artista y título del álbum
│   │   ├── ArtistSection.jsx  # Sección lateral con la foto del cantante y bloques de texto simulado
│   │   ├── PlayerControls.jsx # Controles multimedia y barras de progreso interactivas
│   │   ├── CheckboxGroup.jsx  # Dos columnas de casillas (desmarcada, marcada e indeterminada)
│   │   ├── Searchbar.jsx      # Barra de búsqueda redondeada con el nombre del artista
│   │   ├── EmojiCarousel.jsx  # Carrusel de 5 iconos donde el central aparece destacado
│   │   └── BottomNav.jsx      # Barra de navegación inferior con tres iconos visibles
│   ├── data/
│   │   └── cantantes.js       # Archivo único con los datos de todos los artistas preparados
│   ├── App.jsx                # Componente principal que reúne todas las piezas en pantalla
│   ├── App.css                # Hoja de estilos que da forma, color y distribución a la interfaz
│   └── main.jsx               # Archivo de arranque de la aplicación
├── .gitignore
├── index.html
├── package.json
└── README.md
```

---

## Cómo Cambiar de Cantante

La aplicación incluye fotografías y datos preparados para varios artistas (**Alejandro Sanz**, **Bad Bunny**, **Pablo Alborán** y **The Weeknd**). Para cambiar de cantante sin modificar ningún componente visual:

1. Abre el archivo `src/data/cantantes.js`.
2. Localiza la línea donde se exporta el artista activo (por defecto apunta a Alejandro Sanz):
   ```javascript
   export const cantanteActivo = cantantes.alejandro;
   ```
3. Sustituye la referencia por cualquiera de los otros artistas definidos en ese mismo archivo.
4. Guarda los cambios; toda la aplicación actualizará automáticamente la imagen, los títulos, el buscador y los iconos.

---

## Cómo Instalar y Ejecutar el Proyecto

Para ejecutar esta aplicación en cualquier ordenador:

1. **Clonar el repositorio:**
   ```bash
   git clone [https://github.com/hectoremdn/act2_alejandrosanz_hectorreyes.git](https://github.com/hectoremdn/act2_alejandrosanz_hectorreyes.git)
   cd act2_alejandrosanz_hectorreyes
   ```

2. **Instalar las dependencias:**
   ```bash
   npm install
   ```

3. **Arrancar la aplicación:**
   ```bash
   npm run dev
   ```

4. Abre en el navegador el enlace local que aparecerá en la terminal (habitualmente `http://localhost:5173`).