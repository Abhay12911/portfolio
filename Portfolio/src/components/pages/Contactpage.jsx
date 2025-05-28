

import React, { useState } from 'react';
import { Send, Mail, User, MessageSquare } from 'lucide-react';

const ContactPage = () => {
  const [formStatus, setFormStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');
    
    try {
      const form = e.currentTarget;
      await fetch('https://getform.io/f/bvrrmwzb', {
        method: 'POST',
        body: new FormData(form)
      });
      setFormStatus('sent');
      form.reset();
      setTimeout(() => setFormStatus('idle'), 3000);
    } catch (error) {
      setFormStatus('idle');
    }
  };

  return (
    <div name="contact" className="relative min-h-screen bg-gradient-to-b from-black to-gray-800 text-white py-20">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold inline-block bg-gradient-to-r from-purple-400 to-sky-400 bg-clip-text text-transparent pb-2 mb-4">
            Get In Touch
          </h1>
          <p className="text-gray-400 text-lg">
            Have a question or want to work together? Let's make it happen!
          </p>
        </div>

        <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl shadow-purple-500/5">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="flex items-center gap-2 text-gray-300 text-sm font-medium mb-2">
                <User className="w-4 h-4" />
                Your Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-gray-300 text-sm font-medium mb-2">
                <Mail className="w-4 h-4" />
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-gray-300 text-sm font-medium mb-2">
                <MessageSquare className="w-4 h-4" />
                Your Message
              </label>
              <textarea
                name="message"
                required
                rows={6}
                className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300 resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              disabled={formStatus !== 'idle'}
              className={`w-full flex items-center justify-center gap-2 py-3 px-6 rounded-lg text-white font-medium transition-all duration-300
                ${formStatus === 'idle' 
                  ? 'bg-gradient-to-r from-purple-500 to-sky-500 hover:from-purple-600 hover:to-sky-600 hover:shadow-lg hover:shadow-purple-500/20' 
                  : 'bg-gray-700 cursor-not-allowed'}`}
            >
              {formStatus === 'idle' && (
                <>
                  Send Message
                  <Send className="w-4 h-4" />
                </>
              )}
              {formStatus === 'sending' && 'Sending...'}
              {formStatus === 'sent' && 'Message Sent!'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;