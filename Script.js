// Initialize Lucide Icons
lucide.createIcons();

// Initialize AOS (Animate on Scroll)
AOS.init({
    duration: 1000,
    once: true,
});

// Typewriter Animation
const roles = ["IT Support Professional", "Web Developer", "DevOps Engineer", "Tech Freelancer"];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typeTarget = document.getElementById("typewriter");

function type() {
    const currentRole = roles[roleIndex];
    if (isDeleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    typeTarget.textContent = currentRole.substring(0, charIndex);

    let typeSpeed = isDeleting ? 50 : 150;

    if (!isDeleting && charIndex === currentRole.length) {
        typeSpeed = 2000; // Pause at end
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
}

// Particle Background Config
particlesJS("particles-js", {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#6366f1" },
        shape: { type: "circle" },
        opacity: { value: 0.5, random: false },
        size: { value: 3, random: true },
        line_linked: { enable: true, distance: 150, color: "#6366f1", opacity: 0.2, width: 1 },
        move: { enable: true, speed: 2, direction: "none", random: false, straight: false, out_mode: "out", bounce: false }
    },
    interactivity: {
        detect_on: "canvas",
        events: { onhover: { enable: true, mode: "grab" }, onclick: { enable: true, mode: "push" }, resize: true },
        modes: { grab: { distance: 140, line_linked: { opacity: 1 } }, push: { particles_nb: 4 } }
    },
    retina_detect: true
});

// Form Submission Simulation
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Message sent successfully! Onyeka will get back to you shortly.');
    this.reset();
});

// Start Typewriter
document.addEventListener("DOMContentLoaded", type);
