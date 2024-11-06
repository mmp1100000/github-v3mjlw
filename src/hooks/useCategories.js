import { useState, useEffect } from 'react';

// Sample categories data
const sampleCategories = [
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

export const useCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // In a real app, this would be an API call
        // const response = await fetch('/api/categories');
        // const data = await response.json();
        
        setCategories(sampleCategories);
        setLoading(false);
      } catch (err) {
        setError('Error fetching categories');
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return { categories, loading, error };
};