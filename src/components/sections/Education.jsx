import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { userInfo } from "../../personal-data.js";

const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: "easeOut" },
    },
};

export default function EducationSection() {
    const educationData = userInfo.educationData;
    const timelineContainerRef = useRef(null);
    const [timelineHeight, setTimelineHeight] = useState(0);

    useEffect(() => {
        if (timelineContainerRef.current) {
            setTimelineHeight(timelineContainerRef.current.scrollHeight);
        }
    }, [educationData]);

    return (
        <section
            id={"education"}
            className="relative py-24 px-4 sm:px-12 font-lunasima bg-background overflow-hidden"
        >
            <div className="relative z-10 max-w-7xl mx-auto text-center mb-14">
                <motion.h2
                    className="text-5xl font-extrabold text-transparent bg-clip-text bg-text_gradient"
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Education
                </motion.h2>
            </div>

            <div className="relative max-w-4xl mx-auto">
                <div className="relative" style={{ minHeight: `${timelineHeight}px` }}>
                    <div
                        className="hidden sm:block absolute left-1/2 top-0 -translate-x-1/2 w-[3px] bg-secondary rounded z-0"
                        style={{ height: `${timelineHeight}px` }}
                    />

                    <div ref={timelineContainerRef} className="flex flex-col space-y-20 relative">
                        {educationData.map((item, index) => {
                            if (!item || (!item.year && !item.title && !item.institution && !item.description && !item.location)) {
                                return null;
                            }

                            const { year, title, institution, description, location } = item;
                            const isLeft = index % 2 === 0;
                            const isLast = index === educationData.length - 1;

                            const sentences = description
                                ? description.split(/\n/).filter(Boolean)
                                : [];

                            return (
                                <div key={index} className="relative w-full">
                                    <motion.div
                                        className={`
                                            relative z-10 bg-background border border-secondary rounded-xl shadow-lg p-6 sm:p-8
                                            w-full sm:w-[calc(50%-24px)]
                                            ${isLeft ? "sm:ml-0 sm:mr-auto sm:text-right" : "sm:mr-0 sm:ml-auto sm:text-left"}
                                        `}
                                        variants={itemVariants}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.5 }}
                                    >
                                        <p className="text-sm text-secondary font-mono">{year}</p>
                                        <p className="text-md text-secondary italic mb-2">{location}</p>
                                        <p className="text-2xl font-semibold mb-1">
                                            <span className="bg-gradient-to-br from-gradientTextStart to-gradientTextEnd bg-clip-text text-transparent">
                                                {title}
                                            </span>
                                        </p>
                                        <h4 className="text-xl font-medium mb-4">{institution}</h4>
                                        {sentences.length > 0 && (
                                            <ul className="text-base text-textLight leading-snug list-none p-0 m-0">
                                                {sentences.map((sentence, sIndex) => (
                                                    <li key={sIndex}>{sentence.trim()}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </motion.div>

                                    {!isLast && (
                                        <div className="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-gradient-to-br from-gradientTextStart to-gradientTextEnd rounded-full border-4 border-background z-20" />
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    {educationData.length > 0 && (
                        <div
                            className="hidden sm:block absolute left-1/2 -translate-x-1/2 border-l-[3px] border-dashed border-secondary"
                            style={{
                                top: timelineHeight + 3 + "px",
                                height: "60px",
                            }}
                        />
                    )}
                </div>
            </div>
        </section>
    );
}