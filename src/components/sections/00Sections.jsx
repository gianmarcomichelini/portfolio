import React from "react";
import IntroSection from "./01Introduction.jsx";
import EducationSection from "./Education.jsx";
import SkillsSection from "./skills/Skills.jsx";
import RecentActivitiesSection from "./Projects.jsx";



export default function HeroText() {
    return (
        <div className="min-h-screen bg-background text-primary">
            <IntroSection />
            <EducationSection />
            <SkillsSection />
            <RecentActivitiesSection />
        </div>
    );
}


