document.addEventListener('DOMContentLoaded', () => {
    const courses = [
        { id: 'intro', title: 'Introducción a la Bolsa', description: 'Aprende lo básico del mercado de valores.' },
        { id: 'tecnico', title: 'Análisis Técnico', description: 'Herramientas para detectar tendencias.' },
        { id: 'fundamental', title: 'Análisis Fundamental', description: 'Evalúa empresas y sectores para invertir mejor.' },
        { id: 'riesgos', title: 'Gestión de Riesgos', description: 'Protege tus inversiones de la volatilidad.' },
        { id: 'dividendos', title: 'Estrategia con Dividendos', description: 'Obtén ingresos pasivos con tus acciones.' },
        { id: 'psicologia', title: 'Psicología del Trading', description: 'Domina tus emociones al invertir.' },
        { id: 'intradias', title: 'Operaciones Intradía', description: 'Maximiza rendimientos en el corto plazo.' }
    ];

    const container = document.getElementById('courses-list');
    const progressBar = document.getElementById('progress-bar');

    const renderCourses = () => {
        container.innerHTML = '';
        courses.forEach(course => {
            const col = document.createElement('div');
            col.className = 'col-md-4 fade-in';
            const completed = localStorage.getItem(course.id) === 'true';
            col.innerHTML = `
                <div class="card h-100">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title">${course.title}</h5>
                        <p class="card-text">${course.description}</p>
                        <button class="btn ${completed ? 'btn-success' : 'btn-primary'} mt-auto" data-id="${course.id}">
                            ${completed ? 'Completado' : 'Marcar como completado'}
                        </button>
                    </div>
                </div>`;
            container.appendChild(col);
        });
    };

    const updateProgress = () => {
        const completed = courses.filter(c => localStorage.getItem(c.id) === 'true').length;
        const percent = Math.round((completed / courses.length) * 100);
        progressBar.style.width = percent + '%';
        progressBar.textContent = percent + '%';
    };

    renderCourses();
    updateProgress();

    container.addEventListener('click', e => {
        if (e.target.tagName === 'BUTTON') {
            const id = e.target.getAttribute('data-id');
            const completed = localStorage.getItem(id) === 'true';
            localStorage.setItem(id, !completed);
            e.target.classList.toggle('btn-primary', completed);
            e.target.classList.toggle('btn-success', !completed);
            e.target.textContent = !completed ? 'Completado' : 'Marcar como completado';
            updateProgress();
        }
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
});
