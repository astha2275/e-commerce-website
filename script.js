document.addEventListener("DOMContentLoaded", () => {
    // Dummy User for Login (Replace with Backend Authentication)
    const dummyUser = {
        email: "user@example.com",
        password: "password123"
    };

    const loginForm = document.getElementById("login-form");
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();
            
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            if (email === dummyUser.email && password === dummyUser.password) {
                alert("Login successful!");
                localStorage.setItem("isLoggedIn", "true");
                window.location.href = "index.html"; // Redirect to Homepage
            } else {
                alert("Invalid email or password!");
            }
        });
    }

    // Logout Functionality
    const logoutBtn = document.getElementById("logout-btn");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
            localStorage.removeItem("isLoggedIn");
            alert("You have logged out.");
            window.location.href = "login.html";
        });
    }

    // Check if user is logged in
    function checkLoginStatus() {
        return localStorage.getItem("isLoggedIn") === "true";
    }

    // Product Listing for Homepage
    const products = [
        { id: 1, name: "Men's Jacket", price: 2999, img: "https://source.unsplash.com/200x200/?jacket" },
        { id: 2, name: "Women's Dress", price: 1999, img: "https://source.unsplash.com/200x200/?dress" },
        { id: 3, name: "Casual Shirt", price: 1499, img: "https://source.unsplash.com/200x200/?shirt" },
        { id: 4, name: "Stylish Sneakers", price: 2499, img: "https://source.unsplash.com/200x200/?sneakers" }
    ];

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const productList = document.getElementById("product-list");
    const cartCount = document.getElementById("cart-count");

    function updateCartCount() {
        cartCount.textContent = cart.length;
    }

    function addToCart(productId) {
        if (!checkLoginStatus()) {
            alert("Please log in to add items to the cart!");
            window.location.href = "login.html";
            return;
        }
        const product = products.find(p => p.id === productId);
        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartCount();
        alert(`${product.name} added to cart!`);
    }

    function renderProducts() {
        if (!productList) return;
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
    updateCartCount();
});
