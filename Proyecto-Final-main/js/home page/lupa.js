document.addEventListener('DOMContentLoaded', function() {
    const searchBar = document.querySelector('.search-bar');
    const suggestions = document.querySelector('.suggestions');
    const catalogItems = [
        'Airpods 3ro gen casi nuevo', 
        'iPhone 15 Pro Max usado', 
        'Computador Lenovo Legion', 
        'Apple Watch Series 7 en buen estado', 
        'Mouse Deathadder V2X HyperSpeed', 
        'Teclado Logitech G413 casi nuevo', 
        'Monitor Asus 24 pulgadas casi nuevo', 
        'Mouse Logitech G305 casi nuevo', 
        'Mouse Logitech G102 casi nuevo', 
        'Mouse Logitech G502 Hero usado'
    ];

    document.querySelector('.icono-lupa').addEventListener('click', function(event) {
        event.preventDefault();
        const searchContainer = document.querySelector('.search-container');
        searchContainer.classList.toggle('active');

        if (searchContainer.classList.contains('active')) {
            searchBar.style.display = 'inline-block';
            setTimeout(() => searchBar.style.width = '150px', 0);
        } else {
            searchBar.style.width = '0';
            setTimeout(() => searchBar.style.display = 'none', 300);
        }
    });

    searchBar.addEventListener('input', function() {
        const query = searchBar.value.trim().toLowerCase();
        suggestions.innerHTML = '';
        if (query) {
            const filteredItems = catalogItems.filter(item => item.toLowerCase().includes(query));

            if (filteredItems.length > 0) {
                suggestions.style.display = 'block';

                filteredItems.forEach(item => {
                    const li = document.createElement('li');
                    li.textContent = item;

                    li.addEventListener('click', function() {
                        searchBar.value = item;
                        suggestions.innerHTML = '';
                        suggestions.style.display = 'none';
                        window.location.href = '../../html/catalogo/catalogo.html';
                    });

                    suggestions.appendChild(li);
                });
            } else {
                suggestions.style.display = 'none';
            }
        } else {
            suggestions.style.display = 'none';
        }
    });

    searchBar.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            window.location.href = '../../html/catalogo/catalogo.html';
        }
    });

    document.addEventListener('click', function(event) {
        if (!searchBar.contains(event.target) && !suggestions.contains(event.target)) {
            suggestions.style.display = 'none';
        }
    });
});
