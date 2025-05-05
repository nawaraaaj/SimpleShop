// Product data
const products = [
    {
      id: "1",
      name: "Wireless Headphones",
      description: "Premium wireless headphones with noise cancellation technology for an immersive audio experience.",
      price: 129.99,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
      category: "electronics",
    },
    {
      id: "2",
      name: "Smart Watch",
      description: "Track your fitness goals, receive notifications, and more with this feature-packed smart watch.",
      price: 199.99,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
      category: "electronics",
    },
    {
      id: "3",
      name: "Casual T-Shirt",
      description: "Comfortable cotton t-shirt perfect for everyday wear. Available in multiple colors.",
      price: 24.99,
      image:
        "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dCUyMHNoaXJ0fGVufDB8fDB8fHww",
      category: "clothing",
    },
    {
      id: "4",
      name: "Running Shoes",
      description: "Lightweight and supportive running shoes designed for maximum comfort and performance.",
      price: 89.99,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D",
      category: "clothing",
    },
    {
      id: "5",
      name: "Coffee Maker",
      description: "Programmable coffee maker with multiple brewing options for the perfect cup every time.",
      price: 79.99,
      image:
        "https://images.unsplash.com/photo-1570087935869-9da023a88cdc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvZmZlZSUyMG1ha2VyfGVufDB8fDB8fHww",
      category: "home",
    },
    {
      id: "6",
      name: "Desk Lamp",
      description: "Adjustable desk lamp with multiple brightness levels and color temperatures.",
      price: 49.99,
      image:
        "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVzayUyMGxhbXB8ZW58MHx8MHx8fDA%3D",
      category: "home",
    },
    {
      id: "7",
      name: "Bluetooth Speaker",
      description: "Portable Bluetooth speaker with 20-hour battery life and water-resistant design.",
      price: 69.99,
      image:
        "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ymx1ZXRvb3RoJTIwc3BlYWtlcnxlbnwwfHwwfHx8MA%3D%3D",
      category: "electronics",
    },
    {
      id: "8",
      name: "Denim Jeans",
      description: "Classic denim jeans with a comfortable stretch fit. Available in multiple washes.",
      price: 59.99,
      image:
        "https://images.unsplash.com/photo-1582552938357-32b906df40cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGplYW5zfGVufDB8fDB8fHww",
      category: "clothing",
    },
  ];
  
  // Category image mapping
  const categoryImages = {
    electronics:
      "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZWxlY3Ryb25pY3N8ZW58MHx8MHx8fDA%3D",
    clothing:
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNsb3RoaW5nfGVufDB8fDB8fHww",
    home: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvbWUlMjBkZWNvcnxlbnwwfHwwfHx8MA%3D%3D",
  };
  
  // Get product by ID
  function getProductById(id) {
    return products.find(product => product.id === id);
  }
  
  // Get products by category
  function getProductsByCategory(category) {
    return category ? products.filter(product => product.category === category) : products;
  }
  
  // Format price
  function formatPrice(price) {
    return price.toFixed(2);
  }