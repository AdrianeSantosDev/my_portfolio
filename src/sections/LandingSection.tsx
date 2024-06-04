import { useEffect } from 'react'

// Design
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

// Internal
import my_pic from '../assets/me1.webp'


const styleSx = {
  main: {
    marginTop: "80px",
    width: 'calc(960px - 40px)',
    borderRadius: 20,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "80vh",
    marginBottom: "20px",
    "@media (max-width: 1150px)": {
      flexDirection: "column",
      height: "100vh",
      width: "100%",
      padding: "20px",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      marginTop: "0px",
      gap: 6,
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
    "@media (max-width: 1150px)": {
      order: -1,
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
    width: "320px",
    height: "320px",
    borderRadius: "50%",
    border: "1px solid black",
    marginTop: "20px",
    animation: "morph 6s linear infinite",
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
      <Box sx={styleSx.textBox}>
        <Typography
          sx={{
            ...styleSx.typography,
            fontSize: "1.7rem",
            "@media (max-width: 1150px)": {
              fontWeight: "bold",
            }
          }}>
          Hi, I'm
        </Typography>

        <Typography
          sx={{
            ...styleSx.typography,
            fontSize: "1.6rem",
            "@media (max-width: 1150px)": {
              fontSize: "1.7rem",
              fontWeight: "bold",
            }
          }}>
          Dri Santos
        </Typography>

        <Typography sx={{
          ...styleSx.typography,
          fontSize: "1.4rem",
          "@media (max-width: 1150px)": {
            display: "none",
          }
        }}>
          A <Typography className="main_text" data-value="FRONT END DEVELOPER" sx={{ ...styleSx.typography, fontSize: "1.4rem", fontWeight: "bold", display: "inline-block", "@media (max-width: 1150px)": { display: "none" } }}> FRONT END DEVELOPER </Typography> FROM BRAZIL </Typography>
      </Box>
      <Box sx={styleSx.imageBox}>
        <img src={my_pic} alt="my_pic" id="my_pic" style={styleSx.imgStyle} />
      </Box>
    </Box>
  )
}

export default LandingSection
