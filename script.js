// Parallax Effect
window.addEventListener('scroll', () => {
    const parallax = document.querySelector('.parallax-bg');
    const scrolled = window.pageYOffset;
    parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
});

// Projects Data
const projects = [
    {
        title: "Salesforce Customer Portal",
        description: "A responsive customer portal built using Lightning Web Components and Apex.",
        image: "assets/project1.jpg",
        tags: ["Salesforce", "LWC", "Apex"]
    },
    {
        title: "Sales Analytics Dashboard",
        description: "Interactive dashboard for real-time sales data visualization.",
        image: "assets/project2.jpg",
        tags: ["Salesforce", "Analytics", "JavaScript"]
    },
    {
        title: "Automated Lead Management",
        description: "Automated lead scoring and assignment system using Salesforce Flow.",
        image: "assets/project3.jpg",
        tags: ["Salesforce", "Flow", "Automation"]
    }
];

// Dynamically populate projects
const projectGrid = document.querySelector('.project-grid');

projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    projectCard.innerHTML = `
        <img src="${project.image}" alt="${project.title}" class="project-image">
        <div class="project-info">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="project-tags">
                ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
        </div>
    `;
    projectGrid.appendChild(projectCard);
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add your form submission logic here
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
}

// Add scroll-based animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});
