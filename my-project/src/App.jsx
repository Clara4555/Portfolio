import React, { Component } from "react";
import Navbar from "./components/NavBar";
import Skill from "./components/skill";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import ContactUs from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import MagicCursor from "./components/MagicCursor"; // ✅ Import Magic Cursor

class App extends Component {
  render() {
    return (
      <div className="App">
        <MagicCursor /> {/* ✅ Cursor Effect Only */}
        <Navbar />
        <Hero />
        <Skill />
        <Portfolio />
        <Resume />
        <Testimonials />
        <ContactUs />
        <Footer />
      </div>
    );
  }
}

export default App;
