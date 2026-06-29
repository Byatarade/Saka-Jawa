"use client";

import { useState } from "react";
import Image from "next/image";

const leftDetails = [
  "Ambatik berarti menulis titik. Keahlian menulis motif halus menggunakan lilin malam panas.",
  "Diakui UNESCO sebagai Masterpiece of the Oral and Intangible Heritage of Humanity.",
  "Setiap guratan motif memuat doa, ketabahan, ajaran hidup, dan berkah spiritual pemakainya.",
];

const instruments = [
  { id: 1, name: "Kenong", image: "/Assets/Pendhopo Gamelan.svg" },
  { id: 2, name: "Gong", image: "/Assets/Pendhopo Gamelan.svg" },
  { id: 3, name: "Saron", image: "/Assets/Pendhopo Gamelan.svg" },
  { id: 4, name: "Bonang", image: "/Assets/Pendhopo Gamelan.svg" },
  { id: 5, name: "Gambang", image: "/Assets/Pendhopo Gamelan.svg" },
];

const wayangStories = [
  {
    id: 1,
    title: "Ksatria Arjuna",
    desc: "Ksatria penengah Pandawa yang berparas menawan, ahli memanah, dan penegak keadilan dalam Bharatayuda.",
    image: "/Assets/wayangHeroAsset.avif",
  },
  {
    id: 2,
    title: "Bima Sena",
    desc: "Tokoh Pandawa kedua yang gagah berani, berbadan besar, memiliki kuku Pancanaka, dan setia pada kebenaran.",
    image: "/Assets/wayangHeroAsset.avif",
  },
  {
    id: 3,
    title: "Gatotkaca",
    desc: "Ksatria otot kawat balung wesi, putra Bima yang memiliki kesaktian luar biasa hingga mampu terbang tanpa sayap.",
    image: "/Assets/wayangHeroAsset.avif",
  },
];

const wayangGallery = [
  { id: 1, title: "Wayang Kulit", image: "/Assets/wayangHeroAsset.avif" },
  { id: 2, title: "Pementasan Wayang", image: "/Assets/Kelir Wayang Hero.svg" },
  { id: 3, title: "Dalang & Kelir", image: "/Assets/wayangHeroAsset.avif" },
];

export default function WayangStorySection() {
  const [scrollIndex, setScrollIndex] = useState(0);

  const handleNext = () => {
    if (scrollIndex < instruments.length - 4) {
      setScrollIndex(scrollIndex + 1);
    }
  };

  const handlePrev = () => {
    if (scrollIndex > 0) {
      setScrollIndex(scrollIndex - 1);
    }
  };

  return (
    <div className="w-full flex flex-col">
      
      {/* SECTION 2: UNESCO & Fact Card Section (Aligned to BatikAboutSection proportions) */}
      <section 
        id="tentang"
        className="relative overflow-hidden px-6 py-24 md:px-12 lg:px-24 lg:py-32 bg-gradient-to-r from-[#2D0F12] to-[#5B0917]"
      >
        {/* Decorative Flowers */}
        <div className="absolute top-0 left-0 w-56 h-56 md:w-80 md:h-80 pointer-events-none -translate-x-1/4 -translate-y-1/4 opacity-90">
          <Image
            src="/Assets/Bunga Kuning.svg"
            alt="Bunga Kuning"
            fill
            className="object-contain"
          />
        </div>
        <div className="absolute top-0 right-0 w-56 h-56 md:w-96 md:h-96 pointer-events-none translate-x-1/4 -translate-y-1/4 opacity-90">
          <Image
            src="/Assets/Bunga Kuning2.svg"
            alt="Bunga Kuning 2"
            fill
            className="object-contain"
          />
        </div>

        <div className="mx-auto w-full max-w-[var(--container-lg)] relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-6 flex flex-col text-white pt-10">
              <h2 className="text-4xl md:text-[42px] font-bold text-[#FFC832] mb-6">
                Wayang Kulit Jawa
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-gray-100 max-w-lg mb-12">
                Wayang kulit merupakan bentuk seni adiluhung yang telah diakui UNESCO sebagai Masterpiece of the Oral and Intangible Heritage of Humanity. Setiap guratan karakter memuat makna doa dan tuntunan hidup.
              </p>

              {/* 3 Icons Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pr-4">
                {leftDetails.map((desc, index) => (
                  <div key={index} className="flex flex-col items-center sm:items-start text-center sm:text-left gap-4">
                    <div className="h-10 w-12 relative opacity-90 flex justify-center sm:justify-start">
                      <Image
                        src="/Assets/Daun Kuning.svg"
                        alt="Ikon daun"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <p className="text-[13px] text-gray-200 leading-relaxed font-['League_Spartan']">
                      {desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Fact Card */}
            <div className="lg:col-span-6 relative w-full max-w-[540px] mx-auto lg:ml-auto mt-8 lg:mt-0">
              {/* Yellow Angle Accents */}
              <div className="absolute -top-3 -left-3 md:-top-4 md:-left-4 w-16 h-16 md:w-24 md:h-24 border-t-[8px] border-l-[8px] md:border-t-[12px] md:border-l-[12px] border-[#FFC832] rounded-tl-xl z-0"></div>
              <div className="absolute -bottom-3 -right-3 md:-bottom-4 md:-right-4 w-16 h-16 md:w-24 md:h-24 border-b-[8px] border-r-[8px] md:border-b-[12px] md:border-r-[12px] border-[#FFC832] rounded-br-xl z-0"></div>

              {/* Main Card */}
              <div className="relative z-10 bg-[#F8F5EE] rounded-xl p-6 md:p-8 shadow-2xl flex gap-4 md:gap-6 items-stretch min-h-[220px]">
                
                {/* Left Content inside Card */}
                <div className="flex-1 relative flex flex-col justify-center">
                  <div className="w-16 h-8 md:w-24 md:h-12 relative -ml-2 mb-2">
                    <Image src="/Assets/Left Mega Mendung.svg" alt="Mega Mendung" fill className="object-contain object-left-top" />
                  </div>
                  
                  <h3 className="text-2xl md:text-[32px] font-bold text-[#4E0B11] mb-3">
                    Tahukah Kamu?
                  </h3>
                  
                  <p className="text-[13px] md:text-[14px] font-medium text-gray-800 leading-relaxed relative z-10 mb-6">
                    Dalam satu peringkat gamelan, terdapat lebih dari 40 instrumen yang dimainkan secara bersama-sama tanpa seorang konduktor.
                  </p>

                  <div className="absolute bottom-0 right-0 w-16 h-8 md:w-24 md:h-12 translate-y-1/2 md:translate-y-4">
                    <Image src="/Assets/Right Mega Mendung.svg" alt="Mega Mendung" fill className="object-contain object-right-bottom" />
                  </div>
                </div>

                {/* Character Image */}
                <div className="w-[110px] md:w-[140px] shrink-0 relative flex items-end justify-center">
                  <Image 
                    src="/Assets/Sambut Tamu About.svg" 
                    alt="Karakter Mascot" 
                    width={140} 
                    height={240} 
                    className="object-contain object-bottom h-[160px] md:h-[200px] w-auto"
                  />
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: Ragam Wayang Kulit */}
      <section id="ragam" className="bg-[#f9f1e4] px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto w-full max-w-[1210px]">
          
          {/* Header Row */}
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div className="space-y-2">
              <h2 className="font-['League_Spartan'] text-4xl font-bold text-[#4e0b11] sm:text-5xl">
                Ragam Wayang Kulit
              </h2>
              <p className="max-w-[700px] font-['League_Spartan'] text-lg text-[#4A332B]">
                Kenali beberapa instrumen utama dalam gamelan jawa dan perannya dalam menciptakan harmoni
              </p>
            </div>

            {/* Slider Navigation Buttons */}
            <div className="flex gap-4 shrink-0">
              <button
                onClick={handlePrev}
                disabled={scrollIndex === 0}
                className={`flex h-12 w-12 items-center justify-center rounded-lg border border-[#4e0b11] text-xl font-bold transition-all ${
                  scrollIndex === 0 
                    ? "border-stone-300 text-stone-400 bg-transparent cursor-not-allowed" 
                    : "bg-[#4e0b11] text-white hover:bg-[#3d080d]"
                }`}
                aria-label="Previous items"
              >
                &lt;
              </button>
              <button
                onClick={handleNext}
                disabled={scrollIndex >= instruments.length - 4}
                className={`flex h-12 w-12 items-center justify-center rounded-lg border border-[#4e0b11] text-xl font-bold transition-all ${
                  scrollIndex >= instruments.length - 4 
                    ? "border-stone-300 text-stone-400 bg-transparent cursor-not-allowed" 
                    : "bg-[#4e0b11] text-white hover:bg-[#3d080d]"
                }`}
                aria-label="Next items"
              >
                &gt;
              </button>
            </div>
          </div>

          {/* Cards Grid/Carousel */}
          <div className="mt-12 overflow-hidden">
            <div 
              className="flex gap-6 transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${scrollIndex * 290}px)` }}
            >
              {instruments.map((item) => (
                <div 
                  key={item.id}
                  className="w-[266px] shrink-0 rounded-[15px] border border-[#4e0b11] bg-white p-4 shadow-sm flex flex-col items-center text-center justify-between min-h-[420px]"
                >
                  <div className="relative aspect-video w-full overflow-hidden rounded-[10px] bg-[#d9d9d9] flex items-center justify-center">
                    <span className="font-['League_Spartan'] text-stone-500 font-medium">Gambar {item.name}</span>
                  </div>

                  <h3 className="mt-6 font-['League_Spartan'] text-2xl font-bold text-[#4e0b11]">
                    {item.name}
                  </h3>

                  <p className="mt-3 font-['League_Spartan'] text-sm leading-relaxed text-stone-600">
                    Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.
                  </p>

                  <button className="mt-6 w-full rounded-full border border-[#4e0b11] py-2 font-['League_Spartan'] text-base font-semibold text-[#4e0b11] transition-all hover:bg-[#4e0b11] hover:text-white active:scale-95">
                    Lihat Detail
                  </button>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 4: Quotes Section */}
      <section className="relative bg-[#fdfaf4] py-20 px-6 md:px-12 lg:px-24">
        <div className="mx-auto w-full max-w-[var(--container-lg)] grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Quote text */}
          <div className="md:col-span-7 flex flex-col text-left">
            <blockquote className="font-['League_Spartan'] text-2xl md:text-3xl lg:text-4xl italic font-semibold text-[#4e0b11] leading-relaxed">
              “Wayang bukan sekadar pertunjukan, melainkan cerminan perjalanan manusia dalam memilih antara kebaikan dan keburukan.”
            </blockquote>
          </div>
          {/* Quote image */}
          <div className="md:col-span-5 flex justify-center md:justify-end relative h-[350px] w-full">
            <Image
              src="/Assets/Wayang Quotes.svg"
              alt="Ilustrasi Wayang Quotes"
              fill
              className="object-contain object-bottom"
            />
          </div>
        </div>
      </section>

      {/* SECTION 5: Cerita Wayang Penuh Makna */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-[#3e0b10] text-white">
        <div className="mx-auto w-full max-w-[var(--container-lg)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Header content */}
            <div className="lg:col-span-4 flex flex-col gap-6 text-left">
              <div>
                <h3 className="font-['League_Spartan'] text-3xl md:text-4xl font-bold leading-tight">
                  Cerita Wayang Penuh Makna
                </h3>
                <p className="mt-4 font-['League_Spartan'] text-base text-white/80 leading-relaxed">
                  Kenali kisah-kisah legendaris serta ketokohan para ksatria pewayangan Jawa dan filosofi luhurnya.
                </p>
              </div>
              <div>
                <a
                  href="#"
                  className="inline-flex items-center gap-3 rounded-full bg-[#ffc832] px-6 py-3 font-semibold text-[#4e0b11] transition-transform hover:scale-105 active:scale-95"
                >
                  <span>Lihat Cerita</span>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right Cards List */}
            <div className="lg:col-span-8 grid gap-6 sm:grid-cols-3">
              {wayangStories.map((story) => (
                <div key={story.id} className="rounded-xl bg-[#F8F5EE] p-4 text-stone-900 shadow-md flex flex-col justify-between min-h-[350px]">
                  <div>
                    {/* Card Image */}
                    <div className="aspect-[4/3] w-full relative rounded-lg overflow-hidden bg-stone-200">
                      <Image
                        src={story.image}
                        alt={story.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    {/* Title */}
                    <h4 className="mt-4 font-['League_Spartan'] text-xl font-bold text-[#4e0b11]">
                      {story.title}
                    </h4>
                    {/* Description */}
                    <p className="mt-2 font-['League_Spartan'] text-sm text-stone-700 leading-relaxed">
                      {story.desc}
                    </p>
                  </div>
                  {/* Actions inside card */}
                  <div className="mt-4 pt-4 border-t border-stone-200 flex items-center justify-between">
                    <span className="font-['League_Spartan'] text-sm font-semibold text-[#4e0b11]">
                      Lihat Ringkasan
                    </span>
                    <button className="w-8 h-8 rounded-full bg-[#4e0b11] text-white flex items-center justify-center transition-transform hover:scale-110">
                      ▶
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 6: Galeri Wayang */}
      <section className="bg-[#f9f1e4] py-20 px-6 md:px-12 lg:px-24">
        <div className="mx-auto w-full max-w-[var(--container-lg)]">
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div className="text-left space-y-2">
              <h2 className="font-['League_Spartan'] text-4xl font-bold text-[#4e0b11]">
                Galeri Wayang
              </h2>
              <p className="max-w-[600px] font-['League_Spartan'] text-lg text-stone-700">
                Visualisasi pertunjukan, pusaka, serta tokoh-tokoh agung seni wayang kulit Jawa.
              </p>
            </div>
            <div>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full border border-[#4e0b11] px-6 py-2.5 font-semibold text-[#4e0b11] transition-colors hover:bg-[#4e0b11] hover:text-[#f9f1e4]"
              >
                <span>Lihat Semua Galeri</span>
                <span>→</span>
              </a>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid gap-6 sm:grid-cols-3">
            {wayangGallery.map((gal) => (
              <div key={gal.id} className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-lg border border-stone-200">
                <Image
                  src={gal.image}
                  alt={gal.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <h4 className="font-['League_Spartan'] text-xl font-bold text-white">
                    {gal.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 7: Interactive Map ("Selanjutnya") */}
      <section className="bg-[#f9f1e4] py-16 px-6 md:px-12 lg:px-24">
        <div className="mx-auto w-full max-w-[var(--container-lg)] flex flex-col gap-8">
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <h3 className="font-['League_Spartan'] text-3xl font-bold text-[#4e0b11]">
              Telusuri Pendhapa Lainnya
            </h3>
            <div>
              <a
                href="/gamelan"
                className="inline-flex items-center gap-3 rounded-full bg-[#ffc832] px-6 py-3 font-semibold text-[#4e0b11] shadow-md transition-all hover:scale-105 active:scale-95"
              >
                <span className="font-['League_Spartan'] text-lg">Selanjutnya</span>
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#4e0b11] text-white">→</span>
              </a>
            </div>
          </div>

          {/* Interactive Map */}
          <div className="relative w-full aspect-[21/9] min-h-[300px] md:min-h-[400px] rounded-3xl bg-[#ece3d3] border-4 border-[#80472c]/30 shadow-inner overflow-hidden flex items-center justify-center">
            {/* Map Islands Base */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/Assets/Tanah Pendhopo.svg"
                alt="Peta Tanah Pendhopo"
                fill
                className="object-cover opacity-85"
              />
            </div>

            {/* Interactive Pavilions Overlay */}
            <div className="absolute inset-0 z-10">
              
              {/* Batik Pavilion (Left) */}
              <a
                href="/batik"
                className="absolute left-[15%] top-[45%] -translate-y-1/2 group flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300"
              >
                <div className="relative w-24 h-24 sm:w-32 sm:h-32 drop-shadow-lg">
                  <Image src="/Assets/Pendhopo Batik.svg" alt="Pendhopo Batik" fill className="object-contain" />
                </div>
                <span className="font-['League_Spartan'] text-sm sm:text-base font-bold bg-[#5b0917] text-white px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow">
                  Pendhapa Batik
                </span>
              </a>

              {/* Gamelan Pavilion (Center-Right) */}
              <a
                href="/gamelan"
                className="absolute right-[25%] top-[55%] -translate-y-1/2 group flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300"
              >
                <div className="relative w-24 h-24 sm:w-32 sm:h-32 drop-shadow-lg">
                  <Image src="/Assets/Pendhopo Gamelan.svg" alt="Pendhopo Gamelan" fill className="object-contain" />
                </div>
                <span className="font-['League_Spartan'] text-sm sm:text-base font-bold bg-[#5b0917] text-white px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow">
                  Pendhapa Gamelan
                </span>
              </a>

              {/* Kuliner Pavilion (Bottom-Left) */}
              <a
                href="/kuliner"
                className="absolute left-[38%] bottom-[10%] group flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300"
              >
                <div className="relative w-24 h-24 sm:w-32 sm:h-32 drop-shadow-lg">
                  <Image src="/Assets/Pendhopo Kuliner.svg" alt="Pendhopo Kuliner" fill className="object-contain" />
                </div>
                <span className="font-['League_Spartan'] text-sm sm:text-base font-bold bg-[#5b0917] text-white px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow">
                  Pendhapa Kuliner
                </span>
              </a>

              {/* Wayang Pavilion (Top-Right) */}
              <a
                href="/wayang"
                className="absolute right-[12%] top-[15%] group flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300"
              >
                {/* User Location Marker hovering above active Wayang location */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-8 h-8 animate-bounce z-20">
                  <Image src="/Assets/User Location.svg" alt="Lokasi Anda" fill className="object-contain" />
                </div>
                <div className="relative w-24 h-24 sm:w-32 sm:h-32 drop-shadow-lg border-2 border-[#ffc832] rounded-full p-2 bg-[#ffc832]/20">
                  <Image src="/Assets/Pendhopo Wayang.svg" alt="Pendhopo Wayang" fill className="object-contain" />
                </div>
                <span className="font-['League_Spartan'] text-sm sm:text-base font-bold bg-[#ffc832] text-[#4e0b11] px-3 py-1 rounded-full shadow">
                  Pendhapa Wayang (Anda di Sini)
                </span>
              </a>

            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: Ki Hadjar Dewantara Quote */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#2D0F12] to-[#5B0917] py-24 px-6 md:px-12 lg:px-24">
        {/* Left Decorative Flower */}
        <div className="absolute top-1/2 left-0 w-48 h-48 pointer-events-none -translate-y-1/2 -translate-x-1/4 opacity-40">
          <Image src="/Assets/Bunga Kuning.svg" alt="" fill className="object-contain" />
        </div>
        {/* Right Decorative Flower */}
        <div className="absolute top-1/2 right-0 w-48 h-48 pointer-events-none -translate-y-1/2 translate-x-1/4 opacity-40">
          <Image src="/Assets/Bunga Kuning2.svg" alt="" fill className="object-contain" />
        </div>

        <div className="mx-auto w-full max-w-[800px] relative z-10 text-center flex flex-col gap-6">
          <blockquote className="font-['League_Spartan'] text-2xl md:text-3xl lg:text-4xl font-semibold leading-relaxed text-white">
            “Gamelan bukan sekadar bunyi, tetapi ada doa yang dimainkan menghubungkan manusia dengan leluhur, alam, dan sang pencipta.”
          </blockquote>
          <cite className="font-['League_Spartan'] text-lg md:text-xl text-[#FFC832] not-italic font-medium">
            - Ki Hadjar Dewantara
          </cite>
        </div>
      </section>

    </div>
  );
}

