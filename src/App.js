import NavBar from "components/NavBar";
import Home from "components/Home";
import About from "components/About";
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
      </main>
    </>
  );
}

export default App;
