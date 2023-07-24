import nav from "./Navbar.js";
import footer from "./footer.js";
let navdiv=document.querySelector('nav')
navdiv.innerHTML=nav
let footdiv=document.querySelector('footer')
footdiv.innerHTML=footer
document.addEventListener("DOMContentLoaded", function () {
    // Get all buttons with data-filter attribute
    const filterButtons = document.querySelectorAll(".event-menu button");

    // Get all event cards
    const eventCards = document.querySelectorAll(".single-event");

    // Add a click event listener to each button
    filterButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        // Remove the 'active' class from all buttons
        filterButtons.forEach(function (btn) {
          btn.classList.remove("active");
        });

        // Add the 'active' class to the clicked button
        button.classList.add("active");

        // Get the data-filter value of the clicked button
        const filterValue = button.getAttribute("data-filter");

        // Show or hide event cards based on the data-filter value
        if (filterValue === "*") {
          eventCards.forEach(function (card) {
            card.style.display = "block"; // Show all event cards
          });
        } else {
          eventCards.forEach(function (card) {
            card.style.display = "none"; // Hide all event cards
          });

          // Show event cards with the corresponding filter class
          const filteredCards = document.querySelectorAll(filterValue);
          filteredCards.forEach(function (card) {
            card.style.display = "block";
          });
        }
      });
    });
  });