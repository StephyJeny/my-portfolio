export default function Projects() {
  return (
    <section id="projects" className="px-4 py-8 sm:px-6 md:px-8 lg:px-12 lg:py-12 bg-gray-100">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-center sm:text-left">Projects</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-4 sm:gap-6">
        {/* Example Project Card */}
        <div className="bg-white p-4 sm:p-6 shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg">
          <h3 className="text-lg sm:text-xl font-semibold mb-2">Client App</h3>
          <p className="mt-2 text-sm sm:text-base text-gray-600 leading-relaxed">A full app I built from scratch for a client.</p>
          <a 
            href="https://your-project-url.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block mt-3 sm:mt-4 px-3 sm:px-4 py-2 bg-blue-600 text-white text-sm sm:text-base rounded-lg hover:bg-blue-700 transition-colors duration-200 w-full sm:w-auto text-center"
          >
            View Project
          </a>
        </div>

        <div className="bg-white p-4 sm:p-6 shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg">
          <h3 className="text-lg sm:text-xl font-semibold mb-2">Booking System</h3>
          <p className="mt-2 text-sm sm:text-base text-gray-600 leading-relaxed">A system to manage bookings (in progress).</p>
          <a 
            href="https://your-booking-system-url.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block mt-3 sm:mt-4 px-3 sm:px-4 py-2 bg-blue-600 text-white text-sm sm:text-base rounded-lg hover:bg-blue-700 transition-colors duration-200 w-full sm:w-auto text-center"
          >
            View Project
          </a>
        </div>

        {/* New Live Projects */}
        <div className="bg-white p-4 sm:p-6 shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg">
          <h3 className="text-lg sm:text-xl font-semibold mb-2">🍽️ Restaurant Landing Page</h3>
          <p className="mt-2 text-sm sm:text-base text-gray-600 leading-relaxed">A responsive restaurant website with menu, contact form, and map.</p>
          <div className="mt-3">
            <div className="flex flex-wrap gap-1 sm:gap-2">
              <span className="px-2 py-1 bg-gray-200 text-gray-700 text-xs sm:text-sm rounded">HTML</span>
              <span className="px-2 py-1 bg-gray-200 text-gray-700 text-xs sm:text-sm rounded">CSS</span>
            </div>
          </div>
          <a 
            href="https://stephyjeny.github.io/html-css-project/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block mt-3 sm:mt-4 px-3 sm:px-4 py-2 bg-blue-600 text-white text-sm sm:text-base rounded-lg hover:bg-blue-700 transition-colors duration-200 w-full sm:w-auto text-center"
          >
            View Project
          </a>
        </div>

        <div className="bg-white p-4 sm:p-6 shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg">
          <h3 className="text-lg sm:text-xl font-semibold mb-2">React + Tailwind Project</h3>
          <p className="mt-2 text-sm sm:text-base text-gray-600 leading-relaxed">A modern, responsive app styled with Tailwind CSS.</p>
          <div className="mt-3">
            <div className="flex flex-wrap gap-1 sm:gap-2">
              <span className="px-2 py-1 bg-gray-200 text-gray-700 text-xs sm:text-sm rounded">React</span>
              <span className="px-2 py-1 bg-gray-200 text-gray-700 text-xs sm:text-sm rounded">Tailwind CSS</span>
            </div>
          </div>
          <a 
            href="https://stephyjeny.github.io/react-tailwind-project/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block mt-3 sm:mt-4 px-3 sm:px-4 py-2 bg-blue-600 text-white text-sm sm:text-base rounded-lg hover:bg-blue-700 transition-colors duration-200 w-full sm:w-auto text-center"
          >
            View Project
          </a>
        </div>
      </div>
    </section>
  );
}
