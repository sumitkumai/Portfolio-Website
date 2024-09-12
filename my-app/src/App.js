import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import { HeaderPhone } from "./components/Header";
import { useState } from "react";

function App() {

  const[menuOpen,setMenuOpen] = useState(false);

  return (
    <>
    <HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <Home/>
    <Projects/>
    <Contact/>
    <Footer/>
    <Toaster/>
    </>
  );
}

export default App;
