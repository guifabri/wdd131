// getdates.js
// Dynamically populate the current year and last modified date

// Set current year in the footer
const currentYear = new Date().getFullYear();
const yearElement = document.getElementById('currentyear');

if (yearElement) {
    yearElement.textContent = currentYear;
}

// Set last modified date in the footer
const lastModifiedElement = document.getElementById('lastModified');

if (lastModifiedElement) {
    lastModifiedElement.textContent = `Last Modification: ${document.lastModified}`;
}
