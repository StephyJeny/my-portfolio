export default function Projects() {
  return (
    <section id="projects" className="p-12 bg-gray-100">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Example Project Card */}
        <div className="bg-white p-6 shadow rounded-lg">
          <h3 className="text-xl font-semibold">Client App</h3>
          <p className="mt-2">A full app I built from scratch for a client.</p>
          <a href="https://your-project-url.com" target="_blank" className="text-blue-600">View Project</a>
        </div>

        <div className="bg-white p-6 shadow rounded-lg">
          <h3 className="text-xl font-semibold">Booking System</h3>
          <p className="mt-2">A system to manage bookings (in progress).</p>
          <a href="https://your-booking-system-url.com" target="_blank" className="text-blue-600">View Project</a>
        </div>
      </div>
    </section>
  );
}
