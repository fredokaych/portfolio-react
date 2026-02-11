import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from './components/Header';
import Footer from './components/Footer';
import Lecturers2007 from "./pages/Lecturers2007";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/57-lecturers" element={<Lecturers2007 />} />
      </Routes>
      <Footer />
    </>
  );
}
