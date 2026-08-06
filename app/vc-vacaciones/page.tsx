export default function VcVacacionesPage() {
  return (
    <div className="bg-[#f8f9fa] text-[#0f261d] font-sans">
      {/* HEADER */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div>
            <span className="font-bold text-2xl text-[#1b4332]">Vc</span>
            <p className="text-xs uppercase tracking-widest font-semibold text-[#b07d4c]">vacaciones copadas</p>
          </div>
          <a href="#contact" className="bg-[#1b4332] text-white px-5 py-2.5 rounded-full text-xs uppercase font-semibold">
            Reservar Ahora
          </a>
        </div>
      </header>

      {/* HERO */}
      <main className="relative min-h-screen flex items-center pt-24 bg-[#1b4332] text-white px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Vc vacaciones <br/><span className="text-[#ddb892] italic font-normal">copadas</span>
            </h1>
            <p className="text-lg text-white/80 max-w-xl">
              Un refugio cálido y natural en Puerto Iguazú. Diseñado con amor para familias y viajeros exigentes.
            </p>
            <div className="flex gap-4 pt-4">
              <a href="#contact" className="px-8 py-4 bg-[#ddb892] text-[#1b4332] font-bold rounded-lg">Explorar Tarifas</a>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 space-y-6">
            <h3 className="text-2xl font-bold">Reserva Directa Exclusiva</h3>
            <p className="text-sm text-white/70">Late check-out, desayuno regional y atención 100% personalizada.</p>
            <a href="https://wa.me/5493757555555" target="_blank" className="w-full flex justify-center py-3 bg-emerald-600 hover:bg-emerald-700 rounded-lg font-bold">
              Consultar WhatsApp inmediato
            </a>
          </div>
        </div>
      </main>

      {/* FOOTER CON TU FIRMA */}
      <footer className="bg-[#0f261d] text-white py-10 border-t border-[#1b4332] text-center">
        <p className="text-[#8AB8C4] text-sm tracking-[2px]">Hecho con ❤️ por <strong>CRISTIAN W STUDIO</strong></p>
        <p className="text-white/40 text-xs mt-2">Desarrollo web en Puerto Iguazú | Sitios modernos y rápidos</p>
      </footer>
    </div>
  )
}