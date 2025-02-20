import React, { useEffect, useState } from "react"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import Home from "../components/Home"
import About from "../components/about/AboutMain"
import Portfolio from "../components/PortfolioCreative"
import Contact from "../components/Contact"
import CopyRight from "../components/CopyRight"
import PageTitle from "../components/PageTitle"
import { useCaseStudy } from "../context/CaseStudyContext"

const HomeMain = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const setOpenCaseStudy = useCaseStudy().setOpenCaseStudy

  useEffect(() => {
    document.body.classList.toggle("dark", isDarkMode)
    localStorage.setItem("isDarkModeEnabled", isDarkMode)
  }, [isDarkMode])

  const handleTabSelect = (index) => {
    if (index === 2) {
      setOpenCaseStudy("")
    }
  }

  return (
    <>
      <PageTitle title="Jerry Lee Melton - Front-End Developer" />
      {/* End page title for seo */}

      <Tabs onSelect={handleTabSelect}>
        <TabList>
          {/* START LEFT MENU CONTENT */}
          <div className="leftpart">
            <div className="leftpart_inner">
              <div className="logo">
                <h3 className="josefin-light">Jerry Lee Melton</h3>
              </div>
              {/* END LOGO */}

              <div className="menu">
                <ul>
                  <Tab>
                    <img
                      className="svg"
                      src="/assets/img/svg/home-run.svg"
                      alt="homerun"
                    />
                    <span className="menu_content">Home</span>
                  </Tab>
                  <Tab>
                    <img
                      className="svg"
                      src="/assets/img/svg/avatar.svg"
                      alt="avatar"
                    />
                    <span className="menu_content">About</span>
                  </Tab>
                  <Tab>
                    <img
                      className="svg"
                      src="/assets/img/svg/briefcase.svg"
                      alt="briefcase"
                    />
                    <span className="menu_content">Portfolio</span>
                  </Tab>
                  {/* <Tab>
                    <img
                      className="svg"
                      src="/assets/img/svg/paper.svg"
                      alt="paper"
                    />
                    <span className="menu_content">Services</span>
                  </Tab> */}
                  {/* <Tab>
                    <img
                      className="svg"
                      src="/assets/img/svg/paper.svg"
                      alt="paper"
                    />
                    <span className="menu_content">News</span>
                  </Tab> */}
                  <Tab>
                    <img
                      className="svg"
                      src="/assets/img/svg/mail.svg"
                      alt="mail"
                    />
                    <span className="menu_content"> Contact</span>
                  </Tab>
                </ul>
              </div>
              {/* END MENU */}

              <CopyRight />
              {/* END COPYRIGHT */}
            </div>
          </div>
          {/* END LEFT MENU CONTENT */}
        </TabList>
        {/* END SIDEBAR TABLIST */}

        {/* START RIGHT PART CONTENT */}
        <div className="rightpart">
          <div className="rightpart_in">
            <div className="jlm_section">
              <TabPanel>
                <div data-aos="fade-right" data-aos-duration="1200">
                  <Home />
                </div>
              </TabPanel>
              {/* END HOME MENU TAB CONTENT */}

              <TabPanel>
                <div
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                >
                  <About />
                </div>
              </TabPanel>
              {/* END ABOUT MENU TAB CONTENT */}

              <TabPanel>
                <div
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                >
                  <Portfolio />
                </div>
              </TabPanel>
              {/* END PORTFOLIO MENU TAB CONTENT */}

              {/* <TabPanel>
                <div
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                >
                  <ServiceMain />
                </div>
              </TabPanel> */}
              {/* END ABOUT MENU TAB CONTENT */}

              {/* <TabPanel>
                <News />
              </TabPanel> */}
              {/* END NEWS MENU TAB CONTENT */}

              <TabPanel>
                <div
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  <Contact />
                </div>
              </TabPanel>
              {/* END CONTACT MENU TAB CONTENT */}
            </div>
          </div>
        </div>
        {/* END RIGHT PART CONTENT */}
      </Tabs>
      {/* END TABS */}
    </>
  )
}

export default HomeMain
