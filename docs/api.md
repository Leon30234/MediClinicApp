# Documentación de la API

Base URL local:

```txt
http://localhost:3001/api/v1
```

## Health check

### GET `/health`

Respuesta:

```json
{
  "status": "ok",
  "service": "MediClinic API"
}
```

## Doctores

### GET `/doctors`

Devuelve todos los doctores.

Respuesta 200:

```json
[
  {
    "id": 1,
    "name": "Dra. Ana López",
    "specialty": "Medicina general",
    "room": "Consulta 101",
    "availableDays": ["Lunes", "Miércoles", "Viernes"]
  }
]
```

## Citas

### GET `/appointments`

Devuelve todas las citas.

### POST `/appointments`

Crea una cita.

Request:

```json
{
  "patientName": "Leon Gomez",
  "doctorId": 1,
  "date": "2026-06-20",
  "time": "10:30",
  "reason": "Revisión general"
}
```

Respuesta 201:

```json
{
  "id": 123,
  "patientName": "Leon Gomez",
  "doctorId": 1,
  "doctorName": "Dra. Ana López",
  "date": "2026-06-20",
  "time": "10:30",
  "reason": "Revisión general",
  "status": "scheduled"
}
```

### PATCH `/appointments/:id`

Actualiza parcialmente una cita.

### DELETE `/appointments/:id`

Cancela una cita.

Respuesta 200:

```json
{
  "message": "Cita cancelada correctamente"
}
```

## Consultas

### GET `/consultations`

Devuelve consultas médicas de ejemplo.
