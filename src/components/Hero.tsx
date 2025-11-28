import { cn } from "@/lib/utils";
import { Cover } from "./ui/cover";
import { SpotlightPreview } from "./SpotlightPreview";
import { EncryptedText } from "./ui/encrypted-text";
import { LayoutTextFlip } from "./ui/layout-text-flip";
import { motion } from "motion/react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";

export function Hero() {
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
            <div style={{ zIndex: "999" }} className="px-10 md:px-0">
                <p className="mx-auto max-w-lg py-0 text-center text-[12px] md:text-[16px]" style={{letterSpacing:"3px"}}>
                    <EncryptedText
                        text="DYNAMIC WEB MAGIC WITH FULL STACK EXPERTISE"
                        encryptedClassName="text-[#b7ab98]"
                        revealedClassName="text-[#b7ab98]"
                        revealDelayMs={50}
                        className="font-bold"
                    />
                </p>
                <h1 className="text-5xl lg:text-7xl font-semibold max-w-4xl mx-auto text-center relative z-20 py-2 pb-2 bg-clip-text text-transparent bg-gradient-to-b from-[#eb5939] via-[#b7ab98] to-[#b7ab98] tracking-wide leading-13 md:leading-15 lg:leading-20">
                    Transforming Concepts into <span className="bg-clip-text text-transparent bg-gradient-to-b from-[#b7ab98] via-[#b7ab98] to-[#eb5939]">Seamless <span className="text-[#eb5939]">Digital Solutions</span></span>
                </h1>
                <motion.div className="relative mx-4 my-0 flex flex-col items-center justify-center gap-4 text-center sm:mx-0 sm:mb-0 sm:flex-row ">
                    <LayoutTextFlip
                        text={
                            <>
                                Hi ! I{"'"}m{" "}
                                <Cover className="text-[#b7ab98] hover:text-[#b7ab98] bg-clip-text text-transparent bg-gradient-to-b from-[#eb5939] via-[#b7ab98] to-[#eb5939]">
                                    Harsh Prajapati
                                </Cover>
                                , a
                            </>
                        }
                        words={[
                            "Full Stack Developer",
                            "Software Developer",
                            "MERN Stack Developer",
                            "PERN Stack Developer",
                            "Back-End Developer",
                            "Node.js Developer",
                            "Front-End Developer",
                            "React.js Developer",
                            "Next.js Developer",
                            "Web Developer",
                            "Web Designer",
                        ]}
                    />
                    <span className="text-2xl text-[#b7ab98] font-bold tracking-tight drop-shadow-lg md:text-2xl" style={{letterSpacing:"2px"}}>based in India.</span>
                </motion.div>

                <div className="pt-5 md:pt-10" style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                    <a href="#about">
                        <MagicButton
                            title="Show my work"
                            icon={<FaLocationArrow />}
                            position="right"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
}
