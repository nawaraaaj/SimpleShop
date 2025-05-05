// JavaScript for success.html
document.addEventListener('DOMContentLoaded', () => {
    // Get payment method from URL
    const urlParams = new URLSearchParams(window.location.search);
    const paymentMethod = urlParams.get('method') || 'card';
    
    // Generate random order ID
    const orderId = `ORD-${Math.floor(100000 + Math.random() * 900000)}`;
    document.getElementById('order-id').textContent = `Order #${orderId}`;
    
    // Set success message based on payment method
    const successMessage = document.getElementById('success-message');
    
    if (paymentMethod === 'cod') {
      successMessage.innerHTML = `
        <p class="success-message">
          Your order has been placed successfully with Cash on Delivery. We'll deliver your items to the address you provided. 
          Please have the exact amount ready when your package arrives.
        </p>
        <div class="store-address">
          <i class="fas fa-map-marker-alt"></i>
          <p>Our Store: Roadcess Chowk, Biratnagar, Morang, Nepal</p>
        </div>
      `;
    } else {
      successMessage.innerHTML = `
        <p class="success-message">
          Your payment has been processed successfully. We'll send you a confirmation email shortly with your order details.
        </p>
      `;
    }
  });