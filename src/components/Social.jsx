import React from "react"

const SocialShare = [
  { iconName: "github", link: "https://github.com/JerryLeeMelton" },
  { iconName: "linkedin", link: "https://www.linkedin.com/in/jerryleemelton/" },
  {
    iconName: "instagram",
    link: "https://instagram.com/thejermeister?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr",
  },
]
const Social = () => {
  return (
    <>
      <ul className="social">
        {SocialShare.map((val, i) => (
          <li key={i}>
            <a href={`${val.link}`} target="_blank" rel="noreferrer">
              <img
                className="svg"
                src={`/assets/img/svg/social/${val.iconName}.svg`}
                alt="social"
              ></img>
            </a>
          </li>
        ))}
      </ul>
      {/* END SOCIAL */}
    </>
  )
}

export default Social
