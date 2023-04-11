import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import Article from "./Pages/Article/Article";
import Login from "./Pages/Login/Login";
import ContentManager from "./Pages/ContentManager/ContentManager";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import CategoryArticles from "./Pages/CategoryArticles/CategoryArticles";
import ScrollToTop from "./Helper/ScrollToTop";

function App() {
  const client = new ApolloClient({
    uri: "http://localhost:1337/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <ScrollToTop />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="artigo/:id" element={<Article />} />
          <Route path="categoria/:id" element={<CategoryArticles />} />
          <Route path="login" element={<Login />} />
          <Route path="content-manager" element={<ContentManager />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
