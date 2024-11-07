import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import emailjs from 'emailjs-com';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 }
  }
};

const formVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 }
  }
};

const inputVariants = {
  focus: {
    scale: 1.02,
    transition: { duration: 0.2 }
  }
};

const iconVariants = {
  hover: {
    scale: 1.2,
    backgroundColor: "#1D4ED8",
    transition: { duration: 0.3 }
  }
};

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showThankYou, setShowThankYou] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      name: name,
      email: email,
      message: message
    };

    emailjs.send(
      'service_come8lh',
      'template_x2k0qja',
      templateParams,
      'neVplf6b15Pacpgs-'
    )
    .then((response) => {
      console.log('Email sent successfully!', response.status, response.text);
      setShowThankYou(true);
      setName('');
      setEmail('');
      setMessage('');
    })
    .catch((error) => {
      console.error('Failed to send email:', error);
    });
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300" id="contact">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Get In Touch
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white"
            >
              Contact Information
            </motion.h3>
            <div className="space-y-6">
              {[
                { Icon: Mail, text: "prudhviankamreddi1@gmail.com" },
                { Icon: Phone, text: "+91 6305845312" },
                { Icon: MapPin, text: "Anakapalli, Andhra Pradesh, India" }
              ].map(({ Icon, text }, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center text-gray-600 dark:text-gray-400 group"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center mr-4"
                    variants={iconVariants}
                    whileHover="hover"
                  >
                    <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400 group-hover:text-black dark:group-hover:text-black transition-colors duration-300" />
                  </motion.div>
                  <span className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            variants={formVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {[
              { label: "Name", type: "text", value: name, onChange: setName, placeholder: "Your name" },
              { label: "Email", type: "email", value: email, onChange: setEmail, placeholder: "your@email.com" }
            ].map(({ label, type, value, onChange, placeholder }, index) => (
              <motion.div key={index} variants={itemVariants}>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {label}
                </label>
                <motion.input
                  type={type}
                  className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-gray-900 dark:text-white"
                  value={value}
                  onChange={(e) => onChange(e.target.value)}
                  placeholder={placeholder}
                  variants={inputVariants}
                  whileFocus="focus"
                />
              </motion.div>
            ))}

            <motion.div variants={itemVariants}>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Message
              </label>
              <motion.textarea
                className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-gray-900 dark:text-white h-32"
                placeholder="Your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                variants={inputVariants}
                whileFocus="focus"
              />
            </motion.div>

            <motion.button
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 dark:hover:bg-blue-500 transition-colors duration-300"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>

        {/* Thank you message */}
        {showThankYou && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 z-50">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
              <motion.h3
                className="text-2xl font-bold mb-4 text-gray-900 dark:text-white"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Thank you for contacting Me!
              </motion.h3>
              <motion.p
                className="text-gray-600 dark:text-gray-400"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                I'll get back to you as soon as possible.
              </motion.p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}