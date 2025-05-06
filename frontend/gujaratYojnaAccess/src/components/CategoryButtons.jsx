import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FaLeaf, FaUniversity, FaLaptop, FaBook, FaHeartbeat, FaHome,
  FaFutbol, FaWrench, FaChild
} from 'react-icons/fa';

const categories = [
  { icon: <FaLeaf />, label: "Agriculture" },
  { icon: <FaUniversity />, label: "Banking & Finance" },
  { icon: <FaLaptop />, label: "Business & Entrepreneurship" },
  { icon: <FaBook />, label: "Education" },
  { icon: <FaHeartbeat />, label: "Health & Wellness" },
  { icon: <FaHome />, label: "Housing" },
  { icon: <FaFutbol />, label: "Sports & Culture" },
  { icon: <FaWrench />, label: "Utilities" },
  { icon: <FaChild />, label: "Women & Child" }
];

const CategoryButtons = () => {
  const navigate = useNavigate();

  const handleClick = (label) => {
    const categorySlug = label.toLowerCase().replace(/\s+/g, '-');
    navigate(`/schemes/${encodeURIComponent(categorySlug)}`);
  };

  return (
    <div className="px-4 sm:px-6 md:px-10 py-10 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10 font-sans text-gray-800">Find Schemes by Category</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {categories.map((cat, index) => (
          <div
            key={index}
            onClick={() => handleClick(cat.label)}
            className="cursor-pointer flex flex-col items-center justify-center bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:bg-yellow-50 transition-all duration-300 min-h-[160px]"
          >
            <div className="text-yellow-600 text-4xl mb-3">{cat.icon}</div>
            <span className="text-center text-lg font-medium text-gray-700 font-sans">{cat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryButtons;
