import NavBar from "components/NavBar";
import Home from "components/Home";
import About from "components/About";
import Projects from "components/Projects";
import Achievements from "components/Achievements";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    user-select: none;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background: #eee;
    overflow-x: hidden;
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <NavBar />
      <Home />
      <main>
        <About />
        <Projects />
        <Achievements />
      </main>
    </>
  );
}

export default App;
