# 📓 Bitácora de Aprendizaje - Roadmap JS

Este documento sirve para registrar conceptos, soluciones y dudas encontradas durante el desarrollo de los retos de Frontend de [Roadmap.sh](https://roadmap.sh/frontend).

---

## 🧩 Reto: Tabs Challenge
**Fecha:** 07/02/2026

### 💡 Conceptos Aprendidos
- **Delegación de Eventos (`Event Delegation`)**: En lugar de asignar un event listener a cada botón (`forEach`), se asigna uno solo al contenedor padre (`tabsContainer`). Esto es más eficiente en memoria y maneja automáticamente elementos nuevos.
- **`event.target.closest('selector')`**: Una forma robusta de detectar en qué elemento se hizo click. Si haces click en un elemento hijo (como un icono dentro del botón), `closest` subirá por el DOM hasta encontrar el botón.
- **`querySelectorAll` (`$$`) vs `querySelector` (`$`)**: 
    - `$` devuelve el primer elemento que coincide.
    - `$$` devuelve una `NodeList` con todos los elementos. Las `NodeList` modernas ya permiten usar `.forEach()` directamente sin convertir a Array.
- **Manipulación de Clases Dinámicas**: Uso de un patrón de nombres (ej: `tab_1` y `tab_1_content`) para vincular el botón con su contenido correspondiente mediante JavaScript.

### 🛠️ Mejoras de Estructura (CSS/Layout)
- **Control del Viewport**: Para evitar el desborde (overflow), usar `display: flex` en el `body` con `height: 100vh` y dejar que el `main` crezca con `flex: 1`, ajustando el `header` y `footer` con alturas fijas (ej: `10vh`).

### ⚠️ Pendientes / Por Investigar
- [ ] **Data Attributes**: Investigar cómo usar `data-tab="1"` en HTML en lugar de depender de la primera clase (`classList[0]`) para que el código sea menos frágil.
- [ ] **Accesibilidad (ARIA)**: Cómo hacer que las pestañas sean navegables con el teclado (usando `role="tablist"`, `aria-selected`, etc.).

---

## ✍️ Próximos Pasos
- [ ] Aplicar Data Attributes en el siguiente reto.
- [ ] Mejorar el diseño visual con efectos de cristal (glassmorphism).

## Vocabulary of the day
1. Event Delegation: Delegación de eventos
2. Target: Objetivo / Blanco
3. Closest: Cercano / Más cercano
4. Handle: Manejar / Gestionar

## 🧩 Reto: Basic HTML Web Site
**Fecha:** 08/02/2026

### 💡 Conceptos Aprendidos
- **Meta Tags**: Meta tags son etiquetas que se usan para proporcionar información sobre el contenido de una página web. Estas etiquetas se colocan dentro de la etiqueta `<head>` de una página HTML.
- **SEO**: SEO significa Search Engine Optimization (Optimización para motores de búsqueda). Es el proceso de mejorar el posicionamiento de una página web en los resultados de búsqueda de motores de búsqueda como Google, Bing, Yahoo, etc.
- **Viewport**: Viewport es una propiedad que se usa para controlar el tamaño y el comportamiento de la página web en dispositivos móviles.
- **Semántica**: Semántica es el uso de etiquetas HTML para dar significado a la estructura de una página web.
- **rel:"noopener"**: rel="noopener" es un atributo que se usa para indicar que una página web no debe de tener acceso a la página web que la abrió.
- **rel:"noreferrer"**: rel="noreferrer" es un atributo que se usa para indicar que una página web no debe de tener acceso a la página web que la abrió.
- **Etiquetas estructurales claves**: Etiquetas estructurales claves son etiquetas que se usan para dar significado a la estructura de una página web.
| Etiqueta | Significado |
| --- | --- |
| `<header>` | Define el encabezado de una página web |
| `<footer>` | Define el pie de página de una página web |
| `<nav>` | Define una sección de navegación |
| `<main>` | Define el contenido principal de una página web |
| `<section>` | Define una sección de una página web |
| `<article>` | Define un artículo de una página web |
| `<aside>` | Define un contenido lateral de una página web |

### 🛠️ Mejoras de Estructura (En espera...)

### ⚠️ Pendientes / Por Investigar
- [ ] **Accesibilidad (ARIA)**: Cómo hacer que las pestañas sean navegables con el teclado (usando `role="tablist"`, `aria-selected`, etc.).

---

## ✍️ Próximos Pasos
- [ ] Aprender a como hacer que las pestañas sean navegables con el teclado (usando `role="tablist"`, `aria-selected`, etc.).
- [ ] Desarrollar las demás secciones de la página web haciendo un correcto uso de la semantica con HTML.

## Vocabulary of the day
1. Meta Tags: Etiquetas de meta
2. SEO: Optimización para motores de búsqueda
3. Viewport: Viewport
4. Semantic: Semántica
