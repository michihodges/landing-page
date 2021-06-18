console.log("js working");
/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

const navbar = document.querySelector("#navbar__list"); // ul
const sections = document.querySelectorAll('section'); // array of sections

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function buildNav() {
    for (let i = 0; i < sections.length; i++) {
        let navElement = document.createElement("li");
        navElement.classList.add("menu__link");
        // navElement.addEventListener("click", onNavElementCLick);
        navbar.appendChild(navElement);
        let navSection = sections[i]; // Selects a section out of the sections array
        let navSelection = navSection.dataset.nav; // Identifies each data-nav attribute in each section with dataset.nav
        console.log(navSelection);

        navElement.textContent = navSelection; // Adds data-nav attribute to the nav
        navElement.addEventListener("click", () => {
            // navSection.scrollIntoView();
            window.scrollTo(0, 100);
            console.log("Listening");
        })

        //// how to use the function not inline and outside of scope?
    }
}

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event
// function onNavElementCLick(mouseEvent) {
//     console.log(this);
//     window.scrollTo(0, 100);
// }
// function scrollToClick() {
//     navbar.addEventListener('click', function (event) {
//         const clicked = document.querySelector('#' + event.target.dataset.nav)
//         clicked.scrollIntoView();
//     });
// };

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu
buildNav(); // Calls function

// Scroll to section on link click
// scrollToClick();

// Set sections as active