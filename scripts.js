/* script.js */

document.addEventListener('DOMContentLoaded', (event) => {

    console.log("Chroma Shift Interactive script loaded!");

    // --- Dynamic Year in Footer ---
    // This part is optional, you can just type the year in the HTML footer if preferred.
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // --- Other JS functionality can be added here later ---

});
