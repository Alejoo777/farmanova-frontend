# Estructura de src – FarmaNova

Este documento explica cómo está organizado el código del frontend para que cualquier persona del equipo pueda encontrar cada cosa rápido.

## Carpetas

- **components/**: piezas reutilizables de la interfaz, como la barra de navegación, las tarjetas de medicamentos o el spinner de carga. Se pueden usar en varias páginas.
- **pages/**: vistas completas de la aplicación, como el inicio, el detalle de un medicamento, el formulario de pedido y la página 404.
- **services/**: código que se conecta con los datos (la API). Aquí está la URL base y las funciones que consultan los medicamentos. Ningún componente hace `fetch` directamente.
- **hooks/**: funciones propias de React que se pueden reutilizar en varios componentes.
- **router/**: configuración de las rutas de navegación con React Router.
- **styles/**: archivos CSS de la aplicación.
- **assets/**: imágenes y recursos estáticos, como el logo de FarmaNova.

## Reglas del equipo

- Los componentes reutilizables van en `components` y las vistas completas en `pages`.
- Las llamadas a la API solo se escriben en `services`.
- Cada tarea se trabaja en una rama `feature/...` y se integra a `develop` con Pull Request.