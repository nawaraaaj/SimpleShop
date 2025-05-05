// JavaScript for cart.html
document.addEventListener('DOMContentLoaded', () => {
    renderCart();
  });
  
  // Render cart content
  function renderCart() {
    const cartContent = document.getElementById('cart-content');
    
    if (cart.length === 0) {
      cartContent.innerHTML = `
        <div class="cart-empty">
          <div class="cart-empty-icon">
            <i class="fas fa-shopping-cart"></i>
          </div>
          <h2>Your cart is empty</h2>
          <p>Looks like you haven't added anything to your cart yet.</p>
          <a href="products.html" class="btn btn-primary">
            <i class="fas fa-arrow-left"></i> Continue Shopping
          </a>
        </div>
      `;
      return;
    }
    
    // Create cart items and summary
    let cartItemsHTML = '';
    
    cart.forEach(item => {
      const product = getProductById(item.productId);
      if (product) {
        cartItemsHTML += `
          <div class="cart-item">
            <div class="cart-item-image">
              <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="cart-item-details">
              <h3 class="cart-item-name">${product.name}</h3>
              <p class="cart-item-price">$${formatPrice(product.price)}</p>
            </div>
            <div class="cart-item-actions">
              <button class="cart-item-remove" data-product-id="${product.id}">
                <i class="fas fa-trash"></i>
              </button>
              <div class="cart-item-quantity">
                <button class="decrease-quantity" data-product-id="${product.id}">
                  <i class="fas fa-minus"></i>
                </button>
                <span>${item.quantity}</span>
                <button class="increase-quantity" data-product-id="${product.id}">
                  <i class="fas fa-plus"></i>
                </button>
              </div>
            </div>
          </div>
        `;
      }
    });
    
    const subtotal = calculateCartTotal();
    
    cartContent.innerHTML = `
      <div class="cart-grid">
        <div class="cart-items">
          ${cartItemsHTML}
        </div>
        <div class="cart-summary">
          <h2>Order Summary</h2>
          <div class="cart-summary-item">
            <span>Subtotal</span>
            <span>$${formatPrice(subtotal)}</span>
          </div>
          <div class="cart-summary-item">
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div class="cart-summary-divider"></div>
          <div class="cart-summary-total">
            <span>Total</span>
            <span>$${formatPrice(subtotal)}</span>
          </div>
          <div class="cart-summary-actions">
            <a href="checkout.html" class="btn btn-primary btn-block">Proceed to Checkout</a>
            <a href="products.html" class="btn btn-secondary btn-block">Continue Shopping</a>
          </div>
        </div>
      </div>
    `;
    
    // Add event listeners to cart item buttons
    document.querySelectorAll('.cart-item-remove').forEach(button => {
      button.addEventListener('click', () => {
        const productId = button.getAttribute('data-product-id');
        removeFromCart(productId);
        renderCart();
      });
    });
    
    document.querySelectorAll('.decrease-quantity').forEach(button => {
      button.addEventListener('click', () => {
        const productId = button.getAttribute('data-product-id');
        const item = cart.find(item => item.productId === productId);
        if (item) {
          updateQuantity(productId, item.quantity - 1);
          renderCart();
        }
      });
    });
    
    document.querySelectorAll('.increase-quantity').forEach(button => {
      button.addEventListener('click', () => {
        const productId = button.getAttribute('data-product-id');
        const item = cart.find(item => item.productId === productId);
        if (item) {
          updateQuantity(productId, item.quantity + 1);
          renderCart();
        }
      });
    });
  }