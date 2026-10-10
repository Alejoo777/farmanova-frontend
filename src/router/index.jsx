import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import Detalle from "../pages/Detalle";
import Pedido from "../pages/Pedido";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "medicamento/:id", element: <Detalle /> },
      { path: "pedido", element: <Pedido /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;
