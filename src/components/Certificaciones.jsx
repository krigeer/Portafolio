import React, { useState } from "react";
import { 
  Award, 
  Download,
  Eye,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Shield,
  Star,
  ExternalLink,
  AlertCircle,
  CheckCircle
} from "lucide-react";

const Certificaciones = () => {
  // Datos de ejemplo - en tu caso real, estos vendrían como props o de una API
  const [certificaciones] = useState([
    {
      id: 1,
      nombre: "AWS Certified Solutions Architect",
      entidad: "Amazon Web Services",
      fecha: "2024-03-15",
      archivo: "aws-solutions-architect.pdf",
      url: "#" // URL del certificado si está disponible online
    },
    {
      id: 2,
      nombre: "Google Cloud Professional Cloud Architect",
      entidad: "Google Cloud",
      fecha: "2024-01-20",
      archivo: "gcp-cloud-architect.pdf",
      url: "#"
    },
    {
      id: 3,
      nombre: "Microsoft Azure Fundamentals",
      entidad: "Microsoft",
      fecha: "2023-11-10",
      archivo: "azure-fundamentals.pdf",
      url: "#"
    },
    {
      id: 4,
      nombre: "Certified Kubernetes Administrator",
      entidad: "Cloud Native Computing Foundation",
      fecha: "2023-09-05",
      archivo: "kubernetes-administrator.pdf",
      url: "#"
    }
  ]);

  const [mensaje, setMensaje] = useState({ tipo: "", texto: "" });

  const limpiarMensaje = () => {
    setTimeout(() => setMensaje({ tipo: "", texto: "" }), 3000);
  };

  const scrollHorizontal = (direccion) => {
    const container = document.getElementById('certificaciones-container');
    if (container) {
      const scrollAmount = 320;
      container.scrollBy({
        left: direccion === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const obtenerColorCertificacion = (index) => {
    const colores = [
      { bg: 'from-blue-500 to-purple-600', accent: 'blue', ring: 'ring-blue-500/20' },
      { bg: 'from-emerald-500 to-teal-600', accent: 'emerald', ring: 'ring-emerald-500/20' },
      { bg: 'from-orange-500 to-red-600', accent: 'orange', ring: 'ring-orange-500/20' },
      { bg: 'from-violet-500 to-pink-600', accent: 'violet', ring: 'ring-violet-500/20' },
      { bg: 'from-cyan-500 to-blue-600', accent: 'cyan', ring: 'ring-cyan-500/20' },
      { bg: 'from-rose-500 to-pink-600', accent: 'rose', ring: 'ring-rose-500/20' }
    ];
    return colores[index % colores.length];
  };

  const obtenerLogoEntidad = (entidad) => {
    const logos = {
      "Amazon Web Services": "🚀",
      "Google Cloud": "☁️",
      "Microsoft": "🔷",
      "Cloud Native Computing Foundation": "⚓",
      "Default": "🏆"
    };
    return logos[entidad] || logos["Default"];
  };

  const manejarVerCertificado = (cert) => {
    // Aquí puedes abrir el PDF desde tu servidor o mostrar un modal
    console.log(`Ver certificado: ${cert.nombre}`);
    setMensaje({ tipo: "info", texto: `Abriendo certificado: ${cert.nombre}` });
    limpiarMensaje();
    // Por ejemplo: window.open(`/certificados/${cert.archivo}`, '_blank');
  };

  const manejarDescargarCertificado = (cert) => {
    // Aquí puedes descargar el PDF desde tu servidor
    console.log(`Descargar certificado: ${cert.nombre}`);
    setMensaje({ tipo: "success", texto: `Descargando: ${cert.nombre}` });
    limpiarMensaje();
    // Por ejemplo: window.open(`/certificados/${cert.archivo}`, '_blank');
  };

  const manejarVerOnline = (cert) => {
    if (cert.url && cert.url !== "#") {
      window.open(cert.url, '_blank');
    }
  };

  return (
    <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="p-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-lg">
            <Award className="h-10 w-10 text-white" />
          </div>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6">
          Certificaciones Profesionales
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Credenciales que validan mi expertise en tecnologías cloud, desarrollo y arquitectura de software
        </p>
        
        {/* Estadísticas */}
        <div className="flex flex-wrap justify-center gap-8 mt-12">
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {certificaciones.length}
            </div>
            <div className="text-sm text-gray-600 font-medium">Certificaciones</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              {new Set(certificaciones.map(c => c.entidad)).size}
            </div>
            <div className="text-sm text-gray-600 font-medium">Proveedores</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              {new Date().getFullYear() - Math.min(...certificaciones.map(c => new Date(c.fecha).getFullYear())) + 1}
            </div>
            <div className="text-sm text-gray-600 font-medium">Años Certificando</div>
          </div>
        </div>
      </div>

      {/* Mensaje de estado */}
      {mensaje.texto && (
        <div className={`max-w-2xl mx-auto mb-8 border-l-4 p-4 rounded-r-lg ${
          mensaje.tipo === "error" 
            ? "border-red-500 bg-red-50" 
            : mensaje.tipo === "success"
            ? "border-green-500 bg-green-50"
            : "border-blue-500 bg-blue-50"
        }`}>
          <div className="flex items-center">
            {mensaje.tipo === "error" ? (
              <AlertCircle className="h-4 w-4 text-red-600 mr-3" />
            ) : mensaje.tipo === "success" ? (
              <CheckCircle className="h-4 w-4 text-green-600 mr-3" />
            ) : (
              <Eye className="h-4 w-4 text-blue-600 mr-3" />
            )}
            <p className={
              mensaje.tipo === "error" ? "text-red-700" : 
              mensaje.tipo === "success" ? "text-green-700" : "text-blue-700"
            }>
              {mensaje.texto}
            </p>
          </div>
        </div>
      )}

      {/* Controles de navegación */}
      {certificaciones.length > 3 && (
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => scrollHorizontal('left')}
            className="group p-4 bg-white/90 backdrop-blur-sm border-2 border-gray-200 rounded-full hover:bg-white hover:border-blue-300 hover:shadow-xl transition-all duration-300"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600 group-hover:text-blue-600 transition-colors" />
          </button>
          <button
            onClick={() => scrollHorizontal('right')}
            className="group p-4 bg-white/90 backdrop-blur-sm border-2 border-gray-200 rounded-full hover:bg-white hover:border-blue-300 hover:shadow-xl transition-all duration-300"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-6 w-6 text-gray-600 group-hover:text-blue-600 transition-colors" />
          </button>
        </div>
      )}

      {/* Lista horizontal de certificaciones */}
      <div 
        id="certificaciones-container"
        className="flex gap-8 overflow-x-auto pb-8 pt-4 px-4 snap-x snap-mandatory"
        style={{ 
          scrollBehavior: 'smooth', 
          scrollbarWidth: 'none', 
          msOverflowStyle: 'none'
        }}
      >
        <style jsx>{`
          #certificaciones-container::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        
        {certificaciones.map((cert, index) => {
          const colores = obtenerColorCertificacion(index);
          const logo = obtenerLogoEntidad(cert.entidad);
          
          return (
            <div 
              key={cert.id} 
              className="flex-shrink-0 w-80 snap-center shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-0 bg-white overflow-hidden group cursor-pointer rounded-2xl"
              onClick={() => manejarVerCertificado(cert)}
            >
              {/* Barra de color superior */}
              <div className={`h-2 bg-gradient-to-r ${colores.bg}`}></div>
              
              <div className="p-8 space-y-6">
                {/* Header con logo y badges */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 bg-gradient-to-br ${colores.bg} rounded-2xl shadow-lg flex items-center justify-center text-2xl`}>
                      {logo}
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className={`inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r ${colores.bg} rounded-full text-white text-xs font-semibold`}>
                        <Star className="h-3 w-3" />
                        CERTIFICADO
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contenido principal */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 leading-tight group-hover:text-blue-900 transition-colors">
                    {cert.nombre}
                  </h3>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-3 text-gray-600">
                      <div className={`p-1.5 bg-gradient-to-br ${colores.bg} rounded-lg`}>
                        <Shield className="h-3 w-3 text-white" />
                      </div>
                      <span className="font-semibold">{cert.entidad}</span>
                    </div>
                    
                    <div className="flex items-center gap-3 text-gray-600">
                      <div className={`p-1.5 bg-gradient-to-br ${colores.bg} rounded-lg`}>
                        <Calendar className="h-3 w-3 text-white" />
                      </div>
                      <span>
                        {new Date(cert.fecha).toLocaleDateString('es-ES', { 
                          year: 'numeric', 
                          month: 'long'
                        })}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Acciones */}
                <div className="flex gap-3 pt-4 border-t border-gray-100">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      manejarVerCertificado(cert);
                    }}
                    className={`flex-1 bg-gradient-to-r ${colores.bg} hover:shadow-lg text-white px-4 py-3 rounded-xl transition-all duration-300 font-medium flex items-center justify-center gap-2 group/btn`}
                  >
                    <Eye className="h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                    Ver
                  </button>
                  
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      manejarDescargarCertificado(cert);
                    }}
                    className="p-3 bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-800 rounded-xl transition-all duration-300 group/btn"
                    title="Descargar certificado"
                  >
                    <Download className="h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                  </button>
                  
                  {cert.url && cert.url !== "#" && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        manejarVerOnline(cert);
                      }}
                      className="p-3 bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-800 rounded-xl transition-all duration-300 group/btn"
                      title="Ver online"
                    >
                      <ExternalLink className="h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer con call-to-action */}
      <div className="text-center mt-16 pt-12 border-t border-gray-200">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Comprometido con el Aprendizaje Continuo
          </h3>
          <p className="text-gray-600 mb-8">
            Cada certificación representa horas de estudio y práctica para mantenerme actualizado con las últimas tecnologías y mejores prácticas de la industria.
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium">
            <Award className="h-5 w-5" />
            En constante crecimiento profesional
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificaciones;