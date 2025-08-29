import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";

export default function LookingForInternshipBadge() {
    return (
        <Link to="/portfolio/reach-me">
            <motion.div
                className="absolute top-8 right-8 z-20"
                initial={{ opacity: 0, x: 50, rotate: 10 }}
                animate={{ opacity: 1, x: 0, rotate: 0 }}
                transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
            >
                <motion.div
                    className="relative px-5 py-2 rounded-lg shadow-xl overflow-hidden cursor-pointer"
                    style={{
                        background: 'linear-gradient(to bottom right, #f97316, #fb7185)', // new gradient
                        boxShadow: '0 0 15px rgba(251,113,133,0.5), 0 0 30px rgba(249,115,22,0.4)'
                    }}
                    whileHover={{ scale: 1.05, rotate: -2, boxShadow: '0 0 20px rgba(251,113,133,0.8), 0 0 40px rgba(249,115,22,0.7)' }}
                    whileTap={{ scale: 0.95 }}
                    animate={{
                        rotateZ: [0, 1, -1, 0],
                        y: [0, -3, 0], // subtle floating
                        transition: {
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }
                    }}
                >
                    {/* Inner glow/pulse effect */}
                    <motion.span
                        className="absolute inset-0 rounded-lg"
                        style={{ filter: 'blur(8px)' }}
                        animate={{ scale: [1, 1.2, 1], opacity: [0.6, 0.2, 0.6] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    />

                    <span
                        className="relative z-10 text-white font-bold text-sm sm:text-base tracking-wider"
                        style={{ textShadow: '0px 2px 4px rgba(0,0,0,0.3)' }}
                    >
                    Looking for an Internship in Cybersecurity
                </span>
                </motion.div>
            </motion.div>
        </Link>
    );
}