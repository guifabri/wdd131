// scripts/place.js

// Dynamically populate the current year and last modified date
const currentYear = new Date().getFullYear();
const yearElement = document.getElementById('currentyear');
if (yearElement) {
    yearElement.textContent = currentYear;
}

const lastModifiedElement = document.getElementById('lastModified');
if (lastModifiedElement) {
    lastModifiedElement.innerHTML = `Last Modification: ${document.lastModified}`;
}

// Wind Chill Calculation
// Formula for Celsius: 13.12 + 0.6215*T - 11.37*V^0.16 + 0.3965*T*V^0.16
function calculateWindChill(temp, speed) {
    if (temp <= 10 && speed > 4.8) {
        let windChill = 13.12 + (0.6215 * temp) - (11.37 * Math.pow(speed, 0.16)) + (0.3965 * temp * Math.pow(speed, 0.16));
        return Math.round(windChill * 10) / 10 + " &deg;C"; // Round to 1 decimal
    } else {
        return "N/A";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const tempElement = document.getElementById('temperature');
    const speedElement = document.getElementById('windspeed');
    const chillElement = document.getElementById('windchill');

    if (tempElement && speedElement && chillElement) {
        const temp = parseFloat(tempElement.textContent);
        const speed = parseFloat(speedElement.textContent);
        
        chillElement.innerHTML = calculateWindChill(temp, speed);
    }
});
