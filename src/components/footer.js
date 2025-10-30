// src/components/Footer.js
import React from "react"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <footer className="px-8 py-10 border-t border-gray-200">
      <div className="flex flex-col md:flex-row md:justify-between">
        {/* Left side - logo/title */}
        <div className="mb-6 md:mb-0">
          <h2 className="text-2xl font-bold text-gray-800">DTtesting</h2>
        </div>

        {/* Right side - footer links grid */}
        <div className="grid grid-cols-2 gap-x-12 gap-y-2 text-gray-700">
          <Link to="/blog">Blog</Link>
          <Link to="/events">Events</Link>
          <Link to="/about">About</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/faqs">FAQs</Link>
          <Link to="/patterns">Patterns</Link>
          <Link to="/authors">Authors</Link>
          <Link to="/themes">Themes</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
