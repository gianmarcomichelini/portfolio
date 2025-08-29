import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { userInfo } from "../../personal-data.js";

export default function LatestCreationsSection() {
    const videoRefs = useRef([]);
    const [playingIndex, setPlayingIndex] = useState(null);

    const handlePlayPause = (index, isHover = false) => {
        const video = videoRefs.current[index];
        if (!video) return;

        // Desktop hover: only play on hover, pause on leave if not manually playing
        if (isHover) {
            video.play().catch(console.error);
            return;
        }

        // Mobile tap or click
        if (playingIndex === index) {
            video.pause();
            setPlayingIndex(null);
        } else {
            // Pause previously playing video
            if (playingIndex !== null) {
                const prevVideo = videoRefs.current[playingIndex];
                if (prevVideo) {
                    prevVideo.pause();
                    prevVideo.currentTime = 0;
                }
            }
            video.play().catch(console.error);
            setPlayingIndex(index);
        }
    };

    return (
        <section
            id="latest-creations"
            className="relative py-16 sm:py-24 px-4 sm:px-12 font-lunasima bg-background overflow-hidden"
        >
            <div className="relative z-10 max-w-7xl mx-auto text-center mb-10 sm:mb-14">
                <motion.h2
                    className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-text_gradient"
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Latest Creations
                </motion.h2>
                <motion.p
                    className="text-textLight text-base sm:text-lg mt-2 sm:mt-4"
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    (Tap to play on mobile, hover on desktop)
                </motion.p>
            </div>

            <div className="max-w-4xl mx-auto flex flex-col space-y-8 sm:space-y-10">
                {userInfo.recentActivitiesData.map(
                    (
                        {
                            title,
                            description,
                            hasVideo,
                            hasImage,
                            mockupVideo,
                            mockupImage,
                            mockupImageBorderClass
                        },
                        index
                    ) => (
                        <motion.div
                            key={index}
                            className="p-4 sm:p-8 border border-secondary shadow-lg bg-background"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            {hasVideo && mockupVideo && (
                                <div
                                    onMouseEnter={() => handlePlayPause(index, true)}
                                    onMouseLeave={() => {
                                        if (playingIndex !== index) {
                                            const video = videoRefs.current[index];
                                            if (video) {
                                                video.pause();
                                                video.currentTime = 0;
                                            }
                                        }
                                    }}
                                    onClick={() => handlePlayPause(index)}
                                    className={`relative flex justify-center items-center w-full h-[200px] sm:h-[300px] lg:h-[450px] rounded-xl overflow-hidden cursor-pointer ${mockupImageBorderClass}`}
                                >
                                    <video
                                        ref={(el) => (videoRefs.current[index] = el)}
                                        src={mockupVideo}
                                        className="w-full h-full sm:object-cover object-contain"
                                        muted
                                        loop
                                        playsInline
                                        preload="metadata"
                                    />
                                    {playingIndex !== index && (
                                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 sm:hidden">
                                            <span className="text-white text-5xl">▶</span>
                                        </div>
                                    )}
                                </div>
                            )}

                            {hasImage && mockupImage && (
                                <div
                                    className={`relative flex justify-center items-center w-full h-[200px] sm:h-[300px] lg:h-[350px] rounded-xl overflow-hidden ${mockupImageBorderClass}`}
                                >


                                    <img
                                        src={mockupImage}
                                        alt={title}
                                        className="w-full h-full sm:object-cover object-contain"
                                    />
                                </div>
                            )}

                            <h3 className="text-xl sm:text-2xl font-semibold my-2">{title}</h3>
                            {description && <p className="text-sm sm:text-base text-textLight">{description}</p>}
                        </motion.div>
                    )
                )}
            </div>
        </section>
    );
}