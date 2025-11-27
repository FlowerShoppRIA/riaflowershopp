document.addEventListener('DOMContentLoaded', () => {
    // Selectores
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.tarjeta-producto');
    const titleElement = document.getElementById('tituloCatalogo');
    
    // Nombres que aparecerán en el título de la sección
    const categoryNames = {
        'todos': 'Toda la Colección Exclusiva de RiaFlowerShopp',
        'rosas': 'Ramos de Rosas - Pasión y Romance',
        'gerberas': 'Arreglos de Gerberas - Alegría y Color',
        'orquideas': 'Orquídeas - Elegancia y Lujo',
        'lirios': 'Lirios - Majestuosidad y Pureza',
        'lisianthus': 'Lisianthus - Delicadeza y Dulzura'
    };

    /**
     * Actualiza el texto del título principal del catálogo.
     * @param {string} category - La clave de la categoría actual.
     */
    function updateTitle(category) {
        titleElement.innerHTML = categoryNames[category] || 'Catálogo de Productos';
    }

    /**
     * Filtra los productos mostrando u ocultando las tarjetas.
     * @param {string} category - La categoría a mostrar.
     */
    function filterProducts(category) {
        productCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            
            if (category === 'todos' || cardCategory === category) {
                // Mostrar el producto
                card.style.display = 'block';
                card.classList.remove('hidden');
            } else {
                // Ocultar el producto
                card.style.display = 'none';
                card.classList.add('hidden');
            }
        });
    }

    /**
     * Maneja el estado 'activo' del botón.
     * @param {HTMLElement} button - El botón que acaba de ser clicado.
     */
    function setActiveButton(button) {
        // 1. Quitar 'active' de todos los botones
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // 2. Añadir 'active' al botón clicado
        button.classList.add('active');
    }

    // Añadir el evento de click a todos los botones de filtro
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');
            
            setActiveButton(button);
            filterProducts(category);
            updateTitle(category);
        });
    });

    // Inicialización: Ejecutar la función al cargar la página para mostrar 'todos' por defecto.
    const initialButton = document.querySelector('.filter-btn.active');
    if (initialButton) {
        const initialCategory = initialButton.getAttribute('data-category');
        filterProducts(initialCategory);
        updateTitle(initialCategory);
    } else {
        // Fallback si no hay botón 'active' por defecto (muestra todo)
        filterProducts('todos');
        updateTitle('todos');
    }
});
