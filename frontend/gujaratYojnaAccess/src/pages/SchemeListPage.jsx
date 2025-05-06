import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SchemeCard from '../components/SchemeCard';
import Navbar from '../components/navBar';
import Footer from '../components/Footer';

const categorySlugToName = (slug) => {
  return decodeURIComponent(slug)
    .replace(/-/g, ' ')
    .replace(/&/g, 'and')
    .trim();
};

const SchemeListPage = () => {
  const { category } = useParams();
  const [schemes, setSchemes] = useState([]);
  const readableCategory = categorySlugToName(category);

  useEffect(() => {
    fetch(`http://localhost:5000/api/schemes/${readableCategory}`)
      .then(res => res.json())
      .then(data => setSchemes(data))
      .catch(err => console.error('Error fetching schemes:', err));
  }, [readableCategory]);

  return (
    <div className="font-inter">
    <Navbar />
    <div className=" text-black py-6">
      <h2 className="text-4xl font-extrabold text-center capitalize">{readableCategory} Schemes</h2>
    </div>
    <div className="max-w-6xl mx-auto px-6 mt-8">
    <div className="space-y-6">
        {schemes.map(scheme => (
          <div className="group cursor-pointer transform transition-all duration-300 ease-in-out">
            <SchemeCard key={scheme._id} scheme={scheme} category={category} />
          </div>
        ))}
      </div>
    </div>
    <Footer />
  </div>
  );
};

export default SchemeListPage;
