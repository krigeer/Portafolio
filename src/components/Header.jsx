import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#about', label: 'Sobre mí', id: 'about' },
    { href: '#skills', label: 'Tecnologías', id: 'skills' },
    { href: '#projects', label: 'Proyectos', id: 'projects' },
    { href: '#contact', label: 'Contacto', id: 'contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-lg shadow-2xl shadow-black-500/10' 
        : 'bg-transparent'
    }`}>
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black pointer-events-none" />
      
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />
      
      <div className="relative max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="relative group">
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white via-red-200 to-blue-200 bg-clip-text text-transparent hover:from-purple-400 hover:via-blue-400 hover:to-purple-400 transition-all duration-300 cursor-pointer">
              Jhon Duque
            </h1>
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
          </div>
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setActiveSection(item.id)}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 group ${
                  activeSection === item.id
                    ? 'text-white bg-gradient-to-r from-red-800 to-red-600 shadow-lg shadow-purple-500/25'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="relative z-10">{item.label}</span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 scale-0 group-hover:scale-100 transition-transform duration-300" />
                
                {activeSection === item.id && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full animate-pulse" />
                )}
              </a>
            ))}
          </nav>

          <button className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors duration-200 group">
            <div className="space-y-1.5">
              <span className="block w-5 h-0.5 bg-white group-hover:bg-purple-400 transition-colors duration-200"></span>
              <span className="block w-5 h-0.5 bg-white group-hover:bg-purple-400 transition-colors duration-200"></span>
              <span className="block w-5 h-0.5 bg-white group-hover:bg-purple-400 transition-colors duration-200"></span>
            </div>
          </button>
        </div>
        <nav className="md:hidden mt-4 space-y-2 animate-fadeIn">
          {navItems.map((item, index) => (
            <a
              key={item.id}
              href={item.href}
              onClick={() => setActiveSection(item.id)}
              className={`block px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeSection === item.id
                  ? 'text-white bg-gradient-to-r from-purple-600 to-blue-600'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </header>
  );
}