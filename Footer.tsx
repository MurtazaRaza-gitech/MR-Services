
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 items-start">
          {/* Company Column */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded flex items-center justify-center">
                <span className="text-sm font-black italic text-white">MR</span>
              </div>
              <span className="text-xl font-bold text-white">MR-Services</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Empowering businesses through cutting-edge technology and creative digital solutions. Your vision, our engineering.
            </p>
          </div>
          
          {/* Developer Info Column - Centered as requested */}
          <div className="flex flex-col items-center justify-center text-center">
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-[0.2em] opacity-80">Developer Info</h4>
            <div className="space-y-4 text-sm text-slate-300">
              <div className="flex items-center justify-center gap-3">
                <i className="fa-solid fa-user-graduate text-blue-500 w-5"></i>
                <span className="font-medium">Murtaza Raza</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <i className="fa-solid fa-calendar-alt text-blue-500 w-5"></i>
                <span>Semester: 1st</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <i className="fa-solid fa-university text-blue-500 w-5"></i>
                <span>University of Punjab</span>
              </div>
            </div>
          </div>

          {/* Social Connect Column */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right">
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-[0.2em] opacity-80">Connect With Us</h4>
            <div className="flex space-x-3">
              <a 
                href="https://www.facebook.com/share/1DT3yJ3iVM/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:-translate-y-1"
                aria-label="Facebook"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a 
                href="https://www.linkedin.com/in/murtaza-raza-85365a397?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-blue-700 hover:text-white transition-all duration-300 hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a 
                href="https://github.com/MurtazaRaza-gitech/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-slate-700 hover:text-white transition-all duration-300 hover:-translate-y-1"
                aria-label="GitHub"
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a 
                href="https://www.instagram.com/ddti.institute?igsh=Y2kzNXk4Yng3N2l5" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-pink-600 hover:text-white transition-all duration-300 hover:-translate-y-1"
                aria-label="Instagram"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800/50 pt-8 text-center">
          <p className="text-slate-500 text-xs tracking-widest uppercase">
            &copy; {new Date().getFullYear()} MR-Services. Designed with <i className="fa-solid fa-heart text-red-500 mx-1"></i> by Murtaza Raza.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
