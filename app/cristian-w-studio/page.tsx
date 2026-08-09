"use client"
import { useState } from 'react'
import es from './locales/es.json'
import pt from './locales/pt.json'
import en from './locales/en.json'

const langs = { es, pt, en } as const
type Lang = keyof typeof langs

export default function StudioPage(){
  const [lang, setLang] = useState<Lang>('es')
  const t = langs[lang]
  const btnActive = "px-3 py-1 rounded-full text-sm bg-white text-black"
  const btnIdle = "px-3 py-1 rounded-full text-sm text-white/60"
  return (
    <div className="min-h-screen bg-[#050A14] text-white flex flex-col items-center justify-center p-8 text-center">
      <div className="absolute top-6 right-6 flex gap-1 bg-zinc-900 rounded-full p-1">
        <button onClick={()=>setLang('es')} className={lang==='es'?btnActive:btnIdle}>ES</button>
        <button onClick={()=>setLang('pt')} className={lang==='pt'?btnActive:btnIdle}>PT</button>
        <button onClick={()=>setLang('en')} className={lang==='en'?btnActive:btnIdle}>EN</button>
      </div>
      <img src="/cristian-w-logo.jpg" className="w-[400px] rounded-2xl mb-8 shadow-2xl" alt="logo" />
      <h1 className="text-5xl font-bold">{t.hero}</h1>
      <p className="text-cyan-400 mt-4 text-lg">{t.sub}</p>
      <a href="/" className="mt-10 bg-white text-black px-8 py-3 rounded-full font-bold inline-block">{t.cta}</a>
    </div>
  )
}