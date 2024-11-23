// Dark Mode Toggle
const darkModeSwitch = document.getElementById('darkModeSwitch');
darkModeSwitch.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode');
});

// GSAP Animations
gsap.from(".hero h1", { duration: 1, opacity: 0, y: -50 });
gsap.from(".hero p", { duration: 1, opacity: 0, y: 50, delay: 0.5 });
gsap.from(".project-card", { duration: 1, scale: 0.8, opacity: 0, stagger: 0.2 });


function showModal() {
  const modal = document.getElementById("project-modal");
  modal.style.display = "flex";
}

function hideModal() {
  const modal = document.getElementById("project-modal");
  modal.style.display = "none";
}

gsap.from(".hero-content h1", { duration: 1.5, y: -50, opacity: 0 });
gsap.from(".hero-content p", { duration: 1.5, y: 50, opacity: 0, delay: 0.5 });



