import { Box, Button, Grid, Typography } from "@mui/material";
import ReactPlayer from "react-player";
import sitePic from "../assets/site.png";
const styleSx = {
  // top-line
  // topLine: {
  //   height: "1px",
  //   width: "100vw",
  //   backgroundColor: "black",
  //   position: "absolute",
  //   top: "100px",
  // },
  // sectionLine: {
  //   height: "1px",
  //   backgroundColor: "black",
  //   position: "absolute",
  //   top: "848px",
  //   left: "100px",
  //   width: 0,
  //   "@keyframes showLine": {
  //     "0%": {
  //       width: "0px",
  //     },
  //     "100%": {
  //       width: "calc(100vw - 218px)",
  //     }
  //   },
  //   "@keyframes hideLine": {
  //     "0%": {
  //       width: "calc(100vw - 218px)",
  //     },
  //     "100%": {
  //       width: "0px",
  //     }
  //   }
  // },
  // left-line
    // leftLine: {
    //   height: "100%",
    //   width: "1px",
    //   backgroundColor: "black",
    //   position: "fixed",
    //   top: 0,
    //   left: "100px",
    // },
    // rightLine: {
    //   height: "100%",
    //   width: "1px",
    //   backgroundColor: "black",
    //   position: "fixed",
    //   top: 0,
    //   right: "100px",
    // },
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

let grids = [
  {
    style: { gridRow: "1", gridColumn: "1", "& h4": { fontSize: "2.5rem" } },
    title: "Projects",
    description: "Browse some of my projects below. Each showcases my skills in building efficient, innovative solutions. Take a look and see how I solve real-world problems.",
  },

  {
    style: { gridRow: "2", gridColumn: "1",  height: "100%", width: "100%", }, 
    title: "Project 1",
    description: "This is a project description",
    list: ["item 1", "item 2", "item 3"],
  },
  {
    style: { gridRow: "2", gridColumn: "2",  height: "100%", width: "100%", justifySelf: "flex-start" },
    img: sitePic,
  },
  
  {
    style: { gridRow: "3", gridColumn: "2",  height: "100%", width: "100%", }, 
    title: "Project 2",
    description: "This is a project description",
    list: ["item 1", "item 2", "item 3"],
  },
  {
    style: { gridRow: "3", gridColumn: "1",  height: "100%", width: "100%", justifySelf: "flex-end" },
    img: sitePic,
  },

  {
    style: { gridRow: "4", gridColumn: "1",  height: "100%", width: "100%", }, 
    title: "Project 2",
    description: "This is a project description",
    list: ["item 1", "item 2", "item 3"],
  },
  {
    style: { gridRow: "4", gridColumn: "2",  height: "100%", width: "100%", justifySelf: "flex-start" },
    img: sitePic,
  },
]

export default function Projects() {
  return (
    <Box sx={{
      width: '100%',
      // height: "80vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
    id="projects"
    >
      <Box sx={{
        display: "grid",
        gridTemplateRows: "300px 1fr 1fr 1fr",
        gridTemplateColumns: "1fr 1fr",
        columnGap: 5,
        rowGap: 10,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        // height: "100%",
        // width: "100%",
      }}>
        {Array.from(grids).map((grid, index) => (
          <Box key={index} sx={{
            ...grid.style,
            border: grid.img ? "1px solid black" : "none",
            boxShadow: grid.img ? "10px 11px 0px -1px #F9BE39" : "none",
          }}
           >
            <Typography variant="h4">{grid.title}</Typography>
            {grid.description && (
              <Typography variant="body1">{grid.description}</Typography>
            )}
            {grid.list && (
              <ul>
                {grid.list.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
            {grid.img && (
              <img src={grid.img} alt="project" style={{ width: "100%", height: "100%", objectFit: "contain" }} />  
            )}
          </Box>  
        ))}
      </Box>
    </Box>
  )
}
