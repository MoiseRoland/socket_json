document.addEventListener('DOMContentLoaded', function () {
    // Navbar
    const navbar = document.getElementById('navbarItems');
    data.navbar.forEach(item => {
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

    // Glossary Section
    const glossaryAccordion = document.getElementById('glossarioAccordion');
    if (data.terms.length === 0) {
        glossaryAccordion.innerHTML = '<p class="text-danger">Nessun termine disponibile.</p>';
        return;
    }

    data.terms.forEach(term => {
        const accordionItem = document.createElement('div');
        accordionItem.classList.add('accordion-item');

        const accordionHeader = document.createElement('h2');
        accordionHeader.classList.add('accordion-header');
        accordionHeader.id = `heading${term.id}`;

        const button = document.createElement('button');
        button.classList.add('accordion-button');
        button.setAttribute('type', 'button');
        button.setAttribute('data-bs-toggle', 'collapse');
        button.setAttribute('data-bs-target', `#collapse${term.id}`);
        button.setAttribute('aria-expanded', 'true');
        button.setAttribute('aria-controls', `collapse${term.id}`);
        button.textContent = term.name;

        const accordionCollapse = document.createElement('div');
        accordionCollapse.id = `collapse${term.id}`;
        accordionCollapse.classList.add('accordion-collapse', 'collapse', 'show');
        accordionCollapse.setAttribute('aria-labelledby', `heading${term.id}`);
        accordionCollapse.setAttribute('data-bs-parent', '#glossarioAccordion');

        const accordionBody = document.createElement('div');
        accordionBody.classList.add('accordion-body');
        accordionBody.innerHTML = term.description;

        accordionCollapse.appendChild(accordionBody);
        accordionHeader.appendChild(button);
        accordionItem.appendChild(accordionHeader);
        accordionItem.appendChild(accordionCollapse);
        glossaryAccordion.appendChild(accordionItem);
    });
});
