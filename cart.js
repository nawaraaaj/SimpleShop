// Cart functionality
let cart = [];

// Load cart from localStorage
function loadCart() {
  const savedCart = localStorage.getItem('cart');
  if (savedCart) {
    try {
      cart = JSON.parse(savedCart);
    } catch (error) {
      console.error('Failed to load cart from localStorage:', error);
      cart = [];
    }
  }
  updateCartCount();
}

// Save cart to localStorage
function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
}

// Add product to cart
function addToCart(productId) {
  const product = getProductById(productId);
  if (!product) return;

  const existingItem = cart.find(item => item.productId === productId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      productId,
      quantity: 1
    });
  }

  saveCart();
  showToast('Added to cart', `${product.name} has been added to your cart.`);
}

// Remove product from cart
function removeFromCart(productId) {
  cart = cart.filter(item => item.productId !== productId);
  saveCart();
}

// Update product quantity in cart
function updateQuantity(productId, quantity) {
  const item = cart.find(item => item.productId === productId);
  if (item) {
    item.quantity = Math.max(1, quantity);
    saveCart();
  }
}

// Clear cart
function clearCart() {
  cart = [];
  saveCart();
}

// Calculate cart total
function calculateCartTotal() {
  return cart.reduce((total, item) => {
    const product = getProductById(item.productId);
    return total + (product ? product.price * item.quantity : 0);
  }, 0);
}

// Update cart count in header
function updateCartCount() {
  const cartCount = document.getElementById('cart-count');
  if (cartCount) {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;
  }
}

// Show toast notification
function showToast(title, message, duration = 3000) {
  const toast = document.getElementById('toast');
  const toastTitle = document.getElementById('toast-title');
  const toastMessage = document.getElementById('toast-message');

  toastTitle.textContent = title;
  toastMessage.textContent = message;

  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, duration);
}

// Initialize cart on page load
document.addEventListener('DOMContentLoaded', loadCart);

// Theme toggle functionality
document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
  
  // Check for saved theme preference or use the system preference
  const savedTheme = localStorage.getItem('theme');
  
  if (savedTheme === 'dark' || (!savedTheme && prefersDarkScheme.matches)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  
  // Toggle theme when button is clicked
  themeToggle.addEventListener('click', () => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  });
  
  // Mobile menu toggle
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const nav = document.querySelector('.nav');
  
  if (mobileMenuToggle && nav) {
    mobileMenuToggle.addEventListener('click', () => {
      nav.classList.toggle('active');
    });
  }
});