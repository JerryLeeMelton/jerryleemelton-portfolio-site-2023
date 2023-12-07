import React, { useState } from "react"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import { Gallery, Item } from "react-photoswipe-gallery"
import ReactTooltip from "react-tooltip"
import ModalVideo from "react-modal-video"
import Modal from "react-modal"
import Social from "./Social"

const Portfolio = () => {
  const [isOpen1, setOpen1] = useState(false)
  const [isOpen2, setOpen2] = useState(false)
  const [isOpen3, setOpen3] = useState(false)
  const [isOpen4, setOpen4] = useState(false)
  const [isOpen5, setOpen5] = useState(false)

  const toggleModalOne = () => {
    setOpen1(!isOpen1)
  }

  const toggleModalTwo = () => {
    setOpen2(!isOpen2)
  }

  const toggleModalThree = () => {
    setOpen3(!isOpen3)
  }

  const toggleModalFour = () => {
    setOpen4(!isOpen4)
  }

  const toggleModalFive = () => {
    setOpen5(!isOpen5)
  }

  // for modal details method
  // function toggleModalThree() {
  //   setIsOpen3(!isOpen3)
  // }
  // function toggleModalFour() {
  //   setIsOpen4(!isOpen4)
  // }

  return (
    <>
      <Gallery>
        <div className="container">
          <div className="jlm_portfolio">
            <div className="jlm_title">
              <div className="title_flex">
                <div className="left">
                  {/* <span>Portfolio</span> */}
                  <h3>My Work</h3>
                </div>
              </div>
            </div>
            {/* END jlm_TITLE */}

            <div className="portfolio_filter">
              <Tabs>
                <TabList>
                  <Tab>All</Tab>
                  <Tab>Vimeo</Tab>
                  <Tab>Youtube</Tab>
                  <Tab>Photography</Tab>
                  <Tab>Details</Tab>
                </TabList>
                {/* END TABLIST */}
                <div className="list_wrapper">
                  <TabPanel>
                    <ul className="portfolio_list">
                      {/* START PORTFOLIO PIECE 1 */}
                      <li data-aos="fade-right" data-aos-duration="1200">
                        <div className="inner">
                          <div className="entry jlm_portfolio_animation_wrap">
                            <img
                              src="assets/img/portfolio/5.jpg"
                              alt="Polygon AI User Interface"
                              data-tip
                              data-for="vimeo"
                              onClick={() => setOpen1(true)}
                            />
                            <ReactTooltip
                              id="polygon-ui"
                              place="bottom"
                              type="light"
                              effect="float"
                              className="tooltip-wrapper"
                            >
                              <div>
                                <h5>Polygon AI User Interface</h5>
                                {/* <span>Vimeo</span> */}
                              </div>
                            </ReactTooltip>
                          </div>
                        </div>
                      </li>
                      {/* END PORTFOLIO PIECE 1 */}
                      {/* START PORTFOLIO PIECE 2 */}
                      <li
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        data-aos-delay="100"
                      >
                        <div className="inner">
                          <div className="entry jlm_portfolio_animation_wrap">
                            <img
                              src="assets/img/portfolio/2.jpg"
                              alt="Polygon AI Logo"
                              data-tip
                              data-for="youtube"
                              onClick={() => setOpen2(true)}
                            />
                            <ReactTooltip
                              id="polygon-logo"
                              place="bottom"
                              type="light"
                              effect="float"
                              className="tooltip-wrapper"
                            >
                              <div>
                                <h5>Polygon AI Logo</h5>
                                {/* <span>Youtube</span> */}
                              </div>
                            </ReactTooltip>
                          </div>
                        </div>
                      </li>
                      {/* END PORTFOLIO PIECE 2 ==================================================== */}

                      {/* START PORTFOLIO PIECE 3 */}
                      <li data-aos="fade-right" data-aos-duration="1200">
                        <div className="inner">
                          <div className="entry jlm_portfolio_animation_wrap">
                            <img
                              src="assets/img/portfolio/5.jpg"
                              alt="Crypto Spotter"
                              data-tip
                              data-for="vimeo"
                              onClick={() => setOpen3(true)}
                            />
                            <ReactTooltip
                              id="crypto-spotter-site"
                              place="bottom"
                              type="light"
                              effect="float"
                              className="tooltip-wrapper"
                            >
                              <div>
                                <h5>Crypto Spotter Web Page</h5>
                                {/* <span>Vimeo</span> */}
                              </div>
                            </ReactTooltip>
                          </div>
                        </div>
                      </li>
                      {/* END PORTFOLIO PIECE 3 */}

                      {/* START PORTFOLIO PIECE 4 */}
                      <li data-aos="fade-right" data-aos-duration="1200">
                        <div className="inner">
                          <div className="entry jlm_portfolio_animation_wrap">
                            <img
                              src="assets/img/portfolio/5.jpg"
                              alt="Jerry Lee Melton - Photo Portfolio Website"
                              data-tip
                              data-for="vimeo"
                              onClick={() => setOpen4(true)}
                            />
                            <ReactTooltip
                              id="jlm-photo-portfolio"
                              place="bottom"
                              type="light"
                              effect="float"
                              className="tooltip-wrapper"
                            >
                              <div>
                                <h5>
                                  Jerry Lee Melton - Photo Portfolio Website
                                </h5>
                                {/* <span>Vimeo</span> */}
                              </div>
                            </ReactTooltip>
                          </div>
                        </div>
                      </li>
                      {/* END PORTFOLIO PIECE 4 */}

                      {/* START PORTFOLIO PIECE 5 */}
                      <li data-aos="fade-right" data-aos-duration="1200">
                        <div className="inner">
                          <div className="entry jlm_portfolio_animation_wrap">
                            <img
                              src="assets/img/portfolio/5.jpg"
                              alt="Polygon AI User Interface"
                              data-tip
                              data-for="vimeo"
                              onClick={() => setOpen5(true)}
                            />
                            <ReactTooltip
                              id="polygon-ui"
                              place="bottom"
                              type="light"
                              effect="float"
                              className="tooltip-wrapper"
                            >
                              <div>
                                <h5>Polygon AI User Interface</h5>
                                {/* <span>Vimeo</span> */}
                              </div>
                            </ReactTooltip>
                          </div>
                        </div>
                      </li>
                      {/* END PORTFOLIO PIECE 5 */}
                    </ul>
                    {/* END PORTFOLIO LIST */}
                  </TabPanel>
                  {/* END ALL PORTFOLIO GALLERY */}

                  <TabPanel>
                    <ul className="portfolio_list">
                      <li data-aos="fade-right" data-aos-duration="1200">
                        <div className="inner">
                          <div className="entry jlm_portfolio_animation_wrap">
                            <img
                              src="assets/img/portfolio/5.jpg"
                              alt="Vimeo"
                              data-tip
                              data-for="vimeo"
                              onClick={() => setOpen2(true)}
                            />
                            <ReactTooltip
                              id="vimeo"
                              place="bottom"
                              type="light"
                              effect="float"
                              className="tooltip-wrapper"
                            >
                              <div>
                                <h5>Teresa Butler</h5>
                                <span>Vimeo</span>
                              </div>
                            </ReactTooltip>
                          </div>
                        </div>
                      </li>
                      {/* END VIMEO */}
                    </ul>
                    {/* END PORTFOLIO LIST */}
                  </TabPanel>
                  {/* END VIMEO VIDEO */}

                  <TabPanel>
                    <ul className="portfolio_list">
                      <li data-aos="fade-right" data-aos-duration="1200">
                        <div className="inner">
                          <div className="entry jlm_portfolio_animation_wrap">
                            <img
                              src="assets/img/portfolio/2.jpg"
                              alt="Youtube"
                              data-tip
                              data-for="youtube"
                              onClick={() => setOpen1(true)}
                            />
                            <ReactTooltip
                              id="youtube"
                              place="bottom"
                              type="light"
                              effect="float"
                              className="tooltip-wrapper"
                            >
                              <div>
                                <h5>Ashely Flores</h5>
                                <span>Youtube</span>
                              </div>
                            </ReactTooltip>
                          </div>
                        </div>
                      </li>
                      {/* END YOUTUBE */}
                    </ul>
                    {/* END PORTFOLIO LIST */}
                  </TabPanel>
                  {/* END YOUTUBE VIDEO */}

                  <TabPanel>
                    <ul className="portfolio_list">
                      <li data-aos="fade-right" data-aos-duration="1200">
                        <div className="inner">
                          <div className="entry jlm_portfolio_animation_wrap">
                            <Item
                              original="assets/img/portfolio/4.jpg"
                              thumbnail="assets/img/portfolio/4.jpg"
                              width={500}
                              height={550}
                            >
                              {({ ref, open }) => (
                                <img
                                  src="assets/img/portfolio/4.jpg"
                                  alt="Childhood"
                                  data-tip
                                  data-for="shot"
                                  role="button"
                                  ref={ref}
                                  onClick={open}
                                />
                              )}
                            </Item>
                            <ReactTooltip
                              id="shot"
                              place="bottom"
                              type="light"
                              effect="float"
                              className="tooltip-wrapper"
                            >
                              <div>
                                <h5>Derek Smith</h5>
                                <span>Shot</span>
                              </div>
                            </ReactTooltip>
                          </div>
                        </div>
                      </li>
                      {/* END SHOT */}
                      <li
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        data-aos-delay="100"
                      >
                        <div className="inner">
                          <div className="entry jlm_portfolio_animation_wrap">
                            <Item
                              original="assets/img/portfolio/3.jpg"
                              thumbnail="assets/img/portfolio/3.jpg"
                              width={500}
                              height={550}
                            >
                              {({ ref, open }) => (
                                <img
                                  src="assets/img/portfolio/3.jpg"
                                  alt="Childhood"
                                  data-tip
                                  data-for="shot"
                                  role="button"
                                  ref={ref}
                                  onClick={open}
                                />
                              )}
                            </Item>
                            <ReactTooltip
                              id="shot2"
                              place="bottom"
                              type="light"
                              effect="float"
                              className="tooltip-wrapper"
                            >
                              <div>
                                <h5>Gloria jenkins</h5>
                                <span>Shot</span>
                              </div>
                            </ReactTooltip>
                          </div>
                        </div>
                      </li>
                      {/* END SHOT */}
                    </ul>
                    {/* END PORTFOLIO LIST */}
                  </TabPanel>
                  {/* END PHOTOGRAHY */}

                  <TabPanel>
                    <ul className="portfolio_list">
                      <li data-aos="fade-right" data-aos-duration="1200">
                        <div className="inner">
                          <div className="entry jlm_portfolio_animation_wrap">
                            <img
                              src="assets/img/portfolio/6.jpg"
                              alt="Details"
                              data-tip
                              data-for="detail"
                              // onClick={toggleModalThree}
                            />

                            <ReactTooltip
                              id="detail"
                              place="bottom"
                              type="light"
                              effect="float"
                              className="tooltip-wrapper"
                            >
                              <div>
                                <h5>Selena Gomez</h5>
                                <span>Details</span>
                              </div>
                            </ReactTooltip>
                          </div>
                        </div>
                      </li>
                      {/* END DETAILS */}
                      <li
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        data-aos-delay="100"
                      >
                        <div className="inner">
                          <div className="entry jlm_portfolio_animation_wrap">
                            <img
                              src="assets/img/portfolio/7.jpg"
                              alt="Details"
                              data-tip
                              data-for="detail2"
                              // onClick={toggleModalFour}
                            />

                            <ReactTooltip
                              id="detail2"
                              place="bottom"
                              type="light"
                              effect="float"
                              className="tooltip-wrapper"
                            >
                              <div>
                                <h5>Ave Simone</h5>
                                <span>Details</span>
                              </div>
                            </ReactTooltip>
                          </div>
                        </div>
                      </li>
                      {/* END DETAILS */}
                    </ul>
                    {/* END DETAILS GALLERY */}
                  </TabPanel>
                  {/* END CREATIVE PORTFOLIO GALLERY */}
                </div>
                {/* END LIST WRAPPER */}
              </Tabs>
            </div>
          </div>
        </div>
      </Gallery>
      {/* popup vidoe for youtube modal activation */}
      {/* <Modal
        isOpen={isOpen1}
        onRequestClose={() => setOpen1(false)}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      ></Modal> */}

      {/* popup vidoe for vimeo modal activation */}
      {/* <ModalVideo
        channel="vimeo"
        autoplay
        isOpen={isOpen2}
        videoId="100171151"
        onClose={() => setOpen2(false)}
      /> */}

      {/* START MODAL FOR PORTFOLIO DETAILS */}
      <Modal
        isOpen={isOpen3}
        // onRequestClose={toggleModalThree}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="jlm_modalbox_news portfolio_tm_modalbox">
          <button
            className="close-modal"
            // onClick={toggleModalThree}
          >
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="image">
                <img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: "url(assets/img/portfolio/6.jpg)",
                  }}
                ></div>
              </div>
              {/* END IMAGE */}
              <div className="portfolio_main_title">
                <h3>Selena Gomez</h3>
                <span>Details</span>
              </div>
              {/* END portfolio_main_title */}
              <div className="main_details">
                <div className="textbox">
                  <p>
                    We live in a world where we need to move quickly and iterate
                    on our ideas as flexibly as possible. Building mockups
                    strikes the ideal balance between true-life representation
                    of the end product and ease of modification.
                  </p>
                  <p>
                    Mockups are useful both for the creative phase of the
                    project - for instance when you're trying to figure out your
                    user flows or the proper visual hierarchy - and the
                    production phase when they will represent the target
                    product. Making mockups a part of your creative and
                    development process allows you to quickly and easily ideate.
                  </p>
                </div>
                <div className="detailbox">
                  <ul>
                    <li>
                      <span className="first">Client</span>
                      <span>Alvaro Morata</span>
                    </li>
                    <li>
                      <span className="first">Category</span>
                      <span>Details</span>
                    </li>
                    <li>
                      <span className="first">Date</span>
                      <span>March 07, 2021</span>
                    </li>
                    <li>
                      <span className="first">Share</span>
                      <Social />
                      {/* END SOCIAL SHARE */}
                    </li>
                  </ul>
                </div>
              </div>
              {/* main_details */}

              <div className="additional_images">
                <ul className="gallery_zoom">
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/6.jpg)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/2.jpg)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/3.jpg)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}
                </ul>
              </div>
            </div>
          </div>
          {/* END BOX INNER */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR PORTFOLIO DETAILS */}

      {/* START MODAL FOR PORTFOLIO DETAILS */}
      <Modal
        isOpen={isOpen4}
        // onRequestClose={toggleModalFour}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="jlm_modalbox_news portfolio_tm_modalbox">
          <button
            className="close-modal"
            // onClick={toggleModalFour}
          >
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="image">
                <img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: "url(assets/img/portfolio/7.jpg)",
                  }}
                ></div>
              </div>
              {/* END IMAGE */}
              <div className="portfolio_main_title">
                <h3>Ave Simone</h3>
                <span>Details</span>
              </div>
              {/* END portfolio_main_title */}
              <div className="main_details">
                <div className="textbox">
                  <p>
                    We live in a world where we need to move quickly and iterate
                    on our ideas as flexibly as possible. Building mockups
                    strikes the ideal balance between true-life representation
                    of the end product and ease of modification.
                  </p>
                  <p>
                    Mockups are useful both for the creative phase of the
                    project - for instance when you're trying to figure out your
                    user flows or the proper visual hierarchy - and the
                    production phase when they will represent the target
                    product. Making mockups a part of your creative and
                    development process allows you to quickly and easily ideate.
                  </p>
                </div>
                <div className="detailbox">
                  <ul>
                    <li>
                      <span className="first">Client</span>
                      <span>Alvaro Morata</span>
                    </li>
                    <li>
                      <span className="first">Category</span>
                      <span>Details</span>
                    </li>
                    <li>
                      <span className="first">Date</span>
                      <span>March 07, 2021</span>
                    </li>
                    <li>
                      <span className="first">Share</span>
                      <Social />
                      {/* END SOCIAL SHARE */}
                    </li>
                  </ul>
                </div>
              </div>
              {/* main_details */}

              <div className="additional_images">
                <ul className="gallery_zoom">
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/6.jpg)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/5.jpg)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/4.jpg)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}
                </ul>
              </div>
            </div>
          </div>
          {/* END BOX INNER */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR PORTFOLIO DETAILS */}

      {/* START PORTFOLIO DETAIL MODAL 1 ============================================================================ */}
      <Modal
        isOpen={isOpen1}
        onRequestClose={toggleModalOne}
        onClose={toggleModalOne}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="jlm_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModalOne}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="image">
                <img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: "url(assets/img/portfolio/7.jpg)",
                  }}
                ></div>
              </div>
              {/* END IMAGE */}
              <div className="portfolio_main_title">
                <h3>Polygon AI User Interface</h3>
                <span>Details</span>
              </div>
              {/* END portfolio_main_title */}
              <div className="main_details">
                <div className="textbox">
                  <p>
                    We live in a world where we need to move quickly and iterate
                    on our ideas as flexibly as possible. Building mockups
                    strikes the ideal balance between true-life representation
                    of the end product and ease of modification.
                  </p>
                  <p>
                    Mockups are useful both for the creative phase of the
                    project - for instance when you're trying to figure out your
                    user flows or the proper visual hierarchy - and the
                    production phase when they will represent the target
                    product. Making mockups a part of your creative and
                    development process allows you to quickly and easily ideate.
                  </p>
                </div>
                <div className="detailbox">
                  <ul>
                    <li>
                      <span className="first">Client</span>
                      <span>Alvaro Morata</span>
                    </li>
                    <li>
                      <span className="first">Category</span>
                      <span>Details</span>
                    </li>
                    <li>
                      <span className="first">Date</span>
                      <span>March 07, 2021</span>
                    </li>
                    <li>
                      <span className="first">Share</span>
                      <Social />
                      {/* END SOCIAL SHARE */}
                    </li>
                  </ul>
                </div>
              </div>
              {/* main_details */}

              <div className="additional_images">
                <ul className="gallery_zoom">
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/6.jpg)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/5.jpg)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/4.jpg)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}
                </ul>
              </div>
            </div>
          </div>
          {/* END BOX INNER */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR PORTFOLIO DETAILS */}
    </>
  )
}

export default Portfolio
