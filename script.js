/**
 * A11y News - Optimerad för användbarhet
 */
document.addEventListener("DOMContentLoaded", () => {
    console.log("Sidan har laddats korrekt enligt tillgänglighetsstandarder.");

    // Enkel funktionalitet för att hjälpa användaren
    const searchForm = document.querySelector('.search-form');
    if (searchForm) {
        searchForm.addEventListener('submit', (e) => {
            const query = document.querySelector('#site-search').value;
            if (!query.trim()) {
                e.preventDefault();
                alert("Vänligen fyll i ett sökord.");
            }
        });
    }
});