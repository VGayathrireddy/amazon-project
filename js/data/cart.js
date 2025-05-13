export  let cart = JSON.parse(localStorage.getItem('cart'));

/*
export let cart = [{
        productId : "3",
        quantity: 2 
    }, {
        productId: "111",
        quantity: 1
}];
*/

if (!cart) {
    cart = [{
        productId : "3",
        quantity: 2 
    }, {
        productId: "111",
        quantity: 1
    }];
}

function saveToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}


export function addToCart(productId) {
    let matchingItem;

    
    cart.forEach((cartItem) => {
        if (productId == cartItem.productId) {
            matchingItem = cartItem;
        }
    });

    if (matchingItem) {
        matchingItem.quantity += 1;
    } else {
        cart.push({
            productId: productId,
            quantity : 1
        });
    }

    /*
    const quantitySelector = document.querySelector(`.js-quantity-selector-${productId}`);

    const quantity = Number(quantitySelector.value);


    if (matchingItem) {
        matchingItem.quantity += quantity;
    } else {
        cart.push({
            productId: productId,
            quantity : quantity
        });
    }
    */
    
    saveToStorage();
}

export function removeFromCart(productId) {
    const newCart = [];

    cart.forEach((cartItem) => {
        if (cartItem.productId != productId) {
            newCart.push(cartItem);
        }
    });

    cart = newCart;

    saveToStorage();    
}

