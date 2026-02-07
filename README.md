# Web-github.io
<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lwazi Manqele | Music Producer Portfolio</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">
    <script src="https://unpkg.com/lucide@latest"></script>
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body class="bg-[#0a0a0b] text-white font-['Inter'] overflow-x-hidden">

    <nav class="fixed w-full z-50 top-0 glass-effect border-b border-white/10 px-6 py-4">
        <div class="max-w-7xl mx-auto flex justify-between items-center">
            <div class="flex items-center gap-2 font-bold text-xl tracking-tighter">
                <div class="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                    <i data-lucide="cpu" class="w-5 h-5"></i>
                </div>
                <span>Lwazi Manqele</span>
            </div>
            
            <div class="hidden md:flex gap-8 text-sm font-medium text-gray-400">
                <a href="#home" class="hover:text-purple-400 transition-colors">Home</a>
                <a href="#about" class="hover:text-purple-400 transition-colors">About</a>
                <a href="#skills" class="hover:text-purple-400 transition-colors">Skills</a>
                <a href="#projects" class="hover:text-purple-400 transition-colors">Projects</a>
                <a href="#services" class="hover:text-purple-400 transition-colors">Services</a>
                <a href="#contact" class="hover:text-purple-400 transition-colors">Contact</a>
            </div>

            <button class="md:hidden text-white" id="menu-btn">
                <i data-lucide="menu"></i>
            </button>
        </div>
    </nav>

    <section id="home" class="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
        <div class="absolute inset-0 z-0 opacity-20">
            <div id="particles-js" class="w-full h-full"></div>
        </div>
        
        <div class="text-center z-10" data-aos="fade-up">
            <div class="relative inline-block mb-6">
                <div class="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
                <img src="https://via.placeholder.com/150" alt="Profile" class="relative w-32 h-32 rounded-full border-2 border-purple-500/50 object-cover">
            </div>
            <h1 class="text-5xl md:text-7xl font-bold mb-4">
                Hi, I'm <span class="bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">Onyeka Obasiocha</span>
            </h1>
            <div class="text-xl md:text-2xl text-gray-400 mb-8 h-8">
                <span id="typewriter"></span><span class="animate-pulse">|</span>
            </div>
            <p class="max-w-2xl mx-auto text-gray-400 mb-10 leading-relaxed">
                Empowering businesses with robust IT support, modern web experiences, and scalable DevOps solutions. 5+ years of turning complex problems into elegant code.
            </p>
            <div class="flex flex-wrap justify-center gap-4">
                <a href="#contact" class="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all">Hire Me</a>
                <a href="#projects" class="px-8 py-3 bg-white/5 border border-white/10 rounded-full font-semibold hover:bg-white/10 transition-all">View Projects</a>
            </div>
            
            <div class="flex justify-center gap-6 mt-12 text-gray-400">
                <a href="#" class="hover:text-white transition-colors"><i data-lucide="github"></i></a>
                <a href="#" class="hover:text-white transition-colors"><i data-lucide="linkedin"></i></a>
                <a href="#" class="hover:text-white transition-colors"><i data-lucide="twitter"></i></a>
                <a href="#" class="hover:text-white transition-colors"><i data-lucide="mail"></i></a>
            </div>
        </div>
    </section>

    <section id="about" class="py-24 px-6 max-w-7xl mx-auto">
        <div class="grid md:grid-cols-2 gap-16 items-center">
            <div class="relative" data-aos="fade-right">
                <div class="aspect-square bg-white/5 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                     <img src="https://via.placeholder.com/600x600" alt="About Me" class="w-full h-full object-cover">
                </div>
            </div>
            <div data-aos="fade-left">
                <h2 class="text-3xl font-bold mb-6">Delivering Tech Excellence</h2>
                <p class="text-gray-400 mb-8 text-lg">
                    Based in Johannesburg, I specialize in building bridges between complex infrastructure and user-centric design. Whether it's setting up CI/CD pipelines or crafting pixel-perfect interfaces, my focus is always on reliability and performance.
                </p>
                <div class="grid grid-cols-2 gap-4">
                    <div class="glass-card p-6 rounded-xl border border-white/5">
                        <div class="text-3xl font-bold text-purple-400 mb-1">50+</div>
                        <div class="text-sm text-gray-500">Projects Done</div>
                    </div>
                    <div class="glass-card p-6 rounded-xl border border-white/5">
                        <div class="text-3xl font-bold text-blue-400 mb-1">5+</div>
                        <div class="text-sm text-gray-500">Years Experience</div>
                    </div>
                    <div class="glass-card p-6 rounded-xl border border-white/5">
                        <div class="text-3xl font-bold text-indigo-400 mb-1">30+</div>
                        <div class="text-sm text-gray-500">Global Clients</div>
                    </div>
                    <div class="glass-card p-6 rounded-xl border border-white/5">
                        <div class="text-3xl font-bold text-green-400 mb-1">24/7</div>
                        <div class="text-sm text-gray-500">Support</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="skills" class="py-24 px-6 bg-[#0c0c0e]">
        <div class="max-w-7xl mx-auto text-center mb-16">
            <h2 class="text-4xl font-bold mb-4">Technical Arsenal</h2>
            <p class="text-gray-400">A comprehensive suite of tools for the modern digital era.</p>
        </div>
        <div class="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
            <div class="glass-card p-8 rounded-2xl border border-white/10 hover-lift group" data-aos="fade-up" data-aos-delay="100">
                <i data-lucide="terminal" class="w-12 h-12 text-purple-500 mb-6 group-hover:rotate-12 transition-transform"></i>
                <h3 class="text-2xl font-bold mb-4">IT Support</h3>
                <ul class="space-y-3 text-gray-400">
                    <li class="flex items-center gap-2"><i data-lucide="check-circle" class="w-4 h-4 text-purple-500"></i> Network Management</li>
                    <li class="flex items-center gap-2"><i data-lucide="check-circle" class="w-4 h-4 text-purple-500"></i> Hardware Diagnostics</li>
                    <li class="flex items-center gap-2"><i data-lucide="check-circle" class="w-4 h-4 text-purple-500"></i> OS Virtualization</li>
                </ul>
            </div>
            <div class="glass-card p-8 rounded-2xl border border-white/10 hover-lift group" data-aos="fade-up" data-aos-delay="200">
                <i data-lucide="code" class="w-12 h-12 text-blue-500 mb-6 group-hover:rotate-12 transition-transform"></i>
                <h3 class="text-2xl font-bold mb-4">Web Development</h3>
                <ul class="space-y-3 text-gray-400">
                    <li class="flex items-center gap-2"><i data-lucide="check-circle" class="w-4 h-4 text-blue-500"></i> React & Tailwind CSS</li>
                    <li class="flex items-center gap-2"><i data-lucide="check-circle" class="w-4 h-4 text-blue-500"></i> Backend Node.js</li>
                    <li class="flex items-center gap-2"><i data-lucide="check-circle" class="w-4 h-4 text-blue-500"></i> API Integrations</li>
                </ul>
            </div>
            <div class="glass-card p-8 rounded-2xl border border-white/10 hover-lift group" data-aos="fade-up" data-aos-delay="300">
                <i data-lucide="layers" class="w-12 h-12 text-indigo-500 mb-6 group-hover:rotate-12 transition-transform"></i>
                <h3 class="text-2xl font-bold mb-4">DevOps</h3>
                <ul class="space-y-3 text-gray-400">
                    <li class="flex items-center gap-2"><i data-lucide="check-circle" class="w-4 h-4 text-indigo-500"></i> Docker & Kubernetes</li>
                    <li class="flex items-center gap-2"><i data-lucide="check-circle" class="w-4 h-4 text-indigo-500"></i> AWS/Azure Cloud</li>
                    <li class="flex items-center gap-2"><i data-lucide="check-circle" class="w-4 h-4 text-indigo-500"></i> CI/CD Pipelines</li>
                </ul>
            </div>
        </div>
    </section>

    <section id="services" class="py-24 px-6 max-w-7xl mx-auto">
        <h2 class="text-3xl font-bold mb-12 text-center">My Services</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="p-8 rounded-2xl bg-white/5 border border-white/10 hover:scale-105 transition-transform duration-300">
                <div class="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-6">
                    <i data-lucide="activity" class="text-purple-500"></i>
                </div>
                <h4 class="text-xl font-bold mb-2">Performance Opt.</h4>
                <p class="text-gray-400 text-sm">Lightning fast loading speeds and optimized database queries.</p>
            </div>
            </div>
    </section>

    <section id="contact" class="py-24 px-6 bg-[#0a0a0b] border-t border-white/5">
        <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
            <div data-aos="fade-right">
                <h2 class="text-4xl font-bold mb-6">Let's Collaborate</h2>
                <p class="text-gray-400 mb-10">Have a project in mind? Reach out and let's build something extraordinary.</p>
                <div class="space-y-6">
                    <div class="flex items-center gap-4">
                        <div class="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-purple-400">
                            <i data-lucide="mail"></i>
                        </div>
                        <div>
                            <p class="text-sm text-gray-500">Email Me</p>
                            <p class="font-medium">contact@onyeka.tech</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-4">
                        <div class="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-blue-400">
                            <i data-lucide="map-pin"></i>
                        </div>
                        <div>
                            <p class="text-sm text-gray-500">Location</p>
                            <p class="font-medium">Johannesburg, South Africa</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="glass-card p-8 rounded-2xl border border-white/10" data-aos="fade-left">
                <form id="contact-form" class="space-y-4">
                    <input type="text" placeholder="Full Name" class="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors" required>
                    <input type="email" placeholder="Email Address" class="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors" required>
                    <textarea placeholder="Your Message" rows="5" class="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors" required></textarea>
                    <button type="submit" class="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-bold hover:opacity-90 transition-opacity">Send Message</button>
                </form>
            </div>
        </div>
    </section>

    <footer class="py-12 px-6 border-t border-white/5 text-center">
        <div class="flex justify-center gap-6 mb-8 text-gray-500">
            <a href="#"><i data-lucide="github" class="w-5 h-5 hover:text-white transition-colors"></i></a>
            <a href="#"><i data-lucide="linkedin" class="w-5 h-5 hover:text-white transition-colors"></i></a>
            <a href="#"><i data-lucide="twitter" class="w-5 h-5 hover:text-white transition-colors"></i></a>
        </div>
        <p class="text-gray-500 text-sm">© 2024 Onyeka Obasiocha. All Rights Reserved.</p>
    </footer>

    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js"></script>
    <script src="script.js"></script>
</body>
</html>
/* Glassmorphism Styles */
.glass-effect {
    background: rgba(10, 10, 11, 0.8);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
}

.glass-card {
    background: rgba(255, 255, 255, 0.03);
    backdrop-filter: blur(10px);
}

/* Hover Animations */
.hover-lift {
    transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.hover-lift:hover {
    transform: translateY(-10px);
}

/* Custom Scrollbar */
::-webkit-scrollbar {
    width: 8px;
}

::-webkit-scrollbar-track {
    background: #0a0a0b;
}

::-webkit-scrollbar-thumb {
    background: #27272a;
    border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
    background: #3f3f46;
}

/* Typing Cursor */
#typewriter::after {
    content: '';
    display: inline-block;
    width: 2px;
    height: 1.2em;
    background-color: #a855f7;
    margin-left: 4px;
    vertical-align: middle;
}
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
