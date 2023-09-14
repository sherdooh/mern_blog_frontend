import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import Header from "../components/Header";
import CTA from "../pages/CTA";

function AboutUs() {
  return (
    <div className="bg-gray-100">
      {/* Header Section */}
      <Header />
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">Join Us Today!</h2>
          <p className="text-lg mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            convallis justo eu sem hendrerit.
          </p>
          {/* Use Link to navigate to the register page */}
          <Link to="/register">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full transition duration-300">
              Get Started
            </button>
          </Link>
        </div>
      </section>

      <CTA />
    </div>
  );
}

export default AboutUs;
