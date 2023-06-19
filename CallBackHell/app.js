// setTimeout(() => {
//     document.body.style.backgroundColor = "red";
//     setTimeout(() => {
//         document.body.style.backgroundColor = "blue";
//         setTimeout(() => {
//             document.body.style.backgroundColor = "orange";
//             setTimeout(() => {
//                 document.body.style.backgroundColor = "purple";
//                 setTimeout(() => {
//                     document.body.style.backgroundColor = "green";
//                     setTimeout(() => {
//                         document.body.style.backgroundColor = "yello";
//                         setTimeout(() => {
//                             document.body.style.backgroundColor = "violet";
//                         }, 1000)
//                     }, 1000)
//                 }, 1000)
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)


const delayedColorChange = (newColor, delay, doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor;
        doNext && doNext();
    }, delay)
}



delayedColorChange("blue", 2000, () => {
    delayedColorChange("orange", 1000, () => {
        delayedColorChange("pink", 1000, () => {
            delayedColorChange("yellow", 1000, () => {
                delayedColorChange("red", 1000, () => {
                    delayedColorChange("gray", 1000, () => {

                    });
                });
            });
        });
    });
});

// searchMoviesAPI("Harry Potter", ()=>{
//     saveToMyDB(movie, ()=>{
// // if it works, run this.
//     }, ()=>{
// // if doesn't work, run this.
//     })
// })



