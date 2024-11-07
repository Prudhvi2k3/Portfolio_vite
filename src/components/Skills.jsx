import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Palette, Server, Smartphone, Brain } from 'lucide-react';

const skills = [
  {
    category: "Frontend Development",
    icon: Code2,
    items: ["React", "js", "Html", "CSS"]
  },
  {
    category: "Backend Development",
    icon: Server,
    items: ["Node.js", "Python", "MongoDB", "PostgreSQL"]
  },
  {
    category: "Machine Learning",
    icon: Brain,
    items: ["Python", "Pandas", "Numpy", "Scikit-learn"]
  },
  {
    category: "UI/UX Design",
    icon: Palette,
    items: ["Figma", "Prototyping", "User Research"]
  }
];

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

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  },
  hover: {
    y: -10,
    transition: {
      duration: 0.3,
      type: "spring",
      stiffness: 300
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
    transition: { duration: 0.3 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3 }
  }
};

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300" id="skills">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Skills & Expertise
        </motion.h2>

        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg"
            >
              <motion.div 
                className="flex items-center mb-4"
                variants={itemVariants}
              >
                <motion.div
                  className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mr-4"
                  variants={iconVariants}
                  whileHover="hover"
                >
                  <skill.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{skill.category}</h3>
              </motion.div>
              
              <motion.ul className="space-y-2">
                {skill.items.map((item, itemIndex) => (
                  <motion.li
                    key={itemIndex}
                    variants={itemVariants}
                    className="text-gray-600 dark:text-gray-400 flex items-center"
                    whileHover={{ x: 10, color: "#60A5FA" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.span 
                      className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"
                      whileHover={{ scale: 1.5 }}
                    />
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}