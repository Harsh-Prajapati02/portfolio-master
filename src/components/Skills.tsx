import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
    IconClipboardCopy,
    IconDeviceLaptop,
    IconDatabase,
    IconServer,
    IconShieldCheck,
    IconSettings,
} from "@tabler/icons-react";
import { Cover } from "./ui/cover";
import Image from "next/image";

export function Skills() {
    return (
        <div style={{ borderTop: "5px solid #eb5939", borderBottom: "5px solid #eb5939" }}>
            <div className="max-w-7xl mx-auto py-10 lg:pt-15 px-4 md:px-8 lg:px-10">
                <h2 className="text-3xl md:text-5xl mb-4 font-bold text-[#b7ab98] dark:text-white max-w-4xl">
                    <Cover className="text-[#b7ab98] hover:text-[#eb5939]">
                        My Technical Expertise
                    </Cover>
                </h2>

                <p className="text-[#b7ab98] dark:text-neutral-300 text-base md:text-lg max-w-240">
                    Over the years, I have developed a wide range of technical skills in frontend, backend, databases, DevOps, and collaboration tools. Here’s an overview of the technologies I work with to build scalable, high-performance, and maintainable applications.
                </p>
            </div>

            <BentoGrid className="max-w-6xl mx-auto p-4 pt-0 pb-10 lg:p-0 lg:pt-0 lg:pb-10">
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

const SkillGrid = ({ skills }: { skills: string[] }) => (
    <div className="flex flex-wrap justify-start items-center gap-3 w-auto h-auto">
        {skills.map((skill, i) => (
            <div key={i} className="flex justify-center items-center">
                <Image
                    height={0}
                    width={100}
                    src={`/skills/${skill}.svg`}
                    alt={skill}
                    className="h-7 w-auto rounded-[5px] border border-white/[0.2]"
                />
            </div>
        ))}
    </div>
);


const items = [
    {
        title: "Programming Languages",
        description: "Core languages I use to write clean and efficient code.",
        header: (
            <SkillGrid
                skills={[
                    "html",
                    "css",
                    "javascript",
                    "c",
                    "c++",
                    "typescript",
                    "python",
                ]}
            />
        ),
        icon: <IconClipboardCopy className="h-5 w-5 text-neutral-500" />,
    },
    {
        title: "Frontend Development",
        description: "Technologies for building responsive and interactive user interfaces.",
        header: (
            <SkillGrid
                skills={[
                    "reactjs",
                    "redux",
                    "bootstrap",
                    "tailwindcss",
                    "nextjs",
                    "chartjs",
                    "shadcnui",
                    "jquery",
                    "sass",
                    "formik",
                    "yup",
                ]}
            />
        ),
        icon: <IconDeviceLaptop className="h-5 w-5 text-neutral-500" />,
    },
    {
        title: "Backend, Databases & ORMs",
        description: "Frameworks, databases, and ORMs used to develop server applications.",
        header: (
            <SkillGrid
                skills={[
                    "nodejs",
                    "expressjs",
                    "restapis",
                    "mongodb",
                    "mongoose",
                    "firebase",
                    "postgresql",
                    "nodemailer",
                    "oracle",
                ]}
            />
        ),
        icon: <IconDatabase className="h-5 w-5 text-neutral-500" />,
    },
    {
        title: "Deployment, Version Control & API Development",
        description: "Tools and platforms for deployment, version control, and testing.",
        header: (
            <SkillGrid
                skills={[
                    "git",
                    "github",
                    "netlify",
                    "vercel",
                    "render",
                    "postman",
                    "swagger",
                    "thunderclient",
                ]}
            />
        ),
        icon: <IconServer className="h-5 w-5 text-neutral-500" />,
    },
    {
        title: "Auth, Design & Collaboration Tools",
        description: "Authentication, security, design, and collaboration tools I use daily.",
        header: (
            <SkillGrid
                skills={[
                    "auth0",
                    "firebaseauth",
                    "bcrypt",
                    "jwt",
                    "clerk",
                    "canva",
                    "notion",
                    "slack",
                ]}
            />
        ),
        icon: <IconShieldCheck className="h-5 w-5 text-neutral-500" />,
    },
    {
        title: "Build Tools & Package Managers",
        description: "Build systems, bundlers, and package managers that streamline development.",
        header: (
            <SkillGrid
                skills={[
                    "npm",
                    "yarn",
                    "pnpm",
                    "vite",
                    "babel",
                    "eslint",
                    "prettier",
                ]}
            />
        ),
        icon: <IconSettings className="h-5 w-5 text-neutral-500" />,
    }
];
