import { Box, Button, Grid, Typography } from "@mui/material";
import ReactPlayer from "react-player";

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
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    boxSizing: "border-box",
    height: "100%",
    border: "10px solid lightyellow",
    outline: "1px solid #565955",
    backgroundColor: "#f0f0f0",
    textAlign: "left",
    
    "&:hover": {
      borderColor: "#f0f0f0",
      borderRadius: "15px",
      transform: "scale(1.02)",
      transition: "transform 0.5s, border-radius 0.5s, border-color 1s, grid-template-rows 0.5s",
  
      "& h2": {
        marginTop: "-20px", // Move h2 up smoothly
        transition: "margin-top 2s ease", // Smooth transition
      },
      
      "& #videoBox": {
        opacity: 1,
        pointerEvents: "auto",
        transition: "opacity 0.5s, position 0.5s, grid-row 0.5s", // Smooth appearance
      },
    },
  }
}

export default function Projects() {
  return (
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      width: 'calc(1050px - 40px)',
      alignItems: "flex-start",
      height: "85vh",
      marginBlock: "10px",
    }}>
      <Grid sx={{
        display: "grid",
        gridTemplateRows: "120px 1fr 1fr",
        gridTemplateColumns: "1fr afr 1fr",
        columnGap: 5,
        rowGap: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100%",
        width: "100%",
      }}>
        <Typography variant="h1" sx={{ marginTop: "10px", gridColumn: "span 3", gridRow: "1", justifySelf: "center" }}>
          Projects
        </Typography>
        {/* <Grid item sx={{
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
              Here you can find which skills I have
              <br />
              My contact information, and my projects
              <br />
              made from scratch
            </Typography>

             <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/0jli7binmHk?si=WK8AQ2JQufL3cOnS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              <video height="330px"
              width="100%"
               data-v-27edef16="" data-test="video-content" preload="auto" src="https://youtu.be/sfcGejsltO8?si=GFqRXYeKR4ITGbux" playsinline="true" loop="loop" draggable="false" class="" autoplay="autoplay"></video>
          </Box>
        </Grid> */}
        
        <Grid item sx={{...styleSx.gridItem, gridColumn: "1", gridRow: "2"}}>
          <Typography variant="h2" sx={{ marginTop: "10px", gridColumn: "1", gridRow: "2" }}>
            Portifolio
          </Typography>
          <Box id="videoBox" sx={{ opacity: 0, position: "absolute", pointerEvents: "none" }}>
            
            <ReactPlayer url='https://youtu.be/0jli7binmHk?si=LkHaZy4rUl7zEtkl'
              loop
              playing
              controls={false}
              muted
              width="100%"
              height={168}
            />
          </Box>
          </Grid>
          {/* <Typography variant="h6" sx={{ marginTop: "10px" }}>
            Personal Portfolio
            <br />
            This is my portifolio website.
            <br />
            Here you can find which skills I have
            <br />
            My contact information, and my projects
            <br />
            made from scratch
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
          </Box> */}
        <Grid item sx={{...styleSx.gridItem, gridColumn: "2", gridRow: "2"}}>
          <Typography variant="h6" sx={{ marginTop: "10px" }}>
            Personal Portfolio
            <br />
            This is my portifolio website.
            <br />
            Here you can find which skills I have
            <br />
            My contact information, and my projects
            <br />
            made from scratch
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
        <Grid item sx={{...styleSx.gridItem, gridColumn: "3", gridRow: "2"}}>
          <Typography variant="h6" sx={{ marginTop: "10px" }}>
            Personal Portfolio
            <br />
            This is my portifolio website.
            <br />
            Here you can find which skills I have
            <br />
            My contact information, and my projects
            <br />
            made from scratch
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
        <Grid item sx={{...styleSx.gridItem, gridColumn: "1", gridRow: "3"}}>
          <Typography variant="h6" sx={{ marginTop: "10px" }}>
            Personal Portfolio
            <br />
            This is my portifolio website.
            <br />
            Here you can find which skills I have
            <br />
            My contact information, and my projects
            <br />
            made from scratch
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
        <Grid item sx={{...styleSx.gridItem, gridColumn: "2", gridRow: "3"}}>
          <Typography variant="h6" sx={{ marginTop: "10px" }}>
            Personal Portfolio
            <br />
            This is my portifolio website.
            <br />
            Here you can find which skills I have
            <br />
            My contact information, and my projects
            <br />
            made from scratch
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
        <Grid item sx={{...styleSx.gridItem, gridColumn: "3", gridRow: "3"}}>
          <Typography variant="h6" sx={{ marginTop: "10px" }}>
            Personal Portfolio
            <br />
            This is my portifolio website.
            <br />
            Here you can find which skills I have
            <br />
            My contact information, and my projects
            <br />
            made from scratch
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
      </Grid>
    </Box>
  )
}
