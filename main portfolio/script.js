document.addEventListener('DOMContentLoaded', function() {
    
    // --- Typing Animation ---
    const typingTextElement = document.getElementById('typing-text');
    const textToType = "Cybersecurity Student & Ethical Hacker";
    let index = 0;
    
    function type() {
        if (index < textToType.length) {
            typingTextElement.textContent += textToType.charAt(index);
            index++;
            setTimeout(type, 100); // Adjust typing speed here
        }
    }
    type();

    // --- Fade-in on Scroll Animation ---
    const faders = document.querySelectorAll('.fade-in');
    const appearOptions = {
        threshold: 0.2, // Trigger when 20% of the element is visible
        rootMargin: "0px 0px -50px 0px" // Start animating a bit before it's fully in view
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('visible');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    // --- Active Nav Link Highlighting on Scroll ---
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            // Triggers when section is in the top 1/3 of the viewport
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
});