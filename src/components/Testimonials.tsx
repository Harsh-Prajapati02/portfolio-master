"use client";

import { Cover } from "./ui/cover";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function Testimonials() {
    return (
        <>
            <div className="max-w-7xl mx-auto px-4 pb-0 md:px-8 lg:px-10 pt-15 pb-7">
                <h2 className="text-2xl md:text-5xl mb-4 text-[#b7ab98] dark:text-white max-w-4xl">
                    <Cover className="text-[#b7ab98] hover:text-[#eb5939]">Kind words from satisfied clients</Cover>
                </h2>

                <p className="text-[#b7ab98] dark:text-neutral-300 text-sm lg:text-base max-w-lg">
                    Authentic feedback from clients who value quality, reliability, and results.
                </p>
            </div>
            <div className="h-[22rem] md:h-[21rem] rounded-md flex flex-col antialiased bg-black bg-grid-white/[0.05] items-center justify-start relative overflow-hidden" style={{ borderBottom: "5px solid #eb5939" }}>
                <InfiniteMovingCards
                    items={testimonials}
                    direction="right"
                    speed="slow"
                />
            </div>
        </>
    );
}

const testimonials = [
    {
        quote:
            "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
        name: "Charles Dickens",
        title: "A Tale of Two Cities",
    },
    {
        quote:
            "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
        name: "William Shakespeare",
        title: "Hamlet",
    },
    {
        quote: "All that we see or seem is but a dream within a dream.",
        name: "Edgar Allan Poe",
        title: "A Dream Within a Dream",
    },
    {
        quote:
            "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
        name: "Jane Austen",
        title: "Pride and Prejudice",
    },
    {
        quote:
            "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
        name: "Herman Melville",
        title: "Moby-Dick",
    },
];
