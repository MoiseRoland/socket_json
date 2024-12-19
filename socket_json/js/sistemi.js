document.addEventListener('DOMContentLoaded', function () {
    const data = sistemiData; // Usa i dati direttamente da sistemiData

    // Popola la navbar
    const navbar = document.getElementById('navbarItems');
    sistemiData.navbar.forEach(item => {
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

    // Popola il titolo
    const header = document.getElementById('header');
    header.innerHTML = `
        <h1 class="display-4 text-center">${data.header.title}</h1>
        <p class="lead text-center">${data.header.subtitle}</p>
    `;

    // Popola le sezioni
    const sections = document.getElementById('sections');
    sections.innerHTML = data.sections.map(section => `
        <section class="py-5 scroll-target" id="${section.id}">
            <h2 class="text-primary">${section.title}</h2>
            ${section.content ? `
                <p>${section.content.map(item => item.value).join('')}</p>
            ` : ''}
            ${section.accordion ? `
                <div class="accordion" id="accordion-${section.id}">
                    ${section.accordion.map((item, index) => `
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="heading-${index}">
                                <button class="accordion-button ${index === 0 ? '' : 'collapsed'}" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-${index}" aria-expanded="${index === 0}" aria-controls="collapse-${index}">
                                    ${item.title}
                                </button>
                            </h2>
                            <div id="collapse-${index}" class="accordion-collapse collapse ${index === 0 ? 'show' : ''}" aria-labelledby="heading-${index}" data-bs-parent="#accordion-${section.id}">
                                <div class="accordion-body">
                                    ${item.content}
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            ` : ''}
            ${section.cards ? `
                <div class="row">
                    ${section.cards.map(card => `
                        <div class="col-md-6">
                            <div class="card">
                                <img src="${card.image}" class="card-img-top" alt="${card.title}">
                                <div class="card-body">
                                    <h5 class="card-title">${card.title}</h5>
                                    <p class="card-text">${card.description}</p>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            ` : ''}
        </section>
    `).join('');

    // Popola il footer
    const footer = document.getElementById('footer');
    footer.innerHTML = `<p>${data.footer.text}</p>`;
});
