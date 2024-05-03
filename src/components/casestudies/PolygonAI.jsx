import * as React from "react"

export const PolygonAI = (props) => {
  const [body, title, sender] = [props.body, props.title, props.sender]

  return (
    <div
      data-aos="fade-right"
      data-aos-duration="1200"
      data-aos-delay="100"
      className="container"
    >
      <div className="jlm_portfolio">
        <div className="jlm_title">
          <div className="title_flex">
            <div className="left">
              <h3>Polygon AI</h3>
              <h4>Challenge:</h4>
              <h4>Solution: </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
