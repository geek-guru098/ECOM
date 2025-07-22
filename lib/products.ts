import type { Product } from "@/contexts/cart-context"

export const products: Product[] = [
  // Phones
  {
    id: "1",
    name: "iPhone 15 Pro Max",
    price: 179900,
    image: "/images/iphone-15-pro-max.png",
    category: "phones",
    description: "The most advanced iPhone ever with titanium design, A17 Pro chip, and professional camera system.",
    specs: {
      Display: '6.7" Super Retina XDR',
      Chip: "A17 Pro",
      Camera: "48MP Main + 12MP Ultra Wide + 12MP Telephoto",
      Storage: "256GB",
      Battery: "Up to 29 hours video playback",
    },
    rating: 4.8,
    reviews: 1247,
    inStock: true,
  },
  {
    id: "2",
    name: "Samsung Galaxy S24 Ultra",
    price: 194900,
    image: "/images/samsung-galaxy-s24-ultra.png",
    category: "phones",
    description: "Ultimate Android flagship with S Pen, 200MP camera, and AI-powered features.",
    specs: {
      Display: '6.8" Dynamic AMOLED 2X',
      Processor: "Snapdragon 8 Gen 3",
      Camera: "200MP Main + 50MP Periscope + 12MP Ultra Wide + 10MP Telephoto",
      Storage: "256GB",
      Battery: "5000mAh",
    },
    rating: 4.7,
    reviews: 892,
    inStock: true,
  },
  {
    id: "3",
    name: "Google Pixel 8 Pro",
    price: 149900,
    image: "/images/google-pixel-8-pro.png",
    category: "phones",
    description: "Pure Android experience with advanced AI photography and Magic Eraser.",
    specs: {
      Display: '6.7" LTPO OLED',
      Chip: "Google Tensor G3",
      Camera: "50MP Main + 48MP Ultra Wide + 48MP Telephoto",
      Storage: "128GB",
      Battery: "5050mAh",
    },
    rating: 4.6,
    reviews: 634,
    inStock: true,
  },

  // Laptops
  {
    id: "4",
    name: 'MacBook Pro 16" M3 Max',
    price: 524900,
    image: "/images/macbook-pro-16-m3.png",
    category: "laptops",
    description: "Professional laptop with M3 Max chip, stunning Liquid Retina XDR display, and all-day battery life.",
    specs: {
      Display: '16.2" Liquid Retina XDR',
      Chip: "Apple M3 Max",
      Memory: "36GB Unified Memory",
      Storage: "1TB SSD",
      Battery: "Up to 22 hours",
    },
    rating: 4.9,
    reviews: 456,
    inStock: true,
  },
  {
    id: "5",
    name: "Dell XPS 15",
    price: 344900,
    image: "/images/dell-xps-15.png",
    category: "laptops",
    description: "Premium Windows laptop with InfinityEdge display and powerful performance for creators.",
    specs: {
      Display: '15.6" 4K OLED Touch',
      Processor: "Intel Core i7-13700H",
      Memory: "32GB DDR5",
      Storage: "1TB PCIe SSD",
      Graphics: "NVIDIA RTX 4060",
    },
    rating: 4.5,
    reviews: 723,
    inStock: true,
  },
  {
    id: "6",
    name: "ASUS ROG Zephyrus G16",
    price: 419900,
    image: "/images/asus-rog-zephyrus-g16.png",
    category: "laptops",
    description: "High-performance gaming laptop with RTX 4070 and ultra-slim design.",
    specs: {
      Display: '16" 2.5K 240Hz',
      Processor: "Intel Core i9-13900H",
      Memory: "32GB DDR5",
      Storage: "1TB PCIe 4.0 SSD",
      Graphics: "NVIDIA RTX 4070",
    },
    rating: 4.7,
    reviews: 289,
    inStock: true,
  },

  // Wearables
  {
    id: "7",
    name: "Apple Watch Series 9",
    price: 64400,
    image: "/images/apple-watch-series-9.png",
    category: "wearables",
    description: "Advanced health monitoring, fitness tracking, and seamless iPhone integration.",
    specs: {
      Display: "45mm Always-On Retina",
      Chip: "S9 SiP",
      Health: "ECG, Blood Oxygen, Temperature",
      Battery: "Up to 18 hours",
      Connectivity: "GPS + Cellular",
    },
    rating: 4.6,
    reviews: 1834,
    inStock: true,
  },
  {
    id: "8",
    name: "Samsung Galaxy Watch6 Classic",
    price: 59900,
    image: "/images/samsung-galaxy-watch6-classic.png",
    category: "wearables",
    description: "Premium smartwatch with rotating bezel and comprehensive health tracking.",
    specs: {
      Display: "47mm Super AMOLED",
      Processor: "Exynos W930",
      Health: "BioActive Sensor, Sleep Tracking",
      Battery: "Up to 40 hours",
      Connectivity: "Bluetooth, Wi-Fi, LTE",
    },
    rating: 4.4,
    reviews: 967,
    inStock: true,
  },

  // Accessories
  {
    id: "9",
    name: "AirPods Pro (2nd Gen)",
    price: 37400,
    image: "/images/airpods-pro-2nd-gen.png",
    category: "accessories",
    description: "Premium wireless earbuds with active noise cancellation and spatial audio.",
    specs: {
      Audio: "Adaptive Audio, Spatial Audio",
      "Noise Cancellation": "Active Noise Cancellation",
      Battery: "Up to 6 hours (30 hours with case)",
      Connectivity: "Bluetooth 5.3",
      Features: "Hey Siri, Touch Control",
    },
    rating: 4.7,
    reviews: 2156,
    inStock: true,
  },
  {
    id: "10",
    name: "Anker PowerCore 26800",
    price: 11900,
    image: "/images/anker-powercore-26800.png",
    category: "accessories",
    description: "High-capacity portable charger with fast charging for multiple devices.",
    specs: {
      Capacity: "26800mAh",
      Output: "3 USB Ports",
      Input: "Micro USB + USB-C",
      Charging: "PowerIQ 2.0",
      Weight: "1.2 lbs",
    },
    rating: 4.5,
    reviews: 3421,
    inStock: true,
  },
  {
    id: "11",
    name: "Logitech MX Master 3S",
    price: 14900,
    image: "/images/logitech-mx-master-3s.png",
    category: "accessories",
    description: "Advanced wireless mouse with precision tracking and customizable buttons.",
    specs: {
      Sensor: "Darkfield 8000 DPI",
      Connectivity: "Bluetooth, USB-C",
      Battery: "Up to 70 days",
      Compatibility: "Windows, Mac, Linux",
      Features: "MagSpeed Scroll, Side Scroll",
    },
    rating: 4.8,
    reviews: 1567,
    inStock: true,
  },
  {
    id: "12",
    name: 'iPad Pro 12.9" (6th Gen)',
    price: 164900,
    image: "/images/ipad-pro-12-9.png",
    category: "accessories",
    description: "Professional tablet with M2 chip, Liquid Retina XDR display, and Apple Pencil support.",
    specs: {
      Display: '12.9" Liquid Retina XDR',
      Chip: "Apple M2",
      Storage: "256GB",
      Camera: "12MP Wide + 10MP Ultra Wide",
      Connectivity: "Wi-Fi 6E + 5G",
    },
    rating: 4.8,
    reviews: 892,
    inStock: true,
  },
]

export function getProductsByCategory(category: string): Product[] {
  return products.filter((product) => product.category === category)
}

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id)
}

export function getFeaturedProducts(): Product[] {
  return products.slice(0, 8)
}

export function getLatestProducts(): Product[] {
  return products.slice(-4)
}

// Utility function to format Nepali currency
export function formatNepaliCurrency(amount: number): string {
  return `Rs ${amount.toLocaleString("en-NP")}`
}
