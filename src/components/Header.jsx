/**
 * Componente Header
 * Muestra la hora superior y el encabezado principal con el nombre del artista y álbum en dos líneas.
 * @param {string} artista - Nombre del cantante (por defecto: "Alejandro Sanz")
 * @param {string} album - Título del álbum (por defecto: "- Más -")
 * @param {string} hora - Hora simulada en la barra de estado móvil (por defecto: "17:08")
 */
function Header({
  artista = "Alejandro Sanz",
  album = "- Más -",
  hora = "17:08"
}) {
  return (
    <header className="player-header">
      <div className="status-time">{hora}</div>
      <h1 className="artist-title">{artista}</h1>
      <h2 className="album-subtitle">{album}</h2>
    </header>
  );
}

export default Header;