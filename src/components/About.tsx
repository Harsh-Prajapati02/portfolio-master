"use client";
import { MaskContainer } from "@/components/ui/svg-mask-effect";

export function About() {
    return (
        <div className="flex h-full w-full items-center justify-center overflow-hidden bg-[#000000]" style={{ borderTop: "5px solid #eb5939" }}>
            <MaskContainer
                revealText={<>
                    <p className="mx-auto max-w-4xl text-center text-2xl text-justify p-4 pt-0 pb-0 lg:p-0 lg:text-3xl font-bold text-[#b7ab98] leading-snug tracking-wide">
                        <span className="text-[14px]" style={{ letterSpacing: "5px" }}>ABOUT ME</span> <br />
                        I{"'"}m a <span className="text-[#eb5939]">Full Stack Developer</span> specializing in building <span className="text-[#eb5939]">clean</span>, <span className="text-[#eb5939]">fast</span>, and <span className="text-[#eb5939]">creative</span> digital experiences. I work across both frontend and backend using the <span className="text-[#eb5939]">MERN</span> and <span className="text-[#eb5939]">PERN</span> stacks — from crafting <span className="text-[#eb5939]">smooth, animated interfaces</span> to architecting <span className="text-[#eb5939]">scalable server-side logic</span>.

                        Currently, I’m diving deeper into <span className="text-[#eb5939]">PostgreSQL</span> and exploring advanced <span className="text-[#eb5939]">database concepts</span> to build more <span className="text-[#eb5939]">powerful</span> and <span className="text-[#eb5939]">optimized</span> applications. My goal is simple — to grow continuously as a <span className="text-[#eb5939]">full-stack engineer</span> and create products that feel <span className="text-[#eb5939]">modern</span>, <span className="text-[#eb5939]">efficient</span>, and <span className="text-[#eb5939]">thoughtfully designed</span>.

                    </p>
                </>
                }
                className="h-[40rem] rounded-md border text-center text-white dark:text-black"
            >
                <p className="mx-auto max-w-4xl text-center text-2xl text-justify p-4 pt-0 pb-0 lg:p-0 lg:text-3xl font-bold text-[#0d0d0d] leading-snug tracking-wide">
                    <span className="text-[14px]" style={{ letterSpacing: "5px" }}>ABOUT ME</span> <br />
                    I{"'"}m a <span className="text-[#b7ab98]">Full Stack Developer</span> who pretends to build <span className="text-[#b7ab98]">clean</span>, <span className="text-[#b7ab98]">fast</span>, and <span className="text-[#b7ab98]">creative</span> digital experiences but actually spends half the time convincing my <span className="text-[#b7ab98]">code</span> to “please run just once without <span className="text-[#b7ab98]">breaking</span>” in the middle of <span className="text-[#b7ab98]">chaos</span>.

                    I juggle frontend and backend using <span className="text-[#b7ab98]">MERN</span> and <span className="text-[#b7ab98]">PERN</span> stacks — basically switching tabs like a <span className="text-[#b7ab98]">ninja</span> while hoping everything magically <span className="text-[#b7ab98]">aligns</span> with a touch of <span className="text-[#b7ab98]">magic</span>.

                    Currently, I’m exploring advanced <span className="text-[#b7ab98]">PostgreSQL</span> while praying I don’t accidentally drop a <span className="text-[#b7ab98]">database</span>. My goal is simple — become a <span className="text-[#b7ab98]">full-stack legend</span> without losing my <span className="text-[#b7ab98]">sanity</span>.
                </p>
            </MaskContainer>
        </div>
    );
}
