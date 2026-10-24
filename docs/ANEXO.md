# Anexos · Códigos para reconstruir la página de React

Son los mismos códigos de la S20 (Anexo B de la guía S21). Se pegan en un proyecto nuevo de [vite.new/react](https://vite.new/react) en este orden:

| Código | Dónde se pega | Qué hacer antes |
|---|---|---|
| Código A | `src/components/Encabezado.jsx` | Crear la carpeta `components` (clic derecho sobre `src` → New Folder) y el archivo |
| Código B | `src/components/ProductoCard.jsx` | Crear el archivo dentro de `components` |
| Código C | `src/App.jsx` | Borrar todo lo que trae |
| Código D | `src/App.css` | Borrar todo lo que trae |

Después de pegarlos, cada estudiante cambia los textos de Dulce Horno por los de su emprendimiento.

---

## Código A · `src/components/Encabezado.jsx`

```jsx
function Encabezado() {

   const nombre = 'Dulce Horno';

   return (
      <header className="encabezado">
         <h1>{nombre}</h1>
         <p>Repostería artesanal en Medellín</p>
      </header>

   );
}

export default Encabezado;
```

## Código B · `src/components/ProductoCard.jsx`

```jsx
import { useState } from 'react';

function ProductoCard(props) {
   const [cantidad, setCantidad] = useState(0);

   return (
      <article className="tarjeta">
         <h3>{props.nombre}</h3>
         <p>{props.descripcion}</p>
         <p className="precio">{props.precio}</p>

         <button onClick={() => setCantidad(cantidad + 1)}>
             Agregar al pedido

         </button>
         <p>En tu pedido: {cantidad}</p>
      </article>
   );
}

export default ProductoCard;
```

## Código C · `src/App.jsx`

```jsx
import './App.css';
import Encabezado from './components/Encabezado.jsx';
import ProductoCard from './components/ProductoCard.jsx';

function App() {
   return (
      <main>
         <Encabezado />

         <ProductoCard
             nombre="Torta de chocolate"
             descripcion="Bizcocho húmedo con ganache"
             precio="$45.000"

         />
         <ProductoCard

             nombre="Galletas de avena"
             descripcion="Caja x 12"
             precio="$18.000"
         />
         <ProductoCard
             nombre="Cupcakes de vainilla"
             descripcion="Caja x 6"
             precio="$30.000"
         />
      </main>
   );
}

export default App;
```

## Código D · `src/App.css`

```css
main { max-width: 800px; margin: 0 auto; padding: 24px;

    font-family: sans-serif; }
.encabezado { text-align: center; margin-bottom: 24px; }
.tarjeta { border: 1px solid #ddd; border-radius: 12px;

    padding: 16px; margin-bottom: 16px; }
.precio { font-weight: bold; }
button { padding: 8px 16px; cursor: pointer; }
```
