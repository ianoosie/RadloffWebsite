const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar_menu')
const navLogo = document.querySelector('#navbar_logo')
const body = document.querySelector('body')

//Display mobile menu
const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
    body.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu)

// Animations
gsap.registerPlugin(ScrollTrigger)

gsap.from('.anim-hero',{
    duration: 0.8,
    opacity: 0,
    y: -150,
    stagger: 0.3
});

gsap.from('.anim-services',{
    scrollTrigger: '.anim-services',
    duration: 1.5,
    opacity: 1,
    x: -150,
    stagger: 0.12
});

gsap.from('.anim-img',{
    scrollTrigger: '.anim-services',
    duration: 2.2,
    opacity: 0,
    x: -200,
});

gsap.from('.anim-membership',{
    scrollTrigger: '.anim-membership',
    duration: 1,
    opacity: 0,
    y: -150,
    stagger: 0.3,
    delay: 0.5
});

gsap.from('.anim-card',{
    scrollTrigger: '.anim-card',
    duration: 1,
    opacity: 0,
    y: -150,
    stagger: 0.1,
    delay: 0.2
});
// Change team
gsap.from('.anim-team',{
    scrollTrigger: '.anim-team',
    duration: 1,
    opacity: 0,
    y: -150,
    stagger: 0.3,
    delay: 0.2
});

gsap.from('.anim-email',{
    scrollTrigger: '.anim-email',
    duration: 0.8,
    opacity: 0,
    y: -150,
    stagger: 0.25,
    delay: 1
});