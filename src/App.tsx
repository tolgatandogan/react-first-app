import React, {FC} from "react";
import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";


const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout></Layout>}>
        <Route index element={<Home></Home>} />
        <Route path="about" element={<About></About>} />
        <Route path="portfolio" element={<Portfolio></Portfolio>} />
        <Route path="contact" element={<Contact></Contact>} />
        <Route path="*" element={<NoPage></NoPage>} />
      </Route>
    </Routes>
  );
}

export default App;

