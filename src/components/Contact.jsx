import { useState, useEffect, useRef } from 'react';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    position: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.message) {
      alert('Por favor completa los campos obligatorios (nombre, email y mensaje)');
      return;
    }

    setIsSubmitting(true);
    
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
   
    console.log('Formulario enviado:', formData);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      position: '',
      message: ''
    });
    
    setIsSubmitting(false);
    alert('Mensaje enviado correctamente. Te contactaré pronto.');
  };

  const contactMethods = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: 'Email',
      value: 'aaalexander2123@gmail.com',
      href: 'mailto:aaalexander2123@gmail.com',
      description: 'Respuesta en 24h'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v4" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 17h.01" />
        </svg>
      ),
      label: 'GitHub',
      value: 'github.com/krigeer',
      href: 'https://github.com/krigeer',
      description: 'Código y proyectos'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6z" />
        </svg>
      ),
      label: 'LinkedIn',
      value: 'linkedin.com/in/jhon-duque-f085',
      href: 'https://co.linkedin.com/in/jhon-duque-f085',
      description: 'Perfil profesional'
    }
  ];

  const quickStats = [
    { label: 'Tiempo de respuesta', value: '< 24h' },
    { label: 'Disponibilidad', value: 'Inmediata' },
    { label: 'Modalidad', value: 'Remoto/Presencial' },
    { label: 'Ubicación', value: 'Medellin, Colombia' }
  ];

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="relative py-24 bg-black overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-20 w-64 h-64 border border-gray-800/30 rounded-full" />
        <div className="absolute bottom-20 left-20 w-48 h-48 border border-gray-700/20 rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center px-4 py-2 bg-gray-900/50 border border-gray-700/50 text-gray-300 text-sm font-medium rounded-full mb-6">
            Hablemos de oportunidades
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            Contacto Profesional
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
            Abierto a nuevas oportunidades laborales. Conectemos para discutir cómo puedo agregar valor a tu equipo.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="bg-gray-900/30 backdrop-blur-sm rounded-lg p-8 border border-gray-700/50">
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Mensaje Directo
              </h3>
              
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-none transition-all duration-200"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-none transition-all duration-200"
                      placeholder="tu@empresa.com"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Empresa
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-none transition-all duration-200"
                      placeholder="Nombre de la empresa"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Posición
                    </label>
                    <input
                      type="text"
                      name="position"
                      value={formData.position}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-none transition-all duration-200"
                      placeholder="Tu cargo"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-none transition-all duration-200 resize-none"
                    placeholder="Háblame sobre la oportunidad, requisitos del puesto, o cualquier pregunta que tengas..."
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.49 8.49l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.49-8.49l2.83-2.83" />
                      </svg>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                      Enviar Mensaje
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Contact Info & Quick Stats */}
          <div className={`space-y-8 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            {/* Contact Methods */}
            <div className="bg-gray-900/30 backdrop-blur-sm rounded-lg p-8 border border-gray-700/50">
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Información de Contacto
              </h3>
              
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <a
                    key={method.label}
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-4 rounded-lg bg-gray-800/30 border border-gray-700/30 hover:border-gray-600/50 hover:bg-gray-800/50 transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gray-700/50 rounded-lg flex items-center justify-center text-gray-400 group-hover:text-white group-hover:bg-gray-600/50 transition-all duration-300">
                      {method.icon}
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-medium text-white group-hover:text-gray-200 transition-colors duration-200">
                        {method.label}
                      </h4>
                      <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-200">
                        {method.value}
                      </p>
                      <p className="text-gray-500 text-xs">
                        {method.description}
                      </p>
                    </div>
                    <svg className="w-5 h-5 text-gray-600 group-hover:text-gray-400 group-hover:translate-x-1 transition-all duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-gray-900/30 backdrop-blur-sm rounded-lg p-8 border border-gray-700/50">
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                Disponibilidad
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {quickStats.map((stat, index) => (
                  <div key={stat.label} className="text-center p-4 rounded-lg bg-gray-800/30 border border-gray-700/30">
                    <div className="text-lg font-semibold text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className={`mt-20 pt-8 border-t border-gray-700/50 text-center transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-gray-400">
              <p>&copy; 2024 Jhon Alexander Duque. Desarrollador Full Stack</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-gray-400">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm">Disponible para oportunidades</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}