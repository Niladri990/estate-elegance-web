
export interface Property {
  id: string;
  title: string;
  price: number;
  address: string;
  bedrooms: number;
  bathrooms: number;
  area: number; // in sqft
  description: string;
  features: string[];
  type: "Apartment" | "House" | "Villa" | "Penthouse" | "Commercial";
  status: "For Sale" | "For Rent" | "Sold";
  images: string[];
  featured?: boolean;
}

export const properties: Property[] = [
  {
    id: "prop-001",
    title: "Modern Luxury Apartment",
    price: 450000,
    address: "123 Park Avenue, New York, NY",
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    description: "Stunning modern apartment with amazing city views. This newly renovated unit features high-end finishes, open concept living, and a chef's kitchen with premium appliances. Building amenities include 24/7 concierge, fitness center, and rooftop terrace.",
    features: ["Central AC", "Hardwood Floors", "In-unit Laundry", "Balcony", "Fitness Center", "24/7 Security"],
    type: "Apartment",
    status: "For Sale",
    images: [
      "https://images.unsplash.com/photo-1484154218962-a197022b5858",
      "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3",
      "https://images.unsplash.com/photo-1556912998-c57cc6b63cd7"
    ],
    featured: true
  },
  {
    id: "prop-002",
    title: "Spacious Family Home",
    price: 850000,
    address: "456 Maple Street, Boston, MA",
    bedrooms: 4,
    bathrooms: 3,
    area: 2500,
    description: "Beautiful family home in a quiet neighborhood. This charming property offers ample space with four bedrooms, a finished basement, updated kitchen, and landscaped backyard with a deck perfect for entertaining.",
    features: ["Finished Basement", "Attached Garage", "Fireplace", "Updated Kitchen", "Private Backyard", "Central Heating"],
    type: "House",
    status: "For Sale",
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      "https://images.unsplash.com/photo-1600607687644-a7e0722b6aa0"
    ],
    featured: true
  },
  {
    id: "prop-003",
    title: "Downtown Loft",
    price: 2800,
    address: "789 Urban Street, San Francisco, CA",
    bedrooms: 1,
    bathrooms: 1,
    area: 850,
    description: "Trendy downtown loft with industrial character. High ceilings, exposed brick, and large windows create a stylish urban living space. Walking distance to restaurants, shops, and public transportation.",
    features: ["High Ceilings", "Exposed Brick", "Open Floor Plan", "Stainless Steel Appliances", "Pet Friendly", "City Views"],
    type: "Apartment",
    status: "For Rent",
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
    ],
    featured: true
  },
  {
    id: "prop-004",
    title: "Luxury Beachfront Villa",
    price: 2500000,
    address: "101 Ocean Drive, Miami, FL",
    bedrooms: 5,
    bathrooms: 6,
    area: 4500,
    description: "Exquisite beachfront villa with breathtaking ocean views. This luxurious property features premium finishes, spacious living areas, a chef's kitchen, private pool, and direct beach access. Perfect for those seeking an exclusive coastal lifestyle.",
    features: ["Ocean Views", "Private Pool", "Beach Access", "Smart Home Features", "Wine Cellar", "Home Theater"],
    type: "Villa",
    status: "For Sale",
    images: [
      "https://images.unsplash.com/photo-1613977257363-707ba9348227",
      "https://images.unsplash.com/photo-1613977257592-4a9a0f376d57",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
    ],
    featured: false
  },
  {
    id: "prop-005",
    title: "Contemporary City Apartment",
    price: 375000,
    address: "202 Downtown Blvd, Chicago, IL",
    bedrooms: 2,
    bathrooms: 1,
    area: 950,
    description: "Modern city apartment in a prime location. This stylish unit features contemporary design, an updated kitchen with granite countertops, and in-unit laundry. Building amenities include a fitness center and rooftop lounge.",
    features: ["Granite Countertops", "Stainless Appliances", "In-unit Laundry", "Hardwood Floors", "Fitness Center", "Rooftop Lounge"],
    type: "Apartment",
    status: "For Sale",
    images: [
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
      "https://images.unsplash.com/photo-1556912167-f556f1f39fdf",
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0"
    ]
  },
  {
    id: "prop-006",
    title: "Suburban Townhouse",
    price: 1800,
    address: "303 Pleasant Lane, Denver, CO",
    bedrooms: 3,
    bathrooms: 2,
    area: 1600,
    description: "Lovely townhouse in a peaceful suburban community. This well-maintained home offers three bedrooms, updated bathrooms, and a private patio. Community amenities include a pool and playground.",
    features: ["Updated Bathrooms", "Private Patio", "Community Pool", "Playground", "Ample Storage", "Attached Garage"],
    type: "House",
    status: "For Rent",
    images: [
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c",
      "https://images.unsplash.com/photo-1574643156929-51fa098b0394"
    ]
  }
];

export const getPropertyById = (id: string): Property | undefined => {
  return properties.find(property => property.id === id);
};

export const getFeaturedProperties = (): Property[] => {
  return properties.filter(property => property.featured);
};

export const filterProperties = (
  filters: {
    type?: string;
    status?: string;
    minPrice?: number;
    maxPrice?: number;
    bedrooms?: number;
  }
): Property[] => {
  return properties.filter(property => {
    // Check type filter
    if (filters.type && property.type !== filters.type) {
      return false;
    }
    
    // Check status filter
    if (filters.status && property.status !== filters.status) {
      return false;
    }
    
    // Check price range
    if (filters.minPrice && property.price < filters.minPrice) {
      return false;
    }
    if (filters.maxPrice && property.price > filters.maxPrice) {
      return false;
    }
    
    // Check bedrooms
    if (filters.bedrooms && property.bedrooms < filters.bedrooms) {
      return false;
    }
    
    return true;
  });
};
