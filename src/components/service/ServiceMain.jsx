import React from "react"
import FunFact from "./FunFact"
import Partners from "./Partners"
import Pricing from "./Pricing"
import Services from "./Services"

const ServiceMain = () => {
  return (
    <>
      {/* SERVICE */}

      <div className="container">
        <div className="jlm_services">
          <div className="jlm_title">
            <div className="title_flex">
              <div className="left">
                {/* <span>Services</span> */}
                <h3>What I Do</h3>
              </div>
            </div>
          </div>
          {/* End jlm_title */}

          <div className="list">
            <ul>
              <Services />
            </ul>
          </div>
          {/* End list */}
        </div>
      </div>
      {/* End .container */}

      {/* <div className="jlm_partners">
        <div className="container">
          <div className="jlm_section_title">
            <h3>Partners</h3>
          </div>
          <div className="partners_inner">
            <ul>
              <Partners />
            </ul>
          </div>
        </div>
      </div> */}
      {/* End partners */}

      {/* <div className="jlm_facts">
        <div className="container">
          <div className="jlm_section_title">
            <h3>Fun Facts</h3>
          </div>
          <div className="list">
            <ul>
              <FunFact />
            </ul>
          </div>
        </div>
      </div> */}
      {/* End funfacts */}

      {/* <div className="jlm_pricing">
        <div className="container">
          <div className="jlm_section_title">
            <h3>Pricing</h3>
          </div>
          <div className="list">
            <ul>
              <Pricing />
            </ul>
          </div>
        </div>
      </div> */}
      {/* End pricing */}

      {/* /SERVICE */}
    </>
  )
}

export default ServiceMain
