import { cn } from "@/lib/utils";
import { Cover } from "./ui/cover";
import { SpotlightPreview } from "./SpotlightPreview";
import { EncryptedText } from "./ui/encrypted-text";

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
                <div style={{ zIndex: "999" }}>
                    <p className="mx-auto max-w-lg py-0 text-center text-xl">
                        <EncryptedText
                            text="Welcome to the Matrix, Neo."
                            encryptedClassName="text-[#b7ab98]"
                            revealedClassName="dark:text-white text-[#b7ab98]"
                            revealDelayMs={50}
                        />
                    </p>
                    <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center relative z-20 py-3 bg-clip-text text-transparent bg-gradient-to-b from-[#eb5939] via-[#b7ab98] to-[#b7ab98] dark:from-neutral-800 dark:via-white dark:to-white">
                        Build amazing websites <br /> at <Cover className="text-[#b7ab98] hover:text-[#eb5939]">warp speed</Cover>
                    </h1>
                </div>
            </div>
    );
}
