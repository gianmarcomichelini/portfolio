import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { userInfo } from "../../personal-data.js";

export default function LatestCreationsSection() {
    const videoRefs = useRef([]);
    const [playingIndex, setPlayingIndex] = useState(null);

    const handleTogglePlayPause = (index) => {
        const video = videoRefs.current[index];
        if (!video) return;

        // Pause the current video and play the new one
        if (playingIndex !== null && playingIndex !== index) {
            const prevVideo = videoRefs.current[playingIndex];
            if (prevVideo) {
                prevVideo.pause();
            }
        }

        // Play or pause the clicked video
        if (video.paused) {
            video.play().catch(console.error);
            setPlayingIndex(index);
        } else {
            video.pause();
            setPlayingIndex(null);
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
                    (Click to play/pause)
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
                                    {/* Play/Pause Button - Now "Cooler" */}
                                    <div className="absolute bottom-4 right-4 z-10">
                                        <button
                                            onClick={() => handleTogglePlayPause(index)}
                                            className="w-14 h-14 rounded-full flex items-center justify-center text-white text-3xl shadow-lg transition-all duration-300
                                                       backdrop-filter backdrop-blur-sm bg-gradient-to-br from-white/20 to-white/10 border border-white/30
                                                       hover:scale-110 hover:from-white/30 hover:to-white/20 hover:border-white/50 hover:shadow-2xl"
                                        >
                                            {playingIndex === index ? "⏸︎" : "▶︎"}
                                        </button>
                                    </div>
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