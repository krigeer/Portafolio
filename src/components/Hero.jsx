import { useState, useEffect, useCallback } from 'react';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);

  const roles = [
    "Full Stack Developer",
    "Backend Developer", 
    "Software Engineer",
    "Frontend Developer",
    "DevOps Engineer"
  ];

  // Optimized mouse tracking
  const handleMouseMove = useCallback((e) => {
    requestAnimationFrame(() => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleMouseMove]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3500);
    
    return () => clearInterval(interval);
  }, [roles.length]);

  const downloadCV = () => {
    // Aquí irías la lógica para descargar el CV
    console.log('Descargando CV...');
  };

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      
  
      <div className="absolute inset-0 overflow-hidden">
        {/* Minimal geometric patterns */}
        <div 
          className="absolute top-1/4 right-1/4 w-64 h-64 border border-gray-800/30 rounded-full"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
          }}
        />
        <div 
          className="absolute bottom-1/3 left-1/4 w-48 h-48 border border-gray-700/20 rounded-full"
          style={{
            transform: `translate(${-mousePosition.x * 0.015}px, ${-mousePosition.y * 0.015}px)`
          }}
        />
        
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/10 via-transparent to-gray-800/5" />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gray-600/40 rounded-full animate-float-slow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${12 + Math.random() * 8}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        
        <div className={`mb-12 transition-all duration-1200 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-900/50 border border-gray-700/50 backdrop-blur-sm mb-8">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
            <span className="text-sm font-medium text-gray-300">Disponible para oportunidades laborales</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-light mb-6 leading-tight text-white">
            Jhon Alexander
          </h1>
          
          <div className="relative h-20 flex items-center justify-center mb-6">
            <h2 className="text-2xl md:text-4xl font-light text-gray-300 tracking-wide">
              <span className="text-white font-normal">
                {roles[currentRole]}
              </span>
              <span className="ml-2 text-gray-500 animate-pulse">|</span>
            </h2>
          </div>
        </div>

        <div className={`mb-16 transition-all duration-1200 delay-300 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <p className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-light mb-8">
            Desarrollador de software con <span className="text-white font-medium">+2 años de experiencia</span> 
            {' '}especializándome en tecnologías modernas como React, Node.js y Python. 
            Apasionado por crear soluciones eficientes y escalables que generen impacto real en los negocios.
          </p>
          
          {/* Key skills */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {['JavaScript', 'React', 'Node.js', 'Python', 'AWS', 'MongoDB'].map((skill, index) => (
              <span 
                key={skill}
                className={`px-4 py-2 bg-gray-900/50 border border-gray-700/50 text-gray-300 rounded-lg text-sm font-medium transition-all duration-300 delay-${index * 100} hover:border-gray-500/50 hover:text-white ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-20 transition-all duration-1200 delay-600 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <button 
            onClick={downloadCV}
            className="group relative px-8 py-4 bg-white text-black font-semibold rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl min-w-[220px] flex items-center justify-center"
          >
            <svg className="mr-3 w-5 h-5 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Descargar CV
          </button>
          
          <button 
            onClick={scrollToContact}
            className="group relative px-8 py-4 border-2 border-gray-600 text-gray-300 font-semibold rounded-lg hover:border-white hover:text-white transition-all duration-300 min-w-[220px] flex items-center justify-center"
          >
            <svg className="mr-3 w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Contactar
          </button>
        </div>

        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-1200 delay-900 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          {[
            { number: "10+", label: "Proyectos Completados" },
            { number: "2+", label: "Años Experiencia" },
            { number: "95%", label: "Código Coverage" },
            { number: "24h", label: "Tiempo Respuesta" }
          ].map((metric, index) => (
            <div key={index} className="group text-center p-6 border border-gray-800/50 rounded-lg hover:border-gray-600/50 hover:bg-gray-900/30 transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-gray-300 transition-colors duration-300">
                {metric.number}
              </div>
              <div className="text-gray-500 text-sm md:text-base font-medium tracking-wide uppercase">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={`absolute bottom-12 left-1/2 transform -translate-x-1/2 transition-all duration-1200 delay-1200 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <div className="flex flex-col items-center text-gray-600 hover:text-gray-400 transition-all duration-300 cursor-pointer group"
             onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
          <span className="text-xs mb-4 font-medium tracking-widest uppercase">
            Ver más
          </span>
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center group-hover:border-gray-400 transition-all duration-300">
            <div className="w-1 h-3 bg-gray-600 rounded-full mt-2 animate-bounce group-hover:bg-gray-400 transition-colors duration-300"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { 
            transform: translateY(0px); 
            opacity: 0.2;
          }
          50% { 
            transform: translateY(-15px); 
            opacity: 0.6;
          }
        }
        
        .animate-float-slow {
          animation: float-slow 15s ease-in-out infinite;
        }
        
        @media (prefers-reduced-motion: reduce) {
          .animate-float-slow,
          .animate-pulse,
          .animate-bounce {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}