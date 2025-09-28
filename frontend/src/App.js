import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import MusicShowcase from "./components/MusicShowcase";
import ContactBooking from "./components/ContactBooking";
import Footer from "./components/Footer";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main>
          <HeroSection />
          <MusicShowcase />
          <ContactBooking />
        </main>
        <Footer />
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;
