import { useParams } from "react-router-dom";

function Detalle() {
  const { id } = useParams();

  return (
    <section>
      <h1>Detalle del medicamento</h1>
      <p>Medicamento número {id}.</p>
    </section>
  );
}

export default Detalle;
