const Resume = () => (
  <section
    id="resume"
    className="p-10 bg-gray-100 dark:bg-gray-900 text-center border border-white/20 rounded-xl mx-4 md:mx-10 my-6 shadow"
  >
    <h2 className="text-3xl font-bold mb-6">Resume</h2>

    <div className="inline-block bg-white dark:bg-gray-800 px-6 py-4 rounded-lg shadow-md">
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 text-white px-6 py-3 rounded-full shadow hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400 transition"
      >
        View / Download Resume
      </a>
    </div>
  </section>
);

export default Resume;
