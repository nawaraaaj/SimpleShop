// JavaScript for product-details.html
document.addEventListener('DOMContentLoaded', () => {
    // Get product ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    
    if (!productId) {
      window.location.href = 'products.html';
      return;
    }
    
    const product = getProductById(productId);
    
    if (!product) {
      window.location.href = 'products.html';
      return;
    }
    
    // Update page title
    document.title = `${product.name} - SimpleShop`;
    
    // Render product details
    const productDetailsContent = document.getElementById('product-details-content');
    
    productDetailsContent.innerHTML = `
      <div class="product-details-image">
        <img src="${product.image}" alt="${product.name}">
      </div>
      <div class="product-details-info">
        <h1>${product.name}</h1>
        <span class="product-details-category">${product.category}</span>
        <div class="product-details-price">$${formatPrice(product.price)}</div>
        <p class="product-details-description">${product.description}</p>
        <button class="btn btn-primary add-to-cart-btn" data-product-id="${product.id}">
          <i class="fas fa-shopping-cart"></i> Add to Cart
        </button>
      </div>
    `;
    
    // Add event listener to the Add to Cart button
    const addToCartBtn = document.querySelector('.add-to-cart-btn');
    addToCartBtn.addEventListener('click', () => {
      const productId = addToCartBtn.getAttribute('data-product-id');
      addToCart(productId);
    });
  });