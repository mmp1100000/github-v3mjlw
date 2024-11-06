// Sample categories data
const categories = [
  {
    id: 1,
    title: "Museums",
    icon: "flaticon-government",
    count: 10,
    link: "/listing-grid"
  },
  {
    id: 2,
    title: "Restaurant",
    icon: "flaticon-serving-dish",
    count: 12,
    link: "/listing-grid"
  },
  {
    id: 3,
    title: "Game Field",
    icon: "flaticon-game-controller",
    count: 8,
    link: "/listing-grid"
  },
  {
    id: 4,
    title: "Job & Feed",
    icon: "flaticon-suitcase",
    count: 6,
    link: "/listing-grid"
  },
  {
    id: 5,
    title: "Party Center",
    icon: "flaticon-gift-box",
    count: 15,
    link: "/listing-grid"
  },
  {
    id: 6,
    title: "Fitness Zone",
    icon: "flaticon-dumbbell",
    count: 9,
    link: "/listing-grid"
  }
];

export default function handler(req, res) {
  if (req.method === 'GET') {
    // Add CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    res.status(200).json(categories);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}