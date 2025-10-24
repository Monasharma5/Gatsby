import React from "react"
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
              to={item.url.replace("http://localhost/Testingsite", "")}
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
