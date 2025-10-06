document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".about-section, .why-section");

    const revealOnScroll = () => {
        sections.forEach(section => {
            const sectionPos = section.getBoundingClientRect().top;
            const screenPos = window.innerHeight / 1.2;
            if (sectionPos < screenPos) {
                section.classList.add("visible");
            }
        });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // trigger on load
});

// Counter animation
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
    counter.innerText = "0";

    const updateCounter = () => {
        const target = +counter.getAttribute("data-target");
        const current = +counter.innerText;
        const increment = target / 200; // Adjust speed here (higher divisor = slower)

        if (current < target) {
            counter.innerText = `${Math.ceil(current + increment)}`;
            setTimeout(updateCounter, 50); // Slower speed
        } else {
            counter.innerText = target;
        }
    };

    const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
            updateCounter();
            observer.disconnect();
        }
    }, { threshold: 0.5 });

    observer.observe(counter);
});

// Example: Fade-in animation on scroll
document.addEventListener("DOMContentLoaded", () => {
  const steps = document.querySelectorAll(".process-step");
  const revealOnScroll = () => {
    steps.forEach(step => {
      const rect = step.getBoundingClientRect();
      if (rect.top < window.innerHeight - 50) {
        step.classList.add("visible");
      }
    });
  };
  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();
});
