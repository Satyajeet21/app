import React from 'react';
import { Music, Heart, Star, Users } from 'lucide-react';
import { singerData } from '../data/mock';

const AboutSection = () => {
  const features = [
    {
      icon: Music,
      title: "Versatile",
      subtitle: "Repertoire",
      description: "Classical to contemporary fusion",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: Heart,
      title: "Soulful",
      subtitle: "Performance",
      description: "Emotional depth in every note",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Star,
      title: "Professional",
      subtitle: "Quality",
      description: "Studio-trained vocals",
      color: "from-orange-500 to-amber-500"
    },
    {
      icon: Users,
      title: "Audience Connect",
      subtitle: "",
      description: "Captivating stage presence",
      color: "from-purple-500 to-indigo-500"
    }
  ];
  
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-pink-500">Sarmistha</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-orange-500 mx-auto mb-8"></div>
        </div>
        
        {/* About Content */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
            A versatile singer with deep roots in Indian classical music and a passion for contemporary fusion. 
            Sarmistha brings soulful interpretations to every performance, seamlessly blending traditional ragas 
            with modern arrangements.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="text-center group">
                {/* Icon Circle */}
                <div className={`w-20 h-20 md:w-24 md:h-24 mx-auto mb-6 rounded-full bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105`}>
                  <IconComponent className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>
                
                {/* Content */}
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1">
                    {feature.title}
                  </h3>
                  {feature.subtitle && (
                    <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                      {feature.subtitle}
                    </h4>
                  )}
                  <p className="text-sm md:text-base text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;