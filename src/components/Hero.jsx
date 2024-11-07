import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter, Instagram } from 'lucide-react'; // Import Instagram icon

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
      duration: 0.8
    }
  }
};

const handleClick = () => {
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

const socialVariants = {
  hover: {
    scale: 1.2,
    rotate: 5,
    transition: { type: "spring", stiffness: 400, damping: 10 }
  },
  tap: { scale: 0.9 }
};

export default function Hero() {
  return (
    <motion.section 
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white relative overflow-hidden transition-colors duration-300"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072')] bg-cover bg-center opacity-5 dark:opacity-10 transition-opacity duration-300"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.1 }}
        transition={{ duration: 1.5 }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
            variants={itemVariants}
          >
            Prudhvi Ankamreddi
          </motion.h1>

          <motion.h2 
            className="text-2xl md:text-3xl mb-8 text-gray-600 dark:text-gray-300"
            variants={itemVariants}
          >
            Web Developer | Machine Learning | Data Science
          </motion.h2>
          
          <motion.div 
            className="flex justify-center space-x-6 mb-12"
            variants={itemVariants}
          >
            {[
              { Icon: Github, href: "https://github.com/Prudhvi2k3" },
              { Icon: Linkedin, href: "https://www.linkedin.com/in/prudhvi-ankamreddi/" },
              // { Icon: Twitter, href: "#" },
              { Icon: Instagram, href: "https://www.instagram.com/prudhvi_2k3/" }, // Added Instagram icon
              { Icon: Mail, href: "mailto:prudhviankamreddi1@gmail.com" }
            ].map(({ Icon, href }, index) => (
              <motion.a
                key={index}
                href={href}
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-300"
                variants={socialVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </motion.div>

          <motion.button 
            className="px-8 py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-300"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
            onClick={handleClick}
          >
            Contact Me!
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
}