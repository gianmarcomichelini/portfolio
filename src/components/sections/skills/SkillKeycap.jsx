import React from 'react';
import { motion } from 'framer-motion';

const getTextColor = (hexColor) => {
    const r = parseInt(hexColor.slice(1, 3), 16);
    const g = parseInt(hexColor.slice(3, 5), 16);
    const b = parseInt(hexColor.slice(5, 7), 16);
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance > 0.6 ? '#1e1e1e' : '#fefefe';
};

const itemVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.9 },
    show: {
        y: 0,
        opacity: 1,
        scale: 1,
        transition: { type: 'spring', stiffness: 300, damping: 25 }
    },
    hover: {
        y: -4,
        scale: 1.04,
        boxShadow: `
            0 6px 14px rgba(0, 0, 0, 0.35),
            0 0 8px rgba(255,255,255,0.05)
        `,
        transition: { type: 'spring', stiffness: 400, damping: 30 }
    },
    tap: {
        y: 2,
        scale: 0.96,
        boxShadow: `inset 0 3px 6px rgba(0,0,0,0.5)`,
        transition: { type: 'spring', stiffness: 500, damping: 35 }
    },
};

const SkillKeycap = ({ skill }) => {
    return (
        <motion.div
            className="relative w-24 min-h-20 flex flex-col items-center justify-center px-3 py-3 cursor-pointer rounded-xl overflow-hidden"
            style={{
                backgroundColor: skill.color,
                border: '1px solid rgba(255,255,255,0.15)',
                boxShadow: `
                    0 4px 6px rgba(0,0,0,0.2),
                    inset 0 1px 2px rgba(255,255,255,0.1)
                `,
                backdropFilter: 'blur(6px)',
                WebkitBackdropFilter: 'blur(6px)'
            }}
            variants={itemVariants}
            whileTap="tap"
            whileHover="hover"
        >
            {/* Glow Overlay */}
            <div
                className="absolute inset-0 rounded-xl"
                style={{
                    background: `radial-gradient(circle at top left, rgba(255,255,255,0.12), transparent 70%)`,
                    pointerEvents: 'none',
                    zIndex: 1
                }}
            />

            {/* Logo */}
            {skill.logo && (
                <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-9 h-9 object-contain z-10 mb-0.5"
                    style={{
                        filter: (skill.color === "#181717" || skill.color === "#000000") ? 'invert(1)' : 'none'
                    }}
                />
            )}

            {/* Label */}
            <span
                className="text-xs font-semibold text-center z-10 tracking-wide"
                style={{ color: getTextColor(skill.color) }}
            >
                {skill.name}
            </span>
        </motion.div>
    );
};

export default SkillKeycap;