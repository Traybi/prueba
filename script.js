document.addEventListener('DOMContentLoaded', function() {
    const updates = [
        {title: 'Wall Street sube tras buenos resultados', date: '10/06/2024'},
        {title: 'Nuevo r\u00e9cord hist\u00f3rico del Ibex 35', date: '05/06/2024'},
        {title: 'Curso avanzado de trading: inscripciones abiertas', date: '01/06/2024'}
    ];
    const container = document.getElementById('news');
    updates.forEach(item => {
        const col = document.createElement('div');
        col.className = 'col-md-4 fade-in';
        col.innerHTML = `<div class="card h-100"><div class="card-body"><h5 class="card-title">${item.title}</h5><p class="card-text"><small class="text-muted">${item.date}</small></p></div></div>`;
        container.appendChild(col);
    });

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', e => {
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
