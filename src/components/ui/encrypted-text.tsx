"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { cn } from "@/lib/utils";

type EncryptedTextProps = {
    text: string;
    className?: string;
    revealDelayMs?: number;
    charset?: string;
    flipDelayMs?: number;
    encryptedClassName?: string;
    revealedClassName?: string;
};

const DEFAULT_CHARSET =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-={}[];:,.<>/?";

function generateRandomCharacter(charset: string): string {
    return charset[Math.floor(Math.random() * charset.length)];
}

function generateGibberishPreservingSpaces(original: string, charset: string) {
    return original
        .split("")
        .map((ch) => (ch === " " ? " " : generateRandomCharacter(charset)))
        .join("");
}

export const EncryptedText: React.FC<EncryptedTextProps> = ({
    text,
    className,
    revealDelayMs = 50,
    charset = DEFAULT_CHARSET,
    flipDelayMs = 50,
    encryptedClassName,
    revealedClassName,
}) => {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true });

    const [revealCount, setRevealCount] = useState(0);

    // IMPORTANT: scramble chars in STATE (not ref)
    const [scrambleChars, setScrambleChars] = useState<string[]>(
        generateGibberishPreservingSpaces(text, charset).split("")
    );

    const animationFrameRef = useRef<number | null>(null);
    const startTimeRef = useRef<number>(0);
    const lastFlipTimeRef = useRef<number>(0);

    useEffect(() => {
        if (!isInView) return;

        // reset everything on view
        const initial = generateGibberishPreservingSpaces(text, charset).split("");
        setScrambleChars(initial);

        startTimeRef.current = performance.now();
        lastFlipTimeRef.current = startTimeRef.current;
        setRevealCount(0);

        let cancelled = false;

        const update = (now: number) => {
            if (cancelled) return;

            const elapsed = now - startTimeRef.current;
            const targetReveal = Math.min(
                text.length,
                Math.floor(elapsed / Math.max(1, revealDelayMs))
            );

            setRevealCount(targetReveal);

            // fully revealed? stop animation
            if (targetReveal >= text.length) return;

            const sinceFlip = now - lastFlipTimeRef.current;

            if (sinceFlip >= flipDelayMs) {
                // scramble remaining characters
                setScrambleChars((prev) => {
                    const updated = [...prev];
                    for (let i = targetReveal; i < text.length; i++) {
                        updated[i] =
                            text[i] === " " ? " " : generateRandomCharacter(charset);
                    }
                    return updated;
                });

                lastFlipTimeRef.current = now;
            }

            animationFrameRef.current = requestAnimationFrame(update);
        };

        animationFrameRef.current = requestAnimationFrame(update);

        return () => {
            cancelled = true;
            if (animationFrameRef.current != null) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [isInView, text, revealDelayMs, charset, flipDelayMs]);

    if (!text) return null;

    return (
        <motion.span ref={ref} className={cn(className)} aria-label={text}>
            {text.split("").map((char, index) => {
                const isRevealed = index < revealCount;
                const displayChar = isRevealed ? char : scrambleChars[index] ?? " ";

                return (
                    <span
                        key={index}
                        className={cn(isRevealed ? revealedClassName : encryptedClassName)}
                    >
                        {displayChar}
                    </span>
                );
            })}
        </motion.span>
    );
};
