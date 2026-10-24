function FiltroCategorias(props) {
  return (
    <div className="filtros" role="group" aria-label="Filtrar por categoría">
      {props.categorias.map((categoria) => (
        <button
          key={categoria}
          className="filtro"
          aria-pressed={categoria === props.activa}
          onClick={() => props.alCambiar(categoria)}
        >
          {categoria}
        </button>
      ))}
    </div>
  );
}

export default FiltroCategorias;
