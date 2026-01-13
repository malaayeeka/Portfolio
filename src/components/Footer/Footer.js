
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 text-white py-8 text-center shadow-inner">
      <p className="mb-2 text-sm md:text-base">
        © {new Date().getFullYear()} Malaayeeka Tahseen Khan. All rights reserved.
      </p>
      <p className="text-sm md:text-base">
        Connect: 
        <a
          href="https://github.com/malaayeeka"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2 underline hover:text-black transition-colors duration-300"
        >
          GitHub
        </a> | 
        <a
          href="https://linkedin.com/in/malaayeeka"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2 underline hover:text-black transition-colors duration-300"
        >
          LinkedIn
        </a>
      </p>
    </footer>
  );
}
