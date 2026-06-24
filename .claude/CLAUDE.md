# SuperStream Web

## Stack

* React 18
* TypeScript
* Vite
* Styled Components
* React Icons

---

## Reglas generales

* Utilizar React 18.
* Utilizar TypeScript.
* Utilizar componentes funcionales.
* Utilizar Styled Components para todos los estilos.
* Evitar el uso de any.
* Mantener componentes reutilizables.
* Mantener código limpio y simple.

---

## Arquitectura actual

```text
src/
├── assets/
├── components/
├── pages/
├── styles/
├── App.tsx
├── main.tsx
├── theme.ts
```

La arquitectura debe reflejar únicamente el estado actual del proyecto.

No crear carpetas nuevas a menos que se solicite explícitamente.

Por ejemplo, no crear:

```text
services/
hooks/
domain/
context/
redux/
store/
```

si todavía no son necesarias.

---

## Components

Todos los componentes reutilizables deben ubicarse en:

```text
src/components
```

Cada componente debe tener su propia carpeta.

Ejemplo:

```text
components/
└── PlatformCard/
    ├── PlatformCard.tsx
    ├── PlatformCard.styled.ts
```

La convención obligatoria es:

```text
NombreComponente.tsx
NombreComponente.styled.ts
```

NO utilizar:

```text
index.tsx
styles.ts
```

salvo que se solicite explícitamente.

---

## Pages

Las páginas deben ubicarse en:

```text
src/pages
```

Cada página debe tener su propia carpeta.

Ejemplo:

```text
pages/
└── Platform/
    ├── Platform.tsx
    ├── Platform.styled.ts
```

La convención obligatoria es:

```text
NombrePagina.tsx
NombrePagina.styled.ts
```

---

## Reutilización

Antes de crear una nueva página o sección:

1. Analizar el diseño.
2. Identificar componentes reutilizables.
3. Reutilizar componentes existentes cuando sea posible.
4. Evitar duplicar código.

---

## Flujo de trabajo

Antes de generar código:

1. Analizar el requerimiento.
2. Proponer la estructura de componentes.
3. Mantener la arquitectura existente.
4. No modificar convenciones sin aprobación.

Si existe una duda sobre la estructura, preguntar antes de generar archivos.

## Metodología de desarrollo

Este proyecto se desarrollará una página a la vez.

Para cada página:

1. Analizar la sección correspondiente del demo.
2. Identificar componentes reutilizables.
3. Crear los componentes necesarios.
4. Integrar los componentes en la página correspondiente.
5. Completar la implementación de la página solicitada.

Una vez terminada una página, considerar esa tarea finalizada.

El usuario será responsable de:

* Revisar la implementación.
* Realizar commits.
* Crear Pull Requests.
* Solicitar la siguiente página o sección cuando corresponda.

Evitar:

* Crear múltiples páginas no solicitadas.
* Continuar automáticamente con otras páginas.
* Realizar cambios en páginas ya implementadas sin que se solicite explícitamente.
* Refactors masivos innecesarios.

El demo ubicado en:

demos/superstream.html

es una referencia visual.

No es necesario replicarlo pixel perfect durante la fase inicial de construcción.

Prioridades:

1. Completar la página solicitada.
2. Reutilizar componentes cuando sea posible.
3. Mantener consistencia visual mediante React Icons y el theme del proyecto.
4. Continuar con la siguiente página únicamente cuando el usuario lo solicite.

Cuando exista una diferencia entre el demo y la implementación actual, priorizar la consistencia del proyecto y dejar los ajustes visuales para etapas posteriores de refinamiento.
