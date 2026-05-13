# Despliegue

## Frontend en Vercel

Pasos:

1. Subir el proyecto a GitHub.
2. Entrar en Vercel.
3. Importar el repositorio.
4. Configurar el comando de build:

```bash
npm run build
```

5. Configurar la carpeta de salida:

```txt
dist
```

6. Añadir variable de entorno si la API está desplegada aparte:

```txt
VITE_API_URL=https://url-de-tu-api.com
```

## Backend

Si el backend se despliega aparte, hay que actualizar `VITE_API_URL` para que el frontend apunte a la API real.

## Comprobación final

Después del despliegue se debe comprobar que las páginas cargan, que la API responde y que se pueden crear y cancelar citas.
