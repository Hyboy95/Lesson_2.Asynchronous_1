// function download(url) {
//     setTimeout(() => {
//         console.log(`Downloading ${url} ...`);
//     },1000);
// }
// function process(picture) {
//     console.log(`Processing ${picture}`);
// }
//
// let url = 'https://www.javascripttutorial.net/pic.jpg';
// download(url);
// process(url);

function download(url, callback) {
    setTimeout(() => {
        console.log(`Dowloading ${url} ...`);
        callback(url);
    }, 1000)
}

function process(picture) {
    console.log(`Processing ${picture}`);
}

let url = 'https://wwww.javascripttutorial.net/pic.jpg';
download(url, process);