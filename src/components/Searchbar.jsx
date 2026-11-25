/**
 * Componente SearchBar
 * Barra de búsqueda redondeada que muestra el nombre del artista activo centrado.
 * @param {string} texto - Texto mostrado dentro del buscador (por defecto: "Alejandro Sanz")
 */
function SearchBar({ texto = "Alejandro Sanz" }) {
  return (
    <section className="search-section">
      <div className="search-pill">
        <span className="search-text">{texto}</span>
      </div>
    </section>
  );
}

export default SearchBar;