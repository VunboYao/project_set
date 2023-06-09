import { StrictMode, Suspense } from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { HashRouter } from "react-router-dom"

import App from "./App"
import store from "@/store"
import "normalize.css"
import "./assets/css/index.less"

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <StrictMode>
    <Suspense fallback={<div>loading</div>}>
      <Provider store={store}>
        <HashRouter>
          <App />
        </HashRouter>
      </Provider>
    </Suspense>
  </StrictMode>,
)
