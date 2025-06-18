import { useState, useEffect, useRef } from 'react';

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillsData = [
    // Frontend
    { name: "HTML5", category: "frontend", level: 95, icon: "🌐", color: "from-orange-400 to-red-500", description: "Estructura semántica moderna" },
    { name: "CSS3", category: "frontend", level: 90, icon: "🎨", color: "from-blue-400 to-blue-600", description: "Styling avanzado y responsive" },
    { name: "JavaScript", category: "frontend", level: 92, icon: "⚡", color: "from-yellow-400 to-orange-500", description: "ES6+ y programación funcional" },
    { name: "React", category: "frontend", level: 88, icon: "⚛️", color: "from-cyan-400 to-blue-500", description: "Hooks, Context, y arquitectura moderna" },
    { name: "Tailwind CSS", category: "frontend", level: 85, icon: "🎪", color: "from-teal-400 to-cyan-500", description: "Utility-first CSS framework" },
    
    // Backend
    { name: "Python", category: "backend", level: 90, icon: "🐍", color: "from-green-400 to-blue-500", description: "Desarrollo backend y scripting" },
    { name: "Django", category: "backend", level: 85, icon: "🚀", color: "from-green-500 to-emerald-600", description: "Framework web robusto" },
    { name: "SQL", category: "backend", level: 80, icon: "🗄️", color: "from-purple-400 to-pink-500", description: "Consultas complejas y optimización" },
    
    // Tools & DevOps
    { name: "Git", category: "tools", level: 88, icon: "🔧", color: "from-orange-500 to-red-600", description: "Control de versiones avanzado" },
    { name: "Docker", category: "tools", level: 75, icon: "🐳", color: "from-blue-500 to-indigo-600", description: "Containerización y despliegue" },
    { name: "Linux", category: "tools", level: 82, icon: "🐧", color: "from-gray-600 to-gray-800", description: "Administración de sistemas" }
  ];

  const categories = [
    { id: 'all', name: 'Todas', icon: '🚀', count: skillsData.length },
    { id: 'frontend', name: 'Frontend', icon: '🎨', count: skillsData.filter(s => s.category === 'frontend').length },
    { id: 'backend', name: 'Backend', icon: '⚙️', count: skillsData.filter(s => s.category === 'backend').length },
    { id: 'tools', name: 'Herramientas', icon: '🛠️', count: skillsData.filter(s => s.category === 'tools').length }
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === activeCategory);

  const getSkillDelay = (index) => {
    return isVisible ? `${index * 100}ms` : '0ms';
  };

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-950 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-purple-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 border border-purple-500/20 rounded-lg rotate-45 animate-spin-slow" />
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-blue-500/20 rounded-full animate-bounce-slow" />
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-sm animate-pulse" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 text-sm font-semibold rounded-full mb-4 border border-purple-500/30">
            Stack Tecnológico
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Tecnologías & Herramientas
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Dominio de tecnologías modernas para crear soluciones robustas y escalables
          </p>
        </div>

        {/* Category filter */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`group flex items-center gap-3 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/25 scale-105'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white backdrop-blur-sm border border-white/10'
              }`}
            >
              <span className="text-lg group-hover:scale-110 transition-transform duration-200">
                {category.icon}
              </span>
              <span>{category.name}</span>
              <span className={`text-xs px-2 py-1 rounded-full ${
                activeCategory === category.id 
                  ? 'bg-white/20' 
                  : 'bg-purple-500/20 text-purple-300'
              }`}>
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className={`group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: getSkillDelay(index),
                animationDelay: getSkillDelay(index)
              }}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              {/* Skill header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors duration-300">
                      {skill.name}
                    </h3>
                    <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {skill.description}
                    </p>
                  </div>
                </div>
                <div className="text-sm font-bold text-purple-300 group-hover:text-purple-200 transition-colors duration-300">
                  {skill.level}%
                </div>
              </div>

              {/* Progress bar */}
              <div className="mb-4">
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out relative`}
                    style={{ 
                      width: isVisible ? `${skill.level}%` : '0%',
                      transitionDelay: `${index * 100 + 500}ms`
                    }}
                  >
                    {/* Animated shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                  </div>
                </div>
              </div>

              {/* Skill level indicator */}
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        i < Math.round(skill.level / 20)
                          ? `bg-gradient-to-r ${skill.color}`
                          : 'bg-white/20'
                      }`}
                      style={{ transitionDelay: `${i * 50}ms` }}
                    />
                  ))}
                </div>
                <span className="text-gray-400">
                  {skill.level >= 90 ? 'Experto' : 
                   skill.level >= 80 ? 'Avanzado' : 
                   skill.level >= 70 ? 'Intermedio' : 'Básico'}
                </span>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-blue-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              {/* Glow effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${skill.color} rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10`} />
            </div>
          ))}
        </div>

        {/* Stats section */}
        <div className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {[
            { label: 'Tecnologías', value: skillsData.length, icon: '🚀' },
            { label: 'Años de Experiencia', value: '3+', icon: '⏰' },
            { label: 'Proyectos Completados', value: '50+', icon: '✨' },
            { label: 'Nivel Promedio', value: '85%', icon: '📊' }
          ].map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 group"
            >
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
              <div className="text-2xl font-bold text-white mb-1 group-hover:text-purple-300 transition-colors duration-300">{stat.value}</div>
              <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg) translateX(20px) rotate(0deg); }
          to { transform: rotate(360deg) translateX(20px) rotate(-360deg); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}