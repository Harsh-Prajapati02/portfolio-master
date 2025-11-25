import { cn } from "@/lib/utils";
import { Cover } from "./ui/cover";
import { SpotlightPreview } from "./SpotlightPreview";
import { EncryptedText } from "./ui/encrypted-text";
import { LayoutTextFlip } from "./ui/layout-text-flip";
import { motion } from "motion/react";

export function GridBackgroundDemo() {
    return (
        <div className="relative flex h-[44rem] w-full items-center justify-center bg-black dark:bg-black">
            <SpotlightPreview />
            <div
                className={cn(
                    "absolute inset-0",
                    "[background-size:100px_100px]",
                    "dark:[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
                    "[background-image:linear-gradient(to_right,#262626_0.1px,transparent_1px),linear-gradient(to_bottom,#262626_0.1px,transparent_1px)]",
                )}
            />
            {/* Radial gradient for the container to give a faded look */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)] dark:bg-black"></div>

            {/* ----- Hero Text ----- */}
            <div style={{ zIndex: "999" }} className="px-16">
                <p className="mx-auto max-w-lg py-0 text-center text-[12px] md:text-[16px]">
                    <EncryptedText
                        text="DYNAMIC WEB MAGIC WITH FULL STACK EXPERTISE"
                        encryptedClassName="text-[#b7ab98]"
                        revealedClassName="text-[#b7ab98]"
                        revealDelayMs={50}
                    />
                </p>
                <h1 className="text-5xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center relative z-20 py-3 bg-clip-text text-transparent bg-gradient-to-b from-[#eb5939] via-[#b7ab98] to-[#b7ab98] dark:from-neutral-800 dark:via-white dark:to-white tracking-wide" style={{lineHeight:"80px"}}>
                    Transforming Concepts into <br /> Seamless Digital Solutions
                    {/* <Cover className="text-[#b7ab98] hover:text-[#eb5939]"></Cover> */}
                </h1>
                <motion.div className="relative mx-4 my-0 flex flex-col items-center justify-center gap-4 text-center sm:mx-0 sm:mb-0 sm:flex-row">
                    <LayoutTextFlip
                        text="Hi ! I'm Harsh, a "
                        words={["Full Stack Developer", "Front-End Developer", "BackEnd Developer", "Web Designer"]}
                    />
                </motion.div>
            </div>
        </div>
    );
}
