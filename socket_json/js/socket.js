document.addEventListener('DOMContentLoaded', function () {
    // Usa i dati direttamente da `socketData`
    
    // Navbar
    const navbar = document.getElementById('navbarItems');
    socketData.navbar.forEach(item => {
        const li = document.createElement('li');
        li.classList.add('nav-item');
        const a = document.createElement('a');
        a.classList.add('nav-link');
        if (item.active) a.classList.add('active');
        a.href = item.link;
        a.textContent = item.name;
        li.appendChild(a);
        navbar.appendChild(li);
    });

    // Hero Section
    const hero = document.getElementById('heroSection');
    hero.innerHTML = `
        <h1 class="display-4">${socketData.hero.title}</h1>
        <p class="lead">${socketData.hero.text}</p>
        <img src="${socketData.hero.image}" alt="${socketData.hero.title}" class="img-fluid rounded shadow">
    `;

    // Sections
    socketData.sections.forEach(section => {
        const sectionDiv = document.getElementById(section.id);
        sectionDiv.innerHTML = `<h2 class="text-primary">${section.title}</h2>`;
        if (section.content) {
            sectionDiv.innerHTML += `<p>${section.content}</p>`;
            if (section.image) {
                sectionDiv.innerHTML += `<img src="${section.image}" class="img-fluid rounded shadow mt-3">`;
            }
        } else if (section.cards) {
            const cardContainer = document.createElement('div');
            cardContainer.classList.add('d-flex', 'flex-wrap');
            section.cards.forEach(card => {
                const cardDiv = document.createElement('div');
                cardDiv.classList.add('card', 'shadow-sm', 'mx-3', 'my-3', 'text-center');
                cardDiv.style.width = '20rem';
                cardDiv.innerHTML = `
                    <div class="card-header bg-${card.color} text-white">
                        <h5 class="card-title">${card.title}</h5>
                    </div>
                    <div class="card-body">
                        <p>${card.description}</p>
                        <ul class="list-unstyled">
                            ${card.details.map(detail => `<li>${detail}</li>`).join('')}
                        </ul>
                    </div>
                `;
                cardContainer.appendChild(cardDiv);
            });
            sectionDiv.appendChild(cardContainer);
        } else if (section.points) {
            sectionDiv.innerHTML += `
                <ul>
                    ${section.points.map(point => `<li>${point}</li>`).join('')}
                </ul>
            `;
        }
    });

    // Footer
    const footer = document.getElementById('footer');
    footer.innerHTML = `<p>${socketData.footer.text}</p>`;
});
