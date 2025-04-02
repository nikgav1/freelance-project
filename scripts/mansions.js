const imageSources = [
    'https://res.cloudinary.com/dx7247r5l/image/upload/v1743621198/mansion_dsvepf.jpg',
    'https://res.cloudinary.com/dx7247r5l/image/upload/v1743621198/mansion6_v63uux.jpg',
    'https://res.cloudinary.com/dx7247r5l/image/upload/v1743621199/mansion8_eiaioo.jpg',
    'https://res.cloudinary.com/dx7247r5l/image/upload/v1743621199/mansion7_vmdsha.jpg',
    'https://res.cloudinary.com/dx7247r5l/image/upload/v1743621201/mansion3_zxgl3r.jpg',
    'https://res.cloudinary.com/dx7247r5l/image/upload/v1743621201/mansion4_kmmigf.jpg',
    'https://res.cloudinary.com/dx7247r5l/image/upload/v1743621201/mansion1_cxx2q5.jpg',
    'https://res.cloudinary.com/dx7247r5l/image/upload/v1743621202/mansion2_vytntg.jpg',
    'https://res.cloudinary.com/dx7247r5l/image/upload/v1743621202/mansion5_k4snen.jpg',
];
const container = document.querySelector(".mansions")
imageSources.forEach((src) => {
    // Dynamically transforimg with Cloudinary
    const transformedSrc = src.replace('/upload/', '/upload/w_400,h275/');

    const img = document.createElement("img")
    img.src = src;
    container.appendChild(img)
})