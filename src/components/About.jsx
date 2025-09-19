import { useState, useEffect, useRef } from 'react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('experience');
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
      id: 'experience',
      label: 'Experiencia',
      icon: 'briefcase'
    },
    {
      id: 'expertise',
      label: 'Expertise',
      icon: 'code'
    },
    {
      id: 'approach',
      label: 'Metodología',
      icon: 'target'
    }
  ];

  const tabContent = {
    experience: {
      title: "Trayectoria Profesional",
      content: [
        "Desarrollador Full Stack con más de 2 años de experiencia construyendo aplicaciones web escalables y sistemas backend robustos. He trabajado en equipos ágiles entregando soluciones de alta calidad que impactan directamente en los objetivos de negocio.",
        "Mi experiencia abarca desde el desarrollo de APIs RESTful hasta la implementación de interfaces de usuario modernas, siempre enfocándome en las mejores prácticas de la industria y la optimización del rendimiento."
      ]
    },
    expertise: {
      title: "Especialización Técnica",
      content: [
        "Especialista en el stack MERN/MEAN con profundo conocimiento en JavaScript/TypeScript, Python y tecnologías cloud. Mi experiencia incluye arquitectura de microservicios, integración de APIs y optimización de bases de datos.",
        "Competente en metodologías DevOps, CI/CD, y herramientas de testing automatizado. Constantemente actualizado con las últimas tendencias y frameworks del ecosistema de desarrollo moderno."
      ]
    },
    approach: {
      title: "Metodología de Trabajo",
      content: [
        "Aplico metodologías ágiles (Scrum/Kanban) con enfoque en TDD y clean code. Priorizo la documentación clara, el code review riguroso y la colaboración efectiva en equipos multidisciplinarios.",
        "Mi proceso incluye análisis de requerimientos detallado, diseño de arquitectura escalable, desarrollo iterativo y testing exhaustivo, garantizando entregas puntuales y de calidad empresarial."
      ]
    }
  };

  const skills = [
    { name: 'JavaScript/TypeScript', level: 90, category: 'Frontend' },
    { name: 'React/Next.js', level: 88, category: 'Frontend' },
    { name: 'Node.js/Express', level: 85, category: 'Backend' },
    { name: 'Python/Django', level: 82, category: 'Backend' },
    { name: 'PostgreSQL/MongoDB', level: 80, category: 'Database' },
    { name: 'AWS/Docker', level: 78, category: 'DevOps' }
  ];

  const certifications = [
    { title: 'Analista y desarrollador de Software', status: 'En proceso', year: '2026' },
    { title: "Oracle Cloud Infrastructure", status: 'En Certificado', year: '2025' },
    { title: 'Scrum Master', status: 'Certificado', year: '2021' },
    { title: 'Tecnico en Sitemas', status: 'Certificado', year: '2021' }
  ];

  const getIconSVG = (iconName) => {
    const icons = {
      briefcase: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6z" />
        </svg>
      ),
      code: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      target: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    };
    return icons[iconName] || null;
  };

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="relative py-24 bg-black overflow-hidden"
    >
      {/* Minimal background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-32 left-20 w-64 h-64 border border-gray-800/30 rounded-full" />
        <div className="absolute bottom-32 right-20 w-48 h-48 border border-gray-700/20 rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center px-4 py-2 bg-gray-900/50 border border-gray-700/50 text-gray-300 text-sm font-medium rounded-full mb-6">
            Perfil Profesional
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            Acerca de mí
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
            Desarrollador especializado en tecnologías modernas con enfoque en soluciones escalables y código de calidad empresarial
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left column - Tabbed content */}
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            {/* Tab navigation */}
            <div className="flex gap-1 mb-8 p-1 bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-700/50">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-md font-medium transition-all duration-300 flex-1 justify-center ${
                    activeTab === tab.id
                      ? 'bg-white text-black'
                      : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                  }`}
                >
                  {getIconSVG(tab.icon)}
                  <span className="text-sm">{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Tab content */}
            <div className="bg-gray-900/30 backdrop-blur-sm rounded-lg p-8 border border-gray-700/50">
              <h3 className="text-2xl font-semibold text-white mb-6">
                {tabContent[activeTab].title}
              </h3>
              <div className="space-y-6">
                {tabContent[activeTab].content.map((paragraph, index) => (
                  <p key={index} className="text-gray-300 leading-relaxed font-light">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Right column - Skills and certifications */}
          <div className={`space-y-8 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            {/* Skills section */}
            <div className="bg-gray-900/30 backdrop-blur-sm rounded-lg p-8 border border-gray-700/50">
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                Stack Tecnológico
              </h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between items-center mb-3">
                      <div>
                        <span className="font-medium text-white group-hover:text-gray-200 transition-colors duration-200">
                          {skill.name}
                        </span>
                        <span className="ml-2 text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded">
                          {skill.category}
                        </span>
                      </div>
                      <span className="text-sm text-gray-400 group-hover:text-white transition-colors duration-200">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-700/50 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-white to-gray-400 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${index * 150}ms`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

  
            <div className="bg-gray-900/30 backdrop-blur-sm rounded-lg p-8 border border-gray-700/50">
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                Certificaciones
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div 
                    key={cert.title}
                    className="flex items-center justify-between p-4 rounded-lg bg-gray-800/30 border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div>
                      <h4 className="font-medium text-white mb-1">
                        {cert.title}
                      </h4>
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          cert.status === 'Certificado' 
                            ? 'bg-green-900/50 text-green-300 border border-green-700/50' 
                            : 'bg-yellow-900/50 text-yellow-300 border border-yellow-700/50'
                        }`}>
                          {cert.status}
                        </span>
                        <span className="text-sm text-gray-500">
                          {cert.year}
                        </span>
                      </div>
                    </div>
                    {cert.status === 'Certificado' && (
                      <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Professional CTA */}
        <div className={`text-center mt-20 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex flex-col sm:flex-row items-center gap-4">
            <button className="px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 flex items-center gap-3">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Descargar CV Completo
            </button>
            <button className="px-8 py-4 border-2 border-gray-600 text-gray-300 font-semibold rounded-lg hover:border-white hover:text-white transition-all duration-300 flex items-center gap-3">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Programar Entrevista
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}