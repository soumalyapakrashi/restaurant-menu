/*
    This function renders a single card showing a single food item.

    Function Inputs:
    1. name: Name of the food item.
    2. description: Description of the food item.
    3. img: Link to image asset for the food item.
    4. filters: The various filters corresponding to this food item.
    5. price: Price of the food item.

    Function Returns: HTML of the rendered card containing the food item details.
*/
export function FoodCard(name, description, img, filters, price) {
    return `
    <div class="card h-100">
        <img src="${img}" class="card-img-top" alt="${name}">
        <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <p class="card-text fraunces-p">${description}</p>
            ${filters.map(filter_tag => {
                return `<span class="badge rounded-pill text-bg-dark">${filter_tag}</span>`;
            }).join('\n')}
        </div>
        <div class="card-footer">
            <p class="card-text fraunces-p card-price">₹${price}</p>
        </div>
    </div>
    `;
}
