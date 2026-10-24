import { useState } from 'react';
import './App.css';
import Encabezado from './components/Encabezado.jsx';
import Hero from './components/Hero.jsx';
import FiltroCategorias from './components/FiltroCategorias.jsx';
import ProductoCard from './components/ProductoCard.jsx';
import PiePagina from './components/PiePagina.jsx';
import { categorias, productoEstrella, productos } from './data/productos.js';

function App() {
  const [categoria, setCategoria] = useState('Todos');

  const visibles =
    categoria === 'Todos'
      ? productos
      : productos.filter((producto) => producto.categoria === categoria);

  return (
    <>
      <Encabezado />

      <main>
        <Hero
          titulo={productoEstrella.nombre}
          descripcion="Bizcocho húmedo de cacao, ganache brillante y crema batida a mano. La favorita de la casa, lista para recoger hoy."
          imagen={productoEstrella.imagen}
        />

        <section className="destacados contenedor" id="destacados">
          <h2>Destacados de la Semana</h2>
          <p className="destacados__intro">
            Lo que sale del horno estos días. Elige una categoría.
          </p>

          <FiltroCategorias
            categorias={categorias}
            activa={categoria}
            alCambiar={setCategoria}
          />

          <div className="rejilla">
            {visibles.map((producto) => (
              <ProductoCard
                key={producto.id}
                nombre={producto.nombre}
                descripcion={producto.descripcion}
                precio={producto.precio}
                categoria={producto.categoria}
                imagen={producto.imagen}
              />
            ))}
          </div>
        </section>
      </main>

      <PiePagina />
    </>
  );
}

export default App;
