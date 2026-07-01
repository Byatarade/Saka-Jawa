export type WaktuMakan = "pagi" | "siang" | "malam";

export interface KulinerItem {
  id: string;
  title: string;
  description: string;
  src: string;
}

export interface WaktuMakanData {
  id: WaktuMakan;
  label: string;
  hero: KulinerItem;
  gallery: KulinerItem[];
}

export const kulinerData: Record<WaktuMakan, WaktuMakanData> = {
  pagi: {
    id: "pagi",
    label: "Sarapan Pagi",
    hero: {
      id: "pagi-1",
      title: "Nasi Liwet",
      description:
        "Nasi Liwet adalah hidangan ikonik khas Solo (Surakarta) yang dimasak dengan santan, serai, dan daun salam hingga menghasilkan aroma harum yang khas. Disajikan dengan labu siam, areh (santan kental), ayam suwir, dan telur, hidangan ini sering kali dinikmati sebagai sajian sarapan yang mengenyangkan dan penuh cita rasa.",
      src: "/Assets/Gambar Kuliner/go liwet.avif",
    },
    gallery: [
      {
        id: "pagi-2",
        title: "Gudeg",
        description:
          "Gudeg adalah masakan khas Yogyakarta yang terbuat dari nangka muda dimasak berjam-jam bersama santan dan rempah pilihan. Rasanya manis gurih, biasanya disajikan dengan krecek, ayam opor, dan telur pindang.",
        src: "/Assets/Gambar Kuliner/rawon.avif",
      },
      {
        id: "pagi-3",
        title: "Tahu Kupat",
        description:
          "Tahu Kupat adalah sajian ringan khas Jawa berupa tahu goreng dan ketupat yang disiram kuah manis dari kecap manis, bawang goreng, dan irisan daun bawang yang segar.",
        src: "/Assets/Gambar Kuliner/tahu kupat.avif",
      },
      {
        id: "pagi-4",
        title: "Gorengan Berkat",
        description:
          "Hidangan istimewa khas Jawa yang biasa disajikan dalam acara-acara adat dan syukuran. Menggunakan rempah pilihan yang diwariskan turun-temurun.",
        src: "/Assets/Gambar Kuliner/go berkat.avif",
      },
    ],
  },
  siang: {
    id: "siang",
    label: "Makan Siang",
    hero: {
      id: "siang-1",
      title: "Rawon",
      description:
        "Rawon adalah sup daging sapi berkuah hitam pekat yang khasnya berasal dari buah kluwek. Hidangan legendaris dari Jawa Timur ini memiliki cita rasa gurih yang dalam dan aroma rempah yang kuat, biasanya disajikan dengan nasi putih, tauge, dan sambal.",
      src: "/Assets/Gambar Kuliner/rawon.avif",
    },
    gallery: [
      {
        id: "siang-2",
        title: "Nasi Liwet",
        description:
          "Nasi Liwet adalah hidangan ikonik khas Solo yang dimasak dengan santan. Cocok dinikmati sebagai makan siang yang hangat dan mengenyangkan bersama keluarga.",
        src: "/Assets/Gambar Kuliner/go liwet.avif",
      },
      {
        id: "siang-3",
        title: "Tahu Kupat",
        description:
          "Sajian khas Jawa yang segar dan mengenyangkan untuk makan siang. Perpaduan ketupat dan tahu goreng dengan kuah kecap manis yang lezat.",
        src: "/Assets/Gambar Kuliner/tahu kupat.avif",
      },
      {
        id: "siang-4",
        title: "Gorengan Berkat",
        description:
          "Hidangan berkat khas Jawa yang biasa hadir di acara siang hari. Kaya rempah dan dimasak dengan penuh kesabaran.",
        src: "/Assets/Gambar Kuliner/go berkat.avif",
      },
    ],
  },
  malam: {
    id: "malam",
    label: "Makan Malam",
    hero: {
      id: "malam-1",
      title: "Tahu Kupat",
      description:
        "Tahu Kupat adalah sajian malam yang hangat dan sederhana khas masyarakat Jawa. Tekstur ketupat yang lembut berpadu dengan tahu goreng yang renyah, disiram kuah kecap manis dengan sentuhan cabai rawit yang memberikan kehangatan di malam hari.",
      src: "/Assets/Gambar Kuliner/tahu kupat.avif",
    },
    gallery: [
      {
        id: "malam-2",
        title: "Rawon",
        description:
          "Semangkuk rawon hangat di malam hari menjadi pilihan favorit. Kuah hitam pekat yang kaya rempah memberikan kehangatan di tubuh setelah seharian beraktivitas.",
        src: "/Assets/Gambar Kuliner/rawon.avif",
      },
      {
        id: "malam-3",
        title: "Gorengan Berkat",
        description:
          "Hidangan berkat khas Jawa yang sempurna dinikmati di malam hari bersama keluarga. Dibuat dari bahan-bahan pilihan dengan bumbu warisan leluhur.",
        src: "/Assets/Gambar Kuliner/go berkat.avif",
      },
      {
        id: "malam-4",
        title: "Nasi Liwet",
        description:
          "Nasi Liwet Solo juga nikmat sebagai sajian makan malam yang hangat. Aroma santan dan rempahnya yang harum menjadi penghantar tidur yang sempurna.",
        src: "/Assets/Gambar Kuliner/go liwet.avif",
      },
    ],
  },
};
