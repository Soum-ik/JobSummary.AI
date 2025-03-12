"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function InteractiveBlob({ className }: { className: string }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            className={`absolute rounded-full blur-[60px] opacity-30 transition-opacity duration-300 ${className}`}
            animate={{
                x: ["0%", "10%", "-10%", "0%"],
                y: ["0%", "-15%", "10%", "0%"],
                scale: isHovered ? 1.2 : 1,
                opacity: isHovered ? 0.5 : 0.3,
            }}
            transition={{
                duration: isHovered ? 10 : 20,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        />
    );
}