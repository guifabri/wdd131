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
      templeName: "Salt Lake",
      location: "Salt Lake City, Utah, United States",
      dedicated: "1893, April, 6",
      area: 253015,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669-main.jpg"
    }
];

const oldTemples = temples.filter(t => parseInt(t.dedicated.substring(0, 4)) < 1900);
console.log("Old temples:", oldTemples.map(t => t.templeName));

const newTemples = temples.filter(t => parseInt(t.dedicated.substring(0, 4)) > 2000);
console.log("New temples:", newTemples.map(t => t.templeName));

const largeTemples = temples.filter(t => t.area > 90000);
console.log("Large temples:", largeTemples.map(t => t.templeName));

const smallTemples = temples.filter(t => t.area < 10000);
console.log("Small temples:", smallTemples.map(t => t.templeName));
