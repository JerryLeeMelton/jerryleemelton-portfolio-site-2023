import * as React from "react"
import { CaseStudyTest } from "./caseStudies/CaseStudyTest"
import { PolygonAI } from "./caseStudies/PolygonAI"

export const CaseStudyViewer = (props) => {
  const [caseStudy] = [props.caseStudy]

  switch (caseStudy) {
    case "PolygonAI":
      return <PolygonAI />
    case "CaseStudyTest":
      return <CaseStudyTest />
    default:
      return null
  }
}
