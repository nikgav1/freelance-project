const imageSources = [
    '../assets/photosToLoadMansions/mansion1.jpg',
    '../assets/photosToLoadMansions/mansion2.jpg',
    '../assets/photosToLoadMansions/mansion3.jpg',
    '../assets/photosToLoadMansions/mansion4.jpg',
    '../assets/photosToLoadMansions/mansion5.jpg',
    '../assets/photosToLoadMansions/mansion6.jpg',
    '../assets/photosToLoadMansions/mansion7.jpg',
    '../assets/photosToLoadMansions/mansion8.jpg'
];
const container = document.querySelector(".mansions")
imageSources.forEach((src) => {
    const img = document.createElement("img")
    img.src = src;
    container.appendChild(img)
})