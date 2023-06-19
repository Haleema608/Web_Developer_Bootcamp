// const form = document.querySelector("#searchform");
// form.addEventListener("submit", async function (e) {
//     e.preventDefault();
//     const searchTerm = form.elements.query.value;
//     const res = await axios.get(`http://api.tvmaze.com/search/shows?q=${searchTerm}`);
//     makeImages(res.data);
//     form.elements.query.value = "";
// })

// const makeImages = (shows) => {
//     for (let result of shows) {
//         if (result.show.image) {
//             const img = document.createElement("IMG");
//             img.src = result.show.image.medium;
//             document.body.append(img);
//         }
//     }
// }

//------------------------------------------------------------------------------------------------------------------

const form = document.querySelector("#searchform");
form.addEventListener("submit", async function (e) {
    try {
        e.preventDefault();
        const searchTerm = form.elements.query.value;
        const config = { params: { q: searchTerm } }
        const res = await axios.get(`http://api.tvmaze.com/search/shows`, config);
        makeImages(res.data);
        form.elements.query.value = "";
    } catch (e) {
        console.log("OOPS", e);
    }

})

const makeImages = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement("IMG");
            img.src = result.show.image.medium;
            document.body.append(img);
        }
    }
}