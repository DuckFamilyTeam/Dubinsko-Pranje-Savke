import { Phone, Instagram, MessageCircle, CheckCircle } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans">
      {/* HERO */}
      <section className="relative h-[75vh] flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img src="/images/hero-car.jpg" alt="Dubinsko pranje Savke" className="w-full h-full object-cover opacity-60" />
        </div>
        <div className="relative z-10 text-center px-6 text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Dubinsko Pranje <span className="text-blue-400">Savke</span></h1>
          <p className="text-xl mb-8 opacity-90">Profesionalno čišćenje automobila i nameštaja u Beogradu.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+381692255213" className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-all shadow-lg">
              <Phone size={20} /> 069 225 5213
            </a>
            <a href="https://wa.me/381692255213" className="bg-emerald-600 hover:bg-emerald-700 px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-all shadow-lg">
              <MessageCircle size={20} /> WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Naši Rezultati</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <div className="grid grid-cols-2 gap-2 rounded-2xl overflow-hidden shadow-md">
                <img src="/images/portfolio/pre-1.jpg" alt="Pre" className="w-full aspect-square object-cover" />
                <img src="/images/portfolio/posle-1.jpg" alt="Posle" className="w-full aspect-square object-cover" />
              </div>
              <p className="text-center font-medium text-slate-600 tracking-wide text-sm">PRANJE SEDIŠTA</p>
            </div>
            <div className="space-y-2">
              <div className="grid grid-cols-2 gap-2 rounded-2xl overflow-hidden shadow-md">
                <img src="/images/portfolio/pre-2.jpg" alt="Pre" className="w-full aspect-square object-cover" />
                <img src="/images/portfolio/posle-2.jpg" alt="Posle" className="w-full aspect-square object-cover" />
              </div>
              <p className="text-center font-medium text-slate-600 tracking-wide text-sm">NAMEŠTAJ I TEPIISI</p>
            </div>
          </div>
        </div>
      </section>

      {/* KONTAKT */}
      <footer className="py-12 bg-white text-center border-t border-slate-100">
        <a href="https://www.instagram.com/bg_dubinsko_pranje" target="_blank" className="inline-flex items-center gap-2 text-blue-600 font-bold">
          <Instagram size={20} /> @bg_dubinsko_pranje
        </a>
        <p className="mt-4 text-slate-400 text-sm italic">„Kvalitet koji se vidi i miriše.“ - Savke</p>
      </footer>
    </main>
  );
}