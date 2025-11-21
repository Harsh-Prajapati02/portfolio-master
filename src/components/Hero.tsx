import { cn } from "@/lib/utils";

export function GridBackgroundDemo() {
    return (
        <div className="relative flex h-[44rem] w-full items-center justify-center bg-black dark:bg-black">
            <div
                className={cn(
                    "absolute inset-0",
                    "[background-size:40px_40px]",
                    "dark:[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
                    "[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
                )}
            />
            {/* Radial gradient for the container to give a faded look */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)] dark:bg-black"></div>
            <p className="relative z-20 bg-gradient-to-b from-[#b7ab98] to-neutral-800 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl">    
                Backgrounds
            </p>
        </div>
    );
}
