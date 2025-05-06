import React from 'react';
import { FaBullseye, FaSearch, FaInfoCircle, FaHandshake } from 'react-icons/fa';
import GujaratYojnaLogo from '../images/GujaratYojnaLogo.png'; // New logo

const AboutUsComponent = () => {
  return (
    <div className="bg-white px-6 py-12">
      <div className="flex-grow container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About Gujarat Schemes Portal</h1>
        </div>

        {/* Vision and Mission Section - Side by Side */}
        <section className="mb-16 flex flex-col md:flex-row gap-8">
          {/* Vision */}
          <div className="flex-1 p-8 bg-white rounded-xl shadow-md">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-blue-100 rounded-full mr-4">
                <FaBullseye className="text-yellow-600 text-2xl" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">Our Vision</h2>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our vision is to make the lives of Gujarat citizens easier by providing simplified access
              to all government welfare schemes and services. We aim to be the most trusted platform for
              scheme discovery in the state.
            </p>
          </div>

          {/* Mission */}
          <div className="flex-1 p-8 bg-white rounded-xl shadow-md">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-green-100 rounded-full mr-4">
                <FaHandshake className="text-yellow-600 text-2xl" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">Our Mission</h2>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our mission is to streamline access to Gujarat government schemes and benefits, reducing
              the time and effort required for citizens to find and avail schemes relevant to their needs.
              We're committed to making government services more accessible to all.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-yellow-600 text-black p-12 rounded-xl mb-16">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-xl">Schemes Listed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1M+</div>
              <div className="text-xl">Users Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-xl">Government Departments</div>
            </div>
          </div>
        </section>


        {/* Platform Info */}
        {/* Platform Info */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">About the Platform</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Left Column - Cards */}
            <div className="space-y-8">
              {/* Feature 1 */}
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="text-yellow-600 text-4xl mb-4">
                  <FaSearch />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Comprehensive Search</h3>
                <p className="text-gray-600">
                  Find all Gujarat government schemes in one place with our powerful search engine.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="text-yellow-600 text-4xl mb-4">
                  <FaInfoCircle />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Detailed Information</h3>
                <p className="text-gray-600">
                  Get complete scheme details including eligibility, benefits, and application process.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="text-yellow-600 text-4xl mb-4">
                  <FaHandshake />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Official Partnership</h3>
                <p className="text-gray-600">
                  Directly connected with Gujarat government departments for authentic information.
                </p>
              </div>
            </div>

            {/* Right Column - Logo Image */}
            <div className="flex justify-center items-center h-full">
  <img
    src={GujaratYojnaLogo}
    alt="Gujarat Yojna Logo"
    className="w-[500px] h-[500px] object-contain rounded-xl shadow-lg"
  />
</div>

          </div>
        </section>



      </div>
    </div>
  );
};

export default AboutUsComponent;