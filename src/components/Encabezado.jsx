function Encabezado() {
  const nombre = 'Dulce Horno';

  return (
    <header className="encabezado">
      <div className="contenedor encabezado__fila">
        <a href="#inicio" className="encabezado__marca">
          <h1>{nombre}</h1>
          <p>Repostería artesanal en Paysandú</p>
        </a>

        <nav className="encabezado__nav" aria-label="Principal">
          <a href="#destacados">Menú</a>
          <a href="#contacto">Contacto</a>
          <a href="#destacados" className="boton boton--pequeno">
            Hacer Pedido
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Encabezado;
