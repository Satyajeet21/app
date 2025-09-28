import React from 'react';
import { Play, Music4, Sparkles } from 'lucide-react';
import { singerData } from '../data/mock';

const HeroSection = () => {
  const scrollToMusic = () => {
    const element = document.getElementById('music');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={singerData.images.hero}
          alt="Sarmistha Dash performing"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-purple-900/60 to-pink-900/80"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-pulse">
        <Music4 className="text-gold-400 w-8 h-8 opacity-60" />
      </div>
      <div className="absolute top-40 right-20 animate-bounce delay-1000">
        <Sparkles className="text-pink-300 w-6 h-6 opacity-70" />
      </div>
      <div className="absolute bottom-32 left-20 animate-pulse delay-500">
        <Music4 className="text-blue-300 w-6 h-6 opacity-50" />
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-wide">
            {singerData.name}
          </h1>
          <p className="text-xl md:text-2xl text-blue-200 font-light mb-8">
            {singerData.tagline}
          </p>
        </div>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button 
            onClick={scrollToMusic}
            className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-3"
          >
            <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>Listen to Music</span>
          </button>
          <button 
            onClick={scrollToContact}
            className="bg-white/10 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
          >
            Book Performance
          </button>
        </div>
        
        {/* Genres Tags */}
        <div className="flex flex-wrap justify-center gap-3">
          {singerData.genres.map((genre, index) => (
            <span 
              key={index}
              className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-medium hover:bg-white/20 transition-colors"
            >
              {genre}
            </span>
          ))}
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;