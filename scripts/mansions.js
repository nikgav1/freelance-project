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
const textPhoto = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, amet possimus. Voluptatem consequatur maiores doloribus sequi!"
const container = document.querySelector(".mansions");

imageSources.forEach((src) => {
    const transformedSrc = src.replace('/upload/', '/upload/w_800,h_500,q_auto:good/');

    const img = document.createElement("img");
    const divContainer = document.createElement("div")
    const p = document.createElement("p")

    p.textContent = textPhoto;
    img.dataset.src = transformedSrc;
    img.alt = "Mansion image";
    img.classList.add("lazy"); // Add lazy class for styling
    
    divContainer.append(img, p)
    container.appendChild(divContainer);
});

// Lazy loading logic
const lazyImages = document.querySelectorAll(".lazy");

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove("lazy");
            observer.unobserve(img);
        }
    });
});

lazyImages.forEach(img => observer.observe(img));