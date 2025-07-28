import React from "react";
import {motion} from "framer-motion";

const educationData = [
    {
        year: "September 2024 - Present",
        location: "Turin, Italy",
        title: "Master’s Degree in Cybersecurity",
        institution: "Polytechnic University of Turin",
        description: "Specializing in network security, vulnerability assessment, and the implementation of defensive strategies for secure system design."
    },
    {
        year: "September 2021 - September 2024",
        location: "Modena, Italy",
        title: "Bachelor’s Degree in Computer Engineering",
        institution: "University of Modena and Reggio Emilia",
        description: "Focused on cybersecurity, secure system design, and network protocols."
    },
    {
        year: "September 2019 - May 2020",
        location: "Soest, Germany",
        title: "International Exchange Program",
        institution: "Conrad Von Soest Gymnasium",
        description: "Participated in an international exchange program to enhance cultural and academic experience."
    },
    {
        year: "September 2016 - June 2021",
        location: "Modena, Italy",
        title: "High School Diploma",
        institution: "L.S.S.A. Fermo Corni",
        description: "Specialized in Applied Sciences with focus on Information Technology and Telecommunications."
    }
];

const itemVariants = {
    hidden: {opacity: 0, x: -50}, // Initial state: slightly to the left, invisible
    visible: {
        opacity: 1,
        x: 0, // Final state: at its natural position, visible
        transition: {
            duration: 0.8, // Slightly longer duration for a smoother feel
            ease: "easeOut"
        }
    }
};

export default function EducationSection() {
    return (
        <div className="bg-background py-16 px-4 sm:px-0 font-lunasima">
            <h2 className="text-primary text-4xl font-bold text-center mb-16">My Journey</h2>

            <div className="relative max-w-4xl mx-auto"> {/* Increased max-width for better spacing */}
                {/* Timeline vertical line */}
                <div className="absolute left-1/2 top-0 -translate-x-1/2 w-1 bg-secondary rounded h-full z-0"></div>

                <div className="flex flex-col space-y-20"> {/* Increased space-y for more vertical separation */}
                    {educationData.map(({year, title, institution, description, location}, index) => {
                        const isLeft = index % 2 === 0;

                        return (
                            <div
                                key={index}
                                className={`flex items-center w-full relative`} // Make this div relative for positioning the circle
                            >
                                {/* The actual content card */}
                                <motion.div
                                    className={`bg-background p-8 rounded-xl shadow-lg border border-secondary max-w-sm w-full font-lunasima z-10
                                    ${isLeft ? "mr-auto text-right" : "ml-auto text-left"}
                                    ${!isLeft && "sm:order-2"}
                                    ${isLeft ? "sm:pr-12" : "sm:pl-12"}
                                  `}
                                    variants={itemVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{once: true, amount: 0.5}}
                                >
                                    <p className="text-sm text-secondary font-mono">{year}</p>
                                    <p className="text-sm text-secondary italic mb-2">{location}</p>

                                    <p className="text-2xl font-semibold mb-1">
                                          <span className="bg-gradient-to-br from-gradientTextStart to-gradientTextEnd bg-clip-text text-transparent">
                                            {title}
                                          </span>
                                    </p>

                                    <h4 className="text-xl font-medium mb-4 bg-clip-text">
                                        {institution}
                                    </h4>

                                    <p className="text-base text-textLight leading-relaxed">{description}</p>
                                </motion.div>

                                {/* Timeline Circle - positioned directly at the center line */}
                                <div
                                    className={`absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-gradient-to-br from-gradientTextStart to-gradientTextEnd rounded-full border-4 border-background z-20
                                        left-1/2 -translate-x-1/2
                                    `}
                                ></div>

                                {/* Placeholder to push the content to the correct side on larger screens */}
                                <div
                                    className={`hidden sm:block absolute top-0 w-1/2 h-full ${isLeft ? "right-0" : "left-0"}`}></div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}