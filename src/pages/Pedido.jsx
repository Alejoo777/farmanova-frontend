import { useState } from "react";

const estadoInicial = {
  nombre: "",
  correo: "",
  telefono: "",
  producto: "",
  cantidad: "",
};

function Pedido() {
  const [formData, setFormData] = useState(estadoInicial);
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setEnviado(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Pedido recibido:", formData);
    setFormData(estadoInicial);
    setEnviado(true);
  };

  return (
    <section className="pedido">
      <h1>Hacer pedido</h1>

      {enviado && <p className="alert alert--success">Pedido enviado</p>}

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

        <label htmlFor="producto">Producto</label>
        <input
          id="producto"
          name="producto"
          type="text"
          value={formData.producto}
          onChange={handleChange}
          required
        />

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

        <button type="submit" className="btn">
          Enviar pedido
        </button>
      </form>
    </section>
  );
}

export default Pedido;
