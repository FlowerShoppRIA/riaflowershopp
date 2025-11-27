document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.tarjeta-producto');
    const titleElement = document.getElementById('tituloCatalogo');
    
    const categoryNames = {
        'todos': 'Toda la Colección Exclusiva de RiaFlowerShopp',
        'rosas': 'Ramos de Rosas - Pasión y Romance',
        'gerberas': 'Arreglos de Gerberas - Alegría y Color',
        'orquideas': 'Orquídeas - Elegancia y Lujo',
        'lirios': 'Lirios - Majestuosidad y Pureza',
        'lisianthus': 'Lisianthus - Delicadeza y Dulzura'
    };

    function updateTitle(category) {
        titleElement.innerHTML = categoryNames[category] || 'Catálogo de Productos';
    }

    function filterProducts(category) {
        productCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            
            if (category === 'todos' || cardCategory === category) {
                card.style.display = 'block';
                card.classList.remove('hidden');
            } else {
                card.style.display = 'none';
                card.classList.add('hidden');
            }
        });
    }

    function setActiveButton(button) {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    }

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');
            
            setActiveButton(button);
            filterProducts(category);
            updateTitle(category);
        });
    });

    // Inicialización
    const initialButton = document.querySelector('.filter-btn.active');
    if (initialButton) {
        const initialCategory = initialButton.getAttribute('data-category');
        filterProducts(initialCategory);
        updateTitle(initialCategory);
    } else {
        filterProducts('todos');
        updateTitle('todos');
    }
});
