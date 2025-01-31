import { motion } from 'framer-motion';
import { HashLink } from 'react-router-hash-link';

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen pt-24 pb-32">
      <div className="container mx-auto px-4 text-center">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-neon-teal to-soft-magenta bg-clip-text text-transparent">
            Get in Touch
          </h2>
          
          <p className="text-xl text-off-white mb-12">
            I'm always open to discussing new projects, creative partnerships, or opportunities.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-6">
            {/* LinkedIn Button */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.linkedin.com/in/oshadhi-jayaweera/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0A66C2] text-off-white px-8 py-4 rounded-lg flex items-center gap-2 hover:bg-[#004182] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              Connect on LinkedIn
            </motion.a>

            {/* Email Button */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:oijayaweera@gmail.com?subject=Let's Collaborate"
              className="bg-dark border-2 border-neon-teal text-neon-teal px-8 py-4 rounded-lg flex items-center gap-2 hover:bg-neon-teal/10 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
              </svg>
              Send Email
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}