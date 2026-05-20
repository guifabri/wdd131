const places = [
    {
        name: "El Avila National Park",
        category: "nature",
        description: "A mountain park with trails and panoramic views over Caracas."
    },
    {
        name: "Museo de Bellas Artes",
        category: "culture",
        description: "A central museum with historic and modern art exhibitions."
    },
    {
        name: "Mercado de Chacao",
        category: "food",
        description: "A local market area with Venezuelan flavors and fresh snacks."
    }
];

function setFooterDates() {
    const yearElement = document.getElementById("currentyear");
    const lastModifiedElement = document.getElementById("lastModified");
    if (yearElement) {
        yearElement.textContent = String(new Date().getFullYear());
    }
    if (lastModifiedElement) {
        lastModifiedElement.textContent = `Last Modification: ${document.lastModified}`;
    }
}

function setupMenu() {
    const menuButton = document.getElementById("menuButton");
    const nav = document.getElementById("mainNav");
    if (!menuButton || !nav) {
        return;
    }

    menuButton.addEventListener("click", () => {
        const isOpen = nav.classList.toggle("nav-visible");
        nav.classList.toggle("nav-hidden", !isOpen);
        menuButton.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
}

function renderCards(targetId, list) {
    const target = document.getElementById(targetId);
    if (!target) {
        return;
    }
    target.innerHTML = "";
    list.forEach((place) => {
        const article = document.createElement("article");
        article.className = "card";
        article.innerHTML = `
            <h3>${place.name}</h3>
            <p>${place.description}</p>
            <span class="badge">${place.category}</span>
        `;
        target.appendChild(article);
    });
}

function setupDiscoverFilter() {
    const filterSelect = document.getElementById("categoryFilter");
    if (!filterSelect) {
        return;
    }

    renderCards("discoverCards", places);
    filterSelect.addEventListener("change", () => {
        const value = filterSelect.value;
        if (value === "all") {
            renderCards("discoverCards", places);
            return;
        }
        const filtered = places.filter((place) => place.category === value);
        renderCards("discoverCards", filtered);
    });
}

function setupFeatured() {
    renderCards("featuredPlaces", places);
}

function setupJoinForm() {
    const form = document.getElementById("joinForm");
    const message = document.getElementById("joinMessage");
    if (!form || !message) {
        return;
    }

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const data = new FormData(form);
        const name = data.get("fullName");
        localStorage.setItem("ccg-last-member", String(name));
        message.textContent = `Thanks, ${name}. You have joined the updates list.`;
        form.reset();
    });
}

document.addEventListener("DOMContentLoaded", () => {
    setFooterDates();
    setupMenu();
    setupFeatured();
    setupDiscoverFilter();
    setupJoinForm();
});
