/**
 * Componente ArtistSection
 * Sección lateral con la fotografía del artista a la izquierda y bloques grises simulando texto descriptivo.
 * @param {string} imagen - Ruta de la fotografía del cantante (por defecto: "/alejandro.jpg")
 * @param {string} altText - Texto alternativo accesible (por defecto: "Alejandro Sanz")
 */
function ArtistSection({
  imagen = "/alejandro.jpg",
  altText = "Alejandro Sanz"
}) {
  return (
    <section className="artist-section">
      <div className="artist-photo-box">
        <img src={imagen} alt={altText} className="artist-photo" />
      </div>
      <div className="bio-skeleton">
        <div className="skeleton-line w-95"></div>
        <div className="skeleton-line w-70"></div>
        <div className="skeleton-line w-100"></div>
        <div className="skeleton-line w-80"></div>
      </div>
    </section>
  );
}

export default ArtistSection;