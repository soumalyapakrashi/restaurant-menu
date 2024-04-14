export function FoodCard(name, description, img, filters) {
    return `
    <div class="card h-100">
        <img src="${img}" class="card-img-top" alt="${name}">
        <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <p class="card-text">${description}</p>
            ${filters.map(filter_tag => {
                return `<span class="badge rounded-pill text-bg-dark">${filter_tag}</span>`;
            }).join('\n')}
        </div>
    </div>
    `;
}
