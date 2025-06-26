// const Contact = () => (
//   <section id="contact" className="py-20 bg-white">
//     <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>

//     <div className="flex justify-center">
//       <form className="flex flex-col gap-4 w-full max-w-md bg-gray-100 p-6 rounded-lg shadow-md">
//         <input
//           type="text"
//           placeholder="Your Name"
//           className="border p-2 rounded"
//         />
//         <input
//           type="email"
//           placeholder="Your Email"
//           className="border p-2 rounded"
//         />
//         <textarea
//           placeholder="Your Message"
//           className="border p-2 rounded h-32 resize-none"
//         />
//         <button
//           type="submit"
//           className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
//         >
//           Send
//         </button>
//       </form>
//     </div>
//   </section>
// );

// export default Contact;

const Contact = () => (
  <section
    id="contact"
    className="py-20 bg-gray-100 dark:bg-gray-900 border border-white/20 rounded-xl mx-4 md:mx-10 my-6 shadow"
  >
    <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
      Contact Me
    </h2>

    <div className="flex justify-center">
      <form className="flex flex-col gap-4 w-full max-w-md bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <input
          type="text"
          placeholder="Your Name"
          className="border p-2 rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="border p-2 rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
        <textarea
          placeholder="Your Message"
          className="border p-2 rounded h-32 resize-none dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
        <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400">
          Send
        </button>
      </form>
    </div>

    <div className="mt-8 text-center text-gray-800 dark:text-gray-300 space-y-2">
      <p>
        <strong>Email:</strong> sawarkarwork@gmail.com
      </p>
      <p>
        <strong>LinkedIn:</strong>{" "}
        <a
          href="https://linkedin.com/in/YOUR_LINKEDIN"
          className="text-blue-600 hover:underline dark:text-blue-400"
          target="_blank"
        >
          YASH SAWARKAR
        </a>
      </p>
    </div>
  </section>
);

export default Contact;
