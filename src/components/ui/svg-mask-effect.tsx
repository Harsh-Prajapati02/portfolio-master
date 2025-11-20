"use client";
import { useState, useRef, useCallback } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const MaskContainer = ({
    children,
    revealText,
    size = 30,
    revealSize = 300,
    className,
}: {
    children?: React.ReactNode;
    revealText?: React.ReactNode;
    size?: number;
    revealSize?: number;
    className?: string;
}) => {
    const [isHovered, setIsHovered] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = useCallback(
        (e: React.MouseEvent<HTMLDivElement>) => {
            const rect = containerRef.current?.getBoundingClientRect();
            if (!rect) return;
            setMousePosition({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            });
        },
        []
    );

    const maskSize = isHovered ? revealSize : size;

    return (
        <motion.div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className={cn("relative h-screen w-full border-none", className)}
            animate={{
                backgroundColor: isHovered ? "var(--slate-900)" : "var(--white)",
            }}
            transition={{
                backgroundColor: { duration: 0.3 },
            }}
        >
            <motion.div
                className="absolute flex h-full w-full items-center justify-center bg-[#eb5939] text-black text-6xl [mask-image:url(/mask.svg)] [mask-repeat:no-repeat] [mask-size:40px] dark:bg-white"
                animate={{
                    maskPosition: `${mousePosition.x - maskSize / 2}px ${mousePosition.y - maskSize / 2
                        }px`,
                    maskSize: `${maskSize}px`,
                }}
                transition={{
                    maskSize: { duration: 0.3, ease: "easeInOut" },
                    maskPosition: { duration: 0.15, ease: "linear" },
                }}
            >
                <div className="absolute inset-0 z-0 h-full bg-[#eb5939] opacity-50 dark:bg-white" />

                <div
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className="relative z-20 mx-auto max-w-4xl text-center text-4xl font-bold"
                >
                    {children}
                </div>
            </motion.div>

            <div className="flex h-full w-full items-center justify-center">
                {revealText}
            </div>
        </motion.div>
    );
};
