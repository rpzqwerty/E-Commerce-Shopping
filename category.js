const queryString = window.location.search;



// Create a URLSearchParams object
const urlParams = new URLSearchParams(queryString);

// Access specific parameters
const categoryName = urlParams.get('category') == 'women' ? "women's%20clothing" : "jewelery"; // "John"
document.getElementById('category-name').textContent = categoryName == "women's%20clothing" ? "Women's Clothing" : "Jewelery";


document.getElementById('breadcrumb-category').textContent = "Women's Clothing "


function loadProducts() {
    const container = document.getElementById('products-container');
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        productCard.innerHTML = `
            <div class="card bg-light border-0" style="width: 18rem;" onclick="productClicked(event)">
                
            <img src="${product.image}" class="card-img-top" alt="${product.title}">
            <div class="card-body">
                <h5 class="card-title">${product.title}</h5>
                <p class="card-text">$ ${product.price}</p>
                <span class="wishlist-icon">&#9825;</span>
            </div>
            </div>
        `;
        container.appendChild(productCard);
    });
}

window.onload = getData;
const products = []
let productsApiResponse = [];

async function getData() {
    console.log("https://fakestoreapi.com/products/category/" + categoryName + "?limit=12")
    const res = await fetch("https://fakestoreapi.com/products/category/" + categoryName);
    productsApiResponse = await res.json();
    console.log(productsApiResponse)
    
    productsApiResponse.forEach(x => {
        let product =  {
            title: x.title,
            price: x.price,
            image: x.image
        }

        products.push(product)
    });
    
    loadProducts();
}
getData()


async function productClicked(event) {
    const card = event.currentTarget;

    // Get the product name from the h2 element
    const productName = card.querySelector('.card-title').textContent;
    console.log(productName)
    //find the project object from products
    const viewingProduct = productsApiResponse.find(product => product.title === productName);
    localStorage.setItem('data', JSON.stringify({ viewingProduct: viewingProduct }));
    //redirect to product.html
    window.location.href = 'productPage.html';

   
}
// fetch('https://fakestoreapi.com/products/category/jewelery')