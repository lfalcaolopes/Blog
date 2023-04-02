import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import Article from "./Pages/Article/Article";
import Login from "./Pages/Login/Login";
import ContentManager from "./Pages/ContentManager/ContentManager";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

function App() {
  const api =
    "3aca0ff0937d206a8b8556a2c4de7d1c45dc72c19870cafa43e259fb579b36dd3dc6d9844c9fc375303d02764fec3a5aee4e26098a58660bcedfbac942101d0597fe57c3fb8201ab431eef97c248397b6b79945d86fbdbf188fc5cd14c1c42334d87ccd3cef8d172497477495b13e87f37645f1a69a15fa3875aa3365adde958";

  const client = new ApolloClient({
    uri: "http://localhost:1337/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="artigo/:id" element={<Article />} />
          <Route path="login" element={<Login />} />
          <Route path="content-manager" element={<ContentManager />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
