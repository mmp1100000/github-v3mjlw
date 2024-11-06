import { useState, useEffect } from 'react';

// Sample listings data with real demo images
const sampleListings = [
  {
    id: 1,
    title: "Food Corner",
    category: "Restaurant",
    rating: 5,
    reviews: 2,
    price: { min: 5, max: 80 },
    phone: "+98 (265) 3652 - 05",
    location: "California, USA",
    status: "open",
    image: "https://picsum.photos/id/431/800/600",
    featured: true
  },
  {
    id: 2,
    title: "Luxury Hotel & Spa",
    category: "Hotel",
    rating: 4,
    reviews: 15,
    price: { min: 150, max: 500 },
    phone: "+98 (265) 3652 - 05",
    location: "New York, USA",
    status: "open",
    image: "https://picsum.photos/id/429/800/600",
    featured: true
  },
  {
    id: 3,
    title: "Central Museum",
    category: "Museum",
    rating: 5,
    reviews: 8,
    price: { min: 10, max: 25 },
    phone: "+98 (265) 3652 - 05",
    location: "Chicago, USA",
    status: "open",
    image: "https://picsum.photos/id/403/800/600"
  },
  {
    id: 4,
    title: "Fitness Zone",
    category: "Fitness",
    rating: 4,
    reviews: 12,
    price: { min: 30, max: 100 },
    phone: "+98 (265) 3652 - 05",
    location: "Los Angeles, USA",
    status: "open",
    image: "https://picsum.photos/id/416/800/600",
    featured: true
  },
  {
    id: 5,
    title: "Gaming Paradise",
    category: "Entertainment",
    rating: 5,
    reviews: 20,
    price: { min: 15, max: 45 },
    phone: "+98 (265) 3652 - 05",
    location: "Miami, USA",
    status: "closed",
    image: "https://picsum.photos/id/447/800/600"
  },
  {
    id: 6,
    title: "Shopping Mall",
    category: "Shopping",
    rating: 4,
    reviews: 25,
    price: { min: 0, max: 0 },
    phone: "+98 (265) 3652 - 05",
    location: "San Francisco, USA",
    status: "open",
    image: "https://picsum.photos/id/535/800/600",
    featured: true
  }
];

export const useListings = (filters = {}) => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate API call delay
    const timer = setTimeout(() => {
      try {
        let filteredListings = [...sampleListings];

        if (filters.featured === 'true') {
          filteredListings = filteredListings.filter(listing => listing.featured);
        }

        if (filters.category) {
          filteredListings = filteredListings.filter(listing => 
            listing.category.toLowerCase() === filters.category.toLowerCase()
          );
        }

        if (filters.location) {
          filteredListings = filteredListings.filter(listing =>
            listing.location.toLowerCase().includes(filters.location.toLowerCase())
          );
        }

        if (filters.search) {
          filteredListings = filteredListings.filter(listing =>
            listing.title.toLowerCase().includes(filters.search.toLowerCase()) ||
            listing.location.toLowerCase().includes(filters.search.toLowerCase()) ||
            listing.category.toLowerCase().includes(filters.search.toLowerCase())
          );
        }

        setListings(filteredListings);
        setLoading(false);
      } catch (err) {
        setError('Error filtering listings');
        setLoading(false);
      }
    }, 500); // Simulate network delay

    return () => clearTimeout(timer);
  }, [JSON.stringify(filters)]);

  return { listings, loading, error };
};