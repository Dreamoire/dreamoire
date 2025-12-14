import { Routes, Route } from "react-router-dom";

import NavBar from "../components/NavBar";
import ArticlesPage from "../pages/ArticlesPage";
import ArticlePage from "../pages/ArticlePage";
import Parcours from "../pages/Parcours";
import Projets from "../pages/Projets";
import ContactPage from "../pages/ContactPage";
import CvPage from "../pages/CvPage";
import Home from "../pages/Home";
import ButtonUp from "../components/ButtonUp";

function AppRouter() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/parcours" element={<Parcours />} />
        <Route path="/projets" element={<Projets />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/articles/:slug" element={<ArticlePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cv" element={<CvPage />} />
      </Routes>

      <ButtonUp />
    </>
  );
}

export default AppRouter;
