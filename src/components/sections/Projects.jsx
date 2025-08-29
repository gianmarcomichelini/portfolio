import React, {useRef } from "react";
import { motion } from "framer-motion";
import { userInfo } from "../../personal-data.js";

export default function LatestCreationsSection() {
    const videoRefs = useRef([]);

    return (
        <section
            id="latest-creations"
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
                    Latest Creations
                </motion.h2>
                <motion.p
                    className="text-textLight text-lg mt-4"
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    (Hover to play demo)
                </motion.p>
            </div>

            <div className="max-w-4xl mx-auto flex flex-col space-y-10">
                {userInfo.recentActivitiesData.map(
                    (
                        {
                            title,
                            description,
                            hasVideo,
                            hasImage,
                            mockupVideo,
                            projectUrl,
                            mockupImage,
                            mockupImageBorderClass
                        },
                        index
                    ) => (
                        <motion.div
                            key={index}
                            className="p-6 sm:p-8 border border-secondary shadow-lg bg-background"
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            {hasVideo && mockupVideo && (
                                <div
                                    onMouseEnter={() => {
                                        if (videoRefs.current[index]) {
                                            videoRefs.current[index].play().catch(console.error);
                                        }
                                    }}
                                    onMouseLeave={() => {
                                        if (videoRefs.current[index]) {
                                            videoRefs.current[index].pause();
                                            videoRefs.current[index].currentTime = 0;
                                        }
                                    }}
                                    className={`flex rounded-xl overflow-hidden justify-center items-center w-full max-h-[500px] ${mockupImageBorderClass}`}
                                >
                                    <video
                                        ref={(el) => (videoRefs.current[index] = el)}
                                        src={mockupVideo}
                                        className="w-full h-auto object-contain"
                                        muted
                                        loop
                                        playsInline
                                        preload="metadata"
                                    />
                                </div>
                            )}

                            {hasImage && mockupImage && (
                                <div
                                    className={`flex rounded-xl overflow-hidden justify-center items-center w-full max-h-[300px] ${mockupImageBorderClass}`}
                                >
                                    <img
                                        src={mockupImage}
                                        alt={title}
                                        className="w-full h-auto object-contain"
                                    />
                                </div>
                            )}

                            <h3 className="text-2xl font-semibold my-2">{title}</h3>
                            {description && <p className="text-base text-textLight">{description}</p>}
                        </motion.div>
                    )
                )}
            </div>
        </section>
    );
}