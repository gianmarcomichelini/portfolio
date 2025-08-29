"use strict";

const imagePath = "/portfolio/skills_logos/";

const userInfo = {
    nameAndSurname: {
        firstName: 'Gianmarco',
        lastName: 'Michelini'
    },

    educationData: [
        {
            year: "September 2024 - Present",
            location: "Turin, Italy",
            title: "Master’s Degree in Cybersecurity",
            institution: "Polytechnic University of Turin",
            description: "Specializing in network security,\n vulnerability assessment, and the implementation of defensive strategies\n for secure system design."
        },
        {
            year: "September 2021 - September 2024",
            location: "Modena, Italy",
            title: "Bachelor’s Degree in Computer Engineering",
            institution: "University of Modena and Reggio Emilia",
            description: ""
        },
        {
            year: "September 2019 - May 2020",
            location: "Soest, Germany",
            title: "International Exchange Program",
            institution: "Conrad Von Soest Gymnasium",
            description: ""
        },
        {
            year: "September 2016 - June 2021",
            location: "Modena, Italy",
            title: "High School Diploma",
            institution: "L.S.S.A. Fermo Corni",
            description: ""
        },
        {}  // terminator
    ],

    skillsData: {
        "Languages & Markup": [
            {name: "C", logo: `${imagePath}c.svg`, color: "#A8B9CC"},
            {name: "Python", logo: `${imagePath}python.svg`, color: "#3776AB"},
            {name: "JavaScript", logo: `${imagePath}javascript.svg`, color: "#F7DF1E"},
            {name: "Bash", logo: `${imagePath}bash.svg`, color: "#4EAA25"},
            {name: "Java", logo: `${imagePath}java.svg`, color: "#006394"},
            {name: "HTML5", logo: `${imagePath}html5.svg`, color: "#E44D26"},
            {name: "CSS", logo: `${imagePath}css.svg`, color: "#264DE4"},
            {name: "LaTeX", logo: `${imagePath}latex.svg`, color: "#008080"}
        ],
        "Frameworks & Libraries": [
            {name: "React", logo: `${imagePath}react.svg`, color: "#61DAFB"},
            {name: "Node.js", logo: `${imagePath}nodedotjs.svg`, color: "#339933"},
            {name: "Next.js", logo: `${imagePath}nextdotjs.svg`, color: "#000000"},
            {name: "FastAPI", logo: `${imagePath}fastapi.svg`, color: "#009688"},
            {name: "Django", logo: `${imagePath}django.svg`, color: "#092E20"},
            {name: "Express", logo: `${imagePath}express.svg`, color: "#404D59"},
        ],
        "Tools & DevOps": [
            {name: "Git", logo: `${imagePath}git.svg`, color: "#F05032"},
            {name: "GitHub", logo: `${imagePath}github.svg`, color: "#181717"},
            {name: "Docker", logo: `${imagePath}docker.svg`, color: "#0db7ed"},
            {name: "SQLite", logo: `${imagePath}sqlite.svg`, color: "#003B57"},
            {name: "Wireshark", logo: `${imagePath}wireshark.svg`, color: "#1679A7"},
            {name: "Vite", logo: `${imagePath}vite.svg`, color: "#646CFF"},
        ],
        "IDEs & Editors": [
            {name: "IntelliJ IDEA", logo: `${imagePath}intellijidea.svg`, color: "#000000"},
            {name: "PyCharm", logo: `${imagePath}pycharm.svg`, color: "#32C3FA"},
            {name: "CLion", logo: `${imagePath}clion.svg`, color: "#2F5DDE"},
            {name: "WebStorm", logo: `${imagePath}webstorm.svg`, color: "#2489CA"},
            {name: "vscode", logo: `${imagePath}vscode.svg`, color: "#007ACC"},
        ],
        "Operating Systems": [
            {name: "Linux", logo: `${imagePath}linux.svg`, color: "#FCC624"},
            {name: "Windows", logo: `${imagePath}windows.svg`, color: "#0078D6"},
            {name: "macOS", logo: `${imagePath}macos.svg`, color: "#666666"},
        ],
        "Productivity": [
            {name: "Notion", logo: `${imagePath}notion.svg`, color: "#000000"},
            {name: "Figma", logo: `${imagePath}figma.svg`, color: "#F24E1E"},
            {name: "Word", logo: `${imagePath}word.svg`, color: "#2B579A"},
            {name: "Excel", logo: `${imagePath}excel.svg`, color: "#217346"},
            {name: "PowerPoint", logo: `${imagePath}powerpoint.svg`, color: "#B7472A"}
        ],
        "Audio Software": [
            {name: "FL Studio", logo: `${imagePath}flstudio.png`, color: "#F57F17"},
            {name: "Ableton", logo: `${imagePath}ableton.svg`, color: "#000000"},
            {name: "Logic Pro", logo: `${imagePath}logicprox.webp`, color: "#1D1D1F"}
        ]
    },

    recentActivitiesData: [
        {
            title: "reorder",
            description: "Reorder is full-stack web application built with React, Node.js, and Express, Reorder enables users to browse menus, customize orders, and manage past orders. Security is a core focus: accounts are protected with hashed & salted passwords, and critical actions such as deleting orders require Two-Factor Authentication (TOTP). The system enforces role-based access, input validation, and dependency checks to prevent unauthorized or malformed operations. Designed with defense-in-depth principles, Reorder demonstrates secure full-stack development practices for real-world applications.",
            hasVideo: true,
            hasImage: false,
            mockupVideo: "/portfolio/projects/reorder-HD-1080p.mp4",
            mockupImage: "",
            projectUrl: "https://github.com/gianmarcomichelini/reorder",
            mockupImageBorderClass: 'rounded-[10px]',
        },


        {
            title: "Wi-Fi and GNSS reports",
            description: "A two-part research project focused on practical network and security analysis. My team and I performed a Wi-Fi goodput study using professional tools like iperf3 and Wireshark to quantify network performance degradation due to congestion and protocol overhead. We also conducted a GNSS security analysis, processing raw satellite data to assess positioning accuracy under real-world conditions, including simulating a spoofing attack to demonstrate critical vulnerabilities and the importance of signal integrity in navigation systems.",
            hasVideo: false,
            hasImage: true,
            mockupVideo: "",
            mockupImage: "/portfolio/projects/mockup-reports-gnss-wifi.png",
            projectUrl: "",
            mockupImageBorderClass: 'rounded-[10px]',
        },

        {
            title: "Tatum24",
            description: "Tatum24 is a full-stack web application built with Django that enables developers to share, discover, bookmark, and rate code snippets securely. Security is integrated at every layer: user accounts are protected with hashed and salted passwords, authentication leverages Django’s robust system, and sensitive operations such as snippet modification are restricted to authenticated users. The platform enforces role-based access, prevents unauthorized edits, and ensures data integrity across snippets, bookmarks, and ratings. Its recommendation engine respects user privacy while providing personalized content based on behavior and social proof.",
            hasVideo: true,
            hasImage: false,
            mockupVideo: "/portfolio/projects/tatum-HD-1080p.mp4",
            mockupImage: "",
            projectUrl: "https://github.com/gianmarcomichelini/Tatum24",
            mockupImageBorderClass: 'rounded-[10px]',
        },
    ],

};
export {userInfo};