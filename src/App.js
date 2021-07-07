import NavBar from "./components/NavBar";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Galada&family=Montserrat:wght@400;500&family=Mrs+Sheppards&family=Overpass:wght@400;600;700&family=Poppins:wght@400;700&display=swap");

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    user-select: none;
  }
`;

function App() {
  return (
    <div>
      <GlobalStyles />
      <NavBar />
    </div>
  );
}

export default App;
