# Hooks de React

## useState

Se usa para guardar datos que cambian en la interfaz, como formularios, mensajes, errores, usuario y listas cargadas desde la API.

## useEffect

Se usa para ejecutar efectos secundarios. En este proyecto se usa para cargar doctores, citas y consultas cuando se abre una página.

## useMemo

Se usa para optimizar cálculos. En `useAppointments`, calcula cuántas citas están programadas sin recalcularlo innecesariamente.

## useCallback

Se usa para memorizar funciones. En los custom hooks ayuda a evitar recrear funciones de carga o cancelación en cada render.

## Custom hooks

### useDoctors

Carga doctores desde la API y devuelve `doctors`, `loading`, `error` y `retry`.

### useAppointments

Carga citas desde la API y devuelve citas, estado de carga, error, número de citas activas, función para crear citas y función para cancelar citas.
