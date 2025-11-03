import React from "react"

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      key="wp-theme-style"
      rel="stylesheet"
      href="https://botryose-hyperkeratotic-emelia.ngrok-free.dev/Testingsite/wp-content/themes/twentytwentyfive/style.css"
    />,
  ])
}
