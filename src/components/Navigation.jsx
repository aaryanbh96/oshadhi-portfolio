import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <motion.nav 
      className="fixed w-full bg-dark/90 backdrop-blur-md z-50"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-neon-teal to-soft-magenta bg-clip-text text-transparent">
          Oshadhi J.
        </Link>
        
        <div className="space-x-8">
          {['Home', 'Projects', 'Resume', 'Contact'].map((item) => (
            <Link 
              key={item}
              to={`/${item.toLowerCase()}`} 
              className="text-off-white hover:text-neon-teal transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}