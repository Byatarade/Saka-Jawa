import { HeroContent } from "../shared/HeroSection";

export const kulinerHeroContent: HeroContent = {
  badge: {
    iconSrc: "/Assets/Pendhopo Kuliner.svg",
    iconAlt: "Ikon Pendhapa Kuliner",
    label: "Pendhapa Kuliner",
  },
  headline: "Kuliner Makanan Jawa",
  subheadline: "Cita Rasa, Aroma dan Keterikatan",
  description:
    "Di balik setiap sajian kuliner Jawa, tersimpan filosofi mendalam, sejarah rempah, dan nilai kebersamaan masyarakat Nusantara.",
  actions: [
    { id: "btn-tentang-kuliner", label: "Tentang Kuliner", variant: "primary", href: "#tentang" },
    { id: "btn-jelajahi-koleksi", label: "Jelajahi Koleksi", variant: "secondary", href: "#koleksi" },
  ],
  images: [
    {
      src: "/Assets/Gambar Kuliner/go berkat.avif",
      alt: "Sego Berkat",
    },
    {
      src: "/Assets/Gambar Kuliner/go liwet.avif",
      alt: "Nasi Liwet",
    },
    {
      src: "/Assets/Gambar Kuliner/rawon.avif",
      alt: "Rawon",
    },
    {
      src: "/Assets/Gambar Kuliner/tahu kupat.avif",
      alt: "Tahu Kupat",
    },
  ],
  dots: {
    count: 4,
    activeIndex: 1,
  },
  imagePosition: "right",
};
