import React, { memo } from "react"
import { useRoutes } from "react-router-dom"
import routes from "@/router"

const App = memo(() => {
  return (
    <div>
      <div className="header">Header</div>

      {/* !Router config */}
      <div className="main">
        {useRoutes(routes)}
      </div>

      <div className="footer">Footer</div>
    </div>
  )
})

export default App
