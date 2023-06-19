// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector("#container");
const baserURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"


for (let i = 1; i <= 151; i++) {
    const pokemon = document.createElement('div');
    pokemon.classList.add("pokemon");
    const label = document.createElement('span');
    label.innerText = `#${i}`
    const newimg = document.createElement("img");
    newimg.src = `${baserURL}${i}.png`;

    pokemon.appendChild(newimg);
    pokemon.appendChild(label);
    container.appendChild(pokemon);

}