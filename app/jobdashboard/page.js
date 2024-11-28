"use client";

export default function JobBoard() {
  // Hardcoded job data
  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "Tech Corp",
      location: "Remote",
      description: "Build modern web interfaces using React and TypeScript.",
    },
    {
      id: 2,
      title: "Backend Engineer",
      company: "DataWorks",
      location: "New York, NY",
      description: "Develop scalable APIs and manage databases efficiently.",
    },
    {
      id: 3,
      title: "UI/UX Designer",
      company: "Creative Studio",
      location: "San Francisco, CA",
      description: "Design user-friendly interfaces with a focus on accessibility.",
    },
    {
      id: 4,
      title: "DevOps Engineer",
      company: "Cloudify",
      location: "Remote",
      description: "Implement CI/CD pipelines and manage cloud infrastructure.",
    },
    {
      id: 5,
      title: "Data Scientist",
      company: "Insight Analytics",
      location: "Boston, MA",
      description: "Analyze large datasets to extract meaningful insights.",
    },
  ];

  return (
    <div className="text-white min-h-screen py-10 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold text-center mb-8">Job Board</h1>
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform hover:scale-105"
            >
              <h2 className="text-xl font-bold text-blue-400">{job.title}</h2>
              <p className="text-gray-300">{job.company}</p>
              <p className="text-gray-400">{job.location}</p>
              <p className="text-gray-200 mt-4">{job.description}</p>
              <a
                href="#"
                className="block mt-6 bg-blue-600 text-white py-2 px-4 rounded text-center hover:bg-blue-700"
              >
                Apply Now
              </a>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
