import { useEffect, useRef } from 'react';

/**
 * Componente CheckboxGroup
 * Muestra dos columnas idénticas con casillas en estado desmarcado, marcado e indeterminado.
 * @param {Array<string>} etiquetas - Textos de los tres estados (por defecto: ["not selected", "selected", "indeterminate"])
 */
function CheckboxGroup({
  etiquetas = ["not selected", "selected", "indeterminate"]
}) {
  const indetRef1 = useRef(null);
  const indetRef2 = useRef(null);

  // Asigna la propiedad nativa HTML `indeterminate` tras montar el componente
  useEffect(() => {
    if (indetRef1.current) indetRef1.current.indeterminate = true;
    if (indetRef2.current) indetRef2.current.indeterminate = true;
  }, []);

  return (
    <section className="checkbox-grid">
      {[indetRef1, indetRef2].map((refActual, colIndex) => (
        <div className="checkbox-column" key={colIndex}>
          <label className="checkbox-item">
            <input type="checkbox" defaultChecked={false} readOnly />
            <span>{etiquetas[0]}</span>
          </label>
          <label className="checkbox-item">
            <input type="checkbox" defaultChecked={true} readOnly />
            <span>{etiquetas[1]}</span>
          </label>
          <label className="checkbox-item">
            <input type="checkbox" ref={refActual} readOnly />
            <span>{etiquetas[2]}</span>
          </label>
        </div>
      ))}
    </section>
  );
}

export default CheckboxGroup;