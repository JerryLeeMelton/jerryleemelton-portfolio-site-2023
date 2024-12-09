import React, { createContext, useState, useContext } from "react"

const CaseStudyContext = createContext()

export const CaseStudyProvider = ({ children }) => {
  const [openCaseStudy, setOpenCaseStudy] = useState("")

  return (
    <CaseStudyContext.Provider value={{ openCaseStudy, setOpenCaseStudy }}>
      {children}
    </CaseStudyContext.Provider>
  )
}

export const useCaseStudy = () => useContext(CaseStudyContext)
