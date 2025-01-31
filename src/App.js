import { motion } from 'framer-motion';
import { HashLink } from 'react-router-hash-link';
import Footer from './components/Footer';
import { useState, useEffect } from 'react';
import React from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null); // State to track the selected image

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  // Function to handle image click
  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  // Function to close the enlarged image
  const closeEnlargedImage = () => {
    setSelectedImage(null);
  };

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, rgba(23, 23, 33, 0.95) 0%, rgba(28, 28, 38, 0.95) 100%)`
        }}>
        <motion.h1
          className="text-3xl font-bold text-neon-teal relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Oshadhi's Portfolio...
        </motion.h1>
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 30%, rgba(94, 114, 235, 0.3) 0%, transparent 40%),
                             radial-gradient(circle at 80% 70%, rgba(60, 179, 196, 0.3) 0%, transparent 40%)`
          }}
        />
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden">
      {/* Main background gradient */}
      <div className="fixed inset-0 z-0"
        style={{
          background: `linear-gradient(135deg, rgba(23, 23, 33, 0.95) 0%, rgba(28, 28, 38, 0.95) 100%)`
        }}
      />

      {/* Decorative background elements */}
      <div className="fixed inset-0 opacity-10 z-0"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 30%, rgba(94, 114, 235, 0.3) 0%, transparent 40%),
                           radial-gradient(circle at 80% 70%, rgba(60, 179, 196, 0.3) 0%, transparent 40%)`
        }}
      />

      {/* Subtle grid overlay */}
      <div className="fixed inset-0 opacity-5 z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section id="hero" className="min-h-screen flex items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="container mx-auto px-4 text-center"
          >
            {/* Headshot */}
            <picture>
              <source srcSet="/headshot.webp" type="image/webp" />
              <motion.img
                src="/headshot.jpg"
                alt="Oshadhi Jayaweera"
                className="w-48 h-48 rounded-full border-4 border-neon-teal mx-auto mb-8 shadow-glow"
                whileHover={{ scale: 1.05 }}
              />
            </picture>

            {/* Headline */}
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-neon-teal to-neon-teal bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Oshadhi Jayaweera
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              MBA Graduate | Marketing Strategist | Business Communication Expert
            </motion.p>

            {/* CTA Button */}
            <HashLink 
              to="/#contact" 
              smooth
              className="bg-neon-teal text-dark px-8 py-3 rounded-lg font-bold text-lg hover:shadow-[0_0_25px_-5px_rgba(0,255,204,0.3)] transition-all"
            >
              Get in Touch
            </HashLink>
          </motion.div>
        </section>

        {/* About Me Section */}
<section id="about" className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
  <div className="container mx-auto px-4 py-16">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="max-w-4xl mx-auto text-center"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-neon-teal to-soft-magenta bg-clip-text text-transparent">
        About Me
      </h2>
      <p className="text-xl text-gray-300 mb-8">
        As an accomplished professional with an MBA, I bring a unique blend of strategic thinking and marketing expertise to every project. My foundation in business strategy, coupled with a deep understanding of modern communication channels, allows me to bridge the gap between business objectives and effective market execution.
      </p>

      <div className="grid md:grid-cols-2 gap-8 text-left">
        {/* Strategic Expertise */}
        <div>
          <h3 className="text-2xl font-bold text-neon-teal mb-4">Strategic Expertise</h3>
          <ul className="list-disc list-inside text-gray-300">
            <li>Business Strategy Development</li>
            <li>Market Analysis & Research</li>
            <li>Brand Management</li>
          </ul>
        </div>

        {/* Core Competencies */}
        <div>
          <h3 className="text-2xl font-bold text-neon-teal mb-4">Core Competencies</h3>
          <ul className="list-disc list-inside text-gray-300">
            <li>Marketing Strategy</li>
            <li>Communication Planning</li>
            <li>Project Management</li>
          </ul>
        </div>
      </div>

      {/* Quote */}
      <motion.p
        className="text-xl text-gray-300 mt-12 italic"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        "Transforming business challenges into strategic opportunities through innovative thinking and effective communication."
      </motion.p>
    </motion.div>
  </div>
</section>

        
        {/* Projects Section */}
        <section id="projects" className="min-h-screen flex items-center justify-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-neon-teal to-soft-magenta bg-clip-text text-transparent">
                Projects
              </h2>

              {/* Project 1: Flyers/Posters */}
              <div className="mb-12">
                <h3 className="text-3xl font-bold text-neon-teal mb-6">Graphic Design Portfolio</h3>
                <p className="text-xl text-gray-300 mb-8">
                  A collection of 8 flyers and posters showcasing my design and communication skills.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                    <motion.img
                      key={num}
                      src={`/images/projects/flyer${num}.png`}
                      alt={`Flyer ${num}`}
                      className="w-full h-auto rounded-lg shadow-lg hover:shadow-neon-teal transition-shadow cursor-pointer"
                      whileHover={{ scale: 1.05 }}
                      onClick={() => handleImageClick(`/images/projects/flyer${num}.png`)}
                    />
                  ))}
                </div>
              </div>

              {/* Project 2: Placeholder */}
              <div>
    <h3 className="text-3xl font-bold text-neon-teal mb-6">Conti Costanti Winery - Market Positioning</h3>
    <p className="text-xl text-gray-300 mb-8">
      Conti Costanti seeks to enhance its market position. The presentation analyzes the winery's current offerings—Sangiovese, Sangiovese Grosso, and red blends—highlighting their successes 
      and market saturation.
    </p>

    {/* Embed PDF within iframe */}
    <div className="mt-6">
      <iframe
        src="/conti_costanti_presentation.pdf"
        width="100%"
        height="600px"
        style={{ border: 'none' }}
        title="Conti Costanti Winery Presentation"
      >
        This browser does not support PDFs. Please download the PDF to view it.
      </iframe>
    </div>
  </div>
            </motion.div>
          </div>
        </section>
        {/* New Blog Section */}
        <section
        id="featured-blogs"
        className="min-h-screen flex items-center justify-center bg-gray-900"
      >
        <div className="text-center">
          <h3 className="text-3xl font-bold text-neon-teal mb-6">Featured Blogs</h3>
          <p className="text-xl text-gray-300 mb-8">
            Check out some of my blog posts:
          </p>

          {/* Flex container for side-by-side layout */}
          <div className="flex justify-center space-x-8">
            {/* Blog 1 */}
            <div className="w-full max-w-xs bg-gray-800 p-4 rounded-lg shadow-lg">
              <a
                href="https://guidable.co/culture/want-a-taste-of-spring-try-these-5-sakura-treats/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline text-lg font-bold"
              >
                Want a Taste of Spring? Try These 5 Sakura Treats
              </a>
              <p className="text-gray-400 mt-4">
                Explore the flavors of spring with these 5 delicious sakura-themed treats.
              </p>
            </div>

            {/* Blog 2 */}
            <div className="w-full max-w-xs bg-gray-800 p-4 rounded-lg shadow-lg">
              <a
                href="https://guidable.co/lifestyle/what-its-like-to-be-a-sri-lankan-in-japan/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline text-lg font-bold"
              >
                What It's Like to Be a Sri Lankan in Japan
              </a>
              <p className="text-gray-400 mt-4">
                A personal insight into the experience of being a Sri Lankan living in Japan.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="resume" className="min-h-screen flex items-center justify-center">
  <div className="text-center">
    <h3 className="text-3xl font-bold text-neon-teal mb-6">Resume</h3>
    <p className="text-xl text-gray-300 mb-8">
      You can view my full resume here:
    </p>
    <a 
      href="https://drive.google.com/file/d/1DVS6ZLS0OmVCevmYJzMMaVU83xqFWXQ7/view?usp=sharing" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="text-blue-500 hover:underline"
    >
      View My Resume
    </a>
  </div>
</section>


        {/* Contact Section */}
        <section id="contact" className="min-h-screen flex items-center justify-center">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="max-w-2xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-neon-teal to-soft-magenta bg-clip-text text-transparent">
                Get in Touch
              </h2>
              
              {/* Social Media Links */}
              <div className="flex justify-center space-x-8 mb-8">
                <a
                  href="mailto:your.email@example.com"
                  className="text-gray-200 hover:text-teal-400 transition-colors duration-300 transform hover:scale-110"
                >
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/oshadhi-jayaweera/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-200 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
                >
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>

              <p className="text-xl text-gray-300">
                I'm always open to discussing new projects and opportunities.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Footer Component */}
        <Footer />
      </div>

      {/* Modal for Enlarged Image */}
      {selectedImage && (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
    onClick={closeEnlargedImage}
  >
    <div className="relative p-4">
      <img
        src={selectedImage}
        alt="Enlarged"
        className="object-contain"
        style={{
          maxWidth: '80vw',  // Limit to 80% of the viewport width
          maxHeight: '80vh', // Limit to 80% of the viewport height
        }}
      />
      <button
        className="absolute top-2 right-2 text-white text-4xl hover:text-gray-400 transition-colors"
        onClick={closeEnlargedImage}
      >
        &times;
      </button>
    </div>
  </div>
)}

    </div>
  );
}

export default App;