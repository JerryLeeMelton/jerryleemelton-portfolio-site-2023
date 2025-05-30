import * as React from "react"
import { CaseStudyTest } from "./casestudies/CaseStudyTest"
import { PolygonAI } from "./casestudies/PolygonAI"
import { PhotographyPortfolioSite } from "./casestudies/PhotographyPortfolioSite"
import { MidiMani } from "./casestudies/MidiMani"
import { Nomenator } from "./casestudies/Nomenator"
import { useCaseStudy } from "../context/CaseStudyContext"

export const CaseStudyViewer = () => {
  const { openCaseStudy, setOpenCaseStudy } = useCaseStudy()

  switch (openCaseStudy) {
    case "PolygonAI":
      return <PolygonAI setOpenCaseStudy={setOpenCaseStudy} />
    case "PhotographyPortfolioSite":
      return <PhotographyPortfolioSite setOpenCaseStudy={setOpenCaseStudy} />
    case "MidiMani":
      return <MidiMani setOpenCaseStudy={setOpenCaseStudy} />
    case "Nomenator":
      return <Nomenator setOpenCaseStudy={setOpenCaseStudy} />

    case "CaseStudyTest":
      return <CaseStudyTest setOpenCaseStudy={setOpenCaseStudy} />

    default:
      return null
  }
}
