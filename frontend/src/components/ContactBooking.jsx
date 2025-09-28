import React from 'react';
import { Mail, Phone, Instagram, Youtube, Facebook, MapPin } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { singerData } from '../data/mock';

const ContactBooking = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In <span className="text-pink-500">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-orange-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to make your event unforgettable? Contact Sarmistha to discuss how she can bring magic to your celebration.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Contact Information Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Contact Details */}
            <Card className="bg-white shadow-xl border-0 hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Phone className="w-6 h-6 text-pink-500 mr-3" />
                  Contact Information
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 p-4 bg-pink-50 rounded-lg hover:bg-pink-100 transition-colors">
                    <div className="p-3 bg-pink-500 rounded-full">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Call or WhatsApp</p>
                      <p className="text-gray-700">{singerData.contact.phone}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                    <div className="p-3 bg-blue-500 rounded-full">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <p className="text-gray-700">{singerData.contact.email}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                    <div className="p-3 bg-purple-500 rounded-full">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Available for Events</p>
                      <p className="text-gray-700">Pan India • Virtual Performances</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Social Media & Response Info */}
            <Card className="bg-white shadow-xl border-0 hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Connect & Follow</h3>
                
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Social Media</h4>
                  <div className="flex space-x-4">
                    <a 
                      href={singerData.contact.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl hover:from-pink-600 hover:to-rose-600 transition-all duration-200 transform hover:scale-105 shadow-lg"
                    >
                      <Instagram className="w-6 h-6 text-white" />
                    </a>
                    <a 
                      href={singerData.contact.social.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-gradient-to-br from-red-500 to-red-600 rounded-xl hover:from-red-600 hover:to-red-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
                    >
                      <Youtube className="w-6 h-6 text-white" />
                    </a>
                    <a 
                      href="#" 
                      className="p-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
                    >
                      <Facebook className="w-6 h-6 text-white" />
                    </a>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-blue-50 to-pink-50 p-6 rounded-lg border border-blue-100">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Quick Response Guarantee</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span>Response within 24 hours</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span>Free consultation call</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span>Customized performance packages</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Event Types */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Perfect For Your Special Events</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {singerData.eventTypes.map((event, index) => (
                <div 
                  key={index} 
                  className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-pink-200 group"
                >
                  <h4 className="font-bold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors">
                    {event.title}
                  </h4>
                  <p className="text-sm text-gray-600">{event.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="text-center mt-12 p-8 bg-gradient-to-r from-blue-600 to-pink-600 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Book?</h3>
            <p className="text-blue-100 mb-6">Contact us today to discuss your event and get a personalized quote</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={`tel:${singerData.contact.phone}`}
                className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
              <a 
                href={`mailto:${singerData.contact.email}`}
                className="bg-white/20 text-white border border-white/30 px-6 py-3 rounded-full font-semibold hover:bg-white/30 transition-colors inline-flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Send Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBooking;