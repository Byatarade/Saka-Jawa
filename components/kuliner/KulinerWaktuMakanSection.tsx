"use client";

import Link from "next/link";

export default function KulinerWaktuMakanSection() {
  const waktuMakan = [
    {
      id: "pagi",
      title: "Sarapan Pagi",
      desc: "Mulai hari dengan kelezatan tradisional Jawa yang menghangatkan dan penuh energi untuk beraktivitas.",
    },
    {
      id: "siang",
      title: "Makan Siang",
      desc: "Sajian istimewa di tengah hari dengan cita rasa rempah khas Jawa yang kuat dan menggugah selera.",
    },
    {
      id: "malam",
      title: "Makan Malam",
      desc: "Tutup hari dengan hidangan hangat khas Jawa yang nikmat dan memanjakan selera di penghujung malam.",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-[#F9F1E4]" id="koleksi">
      <div className="mx-auto w-full max-w-[var(--container-lg)] flex flex-col items-center">

        {/* Header */}
        <div className="text-center mb-16 max-w-2xl">
          <h2 className="font-['League_Spartan'] text-3xl md:text-4xl lg:text-[42px] font-bold text-[#4e0b11] mb-4">
            Jelajahi Berdasarkan Waktu Makan
          </h2>
          <p className="font-['League_Spartan'] text-base md:text-lg text-stone-900 font-medium">
            Temukan hidangan khas Jawa sesuai waktu terbaik untuk menikmatinya
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full max-w-5xl">
          {waktuMakan.map((item) => (
            <Link
              key={item.id}
              href={`/kuliner/${item.id}`}
              className="group cursor-pointer rounded-xl border border-[#4e0b11] bg-gradient-to-r from-white from-50% to-[#a3a3a3] overflow-hidden shadow-sm relative min-h-[220px] transition-all duration-300 hover:shadow-xl hover:-translate-y-1 block"
            >
              <div className="p-6 h-full flex flex-col justify-between w-[65%] z-10 relative">
                <div>
                  <h3 className="font-['League_Spartan'] text-xl font-bold text-[#4e0b11] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-black leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-6">
                  <span className="inline-flex items-center gap-2 text-[#4e0b11] text-xs font-bold border border-[#4e0b11] rounded-full px-4 py-1.5 group-hover:bg-[#4e0b11] group-hover:text-white transition-all duration-300">
                    Lihat Detail
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
