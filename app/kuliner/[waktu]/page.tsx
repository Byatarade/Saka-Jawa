import { kulinerData, WaktuMakan } from "@/components/kuliner/kuliner-data";
import KulinerDetailClient from "@/components/kuliner/KulinerDetailClient";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export function generateStaticParams() {
  return (Object.keys(kulinerData) as WaktuMakan[]).map((waktu) => ({
    waktu,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ waktu: string }>;
}): Promise<Metadata> {
  const { waktu } = await params;
  const data = kulinerData[waktu as WaktuMakan];
  if (!data) return { title: "Kuliner Jawa" };
  return {
    title: `${data.label} — Kuliner Jawa | Saka Jawa`,
    description: `Jelajahi hidangan khas Jawa untuk ${data.label.toLowerCase()}.`,
  };
}

export default async function KulinerWaktuPage({
  params,
}: {
  params: Promise<{ waktu: string }>;
}) {
  const { waktu } = await params;

  if (!kulinerData[waktu as WaktuMakan]) {
    notFound();
  }

  return <KulinerDetailClient waktu={waktu as WaktuMakan} />;
}
