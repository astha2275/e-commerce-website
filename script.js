document.addEventListener("DOMContentLoaded", () => {
    const products = [
        { id: 1, name: "Men's Jacket", price: 2999, img: "https://source.unsplash.com/200x200/?jacket" },
        { id: 2, name: "Women's Dress", price: 1999, img: "https://source.unsplash.com/200x200/?dress" },
        { id: 3, name: "Casual Shirt", price: 1499, img: "https://source.unsplash.com/200x200/?shirt" },
        { id: 4, name: "Stylish Sneakers", price: 2499, img: "https://source.unsplash.com/200x200/?sneakers" }
    ];

    let cart = [];

    const productList = document.getElementById("product-list");
    const cartCount = document.getElementById("cart-count");

    function updateCartCount() {
        cartCount.textContent = cart.length;
    }

    function addToCart(productId) {
        const product = products.find(p => p.id === productId);
        cart.push(product);
        updateCartCount();
        alert(`${product.name} added to cart!`);
    }

    function renderProducts() {
        productList.innerHTML = "";
        products.forEach(product => {
            productList.innerHTML += `
                <div class="col-md-3 mb-4">
                    <div class="card">
                        <img src="${product.img}" class="card-img-top" alt="${product.name}">
                        <div class="card-body text-center">
                            <h5 class="card-title">${product.name}</h5>
                            <p class="card-text">₹${product.price}</p>
                            <button class="btn btn-primary" onclick="addToCart(${product.id})">Add to Cart</button>
                        </div>
                    </div>
                </div>
            `;
        });
    }

    renderProducts();
});
