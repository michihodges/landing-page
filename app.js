
// Define Global Variables

const navbar = document.querySelector("#navbar__list"); // ul
const sections = document.querySelectorAll('section'); // array of sections

// Helper Functions

// Main Functions

// Build Nav
function buildNav() {
    for (let i = 0; i < sections.length; i++) {
        let navElement = document.createElement("li");
        navElement.classList.add("menu__link");
        navbar.appendChild(navElement);
        let navSection = sections[i]; // Selects a section out of the sections array
        let navSelection = navSection.dataset.nav; // Identifies each data-nav attribute in each section with dataset.nav
        console.log("navSelection " + navSelection);
        navElement.textContent = navSelection; // Adds data-nav attribute to the nav
        
        navElement.dataset["section_id"] = sections[i].id;
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


// Events

// Build Menu
buildNav(); // Calls function

// Scroll to section on link click

// Set sections as active