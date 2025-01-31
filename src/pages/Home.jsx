import { motion } from 'framer-motion';
import { HashLink } from 'react-router-hash-link';

export default function Home() {
  return (
    <section className="min-h-screen pt-24">
      <div className="container mx-auto px-4 text-center">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Headshot */}
          <motion.img
            src="/headshot.jpg"
            alt="Oshadhi Jayaweera"
            className="w-48 h-48 rounded-full border-4 border-neon-teal mx-auto mb-8 shadow-glow"
            whileHover={{ scale: 1.05 }}
          />

          {/* Headline */}
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-neon-teal to-soft-magenta bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Oshadhi Jayaweera
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl md:text-2xl text-off-white mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            MBA | Marketing Strategist & Communications Expert
          </motion.p>

          {/* CTA Button */}
          <HashLink 
            to="/#contact" 
            smooth
            className="bg-neon-teal text-dark px-8 py-3 rounded-lg font-bold hover:shadow-[0_0_15px_#00ffcc] transition-all"
          >
            Let's Collaborate
          </HashLink>
        </motion.div>

        {/* Featured Highlights Grid */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8 mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          {[
            { title: '10+ Campaigns', desc: 'Managed end-to-end' },
            { title: '30% ROI Boost', desc: 'Average client growth' },
            { title: '5 Industries', desc: 'Cross-sector expertise' }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="p-6 border border-gray-800 rounded-xl hover:border-neon-teal transition-all"
              whileHover={{ y: -10 }}
            >
              <h3 className="text-neon-teal text-2xl mb-2">{item.title}</h3>
              <p className="text-off-white">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}