export const portfolioData = {
    skills: {
        languages: ["HTML", "CSS", "JavaScript", "React", "Tailwind", "Git", "API Integration"],
        softSkills: ["Responsive Design", "Performance Optimization", "UX Design", "Behavioral Logic"]
    },

    projects: [
        {
            image: '/assets/Favdex.webp',
            name: "Favdex",
            description: `Most Pokédex sites are boring data dumps. I built Favdex to be visual-first — shiny toggles, sprite styles, audio,
             and a berry-feeding mechanic to keep users coming back daily because I wanted my work to be used daily,
             not abandoned. First project learning React + Tailwind + API integration.`,
            techStack: ['React', 'Tailwind'],
            github: "https://github.com/Bijay-Codes/Favdex",
            live: "https://favdex.vercel.app",
            caseStudy: 'https://github.com/Bijay-Codes/Favdex/blob/main/case-study.md'
        },
        {
            image: '/assets/tracker.webp',
            name: "Track talk",
            description: `Most expense trackers just log your spending.
             I built Track Talk to force accountability — a 24-hour lock makes expenses permanent,
             and a roasting engine tracks edit/delete ratios to catch you hiding or lying to yourself. Casual spending gets a nag. Suspicious behavior gets roasted.
             The message: own what you spent, nobody's watching you.`,
            techStack: ['HTML', 'CSS', 'Javascript'],
            github: "https://github.com/Bijay-Codes/Expenses-Tracker",
            live: "https://track-talker.vercel.app",
            caseStudy: 'https://github.com/Bijay-Codes/Expenses-Tracker/blob/main/case-study.md'
        },
    ],

    training: {
        place: "Rourkela Steel Plant",
        duration: "1 Month",
        type: "Observation & Exposure Program",
        description: "Completed a 1-month observation program at Rourkela Steel Plant (SAIL) — one of India's largest steel producers. Got exposure to enterprise-scale infrastructure, network setups, and industrial computing environments."
    },

    sketches: [
        { name: "Jaguar", path: "/assets/jaguar.webp" },
        { name: "Zoro", path: "/assets/zoro.webp" },
        { name: "Gorrila", path: "/assets/gorrila.webp" },
        { name: "Pain", path: "/assets/pain.webp" },
        { name: "Pennywise", path: "/assets/pennywise.webp" },
    ],

    contact: {
        social: [
            ['Email', "bijayprojects@gmail.com"],
            ['Github', "https://github.com/Bijay-Codes"],
            ['Linkedin', "https://www.linkedin.com/in/bijay-verma-876b353a4/"],
        ]
    },
}
