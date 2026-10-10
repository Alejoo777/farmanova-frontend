import { API_URL } from "./config";

// Devuelve la lista completa de medicamentos
export async function getMedicamentos() {
  const response = await fetch(`${API_URL}/medicamentos.json`);
  if (!response.ok) {
    throw new Error("No se pudieron cargar los medicamentos");
  }
  return response.json();
}

// Devuelve un solo medicamento según su id
export async function getMedicamentoById(id) {
  const medicamentos = await getMedicamentos();
  const medicamento = medicamentos.find((m) => m.id === Number(id));
  if (!medicamento) {
    throw new Error("Medicamento no encontrado");
  }
  return medicamento;
}