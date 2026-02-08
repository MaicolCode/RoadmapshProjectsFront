const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);

const tabsContainer = $('.tabs');
const contents = $$('.tab_content'); // Clase específica para no agarrar cualquier div
const buttons = $$('.tabs button');

tabsContainer.addEventListener('click', (e) => {
    const clickedButton = e.target.closest('button');
    if (!clickedButton) return;

    // 1. Limpiar todo de una
    buttons.forEach(btn => btn.classList.remove('active_tab'));
    contents.forEach(content => content.classList.remove('active'));

    // 2. Activar el botón clickeado
    clickedButton.classList.add('active_tab');

    // 3. Buscar el contenido (usando el patrón que ya tienes)
    // En lugar de filter, buscamos directamente el que coincida
    const tabClass = clickedButton.classList[0];
    const targetContent = $(`.${tabClass}_content`);
    
    if (targetContent) targetContent.classList.add('active');
});