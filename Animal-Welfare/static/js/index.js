function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

window.addEventListener('scroll', function() {
    const scrollButton = document.querySelector('.scroll-to-top');
    if (scrollButton) {
        scrollButton.classList.toggle('visible', window.scrollY > 300);
    }
});

const navToggle = document.querySelector('.nav-toggle');
const navigation = document.querySelector('.site-navigation');

if (navToggle && navigation) {
    navToggle.addEventListener('click', function() {
        const isOpen = navigation.classList.toggle('is-open');
        navToggle.classList.toggle('is-open', isOpen);
        navToggle.setAttribute('aria-expanded', String(isOpen));
        navToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
    });

    navigation.querySelectorAll('a').forEach(function(link) {
        link.addEventListener('click', function() {
            navigation.classList.remove('is-open');
            navToggle.classList.remove('is-open');
            navToggle.setAttribute('aria-expanded', 'false');
            navToggle.setAttribute('aria-label', 'Open navigation');
        });
    });
}
