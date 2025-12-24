// Basic Search Functionality (Client-Side Only)
const searchInput = document.querySelector('.search-bar input');
const searchButton = document.querySelector('.search-bar button');

searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value.trim();
    if (searchTerm) {
        alert(`Searching for: ${searchTerm}`); // Replace with actual search logic (if you had a backend)
    } else {
        alert('Please enter a search term.');
    }
});

// Example of adding a simple hover effect to restaurant cards
const restaurantCards = document.querySelectorAll('.restaurant-card');

restaurantCards.forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'scale(1.05)';
        card.style.transition = 'transform 0.2s ease-in-out';
    });

    card.addEventListener('mouseout', () => {
        card.style.transform = 'scale(1)';
        card.style.transition = 'transform 0.2s ease-in-out';
    });
});
