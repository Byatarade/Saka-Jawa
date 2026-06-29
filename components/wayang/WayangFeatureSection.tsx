import Image from "next/image";

export default function WayangFeatureSection() {
  return (
    <section className="relative overflow-hidden px-6 py-24 md:px-12 lg:px-24 lg:py-32 bg-[#F9F1E4]">
      {/* Decorative Flowers */}
      <div className="absolute top-0 left-0 w-56 h-56 md:w-80 md:h-80 pointer-events-none -translate-x-1/4 -translate-y-1/4 opacity-90">
        <Image
          src="/Assets/Bunga Kuning.svg"
          alt="Bunga Kuning"
          fill
          className="object-contain"
        />
      </div>

      <div className="mx-auto w-full max-w-[var(--container-lg)] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          <div className="lg:col-span-6 flex flex-col pt-10">
            <h2 className="text-4xl md:text-[42px] font-bold text-[#4E0B11] mb-6">Keistimewaan Wayang</h2>
            <p className="text-base md:text-lg leading-relaxed text-[#4A332B] mb-12 max-w-lg">
              Jelajahi filosofi, teknik pertunjukan, dan warisan budaya wayang yang hidup di Jawa.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-[var(--color-border)]/10 bg-white/90 p-4 shadow-sm">
                <h4 className="font-semibold text-[var(--color-primary)]">Asal-usul & Cerita</h4>
                <p className="mt-2 text-sm text-[var(--color-muted)]">Kisah epik yang diturunkan antar generasi.</p>
              </div>

              <div className="rounded-lg border border-[var(--color-border)]/10 bg-white/90 p-4 shadow-sm">
                <h4 className="font-semibold text-[var(--color-primary)]">Teknik Pementasan</h4>
                <p className="mt-2 text-sm text-[var(--color-muted)]">Iringan gamelan dan gerak dalang yang khas.</p>
              </div>
            </div>

            <div className="mt-8 flex gap-3">
              <a href="#" className="inline-flex items-center justify-center rounded-full bg-[#5b0917] px-6 py-2.5 font-semibold text-white shadow hover:bg-[#4E0B11] transition-colors">Pelajari Lebih Lanjut</a>
              <a href="#" className="inline-flex items-center justify-center rounded-full border border-[#5b0917] px-6 py-2.5 font-semibold text-[#5b0917] hover:bg-[#5b0917]/5 transition-colors">Jadwalkan Kunjungan</a>
            </div>
          </div>

          <div className="lg:col-span-6 relative w-full max-w-[540px] mx-auto lg:ml-auto mt-8 lg:mt-0">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <div className="aspect-[16/10] w-full relative">
                <Image src="/Assets/Pendhopo Wayang.svg" alt="Pendhopo Wayang" fill className="object-cover" />
              </div>
              <div className="absolute left-6 bottom-6 rounded-md bg-white/90 px-4 py-2 shadow"> 
                <span className="text-sm font-semibold text-[#3b1a15]">Pendhapa Tradisional</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-8 w-full bg-[length:auto_32px] bg-repeat-x" style={{ backgroundImage: "url('/Assets/Batik Sambungan.svg')" }} />

    </section>
  );
}
