// Sample cart data
const cartData = [
    {
        id: 1,
        title: 'Electric Leggings',
        size: 'Medium',
        color: 'Storm',
        price: 145.00,
        quantity: 2,
        image: 'https://via.placeholder.com/100'
    },
    {
        id: 2,
        title: 'Signature Sports Bra',
        size: 'Medium',
        color: 'Red',
        price: 98.00,
        quantity: 1,
        image: 'https://via.placeholder.com/100'
    }
];

// Cart Summary Information
const couponDiscount = 77.60;
const giftCardDiscount = 100.00;
const taxRate = 0.06; // 6% tax rate

// DOM Elements
const cartItemsContainer = document.getElementById('cart-items');
const subtotalElement = document.getElementById('subtotal');
const couponElement = document.getElementById('coupon');
const giftCardElement = document.getElementById('gift-card');
const taxElement = document.getElementById('tax');
const totalElement = document.getElementById('total');

// Render Cart Items
function renderCartItems() {
    cartItemsContainer.innerHTML = ''; // Clear existing items
    let subtotal = 0;

    cartData.forEach(item => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;

        const cartItemHTML = `
            <div class="cart-item list-group-item d-flex align-items-center">
                <img src="${item.image}" alt="${item.title}" class="img-thumbnail me-3">
                <div class="flex-grow-1">
                    <h5 class="mb-1">${item.title}</h5>
                    <p class="mb-1">Size: ${item.size} | Color: ${item.color}</p>
                    <p class="mb-1">$${item.price.toFixed(2)}</p>
                </div>
                <div class="quantity-control d-flex align-items-center">
                    <button class="btn btn-sm" onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span class="mx-2">${item.quantity}</span>
                    <button class="btn btn-sm" onclick="updateQuantity(${item.id}, 1)">+</button>
                </div>
            </div>
        `;
        cartItemsContainer.innerHTML += cartItemHTML;
    });

    updateSummary(subtotal);
}

// Update Cart Summary
function updateSummary(subtotal) {
    const tax = subtotal * taxRate;
    const total = subtotal - couponDiscount - giftCardDiscount + tax;

    subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
    couponElement.textContent = `-$${couponDiscount.toFixed(2)}`;
    giftCardElement.textContent = `-$${giftCardDiscount.toFixed(2)}`;
    taxElement.textContent = `$${tax.toFixed(2)}`;
    totalElement.textContent = `$${total.toFixed(2)}`;
}

// Update Quantity
function updateQuantity(id, change) {
    const item = cartData.find(i => i.id === id);
    if (item) {
        item.quantity += change;
        if (item.quantity < 1) {
            item.quantity = 1; // Prevent quantity from going below 1
        }
        renderCartItems();
    }
}

// Initialize Cart on Page Load
renderCartItems();
