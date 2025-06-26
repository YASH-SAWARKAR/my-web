const About = () => (
  <section
    id="about"
    className="p-10 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white border border-white/20 rounded-xl mx-4 md:mx-10 my-6 shadow"
  >
    <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>

    <div className="flex flex-col md:flex-row items-center gap-8 max-w-5xl mx-auto">
      {/* Profile Image */}
      <div className="w-full flex justify-center md:justify-start">
        <div
          className="w-40 h-40 md:w-60 md:h-60 rounded-full overflow-hidden flex-shrink-0
    border border-white/20 shadow-lg backdrop-blur-md bg-white/10
    hover:scale-105 transition-transform duration-300"
        >
          <img
            src="/myphoto.jpg"
            alt="My Profile"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>

      {/* Info */}
      <div className="text-center md:text-left space-y-3">
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Hello! I’m Yash Sawarkar, a passionate{" "}
          <strong>full-stack web developer</strong> focused on building clean,
          efficient, and scalable web applications. I enjoy working with both
          frontend and backend technologies to bring ideas to life.
        </p>
        <ul className="text-gray-700 space-y-1">
          <li>
            <strong>📍 Location:</strong> Nagpur, Maharashtra, India
          </li>
          <li>
            <strong>🎓 College:</strong> Shri Ramdeobaba College of Engineering
            and Management
          </li>
          <li>
            <strong>📞 Contact:</strong> +91-8010367879
          </li>
          <li>
            <strong>📧 Email:</strong> sawarkarwork@gmail.com
          </li>
          <li>
            <strong>💼 GitHub:</strong>{" "}
            <a
              href="https://github.com/YASH-SAWARKAR"
              className="text-blue-600 hover:underline"
              target="_blank"
            >
              YASH-SAWARKAR
            </a>
          </li>
          <li>
            <strong>🔗 LinkedIn:</strong>{" "}
            <a
              href="https://www.linkedin.com/in/yash-sawarkar-9b8857298/"
              className="text-blue-600 hover:underline"
              target="_blank"
            >
              YASH SAWARKAR
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default About;
