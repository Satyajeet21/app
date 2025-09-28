import React, { useState } from 'react';
import { Mail, Phone, Instagram, Youtube, Facebook, Calendar, Users, Heart, Music, Send, CheckCircle } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { singerData } from '../data/mock';

const ContactBooking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSelectChange = (value) => {
    setFormData({ ...formData, eventType: value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };
  
  const getEventIcon = (title) => {
    switch (title) {
      case 'Farewell Parties': return Heart;
      case 'Community Festivals': return Users;
      case 'Cultural Festivals': return Calendar;
      case 'Musical Nights': return Music;
      default: return Music;
    }
  };
  
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's Create Magic Together
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Book Sarmistha Dash for your special event and create unforgettable musical moments
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Event Types */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Perfect For Your Events</h3>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {singerData.eventTypes.map((event, index) => {
                const IconComponent = getEventIcon(event.title);
                return (
                  <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-gradient-to-br from-blue-400 to-pink-400 rounded-full">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-white mb-2">{event.title}</h4>
                          <p className="text-blue-100 text-sm">{event.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
            
            {/* Contact Information */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <h4 className="text-xl font-bold text-white mb-6">Get in Touch</h4>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 text-blue-100">
                    <Mail className="w-5 h-5 text-pink-400" />
                    <span>{singerData.contact.email}</span>
                  </div>
                  <div className="flex items-center space-x-4 text-blue-100">
                    <Phone className="w-5 h-5 text-pink-400" />
                    <span>{singerData.contact.phone}</span>
                  </div>
                  <div className="pt-4 border-t border-white/20">
                    <p className="text-white font-medium mb-3">Follow the Journey</p>
                    <div className="flex space-x-4">
                      <a href="#" className="p-2 bg-pink-500/20 rounded-full hover:bg-pink-500/30 transition-colors">
                        <Instagram className="w-5 h-5 text-pink-400" />
                      </a>
                      <a href="#" className="p-2 bg-red-500/20 rounded-full hover:bg-red-500/30 transition-colors">
                        <Youtube className="w-5 h-5 text-red-400" />
                      </a>
                      <a href="#" className="p-2 bg-blue-500/20 rounded-full hover:bg-blue-500/30 transition-colors">
                        <Facebook className="w-5 h-5 text-blue-400" />
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Booking Form */}
          <div>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Book a Performance</h3>
                
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-white mb-2">Thank You!</h4>
                    <p className="text-blue-100">Your booking request has been submitted. We'll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-white font-medium mb-2">Full Name</label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="bg-white/10 border-white/30 text-white placeholder:text-blue-200"
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-white font-medium mb-2">Phone Number</label>
                        <Input
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="bg-white/10 border-white/30 text-white placeholder:text-blue-200"
                          placeholder="Your phone number"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-white font-medium mb-2">Email Address</label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="bg-white/10 border-white/30 text-white placeholder:text-blue-200"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                    
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-white font-medium mb-2">Event Type</label>
                        <Select onValueChange={handleSelectChange} required>
                          <SelectTrigger className="bg-white/10 border-white/30 text-white">
                            <SelectValue placeholder="Select event type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="farewell">Farewell Party</SelectItem>
                            <SelectItem value="community">Community Festival</SelectItem>
                            <SelectItem value="cultural">Cultural Festival</SelectItem>
                            <SelectItem value="musical">Musical Night</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="block text-white font-medium mb-2">Event Date</label>
                        <Input
                          type="date"
                          name="eventDate"
                          value={formData.eventDate}
                          onChange={handleInputChange}
                          className="bg-white/10 border-white/30 text-white"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-white font-medium mb-2">Event Details</label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="bg-white/10 border-white/30 text-white placeholder:text-blue-200 min-h-[120px]"
                        placeholder="Tell us about your event, expected audience size, venue details, and any special requirements..."
                        required
                      />
                    </div>
                    
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white py-3 text-lg rounded-full flex items-center justify-center space-x-2"
                    >
                      <Send className="w-5 h-5" />
                      <span>Send Booking Request</span>
                    </Button>
                    
                    <p className="text-blue-200 text-sm text-center">
                      * We typically respond within 24 hours with availability and pricing details
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBooking;