import { FoodCard } from "./FoodCard.js";

const FOOD_SECTIONS = [ 'Starters', 'Main-Course', 'Desserts', 'Drinks' ];
const FOOD_SECTION_DESC = {
    'Starters': 'Kickstart your culinary adventure with our enticing selection of Starters. Designed to awaken your palate and whet your appetite, our Starters offer a tantalizing array of flavors and textures to delight your senses.',
    'Main-Course': 'Dive into a world of culinary excellence with our Main Course selection. Crafted with passion and precision, our Main Course offerings showcase a symphony of flavors and textures that promise to satisfy even the most discerning palate.',
    'Desserts': 'Satisfy your sweet tooth and indulge in a decadent treat from our Desserts section. Discover a delightful selection of desserts meticulously crafted to captivate your senses and provide the perfect finale to your dining experience.',
    'Drinks': 'Quench your thirst with our refreshing selection of beverages. From classic cocktails to artisanal mocktails, our Drinks section offers a delightful array of options to complement your dining experience.'
}

const menu = {
    "Starters": [
      {
        "name": "Cauliflower & squash fritters with mint & feta dip",
        "description": "Crispy golden fritters bursting with the flavors of roasted cauliflower and sweet squash, served with a refreshing mint & feta dip.",
        "img": "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/cauliflower-squash-fritters-with-mint-feta-dip-ba3025e.jpg?quality=90&webp=true&resize=440,400",
        "filters": ["vegetarian", "gluten-free"],
        "nutrition": {
          "kcal": 358,
          "fat": 19,
          "saturates": 4,
          "carbohydrates": 28,
          "sugars": 10,
          "fibre": 7,
          "protein": 10,
          "salt": 0.5
        },
        "price": 100
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
        },
        "price": 240
      },
      {
        "name": "Pakora",
        "description": "A medley of vegetables dipped in a spiced chickpea batter and fried to crispy perfection, served with tangy tamarind chutney for an explosion of flavor.",
        "img": "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/pakoras-7d687b5.jpg?quality=90&webp=true&resize=440,400",
        "filters": ["vegetarian", "gluten-free", "vegan"],
        "nutrition": {
          "kcal": 309,
          "fat": 13,
          "saturates": 1,
          "carbohydrates": 35,
          "sugars": 6,
          "fibre": 7,
          "protein": 11,
          "salt": 0.1
        },
        "price": 220
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
        },
        "price": 150
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
        },
        "price": 350
      },
      {
        "name": "Versatile veg soup",
        "description": "A basic soup recipe, served with creme fraiche and fresh herbs.",
        "img": "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-339036_11-6679d1f.jpg?quality=90&webp=true&resize=440,400",
        "filters": ["vegetarian"],
        "nutrition": {
          "kcal": 218,
          "fat": 27,
          "saturates": 6,
          "carbohydrates": 32,
          "sugars": 7,
          "fibre": 6,
          "protein": 5,
          "salt": 0.9
        },
        "price": 250
      },
      {
        "name": "Jewish chicken soup",
        "description": "Comforting chicken soup to kick off celebrations for the Jewish festival of Passover. Take your matzo balls up a notch with punchy horseradish and dill.",
        "img": "https://images.immediate.co.uk/production/volatile/sites/30/2022/03/Passover-chicken-soup-with-horseradish-dill-matzo-balls-6da631e.jpg?quality=90&webp=true&resize=750,681",
        "filters": [],
        "nutrition": {
          "kcal": 442,
          "fat": 22,
          "saturates": 6,
          "carbohydrates": 29,
          "sugars": 7,
          "fibre": 3,
          "protein": 25,
          "salt": 1.9
        },
        "price": 300
      }
    ],
    "Main-Course": [
      {
        "name": "Spicy red lentil chilli with guacamole & rice",
        "description": "A hearty blend of red lentils simmered with tomatoes, onions, and a kick of spice, served with creamy guacamole and fluffy rice for a satisfying, soul-warming meal.",
        "img": "https://images.immediate.co.uk/production/volatile/sites/30/2022/11/Lentil-chilli-2158471.jpg?quality=90&webp=true&resize=375,341",
        "filters": ["vegan", "vegetarian", "nut-free", "egg-free", "dairy-free"],
        "nutrition": {
          "kcal": 542,
          "fat": 12,
          "saturates": 2,
          "carbohydrates": 79,
          "sugars": 7,
          "fibre": 16,
          "protein": 21,
          "salt": 0.83
        },
        "price": 400
      },
      {
        "name": "Sweet potato, spinach & feta tortilla",
        "description": "With sweet potato, spinach and feta, it’s packed with flavours.",
        "img": "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/sweet-potato-spinach-feta-tortilla-eaf219a.jpg?quality=90&webp=true&resize=375,341",
        "filters": ["vegetarian", "gluten-free"],
        "nutrition": {
          "kcal": 572,
          "fat": 25,
          "saturates": 9,
          "carbohydrates": 59,
          "sugars": 31,
          "fibre": 10,
          "protein": 23,
          "salt": 1.6
        },
        "price": 300
      },
      {
        "name": "Flatbreads with brunch-style eggs",
        "description": "Some flatbreads served alongside brunch-style eggs with cheese and tomatoes.",
        "img": "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/flatbreads-with-brunch-style-eggs-54092f0.jpg?quality=90&webp=true&resize=375,341",
        "filters": ["vegetarian"],
        "nutrition": {
          "kcal": 349,
          "fat": 21,
          "saturates": 7,
          "carbohydrates": 27,
          "sugars": 1,
          "fibre": 3,
          "protein": 11,
          "salt": 1.2
        },
        "price": 450
      },
      {
        "name": "Chicken & chorizo jambalaya",
        "description": "A healthy Cajun-inspired rice pot recipe that's bursting with spicy Spanish sausage, sweet peppers and tomatoes.",
        "img": "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-1274503_8-05ae02b.jpg?quality=90&webp=true&resize=440,400",
        "filters": [],
        "nutrition": {
          "kcal": 445,
          "fat": 10,
          "saturates": 3,
          "carbohydrates": 64,
          "sugars": 7,
          "fibre": 2,
          "protein": 30,
          "salt": 1.2
        },
        "price": 500
      },
      {
        "name": "Chicken noodle soup",
        "description": "Mary Cadogan's aromatic broth will warm you up on a winter's evening - it contains ginger, which is particularly good for colds.",
        "img": "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-1035613_10-0e544b7.jpg?quality=90&webp=true&resize=500,454",
        "filters": [],
        "nutrition": {
          "kcal": 217,
          "fat": 2,
          "saturates": 0.4,
          "carbohydrates": 26,
          "sugars": 1,
          "fibre": 0.6,
          "protein": 26,
          "salt": 2.5
        },
        "price": 475
      },
      {
        "name": "Chicken satay salad",
        "description": "Try this no-fuss, midweek meal that's high in protein and big on flavour. Marinate chicken breasts, then drizzle with a punchy peanut satay sauce.",
        "img": "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chicken-satay-salad-8f5b068.jpg?quality=90&webp=true&resize=440,400",
        "filters": [],
        "nutrition": {
          "kcal": 353,
          "fat": 10,
          "saturates": 2,
          "carbohydrates": 24,
          "sugars": 21,
          "fibre": 7,
          "protein": 38,
          "salt": 1.6
        },
        "price": 550
      },
      {
        "name": "Panuozzo sandwich",
        "description": "Baguettes and pesto makes these pizza-inspired sandwiches for the whole family.",
        "img": "https://images.immediate.co.uk/production/volatile/sites/30/2022/03/Panuozzo-sandwich-4b19929.jpg?quality=90&webp=true&resize=750,681",
        "filters": [],
        "nutrition": {
          "kcal": 552,
          "fat": 25,
          "saturates": 8,
          "carbohydrates": 58,
          "sugars": 1,
          "fibre": 3,
          "protein": 28,
          "salt": 0.9
        },
        "price": 350
      }
    ],
    "Desserts": [
      {
        "name": "Amaretti biscuits mascarpone dessert",
        "description": "A cross between a trifle and tiramisu. Roasted apricots with orange, layered up with mascarpone and custard for an indulgent dessert.",
        "img": "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-7683_11-89fde68.jpg?quality=90&webp=true&resize=440,400",
        "filters": ["vegetarian"],
        "nutrition": {
          "kcal": 432,
          "fat": 25,
          "saturates": 18,
          "carbohydrates": 48,
          "sugars": 32,
          "fibre": 3,
          "protein": 5,
          "salt": 0.34
        },
        "price": 350
      },
      {
        "name": "Festive dessert board",
        "description": "Mix up your festive dessert course with an all-in-one sweet feast to share, with peppermint tiffin, gingerbread-spice doughnuts, mini meringues and more.",
        "img": "https://images.immediate.co.uk/production/volatile/sites/30/2022/11/Festive-dessert-board-d90b153.jpg?quality=90&webp=true&resize=750,681",
        "filters": ["vegetarian"],
        "nutrition": {
          "kcal": 439,
          "fat": 49,
          "saturates": 28,
          "carbohydrates": 108,
          "sugars": 58,
          "fibre": 5,
          "protein": 12,
          "salt": 1.3
        },
        "price": 400
      },
      {
        "name": "Chocolate & banana cake",
        "description": "This decadent chocolate and banana loaf cake is gorgeously moist from the fruit, whilst chocolate adds richness. Top with ganache and banana chips.",
        "img": "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-1195519_11-c0e1fed.jpg?quality=90&webp=true&resize=440,400",
        "filters": [],
        "nutrition": {
          "kcal": 502,
          "fat": 27,
          "saturates": 9,
          "carbohydrates": 68,
          "sugars": 58,
          "fibre": 2,
          "protein": 7,
          "salt": 0.51
        },
        "price": 300
      },
      {
        "name": "White chocolate berry cheesecake",
        "description": "A stunning no-cook pudding bursting with summer flavours - great for relaxed entertaining.",
        "img": "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-45905_12-243db72.jpg?quality=90&webp=true&resize=440,400",
        "filters": [],
        "nutrition": {
          "kcal": 667,
          "fat": 50,
          "saturates": 29,
          "carbohydrates": 48,
          "sugars": 48,
          "fibre": 2,
          "protein": 9,
          "salt": 1.01
        },
        "price": 300
      },
      {
        "name": "Little lemon meringue pies",
        "description": "These weekend puds are light and fluffy with a tangy filling.",
        "img": "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-49476_11-67f8495.jpg?quality=90&webp=true&resize=440,400",
        "filters": ["vegetarian"],
        "nutrition": {
          "kcal": 500,
          "fat": 21,
          "saturates": 7,
          "carbohydrates": 71,
          "sugars": 48,
          "fibre": 2,
          "protein": 11,
          "salt": 0.53
        },
        "price": 250
      },
      {
        "name": "Honey & vanilla madeleines",
        "description": "Serve alongside an overflowing bowl of summer berries and you'll have the perfect summer pud.",
        "img": "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-659575_11-3b6e64a.jpg?quality=90&webp=true&resize=440,400",
        "filters": [],
        "nutrition": {
          "kcal": 138,
          "fat": 8,
          "saturates": 5,
          "carbohydrates": 17,
          "sugars": 10,
          "fibre": 0,
          "protein": 2,
          "salt": 0.14
        },
        "price": 300
      },
      {
        "name": "Black Forest sundaes with brownies",
        "description": "Based on the seventies cake classic that is Black Forest gâteau – this cherry, ice cream and brownie desert is heavenly.",
        "img": "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-9207_12-be86f30.jpg?quality=90&webp=true&resize=440,400",
        "filters": [],
        "nutrition": {
          "kcal": 899,
          "fat": 63,
          "saturates": 35,
          "carbohydrates": 74.4,
          "sugars": 71,
          "fibre": 1,
          "protein": 11,
          "salt": 0.21
        },
        "price": 300
      }
    ],
    "Drinks": [
      {
        "name": "Halloween treats & drinks",
        "description": "These spooky treats are perfect for adding a touch of fun to a Halloween party.",
        "img": "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-59458_12-977c8a9.jpg?quality=90&webp=true&resize=440,400",
        "filters": [],
        "nutrition": {
          "kcal": 108,
          "fat": 8,
          "saturates": 5,
          "carbohydrates": 31,
          "sugars": 18,
          "fibre": 0,
          "protein": 0,
          "salt": 0.14
        },
        "price": 250
      },
      {
        "name": "Elderflower champagne",
        "description": "This delicate, floral, alcoholic drink is perfect for sipping on summer nights.",
        "img": "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/elderflower-champagne-4db9fe3.jpg?quality=90&webp=true&resize=440,400",
        "filters": ["egg-free", "dairy-free", "gluten-free", "vegan"],
        "nutrition": {
          "kcal": 76,
          "fat": 0,
          "saturates": 0,
          "carbohydrates": 19,
          "sugars": 19,
          "fibre": 0,
          "protein": 0,
          "salt": 0.14
        },
        "price": 400
      },
      {
        "name": "Elderflower wine",
        "description": "This delectable alcoholic drink is perfect for using our favourite seasonal ingredient.",
        "img": "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/elderflower-wine-cce9ae0.jpg?quality=90&webp=true&resize=440,400",
        "filters": ["egg-free", "dairy-free", "gluten-free", "vegan"],
        "nutrition": {
          "kcal": 92,
          "fat": 0,
          "saturates": 0,
          "carbohydrates": 23,
          "sugars": 23,
          "fibre": 0,
          "protein": 0,
          "salt": 0.14
        },
        "price": 400
      },
      {
        "name": "Bicerin - coffee & chocolate drink",
        "description": "This is a luxurious coffee-and-chocolate drink topped with cream that originates from a cafe in Turin where it is a closely guarded secret.",
        "img": "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-1296_11-78475de.jpg?quality=90&webp=true&resize=440,400",
        "filters": ["egg-free", "dairy-free", "gluten-free", "vegan"],
        "nutrition": {
          "kcal": 52,
          "fat": 0,
          "saturates": 0,
          "carbohydrates": 27,
          "sugars": 23,
          "fibre": 0,
          "protein": 0,
          "salt": 0
        },
        "price": 300
      },
      {
        "name": "Ginger shots",
        "description": "Start the day with punchy, refreshing ginger juice with fresh ginger, apple and lemon.",
        "img": "https://images.immediate.co.uk/production/volatile/sites/30/2023/03/Ginger-shots-6837ad2.jpg?quality=90&webp=true&resize=750,681",
        "filters": ["vegetarian", "gluten-free", "vegan"],
        "nutrition": {
          "kcal": 30,
          "fat": 0.1,
          "saturates": 0,
          "carbohydrates": 7,
          "sugars": 6,
          "fibre": 0.2,
          "protein": 0.3,
          "salt": 0.01
        },
        "price": 200
      },
      {
        "name": "Dalgona coffee (whipped coffee)",
        "description": "Our easy whipped coffee is simple, frothy drink, known as dalgona coffee, might just be your new favourite caffeine kick.",
        "img": "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dalgona-coffee-ddfc357.jpg?quality=90&webp=true&resize=440,400",
        "filters": ["vegetarian", "gluten-free", "nut-free"],
        "nutrition": {
          "kcal": 211,
          "fat": 7,
          "saturates": 5,
          "carbohydrates": 27,
          "sugars": 16,
          "fibre": 0,
          "protein": 6,
          "salt": 0.6
        },
        "price": 200
      },
      {
        "name": "Peanut butter smoothie",
        "description": "Whizz up a quick and filling peanut butter smoothie, with rolled oats and banana.",
        "img": "https://images.immediate.co.uk/production/volatile/sites/30/2021/05/Peanut-Butter-Smoothie-3430e32.jpg?quality=90&webp=true&resize=750,681",
        "filters": ["vegetarian", "dairy-free", "egg-free", "vegan"],
        "nutrition": {
          "kcal": 193,
          "fat": 7,
          "saturates": 2,
          "carbohydrates": 27,
          "sugars": 16,
          "fibre": 3,
          "protein": 4,
          "salt": 0.18
        },
        "price": 300
      }
    ]
  }

let staging_menu = menu;
let filters = [];

window.addEventListener('load', _ => {
    showMenuItems();
    showFoodContent(menu, true);

    // // Add event listeners for sort button for each section (price low to high)
    // document.querySelectorAll('.sort-button-low-high').forEach(element => {
    //     element.addEventListener('click', _ => {
    //         console.log('Sort Low to High');
    //         sortPriceLowToHigh(element.id.split('_')[2]);
    //     });
    // });

    // // Add event listeners for sort button for each section (price low to high)
    // document.querySelectorAll('.sort-button-high-low').forEach(element => {
    //     element.addEventListener('click', _ => {
    //         console.log('Sort High to Low');
    //         sortPriceHighToLow(element.id.split('_')[2]);
    //     });
    // });
    FOOD_SECTIONS.forEach(section => {
        document.querySelector(`#sort_ascending_${section}`)?.addEventListener('click', _ => {
            sortPriceLowToHigh(section);
        });
        document.querySelector(`#sort_descending_${section}`)?.addEventListener('click', _ => {
            sortPriceHighToLow(section);
        });
    })

    // document.querySelector('#sort_ascending_Starters').addEventListener('click', event => {
    //     console.log(event);
    //     sortPriceLowToHigh('Starters');
    // });
    // document.querySelector('#sort_descending_Starters').addEventListener('click', event => {
    //     console.log(event);
    //     sortPriceHighToLow('Starters');
    // });

    // Get the handler to the form for the search and call function with entered string
    const search_form = document.querySelector('#food-search');
    search_form.addEventListener('submit', event => {
        event.preventDefault();
        showSearchedContent(event?.target?.search?.value);
    });

    // Populate the dropdown list for filters
    updateFilterDropdownItems();

    // Setup handler for when the filter form is submitted
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

        filters = selected_filters;
        updateSelectedFiltersChips(selected_filters);
        showFilteredContent(selected_filters);
    });
})

// Shows the menu contents
function showMenuItems() {
    const menu_items_container = document.querySelector('#menu-items');
    menu_items_container.innerHTML = `
    ${FOOD_SECTIONS.map(section => {
        return `
        <div class="mb-4">
            <a href="#${section}" class="menu-course-name">${section.replace('-', ' ')}</a>
            <p class="fraunces-p menu-desc">${FOOD_SECTION_DESC[section]}</p>
        </div>
        `
    }).join('\n')}
    `;
}

// Display the food sections one after another
function showFoodContent(food_menu, render_section_headers, render_section = null) {
    const showSectionHeaders = section => {
        return `
        <div class="section-header mb-3 d-flex justify-content-between">
            <div class="section-header-text">
                <h2 class="section-header" id="${section}">
                    ${section.replace('-', ' ')}
                </h2>
                <h2 class="section-header">
                    <img src="assets/img/${section}.png" alt="${section} image" class="food-course-img">
                </h2>
            </div>
            <div class="dropdown mb-4 align-self-end" id="sort-dropdown-${section}">
                <button class="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown">
                    <img src="assets/svg/sort-by.svg" alt="Sort Button" class="sort-icon">
                </button>
                <ul class="dropdown-menu">
                    <li><button class="dropdown-item sort-button-low-high" type="button" id="sort_ascending_${section}">By Price: Low to High</button></li>
                    <li><button class="dropdown-item sort-button-high-low" type="button" id="sort_descending_${section}">By Price: High to Low</button></li>
                </ul>
            </div>
        </div>
        `;
    };

    const showSectionData = section => {
        return `
        <div class="row gx-10 gy-4">
            ${food_menu[section].map(food_item => {
                return `
                <div class="col-xs col-sm-6 col-lg-4">
                    ${FoodCard(food_item.name, food_item.description, food_item.img, food_item.filters, food_item.price)}
                </div>
                `;
            }).join('\n')}
        </div>
        `;
    }

    if(render_section_headers === true) {
        const food_sections_holder = document.querySelector('#food-courses');
        food_sections_holder.innerHTML = FOOD_SECTIONS.map(section => {
            return `
            ${food_menu[section].length !== 0 ?
                `<div class="food-course mb-5 more-padding">
                    ${showSectionHeaders(section)}
                    <div id="food-section-${section}">
                        ${showSectionData(section)}
                    </div>
                </div>`
            : ''
            }`
        }).join('\n');
    }
    else {
        const sort_dropdown = document.querySelector(`#sort-dropdown-${render_section}`);
        if(food_menu[render_section].length !== 0) {
            sort_dropdown.classList.remove('no-show');
            sort_dropdown.classList.add('show');
        }
        else {
            sort_dropdown.classList.remove('show');
            sort_dropdown.classList.add('no-show');
        }
        const food_section_holder = document.querySelector(`#food-section-${render_section}`);
        food_section_holder.innerHTML = `
        ${food_menu[render_section].length !== 0 ?
            showSectionData(render_section)
        : '<p class="fraunces-p">No Items</p>'
        }
        `;

    }
}

// Function filters food items from menu based on tags provided as a list
function showFilteredContent(filtered_list) {
    if(filtered_list.length === 0) {
        // While clearing out filter, if search box has some text, clear it out. After clearing
        // a filter, we will display all items present in the menu.
        document.querySelector('#food-search input').value = '';

        staging_menu = menu;
        FOOD_SECTIONS.forEach(section => {
            showFoodContent(menu, false, section);
        })
    }
    else {
        let filter_menu = {};
        FOOD_SECTIONS.forEach(section => {
            filter_menu[section] = menu[section].filter(menu_item => {
                return filtered_list.some(chosen => {
                    return menu_item.filters.includes(chosen);
                })
            });
        });
    
        staging_menu = filter_menu;
        FOOD_SECTIONS.forEach(section => {
            showFoodContent(staging_menu, false, section);
        })
    }
}

function showSearchedContent(search_string) {
    if(search_string === '') {
        showFilteredContent(filters);
    }
    else {
        let search_menu = {};
        FOOD_SECTIONS.forEach(section => {
            search_menu[section] = staging_menu[section].filter(menu_item => {
                return menu_item.name.toLowerCase().includes(search_string.toLowerCase());
            });
        });

        staging_menu = search_menu;
        FOOD_SECTIONS.forEach(section => {
            showFoodContent(staging_menu, false, section);
        })
    }
}

// Setup the items which are shown in the dropdown for filter
function updateFilterDropdownItems() {
    const filter_dropdown_menu = document.querySelector('#filter-dropdown-menu');
    let unique_filters = new Set();
    FOOD_SECTIONS.forEach(food_section => {
        menu[food_section].forEach(menu_item => {
            menu_item.filters.forEach(filter_item => unique_filters.add(filter_item));
        });
    })
    
    let list_unique_filters = Array.from(unique_filters);

    filter_dropdown_menu.innerHTML = `
        <h6 class="dropdown-header">Choose food categories</h6>
        ${list_unique_filters.map(filter => {
            return `
            <div class="form-check dropdown-item">
                <input class="form-check-input" type="checkbox" value="${filter}" id="filter-item-${filter}" name="${filter}">
                <label class="form-check-label" for="filter-item-${filter}">${filter}</label>
            </div>
            `
        }).join('\n')}
    `
}

function updateSelectedFiltersChips(selected_filters) {
    const filters_container = document.querySelector('#selected-filters');
    filters_container.innerHTML = `
    ${selected_filters.map(filter_tag => {
        return `<span class="badge rounded-pill text-bg-dark">${filter_tag}</span>`
    }).join('\n')}
    `;
}

// Function sorts food items from price low to high
function sortPriceLowToHigh(section) {
    staging_menu[section] = staging_menu[section].toSorted((element1, element2) => element1.price - element2.price)
    showFoodContent(staging_menu, false, section);
}

// Function sorts food items from price high to low
function sortPriceHighToLow(section) {
    staging_menu[section] = staging_menu[section].toSorted((element1, element2) => element2.price - element1.price)
    showFoodContent(staging_menu, false, section);
}
