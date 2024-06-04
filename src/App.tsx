import { useEffect } from 'react'

// Design
import Box from '@mui/material/Box';

// Internal
import Header from './components/Header'
import LandingSection from './sections/LandingSection';

const styleSx = {
  // top-line
  topLine: {
    height: "1px",
    width: "100vw",
    backgroundColor: "black",
    position: "absolute",
    top: "100px",
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
  leftLine2: {
    height: "100%",
    width: "1px",
    backgroundColor: "black",
    position: "fixed",
    top: 0,
    right: "100px",
  },
  // right-line
  rightLine: {
    width: "100vw",
    height: 0,
    borderBottom: "1.5px solid black",
    position: "absolute",
    top: "109px",
    right: "-625px",
    transform: "rotate3d(1, 1, 1, 57deg) translate(302px, 34px)",
  },
}
function App() {
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
    <Box id="main" sx={{
      padding: 1,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      placeSelf: "center",
      alignSelf: "center",
    }}>
      <Box sx={styleSx.topLine} />
      <Box sx={styleSx.leftLine} />
      <Box sx={styleSx.leftLine2} />

      <Header />
      <LandingSection />

      <Box>
        <h1>Vite + React</h1>
        <div className="card">
          
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            Hello
          </a>
          <a href="https://react.dev" target="_blank">
            <img className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
        DRI
        <div>
          <a href="https://vitejs.dev" target="_blank">
            Hello
          </a>
          <a href="https://react.dev" target="_blank">
            <img className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            Hello
          </a>
          <a href="https://react.dev" target="_blank">
            <img className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>        DRI
        <div>
          <a href="https://vitejs.dev" target="_blank">
            Hello
          </a>
          <a href="https://react.dev" target="_blank">
            <img className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            Hello
          </a>
          <a href="https://react.dev" target="_blank">
            <img className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>        DRI
        <div>
          <a href="https://vitejs.dev" target="_blank">
            Hello
          </a>
          <a href="https://react.dev" target="_blank">
            <img className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            Hello
          </a>
          <a href="https://react.dev" target="_blank">
            <img className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>        DRI
        <div>
          <a href="https://vitejs.dev" target="_blank">
            Hello
          </a>
          <a href="https://react.dev" target="_blank">
            <img className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            Hello
          </a>
          <a href="https://react.dev" target="_blank">
            <img className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </Box>
    </Box>
  )
}

export default App
