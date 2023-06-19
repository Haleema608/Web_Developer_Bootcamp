// const input = document.querySelector("input");
// input.addEventListener('change', function (e) {
//     console.log("shgys");
// })

const input = document.querySelector("input");
const h1 = document.querySelector("h1");
input.addEventListener('input', function (e) {
    h1.innerText = input.value;
})

