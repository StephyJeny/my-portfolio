export default function Projects() {
  return (
    <section id="projects" className="p-12 bg-gray-100">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Example Project Card */}
        <div className="bg-white p-6 shadow rounded-lg">
          <h3 className="text-xl font-semibold">Client App</h3>
          <p className="mt-2">A full app I built from scratch for a client.</p>
          <a 
            href="https://your-project-url.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            View Project
          </a>
        </div>

        <div className="bg-white p-6 shadow rounded-lg">
          <h3 className="text-xl font-semibold">Booking System</h3>
          <p className="mt-2">A system to manage bookings (in progress).</p>
          <a 
            href="https://your-booking-system-url.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            View Project
          </a>
        </div>

        {/* New Live Projects */}
        <div className="bg-white p-6 shadow rounded-lg">
          <h3 className="text-xl font-semibold">🍽️ Restaurant Landing Page</h3>
          <p className="mt-2">A responsive restaurant website with menu, contact form, and map.</p>
          <div className="mt-3">
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-gray-200 text-gray-700 text-sm rounded">HTML</span>
              <span className="px-2 py-1 bg-gray-200 text-gray-700 text-sm rounded">CSS</span>
            </div>
          </div>
          <a 
            href="https://stephyjeny.github.io/html-css-project/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            View Project
          </a>
        </div>

        <div className="bg-white p-6 shadow rounded-lg">
          <h3 className="text-xl font-semibold">React + Tailwind Project</h3>
          <p className="mt-2">A modern, responsive app styled with Tailwind CSS.</p>
          <div className="mt-3">
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-gray-200 text-gray-700 text-sm rounded">React</span>
              <span className="px-2 py-1 bg-gray-200 text-gray-700 text-sm rounded">Tailwind CSS</span>
            </div>
          </div>
          <a 
            href="https://stephyjeny.github.io/react-tailwind-project/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            View Project
          </a>
        </div>
      </div>
    </section>
  );
}
