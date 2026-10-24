# Preguntas frecuentes · Página de Dulce Horno

Guía para los estudiantes. Cada pregunta trae una respuesta breve para su conocimiento, señalando la ubicación de todo. Todas las rutas son relativas a `dulce-horno/`.

> Regla de oro, igual que en la sesión: antes de leer la respuesta, pregúntate: «¿Dónde creo que está?», «¿Qué pasaría si…?». Mira el código solo después.

---

## Índice

1. [Estructura del proyecto](#1-estructura-del-proyecto)
2. [Imágenes](#2-imágenes)
3. [Props](#3-props)
4. [State](#4-state)
5. [Listas y filtros](#5-listas-y-filtros)
6. [Diseño y estilos](#6-diseño-y-estilos)
7. [Conexión con MongoDB y la API](#7-conexión-con-mongodb-y-la-api)
8. [Adaptarla a mi emprendimiento](#8-adaptarla-a-mi-emprendimiento)

---

## 1. Estructura del proyecto

### ¿Por qué hay tantos archivos si en la S20 eran cuatro?

Son los mismos cuatro del Anexo B ([`docs/ANEXO.md`](ANEXO.md)), más tres componentes nuevos y un archivo de datos. Cada componente es una pieza de la página:

| Archivo | Qué pieza es |
|---|---|
| `src/components/Encabezado.jsx` | La franja rosa de arriba (Código A) |
| `src/components/Hero.jsx` | La foto grande de la torta con los botones |
| `src/components/FiltroCategorias.jsx` | Los botones Todos, Tortas, Cafés… |
| `src/components/ProductoCard.jsx` | Cada tarjeta de producto (Código B) |
| `src/components/PiePagina.jsx` | El pie con dirección y contacto |
| `src/data/productos.js` | La lista de productos |
| `src/App.jsx` | Arma la página juntando las piezas (Código C) |
| `src/App.css` | Colores, letras y formas (Código D) |

Analogía: `App.jsx` es la vitrina; los componentes son los moldes que se ponen en ella.

### ¿Qué es `main.jsx`? No lo tocamos en la S20.

Es el archivo que enciende React y pone `<App />` dentro de la página. Vite lo crea solo y casi nunca se modifica.

---

## 2. Imágenes

### Las fotos no están guardadas en ninguna carpeta. ¿De dónde salen?

De internet. Cada producto guarda una **dirección web** (URL) de su foto, no la foto en sí. El navegador la descarga cuando la necesita.

Se ve en `src/data/productos.js`:

```js
const foto = (id, ancho = 800) =>
  `https://images.unsplash.com/photo-${id}?w=${ancho}&q=80&auto=format&fit=crop`;
```

`foto` es una función pequeña que arma la URL completa a partir del código de la foto. Así no se repite la dirección larga ocho veces.

### ¿Qué es Unsplash? ¿Se pueden usar esas fotos?

Es un sitio de fotos gratuitas que se pueden usar en proyectos, incluso comerciales. Para un negocio real lo ideal son fotos propias del producto.

### ¿Qué significan `w=800&q=80` al final de la dirección?

Son instrucciones para el servidor de Unsplash: `w` es el ancho en píxeles y `q` la calidad. Las tarjetas piden 800 px y el hero 1400 px, porque se ve más grande. Así la página no descarga fotos más pesadas de lo necesario.

### ¿Qué pasa si no hay internet?

Las fotos no cargan y se ve el texto del `alt` (el nombre del producto). Es una buena razón para usar fotos propias guardadas en el proyecto.

### ¿Cómo pongo mis propias fotos?

1. Arrastra la foto a la carpeta `public/` (en StackBlitz o en VS Code).
2. En `productos.js`, cambia la URL por el nombre del archivo con una barra al inicio:

```js
imagen: '/mi-torta.jpg',
```

Consejo: fondo neutro, luz natural de ventana y el producto ocupando casi toda la foto.

### ¿Para qué sirve `alt`?

Describe la imagen para personas que usan lector de pantalla y aparece si la foto no carga. Toda imagen con contenido debe tenerlo.

---

## 3. Props

### ¿Dónde están las props en esta página?

Igual que en la S20: son los datos que `App.jsx` le pasa a cada tarjeta.

```jsx
<ProductoCard
  nombre={producto.nombre}
  precio={producto.precio}
  imagen={producto.imagen}
  ...
/>
```

Dentro de la tarjeta se leen con `props.nombre`, `props.precio`, etc. La diferencia con la S20 es que ahora también viajan la foto y la categoría.

### En la S20 escribíamos `nombre="Torta"`. ¿Por qué ahora hay llaves `{ }`?

Las comillas pasan un texto fijo. Las llaves pasan **el valor de algo de JavaScript**, en este caso el dato de cada producto de la lista.

### El Hero también recibe props, ¿no?

Sí: `titulo`, `descripcion` e `imagen`. Así el mismo componente sirve para destacar otro producto la próxima semana sin cambiar su código.

---

## 4. State

### ¿Dónde se usa el state?

En dos lugares:

| Dónde | Variable | Qué recuerda |
|---|---|---|
| `ProductoCard.jsx` | `cantidad` | Cuántas unidades de ese producto agregaste |
| `App.jsx` | `categoria` | Qué filtro está activo |

### ¿Cómo funciona el botón «Agregar al pedido»?

Es el mismo del Código B:

```jsx
const [cantidad, setCantidad] = useState(0);
...
<button onClick={() => setCantidad(cantidad + 1)}>
```

`useState(0)` crea la variable empezando en 0. `setCantidad` la cambia, y cuando cambia, React vuelve a dibujar la tarjeta con el número nuevo.

### ¿Y el botón «Vaciar»? Antes no estaba.

Es el reto del nivel Extendido de la Estación 3: `setCantidad(0)` devuelve la cuenta a cero. Solo aparece cuando hay algo en el pedido:

```jsx
{cantidad > 0 && (
  <button onClick={() => setCantidad(0)}>Vaciar</button>
)}
```

Se lee: «si la cantidad es mayor que cero, muestra el botón».

### Agregué dos tortas, filtré por Cafés, volví a Todos y la cuenta está en 0. ¿Es un error?

No es un error, es cómo funciona el state. Las tarjetas que el filtro oculta desaparecen de la página, y su state desaparece con ellas. Al volver, se crean de nuevo desde 0. Las tarjetas que siguen visibles (por ejemplo, las tortas al pasar de Todos a Tortas) conservan su cuenta.

Buena pregunta para devolver: «¿Dónde tendría que vivir el pedido para que no se pierda?». Respuesta: en un componente que no desaparezca (como `App`) o, para que dure de verdad, en la base de datos.

### Si recargo la página, ¿se pierde el pedido?

Sí. Es la frase del calentamiento: el state vuelve a empezar al recargar. Lo que debe durar se guarda en la base de datos.

### ¿Por qué no hay un carrito con el total arriba?

Para el total, el state tendría que estar en `App` y bajar a cada tarjeta. Eso se llama «levantar el state» y es un tema nuevo, fuera del alcance de hoy. Anótalo como reto para quien lo pregunte.

---

## 5. Listas y filtros

### En la S20 escribíamos cada tarjeta a mano. ¿Por qué aquí no?

Con ocho productos y un filtro, escribirlas a mano sería repetir mucho código. Los productos viven en una lista y `.map()` crea una tarjeta por cada uno:

```jsx
{visibles.map((producto) => (
  <ProductoCard key={producto.id} nombre={producto.nombre} ... />
))}
```

Se lee: «por cada producto de la lista, dibuja una tarjeta».

### ¿Qué es `key`?

Un identificador único que React necesita en las listas para saber qué tarjeta es cuál. Se usa el `id` del producto. Sin `key`, la consola muestra una advertencia.

### ¿Cómo funcionan los filtros?

1. `App` guarda la categoría elegida en el state `categoria`.
2. Al hacer clic en un filtro, `setCategoria` cambia esa categoría.
3. `App` calcula qué productos mostrar:

```js
const visibles =
  categoria === 'Todos'
    ? productos
    : productos.filter((producto) => producto.categoria === categoria);
```

`filter` se queda solo con los productos de esa categoría. Es parecido a `find({ categoria: 'Cafés' })` en MongoDB.

### ¿Cómo sabe el filtro cuál está activo?

`App` le pasa la categoría activa como prop (`activa`) y una función para cambiarla (`alCambiar`). El botón activo recibe `aria-pressed="true"`, y el CSS lo pinta de marrón con esa señal.

---

## 6. Diseño y estilos

### ¿Por qué esos colores?

Se partió de una paleta de rosa, turquesa y marrón «galleta», y se ajustó para que ningún color resultara chillón ni apagado. Rosa y turquesa acompañan; las protagonistas son las fotos.

Los colores están definidos una sola vez al inicio de `App.css`, como variables:

```css
:root {
  --color-turquesa: #7ad9d1;
  --color-galleta: #864c2f;
  ...
}
```

y se usan con `var(--color-turquesa)`. Si cambias un color ahí, cambia en toda la página.

### ¿Por qué el texto de los botones turquesa es oscuro y no blanco?

Por contraste. El blanco sobre turquesa casi no se lee, sobre todo para personas con baja visión. El texto oscuro se lee bien en cualquier pantalla.

### ¿Cómo se hace el efecto al pasar el mouse por el botón?

```css
.boton {
  background-color: var(--color-turquesa);
  transition: background-color 0.3s ease;
}
.boton:hover {
  background-color: var(--color-turquesa-oscuro);
}
```

`:hover` es el estilo cuando el mouse está encima; `transition` hace que el cambio dure 0,3 segundos en lugar de ser instantáneo.

### ¿De dónde salen las letras de los títulos?

De Google Fonts, cargadas en `index.html`. Hay dos: **Playfair Display** (con remates, para los títulos, aire artesanal) y **DM Sans** (limpia, para precios y descripciones).

### ¿Por qué las esquinas son redondeadas?

`border-radius: 8px` en botones y `12px` en tarjetas. Las formas suaves recuerdan la repostería y hacen la página más amable.

### ¿Cómo se acomoda en el celular?

Con dos herramientas:

- La rejilla de tarjetas usa `repeat(auto-fill, minmax(240px, 1fr))`: caben tantas columnas como el ancho permita.
- `@media (max-width: 760px)` cambia reglas en pantallas angostas: la foto del hero pasa arriba y se ocultan los enlaces del menú.

### ¿Qué son nombres como `encabezado__fila` o `boton--pequeno`?

Una convención para nombrar clases: `__` indica una parte de un bloque (la fila del encabezado) y `--` indica una variante (un botón pequeño). Ayuda a encontrar rápido qué regla pinta qué.

---

## 7. Conexión con MongoDB y la API

### ¿Esta página está conectada a la base de datos?

No. Los productos están escritos a mano en `productos.js`. Conectarla es un tema que no entraba en la sesión.

### Entonces, ¿cómo sería en la aplicación completa?

Con la analogía del restaurante:

1. La **página** (React) le pide los productos a la API: `GET /api/productos`.
2. El **mesero** (Express) recibe el pedido y va a la despensa.
3. La **despensa** (MongoDB) devuelve los documentos de la colección `productos`.
4. La página dibuja una tarjeta por cada documento, igual que hoy con `.map()`.

Fíjate en que cada producto de `productos.js` tiene la misma forma que un documento de MongoDB: `nombre`, `descripcion`, `precio`, `categoria`, `imagen`.

### ¿Y el botón «Agregar al pedido» guardaría algo?

En la aplicación completa haría un `POST /api/pedidos`. El control de calidad (Mongoose) revisaría las reglas y, si cumple, la despensa respondería 201.

---

## 8. Adaptarla a mi emprendimiento

### ¿Qué cambio primero?

En este orden, de menor a mayor esfuerzo:

1. **Nombre y lema:** `Encabezado.jsx`.
2. **Productos:** `src/data/productos.js` (nombre, descripción, precio, categoría, foto).
3. **Categorías:** la lista `categorias` del mismo archivo. Deben coincidir exactamente con las de los productos, con mayúsculas y tildes.
4. **Producto estrella:** `productoEstrella` en `productos.js` y la descripción del `<Hero>` en `App.jsx`.
5. **Contacto:** `PiePagina.jsx`.
6. **Colores:** las variables al inicio de `App.css`.

### Agregué un producto y no aparece en ningún filtro.

Su `categoria` no coincide con ninguna de la lista `categorias`. Revisa letra por letra: `'Cafes'` no es lo mismo que `'Cafés'`.

### Se puso la página en blanco.

Igual que en la S20: hay un error y el mensaje rojo dice cuál. Los más comunes al editar `productos.js` son una coma faltante entre productos o una comilla sin cerrar.

### ¿Puedo cambiar los colores por los de mi marca?

Sí, solo en las variables de `:root` en `App.css`. Una condición: que el texto siga leyéndose bien sobre su fondo. Si dudas, texto oscuro sobre fondo claro.
