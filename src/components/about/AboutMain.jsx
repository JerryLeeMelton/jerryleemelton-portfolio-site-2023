import React from "react"
import Modal from "react-modal"
import Testimonial from "./Testimonial"
import Intro from "./Intro"
import KnowledgeInterest from "./KnowledgeInterest"
import PersonalInfo from "./PersonalInfo"
import Resume from "./Resume"
import Skills from "./Skills"

Modal.setAppElement("#root")

const AboutMain = () => {
  return (
    <>
      <div className="container">
        <div className="jlm_about">
          <div className="jlm_title">
            <div className="title_flex">
              <div className="left">
                {/* <span>About</span> */}
                <h3>About Me</h3>
              </div>
            </div>
          </div>
          {/* End title */}

          <Intro />
          <div className="jlm_short_info">
            <PersonalInfo />
          </div>
          {/* End personal info */}

          <div className="jlm_button" data-position="left">
            <a href="assets/img/cv.pdf" download>
              <span>Download CV</span>
            </a>
          </div>
        </div>
      </div>
      {/* End .container */}

      <div className="jlm_progressbox">
        <div className="container">
          <div className="in">
            <Skills />
          </div>
          {/* End in */}
        </div>
        {/* End .container */}
      </div>
      {/* End jlm_progressbox */}

      <div className="jlm_skillbox">
        <div className="container">
          <div className="in">
            <KnowledgeInterest />
          </div>
        </div>
      </div>
      {/* End .jlm_skillbox */}

      <div className="jlm_resumebox">
        <div className="container">
          <div className="in">
            <Resume />
          </div>
        </div>
      </div>
      {/* End jlm_resumebox */}

      <div className="jlm_testimonials">
        <div className="container">
          <div className="jlm_section_title">
            <h3>Testimonials</h3>
          </div>
          <div className="list">
            <Testimonial />
          </div>
        </div>
      </div>
      {/* End jlm_testimonials */}

      {/* /ABOUT */}
    </>
  )
}

export default AboutMain
