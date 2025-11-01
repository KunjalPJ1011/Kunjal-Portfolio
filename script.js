// =======================
// Scroll to Top Button
// =======================
const topBtn = document.getElementById('topBtn');

window.onscroll = () => {
  if (topBtn) {
    topBtn.style.display = window.scrollY > 200 ? 'block' : 'none';
  }
};

function topFunction() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// =======================
// Scroll to specific section (for homepage button)
// =======================
function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

// =======================
// Modal Functions (Projects Page)
// =======================
function openModal(img) {
  const modal = document.getElementById('imgModal');
  const modalImg = document.getElementById('modalImage');
  if (modal && modalImg) {
    modal.style.display = 'flex';
    modalImg.src = img.src;
  }
}

function closeModal() {
  const modal = document.getElementById('imgModal');
  if (modal) {
    modal.style.display = 'none';
  }
}

// Close modal on Escape key
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
  }
});

// =======================
// Highlight Active Nav Link on Scroll
// =======================

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("nav ul li a");

  // Function to highlight the active section link
  function setActiveLink() {
    let scrollPos = window.scrollY + 100; // Offset for sticky navbar

    navLinks.forEach(link => {
      const section = document.querySelector(link.getAttribute("href"));
      if (section && section.offsetTop <= scrollPos && section.offsetTop + section.offsetHeight > scrollPos) {
        navLinks.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", setActiveLink);
  setActiveLink(); // Run on load
});

// Skills 
const skillCards = document.querySelectorAll('.skill-card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

skillCards.forEach(card => observer.observe(card));

