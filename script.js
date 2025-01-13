const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const clearCart = document.getElementById('clear-btn');
const purchase = document.getElementById('btn');

const AllProducts = document.querySelectorAll('.add-cart');
const homePageProducts = document.querySelectorAll('.add-cart-home');

let carts = document.querySelectorAll('.add-cart');

let homeProducts = [
    {
        name: 'Broken Heart Shirt',
        productNum: 8,
        color: 'White',
        price: 89,
        tag: 'p8', 
        inCart: 0
    }, 
    {
        name: 'Cheetah Print Shirt',
        productNum: 13,
        color: 'Cheetah',
        price: 129,
        tag: 'p13', 
        inCart: 0
    },
    {
        name: 'Sunglasses',
        productNum: 10,
        color: 'Black',
        price: 108,
        tag: 'p10', 
        inCart: 0
    },
    {
        name: 'Striped Shirt',
        productNum: 4,
        color: 'White and Blue',
        price: 78,
        tag: 'p4',
        inCart: 0
    }
];

let products = [
    {
        name: 'Graphic Hoodie',
        productNum: 1,
        color: 'Orange',
        price: 89,
        tag: 'p1',
        inCart: 0
    },
    {
        name: 'Blue Collared Shirt',
        productNum: 2,
        color: 'Blue',
        price: 96,
        tag: 'p2', 
        inCart: 0
    },
    {
        name: 'Teal Shirt',
        productNum: 3,
        color: 'Teal',
        price: 108,
        tag: 'p3', 
        inCart: 0
    },
    {
        name: 'Striped Shirt',
        productNum: 4,
        color: 'White and Blue',
        price: 78,
        tag: 'p4', 
        inCart: 0
    },
    {
        name: 'Baseball Cap',
        productNum: 5,
        color: 'Black',
        price: 68,
        tag: 'p5', 
        inCart: 0
    },
    {
        name: 'Fedora',
        productNum: 6,
        color: 'Brown and Black',
        price: 88,
        tag: 'p6', 
        inCart: 0
    },
    {
        name: 'Leather Jacket',
        productNum: 7,
        color: 'Navy',
        price: 70,
        tag: 'p7', 
        inCart: 0
    },
    {
        name: 'Broken Heart Shirt',
        productNum: 8,
        color: 'White',
        price: 89,
        tag: 'p8', 
        inCart: 0
    },
    {
        name: 'Graphic Shirt',
        productNum: 9,
        color: 'White',
        price: 49,
        tag: 'p9', 
        inCart: 0
    },
    {
        name: 'Sunglasses',
        productNum: 10,
        color: 'Black',
        price: 108,
        tag: 'p10', 
        inCart: 0
    },
    {
        name: 'Red Lens Sunglasses',
        productNum: 11,
        color: 'Pink',
        price: 99,
        tag: 'p11', 
        inCart: 0
    },
    {
        name: 'Metal Frame Sunglasses',
        productNum: 12,
        color: 'Black',
        price: 50,
        tag: 'p12', 
        inCart: 0
    },
    {
        name: 'Cheetah Print Shirt',
        productNum: 13,
        color: 'Cheetah',
        price: 129,
        tag: 'p13', 
        inCart: 0
    },
    {
        name: 'Navy Collared Shirt',
        productNum: 14,
        color: 'Navy',
        price: 38,
        tag: 'p14', 
        inCart: 0
    },
    {
        name: 'White Formal Shirt',
        productNum: 15,
        color: 'White',
        price: 98,
        tag: 'p15', 
        inCart: 0
    },
    {
        name: 'Grey Hoodie',
        productNum: 16,
        color: 'Grey',
        price: 58,
        tag: 'p16', 
        inCart: 0
    },
    {
        name: 'Black Puffer Jacket',
        productNum: 17,
        color: 'Black',
        price: 159,
        tag: 'p17', 
        inCart: 0
    },
    {
        name: 'White Shirt',
        productNum: 18,
        color: 'White',
        price: 28,
        tag: 'p18', 
        inCart: 0
    },
    {
        name: 'Black Coat',
        productNum: 19,
        color: 'Black',
        price: 185,
        tag: 'p19', 
        inCart: 0
    },
    {
        name: 'Leather Jacket',
        productNum: 20,
        color: 'Grey',
        price: 78,
        tag: 'p20',
        inCart: 0
    },
    {
        name: 'Denim Jacket',
        productNum: 21,
        color: 'Blue',
        price: 60,
        tag: 'p21', 
        inCart: 0
    },
    {
        name: 'Grey Dress',
        productNum: 22,
        color: 'Grey',
        price: 59,
        tag: 'p22',
        inCart: 0
    },
    {
        name: 'White Dress Shirt',
        productNum: 23,
        color: 'White Shirt',
        price: 168,
        tag: 'p23', 
        inCart: 0
    },
    {
        name: 'White Shirt',
        productNum: 24,
        color: 'White',
        price: 78,
        tag: 'p24', 
        inCart: 0
    }
];

if(bar){
    bar.addEventListener("click", () => {
        nav.classList.add("active");
    });
}

const close = document.getElementById("close");
if(close){
    close.addEventListener("click", () => {
        nav.classList.remove("active");
    });
}

if(clearCart) {
    clearShoppingCart();
}

function clearShoppingCart() {
    clearCart.addEventListener('click', () => {
        console.log("Clear Cart");
        localStorage.clear();
        location.reload();
    });
}

if(purchase) {
    purchase.addEventListener('click', () => {
        console.log("Completed Purchase");
        alert("Order succesfully completed");
        localStorage.clear();
        location.reload();
    });
}

const cartArr = [];

for(let i = 0; i < AllProducts.length; i++) {
    AllProducts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        console.log(products[i]);
        cartArr.push(products[i]);
        totalCost(products[i]);
    });
}

for(let i = 0; i < homePageProducts.length; i++) {
    homePageProducts[i].addEventListener('click', () => {
        cartNumbers(homeProducts[i]);
        console.log(homeProducts[i]);
        cartArr.push(homeProducts[i]);
        totalCost(homeProducts[i]);
    });
}

function addToCart() {
    console.log("ADDED TO CART");
}


function cartNumbers(product) {
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if(productNumbers){
        localStorage.setItem('cartNumbers', productNumbers + 1);
    } else {
        localStorage.setItem('cartNumbers', 1);
    }

    setItems(product);
}

function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if(cartItems != null) {
        if(cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }

        cartItems[product.tag].inCart += 1; 
    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag] : product
        }
    }
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}
let total = 0;
function totalCost(product) {
    let cartCost = localStorage.getItem('totalCost');
    localStorage.setItem("totalCost", product.price);
    total += product.price;

    if(cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    } else {
        localStorage.setItem("totalCost", product.price);
    }
    console.log(cartCost);
    console.log(product.price);
    console.log(total);
}

function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector('.products');
    let cartCost = localStorage.getItem('totalCost');

    if( cartItems && productContainer ) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class="product">
                <img src="./images/${item.tag}.jpg">
                <span>${item.name}</span>
            </div>
            <div class="price">
                $${item.price}
            </div>
            <div class="quantity">
                <span>${item.inCart}</span>
            </div>
            <div class="total">
                $${item.inCart * item.price}.00
            </div>
            `;
        });

        productContainer.innerHTML += `
        <div class = "totalContainer">
            <h4 class = "totalTitle">
                Total
            </h4>
            <h4 class = "total">
                $${cartCost}.00
            </h4>
        `
    }

}

displayCart();