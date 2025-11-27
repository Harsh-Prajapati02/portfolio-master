import { Cover } from "@/components/ui/cover";
import { cn } from "@/lib/utils";
import {
    IconBrandReact,
    IconBrandNodejs,
    IconBrandMongodb,
    IconApi,
    IconLock,
    IconBrandGit,
    IconCloud,
    IconTools,
} from "@tabler/icons-react";

export function Services() {
    const features = [
        // 1️⃣ Frontend Development
        {
            title: "Frontend Development",
            description:
                "Building modern, responsive, and user-friendly interfaces using React, Next.js, Tailwind CSS, ShadCN UI, Formik, and Yup.",
            icon: <IconBrandReact />,
        },

        // 2️⃣ Backend Development
        {
            title: "Backend Development",
            description:
                "Creating secure and efficient server-side applications using Node.js, Express.js, Mongoose, Bcrypt, and Nodemailer.",
            icon: <IconBrandNodejs />,
        },

        // 3️⃣ Database Design & Management
        {
            title: "Database Design & Management",
            description:
                "Designing, modeling, and managing scalable databases using MongoDB and Mongoose ORM.",
            icon: <IconBrandMongodb />,
        },

        // 4️⃣ API Development & Integration
        {
            title: "API Development & Integration",
            description:
                "Developing RESTful APIs and integrating third-party services for smooth communication between systems.",
            icon: <IconApi />,
        },

        // 5️⃣ Authentication & Security
        {
            title: "Authentication & Security",
            description:
                "Implementing JWT auth, password hashing, role-based access, and secure validation techniques.",
            icon: <IconLock />,
        },

        // 6️⃣ Version Control & DevOps
        {
            title: "Version Control & DevOps",
            description:
                "Using Git/GitHub, CI/CD pipelines, and environment workflows to keep projects stable and deploy-ready.",
            icon: <IconBrandGit />,
        },

        // 7️⃣ Deployment & Production Setup
        {
            title: "Deployment & Production Setup",
            description:
                "Deploying full-stack apps using Vercel, Netlify, Render, Railway, or VPS for reliable production hosting.",
            icon: <IconCloud />,
        },

        // 8️⃣ Performance Optimization
        {
            title: "Performance Optimization",
            description:
                "Improving speed, caching, SEO, and overall performance to deliver fast and optimized user experiences.",
            icon: <IconTools />,
        },
    ];

    return (
        <>
            <div style={{ borderTop: "5px solid #eb5939", borderBottom: "5px solid #eb5939" }}>
                <div className="max-w-7xl mx-auto py-10 pt-15 px-4 md:px-8 lg:px-10">
                    <h2 className="text-2xl md:text-5xl mb-4 text-[#b7ab98] dark:text-white max-w-4xl">
                        <Cover className="text-[#b7ab98] hover:text-[#eb5939]">My Technical Services</Cover>
                    </h2>

                    <p className="text-[#b7ab98] dark:text-neutral-300 text-sm md:text-base max-w-sm">
                        A quick overview of the services I provide as a full-stack developer.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 pt-0 max-w-6xl mx-auto">
                    {features.map((feature, index) => (
                        <Feature key={feature.title} {...feature} index={index} />
                    ))}
                </div>
            </div>
        </>
    );
}

const Feature = ({
    title,
    description,
    icon,
    index,
}: {
    title: string;
    description: string;
    icon: React.ReactNode;
    index: number;
}) => {
    return (
        <div
            className={cn(
                "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800",
                (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
                index < 4 && "lg:border-b dark:border-neutral-800"
            )}
        >
            {index < 4 && (
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-800 dark:from-neutral-800 to-transparent pointer-events-none" />
            )}
            {index >= 4 && (
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-800 dark:from-neutral-800 to-transparent pointer-events-none" />
            )}

            <div className="mb-4 relative z-10 px-10 text-[#b7ab98] dark:text-neutral-400">
                {icon}
            </div>

            <div className="text-lg font-bold mb-2 relative z-10 px-10">
                <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-[#EB5939] transition-all duration-200 origin-center" />
                <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-[#b7ab98] group-hover/feature:text-[#EB5939] dark:text-neutral-100">
                    {title}
                </span>
            </div>

            <p className="text-sm text-neutral-400 dark:text-neutral-300 max-w-xs relative z-10 px-10 group-hover/feature:text-[#b7ab98]">
                {description}
            </p>
        </div>
    );
};
