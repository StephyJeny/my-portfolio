import { motion } from 'framer-motion';

export default function Blog() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const articleVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const articles = [
    {
      id: 1,
      title: "Getting Started with React and Tailwind CSS",
      excerpt: "Learn how to set up a modern React application with Tailwind CSS for rapid UI development.",
      date: "2024-01-15",
      readTime: "5 min read",
      tags: ["React", "Tailwind CSS", "Frontend"],
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop&crop=center",
      slug: "react-tailwind-setup"
    },
    {
      id: 2,
      title: "Building Responsive Web Applications",
      excerpt: "Best practices for creating web applications that work seamlessly across all devices and screen sizes.",
      date: "2024-01-10",
      readTime: "8 min read",
      tags: ["Responsive Design", "CSS", "Mobile-First"],
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=250&fit=crop&crop=center",
      slug: "responsive-web-design"
    },
    {
      id: 3,
      title: "JavaScript ES6+ Features You Should Know",
      excerpt: "Explore modern JavaScript features that will make your code cleaner, more efficient, and easier to maintain.",
      date: "2024-01-05",
      readTime: "6 min read",
      tags: ["JavaScript", "ES6+", "Programming"],
      image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&h=250&fit=crop&crop=center",
      slug: "javascript-es6-features"
    },
    {
      id: 4,
      title: "The Future of Web Development",
      excerpt: "Discussing emerging trends and technologies that are shaping the future of web development.",
      date: "2023-12-28",
      readTime: "7 min read",
      tags: ["Web Development", "Trends", "Future Tech"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop&crop=center",
      slug: "future-web-development"
    }
  ];

  return (
    <section id="blog" className="px-4 py-8 sm:px-6 md:px-8 lg:px-12 lg:py-12 bg-white">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-8 sm:mb-12"
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
          Blog & Articles
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Sharing insights, tutorials, and thoughts on web development, programming, and technology.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8"
      >
        {articles.map((article) => (
          <motion.article
            key={article.id}
            variants={articleVariants}
            whileHover={{ 
              y: -10,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            }}
            className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:border-gray-300 transition-all duration-300"
          >
            <div className="relative overflow-hidden">
              <motion.img
                src={article.image}
                alt={article.title}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 right-4">
                <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                  {article.readTime}
                </span>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-3">
                {article.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <h3 className="text-xl font-semibold mb-2 text-gray-900 line-clamp-2">
                {article.title}
              </h3>
              
              <p className="text-gray-600 mb-4 line-clamp-3">
                {article.excerpt}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">
                  {new Date(article.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-200"
                  onClick={() => {
                    // In a real app, this would navigate to the full article
                    console.log(`Navigate to article: ${article.slug}`);
                  }}
                >
                  Read More →
                </motion.button>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-center mt-8 sm:mt-12"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
        >
          View All Articles
        </motion.button>
      </motion.div>
    </section>
  );
}