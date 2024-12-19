document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbarItems');
    datiPagina.navbar.forEach(item => {
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

    // Popola il titolo e il sottotitolo
    const header = document.getElementById('header');
    header.innerHTML = `
        <div class="col-12">
            <h1 class="display-4 text-center">${datiPagina.header.title}</h1>
            <p class="lead text-center">${datiPagina.header.subtitle}</p>
        </div>
    `;

    // Popola le sezioni
    const sections = document.getElementById('sections');
    sections.innerHTML = datiPagina.sections.map(section => `
        <section class="py-5 scroll-target" id="${section.id}">
            <h2 class="text-primary">${section.title}</h2>
            <div class="row">
                ${section.content.map(content => {
                    if (content.type === 'text') {
                        return `<div class="col-md-6"><p>${content.value}</p></div>`;
                    } else if (content.type === 'dropdown') {
                        return `
                            <div class="col-md-6">
                                <div class="btn-group">
                                    <!-- Pulsante per aprire il dropdown -->
                                    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        ${content.label}
                                    </button>
                                    <!-- Contenuto del dropdown -->
                                    <ul class="dropdown-menu">
                                        <li>
                                            <a class="dropdown-item" href="#">
                                                <img src="${content.image}" class="img-fluid" alt="${content.alt}" />
                                            </a>
                                        </li>
                                    </ul>
                                    <!-- Pulsante per aprire l'immagine in una nuova scheda -->
                                    <a href="${content.image}" target="_blank" class="btn btn-primary">
                                        Apri l'immagine
                                    </a>
                                </div>
                            </div>
                        `;
                    }
                }).join('')}
            </div>
        </section>
    `).join('');

    // Popola il footer
    const footer = document.getElementById('footer');
    footer.innerHTML = `<p>${datiPagina.footer.text}</p>`;

    // Funzionalità per il dark mode
    const modeToggle = document.getElementById('modeToggle');
    modeToggle.addEventListener('change', () => {
        document.body.classList.toggle('dark-mode', modeToggle.checked);
    });
});
