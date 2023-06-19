// const fakeRequest = (url) => {
//     return new Promise((resolve, reject) => {
//         const rand = Math.random();
//         setTimeout(() => {
//             if (rand < 0.7) {
//                 resolve("Your Fake Data Here...");
//             }
//             reject('Request Error:(');
//         }, 1000)
//     })
// }

// fakeRequest('/dogs/1')
//     .then((data) => {
//         console.log("Done With This!!!")
//         console.log('data is:', data)
//     })
//     .catch((err) => {
//         console.log('OH NO!', err)
//     })

//************************************************************************************************************************* */

// const delayedColorChange = (newColor, delay, doNext) => {
//     setTimeout(() => {
//         document.body.style.backgroundColor = newColor;
//         doNext && doNext();
//     }, delay)
// }



// delayedColorChange("blue", 2000, () => {
//     delayedColorChange("orange", 1000, () => {
//         delayedColorChange("pink", 1000, () => {
//             delayedColorChange("yellow", 1000, () => {
//                 delayedColorChange("red", 1000, () => {
//                     delayedColorChange("gray", 1000, () => {

//                     });
//                 });
//             });
//         });
//     });
// });


//rewriting with promise function

const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

delayedColorChange("magenta", 1000)
    .then(() => delayedColorChange("yellow", 2000))
    .then(() => delayedColorChange("violet", 2000))
    .then(() => delayedColorChange("teal", 2000))
    .then(() => delayedColorChange("blue", 2000))
    .then(() => delayedColorChange("indigo", 2000))
    .then(() => delayedColorChange("black", 2000))



