import React, { useState } from 'react';
import { Play, Pause, SkipForward, SkipBack, Music, Clock, Heart } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { singerData } from '../data/mock';

const MusicShowcase = () => {
  const [currentPlaying, setCurrentPlaying] = useState(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  
  const handlePlay = (songId) => {
    if (currentPlaying === songId) {
      setIsPlaying(!isPlaying);
    } else {
      setCurrentPlaying(songId);
      setIsPlaying(true);
      setCurrentTime(0);
    }
  };
  
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };
  
  return (
    <section id="music" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Music className="w-12 h-12 text-blue-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Musical Journey
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the soulful melodies that blend classical traditions with contemporary expressions
          </p>
        </div>
        
        {/* Songs Grid */}
        <div className="grid gap-6 md:gap-8">
          {singerData.songs.map((song, index) => (
            <Card key={song.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
              <div className="p-6">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  {/* Album Art Placeholder */}
                  <div className="relative group">
                    <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                      <Music className="w-8 h-8 md:w-10 md:h-10 text-white" />
                    </div>
                    <button 
                      onClick={() => handlePlay(song.id)}
                      className="absolute inset-0 bg-black/40 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    >
                      {currentPlaying === song.id && isPlaying ? (
                        <Pause className="w-8 h-8 text-white" />
                      ) : (
                        <Play className="w-8 h-8 text-white ml-1" />
                      )}
                    </button>
                  </div>
                  
                  {/* Song Info */}
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{song.title}</h3>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full w-fit">
                        {song.genre}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-3">{song.description}</p>
                    
                    {/* Player Controls */}
                    <div className="flex items-center gap-4">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="p-2 hover:bg-blue-100"
                      >
                        <SkipBack className="w-4 h-4" />
                      </Button>
                      
                      <Button
                        onClick={() => handlePlay(song.id)}
                        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full p-3"
                      >
                        {currentPlaying === song.id && isPlaying ? (
                          <Pause className="w-4 h-4" />
                        ) : (
                          <Play className="w-4 h-4 ml-0.5" />
                        )}
                      </Button>
                      
                      <Button
                        variant="ghost"
                        size="sm"
                        className="p-2 hover:bg-blue-100"
                      >
                        <SkipForward className="w-4 h-4" />
                      </Button>
                      
                      {/* Progress Bar */}
                      <div className="flex-grow max-w-md">
                        <div className="bg-gray-200 rounded-full h-2 relative overflow-hidden">
                          <div 
                            className="bg-gradient-to-r from-blue-500 to-purple-500 h-full rounded-full transition-all duration-300"
                            style={{
                              width: currentPlaying === song.id ? `${(currentTime / 240) * 100}%` : '0%'
                            }}
                          ></div>
                        </div>
                      </div>
                      
                      {/* Duration */}
                      <div className="flex items-center text-sm text-gray-500 gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{song.duration}</span>
                      </div>
                      
                      <Button
                        variant="ghost"
                        size="sm"
                        className="p-2 hover:bg-pink-100 hover:text-pink-600"
                      >
                        <Heart className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Experience these melodies live at your event</p>
          <Button className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-8 py-3 text-lg rounded-full">
            Book a Performance
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MusicShowcase;