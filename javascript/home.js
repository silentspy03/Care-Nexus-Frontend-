
function scrollToSection(sectionId) {
    var targetSection = document.getElementById(sectionId);
    
    // Calculate the center of the viewport 
    var windowHeight = window.innerHeight;
    var center = windowHeight / 2;

    // Calculate the offset for scrolling to center the section
    var sectionTop = targetSection.offsetTop;
    var scrollOffset = sectionTop - center;

    // Scroll smoothly to the target section with the adjusted offset
    window.scrollTo({
        top: scrollOffset,
        behavior: 'smooth'
    });
}
