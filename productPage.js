// Handle quantity increase/decrease
const { viewingProduct } = JSON.parse(localStorage.getItem('data'));
console.log(viewingProduct)

document.getElementById('increase-qty').addEventListener('click', () => {
    const quantityInput = document.getElementById('quantity');
    quantityInput.value = parseInt(quantityInput.value) + 1;
});

document.getElementById('decrease-qty').addEventListener('click', () => {
    const quantityInput = document.getElementById('quantity');
    if (parseInt(quantityInput.value) > 1) {
        quantityInput.value = parseInt(quantityInput.value) - 1;
    }
});

// Handle thumbnail image click to change main image
const thumbnails = document.querySelectorAll('.thumbnail');
thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        const mainImage = document.getElementById('product-main-image');
        mainImage.src = thumbnail.src;
    });
});




// const productIdElement = document.querySelector('h1');
// const priceElement = document.querySelector('.price');
// const ratingElement = document.querySelector('.rating span');
// const reviewsElement = document.querySelector('.rating a');
const descriptionElement = document.querySelector('.description');

const productIdElement = document.querySelector('h1');
const priceElement = document.querySelector('.price');
// const descriptionElement = document.querySelector('.description');
const imageElement = document.querySelector('.thumbnail');
const mainImageElment = document.getElementById('product-main-image')
const ratingElement = document.querySelector('.rating span');
const reviewsElement = document.querySelector('.rating a');

productIdElement.textContent = viewingProduct.title;
priceElement.textContent = `$${viewingProduct.price}`;
descriptionElement.textContent = viewingProduct.description;
imageElement.src = viewingProduct.image;
mainImageElment.src = viewingProduct.image;



const thumbnailElement2 = document.getElementById('thumbnail-2');
const thumbnailElement3 = document.getElementById('thumbnail-3');
const thumbnailElment4 = document.getElementById('thumbnail-4');



thumbnailElement2.src = viewingProduct.image;
thumbnailElement3.src = viewingProduct.image;
thumbnailElment4.src = viewingProduct.image;
 
imageElement.alt = viewingProduct.title;
ratingElement.innerHTML = `&#9733;`.repeat(Math.floor(viewingProduct.rating.rate)) + '&#9734;'.repeat(5 - Math.floor(viewingProduct.rating.rate));
reviewsElement.textContent = `(${viewingProduct.rating.count} reviews)`;
descriptionElement.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor labore et dolore magna";

const completeDescriptionElement = document.querySelector('.product-description p');

completeDescriptionElement.textContent = viewingProduct.description;

