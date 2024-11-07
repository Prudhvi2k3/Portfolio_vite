import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter, Instagram } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: "https://github.com/Prudhvi2k3" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/prudhvi-ankamreddi/" },
  // { icon: Twitter, href: "#" },
  { icon: Instagram, href: "https://www.instagram.com/prudhvi_2k3/" },
  { icon: Mail, href: "mailto:prudhviankamreddi1@gmail.com" }
];

const footerVariants = {
  hover: {
    scale: 1.1,
    transition: { duration: 0.3 }
  }
};

export default function Footer() {
  return (
    <footer className="py-8 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-300"
                variants={footerVariants}
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>
          
          <motion.p 
            className="text-gray-600 dark:text-gray-400 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            © {new Date().getFullYear()} Prudhvi Ankamreddi. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
}