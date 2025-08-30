import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { userInfo } from "../../personal-data.js";

function useMediaQuery(query) {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(query);
        if (media.matches !== matches) {
            setMatches(media.matches);
        }
        const listener = () => setMatches(media.matches);
        media.addEventListener("change", listener);
        return () => media.removeEventListener("change", listener);
    }, [matches, query]);

    return matches;
}

export default function LatestCreationsSection() {
    const videoRefs = useRef([]);
    const [playingIndex, setPlayingIndex] = useState(null);
    const [isSafari, setIsSafari] = useState(false);

    const isDesktop = useMediaQuery("(min-width: 1024px)"); // lg breakpoint

    useEffect(() => {
        const userAgent = navigator.userAgent;
        setIsSafari(userAgent.includes("Safari") && !userAgent.includes("Chrome"));
    }, []);

    const handleTogglePlayPause = (index) => {
        const video = videoRefs.current[index];
        if (!video) return;

        if (playingIndex !== null && playingIndex !== index) {
            const prevVideo = videoRefs.current[playingIndex];
            if (prevVideo) prevVideo.pause();
        }

        if (video.paused) {
            video.play().catch(console.error);
            setPlayingIndex(index);

            video.parentElement.scrollIntoView({
                behavior: "smooth",
                block: "center",
                inline: "center",
            });
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
                            mockupImageBorderClass,
                        },
                        index
                    ) => (
                        <motion.div
                            key={index}
                            className="p-4 sm:p-8 rounded-xl shadow-lg bg-background"
                            initial={{ opacity: 0, y: 50 }}
                            style={{ backgroundColor: "#F2F2F2" }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            {hasVideo && mockupVideo && (
                                <motion.div
                                    onClick={() => handleTogglePlayPause(index)}
                                    animate={
                                        playingIndex === index && isDesktop
                                            ? {
                                                width: "100%",
                                                height: isSafari ? "clamp(450px, 70vh, 800px)" : 600,
                                            }
                                            : {
                                                width: "100%",
                                                height: isDesktop ? 450 : 300,
                                            }
                                    }
                                    transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                                    className={`relative mx-auto rounded-xl overflow-hidden cursor-pointer ${mockupImageBorderClass}`}
                                    style={{
                                        WebkitMaskImage: "-webkit-radial-gradient(white, black)",
                                        WebkitMaskRepeat: "no-repeat",
                                        WebkitMaskComposite: "destination-in",
                                    }}
                                >
                                    <video
                                        ref={(el) => (videoRefs.current[index] = el)}
                                        src={mockupVideo}
                                        className={`absolute top-0 left-0 w-full h-full ${
                                            isSafari ? "object-contain" : "object-contain"
                                        }`}
                                        style={{
                                            maxHeight: isDesktop
                                                ? isSafari
                                                    ? "clamp(450px, 70vh, 800px)"
                                                    : "600px"
                                                : "300px",
                                            width: "100%",
                                        }}
                                        muted
                                        loop
                                        playsInline
                                        preload="auto"
                                    />
                                    <div className="absolute bottom-4 right-4 z-20">
                                        <button
                                            className="w-14 h-14 rounded-full flex items-center justify-center text-white text-3xl shadow-lg transition-all duration-300
                                                       backdrop-filter backdrop-blur-sm bg-gradient-to-br from-white/20 to-white/10 border border-white/30
                                                       hover:scale-110 hover:from-white/30 hover:to-white/20 hover:border-white/50 hover:shadow-2xl"
                                        >
                                            {playingIndex === index ? "⏸︎" : "▶︎"}
                                        </button>
                                    </div>
                                </motion.div>
                            )}

                            {hasImage && mockupImage && (
                                <div
                                    className={`relative flex justify-center items-center w-full h-[200px] sm:h-[300px] lg:h-[350px] rounded-xl overflow-hidden ${mockupImageBorderClass}`}
                                    style={{
                                        WebkitMaskImage: "-webkit-radial-gradient(white, black)",
                                        WebkitMaskRepeat: "no-repeat",
                                        WebkitMaskComposite: "destination-in",
                                    }}
                                >
                                    <img
                                        src={mockupImage}
                                        alt={title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            )}

                            <h3 className="text-xl sm:text-2xl font-semibold my-2">{title}</h3>
                            {description && (
                                <p className="text-sm sm:text-base text-textLight">{description}</p>
                            )}
                        </motion.div>
                    )
                )}
            </div>
        </section>
    );
}