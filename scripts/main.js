import { FoodCard } from "./FoodCard.js";

const FOOD_SECTIONS = [ 'Starters', 'Lunch' ];

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
    "Lunch": [
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
    "Fish and Seafood": [],
    "Pasta": [],
    "Soups": []
};

// Display the food sections one after another
const food_sections_holder = document.querySelector('#food-courses');
console.log(food_sections_holder)
food_sections_holder.innerHTML = FOOD_SECTIONS.map(section => {
    return `
    <div class="food-course">
        <h2>${section}</h2>
        <div class="row gx-10 gy-4">
            ${MENU[section].map(food_item => {
                return `
                <div class="col-sm-4">
                    ${FoodCard(food_item.name, food_item.description, food_item.img, food_item.filters)}
                </div>
                `;
            }).join('\n')}
        </div>
    </div>
    `;
}).join('\n');
