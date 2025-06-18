import { useState, useEffect, useRef } from 'react';

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
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

  const projects = [
    {
      id: 1,
      name: "EduGestor IA",
      description: "Plataforma educativa inteligente que revoluciona la gestión académica mediante inteligencia artificial",
      fullDescription: "Sistema completo de gestión educativa que integra IA para personalizar el aprendizaje, automatizar evaluaciones y generar reportes inteligentes. Incluye módulos para estudiantes, profesores y administradores.",
      category: "ai",
      status: "Completado",
      year: "2024",
      link: "#",
      image: "/api/placeholder/600/400",
      tags: ["Python", "Django", "AI/ML", "PostgreSQL", "React", "TensorFlow"],
      features: [
        "Sistema de recomendación personalizado",
        "Análisis predictivo de rendimiento",
        "Automatización de tareas administrativas",
        "Dashboard intuitivo con métricas avanzadas"
      ],
      metrics: {
        users: "500+",
        performance: "40% mejora",
        satisfaction: "95%"
      },
      color: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50"
    },
    {
      id: 2,
      name: "Inventario SENA",
      description: "Sistema robusto de gestión de inventario diseñado específicamente para equipos tecnológicos del SENA",
      fullDescription: "Plataforma web completa para el control y seguimiento de inventario tecnológico, con funcionalidades de préstamo, mantenimiento, y reportes detallados. Optimizada para instituciones educativas.",
      category: "web",
      status: "En desarrollo",
      year: "2024",
      link: "#",
      image: "/api/placeholder/600/400",
      tags: ["Django", "Python", "SQLite", "Bootstrap", "JavaScript", "PDF Reports"],
      features: [
        "Gestión completa de equipos tecnológicos",
        "Sistema de préstamos y devoluciones",
        "Reportes automáticos en PDF",
        "Control de mantenimientos y reparaciones"
      ],
      metrics: {
        equipment: "1000+",
        efficiency: "60% mejora",
        time: "3hrs ahorradas/día"
      },
      color: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50"
    },
    {
      id: 3,
      name: "Portfolio Interactivo",
      description: "Portafolio personal con diseño moderno y efectos visuales avanzados",
      fullDescription: "Sitio web personal desarrollado con las últimas tecnologías web, featuring animaciones fluidas, diseño responsive y experiencia de usuario excepcional.",
      category: "frontend",
      status: "Completado",
      year: "2024",
      link: "#",
      image: "/api/placeholder/600/400",
      tags: ["React", "Tailwind CSS", "Framer Motion", "Next.js", "TypeScript"],
      features: [
        "Diseño responsive y moderno",
        "Animaciones fluidas y microinteracciones",
        "Optimización SEO avanzada",
        "Performance score 95+"
      ],
      metrics: {
        performance: "95/100",
        loading: "<2s",
        mobile: "100% responsive"
      },
      color: "from-green-500 to-teal-500",
      bgGradient: "from-green-50 to-teal-50"
    }
  ];

  const categories = [
    { id: 'all', name: 'Todos', icon: '🚀', count: projects.length },
    { id: 'ai', name: 'IA & ML', icon: '🤖', count: projects.filter(p => p.category === 'ai').length },
    { id: 'web', name: 'Web Apps', icon: '🌐', count: projects.filter(p => p.category === 'web').length },
    { id: 'frontend', name: 'Frontend', icon: '🎨', count: projects.filter(p => p.category === 'frontend').length }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="relative py-20 bg-gradient-to-br from-slate-50 via-white to-purple-50/30 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-purple-200/30 to-blue-200/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-blue-200/20 to-cyan-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 left-10 w-8 h-8 border-2 border-purple-300/20 rotate-45 animate-spin-slow" />
        <div className="absolute bottom-1/3 right-16 w-6 h-6 bg-blue-300/20 rounded-full animate-bounce-slow" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 text-sm font-semibold rounded-full mb-4">
            Mi Trabajo
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Proyectos Destacados
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Una selección de proyectos que demuestran mi experiencia en desarrollo 
            full-stack, inteligencia artificial y diseño de experiencias digitales
          </p>
        </div>

        {/* Category filters */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`group flex items-center gap-3 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/25 scale-105'
                  : 'bg-white/80 text-gray-600 hover:bg-white hover:text-gray-900 shadow-sm border border-gray-200/50'
              }`}
            >
              <span className="text-lg group-hover:scale-110 transition-transform duration-200">
                {category.icon}
              </span>
              <span>{category.name}</span>
              <span className={`text-xs px-2 py-1 rounded-full ${
                selectedCategory === category.id 
                  ? 'bg-white/20' 
                  : 'bg-purple-100 text-purple-600'
              }`}>
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project image/preview */}
              <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-90`} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl text-white/80 group-hover:scale-110 transition-transform duration-300">
                    {project.category === 'ai' ? '🤖' : 
                     project.category === 'web' ? '🌐' : '🎨'}
                  </div>
                </div>
                
                {/* Status badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                    project.status === 'Completado' 
                      ? 'bg-green-500/90 text-white' 
                      : 'bg-yellow-500/90 text-white'
                  }`}>
                    {project.status}
                  </span>
                </div>

                {/* Year badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-xs font-semibold bg-white/20 text-white rounded-full backdrop-blur-sm">
                    {project.year}
                  </span>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Project content */}
              <div className="p-6">
                {/* Project title */}
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-700 transition-colors duration-300">
                  {project.name}
                </h3>

                {/* Project description */}
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {hoveredProject === project.id ? project.fullDescription : project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span 
                      key={tag}
                      className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-md hover:bg-purple-100 hover:text-purple-700 transition-colors duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2 py-1 text-xs bg-purple-100 text-purple-600 rounded-md">
                      +{project.tags.length - 3} más
                    </span>
                  )}
                </div>

                {/* Project metrics */}
                <div className="grid grid-cols-3 gap-3 mb-4 p-3 bg-gray-50 rounded-xl">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-sm font-bold text-gray-900">{value}</div>
                      <div className="text-xs text-gray-500 capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                {/* Features list (visible on hover) */}
                <div className={`transition-all duration-300 overflow-hidden ${
                  hoveredProject === project.id ? 'max-h-40 opacity-100 mb-4' : 'max-h-0 opacity-0'
                }`}>
                  <div className="text-sm text-gray-600 space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <span className="text-green-500">✓</span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.link}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 group"
                  >
                    <span>Ver Proyecto</span>
                    <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                  </a>
                  <button className="px-4 py-2 border-2 border-gray-200 text-gray-600 rounded-xl hover:border-purple-500 hover:text-purple-600 transition-all duration-300 hover:scale-105">
                    <span className="text-lg">ℹ️</span>
                  </button>
                </div>
              </div>

              {/* Decorative corner element */}
              <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${project.color} opacity-10 rounded-bl-full transform translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-500`} />
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex flex-col items-center gap-4">
            <p className="text-gray-600 text-lg">
              ¿Interesado en colaborar en tu próximo proyecto?
            </p>
            <button className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105 transition-all duration-300">
              <span>Hablemos</span>
              <span className="group-hover:translate-x-1 transition-transform duration-200">💬</span>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}