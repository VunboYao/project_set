import { configureStore } from "@reduxjs/toolkit"
import home from "@/store/modules/home"
import entire from "@/store/modules/entire"

export default configureStore({
  reducer: {
    home,
    entire,
  },
})
