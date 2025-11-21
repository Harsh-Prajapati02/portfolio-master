import { BentoGrid, BentoGridItem } from "./ui/bento-grid"; import {
    IconClipboardCopy,
    IconFileBroken,
    IconSignature,
    IconTableColumn,
} from "@tabler/icons-react";
import { Cover } from "./ui/cover";

export function BentoGridSecondDemo() {
    return (
        <>
            <div style={{borderTop:"5px solid #eb5939", borderBottom:"5px solid #eb5939"}}>
                <div className="max-w-7xl mx-auto py-20 pb-10 px-4 md:px-8 lg:px-10">
                    <h2 className="text-2xl md:text-5xl mb-4 text-[#b7ab98] dark:text-white max-w-4xl">
                        <Cover className="text-[#b7ab98]">Changelog from my journey</Cover>
                    </h2>

                    <p className="text-[#b7ab98] dark:text-neutral-300 text-sm md:text-base max-w-sm">
                        I&apos;ve been working on Aceternity for the past 2 years. Here&apos;s
                        a timeline of my journey.
                    </p>
                </div>
                <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem] p-4 pt-10 pb-10 md:p-0 md:pt-10 md:pb-10">
                    {items.map((item, i) => (
                        <BentoGridItem
                            key={i}
                            title={item.title}
                            description={item.description}
                            header={item.header}
                            className={item.className}
                            icon={item.icon}
                        />
                    ))}
                </BentoGrid>
            </div>
        </>

    );
}
const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);
const items = [
    {
        title: "The Dawn of Innovation",
        description: "Explore the birth of groundbreaking ideas and inventions.",
        header: <Skeleton />,
        className: "md:col-span-2",
        icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "The Digital Revolution",
        description: "Dive into the transformative power of technology.",
        header: <Skeleton />,
        className: "md:col-span-1",
        icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "The Art of Design",
        description: "Discover the beauty of thoughtful and functional design.",
        header: <Skeleton />,
        className: "md:col-span-1",
        icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "The Power of Communication",
        description:
            "Understand the impact of effective communication in our lives.",
        header: <Skeleton />,
        className: "md:col-span-2",
        icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
];
