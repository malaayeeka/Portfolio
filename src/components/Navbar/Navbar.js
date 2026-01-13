import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full sticky top-0 z-50 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl md:text-3xl font-bold text-white tracking-wide">
          Malaayeeka
        </h1>

        {/* Menu */}
        <div className="flex gap-8 text-sm md:text-base font-medium">
          <Link
            href="/"
            className="text-white hover:text-black hover:scale-105 transition-transform duration-300"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-white hover:text-black hover:scale-105 transition-transform duration-300"
          >
            About
          </Link>
          <Link
            href="/skills"
            className="text-white hover:text-black hover:scale-105 transition-transform duration-300"
          >
            Skills
          </Link>
          <Link
            href="/projects"
            className="text-white hover:text-black hover:scale-105 transition-transform duration-300"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="text-white hover:text-black hover:scale-105 transition-transform duration-300"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}


// "use client";
// import Link from "next/link";
// import { useState, useEffect } from "react";

// export default function Navbar() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [active, setActive] = useState("/");

//   // Shadow on scroll
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const links = [
//     { href: "/", label: "Home" },
//     { href: "/about", label: "About" },
//     { href: "/skills", label: "Skills" },
//     { href: "/projects", label: "Projects" },
//     { href: "/contact", label: "Contact" },
//   ];

//   return (
//     <nav
//       className={`w-full sticky top-0 z-50 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 transition-shadow duration-300 ${
//         isScrolled ? "shadow-lg" : ""
//       }`}
//     >
//       <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
//         {/* Logo */}
//         <h1 className="text-2xl md:text-3xl font-bold text-white tracking-wide cursor-pointer">
//           Malaayeeka
//         </h1>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex gap-8 text-white font-medium">
//           {links.map((link) => (
//             <Link
//               key={link.href}
//               href={link.href}
//               className={`relative transition-all duration-300 ${
//                 active === link.href ? "text-black font-bold" : ""
//               }`}
//               onClick={() => setActive(link.href)}
//             >
//               {link.label}
//               <span
//                 className={`absolute left-0 -bottom-1 h-0.5 bg-black transition-all duration-300 w-0 ${
//                   active === link.href ? "w-full" : "hover:w-full"
//                 }`}
//               ></span>
//             </Link>
//           ))}
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden">
//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             className="text-white focus:outline-none"
//           >
//             {menuOpen ? "✖️" : "☰"}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="md:hidden bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 text-white px-6 py-4 flex flex-col gap-4">
//           {links.map((link) => (
//             <Link
//               key={link.href}
//               href={link.href}
//               className="hover:text-black"
//               onClick={() => {
//                 setActive(link.href);
//                 setMenuOpen(false);
//               }}
//             >
//               {link.label}
//             </Link>
//           ))}
//         </div>
//       )}
//     </nav>
//   );
// }
