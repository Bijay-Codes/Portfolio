export const portfolioData = {
    skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind", "Git"],

    projects: [
        {
            name: "Favdex",
            description: `A visual-first Pokédex where users can browse, filter by type,
             switch between shiny and normal sprites,
             and build their own Favorite list (Favdex) by feeding Pokémon berries.`,
            techStack: ['React', 'Tailwind'],
            github: "https://github.com/Bijay-Codes/Favdex",
            live: "https://favdex.vercel.app",
            caseStudy: "./case-study.html",
        },
        {
            name: "Track talk",
            description: "An expense tracker that doesn't just track — it roasts you for suspicious behaviour like editing too much or deleting entries repeatedly.",
            techStack: ['HTML', 'CSS', 'Javascript'],
            github: "https://github.com/Bijay-Codes/Expenses-Tracker",
            live: "https://track-talker.vercel.app",
        },
    ],

    training: {
        place: "Rourkela Steel Plant",
        duration: "1 Month",
        type: "Observation & Exposure Program",
        description: [
            [`Gained enterprise-level exposure to industrial computing environments, observing how large-scale organizations structure their digital workflows.`],
            [`Studied user interface needs and data layout structures used by plant operators across various administrative dashboards.`],
            [`Observed the importance of system uptime, data consistency, and reliable software architecture in a high-volume production ecosystem.`]
        ]
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
