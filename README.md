# FarmaNova

**Innovación que cuida tu salud.**

FarmaNova es el frontend de una farmacia en línea: permite consultar un catálogo de medicamentos, ver el detalle de cada uno y enviar un pedido. Es el proyecto integrador de Web 2.

## Funcionalidades

- Catálogo de medicamentos con buscador.
- Página de detalle de cada medicamento.
- Formulario de pedido con campos controlados.
- Navegación sin recargar la página y página 404.
- Diseño responsive para celular, tablet y escritorio.

## Tecnologías

- React (componentes funcionales y hooks `useState` y `useEffect`)
- Vite
- React Router DOM 6.4+ (`createBrowserRouter`)
- CSS

## Cómo correr el proyecto

```bash
npm install
npm run dev
```

Luego abre en el navegador la dirección que muestra la terminal (normalmente `http://localhost:5173`).

Para generar la versión de producción: `npm run build`.

## Variables de entorno

La URL base de los datos se define en el archivo `.env`:

```
VITE_API_URL=/data
```

El archivo `.env.example` sirve de plantilla. Por ahora los medicamentos se leen de `public/data/medicamentos.json`; cuando exista un backend, solo hay que cambiar esta variable.

## Estructura del proyecto

```
src/
├── components/   componentes reutilizables (Navbar, Layout, MedicamentoCard)
├── pages/        vistas completas (Home, Detalle, Pedido, NotFound)
├── router/       configuración de rutas
├── services/     acceso a datos (config.js y medicamentosService.js)
├── hooks/        hooks personalizados
├── styles/       archivos CSS
└── assets/       imágenes y logo
```

La explicación de cada carpeta está en [`src/README.md`](src/README.md).

## Flujo de trabajo en Git

- Ramas: `main` (versión final), `develop` (integración) y una rama por tarea (`feature/...`, `docs/...`).
- Commits con Conventional Commits: `feat:`, `fix:`, `style:`, `docs:`, `chore:`, `refactor:`.
- Cada rama se integra a `develop` mediante Pull Request.

## Integrantes

- Edier Alejandro Ospina Arbelaez ([@Alejoo777](https://github.com/Alejoo777))
- Jahira Janeth Rojas Lobo ([@jrojaslo](https://github.com/jrojaslo))