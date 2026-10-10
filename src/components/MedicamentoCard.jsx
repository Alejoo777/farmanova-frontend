import { Link } from "react-router-dom";

function MedicamentoCard({ medicamento }) {
  const { id, nombre, categoria, precio } = medicamento;

  return (
    <article className="card">
      <span className="card__categoria">{categoria}</span>
      <h3>{nombre}</h3>
      <p className="card__precio">${precio.toLocaleString("es-CO")}</p>
      <Link to={`/medicamento/${id}`}>Ver detalle</Link>
    </article>
  );
}

export default MedicamentoCard;