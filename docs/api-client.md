# Cliente de API tipado

El cliente de API está en `src/api/client.ts`.

## Objetivo

Centralizar todas las llamadas HTTP del frontend y devolver datos tipados con TypeScript.

## Funciones

- `getDoctors()`
- `getAppointments()`
- `createAppointment(payload)`
- `updateAppointment(id, payload)`
- `deleteAppointment(id)`
- `getConsultations()`

## Tipos

Los tipos se definen en `src/types/index.ts` y están alineados con el backend.

## Estados de red

La interfaz gestiona tres estados:

- Loading: mientras se cargan los datos.
- Data: cuando la API responde correctamente.
- Error: cuando ocurre un fallo y se muestra botón de reintento.
