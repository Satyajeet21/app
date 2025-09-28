import React, { useState } from 'react';
import { Play, Pause, Music } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { singerData } from '../data/mock';

const MusicShowcase = () => {
  const [currentPlaying, setCurrentPlaying] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  
  const handlePlayPause = (songId) => {
    if (currentPlaying === songId) {
      setIsPlaying(!isPlaying);
    } else {
      setCurrentPlaying(songId);
      setIsPlaying(true);
    }
  };
  
  const getGradientColor = (index) => {
    const gradients = [
      'from-purple-500 to-purple-600',
      'from-pink-500 to-pink-600', 
      'from-blue-500 to-blue-600',
      'from-orange-500 to-orange-600',
      'from-green-500 to-green-600'
    ];
    return gradients[index % gradients.length];
  };
  
  return (
    <section id="music" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured <span className="text-pink-500">Music</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-orange-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the magic of Sarmistha's versatile voice across different genres
          </p>
        </div>
        
        {/* Songs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {singerData.songs.map((song, index) => (
            <Card key={song.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-white">
              {/* Thin Gradient Header */}
              <div className={`h-1 bg-gradient-to-r ${getGradientColor(index)} relative`}>
                <div className="absolute inset-0 bg-black/10"></div>
              </div>
              
              {/* Card Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{song.title}</h3>
                  <span className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${
                    song.genre === 'Classical' ? 'bg-purple-100 text-purple-800' :
                    song.genre === 'Bollywood' ? 'bg-pink-100 text-pink-800' :
                    song.genre === 'Devotional' ? 'bg-blue-100 text-blue-800' :
                    song.genre === 'Folk' ? 'bg-orange-100 text-orange-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {song.genre}
                  </span>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-sm text-gray-500 flex items-center">
                      <Music className="w-4 h-4 mr-1" />
                      {song.duration}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {song.description}
                </p>
                
                {/* Play/Pause Button */}
                <Button
                  onClick={() => handlePlayPause(song.id)}
                  className={`w-full bg-gradient-to-r ${getGradientColor(index)} hover:opacity-90 text-white rounded-full py-3 flex items-center justify-center space-x-2 transition-all duration-200`}
                >
                  {currentPlaying === song.id && isPlaying ? (
                    <>
                      <Pause className="w-4 h-4" />
                      <span>Pause</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4" />
                      <span>Play</span>
                    </>
                  )}
                </Button>
                
                {/* Progress indicator for playing song */}
                {currentPlaying === song.id && isPlaying && (
                  <div className="mt-4">
                    <div className="bg-gray-200 rounded-full h-2 relative overflow-hidden">
                      <div className={`bg-gradient-to-r ${getGradientColor(index)} h-full rounded-full transition-all duration-300 animate-pulse`} style={{width: '30%'}}></div>
                    </div>
                    <p className="text-xs text-gray-500 mt-2 text-center">Playing now...</p>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MusicShowcase;