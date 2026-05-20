// scripts/temples.js

// 1. Dynamically populate the current year and last modified date
const currentYear = new Date().getFullYear();
const yearElement = document.getElementById('currentyear');

if (yearElement) {
    yearElement.textContent = currentYear;
}

const lastModifiedElement = document.getElementById('lastModified');
if (lastModifiedElement) {
    lastModifiedElement.textContent = `Last Modification: ${document.lastModified}`;
}

// 2. Responsive Hamburger Menu Effect
const menuButton = document.getElementById('menu-button');
const navigation = document.getElementById('navigation');

if (menuButton && navigation) {
    menuButton.addEventListener('click', () => {
        // Toggle the visibility class
        navigation.classList.toggle('nav-visible');
        navigation.classList.toggle('nav-hidden');
        
        // Change the button text (symbol) between hamburger and X
        if (navigation.classList.contains('nav-visible')) {
            menuButton.innerHTML = '&#10005;'; // 'X' symbol for close
            menuButton.setAttribute('aria-expanded', 'true');
        } else {
            menuButton.innerHTML = '&#9776;'; // Hamburger symbol
            menuButton.setAttribute('aria-expanded', 'false');
        }
    });
}
