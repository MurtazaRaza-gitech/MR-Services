
import React from 'react';

const About: React.FC = () => {
  const techs = ['React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Tailwind', 'Next.js', 'Flutter', 'Docker'];

  return (
    <div className="animate-fadeIn max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Introduction */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24 mt-8">
        <div>
          <h2 className="text-blue-500 font-bold uppercase tracking-wider text-sm mb-4">About the Company</h2>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
            Two Years of <span className="text-purple-500">Innovation</span> & Exponential Growth
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed mb-6">
            Founded by Murtaza Raza with a vision to revolutionize the tech landscape, MR-Services has rapidly grown into a formidable force in the industry. In just two short years, we have delivered over 50+ high-impact projects globally.
          </p>
          <p className="text-slate-400 text-lg leading-relaxed mb-8">
            Our journey started with a commitment to excellence and a deep passion for problem-solving. Today, we help startups and enterprises alike navigate the complex digital world with confidence and agility.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 bg-slate-800/50 rounded-2xl border-l-4 border-blue-500 flex flex-col justify-center">
              <h3 className="text-3xl font-black text-white mb-1">2+</h3>
              <p className="text-slate-400 text-sm font-bold uppercase tracking-tight">Years of Experience</p>
            </div>
            <div className="p-6 bg-slate-800/50 rounded-2xl border-l-4 border-purple-500 flex flex-col justify-center">
              <h3 className="text-3xl font-black text-white mb-1">30+</h3>
              <p className="text-slate-400 text-sm font-bold uppercase tracking-tight">Expert Employees</p>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="w-full aspect-square bg-slate-800 rounded-3xl overflow-hidden border border-slate-700 shadow-2xl relative z-10">
            <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800" alt="Tech Team" className="w-full h-full object-cover opacity-60 mix-blend-overlay hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
            <div className="absolute bottom-8 left-8">
                <p className="text-white text-xl font-bold">Our Global Headquarters</p>
                <div className="flex items-center gap-2 text-blue-400">
                   <i className="fa-solid fa-location-dot"></i>
                   <span>Gulberg, Lahore, Pakistan</span>
                </div>
            </div>
          </div>
          <div className="absolute -top-6 -right-6 w-48 h-48 bg-blue-600 rounded-full blur-[100px] opacity-20"></div>
          <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-purple-600 rounded-full blur-[100px] opacity-20"></div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
        <div className="p-10 bg-slate-900 border border-slate-800 rounded-3xl hover:border-red-500/30 transition-all duration-300 flex flex-col">
          <div className="w-14 h-14 bg-red-600/20 rounded-xl flex items-center justify-center text-red-500 text-2xl mb-8">
            <i className="fa-solid fa-bullseye"></i>
          </div>
          <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
          <p className="text-slate-400 leading-relaxed text-lg">
            To empower businesses with disruptive technology solutions that solve real-world problems and drive meaningful growth. We aim to bridge the gap between imagination and implementation through world-class engineering.
          </p>
        </div>
        
        <div className="p-10 bg-slate-900 border border-slate-800 rounded-3xl hover:border-blue-500/30 transition-all duration-300 flex flex-col">
          <div className="w-14 h-14 bg-blue-600/20 rounded-xl flex items-center justify-center text-blue-500 text-2xl mb-8">
            <i className="fa-solid fa-eye"></i>
          </div>
          <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
          <p className="text-slate-400 leading-relaxed text-lg">
            To be a global leader in digital innovation, recognized for our creative problem-solving and our commitment to building a more connected, intelligent, and efficient technological future for everyone.
          </p>
        </div>
      </section>

      {/* Technologies */}
      <section className="text-center py-12 bg-slate-900/30 rounded-3xl border border-slate-800">
        <h2 className="text-2xl font-bold mb-10">Core Technologies We Master</h2>
        <div className="flex flex-wrap justify-center gap-4 px-6">
          {techs.map((t) => (
            <span key={t} className="px-6 py-3 bg-slate-800/80 border border-slate-700 rounded-xl text-slate-300 font-bold tracking-wide hover:bg-slate-700 hover:border-blue-500 hover:text-white transition-all cursor-default shadow-lg">
              {t}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
