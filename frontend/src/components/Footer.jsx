import React from 'react';
import { Heart, Music, Mail, Phone, Instagram, Youtube, Facebook } from 'lucide-react';
import { singerData } from '../data/mock';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <div className="mb-4">
              <h3 className="text-2xl font-bold tracking-wider font-serif uppercase">
                SARMISTHA DASH
              </h3>
              <p className="text-sm text-gray-400 tracking-wide">Classical • Bollywood • Fusion</p>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              Creating magical musical experiences that blend tradition with contemporary artistry.
            </p>
            <div className="flex items-center text-pink-400">
              <Heart className="w-4 h-4 mr-2" />
              <span className="text-sm">Made with passion for music</span>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center">
              <Music className="w-5 h-5 mr-2 text-blue-400" />
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a></li>
              <li><a href="#music" className="text-gray-300 hover:text-white transition-colors">Music</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>
            <div className="space-y-3 mb-4">
              <div className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-3 text-blue-400" />
                <span className="text-sm">{singerData.contact.email}</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 mr-3 text-blue-400" />
                <span className="text-sm">{singerData.contact.phone}</span>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-pink-600 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-red-600 transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 mt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 SARMISTHA DASH. All rights reserved. • Bringing melodies to life, one performance at a time.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;