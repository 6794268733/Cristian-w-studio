"use client"
import { useState, useEffect } from "react"

export default function FloatingWhatsApp() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 1500)
    return () => clearTimeout(t)
  }, [])

  return (
    <a
      href="https://wa.me/549375400392?text=Hola%20Cristian!%20Vi%20tu%20portfolio"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className={`fixed bottom-5 right-5 z-[9999] w-[60px] h-[60px] bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_8px_24px_rgba(0,0,0,0.3)] transition-all duration-500 ${show ? "translate-y-0 opacity-100 scale-100" : "translate-y-10 opacity-0 scale-75"} hover:scale-110`}
    >
      {/* Logo WhatsApp oficial */}
      <svg viewBox="0 0 32 32" className="w-8 h-8 fill-white">
        <path d="M16.04 2C8.33 2 2.04 8.29 2.04 16c0 2.46.64 4.86 1.86 6.97L2 30l7.24-1.9c2.03 1.11 4.32 1.69 6.8 1.69 7.71 0 14-6.29 14-14s-6.29-14-14-14zm0 25.15c-2.14 0-4.24-.57-6.08-1.66l-.44-.26-4.3 1.13 1.15-4.2-.28-.44a11.6 11.6 0 0 1-1.82-6.32c0-6.6 5.37-11.97 11.98-11.97 3.2 0 6.2 1.25 8.46 3.51 2.26 2.26 3.51 5.26 3.51 8.46 0 6.6-5.37 11.97-11.97 11.97zm6.56-8.97c-.36-.18-2.13-1.05-2.46-1.17-.33-.12-.57-.18-.81.18-.24.36-.93 1.17-1.14 1.41-.21.24-.42.27-.78.09-.36-.18-1.52-.56-2.9-1.79-1.07-.95-1.79-2.13-2-2.49-.21-.36-.02-.55.16-.73.16-.16.36-.42.54-.62.18-.2.24-.36.36-.6.12-.24.06-.45-.03-.63-.09-.18-.81-1.95-1.11-2.67-.29-.7-.59-.6-.81-.61h-.69c-.24 0-.63.09-.96.45-.33.36-1.25 1.22-1.25 2.97s1.28 3.45 1.46 3.69c.18.24 2.51 3.83 6.08 5.37.85.36 1.51.58 2.03.74.85.27 1.62.23 2.23.14.68-.1 2.13-.87 2.43-1.71.3-.84.3-1.56.21-1.71-.09-.15-.33-.24-.69-.42z" />
      </svg>
      <span className="absolute w-full h-full rounded-full bg-[#25D366] animate-ping opacity-30 -z-10"></span>
    </a>
  )
}