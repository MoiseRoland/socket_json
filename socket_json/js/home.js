document.addEventListener('DOMContentLoaded', function () {
    // Usa direttamente l'oggetto `data`
    
    // Popola la navbar
    const navbar = document.getElementById('navbarItems');
    data.navbar.forEach(item => {
        const listItem = document.createElement('li');
        listItem.classList.add('nav-item');
        const link = document.createElement('a');
        link.classList.add('nav-link');
        if (item.active) link.classList.add('active');
        link.href = item.link;
        link.textContent = item.name;
        listItem.appendChild(link);
        navbar.appendChild(listItem);
    });

    // Popola la sezione Hero
    const heroSection = document.getElementById('heroSection');
    heroSection.innerHTML = `
        <h1 class="h4 fw-bold">${data.hero.title}</h1>
        <p class="small">${data.hero.text}</p>
        <a href="${data.hero.buttonLink}" class="btn btn-dark btn-lg">${data.hero.buttonText}</a>
    `;

    // Popola le card
    const cardsContainer = document.getElementById('cardsContainer');
    data.cards.forEach(card => {
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card', 'shadow-sm', 'text-center', 'col-12', 'col-md-4', 'my-3');
        cardDiv.innerHTML = `
            <img src="${card.image}" class="card-img-top" alt="${card.title}">
            <div class="card-body">
                <h5 class="card-title">${card.title}</h5>
                <p class="card-text small">${card.description}</p>
                <a href="${card.link}" class="btn btn-dark btn-sm">Scopri di più</a>
            </div>
        `;
        cardsContainer.appendChild(cardDiv);
    });

    // Popola il footer
    const footer = document.getElementById('footer');
    footer.innerHTML = `<p>${data.footer.text}</p>`;
});
