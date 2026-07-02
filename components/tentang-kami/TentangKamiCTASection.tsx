import Image from "next/image";
import Link from "next/link";

export default function TentangKamiCTASection() {
  return (
    <section className="w-full max-w-[1318px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
      <div className="relative w-full bg-gradient-to-r from-[#4E0B11] to-[#2D0F12] rounded-[32px] overflow-hidden flex flex-col md:flex-row min-h-[400px] lg:min-h-[456px]">
        {/* Decorative Assets */}
        <Image
          src="/Assets/Gunungan CTA Atas.svg"
          alt=""
          width={350}
          height={350}
          className="absolute -top-6 -right-6 w-[200px] md:w-[280px] lg:w-[350px] h-auto z-0 pointer-events-none rotate-180 opacity-90"
        />
        <Image
          src="/Assets/Gunungan CTA Bawah.svg"
          alt=""
          width={250}
          height={250}
          className="absolute -bottom-8 -left-8 w-[50px] md:w-[100px] lg:w-[250px] h-auto z-0 pointer-events-none opacity-90"
        />

        {/* Content */}
        <div className="relative z-10 w-full md:w-[65%] lg:w-[60%] p-12 md:py-16 md:pl-24 lg:py-[72px] lg:pl-[120px] flex flex-col justify-center items-start gap-4">
          <h2 className="text-4xl md:text-[50px] lg:text-[60px] font-bold text-white leading-[1.1] font-sans tracking-tight">
            Siap Menjelajahi{" "}
            <br />
            Kekayaan{" "}
            <br />
            <span className="text-[#FFC832]">Budaya Jawa?</span>
          </h2>
          <p className="text-white/90 text-sm md:text-base lg:text-lg max-w-[480px] font-medium leading-relaxed mt-2">
            Temukan cerita, filosofi, dan warisan yang hidup dalam setiap
            Pendhapa — batik, wayang, gamelan, dan kuliner menanti Anda.
          </p>
          <Link
            href="/"
            className="mt-6 bg-[#FFC832] text-[#3e0b10] font-bold px-8 lg:px-10 py-3.5 lg:py-4 rounded-full flex items-center justify-between gap-8 hover:bg-[#e6b42d] transition-all text-base lg:text-lg w-fit"
          >
            <span>Kembali ke Pendhapa</span>
            <span className="bg-[#3e0b10] text-[#FFC832] rounded-full p-2 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </span>
          </Link>
        </div>

        {/* Right Wayang Image */}
        <div className="absolute z-10 bottom-0 right-0 w-[80%] md:w-[60%] lg:w-[65%] h-[80%] md:h-[105%] pointer-events-none flex justify-end">
          <Image
            src="/Assets/Wayang CTA.svg"
            alt="Wayang"
            fill
            className="object-contain object-right-bottom md:object-right-bottom transform md:translate-y-4 lg:translate-y-6 lg:translate-x-4"
          />
        </div>
      </div>
    </section>
  );
}
