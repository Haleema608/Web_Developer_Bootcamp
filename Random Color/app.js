const btn = document.querySelector("button");

const h1 = document.querySelector("h1");

btn.addEventListener('click', function () {
    const newclr = makeRandColor();
    document.body.style.backgroundColor = newclr;
    h1.innerText = newclr
})

const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}