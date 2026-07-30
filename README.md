# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# JouOff — Frontend

Interfaz web de **JouOff**, una aplicación de journaling emocional con estética vintage inspirada en la calidez y sencillez del diseño retro. Este repositorio contiene el frontend construido con React y Vite.

## Stack técnico

- **React 18** + **Vite** — desarrollo y build
- **React Router DOM** — enrutamiento de páginas
- **Axios** — cliente HTTP, con interceptores para JWT
- **SASS** — arquitectura de estilos modular
- **Context API** — manejo de estado de autenticación (`AuthContext`)
- **Figma** (vía MCP) — fuente de verdad para specs de diseño (colores, tipografía, medidas)

## Estructura del proyecto

```
src/
├── assets/           # Imágenes e íconos
├── components/       # Componentes reutilizables (formularios, etc.)
├── context/          # AuthContext — estado global de autenticación
├── hooks/            # Custom hooks (useAuth, useLoginForm, useRegistroForm...)
├── pages/            # Páginas completas (una por ruta)
├── services/         # Llamadas HTTP (api.js, authService.js, entradaService.js)
└── styles/
    ├── global/       # Variables, reset, mixins, tipografía — aplican a toda la app
    ├── shared/       # Estilos reutilizables entre varios componentes
    └── components/   # Estilos específicos de un solo componente
```

## Configuración del entorno

### Requisitos previos

- Node.js 18+ (recomendado 20 LTS)
- El backend de JouOff corriendo en paralelo (`http://localhost:8080` por defecto)

### Variables de entorno

Crea un archivo `.env` en la raíz del proyecto (no se versiona):

```
VITE_API_URL=http://localhost:8080
```

### Instalación y arranque

```bash
npm install
npm run dev
```

La aplicación queda disponible en `http://localhost:5173`.

## Rutas disponibles

| Ruta | Página | Acceso |
|---|---|---|
| `/` | Landing page | Pública |
| `/registro` | Registro de usuario | Pública |
| `/login` | Inicio de sesión | Pública |
| `*` | Página 404 (NotFound) | — |

## Arquitectura de autenticación

- El JWT se guarda en `localStorage` tras un login exitoso, permitiendo persistencia de sesión entre recargas
- `AuthContext` expone `usuario`, `estaAutenticado`, `iniciarSesion()` y `cerrarSesion()` a toda la app mediante el hook `useAuth()`
- Una instancia centralizada de Axios (`services/api.js`) adjunta el token automáticamente en cada petición saliente, y redirige a `/login` si el backend responde `401`

## Diseño y estilos

- Paleta de colores y tipografía (Montserrat, Space Grotesk, Work Sans) verificadas directamente contra el archivo de Figma del proyecto, no estimadas manualmente
- Contraste de color verificado según criterios WCAG AA/AAA
- Organización de SASS en tres niveles: `global` (universal) → `shared` (reutilizable) → `components` (único), evitando duplicación de estilos

## Buenas prácticas aplicadas

- Separación de responsabilidades: la lógica de formularios vive en custom hooks (`useLoginForm`, `useRegistroForm`), los componentes solo se encargan de la presentación
- Validación en cliente que refleja las reglas del backend, con mensajes de error accesibles (`aria-live`, `aria-describedby`)
- Confirmaciones visuales tras acciones importantes (registro, login)
- Ramas de feature: `feature/nombre-descriptivo` (sin ID de ticket)
- Commits en inglés, formato de conventional commits (`feat:`, `fix:`, `chore:`)

## Estado actual del proyecto

- ✅ Landing page (fiel al diseño de Figma)
- ✅ Registro de usuario
- ✅ Login con persistencia de sesión
- ✅ Logout
- 🔄 CRUD de entradas de diario (en desarrollo)
- ⏳ Protección de rutas privadas (pendiente)
- ⏳ Accesibilidad completa: navegación por teclado, lectores de pantalla (pendiente)