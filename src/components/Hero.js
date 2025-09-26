import { motion } from 'framer-motion';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const waveVariants = {
    wave: {
      rotate: [0, 14, -8, 14, -4, 10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatDelay: 3
      }
    }
  };

  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-gray-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, #3b82f6 0%, transparent 50%)",
            "radial-gradient(circle at 80% 20%, #8b5cf6 0%, transparent 50%)",
            "radial-gradient(circle at 40% 80%, #06b6d4 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, #3b82f6 0%, transparent 50%)"
          ]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10"
      >
        <motion.h1 
          variants={itemVariants}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4"
        >
          Hi, I'm Stephanie Jeniffer{' '}
          <motion.span
            variants={waveVariants}
            animate="wave"
            className="inline-block origin-bottom-right"
          >
            👋
          </motion.span>
        </motion.h1>
        
        <motion.p 
          variants={itemVariants}
          className="mt-4 text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto px-4"
        >
          Web Developer — I build modern, responsive, and user-friendly websites & apps.
        </motion.p>
        
        <motion.div
          variants={itemVariants}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a 
            href="#contact" 
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors duration-200 font-medium text-lg"
          >
            Start a Project
          </motion.a>
          
          <motion.a 
            href="#projects" 
            whileHover={{ 
              scale: 1.05,
              borderColor: "#3b82f6"
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-gray-400 rounded-lg hover:border-blue-500 transition-colors duration-200 font-medium text-lg"
          >
            View My Work
          </motion.a>
        </motion.div>

        {/* Floating elements */}
        <motion.div
          className="absolute -top-10 -left-10 w-20 h-20 bg-blue-500 rounded-full opacity-20"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute -bottom-10 -right-10 w-16 h-16 bg-purple-500 rounded-full opacity-20"
          animate={{
            y: [0, 20, 0],
            x: [0, -10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-1 h-3 bg-gray-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
