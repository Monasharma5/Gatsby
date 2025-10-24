
import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
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

  const menuItems = data.wp.menus.nodes[0]?.menuItems.nodes || []

  return (
    <footer
      style={{
        background: "#eee",
        padding: "1rem",
        textAlign: "center",
        marginTop: "2rem",
      }}
    >
      <p>© {new Date().getFullYear()} {data.wp.generalSettings.title}</p>
      <nav style={{ marginTop: "1rem" }}>
        {menuItems.map(item => (
          <Link
            key={item.id}
            to={item.url.replace("http://localhost/Testingsite", "")}
            style={{ margin: "0 0.5rem" }}
          >
            {item.label}
          </Link>
        ))}
      </nav>
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
