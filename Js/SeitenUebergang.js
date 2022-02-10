const ueber = document.querySelector(".content1");
const ueberschrigt = document.querySelector(".ueberschrift");
const tl = new TimelineMax();

tl.fromTo(ueber, .25, { x: "-100%" }, { x: "0%" });
tl.fromTo(ueberschrigt, .25, { x: "-100%" }, { x: "0%" }, "-= .25");

function uebergang(str) {
    tl.fromTo(ueber, .10, { x: "0%" }, { x: "100%" });
    tl.fromTo(ueberschrigt, .10, { x: "0%" }, { x: "100%" }, "-=.10");
    setTimeout(function () {
        window.location.href = str;
    }, 100);
}