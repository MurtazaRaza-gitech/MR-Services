
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const services = [
    { title: 'Web Development', icon: 'fa-code', color: 'text-blue-500', desc: 'Enterprise-grade web solutions built with modern stacks like React and Node.' },
    { title: 'SEO', icon: 'fa-magnifying-glass-chart', color: 'text-purple-500', desc: 'Optimize your online visibility and dominate search engine results effortlessly.' },
    { title: 'App Development', icon: 'fa-mobile-screen-button', color: 'text-red-500', desc: 'Native and cross-platform mobile applications that provide seamless user experiences.' },
    { title: 'UI/UX Design', icon: 'fa-wand-magic-sparkles', color: 'text-indigo-500', desc: 'User-centric designs that prioritize usability and visual aesthetic brilliance.' },
    { title: 'Web Designing', icon: 'fa-bezier-curve', color: 'text-cyan-500', desc: 'Creative, responsive, and high-converting website designs tailored for your brand.' },
    { title: 'Digital Marketing', icon: 'fa-bullhorn', color: 'text-rose-500', desc: 'Strategic marketing campaigns to grow your reach and maximize conversion rates.' },
  ];

  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 flex items-center justify-center overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-4">Welcome to MR-Services</h2>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            Engineering the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Digital Frontier</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Innovative tech solutions for modern brands. We turn complex challenges into elegant, functional digital experiences.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold text-lg shadow-xl shadow-blue-900/40 transition-all hover:scale-105 active:scale-95">
              Start a Project
            </Link>
            <Link to="/about" className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-full font-bold text-lg border border-slate-700 transition-all hover:scale-105 active:scale-95">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Premium <span className="text-blue-500">Services</span></h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
            <p className="mt-6 text-slate-400 max-w-xl mx-auto">
              Comprehensive technology services designed to scale your business to new heights in the digital era.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group p-8 bg-slate-800/40 border border-slate-700/50 rounded-2xl hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/20"
              >
                <div className={`w-14 h-14 ${service.color} bg-slate-900/50 rounded-xl flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform duration-500`}>
                  <i className={`fa-solid ${service.icon} text-center`}></i>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">{service.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Centered Alignment as requested */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950 rounded-[3rem] p-10 md:p-20 border border-indigo-500/20 relative overflow-hidden text-center shadow-2xl">
                {/* Background Decorations */}
                <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none select-none">
                    <i className="fa-solid fa-code text-[20rem] -mr-20 -mt-20"></i>
                </div>
                <div className="absolute bottom-0 left-0 p-4 opacity-5 pointer-events-none select-none">
                    <i className="fa-solid fa-microchip text-[15rem] -ml-20 -mb-20"></i>
                </div>

                <div className="relative z-10 flex flex-col items-center">
                    <div className="flex items-center justify-center gap-3 mb-8 px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20">
                       <i className="fa-solid fa-rocket text-blue-400"></i>
                       <span className="text-blue-400 font-bold tracking-[0.2em] uppercase text-xs">Ready to Launch?</span>
                    </div>
                    
                    <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight text-white max-w-2xl">
                        Ready to transform your ideas into <span className="text-blue-500">reality?</span>
                    </h2>
                    
                    <p className="text-slate-400 text-xl mb-12 max-w-lg mx-auto leading-relaxed">
                        Join over 100+ global clients who trust MR-Services for their technological growth and digital transformation.
                    </p>
                    
                    <Link to="/contact" className="group inline-flex items-center justify-center px-12 py-6 bg-blue-600 text-white rounded-full font-black text-xl hover:bg-blue-500 transition-all shadow-2xl shadow-blue-900/40 hover:scale-105 active:scale-95">
                        LET'S CONNECT 
                        <i className="fa-solid fa-arrow-right ml-3 transition-transform group-hover:translate-x-2"></i>
                    </Link>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
