document.addEventListener('DOMContentLoaded', (event) => {

    console.log("Chroma Shift Interactive script loaded!");

    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    const ctaButton = document.getElementById('cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            console.log("CTA Button Clicked!");
            alert("Thanks for your interest! More content coming soon."); // Using alert for simplicity, could replace with a modal later.
        });
    }

});
