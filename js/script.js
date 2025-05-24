let cart = []
let currentCategory = 'all';

const categoryLinks = document.querySelectorAll('nav a');
const categoryCards = document.querySelectorAll('.category-card');
const productsSection = document.getElementById('products-section')

document.addEventListener('DOMContentLoaded', () => {
    loadProducts('all');

    categoryLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const category = link.dataset.category;
            if (category) {
                currentCategory = category; loadProducts(category);

                categoryLinks.forEach(I => I.classList.remove('active'));
                link.classList.add('active');
            }

        });
    });
    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            const category = card.dataset.category;
            currentCategory = category;
            loadProducts(category);

            categoryLinks.forEach(I => I.classList.remove('active'));

            document.querySelector(a[data-category="${category}"]).clasList.add('active'));
        });
    });

function loadProducts(category) {
    productsSection.innerHTML = '<h2>Loading products....</h2>';

    setTimeout(() => {
        let products = [];

        if (category === 'all'|| category === 'bags') {
           products = products.concat(bagsProducts);
        }
          if (category === 'all'|| category === 'jewelry') {
           products = products.concat(jewelryProducts);
          }
             if (category === 'all'|| category === 'dresses') {
           products = products.concat(dressesProducts);
             }
             if (category === 'all'|| category === 'watches') {
           products = products.concat(watchesProducts);
    }

    displayProducts(products);
}, 500);
}

function displayProducts(products) {
    if (products.length === 0) {
        productsSection.innerHTML = '<h2>No products found</h2>';
        return;
    }

    productsSection.innerHTML = '<h2>${currentCategory === 'all'? 'All Products':currentCategory.charAt(0).toUpperCase() + currentCategory.slice(1)}</h2>
    <div class="products-grid"></div>';

    const productGrid = document.querySelector('.product-grid');
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML ='
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.descrition}</p>
        <div class="price">$${product.price.toFixed(2)}</div>
        <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>';

        productGrid.appendChild(productCard);
    })
document.querySelectorAll('.add-to-card').forEach(button =>{
    button.addEventListener('click',addToCart);
})
}

function addToCart(e) {
    const product = getAllProducts().find(p => p.id == productId);

    cart,push(product);
    updateCartCount();
}

function updateCartCount() {
document.querySelector('cart').textContent = Cart (${cart.lenght});
}

functiongetAllProducts() {
    return
    [bagsProducts, ...jewelryProducts, ...dressesProducts, ...watchesProducts];
}