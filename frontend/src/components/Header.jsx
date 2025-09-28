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
      <header className={`transition-all duration-300 rounded-2xl mx-8 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-xl border border-gray-200/50 shadow-2xl' 
          : 'bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl'
      }`}>
        <div className="container mx-auto px-8 py-4">
          <div className="flex justify-between items-center">
            {/* Brand Name */}
            <div>
              <h1 className={`text-3xl font-bold tracking-wider signature-font transition-colors duration-300 ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>
                Sarmistha Dash
              </h1>
              <p className={`text-sm font-medium tracking-wide transition-colors duration-300 ${
                isScrolled ? 'text-blue-600' : 'text-blue-200'
              }`}>
                Classical • Bollywood • Fusion
              </p>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('home')} 
                className={`transition-colors font-medium relative group ${
                  isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white/90 hover:text-white'
                }`}
              >
                Home
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all group-hover:w-full ${
                  isScrolled ? 'bg-blue-600' : 'bg-white'
                }`}></span>
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className={`transition-colors font-medium relative group ${
                  isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white/90 hover:text-white'
                }`}
              >
                About
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all group-hover:w-full ${
                  isScrolled ? 'bg-blue-600' : 'bg-white'
                }`}></span>
              </button>
              <button 
                onClick={() => scrollToSection('music')} 
                className={`transition-colors font-medium relative group ${
                  isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white/90 hover:text-white'
                }`}
              >
                Music
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all group-hover:w-full ${
                  isScrolled ? 'bg-blue-600' : 'bg-white'
                }`}></span>
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className={`backdrop-blur-sm border px-6 py-2.5 rounded-full transform hover:scale-105 transition-all duration-200 font-medium ${
                  isScrolled 
                    ? 'bg-blue-600 text-white border-blue-600 hover:bg-blue-700' 
                    : 'bg-white/20 text-white border-white/30 hover:bg-white/30'
                }`}
              >
                Contact
              </button>
            </nav>
            
            {/* Mobile Menu Button */}
            <button 
              className={`md:hidden p-2 transition-colors rounded-full ${
                isScrolled 
                  ? 'text-gray-700 hover:text-blue-600 hover:bg-gray-100' 
                  : 'text-white/90 hover:text-white hover:bg-white/20'
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-opacity-30">
              <div className={`flex flex-col space-y-4 pt-4 backdrop-blur-lg rounded-lg p-4 mt-2 border ${
                isScrolled
                  ? 'bg-white/90 border-gray-200/50'
                  : 'bg-white/10 border-white/20'
              }`}>
                <button 
                  onClick={() => scrollToSection('home')} 
                  className={`font-medium text-left transition-colors ${
                    isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white/90 hover:text-white'
                  }`}
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection('about')} 
                  className={`font-medium text-left transition-colors ${
                    isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white/90 hover:text-white'
                  }`}
                >
                  About
                </button>
                <button 
                  onClick={() => scrollToSection('music')} 
                  className={`font-medium text-left transition-colors ${
                    isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white/90 hover:text-white'
                  }`}
                >
                  Music
                </button>
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className={`backdrop-blur-sm border px-6 py-2 rounded-full transition-all duration-200 w-fit font-medium ${
                    isScrolled
                      ? 'bg-blue-600 text-white border-blue-600 hover:bg-blue-700'
                      : 'bg-white/20 text-white border-white/30 hover:bg-white/30'
                  }`}
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