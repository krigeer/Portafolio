import { useState, useEffect, useRef } from 'react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('story');
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

  const tabs = [
    {
      id: 'story',
      label: 'Mi Historia',
      icon: '📖'
    },
    {
      id: 'passion',
      label: 'Pasiones',
      icon: '🚀'
    },
    {
      id: 'approach',
      label: 'Enfoque',
      icon: '💡'
    }
  ];

  const tabContent = {
    story: {
      title: "Mi Viaje en el Desarrollo",
      content: [
        "Comenzé mi aventura en el mundo de la programación impulsado por la curiosidad de entender cómo funcionan las cosas. Lo que empezó como un hobby se convirtió en una pasión que me lleva a explorar constantemente nuevas tecnologías.",
        "Con más de 3 años de experiencia, he trabajado en proyectos que van desde aplicaciones web interactivas hasta sistemas de automatización con IA. Cada proyecto es una oportunidad para aprender algo nuevo y superar mis propios límites."
      ]
    },
    passion: {
      title: "Lo que me Motiva",
      content: [
        "La inteligencia artificial no es solo una tecnología para mí, es una herramienta para resolver problemas reales y crear experiencias que marquen la diferencia. Me fascina cómo podemos usar datos y algoritmos para hacer la vida más fácil.",
        "El desarrollo web moderno me permite combinar creatividad y lógica. Disfruto creando interfaces que no solo se ven bien, sino que ofrecen experiencias memorables y funcionales para los usuarios."
      ]
    },
    approach: {
      title: "Mi Filosofía de Trabajo",
      content: [
        "Creo en el código limpio, las buenas prácticas y la colaboración. Cada línea de código que escribo está pensada para ser mantenible, escalable y comprensible para otros desarrolladores.",
        "Mi enfoque es centrado en el usuario: primero entiendo el problema, luego diseño la solución más elegante y eficiente. La tecnología debe servir a las personas, no al revés."
      ]
    }
  };

  const skills = [
    { name: 'JavaScript/TypeScript', level: 90, color: 'from-yellow-400 to-orange-500' },
    { name: 'Python/Django', level: 85, color: 'from-green-400 to-blue-500' },
    { name: 'React/Next.js', level: 88, color: 'from-blue-400 to-purple-500' },
    { name: 'AI/Machine Learning', level: 75, color: 'from-purple-400 to-pink-500' },
    { name: 'Node.js/APIs', level: 82, color: 'from-green-400 to-teal-500' },
    { name: 'UI/UX Design', level: 78, color: 'from-pink-400 to-red-500' }
  ];

  const achievements = [
    { icon: '🎯', title: 'Proyectos Exitosos', description: '50+ aplicaciones desarrolladas' },
    { icon: '🤖', title: 'Especialización IA', description: 'Sistemas inteligentes implementados' },
    { icon: '⚡', title: 'Optimización', description: 'Mejoras de rendimiento del 40%' },
    { icon: '🌟', title: 'Satisfacción', description: '100% de clientes satisfechos' }
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="relative py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-200/30 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-200/30 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-100/20 to-blue-100/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 text-sm font-semibold rounded-full mb-4">
            Conoce más sobre mí
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Sobre mí
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Desarrollador apasionado por crear soluciones innovadoras que combinan 
            tecnología moderna con experiencias excepcionales
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left column - Tabbed content */}
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            {/* Tab navigation */}
            <div className="flex flex-wrap gap-2 mb-8 p-2 bg-white/50 backdrop-blur-sm rounded-2xl border border-gray-200/50">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/25'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-white/80'
                  }`}
                >
                  <span className="text-lg">{tab.icon}</span>
                  <span className="text-sm">{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Tab content */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="text-2xl">{tabs.find(t => t.id === activeTab)?.icon}</span>
                {tabContent[activeTab].title}
              </h3>
              <div className="space-y-4">
                {tabContent[activeTab].content.map((paragraph, index) => (
                  <p key={index} className="text-gray-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Right column - Skills and achievements */}
          <div className={`space-y-8 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            {/* Skills section */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="text-2xl">⚡</span>
                Habilidades Técnicas
              </h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-200">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 group-hover:text-purple-600 transition-colors duration-200">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out group-hover:scale-105 origin-left`}
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${index * 100}ms`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements section */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="text-2xl">🏆</span>
                Logros Destacados
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div 
                    key={achievement.title}
                    className="group p-4 rounded-xl bg-gradient-to-br from-white to-gray-50/50 border border-gray-200/50 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-200">
                      {achievement.icon}
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-purple-700 transition-colors duration-200">
                      {achievement.title}
                    </h4>
                    <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-200">
                      {achievement.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105 transition-all duration-300 cursor-pointer group">
            <span>¿Listo para colaborar?</span>
            <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </div>
        </div>
      </div>
    </section>
  );
}