document.addEventListener("DOMContentLoaded", function() {
    const text = "NUNJ PATEL";
    let i = 0;
    const speed = 250; // Typing speed in milliseconds
    const typewriterElement = document.getElementById('typewriter');

    function typeWriter() {
        if (i < text.length) {
            typewriterElement.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();
});


document.querySelector('.explore-btn').addEventListener('click', function() {
    const aboutSection = document.querySelector('#about');
    aboutSection.scrollIntoView({ behavior: 'smooth' });
});

