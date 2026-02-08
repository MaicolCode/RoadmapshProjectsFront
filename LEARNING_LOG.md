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