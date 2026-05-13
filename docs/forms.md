# Formularios

El formulario principal es `AppointmentForm`.

## Formulario controlado

Cada input tiene su propio estado con `useState`. Cuando el usuario escribe, se actualiza el estado correspondiente.

## Validación

Antes de enviar, se comprueba que los campos obligatorios estén completos:

- Nombre del paciente.
- Doctor.
- Fecha.
- Hora.
- Motivo.

## Mensajes

Si falta información se muestra un mensaje de error. Si la cita se crea correctamente se muestra un mensaje de confirmación.
