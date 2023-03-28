import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import Article from "./Pages/Article/Article";
import Login from "./Pages/Login/Login";
import ContentManager from "./Pages/ContentManager/ContentManager";

function App() {
  return (
    <>
      <NavBar />

      {/* <Home /> */}
      {/* <Article /> */}
      {/* <Login /> */}

      <ContentManager />

      <Footer />
    </>
  );
}

export default App;
