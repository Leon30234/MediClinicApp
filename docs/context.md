# Context API

Context API permite compartir información entre componentes sin pasar props manualmente por muchos niveles.

En este proyecto se usa `AuthContext` para compartir el usuario autenticado.

## Implementación

- `createContext` crea el contexto.
- `AuthProvider` envuelve la aplicación.
- `useAuth` permite consumir el contexto desde cualquier componente.

## Casos de uso

Context es útil para datos globales como usuario, tema visual, idioma o configuración general de la aplicación.
