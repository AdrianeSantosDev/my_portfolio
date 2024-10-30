import { useEffect } from 'react'

// Design
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import KeyboardDoubleArrowDownRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowDownRounded';

// Internal
import my_pic from '../assets/me1.webp'


const styleSx = {
  main: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "column",
    height: "100vh",
    marginTop: "80px",
    width: 'calc(1050px - 40px)',
    gap: 12
  },
  infoSection: {
    borderRadius: 20,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    "@media (max-width: 1250px)": {
      flexDirection: "column",
      // height: "100vh",
      width: "100%",
      // padding: "20px",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      // marginTop: "0px",
      gap: 2,
    },
  },
  textBox: {
    "@keyframes transform": {
      "0%": {
        transform: "translateX(-20px)",
      },
      "100%": {
        transform: "translateX(0)",
      }
    },
    animation: "transform 1s"
  },
  typography: {
    fontWeight: "lighter",
    letterSpacing: "0.1em"
  },
  imageBox: {
    width: "320px",
    height: "320px",
    "@media (max-width: 1250px)": {
      order: -1,
      width: "250px",
      height: "250px",
      transition: "width 0.5s, height 0.5s",
      marginBottom: "20px",
    },
    "@keyframes transformImage": {
      "0%": {
        transform: "translateX(40px)",
      },
      "100%": {
        transform: "translateX(0)",
      }
    },
    animation: "transformImage 1s"
  },
  imgStyle: {
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    border: "1px solid black",
    marginTop: "20px",
    animation: "morph 6s linear infinite"
  }
}

function LandingSection() {
  let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

  useEffect(() => {
    setTimeout(() => {
      let name_texts = document.querySelectorAll(".main_text")
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
          }, 20)
        })
      }
    }, 500)
  }, [])

  return (
    <Box sx={styleSx.main}>
      <Box sx={styleSx.infoSection}>
        <Box sx={styleSx.textBox}>
          <Typography
            sx={{
              ...styleSx.typography,
              fontSize: "1.7rem",
              "@media (max-width: 1250px)": {
                fontWeight: "bold",
              }
            }}>
            Hi, I'm
          </Typography>

          <Typography
            sx={{
              ...styleSx.typography,
              fontSize: "1.6rem",
              "@media (max-width: 1250px)": {
                fontSize: "1.7rem",
                fontWeight: "bold",
              }
            }}>
            Dri Santos
          </Typography>

          <Typography sx={{
            ...styleSx.typography,
            fontSize: "1.4rem",
            "@media (max-width: 1250px)": {
              display: "none",
            }
          }}>
            A <Typography className="main_text" data-value="FRONT END DEVELOPER" sx={{ ...styleSx.typography, fontSize: "1.4rem", fontWeight: "bold", display: "inline-block", "@media (max-width: 1250px)": { display: "none" } }}> FRONT END DEVELOPER </Typography> FROM BRAZIL </Typography>
        </Box>
        <Box sx={styleSx.imageBox}>
          <img src={my_pic} alt="my_pic" className="my_pic" style={styleSx.imgStyle} />
        </Box>
      </Box>
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 1
      }}>
        <span style={{
          textTransform: "uppercase",
          fontSize: "0.7rem",
          letterSpacing: "0.05em",
          textAlign: "center",
          minWidth: "100px",
        }}>
          Check out my projects
        </span>
        <KeyboardDoubleArrowDownRoundedIcon sx={{
          fontSize: "2rem", "@keyframes bounce": {
            "0%": {
              transform: "translateY(0)"
            },
            "50%": {
              transform: "translateY(-10px)"
            },
            "100%": {
              transform: "translateY(0)"
            }
          },
          animation: "bounce 4s infinite",
        }} />
      </Box>
    </Box>
  )
}

export default LandingSection
