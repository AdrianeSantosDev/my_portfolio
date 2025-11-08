import { Box, 
  // Button, Grid, 
  Typography } from "@mui/material";
// import ReactPlayer from "react-player";
import sitePic from "../assets/site.png";
import { useState } from "react";
const styleSx = {
  sectionLine: {
    height: "1px",
    top: "80px",
    backgroundColor: "black",
    position: "sticky",
    transition: "width 0.5s",
    width: "0",
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
  let grids = [
    {
      style: { gridRow: "1", gridColumn: "1", "& h4": { fontSize: "2.5rem" } },
      title: "Projects",
      description: "Browse some of my projects below. Each showcases my skills in building efficient, innovative solutions. Take a look and see how I solve real-world problems.",
    },

    {
      style: { gridRow: "2", gridColumn: "1", height: "100%", width: "100%", },
      title: "Project 1",
      description: "This is a project description",
      list: ["item 1", "item 2", "item 3"],
    },
    {
      style: { gridRow: "2", gridColumn: "2", height: "100%", width: "100%", justifySelf: "flex-start" },
      img: sitePic,
    },

    {
      style: { gridRow: "3", gridColumn: "2", height: "100%", width: "100%", },
      title: "Project 2",
      description: "This is a project description",
      list: ["item 1", "item 2", "item 3"],
    },
    {
      style: { gridRow: "3", gridColumn: "1", height: "100%", width: "100%", justifySelf: "flex-end" },
      img: sitePic,
    },

    {
      style: { gridRow: "4", gridColumn: "1", height: "100%", width: "100%", },
      title: "Project 2",
      description: "This is a project description",
      list: ["item 1", "item 2", "item 3"],
    },
    {
      style: { gridRow: "4", gridColumn: "2", height: "100%", width: "100%", justifySelf: "flex-start" },
      img: sitePic,
    },
  ]

  const sectionElement = document.getElementById("projects");
  const sectionTop = sectionElement ? sectionElement.offsetTop : 0;
  const sectionBottom = sectionElement ? sectionElement.offsetTop + sectionElement.offsetHeight : 0;
  // const [width, setWidth] = useState('');
  // const [left, setLeft] = useState("1400px");
  // const [right, setRight] = useState("-180px");
  const [transform, setTransform] = useState("translateX(-100%)")
    window.addEventListener("scroll", () => {

      if (window.scrollY >= (sectionTop - 300)) {
        setTransform("translateX(0)");
        // setWidth("100%");
        // setLeft("20px");
        // setRight("20px");
        console.log({ sectionElement, sectionTop, sectionBottom, scrollY: window.scrollY, width: styleSx.sectionLine.width }, "scrollY >= sectionTop");
      } else if (window.scrollY > sectionBottom) {
        setTransform("translateX(-100%)");
        // setWidth("0");
        // setLeft("800px");
        // setRight("-180px");
        console.log({ sectionElement, sectionTop, sectionBottom, scrollY: window.scrollY, width: styleSx.sectionLine.width }, "scrollY > sectionBottom");
      } else {
        setTransform("translateX(-100%)");
        // setWidth("0");
        // setLeft("800px");
        // setRight("-180px");
        console.log({ sectionElement, sectionTop, sectionBottom, scrollY: window.scrollY, width: styleSx.sectionLine.width }, "else");
      }
    })

  return (
    <>
      <Box sx={{
        width: '100%',
        // height: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    // "&::before": {
    //   content: '""',
    //   position: "absolute",
    //   top: 0,
    //   left: 0,
    //   width: "100vw",
    //   height: "2px", // Thickness of the border
    //   backgroundColor: "black", // Border color
    //   transform: "translateX(-10vw)", // Offset to align with 100vw
    // },
    "&::before": {
      content: '""',
      // position: "absolute",
      // bottom: 0,
      // left: 158,
      // right: -10,
      // // width: "100vw",
      // height: "2px",
      // backgroundColor: "black",
      // transform: "translateX(-10vw)",
      // left: "20px",
      // right: "20px",
      left: 0,
      right: 0,
      transform:transform, // Inicia fora da tela (escondida à esquerda)
      transition: "transform 0.5s ease", // Anima a entrada da linha
      // left: left,
      // right: right,
      bottom: "-10px",
      display: "flex",
      padding: "0px 80px",
      alignItems: "center",
      position: "absolute",
      // transition: "left 0.5s, right 0.5s",
      // width: width,
      justifyContent: "space-between",
      borderBottom: `1px solid black`,
    }
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
              transition: "box-shadow 0.5s, transform 0.5s",
              "&:hover": {
                boxShadow: "none",
                transform: "translate(2px, 2px)",
              }
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
    </>
  )
}
