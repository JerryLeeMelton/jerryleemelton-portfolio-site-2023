import React, { useEffect } from "react"
import AllRoutes from "./router/AllRoutes"
import AOS from "aos"
import "aos/dist/aos.css"
import "photoswipe/dist/photoswipe.css"
import { ToastContainer } from "react-toastify"
import { CaseStudyProvider } from "./context/CaseStudyContext"

const App = () => {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <div className="jlm_all_wrap">
      <CaseStudyProvider>
        <AllRoutes />
        <ToastContainer />
      </CaseStudyProvider>
    </div>
  )
}

export default App
