import React, { useEffect, useState } from 'react';
import Navbar from '../components/navBar';
import Footer from '../components/Footer';
import { useParams } from 'react-router-dom';

const SchemeInfo = () => {
  const { id } = useParams();
  const [scheme, setScheme] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/schemes/id/${id}`)
      .then(res => res.json())
      .then(data => {
        if (data) {
          setScheme(data);
        }
      })
      .catch(err => console.log('Error fetching data:', err));
  }, [id]);

  if (!scheme) {
    return (
      <div className="min-h-screen flex items-center justify-center text-lg text-gray-700 font-medium">
        Loading...
      </div>
    );
  }

  const benefits = scheme.benefits || [];
  const eligibility = scheme.eligibility || [];
  const applicationProcess = scheme.application_process || [];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow px-4 py-10 bg-gray-50">
        <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4 font-sans">{scheme.name}</h1>
          <p className="text-gray-700 mb-6 leading-relaxed font-light">{scheme.details}</p>

          <section className="mb-6">
            <h2 className="text-xl font-semibold text-yellow-700 mb-2">Benefits:</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {benefits.length > 0 ? benefits.map((b, i) => <li key={i}>{b}</li>) : <li>No benefits listed.</li>}
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold text-yellow-700 mb-2">Eligibility:</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {eligibility.length > 0 ? eligibility.map((e, i) => <li key={i}>{e}</li>) : <li>No eligibility criteria listed.</li>}
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold text-yellow-700 mb-2">Application Process:</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {applicationProcess.length > 0 ? applicationProcess.map((p, i) => <li key={i}>{p}</li>) : <li>No application process listed.</li>}
            </ul>
          </section>

          <div className="mt-6">
            <a
              href={scheme.url}
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-yellow-600 hover:bg-yellow-700 text-black font-semibold px-6 py-3 rounded-md transition-all duration-300"
            >
              Visit Official Site
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SchemeInfo;
