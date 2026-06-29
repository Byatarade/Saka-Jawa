"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function LandingMegaMendungSection() {
  const containerRef = useRef<HTMLElement>(null);
  
  // Track scroll progress while the section is in the viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax transform values (moving HORIZONTALLY ke Kiri dan ke Kanan)
  // Menghilang satu persatu dari atas: Layer paling atas (belakang) bergerak paling cepat ke samping.
  
  // Ke Kiri (Left Clouds)
  const xLeft1 = useTransform(scrollYProgress, [0, 1], ["0%", "-120%"]);
  const xLeft2 = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);
  const xLeft3 = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const xLeft4 = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  // Ke Kanan (Right Clouds)
  const xRight1 = useTransform(scrollYProgress, [0, 1], ["0%", "120%"]);
  const xRight2 = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  const xRight3 = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const xRight4 = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <section 
      ref={containerRef}
      className="relative w-full h-[35vh] md:h-[45vh] lg:h-[55vh] overflow-hidden -mt-[2px] z-10 pointer-events-none"
    >
      {/* --- LEFT CLOUDS --- */}
      {/* Layer 1 (Paling Atas / Belakang) */}
      <motion.div style={{ x: xLeft1 }} className="absolute top-[0%] left-[-2%] w-[55%] h-[60%] z-10">
        <Image src="/Assets/Left%20Mega%20Mendung.svg" alt="" fill className="object-cover object-right-top opacity-80" priority />
      </motion.div>
      
      {/* Layer 2 */}
      <motion.div style={{ x: xLeft2 }} className="absolute top-[18%] left-[-4%] w-[58%] h-[65%] z-20">
        <Image src="/Assets/Left%20Mega%20Mendung.svg" alt="" fill className="object-cover object-right-top opacity-90" priority />
      </motion.div>
      
      {/* Layer 3 */}
      <motion.div style={{ x: xLeft3 }} className="absolute top-[38%] left-[-6%] w-[60%] h-[70%] z-30">
        <Image src="/Assets/Left%20Mega%20Mendung.svg" alt="" fill className="object-cover object-right-top opacity-95" priority />
      </motion.div>
      
      {/* Layer 4 (Paling Bawah / Depan) */}
      <motion.div style={{ x: xLeft4 }} className="absolute top-[58%] left-[-8%] w-[65%] h-[80%] z-40 drop-shadow-2xl">
        <Image src="/Assets/Left%20Mega%20Mendung.svg" alt="Left Mega Mendung" fill className="object-cover object-right-top" priority />
      </motion.div>


      {/* --- RIGHT CLOUDS --- */}
      {/* Layer 1 (Paling Atas / Belakang) */}
      <motion.div style={{ x: xRight1 }} className="absolute top-[0%] right-[-2%] w-[55%] h-[60%] z-10">
        <Image src="/Assets/Right%20Mega%20Mendung.svg" alt="" fill className="object-cover object-left-top opacity-80" priority />
      </motion.div>
      
      {/* Layer 2 */}
      <motion.div style={{ x: xRight2 }} className="absolute top-[18%] right-[-4%] w-[58%] h-[65%] z-20">
        <Image src="/Assets/Right%20Mega%20Mendung.svg" alt="" fill className="object-cover object-left-top opacity-90" priority />
      </motion.div>
      
      {/* Layer 3 */}
      <motion.div style={{ x: xRight3 }} className="absolute top-[38%] right-[-6%] w-[60%] h-[70%] z-30">
        <Image src="/Assets/Right%20Mega%20Mendung.svg" alt="" fill className="object-cover object-left-top opacity-95" priority />
      </motion.div>
      
      {/* Layer 4 (Paling Bawah / Depan) */}
      <motion.div style={{ x: xRight4 }} className="absolute top-[58%] right-[-8%] w-[65%] h-[80%] z-40 drop-shadow-2xl">
        <Image src="/Assets/Right%20Mega%20Mendung.svg" alt="Right Mega Mendung" fill className="object-cover object-left-top" priority />
      </motion.div>
    </section>
  );
}
