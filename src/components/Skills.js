import { motion } from 'framer-motion';

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const skillVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 20
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const skills = [
    { name: "HTML", level: 95, color: "bg-orange-500" },
    { name: "CSS", level: 90, color: "bg-blue-500" },
    { name: "JavaScript", level: 85, color: "bg-yellow-500" },
    { name: "React", level: 80, color: "bg-cyan-500" },
    { name: "Tailwind CSS", level: 85, color: "bg-teal-500" },
    { name: "Git & GitHub", level: 75, color: "bg-gray-700" },
    { name: "Node.js", level: 70, color: "bg-green-500" },
    { name: "Remix", level: 65, color: "bg-purple-500" },
    { name: "MySQL", level: 70, color: "bg-blue-600" }
  ];

  return (
    <section id="skills" className="px-4 py-8 sm:px-6 md:px-8 lg:px-12 lg:py-12 bg-white">
      <motion.h2 
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-center sm:text-left"
      >
        Skills & Tools
      </motion.h2>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            variants={skillVariants}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)"
            }}
            className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-gray-300 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-gray-800">{skill.name}</h3>
              <span className="text-sm text-gray-600">{skill.level}%</span>
            </div>
            
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <motion.div
                className={`h-2.5 rounded-full ${skill.color}`}
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ 
                  duration: 1.5, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Additional skills section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-12 text-center"
      >
        <h3 className="text-xl font-semibold mb-4 text-gray-800">
          Always Learning
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          I'm constantly expanding my skill set and staying up-to-date with the latest technologies 
          and best practices in web development. Currently exploring TypeScript, Next.js, and cloud technologies.
        </p>
      </motion.div>
    </section>
  );
}
