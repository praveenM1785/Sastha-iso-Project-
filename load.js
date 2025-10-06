// js/load.js

// Load navbar.html into the placeholder div
fetch("navbar.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("navbar-placeholder").innerHTML = data;

    // Once navbar is loaded, attach the hamburger toggle
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    if (menuToggle && navLinks) {
      menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
      });
    }
  })
  .catch(error => {
    console.error("Error loading navbar:", error);
  });
