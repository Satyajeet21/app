import React, { useState } from 'react';
import { Mail, Phone, Instagram, Youtube, Facebook, Send, CheckCircle } from 'lucide-react';
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
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };
  
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Book a <span className="text-pink-500">Performance</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-orange-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to make your event unforgettable? Let's discuss how Sarmistha can bring magic to your celebration.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div>
            <Card className="bg-white shadow-lg border-0">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Send className="w-6 h-6 text-pink-500 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Send a Message</h3>
                </div>
                
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h4>
                    <p className="text-gray-600">Your booking request has been submitted. We'll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Name *</label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="border-gray-300 focus:border-pink-500 focus:ring-pink-500"
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Phone</label>
                        <Input
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="border-gray-300 focus:border-pink-500 focus:ring-pink-500"
                          placeholder="Your phone number"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Email *</label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="border-gray-300 focus:border-pink-500 focus:ring-pink-500"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                    
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Event Date</label>
                        <Input
                          type="date"
                          name="eventDate"
                          value={formData.eventDate}
                          onChange={handleInputChange}
                          className="border-gray-300 focus:border-pink-500 focus:ring-pink-500"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Event Type</label>
                      <Select onValueChange={handleSelectChange} required>
                        <SelectTrigger className="border-gray-300 focus:border-pink-500 focus:ring-pink-500">
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
                      <label className="block text-gray-700 font-medium mb-2">Message *</label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="border-gray-300 focus:border-pink-500 focus:ring-pink-500 min-h-[120px]"
                        placeholder="Tell us about your event, preferred songs, duration, and any special requirements..."
                        required
                      />
                    </div>
                    
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white py-3 text-lg rounded-lg flex items-center justify-center space-x-2"
                    >
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
          
          {/* Contact Information */}
          <div>
            <Card className="bg-white shadow-lg border-0 h-fit">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-pink-100 rounded-full">
                      <Phone className="w-5 h-5 text-pink-500" />
                    </div>
                    <span className="text-gray-700">{singerData.contact.phone}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-blue-100 rounded-full">
                      <Mail className="w-5 h-5 text-blue-500" />
                    </div>
                    <span className="text-gray-700">{singerData.contact.email}</span>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Follow Sarmistha</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="p-3 bg-pink-500 rounded-lg hover:bg-pink-600 transition-colors">
                      <Instagram className="w-5 h-5 text-white" />
                    </a>
                    <a href="#" className="p-3 bg-red-500 rounded-lg hover:bg-red-600 transition-colors">
                      <Youtube className="w-5 h-5 text-white" />
                    </a>
                    <a href="#" className="p-3 bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors">
                      <Facebook className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Perfect For Section */}
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Perfect For</h3>
              <div className="grid grid-cols-2 gap-4">
                {singerData.eventTypes.map((event, index) => (
                  <div key={index} className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <h4 className="font-semibold text-gray-900 mb-1">{event.title}</h4>
                    <p className="text-sm text-gray-600">{event.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBooking;