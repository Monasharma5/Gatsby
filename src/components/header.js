import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const Header = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      wp {
        generalSettings {
          title
          description
        }
        themeModSettings {
          customLogo {
            sourceUrl
          }
        }
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
      }
    }
  `)

  const menuItems = data.wp.menus.nodes[0]?.menuItems.nodes || []
  const logoUrl = data.wp.themeModSettings?.customLogo?.sourceUrl

  return (
    <header
      style={{
        padding: "1rem 2rem",
        background: "#f4f4f4",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        {logoUrl ? (
          <img src={logoUrl} alt="Site logo" style={{ height: "50px", marginRight: "1rem" }} />
        ) : null}
        <div>
          <h1 style={{ margin: 0 }}>{data.wp.generalSettings.title}</h1>
          <p style={{ margin: 0 }}>{data.wp.generalSettings.description}</p>
        </div>
      </div>
      <nav>
        {menuItems.map(item => (
          <Link
            key={item.id}
            to={item.url.replace("https://botryose-hyperkeratotic-emelia.ngrok-free.dev/Testingsite/", "")}
            style={{ marginLeft: "1rem" }}
          >
            {item.label}
          </Link>
        ))}
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
