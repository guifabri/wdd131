// scripts/filtered-temples.js

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
        navigation.classList.toggle('nav-visible');
        navigation.classList.toggle('nav-hidden');
        
        if (navigation.classList.contains('nav-visible')) {
            menuButton.innerHTML = '&#10005;'; // 'X' symbol for close
            menuButton.setAttribute('aria-expanded', 'true');
        } else {
            menuButton.innerHTML = '&#9776;'; // Hamburger symbol
            menuButton.setAttribute('aria-expanded', 'false');
        }
    });
}

// 3. Temple Array
const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
      templeName: "Salt Lake",
      location: "Salt Lake City, Utah, United States",
      dedicated: "1893, April, 6",
      area: 253015,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/400x250/salt-lake-temple-37762.jpg"
    },
    {
      templeName: "Rome Italy",
      location: "Rome, Italy",
      dedicated: "2019, March, 10",
      area: 40000,
      imageUrl: "https://tempiodiroma.org/wp-content/uploads/2021/09/rome-aerial-scaled-1-1024x682.jpg"
    },
    {
      templeName: "Madrid Spain",
      location: "Madrid, Spain",
      dedicated: "1999, March, 19",
      area: 46000,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/madrid-spain/400x250/madrid-spain-temple-954939-wallpaper.jpg"
    }
];

// 4. Render Temples
const gallery = document.getElementById('temple-gallery');
const galleryTitle = document.getElementById('gallery-title');

function renderTemples(filteredTemples) {
    if (!gallery) return;
    
    gallery.innerHTML = ''; // Clear current temples
    
    filteredTemples.forEach(temple => {
        const figure = document.createElement('figure');
        
        const h3 = document.createElement('h3');
        h3.textContent = temple.templeName;
        
        const locationStr = document.createElement('p');
        locationStr.innerHTML = `<strong>Location:</strong> ${temple.location}`;
        
        const dedicatedStr = document.createElement('p');
        dedicatedStr.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`;
        
        const areaStr = document.createElement('p');
        areaStr.innerHTML = `<strong>Size:</strong> ${temple.area} sq ft`;
        
        const img = document.createElement('img');
        img.setAttribute('src', temple.imageUrl);
        img.setAttribute('alt', temple.templeName);
        img.setAttribute('loading', 'lazy');
        img.setAttribute('width', '400');
        img.setAttribute('height', '250');
        
        figure.appendChild(h3);
        figure.appendChild(locationStr);
        figure.appendChild(dedicatedStr);
        figure.appendChild(areaStr);
        figure.appendChild(img);
        
        gallery.appendChild(figure);
    });
}

// Initial render
renderTemples(temples);

// Helper function to extract year from dedicated string
function getYear(dedicatedString) {
    // splits the string by comma and extracts the first part (e.g. "1888" from "1888, May, 21")
    return parseInt(dedicatedString.split(',')[0].trim());
}

// Helper to remove active class from all links
function resetActiveLinks() {
    const links = document.querySelectorAll('#navigation a');
    links.forEach(link => link.classList.remove('active'));
}

// 5. Filtering Logic
document.getElementById('home-link').addEventListener('click', (e) => {
    e.preventDefault();
    resetActiveLinks();
    e.target.classList.add('active');
    if (galleryTitle) galleryTitle.textContent = 'Home';
    renderTemples(temples);
});

document.getElementById('old-link').addEventListener('click', (e) => {
    e.preventDefault();
    resetActiveLinks();
    e.target.classList.add('active');
    if (galleryTitle) galleryTitle.textContent = 'Old';
    const oldTemples = temples.filter(t => getYear(t.dedicated) < 1900);
    renderTemples(oldTemples);
});

document.getElementById('new-link').addEventListener('click', (e) => {
    e.preventDefault();
    resetActiveLinks();
    e.target.classList.add('active');
    if (galleryTitle) galleryTitle.textContent = 'New';
    const newTemples = temples.filter(t => getYear(t.dedicated) > 2000);
    renderTemples(newTemples);
});

document.getElementById('large-link').addEventListener('click', (e) => {
    e.preventDefault();
    resetActiveLinks();
    e.target.classList.add('active');
    if (galleryTitle) galleryTitle.textContent = 'Large';
    const largeTemples = temples.filter(t => t.area > 90000);
    renderTemples(largeTemples);
});

document.getElementById('small-link').addEventListener('click', (e) => {
    e.preventDefault();
    resetActiveLinks();
    e.target.classList.add('active');
    if (galleryTitle) galleryTitle.textContent = 'Small';
    const smallTemples = temples.filter(t => t.area < 10000);
    renderTemples(smallTemples);
});
