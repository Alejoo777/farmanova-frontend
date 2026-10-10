import { useEffect, useState } from "react";
import { getMedicamentos } from "../services/medicamentosService";
import MedicamentoCard from "../components/MedicamentoCard";

function Home() {
  const [medicamentos, setMedicamentos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getMedicamentos()
      .then((data) => setMedicamentos(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section>
      <h1>Catálogo</h1>

      {loading && <p className="spinner">Cargando...</p>}
      {error && <p className="alert alert--error">{error}</p>}

      <div className="card-grid">
        {medicamentos.map((m) => (
          <MedicamentoCard key={m.id} medicamento={m} />
        ))}
      </div>
    </section>
  );
}

export default Home;