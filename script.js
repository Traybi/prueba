document.addEventListener('DOMContentLoaded', function() {
    const updates = [
        {title: 'Wall Street sube tras buenos resultados', date: '10/06/2024'},
        {title: 'Nuevo r\u00e9cord hist\u00f3rico del Ibex 35', date: '05/06/2024'},
        {title: 'Curso avanzado de trading: inscripciones abiertas', date: '01/06/2024'}
    ];
    const container = document.getElementById('news');
    updates.forEach(item => {
        const col = document.createElement('div');
        col.className = 'col-md-4';
        col.innerHTML = `<div class="card mb-4"><div class="card-body"><h5 class="card-title">${item.title}</h5><p class="card-text"><small class="text-muted">${item.date}</small></p></div></div>`;
        container.appendChild(col);
    });
});
