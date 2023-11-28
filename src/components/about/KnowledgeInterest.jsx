import React from "react"

const KnowledgeInterest = () => {
  const knowledgeContent = [
    {
      id: 1,
      colClass: "left",
      title: "Skills",
      content: [
        "Javascript, Typescript",
        "HTML5",
        "CSS 3, SASS",
        "React",
        "Node.js",
        "JQuery",
        "Git, Github, Gitlab",
        "Graphic Design",
        "Photography, Photo Editing",
        "Adobe Photoshop",
        "Adobe Illustrator",
      ],
    },
    {
      id: 2,
      colClass: "right",
      title: "Interests",
      content: [
        "Music",
        "Guitar",
        "Film",
        "Vegan Food",
        "Cooking",
        "Boxing",
        "Martial Arts",
        "Philosophy",
        "Tabletop Gaming",
        "Video Gaming",
      ],
    },
  ]

  return (
    <>
      {knowledgeContent.map((item) => (
        <div className={item.colClass} key={item.id}>
          <div className="jlm_section_title">
            <h3>{item.title}</h3>
          </div>
          <div className="jlm_skill_list">
            <ul>
              {item.content.map((val, i) => (
                <li key={i}>
                  <span>
                    <img
                      className="svg"
                      src="assets/img/svg/rightarrow.svg"
                      alt="arrow"
                    />
                    {val}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  )
}

export default KnowledgeInterest
