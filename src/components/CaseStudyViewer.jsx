import * as React from "react"
import { CaseStudyTest } from "./casestudies/CaseStudyTest"
import { PolygonAI } from "./casestudies/PolygonAI"
import { PhotographyPortfolioSite } from "./casestudies/PhotographyPortfolioSite"

export const CaseStudyViewer = (props) => {
  const [caseStudy] = [props.caseStudy]
  const setOpenCaseStudy = props.setOpenCaseStudy

  switch (caseStudy) {
    case "PolygonAI":
      return <PolygonAI setOpenCaseStudy={setOpenCaseStudy} />
    case "PhotographyPortfolioSite":
      return <PhotographyPortfolioSite setOpenCaseStudy={setOpenCaseStudy} />
    case "CaseStudyTest":
      return <CaseStudyTest setOpenCaseStudy={setOpenCaseStudy} />
    default:
      return null
  }
}
