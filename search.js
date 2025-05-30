
function doSearch() {
    const where = document.getElementById('where').value;
    const when = document.getElementById('when').value;
    const budget = document.getElementById('budget').value;
    
    // Check if user filled in the form
    if (!where) {
        alert('Please enter where you want to go!');
        return;
    }
    
    // Simple search results (fake data for beginners)
    const results = [
        {
            name: where + ' Adventure Tour',
            price: '₹' + (Math.floor(Math.random() * 50000) + 25000),
            description: 'Amazing trip to ' + where + ' with great activities!'
        },
        {
            name: where + ' Cultural Experience',
            price: '₹' + (Math.floor(Math.random() * 60000) + 30000),
            description: 'Explore the culture and history of ' + where
        },
        {
            name: where + ' Relaxation Package', 
            price: '₹' + (Math.floor(Math.random() * 75000) + 35000),
            description: 'Relax and unwind in beautiful ' + where
        }
    ];
    
    displayResults(results);
}

function displayResults(results) {
    const resultsDiv = document.getElementById('search-results');
    
    if (results.length === 0) {
        resultsDiv.innerHTML = '<p>No trips found. Try searching for something else!</p>';
        return;
    }
    
    let html = '<h3>We found ' + results.length + ' trips for you:</h3>';
    
    results.forEach(function(result) {
        html += `
            <div class="result-item">
                <h4>${result.name}</h4>
                <p>${result.description}</p>
                <p><strong>Price: ${result.price}</strong></p>
                <button onclick="bookTrip('${result.name}')">Book This Trip</button>
            </div>
        `;
    });
    
    resultsDiv.innerHTML = html;
}

function bookTrip(tripName) {
    alert('Booking trip: ' + tripName + '\n\nThis will connect to the booking system soon!');
}

// Clear results when page loads
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('search-results').innerHTML = '';
});
