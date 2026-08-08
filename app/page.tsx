'use client'
import FloatingWhatsApp from "./components/FloatingWhatsApp"
import { useState } from "react"
import { Crown, Phone, Mail, CheckCircle, Send, Menu, X, ArrowDown } from "lucide-react"

export default function Home() {
  const [enviado, setEnviado] = useState(false)
  const [menuAbierto, setMenuAbierto] = useState(false)

  const handleSubmit = (e: any) => {
    e.preventDefault()
    setEnviado(true)
    setTimeout(() => setEnviado(false), 5000)
  }
  return (
    <div className="bg-[#0b0f19] text-gray-200 font-sans selection:bg-cyan-500 selection:text-black overflow-x-hidden">
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-[#0b0f19]/80 border-b border-gray-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <a href="#hero" className="flex items-center space-x-2 group">
            <span className="text-2xl font-extrabold tracking-wider bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent group-hover:opacity-80 transition-opacity">
              Cristian W <span className="text-white font-light">| Studio</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#hero" className="text-sm font-medium hover:text-cyan-400 transition-colors">Inicio</a>
            <a href="#sobre-mi" className="text-sm font-medium hover:text-cyan-400 transition-colors">Sobre Mí</a>
            <a href="#servicios" className="text-sm font-medium hover:text-cyan-400 transition-colors">Servicios</a>
            <a href="#proyectos" className="text-sm font-medium hover:text-cyan-400 transition-colors">Proyectos</a>
            <a href="#contacto" className="px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:scale-105 transition-all duration-300 text-sm">
              Contacto
            </a>
          </nav>

          <button 
            className="md:hidden text-gray-300 hover:text-white focus:outline-none p-2" 
            onClick={() => setMenuAbierto(!menuAbierto)}
          >
            {menuAbierto? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {menuAbierto && (
          <div className="md:hidden bg-[#0c1222] border-b border-gray-800">
            <div className="px-4 pt-2 pb-6 space-y-3">
              <a href="#hero" onClick={() => setMenuAbierto(false)} className="block py-2.5 px-3 rounded-lg hover:bg-gray-800/50 text-base font-medium">Inicio</a>
              <a href="#sobre-mi" onClick={() => setMenuAbierto(false)} className="block py-2.5 px-3 rounded-lg hover:bg-gray-800/50 text-base font-medium">Sobre Mí</a>
              <a href="#servicios" onClick={() => setMenuAbierto(false)} className="block py-2.5 px-3 rounded-lg hover:bg-gray-800/50 text-base font-medium">Servicios</a>
              <a href="#proyectos" onClick={() => setMenuAbierto(false)} className="block py-2.5 px-3 rounded-lg hover:bg-gray-800/50 text-base font-medium">Proyectos</a>
              <a href="#contacto" onClick={() => setMenuAbierto(false)} className="block py-3 px-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-center text-white font-medium">
                Contacto directo
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO PRINCIPAL */}
      <section id="hero" className="relative pt-32 pb-20 md:py-40 flex items-center overflow-hidden min-h-screen">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <span className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-400 text-xs font-semibold tracking-wider uppercase">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                <span>Disponible para nuevos proyectos ¡Comencemos!</span>
              </span>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white">
                Transformo ideas en <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
                  soluciones digitales
                </span>
              </h1>
              
              <p className="text-lg text-gray-400 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
                <h1 className="text-sm md:text-base font-semibold tracking-widest text-cyan-400 uppercase mb-3">
  Desarrollador Web en Puerto Iguazú, Misiones
</h1>

<h2 className="text-sm md:text-base font-semibold tracking-widest text-cyan-400 uppercase mb-3">
  Transformo ideas en <span className="text-cyan-400">soluciones digitales</span>
</h2>

<p className="mt-4 text-gray-400 max-w-2xl">
  Soy Cristian Wrubel, creo páginas web modernas, ultra rápidas y que convierten visitantes en clientes. Ayudo a negocios de Puerto Iguazú y toda Argentina a potenciar su presencia digital con un estándar técnico profesional.
</p>

<h3 className="mt-2 text-white font-medium">
  Creación de Páginas Web para Negocios y Emprendedores que Quieren Crecer
</h3>
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <a href="https://wa.me/5493754400392" target="_blank" className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-semibold text-center hover:shadow-[0_0_25px_rgba(16,185,129,0.3)] transition-all duration-300 flex items-center justify-center space-x-3 group">
                  <span>Contactar por WhatsApp</span>
                </a>
                <a href="#proyectos" className="w-full sm:w-auto px-8 py-4 rounded-full bg-gray-900 border border-gray-800 hover:border-cyan-500 hover:text-cyan-400 text-gray-300 font-semibold text-center transition-all duration-300 flex items-center justify-center space-x-2">
                  <span>Ver mis proyectos</span>
                  <ArrowDown className="w-4 h-4" />
                </a>
              </div>
            </div>
            
            <div className="relative w-72 h-72 sm:w-85 sm:h-85 md:w-96 md:h-96 group">
  <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-indigo-600 rounded-full blur-xl opacity-50"></div>
  <div className="absolute inset-0 rounded-full border border-dashed border-cyan-500/30"></div>
  <div className="absolute inset-0 rounded-full bg-black border-2 border-gray-800 flex items-center justify-center overflow-hidden">
    <img
      src="/logo-circle.jpg"
      alt="Cristian W"
      className="w-[100%] h-[100%] object-contain -translate-x-[-0.2%] -translate-y-[0.5%]"
    />
  </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="py-24 relative bg-[#0b0f19]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-cyan-400 font-semibold tracking-wider uppercase text-sm">¿Qué ofrezco?</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
              Servicios de desarrollo Web en Misiones: Landing Pages, E-commerce y SEO
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { titulo: 'Desarrollo de páginas web', desc: 'Sitios web institucionales, portfolios y portales interactivos optimizados.' },
              { titulo: 'Landing Pages', desc: 'Páginas de aterrizaje de alta conversión enfocadas en captar clientes.' },
              { titulo: 'Tiendas Online', desc: 'E-commerce intuitivos con pasarelas de pago integradas.' },
              { titulo: 'Diseño Responsive', desc: 'Tu sitio se ve impecable en celulares, tablets y computadoras.' },
              { titulo: 'Optimización SEO', desc: 'Estructuración técnica para mejorar tu posicionamiento en Google.' },
              { titulo: 'Mantenimiento', desc: 'Actualizaciones, corrección de errores y soporte continuo.' }
            ].map((servicio, i) => (
              <div key={i} className="group relative bg-[#0d1324] border border-gray-850 p-8 rounded-3xl hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-3">{servicio.titulo}</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-light">{servicio.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* SOBRE MÍ + STACK TECNOLÓGICO */}
<section id="sobre-mi" className="py-20 lg:py-32 bg-[#0c1222]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <span className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">QUIÉN SOY</span>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-3">
        Desarrollador Full Stack en Iguazú, Misiones, Argentina
      </h2>
      <p className="mt-6 text-lg text-gray-400 max-w-3xl mx-auto">
        Me especializo en crear aplicaciones web modernas, rápidas y optimizadas. 
        Con +3 años de experiencia ayudando a negocios a digitalizarse.
      </p>
    </div>
    
    {/* STACK TECNOLÓGICO */}
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-12">
      {['React', 'Next.js', 'TypeScript', 'Tailwind', 'Node.js', 'Firebase'].map((tech) => (
        <div key={tech} className="bg-[#0b0f19] border border-gray-800 rounded-xl p-6 text-center hover:border-cyan-500/50 transition-all">
          <p className="text-white font-semibold">{tech}</p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* POR QUÉ ELEGIRME */}
<section className="py-20 lg:py-32">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <span className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">¿POR QUÉ ELEGIRME?</span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-3 mb-6">
          ¿Necesitas una aplicación web personalizada a medida?
        </h2>
        <p className="text-lg text-gray-400 mb-8">
          No uso plantillas. Cada proyecto se desarrolla desde cero adaptado 100% a tu negocio. 
          Código limpio, rápido y escalable.
        </p>
        <div className="space-y-4">
  {[
    'Desarrollo a medida, sin plantillas',
    'Soporte técnico directo conmigo',
    'Entrega rápida en 2-3 semanas (dependiendo del proyecto)',
    'Optimizado para Google y móviles'
  ].map((item) => (
    <div key={item} className="flex items-center space-x-3">
      <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0" />
      <span className="text-gray-300">{item}</span>
    </div>
  ))}
  </div>
</div>

<div className="relative">
    <div className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-2xl p-8 border border-gray-800">
      <p className="text-2xl font-bold text-white mb-4">+20 proyectos entregados</p>
      <p className="text-gray-400">Clientes satisfechos en Argentina y LATAM</p>
    </div>
  </div>
</div> {/* Cierra el grid lg:grid-cols-2 */}
</div> {/* Cierra el max-w-7xl */}
</section>

{/* TESTIMONIOS - OPINIONES REALES */}
<section className="py-20 lg:py-32 bg-[#0c1222]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <span className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">TESTIMONIOS</span>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-3">
        Lo que dicen mis clientes
      </h2>
    </div>
    <div className="grid md:grid-cols-3 gap-8">
      {[
        { nombre: 'Juan Manel Massoni', empresa: 'Tienda Online', texto: 'Increíble trabajo. Mi tienda vende 3x más desde el rediseño.' },
        { nombre: 'María Isabel González', empresa: 'Estudio Jurídico', texto: 'Profesional, rápido y siempre disponible. 100% recomendado.' },
        { nombre: 'Carlos  Gabriel López', empresa: 'Startup Tech', texto: 'Entendió perfecto lo que necesitábamos. El mejor dev que contraté.' }
      ].map((testimonio, i) => (
        <div key={i} className="bg-[#0b0f19] border border-gray-800 rounded-xl p-8">
          <p className="text-gray-300 mb-6 italic">"{testimonio.texto}"</p>
          <div>
            <p className="text-white font-semibold">{testimonio.nombre}</p>
            <p className="text-sm text-gray-500">{testimonio.empresa}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

{/* PROYECTOS */}
<section id="proyectos" className="py-20 lg:py-32">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <span className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">PORTFOLIO</span>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-3">
        Proyectos Recientes
      </h2>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
  { id: 1, title: "Vc vacaciones copadas", desc: "Alojamiento en Puerto Iguazú - Landing premium con mapa y reservas", link: "/vc-vacaciones", image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80" },
  { id: 2, title: "E-commerce Iguazú", desc: "Tienda online de mates, termos, yerbas y bombillas", link: "/ecommerce-iguazu", image: "/mate-portada.jpg" },
  { id: 3, title: "Cristian W Studio", desc: "Portfolio personal con animaciones", link: "/cristian-w-studio", image: "/cristian-w-logo.jpg" },
].map((item) => (
  <a key={item.id} href={item.link} className="bg-[#0C1222] border border-gray-800 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all block">
    {item.image ? (
      <img src={item.image} alt={item.title} className="h-48 w-full object-cover" />
    ) : (
      <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-blue-600/20"></div>
    )}
    <div className="p-6">
      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
      <p className="text-gray-400 text-sm mb-4">{item.desc}</p>
      <span className="text-cyan-400 text-sm font-medium hover:text-cyan-300">Ver caso de estudio →</span>
    </div>
  </a>
))}
    </div>
  </div>
</section>

      {/* CONTACTO */}
      <section id="contacto" className="py-24 relative bg-[#0b0f19]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-cyan-400 font-semibold tracking-wider uppercase text-sm">Hablemos de tu proyecto</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
                  Ponte en Contacto
                </h2>
                <p className="text-gray-400 mt-4 font-light leading-relaxed">
                  ¿Tienes una idea en mente? Escríbeme y te respondo en menos de 24 horas.
                </p>
              </div>

              <div className="space-y-6">
                <a href="tel:+5493754400392" className="flex items-center space-x-4 p-4 rounded-2xl bg-gray-900/60 border border-gray-800 hover:border-cyan-500/50 hover:bg-cyan-950/20 transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-cyan-950/80 border border-cyan-800/40 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-all">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-gray-500 uppercase font-semibold">WhatsApp</span>
                    <span className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors">+54 93754400392</span>
                  </div>
                </a>

                <a href="mailto:wrubelcristian@gmail.com" className="flex items-center space-x-4 p-4 rounded-2xl bg-gray-900/60 border border-gray-800 hover:border-blue-500/50 hover:bg-blue-950/20 transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-blue-950/80 border border-blue-800/40 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-black transition-all">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-gray-500 uppercase font-semibold">Email</span>
                    <span className="text-base font-bold text-white group-hover:text-blue-400 transition-colors">wrubelcristian@gmail.com</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 bg-gray-900/30 border border-gray-850/80 rounded-3xl p-8 backdrop-blur-sm relative">
              {!enviado? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Nombre *</label>
                      <input type="text" required className="w-full bg-[#0b0f19] border border-gray-800 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all" placeholder="Juan Pérez" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Email *</label>
                      <input type="email" required className="w-full bg-[#0b0f19] border border-gray-800 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all" placeholder="juan@ejemplo.com" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Mensaje *</label>
                    <textarea rows={5} required className="w-full bg-[#0b0f19] border border-gray-800 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all resize-none" placeholder="Cuéntame sobre tu proyecto..."></textarea>
                  </div>

                  <button type="submit" className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold transition-all shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 hover:scale-[1.01] flex items-center justify-center space-x-2">
                    <span>Enviar Consulta</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              ) : (
                <div className="flex flex-col items-center justify-center p-8 text-center">
                  <div className="w-20 h-20 rounded-full bg-emerald-950 border border-emerald-500 flex items-center justify-center text-emerald-400 mb-6">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2">¡Mensaje Enviado!</h4>
                  <p className="text-sm text-gray-400 max-w-sm font-light">
                    Gracias por contactarme, me pondré en contacto contigo a la brevedad.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#070b12] border-t border-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <span className="text-xl font-extrabold tracking-wider bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Cristian W <span className="text-white font-light">| Studio</span>
            </span>
            
            <p className="text-sm text-gray-500 text-center">
              El código fuente queda alojado en nuestros servidores. El cliente recibe el sitio funcionando. 
              Transferencia de código: fee $200 USD + hosting propio.
            </p>
            
            <p className="text-sm text-gray-500">
              © 2026 Cristian W Studio. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
      <FloatingWhatsApp />
     </div>
 )
}