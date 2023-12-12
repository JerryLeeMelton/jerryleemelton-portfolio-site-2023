import React from "react"
import Social from "./Social"

const Home = () => {
  return (
    <>
      <div className="jlm_home">
        <div className="home_content">
          <div className="avatar">
            <div
              className="image avatar_img"
              style={{
                backgroundImage:
                  "url(assets/img/portrait/jlm_home_zoomed_portrait.webp)",
              }}
            ></div>
            {/* END AVATAR IMAGE */}
          </div>
          {/* END AVATAR */}
          <div className="details">
            <h3 className="name">Jerry Lee Melton</h3>
            <p className="job">
              Passionate and creative front-end developer and Designer based in
              Portland, OR.
            </p>
            {/* END JOB */}
            <Social />
          </div>
          {/* END DETAILS */}
        </div>
        {/* END HOME CONTENT */}
      </div>
      {/* END HOME */}
    </>
  )
}

export default Home
