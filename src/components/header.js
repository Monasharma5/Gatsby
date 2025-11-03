// src/components/Header.js

/*
import React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <header className="flex items-center justify-between px-8 py-4 border-b border-gray-200">
      {}
      <div className="text-2xl font-bold text-gray-800">
        <Link to="/">DTtesting</Link>
      </div>

      {}
      <nav>
        <ul className="flex space-x-6 text-gray-700">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/privacy-policy">Privacy Policy</Link></li>
          <li><Link to="/sample-page">Sample Page</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
*/
import React, { useState } from "react"
import { Link } from "gatsby"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo / Site Title */}
        <div className="text-2xl font-bold text-gray-900">
          <Link to="/" className="hover:text-blue-600 transition-colors">
            DTtesting
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-gray-800 font-medium">
          <Link
            to="/"
            className="hover:text-blue-600 transition-colors"
            activeClassName="text-blue-600"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-blue-600 transition-colors"
            activeClassName="text-blue-600"
          >
            About
          </Link>
          <Link
            to="/privacy-policy"
            className="hover:text-blue-600 transition-colors"
            activeClassName="text-blue-600"
          >
            Privacy Policy
          </Link>
          <Link
            to="/sample-page"
            className="hover:text-blue-600 transition-colors"
            activeClassName="text-blue-600"
          >
            Sample Page
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700 text-2xl focus:outline-none"
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <nav className="flex flex-col px-6 py-4 space-y-3 text-gray-800 font-medium">
            <Link
              to="/"
              className="hover:text-blue-600 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="hover:text-blue-600 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/privacy-policy"
              className="hover:text-blue-600 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Privacy Policy
            </Link>
            <Link
              to="/sample-page"
              className="hover:text-blue-600 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Sample Page
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
