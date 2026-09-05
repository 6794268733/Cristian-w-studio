"use client";
import { useState } from 'react';
import { 
  MessageCircle, Check, Star, ArrowRight, Zap, Globe, Search, 
  Headphones, Code2, Building2, Utensils, Wrench, BedDouble, ShoppingCart, LayoutTemplate,
  Clock, ShieldCheck, Award, Sparkles, MapPin, ExternalLink
} from 'lucide-react';

export default function App() {
  const [formData, setFormData] = useState({ name: '', business: '', phone: '' });
  const whatsappBase = "https://wa.me/5493754400392?text=";
  const getWhatsappLink = (msg: string) => `${whatsappBase}${encodeURIComponent(msg)}`;

  return (
    <div className="min-h-screen bg-[#050508] text-white selection:bg-[#00E5FF]/30 font-sans antialiased overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700;800&family=Geist+Mono:wght@400;500&display=swap');
        *{font-family: 'Geist', sans-serif;}
        .mono{font-family: 'Geist Mono', monospace;}
        ::-webkit-scrollbar{width:6px}
        ::-webkit-scrollbar-thumb{background:#1a1a22;border-radius:10px}
        html{scroll-behavior:smooth}
      `}</style>

      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute -top-[40%] left-1/2 -translate-x-1/2 w-[120%] h-[70%] bg-[radial-gradient(ellipse_at_center,_rgba(0,229,255,0.18),_transparent_60%)]" />
      </div>

      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#050508]/70 border-b border-white/[0.06]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 h-[72px] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/cristian-w-logo.jpg" className="w-[40px] h-[40px] rounded-xl object-cover border border-white/10" alt="Logo Cristian W" />
            <div className="leading-none">
              <div className="font-bold text-[15px]">Cristian W Studio</div>
              <div className="text-[10px] tracking-[0.18em] text-white/40 uppercase mono mt-[2px]">Puerto Iguazú • Web Dev</div>
            </div>
          </div>
          <a href={getWhatsappLink("Hola Cristian! Vi tu web y quiero una web para mi negocio.")} target="_blank" className="h-[40px] px-5 rounded-full bg-[#00E5FF] text-black font-semibold text-[13px] flex items-center gap-2 hover:bg-[#22ECFF] transition shadow-[0_0_20px_rgba(0,229,255,0.4)]">
            <MessageCircle size={16} /> WhatsApp
          </a>
        </div>
      </header>

      <section className="relative max-w-[1280px] mx-auto px-6 md:px-8 pt-14 md:pt-24 pb-16 md:pb-24">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/[0.08] mb-6">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-[11px] mono tracking-widest text-white/60">DISPONIBLE • ENTREGA EN 7 A 10 DÍAS</span>
            </div>

            <h1 className="text-[38px] md:text-[62px] leading-[0.95] tracking-[-0.04em] font-[800]">
              Tu Negocio No Necesita <br/>
              <span className="text-white/30">Promesas.</span><br/>
              <span className="bg-gradient-to-r from-[#00E5FF] to-[#8B5CF6] bg-clip-text text-transparent">Necesita Una Web<br/>Que Venda 24/7.</span>
            </h1>

            <p className="mt-6 text-[17px] md:text-[19px] leading-[1.6] text-white/60 max-w-[600px]">
              Hago páginas web profesionales para <span className="text-white font-medium">kioscos, restaurantes, ferreterías, clínicas, hoteles, cabañas, agencias, etc.</span> de Iguazú y toda Argentina. Desde una landing que convierte hasta una tienda que vende sola.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#precios" className="h-[48px] px-7 rounded-full bg-white text-black font-semibold text-[14px] flex items-center gap-2 hover:bg-zinc-100 transition">
                Quiero mi web PRO <ArrowRight size={16} />
              </a>
              <a href="#servicios" className="h-[48px] px-7 rounded-full bg-white/[0.06] border border-white/[0.10] text-white font-medium text-[14px] flex items-center gap-2">
                Ver trabajos reales
              </a>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6 max-w-[460px] border-t border-white/[0.06] pt-7">
              <div><div className="text-[22px] font-bold">+20</div><div className="text-[11px] mono text-white/40 mt-1">PROYECTOS</div></div>
              <div><div className="text-[22px] font-bold">7-10 días</div><div className="text-[11px] mono text-white/40 mt-1">ENTREGA</div></div>
              <div><div className="text-[22px] font-bold">100%</div><div className="text-[11px] mono text-white/40 mt-1">A MEDIDA</div></div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[24px] p-[1px] bg-gradient-to-b from-white/20 to-white/5">
              <div className="rounded-[23px] bg-[#0D0D14] overflow-hidden">
                <img src="/portada.jpg" className="w-full h-[420px] object-cover opacity-60" alt="Mi escritorio real" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#050508]/80 backdrop-blur-xl border border-white/10">
                  <div className="flex items-center gap-2 text-[12px] mono text-white/60"><MapPin size={14}/> Puerto Iguazú, Misiones • Trabajo real</div>
                  <div className="mt-2 font-semibold"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIOS UNIVERSAL */}
      <section id="servicios" className="max-w-[1280px] mx-auto px-6 md:px-8 py-16">
        <h2 className="text-[32px] md:text-[42px] font-bold tracking-tight">Una web para cada tipo de negocio</h2>
        <p className="text-white/50 mt-3 max-w-[600px]">Desde un kiosco de barrio hasta una cadena hotelera. Mismo código de calidad, adaptado a tu rubro.</p>
        
        <div className="mt-10 grid md:grid-cols-3 gap-4">
          {[
            { icon: LayoutTemplate, title: "Kioscos y Servicios", desc: "Landing que convierte visitas en WhatsApp en 24hs", price: "Desde $75k" },
            { icon: Building2, title: "Clínicas y Estudios", desc: "Web institucional seria, con turnos y SEO local", price: "Desde $250k" },
            { icon: Utensils, title: "Restaurantes y Bares", desc: "Carta QR, reservas y delivery integrado", price: "Desde $250k" },
            { icon: Wrench, title: "Ferreterías y Comercios", desc: "Catálogo de productos con consulta directa", price: "Desde $300k" },
            { icon: BedDouble, title: "Hoteles y Cabañas", desc: "Motor de reservas, multi-idioma PT/EN/ES, sin comisiones", badge: "ESPECIALIDAD IGUAZÚ", price: "Desde $550k" },
            { icon: ShoppingCart, title: "Tiendas Online", desc: "E-commerce con Mercado Pago, PIX y stock", price: "Desde $850k" },
          ].map((s,i)=>(
            <div key={i} className={`rounded-[20px] p-6 border ${s.badge ? 'bg-[#00E5FF]/[0.06] border-[#00E5FF]/30 shadow-[0_0_40px_rgba(0,229,255,0.15)]' : 'bg-white/[0.04] border-white/[0.06]'}`}>
              {s.badge && <div className="text-[10px] mono tracking-widest px-2 py-1 rounded-full bg-[#00E5FF] text-black font-bold mb-3 inline-block">{s.badge}</div>}
              <s.icon className={s.badge ? "text-[#00E5FF]" : "text-white/60"} size={22} />
              <div className="font-semibold mt-4">{s.title}</div>
              <div className="text-[13px] text-white/50 mt-2 leading-relaxed">{s.desc}</div>
              <div className="text-[12px] mono text-[#00E5FF] mt-4 font-semibold">{s.price}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PRECIOS */}
      <section id="precios" className="max-w-[1280px] mx-auto px-6 md:px-8 py-20 border-t border-white/[0.06]">
        <div className="text-center max-w-3xl mx-auto">
  <h2 className="text-[32px] md:text-[48px] font-black leading-[0.9] tracking-tighter">
    Cada negocio necesita algo distinto. <span className="text-zinc-500">Contame el tuyo.</span>
  </h2>
  <p className="text-[15px] text-white/60 mt-4 leading-[1.4]">
    No trabajo con plantillas ni precios fijos. Me contás qué querés lograr, te mando en 24hs una propuesta con ideas, tiempo de entrega y precio cerrado. Hablamos directo por WhatsApp.
  </p>
  <div className="mt-6 flex justify-center gap-2">
    <span className="text-[11px] mono px-3 py-1 rounded-full border border-white/10">✓ Sin letra chica</span>
    <span className="text-[11px] mono px-3 py-1 rounded-full border border-white/10">✓ Entrega 7 a 10 días</span>
    <span className="text-[11px] mono px-3 py-1 rounded-full border border-white/10">✓ Soporte directo conmigo</span>
  </div>
</div>

        <div className="mt-12 grid md:grid-cols-4 gap-4">
          {[
            { name: "Landing", list: ["1 sección vendedora", "WhatsApp directo", "Entrega 7-10 días"], popular: false },
            { name: "Institucional", list: ["Hasta 5 secciones", "SEO local Iguazú", "Formulario + Maps"], popular: false },
            { name: "Negocio Turístico PRO", list: ["Motor reservas / turnos", "Multi-idioma ES/EN/PT", "Panel autoadministrable", "Ideal hoteles, cabañas y clínicas"], popular: true, note: "El más elegido en Iguazú" },
            { name: "Tienda PRO", list: ["Catálogo + Mercado Pago", "Stock y envíos", "Capacitación incluida"], popular: false },
          ].map((p,i)=>(
            <div key={i} className={`rounded-[24px] p-7 flex flex-col ${p.popular ? 'bg-white text-black border-2 border-[#00E5FF] shadow-[0_0_50px_rgba(0,229,255,0.3)] scale-[1.02]' : 'bg-white/[0.04] border border-white/[0.08]'}`}>
              {p.popular && <div className="text-[11px] mono font-bold px-3 py-1 rounded-full bg-black text-white self-start mb-4">★ {p.note}</div>}
              <div className={`font-bold ${p.popular ? 'text-black' : 'text-white'}`}>{p.name}</div>
              <div className={`text-[11px] mono mt-1 ${p.popular ? 'text-black/50' : 'text-white/30'}`}>PAGO ÚNICO • 7 A 10 DÍAS</div>
              <div className={`mt-6 space-y-3 text-[13px] ${p.popular ? 'text-black/70' : 'text-white/60'}`}>
                {p.list.map((l,j)=><div key={j} className="flex gap-2"><Check size={14} className={p.popular ? 'text-black' : 'text-[#00E5FF]'}/>{l}</div>)}
              </div>
              <a href={getWhatsappLink(`Hola Cristian! Quiero el plan ${p.name}. Contame más. Soy`)} className={`mt-auto w-full min-h-[46px] py-2.5 px-3 rounded-full font-semibold text-[12px] leading-[1.1] text-center flex items-center justify-center gap-2 transition whitespace-normal ${p.popular? 'bg-black text-white hover:bg-zinc-900' : 'bg-white text-black hover:bg-zinc-100'}`}>
  {p.name.includes('Negocio') ? 'Elegir Turístico PRO' : `Elegir ${p.name.split('/')[0]}`} <ArrowRight size={14} className="shrink-0"/>
</a>
            </div>
          ))}
        </div>
        {/* SERVICIO MAPS - LO QUE OPTIMIZAMOS */}
<div className="mt-20 rounded-[28px] border border-white/10 bg-[#0f0f0f] p-7 md:p-10">
  <div className="flex items-center gap-2">
    <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
    <span className="text-[11px] mono text-emerald-400">SERVICIO QUE MÁS VENDE</span>
  </div>

  <h3 className="text-[24px] md:text-[32px] font-bold mt-3 leading-tight">Optimizo tu Google Maps para que aparezcas 1° y te lluevan clientes</h3>
  <p className="text-[14px] text-white/60 mt-3 max-w-2xl">Esto es lo mismo que hice con mi perfil y es lo que hago para hoteles, cabañas y restaurantes. No es solo poner el mapa.</p>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
    <div className="rounded-2xl bg-zinc-900 border border-white/10 p-5">
      <div className="text-[13px] font-bold">1. Limpio tus servicios</div>
      <div className="text-[12px] text-white/60 mt-1">De 15 servicios confusos a 7 que venden. Con palabras clave. Como hice con el mío.</div>
    </div>
    <div className="rounded-2xl bg-zinc-900 border border-white/10 p-5">
      <div className="text-[13px] font-bold">2. Cargo Productos con precio</div>
      <div className="text-[12px] text-white/60 mt-1">Tus 3 planes visibles en Maps. El cliente ve precio y te escribe sin preguntar.</div>
    </div>
    <div className="rounded-2xl bg-zinc-900 border border-white/10 p-5">
      <div className="text-[13px] font-bold">3. Fotos + Novedades</div>
      <div className="text-[12px] text-white/60 mt-1">De 4 fotos a 30 fotos pro + 2 posts por semana en Maps. Google te sube al top 3.</div>
    </div>
    <div className="rounded-2xl bg-zinc-900 border border-white/10 p-5">
      <div className="text-[13px] font-bold">4. Sistema de reseñas 5★</div>
      <div className="text-[12px] text-white/60 mt-1">Link directo + mensaje automático. Mi meta que hablamos: al menos 10 reseñas nuevas por mes.</div>
    </div>
  </div>

  <div className="mt-6 rounded-xl bg-white text-black p-4 flex flex-col md:flex-row justify-between items-center gap-3">
    <div className="text-[13px] font-semibold">¿Querés que audite tu Maps gratis como hice con el mío? Escribime!</div>
    <a href="https://wa.me/5493757611220?text=Hola%20Cristian!%20Quiero%20la%20auditoria%20gratis%20de%20mi%20Maps" className="h-[36px] px-5 rounded-full bg-black text-white text-[12px] font-bold flex items-center justify-center">Quiero mi auditoría →</a>
  </div>

  {/* MAPA REAL */}
  <div className="mt-8 h-[300px] rounded-2xl overflow-hidden border border-white/10">
    <iframe src="https://maps.google.com/maps?q=Puerto%20Iguazu%20Misiones&t=&z=13&ie=UTF8&iwloc=&output=embed" width="100%" height="100%" style={{border:0, filter:'invert(90%) hue-rotate(180deg)'}} loading="lazy" className="opacity-80"/>
  </div>
</div>
      </section>

      <footer className="border-t border-white/[0.06] py-10">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4 mono text-[11px] text-white/30 tracking-widest">
          <div>© 2025 CRISTIAN W STUDIO • PUERTO IGUAZÚ, MISIONES</div>
          <div className="flex items-center gap-3 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.06]">
            <span className="text-[11px]">🇦🇷</span>
            <span className="font-bold text-white/60">CÓDIGO DE CAMPEÓN</span>
            <span className="text-white/30">• CALIDAD DE MUNDIAL</span>
          </div>
          <div>HECHO EN IGUAZÚ CON ⚡ Y MATE</div>
        </div>
      </footer>
      {/* WHATSAPP OFICIAL - SIN IMAGEN, SVG PURO */}
<a
  href="https://wa.me/5493755XXXXXX?text=Hola%20Cristian!%20Quiero%20mi%20auditor%C3%ADa%20gratis%20de%20Maps"
  target="_blank"
  className="fixed bottom-24 right-6 z-[999] w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all"
>
  <svg viewBox="0 0 24 24" className="w-9 h-9">
    <path fill="white" d="M19.05 4.94A9.82 9.82 0 0 0 12.03 2C6.58 2 2.15 6.42 2.15 11.88c0 1.74.45 3.44 1.31 4.93L2 22l5.34-1.4a9.86 9.86 0 0 0 4.69 1.19h.01c5.45 0 9.87-4.42 9.87-9.87 0-2.64-1.03-5.12-2.86-6.98zm-7.02 15.05h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.17.83.84-3.09-.2-.31a8.17 8.17 0 0 1-1.26-4.41c0-4.52 3.68-8.2 8.2-8.2 2.19 0 4.25.85 5.8 2.4a8.15 8.15 0 0 1 2.4 5.8c0 4.52-3.68 8.2-8.21 8.2zm4.49-6.14c-.25-.12-1.46-.72-1.69-.8-.23-.08-.39-.12-.56.12-.17.25-.65.8-.8.96-.15.17-.29.19-.54.07-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.15.16-.25.25-.42.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.77-1.84-.2-.48-.4-.42-.56-.42h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.06 0 1.22.89 2.39 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.25 1.05.4 1.41.51.59.19 1.13.16 1.56.1.48-.07 1.46-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.07-.11-.23-.17-.48-.29z"/>
  </svg>
</a>
    </div>
  );
}