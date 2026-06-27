import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Projects from "../components/sections/Projects";
import Services from "../components/sections/Services";
import Experience from "../components/sections/Experience";
import Contact from "../components/sections/Contact";
import NotFound from "../pages/NotFound";
import About from "../components/sections/About";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/projects" element={<Projects />} />

      <Route path="/services" element={<Services />} />

      <Route path="/experience" element={<Experience />} />

      <Route path="/about" element={<About/>}/>

      <Route path="/contact" element={<Contact />} />

      <Route path="*" element={<NotFound />} />
     
    </Routes>
  );
}