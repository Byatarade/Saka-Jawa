"use client";

import { useRouter } from "next/navigation";
import DetailGaleriKuliner from "@/components/kuliner/DetailGaleriKuliner";
import { WaktuMakan } from "@/components/kuliner/kuliner-data";

export default function KulinerDetailClient({ waktu }: { waktu: WaktuMakan }) {
  const router = useRouter();

  return (
    <DetailGaleriKuliner
      initialWaktu={waktu}
      onClose={() => router.push("/kuliner")}
    />
  );
}
