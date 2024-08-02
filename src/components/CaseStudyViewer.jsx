import * as React from "react"
import { CaseStudyTest } from "./casestudies/CaseStudyTest"
import { PolygonAI } from "./casestudies/PolygonAI"

export const CaseStudyViewer = (props) => {
  const [caseStudy] = [props.caseStudy]
  const setOpenCaseStudy = props.setOpenCaseStudy

  switch (caseStudy) {
    case "PolygonAI":
      return <PolygonAI setOpenCaseStudy={setOpenCaseStudy} />
    case "CaseStudyTest":
      return <CaseStudyTest setOpenCaseStudy={setOpenCaseStudy} />
    default:
      return null
  }
}
