import React from "react";
import { motion } from "framer-motion";
import { userInfo } from "../../../personal-data.js";
import SkillKeycap from "./SkillKeycap.jsx";

export default function SkillsSection() {
    const groupedSkills = userInfo.skillsData || {};


    const containerVariants = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.015,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        show: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.3,
                ease: "easeOut",
            },
        },
    };

    return (
        <section className="relative py-24 px-6 sm:px-12 font-lunasima bg-background overflow-hidden">
            {/* soft radial glow */}
            <div
                className="absolute inset-0 pointer-events-none opacity-10 blur-3xl"
                style={{
                    background: 'radial-gradient(circle at 40% 30%, #4F46E533 0%, transparent 70%)'
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto text-center mb-14">
                <motion.h2
                    className="text-5xl font-extrabold text-transparent bg-clip-text bg-text_gradient"
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Skills
                </motion.h2>
            </div>

            <div className={`relative z-10 grid gap-y-10`}>
                {Object.entries(groupedSkills).map(([section, skills]) => (
                    <motion.div
                        key={section}
                        className="col-span-full w-full"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <motion.h3
                            className="text-lg font-semibold text-left text-textLight mb-3 px-2 tracking-wide uppercase"
                            initial={{ opacity: 0, y: -5 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            viewport={{ once: true }}
                        >
                            {section}
                        </motion.h3>

                        <div
                            className="grid grid-cols-[repeat(auto-fit,minmax(6rem,6rem))] gap-x-5 gap-y-6 justify-items-left">
                            {skills.map(skill => (
                                <motion.div key={skill.name} variants={itemVariants}>
                                    <SkillKeycap skill={skill}/>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}