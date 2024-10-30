import { useEffect, useState } from 'react'

// Design
import Box from '@mui/material/Box';

// Internal
import Header from './components/Header'
import LandingSection from './sections/LandingSection';
import { Button, Grid, Typography } from '@mui/material';

// Third Party
import ReactPlayer from 'react-player/youtube'
import Projects from './sections/Projects';

const styleSx = {
  // top-line
  topLine: {
    height: "1px",
    width: "100vw",
    backgroundColor: "black",
    position: "absolute",
    top: "100px",
  },
  sectionLine: {
    height: "1px",
    backgroundColor: "black",
    position: "absolute",
    top: "848px",
    left: "100px",
    width: 0,
    "@keyframes showLine": {
      "0%": {
        width: "0px",
      },
      "100%": {
        width: "calc(100vw - 218px)",
      }
    },
    "@keyframes hideLine": {
      "0%": {
        width: "calc(100vw - 218px)",
      },
      "100%": {
        width: "0px",
      }
    }
  },
  // left-line
  leftLine: {
    height: "100%",
    width: "1px",
    backgroundColor: "black",
    position: "fixed",
    top: 0,
    left: "100px",
  },
  rightLine: {
    height: "100%",
    width: "1px",
    backgroundColor: "black",
    position: "fixed",
    top: 0,
    right: "100px",
  },
  gridItem: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingLeft: "10px",
    flexDirection: "column",
    borderRadius: "15px",
    height: "100%",
    border: "4px solid lightyellow",
    outline: "2px solid #56595c",
    backgroundColor: "white",
    textAlign: "left",
    gap: 1,
    paddingBlock: "5px",
  }
}
function App() {
  let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const [animation, setAnimation] = useState("none");

  // animation: "showLine 5s forwards"

  
  document.addEventListener("scroll", () => {
    console.log({ scrollY: window.scrollY });
    if (window.scrollY >= 140) {
      setAnimation("showLine 1s ease forwards")
    } else {
      setAnimation("hideLine 1s ease forwards")
    }
  })

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
    <Box id="main" sx={{
      padding: 1,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    }}>
      <Box sx={styleSx.topLine} />
      <Box sx={styleSx.leftLine} />
      <Box sx={styleSx.rightLine} />
      <Box sx={{ ...styleSx.sectionLine, animation: animation }} id="dri" />
      <Header />
      <LandingSection />
      <Projects />


      {/* <Box sx={{
        display: "flex",
        flexDirection: "column",
        width: 'calc(1050px - 40px)',
        alignItems: "flex-start",
        height: "85vh",
        marginBlock: "10px",
      }}>
        <Grid sx={{
          display: "grid",
          gridTemplateRows: "1fr 1fr 1fr",
          gridTemplateColumns: "1fr 1fr",
          columnGap: 5,
          rowGap: 1,
          justifyContent: "center",
          alignItems: "flex-start",
          flexDirection: "column",
          height: "100%",
          width: "100%",
        }}>
          <Grid item sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            flexDirection: "column",
            borderRadius: "15px",
            height: "100%",
            border: "10px solid lightyellow",
            outline: "2px solid #56595c",
            backgroundColor: "white",
            gridRow: "span 3",
            paddingInline: "15px",
          }}>
            <h1>Projects</h1>
            <Box sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              width: "100%",
              pointerEvents: "none",
              height: "448px",
              "& iframe": {
                borderRadius: "15px",
                outline: "1.5px solid black",
                objectFit: "cover",
              }
            }}>
              <ReactPlayer url='https://youtu.be/0jli7binmHk?si=LkHaZy4rUl7zEtkl'
                loop
                playing
                controls={false}
                muted
                width="100%"
              />

              <Typography variant="h6" sx={{ marginTop: "10px" }}>
                Personal Portfolio
                <br />
                <br />
                This is my portifolio website.
                <br />
                Here you can find me projects,
                <br />
                Skills, contact information, and my projects
                <br />
                Made from scratch use the skills below
              </Typography>

              <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/0jli7binmHk?si=WK8AQ2JQufL3cOnS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              <video height="330px"
              width="100%"
               data-v-27edef16="" data-test="video-content" preload="auto" src="https://youtu.be/sfcGejsltO8?si=GFqRXYeKR4ITGbux" playsinline="true" loop="loop" draggable="false" class="" autoplay="autoplay"></video>
            </Box>
          </Grid>
          <Grid item sx={styleSx.gridItem}>
            <Typography variant="h6" sx={{ marginTop: "10px" }}>
              Personal Portfolio
              <br />
              This is my portifolio website.
              <br />
              Here you can find me projects,
              <br />
              Skills, contact information, and my projects
              <br />
              Made from scratch use the skills below
            </Typography>
            <Box sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              paddingRight: "10px",
              height: "2rem",
            }}>
            <Button variant="contained" color="primary" sx={{
              height: "100%",
              backgroundColor: "black",
                  "&:hover": {
                    transform: "scale(0.95)"
                  }
            }}>View Project</Button>
            <Button variant="contained" color="primary" sx={{
              height: "100%",
              backgroundColor: "black",
                  "&:hover": {
                    transform: "scale(0.95)"
                  }
            }}>View Code</Button>
            </Box>
          </Grid>
          <Grid item sx={styleSx.gridItem}>
            <h2>Project 3</h2>
          </Grid>
          <Grid item sx={styleSx.gridItem}>
            <h2>Project 3</h2>
          </Grid>
        </Grid>
      </Box> */}
    </Box>
  )
}

export default App
