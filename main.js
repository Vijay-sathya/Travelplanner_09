// Enhanced JavaScript with Indian Rupee conversion
const USD_TO_INR = 83; // Current exchange rate

// Currency conversion function
function convertToINR(usdPrice) {
    return Math.round(usdPrice * USD_TO_INR);
}

// Enhanced search function
function searchDestination() {
    const destination = document.getElementById('destination').value.trim();
    
    if (destination === '') {
        showStylishAlert('⚠️ Please enter a destination!', 'warning');
        return;
    }
    
    // Popular Indian destinations
    const indianDestinations = ['goa', 'kerala', 'rajasthan', 'himachal', 'kashmir', 'mumbai', 'delhi'];
    const isIndianDestination = indianDestinations.some(place => 
        destination.toLowerCase().includes(place)
    );
    
    if (isIndianDestination) {
        showStylishAlert(`🇮🇳 Searching for amazing ${destination} packages...`, 'success');
    } else {
        showStylishAlert(`🌍 Searching for international trips to ${destination}...`, 'info');
    }
    
    setTimeout(() => {
        window.location.href = 'search.html';
    }, 1500);
}

// Enhanced notification system
function showStylishAlert(message, type = 'info') {
    const colors = {
        success: '#2E8B57',
        warning: '#FF8C00', 
        info: '#4A90E2',
        error: '#DC143C'
    };
    
    const notification = document.createElement('div');
    notification.innerHTML = `
        <div style="
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${colors[type]};
            color: white;
            padding: 20px 30px;
            border-radius: 15px;
            box-shadow: 0 8px 25px rgba(0,0,0,0.3);
            z-index: 1000;
            font-weight: 600;
            backdrop-filter: blur(10px);
            animation: slideInRight 0.5s ease;
            max-width: 350px;
        ">
            ${message}
        </div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 4000);
}
