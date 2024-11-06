// Sample listings data - In a real app, this would come from a database
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
    image: "/assets/images/listing/listing-grid-1.jpg",
    description: "Parturient varius elementum maecenas faucibus maecenas inceptos commodo metus vitae ac pretium magnis.",
    features: ["Card Payment", "Air-conditioned", "Wireless Internet", "Parking Street"],
    openingHours: {
      monday: "08:00 - 21:00",
      tuesday: "08:00 - 21:00",
      wednesday: "08:00 - 21:00",
      thursday: "08:00 - 21:00",
      friday: "08:00 - 21:00",
      saturday: "08:00 - 21:00",
      sunday: "Closed"
    },
    gallery: [
      "/assets/images/listing/gallery-1.jpg",
      "/assets/images/listing/gallery-2.jpg",
      "/assets/images/listing/gallery-3.jpg"
    ]
  }
];

export default function handler(req, res) {
  if (req.method === 'GET') {
    const { id } = req.query;
    const listing = listings.find(l => l.id === parseInt(id));
    
    if (listing) {
      res.status(200).json(listing);
    } else {
      res.status(404).json({ message: 'Listing not found' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}