# PI2 · TDD + Node + CI

Proyecto de la **PF03 · Actividad 1** del módulo *Proyecto Intermodular 2* (2º DAW).
Se implementan dos funciones en **Node.js** siguiendo la metodología **TDD** (Red → Green → Refactor),
con pruebas unitarias en **Vitest** e **integración continua** mediante **GitHub Actions**.

## Funciones

| Función | Descripción |
|---------|-------------|
| `fibonacci(n)` | Devuelve el término `n` de la sucesión de Fibonacci. Lanza `RangeError` si `n < 0`. |
| `esPinValido(pin)` | Devuelve `true` si el PIN es válido: solo dígitos, longitud 4 o 6 y no todos iguales. |

## Estructura

```
├── .github/workflows/ci.yml   # Pipeline de GitHub Actions
├── src/                       # Código fuente
└── test/                      # Pruebas unitarias (Vitest)
```

## Uso

```bash
npm ci              # instalar dependencias exactas (package-lock.json)
npm test            # ejecutar los tests una vez
npm run test:watch  # ejecutar los tests en modo observador
```

## Flujo de trabajo (GitFlow)

- Ramas permanentes: `main` (estable) y `develop` (integración).
- Cada tarea se desarrolla en una rama `feature/*` creada desde `develop` y se integra mediante **Pull Request**.
- **Fibonacci**: tests → jefe de proyecto · implementación → desarrollador.
- **esPinValido**: se intercambian los roles.
- Cuando todo está en `develop` y en verde, se abre una PR `develop → main`.

## Integración continua

El workflow `ci` se ejecuta en cada **push a `develop`** y en cada **Pull Request a `main`**:
instala Node 24, ejecuta `npm ci` y lanza `npm run test`.
