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
/*
import React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <header className="w-full bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-8">
        <div className="text-2xl font-semibold text-gray-900 tracking-tight">
          <Link
            to="/"
            className="hover:text-blue-600 transition-colors duration-200"
          >
            DTtesting
          </Link>
        </div>

        <nav className="flex items-center space-x-10">
          <Link
            to="/"
            className="text-gray-800 hover:text-blue-600 transition-colors duration-200"
            activeClassName="text-blue-600 font-medium"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-800 hover:text-blue-600 transition-colors duration-200"
            activeClassName="text-blue-600 font-medium"
          >
            About
          </Link>
          <Link
            to="/privacy-policy"
            className="text-gray-800 hover:text-blue-600 transition-colors duration-200"
            activeClassName="text-blue-600 font-medium"
          >
            Privacy Policy
          </Link>
          <Link
            to="/sample-page"
            className="text-gray-800 hover:text-blue-600 transition-colors duration-200"
            activeClassName="text-blue-600 font-medium"
          >
            Sample Page
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
*/
import React from "react"
import { Link } from "gatsby"
import "../styles/header.css"

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div className="logo"><Link to="/">DTtesting</Link></div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/sample-page">Sample Page</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
