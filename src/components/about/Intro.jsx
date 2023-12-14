import React from "react"

const Intro = () => {
  const introContent = {
    image: "assets/img/portrait/jlm_main_portrait.webp",
    name: "Jerry Lee Melton",
    designation: "Front-End Software Developer and Designer",
    text: (
      <>
        <p>
          I'm a web developer and graphic designer currently based in Portland,
          Oregon. I have a huge passion for creative work as well as tech, so
          web development has been an incredibly rewarding field to dive into.
        </p>

        <p>
          I hope to leverage my extensive experience in photography and visual
          design as I move forward with my career and to continue learning more
          and more about this wonderful field of work.
        </p>

        <p>
          Outside of work, you'll find me playing guitar, doting on my two cats,
          buying way too many Magic: The Gathering cards, and trying to hunt
          down the best vegan food in the city.
        </p>
      </>
    ),
  }

  return (
    <>
      <div className="top_author_image">
        <img src={introContent.image} alt="about" />
      </div>
      <div className="about_title">
        <h3>{introContent.name}</h3>
        <span>{introContent.designation}</span>
      </div>
      <div className="about_text">{introContent.text}</div>
    </>
  )
}

export default Intro
