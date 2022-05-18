// Define Global Variables
const navbar = document.querySelector("#navbar__list"); // ul element
const sections = document.querySelectorAll('section'); // array of sections

// Helper Functions

// MAIN FUNCTIONS
// BUILD NAV
function buildNav() {
    for (let i = 0; i < sections.length; i++) { // loops over length of array of sections
        let navElement = document.createElement("li"); // creates a list element for each section itterated over
        navElement.classList.add("menu__link"); // adds a class to each list element
        navbar.appendChild(navElement); // adds list elements to the nav

        let navSection = sections[i]; // selects a section out of the sections array
        let navSelection = navSection.dataset.nav; // identifies each data-nav attribute in each section with dataset.nav
        console.log("navSelection " + navSelection); // prints sections in console to test if things are working
        navElement.textContent = navSelection; // adds data-nav attribute to the nav
        
        // navElement.dataset["section_id"] = sections[i].id;
        navElement.addEventListener("click", scrollToAnchor);
    }
}

// Add class 'active' to section when near top of viewport
function onScrollListener() {
    let maxHeight = 0;
    let activeSection = sections[0];
    sections.forEach((section) => {
        section.classList.remove("your-active-class");
        let rect = section.getBoundingClientRect();
        let inside = Math.max(Math.min(rect.bottom,window.innerHeight) - Math.max(rect.top, 0), 0);
        if (inside > maxHeight) {
            maxHeight = inside;
            activeSection = section;
        }
    })
    activeSection.classList.add("your-active-class");
}

document.addEventListener("scroll", onScrollListener);

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
navbar.addEventListener("click", scrollToAnchor);

// Build Menu
buildNav(); // Calls function

// Scroll to section on link click

// Set sections as active