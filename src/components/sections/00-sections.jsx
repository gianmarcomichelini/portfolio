import React from "react";
import IntroSection from "./01-introduction.jsx";
import EducationSection from "./education.jsx";


export default function HeroText() {
    return (
        <div className="min-h-screen bg-background text-primary">
            <IntroSection />
            <EducationSection />
        </div>
    );
}


