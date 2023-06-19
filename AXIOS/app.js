// axios.get("https://swapi.dev/api/people/1/")
//     .then(res => {
//         console.log(res);
//     })
//     .catch(err => {
//         console.log(err)
//     });

//rewriting with asunc function***********************************************************8


// const getstarWarPersons = async (id) => {
//     try {
//         const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
//         console.log(res.data);
//     } catch (e) {
//         console.log("error", e);
//     }
// };

// getstarWarPersons(45);

//http request that needs header*************************************************************

// const getDaDJoke = async () => {
//     const config = { headers: { Accept: "application/json" } }
//     const res = await axios.get("https://icanhazdadjoke.com/", config);
//     console.log(res.data.joke);
// }
// getDaDJoke();

const jokes = document.querySelector("#jokes");
const button = document.querySelector("button");


const AddnewJoke = async () => {
    const jokeText = await getDaDJoke();
    console.log(jokeText);
    const newLi = document.createElement("Li");
    newLi.append(jokeText);
    jokes.append(newLi);
}
const getDaDJoke = async () => {
    try {
        const config = { headers: { Accept: "application/json" } }
        const res = await axios.get("https://icanhazdadjoke.com/", config);
        return res.data.joke;
    } catch (e) {
        return "No JOkes..SORRY :(";
    }

}
button.addEventListener("click", AddnewJoke);



