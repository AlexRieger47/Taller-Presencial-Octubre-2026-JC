import { useState } from 'react';

function ProductoCard(props) {
  const [cantidad, setCantidad] = useState(0);

  return (
    <article className="tarjeta">
      <img
        className="tarjeta__foto"
        src={props.imagen}
        alt={props.nombre}
        loading="lazy"
        width="400"
        height="300"
      />

      <div className="tarjeta__cuerpo">
        <span className="tarjeta__categoria">{props.categoria}</span>
        <h3>{props.nombre}</h3>
        <p>{props.descripcion}</p>
        <p className="precio">{props.precio}</p>

        <div className="tarjeta__acciones">
          <button className="boton" onClick={() => setCantidad(cantidad + 1)}>
            Agregar al pedido
          </button>
          {cantidad > 0 && (
            <button className="boton-texto" onClick={() => setCantidad(0)}>
              Vaciar
            </button>
          )}
        </div>
        <p className="tarjeta__pedido" aria-live="polite">
          En tu pedido: {cantidad}
        </p>
      </div>
    </article>
  );
}

export default ProductoCard;
