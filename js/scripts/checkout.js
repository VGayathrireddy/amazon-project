import {cart, removeFromCart} from '../data/cart.js';
import {products} from '../data/products.js';


let  cartSummaryHTML= '';

cart.forEach((cartItem) => {

    const productId = cartItem.productId;

    let matchingProduct;

    products.forEach((product) => {
        if (product.id === productId) {
            matchingProduct = product;
        }
    });

    cartSummaryHTML += `
        <div class="cart-item-container js-cart-item-container-${matchingProduct.id}">
            <div class="delivery-date">
                Delivery date: Wednesday, April 23
            </div>

            <div class="cart-item-details-grid">
                <img class="product-image" src="${matchingProduct.image}">

                <div class="cart-item-details">
                    <div class="product-name">
                        ${matchingProduct.name}
                    </div>
                    <div class="product-price" style="font-family: sans-serif;">
                        &#8377;${matchingProduct.priceRupees}
                    </div>
                    <div class="product-quantity">
                        <span>Quantity: <span class="quantity-label">${cartItem.quantity}</span>
                        <span class="update-quantity-link link-primary">Update</span>
                        <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${matchingProduct.id}">Delete</span>
                    </div>
                </div>

                <div class="delivery-options">
                    <div class="delivery-options-title">Choose a delivery option:</div>
                    <div class="delivery-option">
                        <input type="radio" checked class="delivery-option-input" name="delivery-option-${matchingProduct.id}">
                        <div>
                            <div class="delivery-option-date">Monday, April 23</div>
                            <div class="delivery-option-price" style="font-family: sans-serif;">FREE Shipping</div>
                        </div>
                    </div>

                    <div class="delivery-option">
                        <input type="radio" checked class="delivery-option-input" name="delivery-option-${matchingProduct.id}">
                        <div>
                            <div class="delivery-option-date">Friday, April 20</div>
                            <div class="delivery-option-price" style="font-family: sans-serif;">&#8377;40 Shipping</div>
                        </div>
                    </div>

                    <div class="delivery-option">
                        <input type="radio" checked class="delivery-option-input" name="delivery-option-${matchingProduct.id}">
                        <div>
                            <div class="delivery-option-date">Sunday, April 15</div>
                            <div class="delivery-option-price" style="font-family: sans-serif;">&#8377;100 Shipping</div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    `;
});

document.querySelector('.js-order-summary').innerHTML = cartSummaryHTML;

document.querySelectorAll('.js-delete-link').forEach((link) => {
    link.addEventListener('clcik', () => {
        const productId = link.dataset.productId;
        removeFromCart(productId);

        const container = document.querySelector(`.js-cart-item-container-${productId}`);
        container.remove();
    });
});