
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});


const revealElements = document.querySelectorAll(
  ".project-card, .skills-card, .edu-card, .hero-text, .image-box"
);

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;

  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add("show");
    }
  });
};

// Run on scroll and on page load
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", e => {
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
    contactForm.reset();
  });
}


document.querySelectorAll(".btn").forEach(button => {
  button.addEventListener("click", e => {
    const ripple = document.createElement("span");
    ripple.classList.add("ripple");

    const rect = button.getBoundingClientRect();
    ripple.style.left = `${e.clientX - rect.left}px`;
    ripple.style.top = `${e.clientY - rect.top}px`;

    button.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600);
  });
});


window.addEventListener("load", () => {
  const heroText = document.querySelector(".hero-text");
  const heroImage = document.querySelector(".image-box");

  if (heroText) heroText.classList.add("show");
  if (heroImage) heroImage.classList.add("show");
});
