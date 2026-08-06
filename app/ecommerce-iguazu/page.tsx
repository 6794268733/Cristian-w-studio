export default function EcommercePage() {
  const productos = [
  { id: 1, nombre: "Mate Imperial Premium", precio: "$18.500", img: "/mate.jpg" },
  { id: 2, nombre: "Termo Stanley 1L", precio: "$42.000", img: "/termo.jpg" },
  { id: 3, nombre: "Yerba Playadito 1kg", precio: "$3.200", img: "/yerba.jpg" },
  { id: 4, nombre: "Bombilla Alpaca Pico de Loro", precio: "$6.800", img: "/bombilla.jpg" },
];

  return (
    <div className="min-h-screen bg-[#050A14] text-white">
      <header className="p-6 flex justify-between items-center border-b border-gray-800 max-w-7xl mx-auto">
        <a href="/" className="text-cyan-400 font-bold">← Volver</a>
        <h1 className="font-bold text-xl tracking-widest">MATE | Iguazú</h1>
        <button className="bg-white text-black px-4 py-2 rounded-full text-sm font-bold">Carrito (0)</button>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h2 className="text-5xl font-bold mb-4">Tienda de Mates <span className="text-cyan-400">Misioneros</span></h2>
        <p className="text-gray-400 max-w-2xl mx-auto">Mates, termos, yerbas y bombillas seleccionadas. Envíos a todo Puerto Iguazú.</p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-20">
        {productos.map((p) => (
          <div key={p.id} className="bg-[#0C1222] border border-gray-800 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all group">
            <img src={p.img} alt={p.nombre} className="h-64 w-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="p-5">
              <h3 className="font-bold text-white">{p.nombre}</h3>
              <p className="text-cyan-400 font-bold mt-2 text-lg">{p.precio}</p>
              <button className="w-full mt-4 bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-3 rounded-full text-sm">
                Agregar al carrito
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}