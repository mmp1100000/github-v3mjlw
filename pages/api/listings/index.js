// Sample listings data with real demo images
const listings = [
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
  },
  {
    id: 7,
    title: "Art Gallery",
    category: "Art",
    rating: 5,
    reviews: 10,
    price: { min: 5, max: 15 },
    phone: "+98 (265) 3652 - 05",
    location: "Boston, USA",
    status: "open",
    image: "https://picsum.photos/id/525/800/600"
  },
  {
    id: 8,
    title: "Concert Hall",
    category: "Entertainment",
    rating: 4,
    reviews: 18,
    price: { min: 50, max: 200 },
    phone: "+98 (265) 3652 - 05",
    location: "Seattle, USA",
    status: "open",
    image: "https://picsum.photos/id/445/800/600",
    featured: true
  },
  {
    id: 9,
    title: "Italian Restaurant",
    category: "Restaurant",
    rating: 5,
    reviews: 32,
    price: { min: 20, max: 120 },
    phone: "+98 (265) 3652 - 05",
    location: "Houston, USA",
    status: "open",
    image: "https://picsum.photos/id/430/800/600"
  },
  {
    id: 10,
    title: "Sports Complex",
    category: "Sports",
    rating: 4,
    reviews: 14,
    price: { min: 25, max: 75 },
    phone: "+98 (265) 3652 - 05",
    location: "Denver, USA",
    status: "open",
    image: "https://picsum.photos/id/452/800/600",
    featured: true
  }
];

export default function handler(req, res) {
  if (req.method === 'GET') {
    // Add query parameters for filtering
    const { category, status, featured, search, location } = req.query;
    
    let filteredListings = [...listings];

    if (category) {
      filteredListings = filteredListings.filter(listing => 
        listing.category.toLowerCase() === category.toLowerCase()
      );
    }

    if (status) {
      filteredListings = filteredListings.filter(listing => 
        listing.status === status
      );
    }

    if (featured === 'true') {
      filteredListings = filteredListings.filter(listing => 
        listing.featured === true
      );
    }

    if (location) {
      filteredListings = filteredListings.filter(listing =>
        listing.location.toLowerCase().includes(location.toLowerCase())
      );
    }

    if (search) {
      filteredListings = filteredListings.filter(listing =>
        listing.title.toLowerCase().includes(search.toLowerCase()) ||
        listing.location.toLowerCase().includes(search.toLowerCase()) ||
        listing.category.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Add CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    res.status(200).json(filteredListings);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}