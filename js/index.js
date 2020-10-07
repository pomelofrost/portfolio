

let mouseCursor = document.querySelector('.cursor');
let navlinks = document.querySelectorAll('a');
// let rightDiv = document.querySelector('.right');

window.addEventListener('mousemove',cursor);

function cursor(e){
    console.log(e);
    mouseCursor.style.top = e.pageY + "px";
    mouseCursor.style.left = e.pageX + "px";
}

navlinks.forEach(link => {
    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('link-grow');
        link.classList.remove("hovered-link");
    });
    link.addEventListener('mouseover', () => {
        mouseCursor.classList.add('link-grow');
        link.classList.remove("hovered-link");
    });
});
