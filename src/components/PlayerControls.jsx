import { useState } from 'react';

/**
 * Componente PlayerControls
 * Replica los dos bloques de controles multimedia del mockup con estados independientes
 * en cada barra de progreso para adelantar o atrasar al hacer clic sin animaciones.
 * @param {number} progresoInicialTop - Porcentaje inicial de la barra superior (por defecto: 50)
 * @param {number} progresoInicialBottom - Porcentaje inicial del slider inferior (por defecto: 55)
 */
function PlayerControls({
  progresoInicialTop = 60,
  progresoInicialBottom = 30
}) {
  // Estados independientes para cada barra de reproducción
  const [progresoTop, setProgresoTop] = useState(progresoInicialTop);
  const [progresoBottom, setProgresoBottom] = useState(progresoInicialBottom);

  // Calcula el porcentaje exacto (0-100) según el punto donde se haga clic
  const calcularPorcentaje = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const porcentaje = Math.round((clickX / rect.width) * 100);
    return Math.max(0, Math.min(100, porcentaje));
  };

  return (
    <section className="controls-wrapper">
      {/* Fila superior: Stop, barra de progreso independiente y volumen */}
      <div className="controls-row-top">

        <div
          className="mid-progress-track"
          onClick={(e) => setProgresoTop(calcularPorcentaje(e))}
          title={`Progreso superior: ${progresoTop}%`}
        >
          <div
            className="mid-progress-fill"
            style={{ width: `${progresoTop}%` }}
          ></div>
          <div
            className="slider-thumb"
            style={{ left: `${progresoTop}%` }}
          ></div>
        </div>
      </div>

        <div className="transport-buttons">
          <button className="btn-transport" aria-label="Anterior">◀◀</button>
          <button className="btn-repro" aria-label="Reproducir">▶</button>
          <button className="btn-transport" aria-label="Siguiente">▶▶</button>
        </div>

      {/* Fila inferior: Slider independiente con tirador, retroceso, play, avance y volumen */}
      <div className="controls-pill">
        <div
          className="slider-track"
          onClick={(e) => setProgresoBottom(calcularPorcentaje(e))}
          title={`Progreso reproductor: ${progresoBottom}%`}
        >
          <div
            className="slider-fill"
            style={{ width: `${progresoBottom}%` }}
          ></div>

        </div>

        <button className="btn-icon-box" aria-label="Volumen">
          🔊
        </button>

        <button className="btn-icon-box" aria-label="Detener">
          <span className="icon-stop"></span>
        </button>
      </div>
    </section>
  );
}

export default PlayerControls;