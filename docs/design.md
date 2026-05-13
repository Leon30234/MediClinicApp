# Arquitectura de la aplicación

## Estructura general

La aplicación tiene frontend y backend dentro del mismo repositorio.

El frontend está en `src/` y usa React, TypeScript, Tailwind y React Router.

El backend está en `server/src/` y usa Express. Está organizado en capas:

- routes: define las rutas HTTP.
- controllers: recibe la petición y devuelve la respuesta.
- services: contiene la lógica de negocio.
- config: contiene datos de ejemplo.

## Componentes principales

- Navbar: navegación principal.
- DoctorCard: tarjeta reutilizable para doctores.
- AppointmentCard: tarjeta reutilizable para citas.
- AppointmentForm: formulario para crear citas.
- Loading: estado de carga.
- ErrorMessage: estado de error.

## Gestión de estado

Se usa `useState` para estados locales, `useEffect` para cargar datos desde la API, `useMemo` para calcular el número de citas activas y `useCallback` para memorizar funciones. También se usa Context API para compartir el usuario autenticado.

## API REST

Recursos principales:

- `/api/v1/doctors`
- `/api/v1/appointments`
- `/api/v1/consultations`

## Persistencia

Los datos viven en el backend en memoria. El frontend no usa LocalStorage para citas o doctores. La API es la fuente principal de datos.

## Flujo de datos

```txt
Usuario
  ↓
Frontend React
  ↓ fetch tipado
API Express
  ↓
Services
  ↓
Datos en memoria
```
