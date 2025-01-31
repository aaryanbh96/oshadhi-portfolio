import { motion } from 'framer-motion';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <section className="min-h-screen pt-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-neon-teal to-soft-magenta bg-clip-text text-transparent">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="bg-dark-2 p-6 rounded-xl border border-gray-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl text-off-white mb-2">{project.title}</h3>
              <p className="text-gray-400">{project.description}</p>
              <div className="mt-4 flex space-x-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-dark rounded-full text-neon-teal">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}