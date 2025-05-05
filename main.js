// Main JavaScript for index.html
document.addEventListener('DOMContentLoaded', () => {
    // Load featured products
    const featuredProductsContainer = document.getElementById('featured-products');
    if (featuredProductsContainer) {
      const featuredProducts = products.slice(0, 4);
      
      featuredProducts.forEach(product => {
        const productCard = createProductCard(product);
        featuredProductsContainer.appendChild(productCard);
      });
    }
  });
  
  // Create product card element
  function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    card.innerHTML = `
      <a href="product-details.html?id=${product.id}">
        <div class="product-image">
          <img src="${product.image}" alt="${product.name}">
        </div>
      </a>
      <div class="product-info">
        <a href="product-details.html?id=${product.id}">
          <h3 class="product-name">${product.name}</h3>
        </a>
        <p class="product-description">${product.description}</p>
      </div>
      <div class="product-footer">
        <div class="product-price">$${formatPrice(product.price)}</div>
        <button class="btn btn-secondary add-to-cart-btn" data-product-id="${product.id}">
          <i class="fas fa-shopping-cart"></i> Add to Cart
        </button>
      </div>
    `;
    
    // Add event listener to the Add to Cart button
    const addToCartBtn = card.querySelector('.add-to-cart-btn');
    addToCartBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const productId = addToCartBtn.getAttribute('data-product-id');
      addToCart(productId);
    });
    
    return card;
  }