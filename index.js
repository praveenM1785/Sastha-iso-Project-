// navbar.js
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });
});

// Hero
function exploreCertifications() {
  alert("You clicked Explore Certifications!");
}



// welcome
AOS.init({
  duration: 1200,
  once: true,
});


// what we do
// Reveal animation on scroll
window.addEventListener("scroll", () => {
  document.querySelectorAll(".timeline-item").forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
});

// Achivement
  const counters = document.querySelectorAll('.counter');
  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
      const increment = Math.ceil(target / 100);

      if (count < target) {
        counter.innerText = count + increment;
        setTimeout(updateCount, 30);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });



// 

const statCounters = document.querySelectorAll('.count');

statCounters.forEach(counter => {
  counter.innerText = '0';

  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const current = +counter.innerText;
    const increment = target / 100;

    if (current < target) {
      counter.innerText = `${Math.ceil(current + increment)}`;
      setTimeout(updateCount, 25);
    } else {
      counter.innerText = target.toLocaleString();
    }
  };

  updateCount();
});


