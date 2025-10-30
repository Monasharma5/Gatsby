/*import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query SafeFooterQuery {
      wp {
        generalSettings {
          title
        }
        menus(where: { location: FOOTER }) {
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
      }
    }
  `)

  const title = data.wp?.generalSettings?.title || "My Gatsby WordPress Site"
  const menuItems = data.wp?.menus?.nodes?.[0]?.menuItems?.nodes || []

  return (
    <footer
      style={{
        background: "#f4f4f4",
        padding: "1rem",
        textAlign: "center",
        borderTop: "1px solid #ddd",
        marginTop: "2rem",
      }}
    >
      <p>© {new Date().getFullYear()} {title}. All rights reserved.</p>

      {menuItems.length > 0 && (
        <nav style={{ marginTop: "0.5rem" }}>
          {menuItems.map((item) => (
            <Link
              key={item.id}
              to={item.url.replace("https://botryose-hyperkeratotic-emelia.ngrok-free.dev/Testingsite/", "")}
              style={{ margin: "0 0.5rem", textDecoration: "none", color: "#333" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </footer>
  )
}

export default Footer
/*
import React from "react"

const Footer = () => (
  <footer style={{ background: "#eee", padding: "1rem", textAlign: "center" }}>
    <p>© {new Date().getFullYear()} My Gatsby WordPress Site</p>
  </footer>
)

export default Footer
*/
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
