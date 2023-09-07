const pages = document.querySelectorAll('.page');
let currentPage = 0;

function scrollToPage(pageIndex) {
    if (pageIndex >= 0 && pageIndex < pages.length) {
        currentPage = pageIndex;
        pages[pageIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    }
}

window.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft' && currentPage > 0) {
        scrollToPage(currentPage - 1);
    } else if (event.key === 'ArrowRight' && currentPage < pages.length - 1) {
        scrollToPage(currentPage + 1);
    }
});

// Optionally, you can add navigation buttons or other UI elements to trigger scrolling.
