const addProduct = () =>{
    const productField = document.getElementById('product-name');
    const quantityField = document.getElementById('product-quantity');
    const product = productField.value;
    const quantity = quantityField.value;
    productField.value = '';
    quantityField.value = '';
    console.log(product , quantity);
    displayProduct(product , quantity);
    saveProductToLocalStorage(product , quantity);
}


const displayProduct = (product , quantity) => {
    const ul = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerHTML = `${product} : ${quantity}`;
    ul.appendChild(li);
}

const getStoredShopingCart = () => {
    let cart ={};
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart);
    }
    return cart;
}

const saveProductToLocalStorage = (product , quantity) =>{
const cart = getStoredShopingCart();
cart[product] = quantity;
const cartStringified = JSON.stringify(cart);
localStorage.setItem('cart' , cartStringified);
}

const displayProductFromLocalStorage= ()=>{
    const savedCart = getStoredShopingCart();
    console.log(savedCart);
    for ( const product in savedCart){
        const quantity = savedCart[product];
        console.log(product , quantity);
        displayProduct(product , quantity);
    }
}

displayProductFromLocalStorage();