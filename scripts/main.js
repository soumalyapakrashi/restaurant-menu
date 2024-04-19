import { FoodCard } from "./FoodCard.js";
import { menu } from "./RestaurantMenu.js";

// Define the sections of food items supported.
const FOOD_SECTIONS = [ 'Drinks', 'Starters', 'Main-Course', 'Desserts' ];

// Define the descriptions for each of the above sections.
const FOOD_SECTION_DESC = {
    'Starters': 'Kickstart your culinary adventure with our enticing selection of Starters. Designed to awaken your palate and whet your appetite, our Starters offer a tantalizing array of flavors and textures to delight your senses.',
    'Main-Course': 'Dive into a world of culinary excellence with our Main Course selection. Crafted with passion and precision, our Main Course offerings showcase a symphony of flavors and textures that promise to satisfy even the most discerning palate.',
    'Desserts': 'Satisfy your sweet tooth and indulge in a decadent treat from our Desserts section. Discover a delightful selection of desserts meticulously crafted to captivate your senses and provide the perfect finale to your dining experience.',
    'Drinks': 'Quench your thirst with our refreshing selection of beverages. From classic cocktails to artisanal mocktails, our Drinks section offers a delightful array of options to complement your dining experience.'
}

/*
    Staging Menu is a variable which holds the current menu items to display after applying
    modifiers like filter, search, and sort.
*/
let staging_menu = menu;

// Filters contains the tags with which menu items need to be filtered. Empty if no filter is chosen.
let filters = [];

/*
    Search string contains the string which needs to be searched among the names of food items.
    Blank string if no input is provided.
*/
let search_string = '';

/*
    This sort_order variable contains data about whether the particular food section needs to be
    sorted by food price. This variable is updated when user chooses the sort by option in the UI.
    Each section is denoted by a key in the object. Accepted values per each section are:
    1. none = No sort order is selected and food items are displayed in any order.
    2. ascending = Sort from Low to High is selected and food items are sorted in order of low to high price.
    3. descending = Sort from High to Low is selected and food items are sorted by high to low price.
*/
let sort_order = {
    'Drinks': 'none',
    'Starters': 'none',
    'Main-Course': 'none',
    'Desserts': 'none'
};

// Display UI and attach event handlers on window load.
window.addEventListener('load', _ => {
    // Show the menu items.
    showMenuItems();
    // Show the food items section. Render the entire section including headers as this is the 1st render.
    showFoodContent(menu, true);

    /*
        Each section header has a dropdown for sorting the food items in that respective section
        by Price. Sorting is available in increasing and decreasing order of price. Each of the options
        is a Button element, clicking which, the sort happens. In this section, we attach the event
        handlers to those buttons in each of the food sections. For the buttons performing sort in
        increasing order of price, we call the sortPriceLowToHigh function, and for the one performing
        sort in decreasing order of price, we call the sortPriceHighToLow function.
    */
    FOOD_SECTIONS.forEach(section => {
        document.querySelector(`#sort_ascending_${section}`)?.addEventListener('click', _ => {
            sortPriceLowToHigh(section);
        });
        document.querySelector(`#sort_descending_${section}`)?.addEventListener('click', _ => {
            sortPriceHighToLow(section);
        });
    })

    // Get the handler to the form for the search and call function with entered string.
    const search_form = document.querySelector('#food-search');
    search_form.addEventListener('submit', event => {
        // Prevent the form from submitting and reloading the page.
        event.preventDefault();

        // Set the global search string value to the input provided by user.
        search_string = event?.target?.search?.value;

        // Call function to update the UI for food items section.
        updateFoodCourses();
    });

    // Populate the dropdown list for filters.
    updateFilterDropdownItems();

    // Setup handler for when the filter form is submitted.
    const filter_form = document.querySelector('#food-filter');
    filter_form.addEventListener('submit', event => {
        // Prevent the form from submitting and reloading the page.
        event.preventDefault();

        /*
            Extract the filters entered by user. Iterate over all the checkboxes in the dropdown
            and add those which are checked to the filters list.
        */
        let selected_filters = [];
        Object.keys(event.target).forEach(key => {
            if(event.target[key].checked === true) {
                selected_filters.push(event.target[key].name);
            }
        });

        // Close the filters dropdown after form has been submitted.
        const filter_dropdown = document.querySelector('#filter-dropdown')
        let bootstrap_dropdown = new bootstrap.Dropdown(filter_dropdown);
        bootstrap_dropdown.hide();

        // Update the global filters variable with the ones which are selected by user.
        filters = selected_filters;

        // The selected filters are also displayed as Badges. Update that section.
        updateSelectedFiltersChips(selected_filters);

        // Call function to update the UI for food items section.
        updateFoodCourses();
    });

    /*
        The anchor tags by default, provide a smooth scroll to the different sections of food
        in the webpage. The scrolled section is positioned from the top of the screen. But as we
        have a fixed top bar showing the filters and search, the heading of each section is getting
        blocked after the scroll is taking effect. So we need to offset the position of the
        new section after it has been scrolled to by the default value + some delta so that the
        heading is visible.
    */
    document.querySelectorAll('.menu-course-name').forEach(link => {
        // When links in the menu section is clicked, perform a custom function.
        link.addEventListener('click', event => {
            // Prevent the default scroll behavior.
            event.preventDefault();

            // Get the target scroll section.
            const target_section = document.querySelector(`${event?.target?.hash}`);
            /*
                The controls section contains filters and search. This section occupies a certain
                amount of space on the screen. We need to consider this section when scrolling so
                that the scroll amount is adjusted accordingly. Hence, we get the height of this
                section and add that to the offset amount so that the headers of each section does
                not get hidden.
            */
            const controls_section = document.querySelector('#controls');
            const height_of_controls = controls_section.getBoundingClientRect().height;
            const offset = height_of_controls + 10;

            // Perform a smooth scroll to the desired section.
            window.scrollTo({
                top: target_section.offsetTop - offset,
                behavior: 'smooth'
            });
        });
    });
})

/*
    This function is called whenever a filter is changed, or a search string value is changed.
    It resets the staging_menu variable so that it contains the entire menu. Then it applies
    whatever filter and search values are selected at the time when this function is called.
    Finally when the menu items for display are modified according to need, it checks for each section
    if sort is selected for that section. If no sort is selected, it calls the 'showFoodContent'
    function for rendering the UI. If sort is selected, then based on the type of sort of selected,
    it calls the respective sort functions defined later in this file.

    Function Inputs: None
    Function Returns: None
*/
function updateFoodCourses() {
    // Initialize the staging_menu with the original unfiltered data.
    staging_menu = menu;

    // Apply filters on the data.
    showFilteredContent(filters);
    // Apply search on the data.
    showSearchedContent(search_string);

    // Either display data if no sort is chosen, or call appropriate sort functions.
    FOOD_SECTIONS.forEach(section => {
        if(sort_order[section] === 'none') {
            showFoodContent(staging_menu, false, section);
        }
        else if(sort_order[section] === 'ascending') {
            sortPriceLowToHigh(section);
        }
        else if(sort_order[section] === 'descending') {
            sortPriceHighToLow(section);
        }
    })
}

/*
    This function renders the UI for menu section.

    Function Inputs: None
    Function Returns: None
*/
function showMenuItems() {
    // Get the section where the menu items need to be rendered.
    const menu_items_container = document.querySelector('#menu-items');

    // Map over each section and render the name and description of the sections.
    menu_items_container.innerHTML = `
    ${FOOD_SECTIONS.map(section => {
        return `
        <div class="mb-4 row">
            <div class="col-xs col-sm-2 col-md-2 col-lg-1">
                <img src="assets/img/${section}.png" alt="${section}" class="menu-item-img">
            </div>
            <div class="col">
                <a href="#${section}" class="menu-course-name card-title">${section.replace('-', ' ')}</a>
                <p class="fraunces-p menu-desc">${FOOD_SECTION_DESC[section]}</p>
            </div>
        </div>
        `
    }).join('\n')}
    `;
}

/*
    This function renders the UI for the food sections. It renders the headers, the dropdown
    for sorting each section, and the food items.

    Function Inputs:
    1. food_menu: The food menu to display in the UI. The structure of this object is the same as
            the one defined in RestaurantMenu.js file. But this data contains all the filters
            applied to it as it is the final menu to be displayed.
    2. render_section_headers: This is a flag variable which specifies whether the headers of
            each section (including the sort dropdown) will be rendered or not. Accepted values
            are true and false. If this is true, then all the sections are rendered. If this is false,
            then only the food items in the section passed in 'render_section' is rendered.
    3. render_section: If 'render_section_headers' is set to true, then only the food items in the
            section name passed in this parameter will be rendered. No change is made to other sections
            or even the header of this section. If 'render_section_headers' is false, then this
            parameter is ignored.
    
    Function Returns: None
*/
function showFoodContent(food_menu, render_section_headers, render_section = null) {
    /*
        This function renders only the header and sort dropdown of a section.

        Function Inputs:
        1. section: Name of the section to render.

        Function Returns: HTML of the rendered section header.
    */
    const showSectionHeaders = section => {
        return `
        <div class="section-header mb-2 d-flex justify-content-between">
            <h2 class="section-header" id="${section}">
                ${section.replace('-', ' ')}
            </h2>
            <div class="dropdown mb-2 align-self-end" id="sort-dropdown-${section}">
                <button class="btn btn-light btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown">
                    <img src="assets/svg/sort-by.svg" alt="Sort Button" class="sort-icon">
                </button>
                <ul class="dropdown-menu">
                    <li><button class="dropdown-item sort-button-low-high btn btn-sm" type="button" id="sort_ascending_${section}">By Price: Low to High</button></li>
                    <li><button class="dropdown-item sort-button-high-low btn btn-sm" type="button" id="sort_descending_${section}">By Price: High to Low</button></li>
                </ul>
            </div>
        </div>
        `;
    };

    /*
        This function renders only the food items section (excluding the headers section).

        Function Inputs:
        1. section: Name of the section whose food items need to be rendered.

        Function Returns: HTML of the rendered food items section.
    */
    const showSectionData = section => {
        return `
        <div class="row gx-2 gy-3">
            ${food_menu[section].map(food_item => {
                return `
                <div class="col-xs col-sm-6 col-lg-3">
                    ${FoodCard(food_item.name, food_item.description, food_item.img, food_item.filters, food_item.price)}
                </div>
                `;
            }).join('\n')}
        </div>
        `;
    }

    /*
        If render_section_headers flag is true, then iterate over all sections and render both the
        header and food items sections.
    */
    if(render_section_headers === true) {
        const food_sections_holder = document.querySelector('#food-courses');
        food_sections_holder.innerHTML = FOOD_SECTIONS.map(section => {
            return `
            ${food_menu[section].length !== 0 ?
                `<div class="food-course mb-4 more-padding">
                    ${showSectionHeaders(section)}
                    <div id="food-section-${section}">
                        ${showSectionData(section)}
                    </div>
                </div>`
            : ''
            }`
        }).join('\n');
    }

    // If flag is set to false, then render only the section provided in the input parameter.
    else {
        // If no food items are available to display in the section, then hide the sort dropdown.
        const sort_dropdown = document.querySelector(`#sort-dropdown-${render_section}`);
        if(food_menu[render_section].length !== 0) {
            sort_dropdown.classList.remove('no-show');
            sort_dropdown.classList.add('show');
        }
        else {
            sort_dropdown.classList.remove('show');
            sort_dropdown.classList.add('no-show');
        }

        /*
            In the food items section, display the food items by selecting from the menu items
            provided in params. If food items are present, then display them. If no food items
            are present, then display an appropriate message.
        */
        const food_section_holder = document.querySelector(`#food-section-${render_section}`);
        food_section_holder.innerHTML = `
        ${food_menu[render_section].length !== 0 ?
            showSectionData(render_section)
        : `
        <div class="d-flex align-items-center">
            <p class="fraunces-p no-items-text">No Items</p>
            <img src="assets/svg/sad.svg" alt="no-items-found" class="no-items-svg">
        </div>
        `
        }
        `;
    }
}

/*
    This function filters the menu based on the filter values selected by user. For each food item,
    if the filters list contains any of the filters entered by user, then that card is chosed.

    Function Inputs:
    1. filtered_list: List containing the filters selected by user.

    Function Returns: None
*/
function showFilteredContent(filtered_list) {
    if(filtered_list.length !== 0) {
        let filter_menu = {};
        FOOD_SECTIONS.forEach(section => {
            filter_menu[section] = staging_menu[section].filter(menu_item => {
                return filtered_list.some(chosen => {
                    return menu_item.filters.includes(chosen);
                })
            });
        });
    
        staging_menu = filter_menu;
    }
}

/*
    This function applies the search string entered by user. For each food item, if the name of
    the item contains the search word, then that item is selected and displayed.

    Function Inputs:
    1. search_string: Search string entered by user.

    Function Returns: None
*/
function showSearchedContent(search_string) {
    if(search_string !== '') {
        let search_menu = {};
        FOOD_SECTIONS.forEach(section => {
            search_menu[section] = staging_menu[section].filter(menu_item => {
                return menu_item.name.toLowerCase().includes(search_string.toLowerCase());
            });
        });

        staging_menu = search_menu;
    }
}

/*
    This function renders the items which are shown in the dropdown for filter.

    Function Inputs: None
    Function Returns: None
*/
function updateFilterDropdownItems() {
    // Get the section where the dropdown menu items need to be rendered.
    const filter_dropdown_menu = document.querySelector('#filter-dropdown-menu');

    /*
        Get all the filter values from each of the food items and add them to a Set collection.
        Multiple food items can have the same filter value. Adding all the values to a set
        ensures that only one instance of a particular filter value is maintained and duplicates
        are automatically removed.
    */
    let unique_filters = new Set();
    FOOD_SECTIONS.forEach(food_section => {
        menu[food_section].forEach(menu_item => {
            menu_item.filters.forEach(filter_item => unique_filters.add(filter_item));
        });
    })
    
    // Convert the Set collection to a list (or array) so that it can e iterated and rendered.
    let list_unique_filters = Array.from(unique_filters);

    // Render the filter elements in the dropdown menu.
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

/*
    This function renders the filters selected as Badges.

    Function Inputs:
    1. selected_filters: Filters which are selected by user as a list.

    Function Returns: None
*/
function updateSelectedFiltersChips(selected_filters) {
    const filters_container = document.querySelector('#selected-filters');
    filters_container.innerHTML = `
    ${selected_filters.map(filter_tag => {
        return `<span class="badge rounded-pill text-bg-dark fraunces-p">${filter_tag}</span>`
    }).join('\n')}
    `;
}

/*
    Function sorts food items from price low to high for a particular section.

    Function Inputs:
    1. section: Name of the section for which sort needs to be performed.

    Function Returns: None
*/
function sortPriceLowToHigh(section) {
    // Set the sort order for the respective section in the global variable.
    sort_order[section] = 'ascending';

    /*
        Highlight sort button in the dropdown. This is to indicate user whether sort is enabled
        and if so, in what in what order sorting is enabled.
    */
    document.querySelector(`#sort_ascending_${section}`).classList.add('sort-selected');
    document.querySelector(`#sort_descending_${section}`).classList.remove('sort-selected');

    // Sort the food items according to price for the provided section.
    staging_menu[section] = staging_menu[section].toSorted((element1, element2) => element1.price - element2.price)

    // Update the UI.
    showFoodContent(staging_menu, false, section);
}

/*
    Function sorts food items from price high to low for a particular section.

    Function Inputs:
    1. section: Name of the section for which sort needs to be performed.

    Function Returns: None
*/
function sortPriceHighToLow(section) {
    // Set the sort order for the respective section in the global variable.
    sort_order[section] = 'descending';

    /*
        Highlight sort button in the dropdown. This is to indicate user whether sort is enabled
        and if so, in what in what order sorting is enabled.
    */
    document.querySelector(`#sort_descending_${section}`).classList.add('sort-selected');
    document.querySelector(`#sort_ascending_${section}`).classList.remove('sort-selected');

    // Sort the food items according to price for the provided section.
    staging_menu[section] = staging_menu[section].toSorted((element1, element2) => element2.price - element1.price)

    // Update the UI.
    showFoodContent(staging_menu, false, section);
}
