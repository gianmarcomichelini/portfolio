import DecryptedText from "../../effects/DecryptTextEffect.jsx";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";

export default function IntroSection() {
    const navigate = useNavigate();
    const handleReachMe = () => navigate('/reach-me');

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.6 // Stagger the animation of child elements
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 }, // Start from below and fade in
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6, // Adjust duration as needed
                ease: "easeOut" // Use easeOut for a smooth deceleration
            }
        }
    };

    // For the title elements, we can use a slightly different ease if desired
    const titleVariants = {
        hidden: { opacity: 0 }, // Start from above and fade in
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1, // Longer duration for titles
                ease: "easeIn" // Can also use "easeIn" if you want it to start slow and speed up
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
        <motion.div
            className="min-h-screen flex flex-col items-center justify-center px-4 font-lunasima"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.h1
                className="text-5xl sm:text-4xl font-semibold text-textLight"
                variants={titleVariants}
            >
                Hello!
            </motion.h1>
            <motion.h2
                className="text-4xl sm:text-6xl font-semibold mb-4 text-secondary"
                variants={titleVariants}
            >
                <span className="text-4xl text-secondary">I’m </span>
                <span className="font-bold bg-text_gradient bg-clip-text text-transparent">
                    <DecryptedText
                        text="Gianmarco Michelini"
                        speed={200}
                        maxIterations={10}
                        characters="?"
                        className="revealed"
                        parentClassName="all-letters"
                        encryptedClassName="encrypted"
                    />
                </span>
            </motion.h2>
            <motion.p
                className="text-xl sm:text-2xl font-semibold text-textLight mb-8"
                variants={itemVariants}
            >
                Cybersecurity Specialist focused on secure system design
            </motion.p>
            <motion.div
                className="flex gap-6"
                variants={containerVariants} // Use containerVariants to stagger buttons as well
            >
                <motion.button
                    className="btn bg-btngradient_primary px-10 py-6 font-semibold rounded-xl text-primary text-xl"
                    onClick={handleReachMe}
                    variants={buttonVariants}
                >
                    Contact Me!
                </motion.button>
                <motion.button
                    className="btn bg-btngradient_primary_inverted px-10 py-6 font-semibold rounded-xl text-primary text-xl"
                    onClick={handleReachMe}
                    variants={buttonVariants}
                >
                    Download CV!
                </motion.button>
            </motion.div>
        </motion.div>
    );
}