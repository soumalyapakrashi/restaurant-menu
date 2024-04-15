import { FoodCard } from "./FoodCard.js";

const FOOD_SECTIONS = [ 'Starters', 'Main-Course', 'Desserts', 'Drinks' ];
const FOOD_SECTION_DESC = {
    'Starters': 'Kickstart your culinary adventure with our enticing selection of Starters. Designed to awaken your palate and whet your appetite, our Starters offer a tantalizing array of flavors and textures to delight your senses.',
    'Main-Course': 'Dive into a world of culinary excellence with our Main Course selection. Crafted with passion and precision, our Main Course offerings showcase a symphony of flavors and textures that promise to satisfy even the most discerning palate.',
    'Desserts': 'Satisfy your sweet tooth and indulge in a decadent treat from our Desserts section. Discover a delightful selection of desserts meticulously crafted to captivate your senses and provide the perfect finale to your dining experience.',
    'Drinks': 'Quench your thirst with our refreshing selection of beverages. From classic cocktails to artisanal mocktails, our Drinks section offers a delightful array of options to complement your dining experience.'
}

const MENU = {
    "Starters": [
        {
            "name": "Cauliflower & squash fritters with mint & feta dip",
            "description": "Crispy golden fritters bursting with the flavors of roasted cauliflower and sweet squash, served with a refreshing mint & feta dip.",
            "img": "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/cauliflower-squash-fritters-with-mint-feta-dip-ba3025e.jpg?quality=90&webp=true&resize=440,400",
            "filters": [ "vegetarian", "gluten-free" ],
            "nutrition": {
                "kcal": 358,
                "fat": 19,
                "saturates": 4,
                "carbohydrates": 28,
                "sugars": 10,
                "fibre": 7,
                "protein": 10,
                "salt": 0.5
            }
        },
        {
            "name": "Nutty chicken satay strips",
            "description": "Tender chicken strips marinated in a rich nutty sauce, grilled to perfection and served with a side of aromatic peanut sauce for dipping.",
            "img": "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/nutty-chicken-sate-strips-67269e0.jpg?quality=90&webp=true&resize=440,400",
            "filters": [],
            "nutrition": {
                "kcal": 276,
                "fat": 108,
                "saturates": 2,
                "carbohydrates": 3,
                "sugars": 2,
                "fibre": 2,
                "protein": 41,
                "salt": 0.7
            }
        },
        {
            "name": "Pakora",
            "description": "A medley of vegetables dipped in a spiced chickpea batter and fried to crispy perfection, served with tangy tamarind chutney for an explosion of flavor.",
            "img": "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/pakoras-7d687b5.jpg?quality=90&webp=true&resize=440,400",
            "filters": [ "vegetarian", "gluten-free", "vegan" ],
            "nutrition": {
                "kcal": 309,
                "fat": 13,
                "saturates": 1,
                "carbohydrates": 35,
                "sugars": 6,
                "fibre": 7,
                "protein": 11,
                "salt": 0.1
            }
        },
        {
            "name": "Mini chicken fajitas",
            "description": "Bite-sized bursts of flavor featuring succulent chicken strips cooked with colorful bell peppers and onions, served with warm tortillas and all the fixings for a customizable fiesta.",
            "img": "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/mini-chicken-fajitas-9a29b14.jpg?quality=90&webp=true&resize=440,400",
            "filters": [],
            "nutrition": {
                "kcal": 41,
                "fat": 2,
                "saturates": 1,
                "carbohydrates": 3,
                "sugars": 1,
                "fibre": 1,
                "protein": 3,
                "salt": 0.1
            }
        },
        {
            "name": "Prawn & sweetcorn fritters",
            "description": "Plump prawns and sweetcorn kernels blended into a light batter, fried until golden and served with zesty lemon aioli for a delightful coastal twist.",
            "img": "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-592475_12-5d65ea4.jpg?quality=90&webp=true&resize=440,400",
            "filters": [],
            "nutrition": {
                "kcal": 399,
                "fat": 22,
                "saturates": 4,
                "carbohydrates": 36,
                "sugars": 4,
                "fibre": 2,
                "protein": 16,
                "salt": 1.04
            }
        }
    ],
    "Main-Course": [
        {
            "name": "Spicy red lentil chilli with guacamole & rice",
            "description": "A hearty blend of red lentils simmered with tomatoes, onions, and a kick of spice, served with creamy guacamole and fluffy rice for a satisfying, soul-warming meal.",
            "img": "https://images.immediate.co.uk/production/volatile/sites/30/2022/11/Lentil-chilli-2158471.jpg?quality=90&webp=true&resize=375,341",
            "filters": [ "vegan", "vegetarian", "nut-free", "egg-free", "dairy-free" ],
            "nutrition": {
                "kcal": 542,
                "fat": 12,
                "saturates": 2,
                "carbohydrates": 79,
                "sugars": 7,
                "fibre": 16,
                "protein": 21,
                "salt": 0.83
            }
        }
    ],
    "Desserts": [],
    "Drinks": []
};

window.addEventListener('load', event => {
    showMenuItems();
    showFoodContent(MENU);
})

function showMenuItems() {
    const menu_items_container = document.querySelector('#menu-items');
    menu_items_container.innerHTML = `
    ${FOOD_SECTIONS.map(section => {
        return `
        <div class="text-end mb-4">
            <a href="#${section}">${section.replace('-', ' ')}</a>
            <p class="fraunces-p menu-desc">${FOOD_SECTION_DESC[section]}</p>
        </div>
        `
    }).join('\n')}
    `;
}

// Display the food sections one after another
function showFoodContent(food_menu) {
    const food_sections_holder = document.querySelector('#food-courses');
    food_sections_holder.innerHTML = FOOD_SECTIONS.map(section => {
        return `
        <div class="food-course mb-5 more-padding">
            ${food_menu[section].length !== 0 ?
                `<h2 class="mb-4 text-end" id="${section}">${section.replace('-', ' ')}</h2>
                <div class="row gx-10 gy-4">
                    ${food_menu[section].map(food_item => {
                        return `
                        <div class="col-sm-4">
                            ${FoodCard(food_item.name, food_item.description, food_item.img, food_item.filters)}
                        </div>
                        `;
                    }).join('\n')}
                </div>`
                : ''
            }
        </div>
        `;
    }).join('\n');
}

// Function filters food items from menu based on tags provided as a list
function showFilteredContent(filtered_list) {
    if(filtered_list.length === 0) {
        showFoodContent(MENU);
    }
    else {
        let updated_menu = {};
        FOOD_SECTIONS.forEach(section => {
            updated_menu[section] = MENU[section].filter(menu_item => {
                return filtered_list.some(chosen => {
                    return menu_item.filters.includes(chosen);
                })
            });
        });
    
        showFoodContent(updated_menu);
    }
}

function showSearchedContent(search_string) {
    if(search_string === '') {
        showFoodContent(MENU);
    }
    else {
        let updated_menu = {};
        FOOD_SECTIONS.forEach(section => {
            updated_menu[section] = MENU[section].filter(menu_item => {
                return menu_item.name.toLowerCase().includes(search_string.toLowerCase());
            });
        });

        showFoodContent(updated_menu);
    }
}

// Get the handler to the form for the search and call function with entered string
const search_form = document.querySelector('#food-search');
search_form.addEventListener('submit', event => {
    event.preventDefault();
    showSearchedContent(event?.target?.search?.value);
})


function updateFilterDropdownItems() {
    const filter_dropdown_menu = document.querySelector('#filter-dropdown-menu');
    let unique_filters = new Set();
    FOOD_SECTIONS.forEach(food_section => {
        MENU[food_section].forEach(menu_item => {
            menu_item.filters.forEach(filter_item => unique_filters.add(filter_item));
        });
    })
    
    let list_unique_filters = Array.from(unique_filters);

    filter_dropdown_menu.innerHTML = `
    ${list_unique_filters.map(filter => {
        return `
        <li>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="${filter}" id="filter-item-${filter}" name="${filter}">
                <label class="form-check-label" for="filter-item-${filter}">${filter}</label>
            </div>
        </li>
        `
    }).join('\n')}
    `
}

updateFilterDropdownItems();

const filter_form = document.querySelector('#food-filter');
filter_form.addEventListener('submit', event => {
    event.preventDefault();
    let selected_filters = [];
    Object.keys(event.target).forEach(key => {
        if(event.target[key].checked === true) {
            selected_filters.push(event.target[key].name);
        }
    });

    const filter_dropdown = document.querySelector('#filter-dropdown')
    let bootstrap_dropdown = new bootstrap.Dropdown(filter_dropdown);
    bootstrap_dropdown.hide();

    updateSelectedFiltersChips(selected_filters);
    showFilteredContent(selected_filters);
});

function updateSelectedFiltersChips(selected_filters) {
    const filters_container = document.querySelector('#selected-filters');
    filters_container.innerHTML = `
    ${selected_filters.map(filter_tag => {
        return `<span class="badge rounded-pill text-bg-dark">${filter_tag}</span>`
    }).join('\n')}
    `;
}
