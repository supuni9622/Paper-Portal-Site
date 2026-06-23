"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxImageProps {
  src: string;
  alt: string;
  priority?: boolean;
  speed?: number; // 0 = no parallax, 1 = full scroll speed
}

export default function ParallaxImage({
  src,
  alt,
  priority = false,
  speed = 0.2,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yOffset = useTransform(
    scrollYProgress,
    [0, 1],
    [`${speed * -50}%`, `${speed * 50}%`]
  );

  return (
    <div ref={ref} className="relative w-full h-full overflow-hidden">
      <motion.div style={{ y: yOffset }} className="absolute inset-[-15%] w-[130%] h-[130%]">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </motion.div>
    </div>
  );
}
