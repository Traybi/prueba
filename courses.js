document.addEventListener('DOMContentLoaded', () => {
    const courses = [
        { id: 'intro', title: 'Introducción a la Bolsa', description: 'Aprende lo básico del mercado de valores.' },
        { id: 'tecnico', title: 'Análisis Técnico', description: 'Herramientas para detectar tendencias.' },
        { id: 'riesgos', title: 'Gestión de Riesgos', description: 'Protege tus inversiones de la volatilidad.' },
        { id: 'dividendos', title: 'Estrategia con Dividendos', description: 'Obtén ingresos pasivos con tus acciones.' },
        { id: 'psicologia', title: 'Psicología del Trading', description: 'Domina tus emociones al invertir.' }
    ];

    const container = document.getElementById('courses-list');
    courses.forEach(course => {
        const col = document.createElement('div');
        col.className = 'col-md-4';
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

    container.addEventListener('click', e => {
        if (e.target.tagName === 'BUTTON') {
            const id = e.target.getAttribute('data-id');
            const completed = localStorage.getItem(id) === 'true';
            localStorage.setItem(id, !completed);
            e.target.classList.toggle('btn-primary', completed);
            e.target.classList.toggle('btn-success', !completed);
            e.target.textContent = !completed ? 'Completado' : 'Marcar como completado';
        }
    });
});
