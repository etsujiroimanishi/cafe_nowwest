// banana-circle reverse//
const target = document.getElementById("HOME_circle");
let set_position = 0;

function observation() {
    const targetRect = target.getBoundingClientRect();
    if (targetRect.top < window.innerHeight && targetRect.bottom >= 0) {

        if (set_position < document.documentElement.scrollTop) {
            target.classList.remove("banana_circle_reverse");
            target.classList.add("banana_circle");
        } else {
            target.classList.remove("banana_circle");
            target.classList.add("banana_circle_reverse");
        }
    } else {
        target.classList.remove("banana_circle_reverse");
        target.classList.remove("banana_circle");
    }

    set_position = document.documentElement.scrollTop;
}

window.addEventListener("scroll", observation);

