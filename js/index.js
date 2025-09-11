

let mouseCursor = document.querySelector('.cursor');
let navlinks = document.querySelectorAll('a');
// let rightDiv = document.querySelector('.right');

document.addEventListener('mousemove',cursor);
document.addEventListener('mouseenter', () => {
    mouseCursor.classList.add('is-visible');
});
document.addEventListener('mouseleave', () => {
    mouseCursor.classList.remove('is-visible');
});

function cursor(e){
    console.log(e);
    mouseCursor.style.top = e.pageY + "px";
    mouseCursor.style.left = e.pageX + "px";
    // ensure visible once mouse moves inside the page
    if (!mouseCursor.classList.contains('is-visible')) {
        mouseCursor.classList.add('is-visible');
    }
}

navlinks.forEach(link => {
    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('link-grow');
        link.classList.remove("hovered-link");
    });
    link.addEventListener('mouseover', () => {
        mouseCursor.classList.add('link-grow');
        link.classList.add("hovered-link");
    });
});
