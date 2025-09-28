import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };
  
  return (
    <div className="fixed top-0 left-0 right-0 z-50 p-4">
      <header className={`transition-all duration-300 rounded-2xl mx-4 ${
        isScrolled 
          ? 'bg-white/20 backdrop-blur-xl border border-white/30 shadow-2xl' 
          : 'bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl'
      }`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Brand Name */}
            <div>
              <h1 className="text-2xl font-bold text-white tracking-wider font-serif uppercase">
                SARMISTHA DASH
              </h1>
              <p className="text-sm text-blue-200 font-medium tracking-wide">
                Classical • Bollywood • Fusion
              </p>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('home')} 
                className="text-white/90 hover:text-white transition-colors font-medium relative group"
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-white/90 hover:text-white transition-colors font-medium relative group"
              >
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
              </button>
              <button 
                onClick={() => scrollToSection('music')} 
                className="text-white/90 hover:text-white transition-colors font-medium relative group"
              >
                Music
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="bg-white/20 backdrop-blur-sm text-white border border-white/30 px-6 py-2.5 rounded-full hover:bg-white/30 transform hover:scale-105 transition-all duration-200 font-medium"
              >
                Contact
              </button>
            </nav>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-white/90 hover:text-white transition-colors rounded-full hover:bg-white/20"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-white/30">
              <div className="flex flex-col space-y-4 pt-4 bg-white/10 backdrop-blur-lg rounded-lg p-4 mt-2 border border-white/20">
                <button 
                  onClick={() => scrollToSection('home')} 
                  className="text-white/90 hover:text-white transition-colors font-medium text-left"
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection('about')} 
                  className="text-white/90 hover:text-white transition-colors font-medium text-left"
                >
                  About
                </button>
                <button 
                  onClick={() => scrollToSection('music')} 
                  className="text-white/90 hover:text-white transition-colors font-medium text-left"
                >
                  Music
                </button>
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="bg-white/20 backdrop-blur-sm text-white border border-white/30 px-6 py-2 rounded-full hover:bg-white/30 transition-all duration-200 w-fit font-medium"
                >
                  Contact
                </button>
              </div>
            </nav>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;