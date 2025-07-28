import { motion } from "framer-motion";

function LoadingThreeDotsJumping() {
    const dotVariants = {
        jump: {
            y: -30,
            transition: {
                duration: 0.8,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
            },
        },
    };

    return (
        <div className="flex flex-col items-center gap-4">
            <motion.div
                animate="jump"
                transition={{ staggerChildren: 0.2 }}
                className="container"
            >
                <motion.div className="dot" variants={dotVariants} />
                <motion.div className="dot" variants={dotVariants} />
                <motion.div className="dot" variants={dotVariants} />
            </motion.div>

            <p className="text-primary text-2xl font-normal select-none font-lunasima">
                The portfolio is loading
            </p>

            <StyleSheet />
        </div>
    );
}

function StyleSheet() {
    return (
        <style>{`
            .container {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 10px;
            }

            .dot {
                width: 20px;
                height: 20px;
                border-radius: 50%;
                will-change: transform;
                background-image: linear-gradient(to bottom right, #4F46E5, #8B5CF6);
            }
        `}</style>
    );
}

export default LoadingThreeDotsJumping;