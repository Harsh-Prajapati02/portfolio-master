import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
    IconArrowWaveRightUp,
    IconBoxAlignTopLeft,
    IconClipboardCopy,
    IconFileBroken,
    IconSignature,
    IconTableColumn,
} from "@tabler/icons-react";
import { Cover } from "./ui/cover";

export function BentoGridDemo() {
    return (
        <div style={{ borderTop: "5px solid #eb5939", borderBottom: "5px solid #eb5939" }}>
            <div className="max-w-7xl mx-auto py-20 pb-10 px-4 md:px-8 lg:px-10">
                <h2 className="text-2xl md:text-5xl mb-4 text-[#b7ab98] dark:text-white max-w-4xl">
                    <Cover className="text-[#b7ab98]">Changelog from my journey</Cover>
                </h2>

                <p className="text-[#b7ab98] dark:text-neutral-300 text-sm md:text-base max-w-sm">
                    I&apos;ve been working on Aceternity for the past 2 years. Here&apos;s
                    a timeline of my journey.
                </p>
            </div>
            <BentoGrid className="max-w-6xl mx-auto  p-4 pt-0 pb-10 lg:p-0 lg:pt-0 lg:pb-10">
                {items.map((item, i) => (
                    <BentoGridItem
                        key={i}
                        title={item.title}
                        description={item.description}
                        header={item.header}
                        icon={item.icon}
                        
                    />
                ))}
            </BentoGrid>
        </div>

    );
}
const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 dark:from-neutral-900 dark:to-neutral-800 to-neutral-800"></div>
);
const items = [
    {
        title: "The Dawn of Innovation",
        description: "Explore the birth of groundbreaking ideas and inventions.",
        header: <Skeleton />,
        icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "The Digital Revolution",
        description: "Dive into the transformative power of technology.",
        header: <Skeleton />,
        icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "The Art of Design",
        description: "Discover the beauty of thoughtful and functional design.",
        header: <Skeleton />,
        icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "The Power of Communication",
        description:
            "Understand the impact of effective communication in our lives.",
        header: <Skeleton />,
        icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "The Pursuit of Knowledge",
        description: "Join the quest for understanding and enlightenment.",
        header: <Skeleton />,
        icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "The Joy of Creation",
        description: "Experience the thrill of bringing ideas to life.",
        header: <Skeleton />,
        icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
    }
];
