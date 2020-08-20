var typed = new Typed(".Typed", {
    strings: [
        "Student._",
        "Web Dev._",
        "Gamer._"
    ],
    typeSpeed: 100,
    loop: true,
    startDelay: 1000,
    showCursor: false,
    backSpeed: 100, // Default value
    shuffle: true,
});

const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    /*Active link*/
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');

    /*Remove menu mobile*/
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*SCROLL HOME*/
sr.reveal('.home__title', {});
sr.reveal('.button', { delay: 200 });
sr.reveal('.home__img', { delay: 400 });
sr.reveal('.home__social-icon', { interval: 200 });

/*SCROLL ABOUT*/
sr.reveal('.about__img', {});
sr.reveal('.about__subtitle', { delay: 400 });
sr.reveal('.about__text', { delay: 400 });

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle', { interval: 1000 });
sr.reveal('.skills__text', {});
// sr.reveal('.container-skillbar', { interval: 500 });
sr.reveal('.container-skillbar', { interval: 2000 });
sr.reveal('.skills__img', { delay: 600 });

/*SCROLL WORK*/
// sr.reveal('.work__img', { interval: 200 });

/*SCROLL CONTACT*/
// sr.reveal('.contact__input', { interval: 200 });

jQuery(document).ready(function () {
    jQuery('.skillbar').each(function () {
        jQuery(this).find('.skillbar-bar').animate({
            width: jQuery(this).attr('data-percent')
        }, 3000);
    });
});