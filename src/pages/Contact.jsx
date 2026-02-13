import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  // REPLACE THIS WITH YOUR GOOGLE APPS SCRIPT WEB APP URL
  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbznnQAYg3m4hYVltO7wFL9GbZkgxWOco2PfGS34YuMfbmWfVtsyN1yRCKJNbA82mAkWrA/exec";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      if (SCRIPT_URL === "INSERT_YOUR_GOOGLE_SCRIPT_URL_HERE") {
        throw new Error("Please set your Google Request Script URL in the code!");
      }

      const formBody = new FormData();
      formBody.append('date', new Date().toLocaleString());
      formBody.append('name', formData.name);
      formBody.append('email', formData.email);
      formBody.append('subject', formData.subject);
      formBody.append('message', formData.message);

      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Important for Google Apps Script
        body: formBody
      });

      // With no-cors, we can't check response.ok (it will be opaque)
      // If code reaches here without error, we assume it worked.
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error('Error!', err.message);
      setError('Something went wrong. Please try again later or email me directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-full pb-12">
      
      {/* Header */}
      <div className="glass-card p-8 md:p-12 text-center mb-10">
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-4">
          Get in Touch
        </h1>
        <p className="text-base md:text-xl text-black dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Looking to build something meaningful? Reach out to discuss web development, AI/ML solutions, or collaboration opportunities.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        
        {/* Contact Information (Left) */}
        <div className="flex flex-col gap-6">
          <div className="glass-card p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Contact Info</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Email</h3>
                  <a href="mailto:mrankitkumar1530@gmail.com" className="text-gray-800 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    mrankitkumar1530@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg text-purple-600 dark:text-purple-400">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Location</h3>
                  <p className="text-gray-800 dark:text-gray-300">
                    Patna, Bihar, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg text-cyan-600 dark:text-cyan-400">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Phone</h3>
                  <p className="text-gray-800 dark:text-gray-300">
                    +91 7903905731
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg text-green-600 dark:text-green-400">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">WhatsApp</h3>
                  <a href="https://wa.me/917903905731" target="_blank" rel="noopener noreferrer" className="text-gray-800 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors">
                    +91 7903905731
                  </a>
                </div>
              </div>
            </div>
          </div>
        
          {/* Social Connect is covered in Footer, but we can add a mini CTA here too if desired, 
              or just keep it minimal. */}
        </div>

        {/* Contact Form (Right) */}
        <div className="glass-card p-6 md:p-8">
           <ContactForm />
        </div>

      </div>
    </div>
  );
};

export default Contact;
