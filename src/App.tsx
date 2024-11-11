import { RouterProvider } from "react-router-dom"
import { routes } from "./routes"
import { GlobalStyles } from "./assets/css/GlobalStyles"

export const App = () => {
  return (
      <>
        <GlobalStyles />
        <RouterProvider router={routes} />
      </>
  )
}