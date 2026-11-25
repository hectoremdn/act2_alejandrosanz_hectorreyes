/**
 * Componente BottomNav
 * Barra de navegación inferior con tres iconos visibles (Inicio, Cuadrado central y Menú).
 */
function BottomNav() {
  return (
    <nav className="bottom-nav" aria-label="Navegación inferior">
      <button className="nav-btn" aria-label="Inicio">🏠</button>
      <button className="nav-btn" aria-label="Biblioteca">
        <span className="nav-square-icon"></span>
      </button>
      <button className="nav-btn" aria-label="Menú">
        <span className="nav-hamburger">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>
    </nav>
  );
}

export default BottomNav;