
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      alert(`Thank you for your message, ${formData.name}! Our team will contact you within 24 hours.`);
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="animate-fadeIn max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Get In <span className="text-red-500">Touch</span></h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">Have a vision you want to bring to life or a question for our experts? Reach out to the MR-Services team today.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        {/* Contact Info */}
        <div className="space-y-6 lg:sticky lg:top-24">
          <div className="p-8 bg-slate-900 border border-slate-800 rounded-3xl shadow-xl">
            <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
               <i className="fa-solid fa-headset text-blue-500"></i>
               Contact Information
            </h3>
            
            <div className="space-y-8">
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center text-blue-500 flex-shrink-0">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-black mb-1">Email Us</p>
                  <a href="mailto:teamtech2286@gmail.com" className="text-slate-200 hover:text-blue-400 transition-colors font-medium text-lg">teamtech2286@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="w-12 h-12 bg-purple-600/20 rounded-xl flex items-center justify-center text-purple-500 flex-shrink-0">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-black mb-1">Call Us</p>
                  <a href="tel:03091070382" className="text-slate-200 hover:text-purple-400 transition-colors font-medium text-lg">0309 1070382</a>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="w-12 h-12 bg-red-600/20 rounded-xl flex items-center justify-center text-red-500 flex-shrink-0">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-black mb-1">Visit Us</p>
                  <p className="text-slate-200 font-medium text-lg">Gulberg, Lahore, Pakistan</p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-slate-800">
                <p className="text-sm font-bold text-white mb-6 uppercase tracking-widest text-center">Social Connect</p>
                <div className="grid grid-cols-2 gap-3">
                    <a 
                      href="https://www.linkedin.com/in/murtaza-raza-85365a397" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="px-3 py-3 bg-slate-800 hover:bg-blue-700 text-xs rounded-xl transition-all text-center flex items-center justify-center gap-2 font-bold"
                    >
                      <i className="fa-brands fa-linkedin text-lg"></i> LinkedIn
                    </a>
                    <a 
                      href="https://github.com/MurtazaRaza-gitech/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="px-3 py-3 bg-slate-800 hover:bg-slate-700 text-xs rounded-xl transition-all text-center flex items-center justify-center gap-2 font-bold"
                    >
                      <i className="fa-brands fa-github text-lg"></i> GitHub
                    </a>
                    <a 
                      href="https://www.facebook.com/share/1DT3yJ3iVM/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="px-3 py-3 bg-slate-800 hover:bg-blue-600 text-xs rounded-xl transition-all text-center flex items-center justify-center gap-2 font-bold"
                    >
                      <i className="fa-brands fa-facebook text-lg"></i> Facebook
                    </a>
                    <a 
                      href="https://www.instagram.com/ddti.institute" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="px-3 py-3 bg-slate-800 hover:bg-pink-600 text-xs rounded-xl transition-all text-center flex items-center justify-center gap-2 font-bold"
                    >
                      <i className="fa-brands fa-instagram text-lg"></i> Instagram
                    </a>
                </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="p-8 md:p-12 bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl -mr-16 -mt-16"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-3">
                <label className="text-sm font-black text-slate-500 uppercase tracking-widest ml-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Murtaza Raza"
                  className="w-full bg-slate-800 border border-slate-700 rounded-2xl px-5 py-4 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all text-white placeholder:text-slate-600 font-medium"
                />
              </div>
              <div className="space-y-3">
                <label className="text-sm font-black text-slate-500 uppercase tracking-widest ml-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="name@example.com"
                  className="w-full bg-slate-800 border border-slate-700 rounded-2xl px-5 py-4 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all text-white placeholder:text-slate-600 font-medium"
                />
              </div>
            </div>
            
            <div className="space-y-3 mb-10">
              <label className="text-sm font-black text-slate-500 uppercase tracking-widest ml-1">Project Message</label>
              <textarea
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell us about your project or inquiry..."
                className="w-full bg-slate-800 border border-slate-700 rounded-2xl px-5 py-4 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all text-white resize-none placeholder:text-slate-600 font-medium"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full md:w-auto px-12 py-5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-black text-lg rounded-2xl shadow-2xl shadow-blue-900/40 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'} 
              <i className={`fa-solid ${isSubmitting ? 'fa-circle-notch fa-spin' : 'fa-paper-plane'}`}></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
