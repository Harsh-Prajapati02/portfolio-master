"use client";

import { cn } from "@/lib/utils";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
    IconSchool,
    IconCode,
    IconBrandNextjs,
    IconDatabase,
    IconCertificate,
} from "@tabler/icons-react";
import { motion } from "motion/react";
import Image from "next/image";
import { Cover } from "./ui/cover";

export function Highlights() {
    return (
        <div style={{ borderTop: "5px solid #eb5939" }}>
            <div className="max-w-7xl mx-auto py-15 pb-10 px-4 md:px-8 lg:px-10">
                <h2 className="text-2xl md:text-5xl mb-4 text-[#b7ab98] dark:text-white max-w-4xl">
                    <Cover className="text-[#b7ab98] hover:text-[#eb5939]">
                        Key Highlights From My Journey
                    </Cover>
                </h2>

                <p className="text-[#b7ab98] dark:text-neutral-300 text-sm md:text-base max-w-sm">
                    A snapshot of the milestones that shaped my growth as a Full Stack Developer.
                </p>
            </div>

            <BentoGrid className="max-w-6xl mx-auto md:auto-rows-[20rem] p-4 pt-0 pb-10 lg:p-0 lg:pt-0 lg:pb-15">
                {items.map((item, i) => (
                    <BentoGridItem
                        key={i}
                        title={item.title}
                        description={item.description}
                        header={item.header}
                        className={cn("[&>p:text-lg]", item.className)}
                        icon={item.icon}
                    />
                ))}
            </BentoGrid>
        </div>
    );
}

const SkeletonOne = () => {
    const variants = {
        initial: {
            x: 0,
        },
        animate: {
            x: 10,
            rotate: 5,
            transition: {
                duration: 0.2,
            },
        },
    };
    const variantsSecond = {
        initial: {
            x: 0,
        },
        animate: {
            x: -10,
            rotate: -5,
            transition: {
                duration: 0.2,
            },
        },
    };

    return (
        <motion.div
            initial="initial"
            whileHover="animate"
            className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-white/[0.2] flex-col space-y-2"
        >
            <motion.div
                variants={variants}
                className="flex flex-row rounded-full border border-neutral-700 bg-dot-black/[0.2] dark:bg-dot-black/[0.2] p-2 items-center space-x-2 bg-black dark:bg-black"
            >
                <div className="h-6 w-6 rounded-full bg-gradient-to-r from-[#eb5939] to-[#eb5939] shrink-0" />
                <div className="w-full bg-neutral-900 h-4 rounded-full dark:bg-neutral-900" />
            </motion.div>
            <motion.div
                variants={variantsSecond}
                className="flex flex-row rounded-full border border-white/[0.2] dark:border-white/[0.2] p-2 items-center space-x-2 w-3/4 ml-auto bg-black dark:bg-black"
            >
                <div className="w-full bg-neutral-900 h-4 rounded-full dark:bg-neutral-900" />
                <div className="h-6 w-6 rounded-full bg-gradient-to-r from-[#eb5939] to-[#eb5939] shrink-0" />
            </motion.div>
            <motion.div
                variants={variants}
                className="flex flex-row rounded-full border border-white/[0.2] dark:border-white/[0.2] p-2 items-center space-x-2 bg-black dark:bg-black"
            >
                <div className="h-6 w-6 rounded-full bg-gradient-to-r from-[#eb5939] to-[#eb5939] shrink-0" />
                <div className="w-full bg-neutral-900 h-4 rounded-full dark:bg-neutral-900" />
            </motion.div>
        </motion.div>
    );
};
const SkeletonTwo = () => {
    const variants = {
        initial: {
            width: 0,
        },
        animate: {
            width: "100%",
            transition: {
                duration: 0.2,
            },
        },
        hover: {
            width: ["0%", "100%"],
            transition: {
                duration: 2,
            },
        },
    };
    const arr = new Array(6).fill(0);
    return (
        <motion.div
            initial="initial"
            animate="animate"
            whileHover="hover"
            className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
        >
            {arr.map((_, i) => (
                <motion.div
                    key={"skelenton-two" + i}
                    variants={variants}
                    style={{
                        maxWidth: Math.random() * (100 - 40) + 40 + "%",
                    }}
                    className="flex flex-row rounded-full border border-white/[0.2] dark:border-white/[0.2] p-2 items-center space-x-2 bg-[#0d0d0d] dark:bg-black w-full h-4"
                ></motion.div>
            ))}
        </motion.div>
    );
};
const SkeletonThree = () => {
    const variants = {
        initial: {
            backgroundPosition: "0 50%",
        },
        animate: {
            backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
        },
    };
    return (
        <motion.div
            initial="initial"
            animate="animate"
            variants={variants}
            transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
            }}
            className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
            style={{
                background:
                    "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
                backgroundSize: "400% 400%",
            }}
        >
            <motion.div className="h-full w-full rounded-lg"></motion.div>
        </motion.div>
    );
};

const SkeletonFour = () => {
    const first = {
        initial: {
            x: 20,
            rotate: -5,
        },
        hover: {
            x: 0,
            rotate: 0,
        },
    };
    const second = {
        initial: {
            x: -20,
            rotate: 5,
        },
        hover: {
            x: 0,
            rotate: 0,
        },
    };
    return (
        <motion.div
            initial="initial"
            animate="animate"
            whileHover="hover"
            className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
        >
            <motion.div
                variants={first}
                className="h-full w-1/3 rounded-2xl bg-[#0d0d0d] p-4 dark:bg-black dark:border-white/[0.1] border border-white/[0.2] flex flex-col items-center justify-center"
            >
                <Image
                    src="https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg"
                    alt="avatar"
                    height="100"
                    width="100"
                    className="rounded-full h-10 w-10"
                />
                <p className="sm:text-sm text-xs text-center font-semibold text-[#b7ab98] mt-4">
                    Completed Frontend Training
                </p>
                <p className="border border-green-500 bg-green-900/20 text-green-600 text-xs text-center rounded-lg md:rounded-sm px-2 py-2 md:px-2 md:py-0.5 mt-4">
                    Student Appreciation Award
                </p>
            </motion.div>

            <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-[#0d0d0d] p-4 dark:bg-black dark:border-white/[0.1] border border-white/[0.2] flex flex-col items-center justify-center">
                <Image
                    src="https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg"
                    alt="avatar"
                    height="100"
                    width="100"
                    className="rounded-full h-10 w-10"
                />
                <p className="sm:text-sm text-xs text-center font-semibold text-[#b7ab98] mt-4">
                    Transitioned to Full-Stack Development
                </p>
                <p className="border border-red-500 bg-red-900/20 text-red-600 text-xs text-center rounded-lg md:rounded-sm px-2 py-2 md:px-2 md:py-0.5 mt-4">
                    Best Student Award
                </p>
            </motion.div>

            <motion.div
                variants={second}
                className="h-full w-1/3 rounded-2xl bg-[#0d0d0d] p-4 border border-white/[0.2] flex flex-col items-center justify-center"
            >
                <Image
                    src="https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg"
                    alt="avatar"
                    height="100"
                    width="100"
                    className="rounded-full h-10 w-10"
                />
                <p className="sm:text-sm text-xs text-center font-semibold text-[#b7ab98] mt-4">
                    Internship at KGK Infotech LLP
                </p>
                <p className="border border-[#eb5939] bg-orange-900/20 text-[#eb5939] text-xs text-center rounded-lg md:rounded-sm px-2 py-2 md:px-2 md:py-0.5 mt-4">
                    Full-Stack Projects & PostgreSQL
                </p>
            </motion.div>
        </motion.div>
    );
};

const SkeletonFive = () => {
    const variants = {
        initial: {
            x: 0,
        },
        animate: {
            x: 10,
            rotate: 5,
            transition: {
                duration: 0.2,
            },
        },
    };
    const variantsSecond = {
        initial: {
            x: 0,
        },
        animate: {
            x: -10,
            rotate: -5,
            transition: {
                duration: 0.2,
            },
        },
    };

    return (
        <motion.div
            initial="initial"
            whileHover="animate"
            className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
        >
            <motion.div
                variants={variants}
                className="flex flex-row rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2 items-start space-x-2 bg-white dark:bg-black"
            >
                <Image
                    src="https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg"
                    alt="avatar"
                    height="100"
                    width="100"
                    className="rounded-full h-10 w-10"
                />
                <p className="text-xs text-neutral-700">
                    Joined KGK Infotech as Full-Time Developer — focusing on PERN stack & advanced PostgreSQL concepts.
                </p>
            </motion.div>

            <motion.div
                variants={variantsSecond}
                className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
            >
                <p className="text-xs text-neutral-700">
                    Continuous Skill Development
                </p>
                <div className="h-6 w-6 rounded-full bg-gradient-to-r from-[#eb5939] to-[#eb5939] shrink-0" />
            </motion.div>
        </motion.div>
    );
};


const items = [
    {
        title: "Started My Frontend Journey",
        description: (
            <span className="text-sm">
                Learned HTML, CSS, Media Query, Bootstrap & JavaScript. Began exploring Tailwind CSS and Next.js.
            </span>
        ),
        header: <SkeletonOne />,
        className: "md:col-span-1",
        icon: <IconCode className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Frontend Excellence & Recognition",
        description: (
            <span className="text-sm">
                Completed frontend training with React & Redux — received a Student Appreciation Award.
            </span>
        ),
        header: <SkeletonTwo />,
        className: "md:col-span-1",
        icon: <IconCertificate className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Transition to Full-Stack Development",
        description: (
            <span className="text-sm">
                Learned Node.js, Express, MongoDB, Mongoose & authentication — awarded Best Student in Full-Stack.
            </span>
        ),
        header: <SkeletonThree />,
        className: "md:col-span-1",
        icon: <IconSchool className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Internship at KGK Infotech LLP",
        description: (
            <span className="text-sm">
                Worked as Software Developer Intern — mastered Next.js, Tailwind & PostgreSQL from scratch.
            </span>
        ),
        header: <SkeletonFour />,
        className: "md:col-span-2",
        icon: <IconBrandNextjs className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Full-Time Software Developer",
        description: (
            <span className="text-sm">
                Joined KGK Infotech full-time and continued mastering PostgreSQL & PERN stack development.
            </span>
        ),
        header: <SkeletonFive />,
        className: "md:col-span-1",
        icon: <IconDatabase className="h-4 w-4 text-neutral-500" />,
    }
];