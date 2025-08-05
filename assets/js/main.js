/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== PERFORMANCE OPTIMIZATION ===============*/
// Throttle function for better performance
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the blur-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('blur-header') 
                       : header.classList.remove('blur-header')
}

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollDown = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute('id');
        const sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

        if (sectionsClass) {
            if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
                sectionsClass.classList.add('active-link');
            } else {
                sectionsClass.classList.remove('active-link');
            }
        }
    });
};

// Apply throttling to scroll-dependent functions
const throttledBlurHeader = throttle(blurHeader, 16);
const throttledScrollUp = throttle(scrollUp, 16);
const throttledScrollActive = throttle(scrollActive, 16);

window.addEventListener('scroll', throttledBlurHeader);
window.addEventListener('scroll', throttledScrollUp);
window.addEventListener('scroll', throttledScrollActive);

/*=============== SMOOTH SCROLLING ===============*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefault()

    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_gz8q08j', 'template_11345ks', '#contact-form', 'N5tp76Lh3xMgNAAYy')
        .then(() =>{
            // Show sent message
            contactMessage.textContent = 'Message sent successfully! 😊'

            // Remove message after 5 seconds
            setTimeout(() =>{
                contactMessage.textContent = ''
            }, 5000)

            // Clear input fields
            contactForm.reset()

        }, () =>{
            // Show error message
            contactMessage.textContent = 'Message not sent (service error) 😢'
        })
}

contactForm.addEventListener('submit', sendEmail)

/*=============== CLEAN SCROLL REVEAL ANIMATIONS ===============*/
// Initialize ScrollReveal with optimized settings
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '60px',
    duration: 1000,
    delay: 100,
    easing: 'ease-out',
    reset: false,
    viewFactor: 0.15,
    mobile: true,
    desktop: true
});

// Home section animations - Simple and clean
sr.reveal('.home__data', {
    origin: 'top',
    distance: '80px',
    duration: 1200,
    delay: 200
});

sr.reveal('.home__social', {
    origin: 'bottom',
    distance: '80px',
    duration: 1000,
    delay: 600,
    easing: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)'
});

// Individual social link animations with stagger effect
sr.reveal('.home__social-link', {
    origin: 'bottom',
    distance: '60px',
    duration: 800,
    delay: 800,
    interval: 150,
    easing: 'ease-out'
});

sr.reveal('.home__image', {
    origin: 'right',
    distance: '100px',
    duration: 1000,
    delay: 400
});

// About section animations
sr.reveal('.about__data', {
    origin: 'left',
    distance: '80px',
    duration: 1000,
    delay: 200
});

sr.reveal('.about__image', {
    origin: 'right',
    distance: '80px',
    duration: 1000,
    delay: 400
});

// Skills section animations
sr.reveal('.skills__data', {
    origin: 'left',
    distance: '80px',
    duration: 1000,
    delay: 200
});

sr.reveal('.skills__content', {
    origin: 'right',
    distance: '80px',
    duration: 1000,
    delay: 400
});

sr.reveal('.skills__group', {
    origin: 'bottom',
    distance: '60px',
    duration: 800,
    interval: 200,
    delay: 600
});

// Services section animations
sr.reveal('.services .section__subtitle', {
    origin: 'top',
    distance: '60px',
    duration: 800,
    delay: 100
});

sr.reveal('.services .section__title', {
    origin: 'top',
    distance: '60px',
    duration: 800,
    delay: 200
});

sr.reveal('.services__card', {
    origin: 'bottom',
    distance: '80px',
    duration: 1000,
    interval: 200,
    delay: 300
});

// Projects section animations
sr.reveal('.projects .section__subtitle', {
    origin: 'top',
    distance: '60px',
    duration: 800,
    delay: 100
});

sr.reveal('.projects .section__title', {
    origin: 'top',
    distance: '60px',
    duration: 800,
    delay: 200
});

sr.reveal('.projects__card', {
    origin: 'bottom',
    distance: '80px',
    duration: 1000,
    interval: 150,
    delay: 300
});

// Contact section animations
sr.reveal('.contact .section__subtitle', {
    origin: 'top',
    distance: '60px',
    duration: 800,
    delay: 100
});

sr.reveal('.contact .section__title', {
    origin: 'top',
    distance: '60px',
    duration: 800,
    delay: 200
});

sr.reveal('.contact__form', {
    origin: 'bottom',
    distance: '80px',
    duration: 1000,
    delay: 400
});

// Footer animations
sr.reveal('.footer__title', {
    origin: 'bottom',
    distance: '60px',
    duration: 800,
    delay: 200
});

sr.reveal('.footer__education', {
    origin: 'bottom',
    distance: '60px',
    duration: 800,
    delay: 300
});

sr.reveal('.footer__social', {
    origin: 'bottom',
    distance: '80px',
    duration: 1000,
    delay: 400,
    easing: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)'
});

// Individual footer social link animations
sr.reveal('.footer__social-link', {
    origin: 'bottom',
    distance: '40px',
    duration: 600,
    delay: 600,
    interval: 100,
    easing: 'ease-out'
});