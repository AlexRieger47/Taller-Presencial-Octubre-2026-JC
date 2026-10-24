function Hero(props) {
  return (
    <section className="hero" id="inicio">
      <div className="contenedor hero__fila">
        <div className="hero__texto">
          <p className="hero__etiqueta">Recién salida del horno</p>
          <h2>{props.titulo}</h2>
          <p>{props.descripcion}</p>

          <div className="hero__acciones">
            <a href="#destacados" className="boton">
              Ver Menú de Hoy
            </a>
            <a href="#contacto" className="boton boton--secundario">
              Hacer Pedido
            </a>
          </div>
        </div>

        <img
          className="hero__foto"
          src={props.imagen}
          alt={props.titulo}
          width="700"
          height="700"
        />
      </div>
    </section>
  );
}

export default Hero;
