import DecryptedText from "../../effects/DecryptTextEffect.jsx";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import LookingForInternshipBadge from "../InternshipBadge.jsx"; // Import the new component

export default function IntroSection() {
    const navigate = useNavigate();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.6
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const titleVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                ease: "easeIn"
            }
        }
    };

    const buttonVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    return (
        <div className="relative  w-full overflow-hidden">
            {/* New badge component added here */}
            <LookingForInternshipBadge />

            {/* Main content */}
            <motion.div
                className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 md:px-12 font-lunasima text-center"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.h1
                    className="text-2xl sm:text-3xl md:text-4xl font-semibold text-textLight mb-2"
                    variants={titleVariants}
                >
                    Hello!
                </motion.h1>
                <motion.h2
                    className="text-3xl sm:text-4xl md:text-6xl font-semibold mb-6 text-secondary text-center"
                    variants={titleVariants}
                >
                    <span className="text-1xl sm:text-2xl md:text-3xl text-secondary">I’m </span>
                    <span className="font-bold bg-text_gradient bg-clip-text text-transparent inline-block">
                        <DecryptedText
                            text="Gianmarco Michelini"
                            speed={200}
                            maxIterations={10}
                            characters="*"
                            className="revealed inline-block"
                            parentClassName="all-letters inline-block"
                            encryptedClassName="encrypted"
                            animateOn="view"
                        />
                    </span>
                </motion.h2>
                <motion.p
                    className="text-lg sm:text-xl md:text-2xl font-semibold text-textLight mb-12 max-w-xl"
                    variants={itemVariants}
                >
                    Cybersecurity Student focused on secure system design
                </motion.p>
                <motion.div
                    className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full max-w-md sm:max-w-lg justify-center"
                    variants={containerVariants}
                >
                    <motion.button
                        className="w-full sm:w-auto px-8 py-2 sm:px-10 sm:py-2 rounded-2xl text-lg sm:text-xl font-semibold bg-btngradient_primary shadow-md transition-transform duration-300 ease-out hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-primary/30"
                        onClick={() => navigate("/portfolio/reach-me")}
                        style={{ color: "#f5f5f5" }}
                        variants={buttonVariants}
                        whileTap={{ scale: 0.95 }}
                    >
                        Contact Me!
                    </motion.button>

                    <motion.a
                        href="/portfolio/cv.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-8 py-4 sm:px-10 sm:py-2 rounded-2xl text-lg sm:text-xl font-semibold text-primary bg-btngradient_primary_inverted shadow-md transition-transform duration-300 ease-out hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-secondary/30 text-center"
                        style={{ color: "#f5f5f5" }}
                        variants={buttonVariants}
                        whileTap={{ scale: 0.95 }}
                    >
                        View CV
                    </motion.a>
                </motion.div>
            </motion.div>
            <ScrollCue/>
        </div>
    );
}


function ScrollCue() {
    const handleScroll = () => {
        const el = document.getElementById("education");
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <motion.div
            className="absolute bottom-6 w-full z-50 flex justify-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.4, duration: 1 }}
        >
            <motion.button
                onClick={handleScroll}
                className="relative w-16 h-16 rounded-full flex items-center justify-center cursor-pointer group focus:outline-none"
            >
                <motion.div
                    className="absolute inset-0 rounded-full bg-primary/20"
                    animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0] }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                <motion.div
                    className="relative p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 transition-colors duration-300 group-hover:text-primary group-hover:bg-primary/20"
                    animate={{ y: [0, 4, 0] }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <ChevronDown className="w-6 h-6" />
                </motion.div>
            </motion.button>
        </motion.div>
    );
}