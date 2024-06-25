"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import confetti from 'canvas-confetti';

export default function NavBar() {
  const pathname = usePathname();

  const handleContactClick = () => {
    // Create the confetti/fireworks effect
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
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
