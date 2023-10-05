function randomizeStarPosition(element) {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    element.style.left = `${x}px`;
    element.style.top = `${y}px`;
}

function randomAnimationDuration() {
    return Math.random() * 3 + 0.1;  // Génère une durée aléatoire entre 3 et 8 secondes.
}

function randomTranslateValues() {
    const translateXValue = (Math.random() * 200 - 100) + "vw"; // entre -100vw et 100vw
    const translateYValue = (Math.random() * 200 - 100) + "vh"; // entre -100vh et 100vh
    
    return {
        x: translateXValue,
        y: translateYValue
    };
}

function animateShootingStars() {
    const numShootingStars = Math.floor(Math.random() * 10) + 1; 

    for (let i = 0; i < numShootingStars; i++) {
        const shootingStar = document.createElement('div');
        shootingStar.className = 'shooting-star';
        randomizeStarPosition(shootingStar);
        
        const translateValues = randomTranslateValues();
        const duration = randomAnimationDuration();
        
        // Set the animation duration dynamically
        shootingStar.style.transitionDuration = `${duration}s`;

        document.querySelector('#Accueil').appendChild(shootingStar);

        // Animate to the random translate values after a short delay to ensure it's rendered in its starting position
        setTimeout(() => {
            shootingStar.style.transform = `translate(${translateValues.x}, ${translateValues.y})`;
        }, 10);

        setTimeout(() => { 
            shootingStar.remove();
        }, duration * 1000); 
    }

    setTimeout(animateShootingStars, Math.random() * 3000 + 1000);
}

function animateTwinklingStars() {
    const numTwinklingStars = Math.floor(Math.random() * 50) + 1;

    for (let i = 0; i < numTwinklingStars; i++) {
        const twinklingStar = document.createElement('div');
        twinklingStar.className = 'twinkling-star';
        randomizeStarPosition(twinklingStar);
        
        // Add to DOM with opacity 0
        twinklingStar.style.opacity = "0";
        document.querySelector('#Accueil').appendChild(twinklingStar);

        // Fade in
        setTimeout(() => {
            twinklingStar.style.opacity = "1";
        }, Math.random() * 500); // Delayed appearance for each star

        // Remove after fade out
        setTimeout(() => {
            twinklingStar.style.opacity = "0";
        }, 5000 - 500); // Start fading out 0.5 seconds before the star should be removed

        setTimeout(() => {
            twinklingStar.remove();
        }, 5000);
    }

    setTimeout(animateTwinklingStars, Math.random() * 5000 + 500);
}

document.addEventListener('DOMContentLoaded', () => {
    animateShootingStars();
    animateTwinklingStars();
});