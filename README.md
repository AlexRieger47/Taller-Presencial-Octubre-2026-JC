# Dulce Horno · Página de React para repasar

Página web de una repostería ficticia, hecha con React y Vite. Sirve para repasar componentes, props, state y listas con un ejemplo completo que se puede abrir, tocar y adaptar al propio emprendimiento.

![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES_Modules-F7DF1E?logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-%3E%3D18-339933?logo=nodedotjs&logoColor=white)
![Último commit](https://img.shields.io/github/last-commit/AlexRieger47/Taller-Presencial-Octubre-2026-JC)

## Ruta rápida

Requisito: tener instalado [Node.js](https://nodejs.org/) 18 o superior. Para comprobarlo, ejecutar `node -v` en la terminal.

1. Abrir una terminal en la carpeta del proyecto (la que contiene `package.json`).
2. Instalar las dependencias: `npm install`
3. Encender la página: `npm run dev`
4. Abrir en el navegador la dirección que aparece en la terminal, normalmente `http://localhost:5173`.

Resultado esperado: la página de Dulce Horno con sus productos. Cada cambio guardado en `src/` se ve al instante, sin recargar.

## Qué hay en el repositorio

| Ruta | Qué contiene |
|---|---|
| `src/App.jsx` | La página completa: junta todas las piezas |
| `src/components/` | Las piezas de la página: encabezado, foto principal, filtros, tarjetas y pie |
| `src/data/productos.js` | La lista de productos y categorías |
| `src/App.css` | Colores, letras y formas |
| `docs/FAQ.md` | Preguntas frecuentes: dónde está cada cosa y por qué funciona así |
| `docs/ANEXO.md` | Los cuatro códigos base de la S20 para reconstruir la página desde cero |

## Por dónde empezar

1. Leer `src/App.jsx`: muestra cómo se arma la página.
2. Abrir `src/components/ProductoCard.jsx` y probar el botón «Agregar al pedido»: ahí vive el state.
3. Cambiar un precio en `src/data/productos.js` y ver el cambio en el navegador.

¿Alguna duda en el camino? Casi seguro está respondida en `docs/FAQ.md`.

## Qué no incluye

- **Base de datos ni API:** los productos están escritos a mano en `src/data/productos.js`. La conexión con MongoDB se explica en `docs/FAQ.md` § 7.
- **Fotos propias:** las imágenes se cargan desde Unsplash, así que la página necesita internet para mostrarlas.

## Comandos disponibles

| Comando | Para qué sirve |
|---|---|
| `npm run dev` | Encender la página mientras se trabaja |
| `npm run build` | Preparar la versión final en la carpeta `dist/` |
| `npm run preview` | Ver esa versión final antes de publicarla |

## Siguiente paso

Adaptar la página al propio emprendimiento siguiendo `docs/FAQ.md` § 8, «¿Qué cambio primero?».
