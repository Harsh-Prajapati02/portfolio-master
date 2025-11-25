/**
 * Note: Use position fixed according to your needs.
 * Desktop navbar is better positioned at the bottom.
 * Mobile navbar is better positioned at bottom right.
 */

"use client";

import { cn } from "@/lib/utils";
import { IconLayoutNavbarCollapse } from "@tabler/icons-react";
import {
    AnimatePresence,
    motion,
    useMotionValue,
    useSpring,
    useTransform,
    MotionValue,
} from "framer-motion"; // ✅ FIXED: Correct import source

import { useRef, useState } from "react";

export const FloatingDock = ({
    items,
    desktopClassName,
    mobileClassName,
}: {
    items: { title: string; icon: React.ReactNode; href: string }[];
    desktopClassName?: string;
    mobileClassName?: string;
}) => {
    return (
        <>
            <FloatingDockDesktop items={items} className={desktopClassName} />
            <FloatingDockMobile items={items} className={mobileClassName} />
        </>
    );
};

/* -------------------- MOBILE DOCK -------------------- */

const FloatingDockMobile = ({
    items,
    className,
}: {
    items: { title: string; icon: React.ReactNode; href: string }[];
    className?: string;
}) => {
    const [open, setOpen] = useState(false);

    return (
        <div className={cn("fixed bottom-4 right-4 block md:hidden z-50", className)}>
            <AnimatePresence>
                {open && (
                    <motion.div
                        layoutId="nav"
                        className="absolute inset-x-0 bottom-full mb-2 flex flex-col gap-2"
                    >
                        {items.map((item, idx) => (
                            <motion.a
                                key={item.title}
                                href={item.href}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{
                                    opacity: 0,
                                    y: 10,
                                    transition: { delay: idx * 0.05 },
                                }}
                                transition={{ delay: (items.length - 1 - idx) * 0.05 }}
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-800 dark:bg-neutral-900 border border-white/[0.1]"
                            >
                                <div className="h-4 w-4">{item.icon}</div>
                            </motion.a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            <button
                onClick={() => setOpen((prev) => !prev)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.1] bg-neutral-800 dark:bg-neutral-800"
            >
                <IconLayoutNavbarCollapse className="h-5 w-5 text-[#b7ab98] dark:text-neutral-400" />
            </button>
        </div>
    );
};

/* -------------------- DESKTOP DOCK -------------------- */

const FloatingDockDesktop = ({
    items,
    className,
}: {
    items: { title: string; icon: React.ReactNode; href: string }[];
    className?: string;
}) => {
    const mouseX = useMotionValue(Infinity);

    return (
        <motion.div
            onMouseMove={(e) => mouseX.set(e.pageX)}
            onMouseLeave={() => mouseX.set(Infinity)}
            className={cn(
                "fixed bottom-6 left-1/2 z-50 hidden -translate-x-1/2 transform h-16 items-end gap-4 rounded-2xl border border-white/[0.1] bg-neutral-900 px-4 pb-3 shadow-lg md:flex dark:bg-neutral-900",
                className,
            )}
        >
            {items.map((item) => (
                <IconContainer mouseX={mouseX} key={item.title} {...item} />
            ))}
        </motion.div>
    );
};

/* -------------------- ICON CONTAINER -------------------- */

function IconContainer({
    mouseX,
    title,
    icon,
    href,
}: {
    mouseX: MotionValue<number>;
    title: string;
    icon: React.ReactNode;
    href: string;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const [hovered, setHovered] = useState(false);

    const distance = useTransform(mouseX, (val) => {
        const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
        return val - bounds.x - bounds.width / 2;
    });

    const widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
    const heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
    const widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);
    const heightTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);

    const width = useSpring(widthTransform, { mass: 0.1, stiffness: 150, damping: 12 });
    const height = useSpring(heightTransform, { mass: 0.1, stiffness: 150, damping: 12 });
    const widthIcon = useSpring(widthTransformIcon, { mass: 0.1, stiffness: 150, damping: 12 });
    const heightIcon = useSpring(heightTransformIcon, { mass: 0.1, stiffness: 150, damping: 12 });

    return (
        <a href={href}>
            <motion.div
                ref={ref}
                style={{ width, height }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className="relative flex aspect-square items-center justify-center rounded-full border border-white/[0.1] bg-neutral-800 dark:bg-neutral-800"
            >
                <AnimatePresence>
                    {hovered && (
                        <motion.div
                            initial={{ opacity: 0, y: 10, x: "-50%" }}
                            animate={{ opacity: 1, y: 0, x: "-50%" }}
                            exit={{ opacity: 0, y: 2, x: "-50%" }}
                            className="absolute -top-8 left-1/2 w-fit rounded-md border border-white/[0.1] bg-neutral-800 px-2 py-0.5 text-xs whitespace-pre text-white dark:border-neutral-900 dark:bg-neutral-800 dark:text-white"
                        >
                            {title}
                        </motion.div>
                    )}
                </AnimatePresence>

                <motion.div
                    style={{ width: widthIcon, height: heightIcon }}
                    className="flex items-center justify-center"
                >
                    {icon}
                </motion.div>
            </motion.div>
        </a>
    );
}
