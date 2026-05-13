# Componentes

## Navbar

Muestra los enlaces de navegación entre páginas. También permite cerrar sesión si hay un usuario activo.

## DoctorCard

Recibe un objeto `Doctor` mediante props tipadas y muestra su nombre, especialidad, consulta y días disponibles.

## AppointmentCard

Recibe una cita médica y una función para cancelarla. Muestra datos de paciente, doctor, fecha, hora y estado.

## AppointmentForm

Formulario controlado para crear una cita. Usa estados locales para paciente, doctor, fecha, hora y motivo. Valida que los campos obligatorios estén rellenados.

## Loading

Componente reutilizable para mostrar el estado de carga.

## ErrorMessage

Componente reutilizable para mostrar errores y un botón de reintento.
