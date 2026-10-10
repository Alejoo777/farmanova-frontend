import { useState } from "react";

function Pedido() {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    producto: "",
    cantidad: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <section className="pedido">
      <h1>Hacer pedido</h1>

      <form className="form">
        <label htmlFor="nombre">Nombre</label>
        <input
          id="nombre"
          name="nombre"
          type="text"
          value={formData.nombre}
          onChange={handleChange}
        />

        <label htmlFor="correo">Correo</label>
        <input
          id="correo"
          name="correo"
          type="email"
          value={formData.correo}
          onChange={handleChange}
        />

        <label htmlFor="telefono">Teléfono</label>
        <input
          id="telefono"
          name="telefono"
          type="tel"
          value={formData.telefono}
          onChange={handleChange}
        />

        <label htmlFor="producto">Producto</label>
        <input
          id="producto"
          name="producto"
          type="text"
          value={formData.producto}
          onChange={handleChange}
        />

        <label htmlFor="cantidad">Cantidad</label>
        <input
          id="cantidad"
          name="cantidad"
          type="number"
          min="1"
          value={formData.cantidad}
          onChange={handleChange}
        />

        <button type="submit" className="btn">
          Enviar pedido
        </button>
      </form>
    </section>
  );
}

export default Pedido;
