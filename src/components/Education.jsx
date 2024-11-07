import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Award, Book } from 'lucide-react';

const education = [
  {
    degree: "Bachelor of Technology",
    school: "Kakinada Institute of  Engineering and Technology",
    year: "2021 - 2025",
    description: "Pursuing my Bachelor's Degree in Computer Science (Data Science) at Kiet group of Institutions, I'm gaining in-depth knowledge in areas like Data Science, Machine Learning and Web Development. With a GPA of 7.8",
    icon: GraduationCap
  },
  {
    degree: "Intermediate",
    school: "Sri Chaitanya Junior College",
    year: "2019 - 2021",
    description: "I completed my Intermediate at Sri Chaitanya Junior College in the group of MPC",
    icon: Award
  },
  {
    degree: "High School",
    school: "Sree Balaji High School",
    year: "2006 - 2019",
    description: "I completed my Schooling at Sree Balaji High School",
    icon: Book
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const iconVariants = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 10
    }
  },
  hover: {
    scale: 1.2,
    rotate: 360,
    transition: { duration: 0.8 }
  }
};

export default function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300" id="education">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Education & Certifications
        </motion.h2>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {education.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ y: -10 }}
            >
              <motion.div
                className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-6 mx-auto"
                variants={iconVariants}
                whileHover="hover"
              >
                <item.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </motion.div>

              <motion.div
                className="text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {item.degree}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
                  {item.school}
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {item.year}
                </p>
                <p className="text-gray-500 dark:text-gray-500">
                  {item.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}