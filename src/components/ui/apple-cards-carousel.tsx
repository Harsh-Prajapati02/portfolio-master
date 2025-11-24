"use client";

import React, {
    useEffect,
    useRef,
    useState,
    createContext,
    useContext,
    useCallback,
} from "react";
import {
    IconArrowNarrowLeft,
    IconArrowNarrowRight,
    IconX,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image, { ImageProps } from "next/image";
import { useOutsideClick } from "@/hooks/use-outside-click";

// ----------------------
// ✅ Types
// ----------------------
interface CarouselProps {
    items: React.ReactNode[];
    initialScroll?: number;
}

type CardType = {
    src: string;
    title: string;
    category: string;
    content: React.ReactNode;
};

// ----------------------
// ✅ Context
// ----------------------
export const CarouselContext = createContext<{
    onCardClose: (index: number) => void;
    currentIndex: number;
}>({
    onCardClose: () => { },
    currentIndex: 0,
});

// ----------------------
// ✅ Carousel Component
// ----------------------
export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
    const carouselRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (carouselRef.current) {
            carouselRef.current.scrollLeft = initialScroll;
            checkScrollability();
        }
    }, [initialScroll]);

    const checkScrollability = () => {
        if (carouselRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
        }
    };

    const scrollLeft = () => {
        carouselRef.current?.scrollBy({ left: -300, behavior: "smooth" });
    };

    const scrollRight = () => {
        carouselRef.current?.scrollBy({ left: 300, behavior: "smooth" });
    };

    const handleCardClose = (index: number) => {
        if (carouselRef.current) {
            const cardWidth = window.innerWidth < 768 ? 230 : 384;
            const gap = window.innerWidth < 768 ? 4 : 8;
            const scrollPosition = (cardWidth + gap) * (index + 1);
            carouselRef.current.scrollTo({
                left: scrollPosition,
                behavior: "smooth",
            });
            setCurrentIndex(index);
        }
    };

    return (
        <CarouselContext.Provider
            value={{ onCardClose: handleCardClose, currentIndex }}
        >
            <div className="relative w-full">
                <div
                    ref={carouselRef}
                    onScroll={checkScrollability}
                    className="flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth py-10 [scrollbar-width:none] md:py-15"
                >
                    <div
                        className={cn(
                            "absolute right-0 z-[1000] h-auto w-[5%] overflow-hidden bg-gradient-to-l"
                        )}
                    ></div>

                    <div
                        className={cn(
                            "flex flex-row justify-start gap-4 pl-4",
                            "mx-auto max-w-7xl"
                        )}
                    >
                        {items.map((item, index) => (
                            <motion.div
                                key={"card" + index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 0.5,
                                        delay: 0.2 * index,
                                        ease: "easeOut",
                                    },
                                }}
                                className="rounded-3xl last:pr-[5%] md:last:pr-[33%]"
                            >
                                {item}
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="mr-10 flex justify-end gap-2">
                    <button
                        className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 disabled:opacity-50"
                        onClick={scrollLeft}
                        disabled={!canScrollLeft}
                    >
                        <IconArrowNarrowLeft className="h-6 w-6 text-gray-500" />
                    </button>
                    <button
                        className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 disabled:opacity-50"
                        onClick={scrollRight}
                        disabled={!canScrollRight}
                    >
                        <IconArrowNarrowRight className="h-6 w-6 text-gray-500" />
                    </button>
                </div>
            </div>
        </CarouselContext.Provider>
    );
};

// ----------------------
// ✅ Card Component
// ----------------------
export const Card = ({
    card,
    index,
    layout = false,
}: {
    card: CardType;
    index: number;
    layout?: boolean;
}) => {
    const [open, setOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const { onCardClose } = useContext(CarouselContext);

    const handleClose = useCallback(() => {
        setOpen(false);
        onCardClose(index);
    }, [index, onCardClose]);

    useEffect(() => {
        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") handleClose();
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [handleClose]);

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "auto";
    }, [open]);

    useOutsideClick(containerRef, handleClose);

    const handleOpen = () => setOpen(true);

    return (
        <>
            <AnimatePresence>
                {open && (
                    <div className="fixed inset-0 z-50 h-screen overflow-auto p-4 lg:p-0">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 h-full w-full bg-black/80 backdrop-blur-lg"
                        />
                        <motion.div
                            ref={containerRef}
                            layoutId={layout ? `card-${card.title}` : undefined}
                            className="relative z-[60] mx-auto my-10 h-fit max-w-5xl rounded-3xl bg-neutral-900 p-4 pb-0 font-sans lg:p-10 lg:pb-0 dark:bg-neutral-900"
                        >
                            <button
                                className="sticky top-4 right-0 ml-auto flex h-8 w-8 items-center justify-center rounded-full bg-white dark:bg-white"
                                onClick={handleClose}
                            >
                                <IconX className="h-6 w-6 text-neutral-900 dark:text-neutral-900" />
                            </button>
                            <motion.p className="text-base font-medium text-[#b7ab98] dark:text-white">
                                {card.category}
                            </motion.p>
                            <motion.p className="mt-4 text-2xl font-semibold text-[#b7ab98] hover:text-[#eb5939] lg:text-5xl dark:text-white">
                                {card.title}
                            </motion.p>
                            <div className="py-7">{card.content}</div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            <motion.button
                layoutId={layout ? `card-${card.title}` : undefined}
                onClick={handleOpen}
                className="relative z-10 flex h-50 w-70 flex-col items-start justify-start overflow-hidden rounded-3xl bg-gray-100 md:h-70 md:w-96 dark:bg-neutral-900"
            >
                <div className="pointer-events-none absolute inset-x-0 top-0 z-30 h-full bg-gradient-to-b from-black/50 via-transparent to-transparent" />
                <div className="relative z-40 p-8">
                    <motion.p className="text-left font-sans text-sm font-medium text-white lg:text-base">
                        {card.category}
                    </motion.p>
                    <motion.p className="mt-2 max-w-xs text-left font-sans text-xl font-semibold [text-wrap:balance] text-white lg:text-3xl">
                        {card.title}
                    </motion.p>
                </div>
                <BlurImage
                    src={card.src}
                    alt={card.title}
                    fill
                    className="absolute inset-0 z-10 object-cover"
                />
            </motion.button>
        </>
    );
};

// ----------------------
// ✅ BlurImage Component
// ----------------------
export const BlurImage = ({
    height,
    width,
    src,
    className,
    alt,
    ...rest
}: ImageProps) => {
    const [isLoading, setLoading] = useState(true);

    return (
        <Image
            {...rest}
            className={cn(
                "h-full w-full transition duration-300",
                isLoading ? "blur-sm" : "blur-0",
                className
            )}
            onLoad={() => setLoading(false)}
            src={src}
            width={width}
            height={height}
            alt={alt || "Background"}
            placeholder="empty"
        />
    );
};
