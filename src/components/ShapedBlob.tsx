"use client";

import { motion } from "framer-motion";

export default function ShapedBlob({ className, shape = "circle" }: { className: string, shape?: string }) {
    const shapeClass =
        shape === "squircle" ? "rounded-[30%]" :
            shape === "triangle" ? "clip-path-triangle" :
                "rounded-full"; // default is circle

    return (
        <motion.div
            className={`absolute blur-[70px] opacity-30 ${shapeClass} ${className}`}
            animate={{
                x: ["0%", "10%", "-10%", "0%"],
                y: ["0%", "-15%", "10%", "0%"],
                rotate: [0, 5, -5, 0],
            }}
            transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
            }}
        />
    );
}