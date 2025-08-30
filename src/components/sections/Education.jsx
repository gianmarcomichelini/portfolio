import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { userInfo } from "../../personal-data.js";


function renderWithLineBreaks(text) {
    if (!text) return null;
    return text.split("\n").map((line, i) => (
        <React.Fragment key={i}>
            {line}
            <br />
        </React.Fragment>
    ));
}

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

                    {/* Desktop-only centered timeline line */}
                    <div
                        className="hidden sm:block absolute left-1/2 top-0 -translate-x-1/2 w-[3px] bg-secondary rounded z-0"
                        style={{ height: `${timelineHeight}px` }}
                    />

                    {/* Mobile and Desktop left-aligned timeline line */}
                    <div
                        className="sm:hidden absolute left-4 top-0 w-[2px] bg-secondary rounded z-0"
                        style={{ height: `${timelineHeight}px` }}
                    />

                    <div
                        ref={timelineContainerRef}
                        className="flex flex-col space-y-20 relative"
                    >
                        {educationData.map((item, index) => {
                            if (
                                !item ||
                                (!item.year &&
                                    !item.title &&
                                    !item.institution &&
                                    !item.description &&
                                    !item.location)
                            ) {
                                return null;
                            }

                            const { year, title, institution, description, location } = item;
                            const isLeft = index % 2 === 0;
                            const sentences = description
                                ? description.split(/\n/).filter(Boolean)
                                : [];

                            return (
                                <div
                                    key={index}
                                    className={`relative w-full ${isLeft ? 'sm:pr-12' : 'sm:pl-12'} px-8 sm:px-0`}
                                >
                                    <div className="absolute top-1/2 -translate-y-1/2 left-[12px] sm:left-1/2 sm:-translate-x-1/2 w-4 h-4 bg-gradient-to-br from-gradientTextStart to-gradientTextEnd rounded-full border-2 border-background z-20" />

                                    <motion.div
                                        className={`relative z-10 p-4 rounded-xl border w-full sm:w-[calc(50%-24px)] 
    ${isLeft ? "sm:ml-0 sm:mr-auto sm:text-right" : "sm:mr-0 sm:ml-auto sm:text-left"}`}
                                        initial={{ opacity: 0, x: isLeft ? -50 : 50, scale: 0.9, boxShadow: "0px 0px 0px rgba(0,0,0,0)" }}
                                        whileInView={{
                                            opacity: 1,
                                            x: 0,
                                            scale: 1,
                                            boxShadow: "0px 20px 50px rgba(0,0,0,0.15)",
                                            transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }
                                        }}
                                        whileHover={{
                                            scale: 1.05,
                                            boxShadow: "0px 25px 60px rgba(79, 70, 229, 0.3)",
                                            transition: { duration: 0.3, type: "spring", stiffness: 300 }
                                        }}
                                    >
                                        <p className="text-sm text-secondary font-mono">{year}</p>
                                        {location && <p className="text-sm text-secondary font-mono">{location}</p>}
                                        <p className="text-2xl font-semibold mt-1 mb-2">
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
                                </div>
                            );
                        })}
                    </div>

                    {educationData.length > 0 && (
                        <>
                            {/* Desktop-only dashed line */}
                            <div
                                className="hidden sm:block absolute left-1/2 -translate-x-1/2 border-l-[3px] border-dashed border-secondary"
                                style={{
                                    top: timelineHeight + 3 + "px",
                                    height: "60px",
                                }}
                            />
                            {/* Mobile-only dashed line */}
                            <div
                                className="sm:hidden absolute left-4 border-l-[2px] border-dashed border-secondary"
                                style={{
                                    top: timelineHeight + 3 + "px",
                                    height: "60px",
                                }}
                            />
                        </>
                    )}
                </div>
            </div>
        </section>
    );
}