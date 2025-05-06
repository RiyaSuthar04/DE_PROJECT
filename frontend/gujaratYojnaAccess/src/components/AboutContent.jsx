import React from 'react';
import image from '../images/About_Gujarat.png';

const AboutContent = () => {
  return (
    <div className="bg-white px-6 py-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-4xl font-extrabold text-yellow-600 mb-6">About Gujarat Yojana Portal</h2>
          <p className="text-lg text-gray-800 mb-6 leading-relaxed">
            This portal is a dedicated initiative to provide centralized access to various
            government schemes and welfare programs launched by the **Government of Gujarat**.
            It is designed to help citizens easily discover, understand, and apply for schemes
            they are eligible for within the state.
          </p>
          <p className="text-lg text-gray-800 mb-6 leading-relaxed">
            Our aim is to ensure transparency and awareness about all state-level schemes
            including those in education, health, agriculture, social welfare, and more.
            The portal is updated regularly and curated specifically for the **residents of Gujarat**.
          </p>
          <p className="text-xl text-yellow-600 font-semibold">
            📌 Please note: This platform only lists schemes applicable within Gujarat.
          </p>
        </div>
        <div className="flex justify-center">
          <img src={image} alt="About Gujarat Portal" className="rounded-xl shadow-lg max-h-[350px]" />
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
