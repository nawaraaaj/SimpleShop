// JavaScript for checkout.html
document.addEventListener('DOMContentLoaded', () => {
    // Redirect to products if cart is empty
    if (cart.length === 0) {
      window.location.href = 'products.html';
      return;
    }
    
    // Render order summary
    renderOrderSummary();
    
    // Handle store address checkbox
    const useStoreAddressCheckbox = document.getElementById('useStoreAddress');
    useStoreAddressCheckbox.addEventListener('change', () => {
      if (useStoreAddressCheckbox.checked) {
        document.getElementById('address').value = 'Roadcess Chowk';
        document.getElementById('city').value = 'Biratnagar';
        document.getElementById('state').value = 'Morang';
        document.getElementById('zipCode').value = '56613';
      } else {
        document.getElementById('address').value = '';
        document.getElementById('zipCode').value = '';
      }
    });
    
    // Handle checkout form submission
    const checkoutForm = document.getElementById('checkout-form');
    checkoutForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Get form data
      const formData = new FormData(checkoutForm);
      const paymentMethod = formData.get('paymentMethod');
      
      // Simulate processing
      const completeOrderBtn = document.getElementById('complete-order-btn');
      completeOrderBtn.disabled = true;
      completeOrderBtn.textContent = 'Processing...';
      
      setTimeout(() => {
        // Clear cart and redirect to success page
        clearCart();
        window.location.href = `success.html?method=${paymentMethod}`;
      }, 1500);
    });
  });
  
  // Render order summary
  function renderOrderSummary() {
    const orderSummary = document.getElementById('order-summary');
    
    let orderItemsHTML = '';
    
    cart.forEach(item => {
      const product = getProductById(item.productId);
      if (product) {
        orderItemsHTML += `
          <div class="order-item">
            <div class="order-item-details">
              <div class="order-item-image">
                <img src="${product.image}" alt="${product.name}">
              </div>
              <div>
                <p class="order-item-name">${product.name}</p>
                <p class="order-item-quantity">Qty: ${item.quantity}</p>
              </div>
            </div>
            <div class="order-item-price">$${formatPrice(product.price * item.quantity)}</div>
          </div>
        `;
      }
    });
    
    const subtotal = calculateCartTotal();
    
    orderSummary.innerHTML = `
      <div class="order-items">
        ${orderItemsHTML}
      </div>
      <div class="cart-summary-divider"></div>
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
    `;
  }