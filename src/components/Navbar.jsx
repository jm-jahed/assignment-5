import { useState } from 'react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Mobile Navbar: Left Hamburger, Center Logo, Right Sign In / Sign Up */}
        <div className="flex md:hidden items-center justify-between h-16">
          {/* Left: Hamburger Icon */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gray-700 hover:text-gray-900 rounded-md"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          {/* Center: Brand Logo + Name */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 flex items-center justify-center">
              <span className="text-white font-bold text-xs">DS</span>
            </div>
            <span className="text-lg font-bold text-gray-900">Dev Stack</span>
          </div>

          {/* Right: Auth Buttons */}
          <div className="flex items-center gap-2">
            <button className="text-xs font-semibold text-gray-700 px-2 py-1">
              Sign In
            </button>
            <button className="text-xs font-semibold text-white bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 px-3 py-1 rounded-full">
              Sign Up
            </button>
          </div>
        </div>

        {/* Desktop Navbar: Left Logo, Center Links, Right Auth */}
        <div className="hidden md:flex items-center justify-between h-16">
          {/* Left: Brand Logo + Name */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 flex items-center justify-center">
              <span className="text-white font-bold text-xs">DS</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Dev Stack</span>
          </div>

          {/* Center: Nav Links */}
          <nav className="flex items-center space-x-6">
            <a href="#home" className="text-sm font-semibold text-pink-500">
              Home
            </a>
            <a href="#technologies" className="text-sm text-gray-600 hover:text-gray-900">
              Technologies
            </a>
            <a href="#projects" className="text-sm text-gray-600 hover:text-gray-900">
              Projects
            </a>
            <a href="#about" className="text-sm text-gray-600 hover:text-gray-900">
              About
            </a>
            <a href="#contact" className="text-sm text-gray-600 hover:text-gray-900">
              Contact
            </a>
          </nav>

          {/* Right: Sign In & Sign Up */}
          <div className="flex items-center space-x-3">
            <button className="text-sm font-semibold text-gray-700 px-3 py-1.5">
              Sign In
            </button>
            <button className="text-sm font-semibold text-white bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 px-4 py-1.5 rounded-full">
              Sign Up
            </button>
          </div>
        </div>

      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-3 space-y-2">
          <a
            href="#home"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-pink-500"
          >
            Home
          </a>
          <a
            href="#technologies"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm text-gray-700"
          >
            Technologies
          </a>
          <a
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm text-gray-700"
          >
            Projects
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm text-gray-700"
          >
            About
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm text-gray-700"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
}
