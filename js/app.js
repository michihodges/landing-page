// GLOBAL VARIABLES
const navbar = document.querySelector("#navbar__list"); // ul element
const sections = document.querySelectorAll('section'); // array of sections

// Helper Functions

// MAIN FUNCTIONS
// BUILD NAV
function buildNav() {
    for (let i = 0; i < sections.length; i++) { // loops over length of array of sections
        // FILL NAV WITH LIST ELEMENTS DYNAMICALLY
        let navElement = document.createElement("li"); // creates a list element for each section itterated over
        navElement.classList.add("menu__link"); // adds a class to each list element
        navbar.appendChild(navElement); // adds list elements to the nav

        // ADD SECTION TITLES AS NAV OPTIONS DYNAMICALLY
        let navSection = sections[i]; // selects a section out of the sections array
        let navSelection = navSection.dataset.nav; // identifies each data-nav attribute in each section with dataset.nav
        console.log("navSelection " + navSelection); // prints sections in console to test if things are working
        navElement.textContent = navSelection; // adds data-nav attribute to the nav
        
        // LINK NAV WITH SECTIONS
        navElement.dataset["section_id"] = navSection.id; // li elements linked with section ids
    }
    // EVENT LISTENER
    navbar.addEventListener("click", scrollToAnchor); // 1 event listener for all li elements
}

// Add class 'active' to section when near top of viewport
function makeActive() {
    for (const section of sections) {
        const box = section.getBoundingClientRect();
        if (box.top <= 150 && box.bottom >= 150) {
            section.classList.add("your-active-class");
        } else {
            section.classList.remove("your-active-class")
        }
    }
}

// Scroll to anchor ID using scrollTO event
function scrollToAnchor(event) {
    event.preventDefault();
    let section = document.querySelector(`#${event.target.dataset.section_id}`);
    window.scrollTo({
        top: section.offsetTop,
        left: section.offsetLeft,
        behavior: 'smooth'
    });
}

// EVENTS

// Build Menu
buildNav(); // calls function

// Scroll to section on link click

// Set sections as active
document.addEventListener("scroll", makeActive);