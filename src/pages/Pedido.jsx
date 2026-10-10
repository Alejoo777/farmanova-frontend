function Pedido() {
  return (
    <section className="pedido">
      <h1>Hacer pedido</h1>

      <form className="form">
        <label htmlFor="nombre">Nombre</label>
        <input id="nombre" name="nombre" type="text" />

        <label htmlFor="correo">Correo</label>
        <input id="correo" name="correo" type="email" />

        <label htmlFor="telefono">Teléfono</label>
        <input id="telefono" name="telefono" type="tel" />

        <label htmlFor="producto">Producto</label>
        <input id="producto" name="producto" type="text" />

        <label htmlFor="cantidad">Cantidad</label>
        <input id="cantidad" name="cantidad" type="number" min="1" />

        <button type="submit" className="btn">
          Enviar pedido
        </button>
      </form>
    </section>
  );
}

export default Pedido;
