"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import confetti from 'canvas-confetti';
import { useState } from 'react';

export default function NavBar() {
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleContactClick = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className="header flex items-center justify-between p-4 bg-gray-800 text-white">
      <Link href="/">
        <div className="p-3 border border-white rounded-md hover:bg-gray-200 hover:text-black transition duration-300 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="gray"
            className="w-6 h-6"
          >
            <path d="M3 9.915V22h7v-7h4v7h7V9.915L12 3 3 9.915zM12 1l10 8.5V23h-9v-7h-2v7H2V9.5L12 1z" />
          </svg>
          <span className="ml-2">Home</span>
        </div>
      </Link>
      <nav className="flex text-lg gap-7 font-medium">
        <div className="relative">
          <button
            className="p-3 border border-white rounded-md hover:bg-gray-200 hover:text-black transition duration-300"
            onClick={toggleDropdown}
          >
            Projects
          </button>
          {dropdownOpen && (
            <div
              className="absolute top-full left-0 mt-2 w-48 bg-gray-800 border border-white rounded-md shadow-lg"
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <Link href="/projects/infosec">
                <div className="p-3 hover:bg-gray-200 hover:text-black transition duration-300">
                  Infosec
                </div>
              </Link>
              <Link href="/projects/devops">
                <div className="p-3 hover:bg-gray-200 hover:text-black transition duration-300">
                  DevOps
                </div>
              </Link>
              <Link href="/projects/assembly">
                <div className="p-3 hover:bg-gray-200 hover:text-black transition duration-300">
                  Assembly
                </div>
              </Link>
              <Link href="/projects/programming">
                <div className="p-3 hover:bg-gray-200 hover:text-black transition duration-300">
                  Programming
                </div>
              </Link>
            </div>
          )}
        </div>
        <Link href="/contact" className={`text-${pathname === "/contact" ? "gray" : "white"}`}>
          <div
            className="p-3 border border-white rounded-md hover:bg-gray-200 hover:text-black transition duration-300"
            onClick={handleContactClick}
          >
            Contact
          </div>
        </Link>
      </nav>
    </header>
  );
}
