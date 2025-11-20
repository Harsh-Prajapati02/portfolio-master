"use client";
import { MaskContainer } from "@/components/ui/svg-mask-effect";

export function SVGMaskEffectDemo() {
    return (
        <div className="flex h-full w-full items-center justify-center overflow-hidden bg-[#0D0D0D]">
            <MaskContainer
                revealText={<>
                    <p className="mx-auto max-w-4xl text-center text-3xl text-justify p-4 md:p-0 md:text-4xl font-bold text-[#b7ab98] leading-snug tracking-wide">
                        <span className="text-[14px]" style={{letterSpacing:"5px"}}>ABOUT ME</span> <br />
                        The first rule of MRR Club is you do not talk about MRR Club. The
                        second rule of MRR Club is you DO NOT talk about MRR Club.

                        Discover the power of{" "}
                        <span className="text-[#eb5939]">Tailwind CSS v4</span> with native CSS
                        variables and container queries with
                        <span className="text-[#eb5939]"> advanced animations</span>.
                    </p>
                </>
                }
                className="h-[40rem] rounded-md border text-center text-white dark:text-black"
            >
                <p className="mx-auto max-w-4xl text-center text-3xl text-justify p-4 md:p-0 md:text-4xl font-bold text-[#0D0D0D] leading-snug tracking-wide">
                    <span className="text-[14px]" style={{letterSpacing:"5px"}}>ABOUT ME</span> <br />
                    The first rule of MRR Club is you do not talk about MRR Club. The
                    second rule of MRR Club is you DO NOT talk about MRR Club.

                    Discover the power of{" "}
                    <span className="text-[#b7ab98]">Tailwind CSS v4</span> with native CSS
                    variables and container queries with
                    <span className="text-[#b7ab98]"> advanced animations</span>.
                </p>
            </MaskContainer>
        </div>
    );
}
