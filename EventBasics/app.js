const btn = document.querySelector("#v2");
btn.ondblclick = function () {
    console.log("you clicked me!")
}
function scream() {
    console.log('AAAAAAHHHHHHHHHH');
}
btn.onmouseenter = scream;

const h1 = document.querySelector("h1");
h1.addEventListener('mouseup', () => {
    alert('ahh you clicked me');
})

const btn1 = document.querySelector(".v3");
function shout() {
    console.log("SHOUT!")
}
function twist() {
    console.log("TWIST!")
}

btn1.addEventListener('click', shout, { once: false })
btn1.addEventListener('click', twist)