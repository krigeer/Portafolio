import { useState, useEffect } from 'react';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const roles = [
    "Desarrollador Full Stack",
    "Especialista en IA",
    "Creador de Experiencias Web",
    "Innovador Digital"
  ];

  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Dynamic background with multiple layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-950" />
      
      {/* Animated background shapes */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`
          }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${-mousePosition.x * 0.08}px, ${-mousePosition.y * 0.08}px)`,
            animationDelay: '1s'
          }}
        />
        <div 
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(-50%, -50%) translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px)`,
            animationDelay: '2s'
          }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className={`relative z-10 text-center px-6 max-w-5xl mx-auto transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        
        {/* Greeting with stagger animation */}
        <div className="mb-8 space-y-4">
          <div className={`transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            <span className="inline-block text-lg md:text-xl text-purple-300 font-medium mb-2">
              👋 ¡Hola! Soy
            </span>
          </div>
          
          <h1 className={`text-5xl md:text-7xl lg:text-8xl font-bold mb-6 transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            <span className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent hover:from-purple-400 hover:via-blue-400 hover:to-cyan-400 transition-all duration-500">
              Jhon Alexander
            </span>
          </h1>
        </div>

        {/* Animated role description */}
        <div className={`mb-12 transition-all duration-700 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}>
          <div className="h-20 flex items-center justify-center">
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 font-light">
              <span className="text-purple-400 font-medium">
                {roles[currentRole]}
              </span>
              <span className="ml-2 animate-pulse">|</span>
            </p>
          </div>
          <p className="text-lg md:text-xl text-gray-400 mt-4 max-w-2xl mx-auto leading-relaxed">
            Apasionado por crear experiencias digitales innovadoras que combinan 
            <span className="text-purple-300 font-medium"> inteligencia artificial</span> y 
            <span className="text-blue-300 font-medium"> desarrollo web moderno</span>
          </p>
        </div>

        {/* Call to action buttons */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-700 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}>
          <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40">
            <span className="relative z-10">Ver mis proyectos</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>
          
          <button className="group relative px-8 py-4 border-2 border-purple-400/50 text-purple-300 font-semibold rounded-full hover:border-purple-400 hover:text-white transition-all duration-300 hover:bg-purple-400/10">
            <span className="relative z-10">Contactar</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 transform scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full"></div>
          </button>
        </div>

        {/* Social proof or stats */}
        <div className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-700 delay-1200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}>
          {[
            { number: "50+", label: "Proyectos Completados" },
            { number: "3+", label: "Años de Experiencia" },
            { number: "100%", label: "Satisfacción del Cliente" }
          ].map((stat, index) => (
            <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm md:text-base group-hover:text-gray-300 transition-colors duration-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-700 delay-1500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      }`}>
        <div className="flex flex-col items-center text-gray-400 hover:text-purple-300 transition-colors duration-300 cursor-pointer group">
          <span className="text-sm mb-2 group-hover:text-white transition-colors duration-300">Scroll para explorar</span>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center group-hover:border-purple-400 transition-colors duration-300">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce group-hover:bg-purple-400 transition-colors duration-300"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translate(0, 0) rotate(0deg); 
            opacity: 0;
          }
          10%, 90% {
            opacity: 1;
          }
          50% { 
            transform: translate(-20px, -20px) rotate(180deg); 
            opacity: 0.8;
          }
        }
        
        .animate-float {
          animation: float 10s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}