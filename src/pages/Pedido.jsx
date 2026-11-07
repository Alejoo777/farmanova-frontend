import { useEffect, useState } from "react";
import { getMedicamentos } from "../services/medicamentosService";
import { crearPedido } from "../services/pedidosService";

const estadoInicial = {
  nombre: "",
  correo: "",
  telefono: "",
  medicamentoId: "",
  cantidad: "",
};

function Pedido() {
  const [formData, setFormData] = useState(estadoInicial);
  const [medicamentos, setMedicamentos] = useState([]);
  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState(null);

  // Trae la lista de medicamentos para llenar el selector
  useEffect(() => {
    getMedicamentos()
      .then((data) => setMedicamentos(data))
      .catch((err) => setError(err.message));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setEnviado(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Pedido recibido:", formData);

    const medicamento = medicamentos.find(
      (m) => m.id === Number(formData.medicamentoId)
    );

    setEnviando(true);
    setError(null);
    try {
      await crearPedido({
        medicamentoId: medicamento.id,
        cantidad: Number(formData.cantidad),
        precio: medicamento.precio,
      });
      setFormData(estadoInicial);
      setEnviado(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setEnviando(false);
    }
  };

  return (
    <section className="pedido">
      <h1>Hacer pedido</h1>

      {enviado && <p className="alert alert--success">Pedido enviado</p>}
      {error && <p className="alert alert--error">{error}</p>}

      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre</label>
        <input
          id="nombre"
          name="nombre"
          type="text"
          value={formData.nombre}
          onChange={handleChange}
          required
        />

        <label htmlFor="correo">Correo</label>
        <input
          id="correo"
          name="correo"
          type="email"
          value={formData.correo}
          onChange={handleChange}
          required
        />

        <label htmlFor="telefono">Teléfono</label>
        <input
          id="telefono"
          name="telefono"
          type="tel"
          value={formData.telefono}
          onChange={handleChange}
          required
        />

        <label htmlFor="medicamentoId">Medicamento</label>
        <select
          id="medicamentoId"
          name="medicamentoId"
          value={formData.medicamentoId}
          onChange={handleChange}
          required
        >
          <option value="">Selecciona un medicamento</option>
          {medicamentos.map((m) => (
            <option key={m.id} value={m.id}>
              {m.nombre}
            </option>
          ))}
        </select>

        <label htmlFor="cantidad">Cantidad</label>
        <input
          id="cantidad"
          name="cantidad"
          type="number"
          min="1"
          value={formData.cantidad}
          onChange={handleChange}
          required
        />

        <button type="submit" className="btn" disabled={enviando}>
          {enviando ? "Enviando..." : "Enviar pedido"}
        </button>
      </form>
    </section>
  );
}

export default Pedido;