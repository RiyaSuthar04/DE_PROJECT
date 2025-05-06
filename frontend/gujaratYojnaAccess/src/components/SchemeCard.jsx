import React from 'react';
import { useNavigate } from 'react-router-dom';

const SchemeCard = ({ scheme }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-6xl mx-auto transition-transform duration-300 hover:scale-[1.01] hover:shadow-2xl">
      <h2 className="text-2xl font-bold mb-3 text-gray-800 font-sans">
        {scheme.name}
      </h2>
      <p className="text-gray-700 text-base mb-6 font-light tracking-wide leading-relaxed">
        {scheme.details}
      </p>
      <button
        onClick={() => navigate(`/scheme/${scheme._id}`)}
        className="bg-yellow-600 hover:bg-yellow-700 text-black px-6 py-3 rounded-md text-base font-semibold transition-all duration-300"
      >
        View More
      </button>
    </div>
  );
};

export default SchemeCard;
