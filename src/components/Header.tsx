import { useEffect, useState } from 'react'

// Design
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

// Internal
import initialsImage from '../assets/AS.webp'
import cursor from '../assets/finger.png'


const styleSx = {
  nameText: {
    fontSize: "1rem",
    color: "#56595c",
    letterSpacing: "0.05em",
    fontFamily: "Nunito",
    fontWeight: 700,
    textShadow: "0 0 2px #56595c",
    scale: "1",
    "&:hover": {
      color: "#000",
      scale: "1.05",
      transition: "scale 0.2s, color 0.2s",
      cursor: `url(${cursor}), auto`,
    },
  }
}

export default function Header() {
  let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const [animation, setAnimation] = useState("none");
  const [headerColor, setHeaderColor] = useState("transparent");


  useEffect(() => {
    setTimeout(() => {
      let name_texts = document.querySelectorAll(".name_text")
      if (name_texts) {
        let changes = 0;
        name_texts.forEach((name_text: any) => {
          let interval = setInterval(() => {
            name_text.innerText = name_text?.innerText.split("").map((_: any, index: any) => {
              if (index < changes) {
                return name_text?.dataset.value[index]
              }
              return letters[Math.floor(Math.random() * 26)]
            }).join("")
            changes += 1 / 3;
            if (changes > name_text?.innerText.length) clearInterval(interval)
          }, 50)
        })
      }
    }, 100)
  }, [])


  const [currentSection, setCurrentSection] = useState("HOME")


  document.addEventListener("scroll", () => {
    // console.log({ scrollY: window.scrollY });
    if (window.scrollY <= 750) {
      setCurrentSection("HOME")
    } else if (window.scrollY <= 1500) {
      setCurrentSection("PROJECTS")
    } else if (window.scrollY <= 2250) {
      setCurrentSection("ABOUT ME")
    } else {
      setCurrentSection("TALK TO ME")
    }

    if (window.scrollY > 100) {
      setHeaderColor("#FFFFE0");
      setAnimation("header-in 1.2s forwards")
    } else {
      setHeaderColor("transparent")
      setAnimation("header-out 1.2s forwards")
    }
  })

  return (
    <>
      <Box
        id="header"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          // gap: 15,
          width: "960px",
          position: "fixed",
          top: "35px",
          backgroundColor: headerColor,
          border: headerColor !== "transparent" ? "1px solid #56595c" : "none",
          padding: "0px 50px",
          borderRadius: "40px",
          "@keyframes header-in": {
            "0%": {
              opacity: 0,
              transform: "translateY(-20px)"
            },
            "100%": {
              opacity: 1,
              transform: "translateY(0)"
            }
          },
          "@keyframes header-out": {
            from: {
              opacity: 0,
              transform: "translateY(-20px)"
            },
            to: {
              opacity: 1,
              transform: "translateY(0)"
            }
          },
          "@media (max-width: 1300px)": {
            width: "720px",
            padding: "0px 20px",
            transition: "width 0.5s , top 0.5s",
          },
          "@media (max-width: 1000px)": {
            top: "-100px",
            transition: "width 0.5s , top 0.5s",
          },
          transition: "width 0.5s , top 0.5s",
          animation: animation,
          zIndex: 10,
          boxShadow: headerColor !== "transparent" ? "0 5px 10px #56595c" : "none"
        }}
      >
        <Typography className="name_text" data-value="HOME" sx={{
          ...styleSx.nameText,
          color: currentSection === "HOME" ? "#000" : "#56595c"
        }}
          onClick={() => window.scrollTo({
            top: 0,
            behavior: 'smooth'
          })}
          component="a">
          HOME
        </Typography>
        <Typography className="name_text" data-value="PROJECTS" sx={{
          ...styleSx.nameText,
          color: currentSection === "PROJECTS" ? "#000" : "#56595c"
        }}>
          PROJECTS
        </Typography>
        <img src={initialsImage} alt="Logo" id="logo" style={{
          maxWidth: "50px",
          maxHeight: "50px",
        }}
        />
        <Typography className="name_text" data-value="ABOUT ME" sx={{
          ...styleSx.nameText,
          color: currentSection === "ABOUT ME" ? "#000" : "#56595c"
        }}>
          ABOUT ME
        </Typography>
        <Typography className="name_text" data-value="TALK TO ME" sx={{
          ...styleSx.nameText,
          color: currentSection === "TALK TO ME" ? "#000" : "#56595c",
        }}>
          TALK TO ME
        </Typography>
        {/* <Typography  className="name_text" data-value="DRI SANTOS" sx={{
        fontSize: "1.2rem",
        fontWeight: "bold",
        marginLeft: 2,
        color: "#56595c",
        letterSpacing: "0.05em"
      }}>
        DRI SANTOS
      </Typography> */}

      </Box>
      <img src={initialsImage} alt="Logo" className="logo" style={{
        maxWidth: "50px",
        maxHeight: "50px",
        alignSelf: "flex-start",
        left: "36px",
        top: "32px",
        position: "fixed",
      }} />
      <IconButton
        sx={{
          color: "#56595c",
          "&:hover": {
            color: "#000"
          },
          alignSelf: "flex-end",
          right: "30px",
          top: "32px",
          position: "fixed",
          "@media (min-width: 1000px)": {
            right: "-30px",
            transition: "right 0.5s",
          },
          transition: "right 0.5s",
          "&:focus, &:active": {
            outline: "none",
            transform: "rotate(-90deg)",
            transition: "transform 0.5s",
          }
        }}
        aria-label='menu'
        onClick={() => {
          let header = document.getElementById("header")
          if (header) {
            if (header.style.top === "35px") {
              header.style.top = "-100px"
            } else {
              header.style.top = "35px"
            }
          }
        }}
      >
        <MenuRoundedIcon fontSize='large' />
      </IconButton>
    </>
  )
}
