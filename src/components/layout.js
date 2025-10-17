import React from "react"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main style={{ padding: "2rem", minHeight: "80vh" }}>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
