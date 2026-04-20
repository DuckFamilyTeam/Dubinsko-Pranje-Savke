export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans">
      {/* HERO SEKCIJA */}
      <section className="relative h-[75vh] flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="public/images/hero-car.jpg" 
            alt="Dubinsko pranje Savke" 
            className="w-full h-full object-cover opacity-60" 
          />
        </div>
        <div className="relative z-10 text-center px-6 text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 italic tracking-tight">
            Dubinsko Pranje <span className="text-blue-400 font-extrabold text-6xl md:text-8xl block md:inline">Savke</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto font-light">
            Vraćamo fabrički sjaj vašem automobilu i nameštaju. <br/>Brzo, povoljno i profesionalno.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="tel:+381692255213" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 px-10 py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-all transform hover:scale-105 shadow-xl">
              📞 069 225 5213
            </a>
            <a href="https://wa.me/381692255213" className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 px-10 py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-all transform hover:scale-105 shadow-xl">
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* PORTFOLIO SEKCIJA */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-800 uppercase tracking-tighter">Naši Rezultati</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-2"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Prvi par slika */}
            <div className="group">
              <div className="grid grid-cols-2 gap-2 rounded-3xl overflow-hidden shadow-2xl border-4 border-white transition-transform group-hover:scale-[1.02]">
                <div className="relative">
                  <img src="/images/portfolio/pre-1.jpg" alt="Pre" className="w-full aspect-square object-cover" />
                  <span className="absolute bottom-3 left-3 bg-black/70 text-white text-[10px] font-bold px-2 py-1 rounded-md">PRE</span>
                </div>
                <div className="relative">
                  <img src="/images/portfolio/posle-1.jpg" alt="Posle" className="w-full aspect-square object-cover" />
                  <span className="absolute bottom-3 left-3 bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded-md">POSLE</span>
                </div>
              </div>
              <p className="mt-4 text-center font-bold text-slate-700 tracking-widest uppercase text-sm italic">✅ Dubinsko pranje sedišta</p>
            </div>

            {/* Drugi par slika */}
            <div className="group">
              <div className="grid grid-cols-2 gap-2 rounded-3xl overflow-hidden shadow-2xl border-4 border-white transition-transform group-hover:scale-[1.02]">
                <div className="relative">
                  <img src="/images/portfolio/pre-2.jpg" alt="Pre" className="w-full aspect-square object-cover" />
                  <span className="absolute bottom-3 left-3 bg-black/70 text-white text-[10px] font-bold px-2 py-1 rounded-md">PRE</span>
                </div>
                <div className="relative">
                  <img src="/images/portfolio/posle-2.jpg" alt="Posle" className="w-full aspect-square object-cover" />
                  <span className="absolute bottom-3 left-3 bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded-md">POSLE</span>
                </div>
              </div>
              <p className="mt-4 text-center font-bold text-slate-700 tracking-widest uppercase text-sm italic">✅ Nameštaj i ugaone garniture</p>
            </div>
          </div>
        </div>
      </section>

      {/* KONTAKT SEKCIJA */}
      <footer className="py-20 bg-white text-center border-t border-slate-100 px-6">
        <h3 className="text-xl font-bold mb-6 text-slate-800 tracking-tight italic text-2xl">Zakažite termin:</h3>
        <div className="flex flex-col items-center gap-6">
          <a href="https://www.instagram.com/bg_dubinsko_pranje" target="_blank" className="flex items-center gap-3 text-slate-800 hover:text-blue-600 transition-all font-bold text-xl border-2 border-slate-100 px-6 py-3 rounded-2xl shadow-sm">
            📸 <span className="underline decoration-blue-500 decoration-2">@bg_dubinsko_pranje</span>
          </a>
          <p className="text-slate-400 text-sm italic mt-4 italic">
            "Kvalitet koji se vidi i miriše." — <span className="font-bold text-slate-600 uppercase">Savke</span>
          </p>
        </div>
      </footer>
    </main>
  );
}