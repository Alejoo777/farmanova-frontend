import { useEffect, useState } from "react";
import { getMedicamentos } from "../services/medicamentosService";
import MedicamentoCard from "../components/MedicamentoCard";

function Home() {
  const [medicamentos, setMedicamentos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    getMedicamentos()
      .then((data) => setMedicamentos(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const filtrados = medicamentos.filter((m) =>
    m.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <section>
      <h1>Catálogo</h1>

      <input
        type="search"
        placeholder="Buscar medicamento..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      {loading && <p className="spinner">Cargando...</p>}
      {error && <p className="alert alert--error">{error}</p>}
      {!loading && !error && filtrados.length === 0 && (
        <p className="alert alert--info">No encontramos medicamentos.</p>
      )}

      <div className="card-grid">
        {filtrados.map((m) => (
          <MedicamentoCard key={m.id} medicamento={m} />
        ))}
      </div>
    </section>
  );
}

export default Home;