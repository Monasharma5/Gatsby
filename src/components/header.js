/*import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      wp {
        generalSettings {
          title
        }
        menus {
          nodes {
            name
            menuItems {
              nodes {
                label
                url
              }
            }
          }
        }
      }
    }
  `)

  const menu = data.wp.menus.nodes[0] // First menu (e.g., "Primary")
  const title = data.wp.generalSettings.title

  return (
    <header style={{ background: "#eee", padding: "1rem" }}>
      <h2>{title}</h2>
      {menu && (
        <nav>
          {menu.menuItems.nodes.map(item => (
            <Link
              key={item.url}
              to={item.url.replace(data.wp.generalSettings.url, "")}
              style={{ marginRight: "1rem" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}

export default Header
*/
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
