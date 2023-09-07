const scrollContainer = document.getElementById('scrollContainer');
const content = document.getElementById('content');
const scrollbar = document.createElement('div');
scrollbar.className = 'scrollbar';
scrollContainer.appendChild(scrollbar);

const scrollThumb = document.createElement('div');
scrollThumb.className = 'scroll-thumb';
scrollbar.appendChild(scrollThumb);

const divScroll = document.querySelector('.divScroll');

divScroll.addEventListener('scroll', () => {
    // Add your scrolling behavior here
    console.log('Scrolling...');

function updateScrollbar() {
    const contentHeight = content.clientHeight;
    const containerHeight = scrollContainer.clientHeight;
    const scrollableHeight = contentHeight - containerHeight;

    const scrollPercent = (scrollContainer.scrollTop / scrollableHeight) * 100;
    scrollThumb.style.height = scrollPercent + '%';
}

scrollContainer.addEventListener('scroll', updateScrollbar);

scrollThumb.addEventListener('mousedown', (e) => {
    const startY = e.clientY;
    const startScrollTop = scrollContainer.scrollTop;

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    function onMouseMove(e) {
        const deltaY = e.clientY - startY;
        const scrollableHeight = content.clientHeight - scrollContainer.clientHeight;
        const scrollY = (startScrollTop + deltaY) * (scrollableHeight / scrollContainer.clientHeight);
        scrollContainer.scrollTop = scrollY;
    }

    function onMouseUp() {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
    }
});

updateScrollbar(); // Initial scrollbar position
