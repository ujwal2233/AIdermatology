document.addEventListener("DOMContentLoaded", function () {
    // Function to fetch government schemes data
    function fetchGovernmentSchemes() {
        // Replace the URL with the actual API endpoint for government schemes
        fetch('https://api.example.com/government-schemes')
            .then(response => response.json())
            .then(data => {
                // Process the data and update the HTML content
                let schemesList = document.getElementById('government-schemes-list');
                schemesList.innerHTML = ''; // Clear previous content

                data.forEach(scheme => {
                    let listItem = document.createElement('li');
                    listItem.textContent = scheme.name;
                    schemesList.appendChild(listItem);
                });
            })
            .catch(error => console.error('Error fetching government schemes:', error));
    }

    // Function to fetch price rates data
    function fetchPriceRates() {
        // Replace the URL with the actual API endpoint for price rates
        fetch('https://api.example.com/price-rates')
            .then(response => response.json())
            .then(data => {
                // Process the data and update the HTML content
                let priceRatesTable = document.getElementById('price-rates-table');
                priceRatesTable.innerHTML = ''; // Clear previous content

                data.forEach(product => {
                    let row = priceRatesTable.insertRow();
                    let cell1 = row.insertCell(0);
                    let cell2 = row.insertCell(1);

                    cell1.textContent = product.name;
                    cell2.textContent = product.price;
                });
            })
            .catch(error => console.error('Error fetching price rates:', error));
    }

    // Execute these functions when the respective pages are loaded
    if (window.location.pathname.includes('government-schemes.html')) {
        fetchGovernmentSchemes();
    } else if (window.location.pathname.includes('price-rates.html')) {
        fetchPriceRates();
    }
});
// Existing JavaScript code

// Additional JavaScript for Language Selection
function changeLanguage() {
    var select = document.getElementById("language");
    var selectedLanguage = select.options[select.selectedIndex].value;
    
    // Update content based on the selected language
    if (selectedLanguage === "hi") {
        updateContentToHindi();
    } else {
        updateContentToEnglish();
    }
}

// Function to update content to English
function updateContentToEnglish() {
    document.getElementById("header-title").textContent = "Indian Farmers Portal";
    document.getElementById("welcome-message").textContent = "Welcome to Indian Farmers Portal";
    document.getElementById("portal-description").textContent = "This portal provides essential information and resources for Indian farmers to thrive in modern agriculture.";
    document.getElementById("news-heading").textContent = "Latest News";
    document.getElementById("stay-informed").textContent = "Stay Informed";
    document.getElementById("stay-informed-description").textContent = "Get the latest updates on agricultural innovations, government policies, and market trends to stay ahead in your farming practices.";
    document.getElementById("signup-heading").textContent = "Sign Up";
    document.getElementById("name-label").textContent = "Name:";
    document.getElementById("mobile-label").textContent = "Mobile Number:";
    document.getElementById("region-label").textContent = "Region:";
    document.getElementById("signup-button").textContent = "Sign Up";
    document.getElementById("footer-text").textContent = "\u00A9 2023 Indian Farmers Portal";
}

// Function to update content to Hindi
function updateContentToHindi() {
    document.getElementById("header-title").textContent = "भारतीय किसान पोर्टल";
    document.getElementById("welcome-message").textContent = "भारतीय किसान पोर्टल में आपका स्वागत है";
    document.getElementById("portal-description").textContent = "यह पोर्टल आधुनिक कृषि में भारतीय किसानों के लिए आवश्यक जानकारी और संसाधन प्रदान करता है।";
    document.getElementById("news-heading").textContent = "ताज़ा खबरें";
    document.getElementById("stay-informed").textContent = "सूचित रहें";
    document.getElementById("stay-informed-description").textContent = "कृषि अभिनवता, सरकारी नीतियों और बाजार के ट्रेंड्स पर नवीनतम अपडेट्स प्राप्त करें ताकि आप अपने कृषि प्रयासों में आगे बढ़ सकें।";
    document.getElementById("signup-heading").textContent = "साइन अप करें";
    document.getElementById("name-label").textContent = "नाम:";
    document.getElementById("mobile-label").textContent = "मोबाइल नंबर:";
    document.getElementById("region-label").textContent = "क्षेत्र:";
    document.getElementById("signup-button").textContent = "साइन अप करें";
    document.getElementById("footer-text").textContent = "\u00A9 2023 भारतीय किसान पोर्टल";
}
