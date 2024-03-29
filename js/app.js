(() => {
    // Global Variables
    const navbar = document.querySelector("#navbar__list"); // ul element
    const sections = document.querySelectorAll('section'); // array of sections

    // Main Functions
    // Build Nav
    const buildNav = () => {
        for (let i = 0; i < sections.length; i++) { // loops over length of array of sections
            // Fill nav with li elements dynamically
            let navElement = document.createElement("li"); // creates a list element for each section itterated over
            navElement.classList.add("menu__link"); // adds a class to each list element
            navbar.appendChild(navElement); // adds list elements to the nav

            // Add section titles as nav options dynamically
            let navSection = sections[i]; // selects a section out of the sections array
            let navSelection = navSection.dataset.nav; // identifies each data-nav attribute in each section with dataset.nav
            console.log("navSelection " + navSelection); // prints sections in console to test if things are working
            navElement.textContent = navSelection; // adds data-nav attribute to the nav
        
            // Link nav with sections
            navElement.dataset["section_id"] = navSection.id; // li elements linked with section ids
        }
    }

    // Add class 'active' to section when near top of viewport
    const makeActive = () => {
        for (const section of sections) { // a really nice way to loop over things
            const box = section.getBoundingClientRect();
            if (box.top <= 150 && box.bottom >= 150) { // sets when active class is set
                section.classList.add("your-active-class"); // adds active class
            } else {
                section.classList.remove("your-active-class"); // otherwise removes active class
            }
        }
    }

    // Scroll to anchor ID using scrollTO event
    const scrollToAnchor = e => {
        let section = document.querySelector(`#${e.target.dataset.section_id}`); // targets each section id to scroll to
        section.scrollIntoView({behavior: "smooth"}); // method that initiates smooth scrolling
    }

    // Build Menu
    buildNav(); // calls function

    // Scroll to section on link click
    navbar.addEventListener("click", scrollToAnchor); // 1 event listener for all li elements

    // Set sections as active
    document.addEventListener("scroll", makeActive); // listens for when to switch active class
})();
