import { useEffect, useState } from 'react'

// Design
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

// Internal
// import initialsImage from '../assets/AS.webp'
// import cursor from '../assets/finger.png'


const styleSx = {
  nameText: {
    fontSize: "0.8rem",
    color: "#56595c",
    letterSpacing: "0.05em",
    fontWeight: "400 !important",
    // textShadow: "0 0 2px #56595c",
    scale: "1",
    "&:hover": {
      color: "#000",
      scale: "1.05",
      transition: "scale 0.2s, color 0.2s",
      // cursor: `url(${cursor}), auto`,
    },
  },
  button: {
    padding: "8px 20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "border 0.5s",
    borderRadius: "2px", // Opcional: arredonda os cantos para um visual mais suave
  }
}

export default function Header() {
  let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const [animationHeader, setAnimationHeader] = useState("none");
  const [borderColor, setBorderColor] = useState("black");
  const [paddingBlock, setPaddingBlock] = useState("33px");
  // const [animationLine, setAnimationLine] = useState("none");

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


  const [currentSection, setCurrentSection] = useState("I'm Dri")


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY <= 750) {
        setCurrentSection("I'm Dri")
      } else if (window.scrollY <= 1620) {
        setCurrentSection("Projects")
      } else if (window.scrollY <= 2250) {
        setCurrentSection("About me")
      } else {
        setCurrentSection("Habilities")
      }

      if (window.scrollY > 100) {
        setPaddingBlock("10px")
        setAnimationHeader("header-in 1.2s forwards")
        setBorderColor("black")
        // setAnimationLine("showLine 1s forwards")
      } else {
        setPaddingBlock("33px")
        setAnimationHeader("header-out 1.2s forwards")
        setBorderColor("transparent")
        // setAnimationLine("hideLine 0.01s forwards")
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Box
        id="header"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          // gap: 15,
          // width: "88%",
          left: "20px",
          right: "20px",
          top: "0px",
          position: "fixed",
          backgroundColor: borderColor !== "transparent" ? "#FFFFE0" : "transparent",
          padding: "0px 80px",
          // borderRadius: "40px",
          border: `1px solid ${borderColor}`,
          borderTop: "none",
          paddingBlock: paddingBlock,
          borderBottom: `1px solid ${borderColor}`,
          transition: "padding 0.5s, top 0.5s, background-color 0.5s, border 0.5s",
          animation: animationHeader,
          zIndex: 10,
          // boxShadow: borderColor !== "transparent" ? "0 5px 10px #56595c" : "none"
        }}
      >
        <Box>
          <Typography className="name_text" data-value="AS" sx={{
            ...styleSx.nameText,
            color: "#000",
            fontWeight: "800 !important",
            fontSize: "24px",
          }}
            component="a">
            AS
          </Typography>
        </Box>
        <Box sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 3
        }}>
          {["I'm Dri", "Projects", "About me",].map((section) => (
            <Typography
              key={section}
              className="name_text"
              data-value={section}
              sx={{
                ...styleSx.nameText,
                ...styleSx.button,
                color: currentSection === section ? "#000" : "#56595c",
                borderBottom: currentSection === section ? "1px solid #56595c" : "1px solid transparent",
                borderLeft: currentSection === section ? "1px solid #56595c" : "1px solid transparent",
                borderTop: currentSection === section ? "1px solid #56595c" : "1px solid transparent",
                borderRight: currentSection === section ? "1px solid #56595c" : "1px solid transparent",
              }}
              onClick={() => {
                if (section === "I'm Dri") {
                  window.scrollTo({ top: 0, behavior: "smooth" })
                  return;
                }
                let element = document.getElementById(section.replace(/\s+/g, '-').toLowerCase());
                console.log({ element, section: section.replace(/\s+/g, '-').toLowerCase() });
                
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              {section}
            </Typography>
          ))}
        </Box>
        <Box>
          <Typography className="name_text" data-value="Talk to me" sx={{
            ...styleSx.nameText,
            ...styleSx.button,
            color: "#000",
            border: "1px solid #56595c",
            maxWidth: "117px",
            boxShadow: "7px 6px 0px -1px rgba(0, 0, 0, 0.75)",
            backgroundColor: "#F9BE39",
            borderRadius: "none",
            transition: "box-shadow 0.5s, transform 0.5s",
            "&:hover": {
              boxShadow: "none",
              transform: "translate(2px, 2px)",
            }
          }}>
            Talk to me
          </Typography>
        </Box>
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
      {/* <img src={initialsImage} alt="Logo" className="logo" style={{
          maxWidth: "50px",
          maxHeight: "50px",
          alignSelf: "flex-start",
          left: "36px",
          top: "32px",
          position: "fixed",
        }} /> */}
      <IconButton
        sx={{
          color: "#56595c",
          "&:hover": {
            color: "#000"
          },
          alignSelf: "flex-end",
          right: "50px",
          top: "32px",
          position: "fixed",
          "@media (min-width: 1000px)": {
            right: "-40px",
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
