/**
 * Componente TopProgressBar
 * Renderiza la doble barra horizontal de progreso estática bajo el encabezado.
 * @param {number} progreso - Porcentaje de relleno visual de la barra (por defecto: 58)
 */
function TopProgressBar({ progreso = 58 }) {
  return (
    <div className="top-progress-container">
      <div className="top-progress-thin"></div>
      <div className="top-progress-track">
        <div
          className="top-progress-fill"
          style={{ width: `${progreso}%` }}
        ></div>
      </div>
    </div>
  );
}

export default TopProgressBar;