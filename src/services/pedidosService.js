import { API_URL } from "./config";

export async function crearPedido({ medicamentoId, cantidad, precio }) {
  const total = precio * cantidad;

  // 1. Se crea la venta
  const ventaRes = await fetch(`${API_URL}/ventas`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ total, estado: "PENDIENTE" }),
  });
  if (!ventaRes.ok) throw new Error("No se pudo crear la venta");
  const venta = await ventaRes.json();

  // 2. Se crea el detalle de esa venta
  const detalleRes = await fetch(`${API_URL}/detalles-venta`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      cantidad,
      subtotal: total,
      ventaId: venta.id,
      medicamentoId,
    }),
  });
  if (!detalleRes.ok) throw new Error("No se pudo crear el detalle");

  return venta;
}