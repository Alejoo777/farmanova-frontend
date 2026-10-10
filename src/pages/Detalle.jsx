import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getMedicamentoById } from "../services/medicamentosService";

function Detalle() {
  const { id } = useParams();
  const [medicamento, setMedicamento] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    getMedicamentoById(id)
      .then((data) => setMedicamento(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <p className="spinner">Cargando...</p>;
  }

  if (error) {
    return (
      <section>
        <p className="alert alert--error">{error}</p>
        <Link to="/">Volver al catálogo</Link>
      </section>
    );
  }

  return (
    <section className="detalle">
      <Link to="/">← Volver al catálogo</Link>
      <span className="card__categoria">{medicamento.categoria}</span>
      <h1>{medicamento.nombre}</h1>
      <p className="card__precio">
        ${medicamento.precio.toLocaleString("es-CO")}
      </p>
      <p>{medicamento.descripcion}</p>
      <Link to="/pedido" className="btn">
        Pedir este producto
      </Link>
    </section>
  );
}

export default Detalle;