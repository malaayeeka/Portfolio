export default function Banner() {
  return (
    <section className="min-h-[70vh] flex flex-col justify-center items-start px-6 md:px-16 bg-gradient-to-r from-blue-100 via-purple-100 to-white">
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-black">
        Hi, I’m Malaayeeka Tahseen Khan
      </h1>

      {/* Description */}
      <p className="text-lg md:text-xl text-gray-700 max-w-2xl mb-6">
        CSE Graduate with a strong interest in Machine Learning. Passionate about
        building real-world projects and learning new technologies.
      </p>

      {/* Buttons */}
      <div className="flex gap-4">
        <a
          href="/Malaayeeka-Tahseen-Khan.CV.pdf"
          className="bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 text-white px-6 py-3 rounded-md shadow-lg hover:scale-105 transition-transform duration-300"
        >
          Download CV
        </a>

        <a
          href="/contact"
          className="border-2 border-blue-500 text-blue-600 px-6 py-3 rounded-md shadow hover:bg-blue-500 hover:text-white transition-all duration-300"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}
