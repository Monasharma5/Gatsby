/*import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const Header = () => {
  const data = useStaticQuery(graphql`
    query SafeHeaderQuery {
      wp {
        generalSettings {
          title
          description
        }
        # These may not always exist — WPGraphQL Menus/ThemeMod plugins are optional
        menus(where: { location: PRIMARY }) {
          nodes {
            menuItems {
              nodes {
                id
                label
                url
              }
            }
          }
        }
        themeModSettings {
          customLogo {
            sourceUrl
          }
        }
      }
    }
  `)

  const title = data.wp?.generalSettings?.title || "My Gatsby + WordPress Site"
  const tagline = data.wp?.generalSettings?.description || ""
  const logoUrl = data.wp?.themeModSettings?.customLogo?.sourceUrl || null
  const menuItems = data.wp?.menus?.nodes?.[0]?.menuItems?.nodes || []

  return (
    <header
      style={{
        padding: "1rem 2rem",
        background: "#f7f7f7",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #ddd",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        {logoUrl && (
          <img
            src={logoUrl}
            alt="Site Logo"
            style={{ height: "50px", marginRight: "1rem" }}
          />
        )}
        <div>
          <h1 style={{ margin: 0, fontSize: "1.5rem" }}>{title}</h1>
          {tagline && <p style={{ margin: 0, color: "#666" }}>{tagline}</p>}
        </div>
      </div>

      <nav>
        {menuItems.length > 0 ? (
          menuItems.map((item) => (
            <Link
              key={item.id}
              to={item.url.replace("https://botryose-hyperkeratotic-emelia.ngrok-free.dev/Testingsite/", "")}
              style={{ marginLeft: "1rem", textDecoration: "none", color: "#333" }}
            >
              {item.label}
            </Link>
          ))
        ) : (
          <span style={{ color: "#aaa" }}>No menu found</span>
        )}
      </nav>
    </header>
  )
}

export default Header
/*
// src/components/header.js
import React from "react"

const Header = () => {
  return (
    <header style={{ padding: "1rem", background: "#f4f4f4" }}>
      <h1>My Gatsby + WordPress Site</h1>
    </header>
  )
}

export default Header
*/
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
    <header className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
      {/* Logo */}
      <div className="text-2xl font-bold text-gray-800">
        <Link to="/">DTtesting</Link>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:block">
        <ul className="flex space-x-6 text-gray-700">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/privacy-policy">Privacy Policy</Link></li>
          <li><Link to="/sample-page">Sample Page</Link></li>
        </ul>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-700"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      {/* Mobile Nav */}
      {menuOpen && (
        <nav className="absolute top-16 right-6 bg-white shadow-lg rounded-md md:hidden">
          <ul className="flex flex-col items-start p-4 space-y-3 text-gray-700">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/sample-page">Sample Page</Link></li>
          </ul>
        </nav>
      )}
    </header>
  )
}

export default Header
