const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.menu');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });

    // Si vous cliquez en dehors du menu, il se ferme.
    document.addEventListener('click', (e) => {
        if (e.target !== burger && e.target !== nav && !nav.contains(e.target) && nav.classList.contains('nav-active')) {
            nav.classList.remove('nav-active');
        }
    });
}

navSlide();