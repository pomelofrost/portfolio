const mouseCursor = document.querySelector('.cursor');

if (mouseCursor) {
    document.addEventListener('mousemove', (e) => {
        mouseCursor.style.top = e.clientY + 'px';
        mouseCursor.style.left = e.clientX + 'px';
        mouseCursor.classList.add('is-visible');
    });

    document.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('is-visible');
    });

    document.querySelectorAll('a').forEach((link) => {
        link.addEventListener('mouseleave', () => {
            mouseCursor.classList.remove('link-grow');
            link.classList.remove('hovered-link');
        });
        link.addEventListener('mouseover', () => {
            mouseCursor.classList.add('link-grow');
            link.classList.add('hovered-link');
        });
    });
}
