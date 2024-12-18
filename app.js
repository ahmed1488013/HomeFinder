// Sample data for property listings
const properties = [
    { title: "Modern Apartment in Downtown", location: "Downtown", price: 200000, description: "Spacious apartment in the heart of the city." },
    { title: "Cozy Cottage in the Suburbs", location: "Suburbs", price: 150000, description: "A quiet retreat with beautiful gardens." },
    { title: "Luxury Villa by the Beach", location: "Beachside", price: 500000, description: "Stunning villa with sea views." },
    { title: "Charming Studio in the City", location: "City Center", price: 120000, description: "Perfect for singles or couples." },
    // Add more properties as needed
];

// Function to render properties
function renderProperties(properties) {
    const propertyContainer = document.getElementById('propertyCards');
    propertyContainer.innerHTML = ''; // Clear previous listings

    properties.forEach(property => {
        const propertyCard = document.createElement('div');
        propertyCard.classList.add('property-card');
        propertyCard.innerHTML = `
            <h3>${property.title}</h3>
            <p>${property.location}</p>
            <p>$${property.price.toLocaleString()}</p>
            <p>${property.description}</p>
            <button class="btn save-btn">Save Property</button>
        `;
        propertyContainer.appendChild(propertyCard);
    });
}

// Event listener for filter form
document.getElementById('filterForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const location = document.getElementById('location').value.toLowerCase();
    const minPrice = parseFloat(document.getElementById('minPrice').value);
    const maxPrice = parseFloat(document.getElementById('maxPrice').value);

    const filteredProperties = properties.filter(property => {
        const matchesLocation = property.location.toLowerCase().includes(location);
        const matchesPrice = (!minPrice || property.price >= minPrice) && (!maxPrice || property.price <= maxPrice);
        return matchesLocation && matchesPrice;
    });

    renderProperties(filteredProperties);
});

// Initial render of all properties
renderProperties(properties);
