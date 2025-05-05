// JavaScript for products.html
document.addEventListener('DOMContentLoaded', () => {
    // Get query parameters
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    
    // Update page title and category banner
    const productsTitle = document.getElementById('products-title');
    const categoryBanner = document.getElementById('category-banner');
    
    if (category) {
      const categoryName = category.charAt(0).toUpperCase() + category.slice(1);
      productsTitle.textContent = `${categoryName} Products`;
      
      // Add category banner
      if (categoryImages[category]) {
        categoryBanner.innerHTML = `
          <img src="${categoryImages[category]}" alt="${categoryName}">
          <div class="category-banner-overlay">
            <h1>${categoryName} Products</h1>
          </div>
        `;
      }
    } else {
      productsTitle.textContent = 'All Products';
      categoryBanner.innerHTML = '';
    }
    
    // Load products
    const productsGrid = document.getElementById('products-grid');
    const filteredProducts = getProductsByCategory(category);
    
    filteredProducts.forEach(product => {
      const productCard = createProductCard(product);
      productsGrid.appendChild(productCard);
    });
  });