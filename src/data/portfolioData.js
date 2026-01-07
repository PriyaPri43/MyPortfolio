import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss, SiBootstrap, SiMui, SiPostman, SiVercel } from "react-icons/si";

export const portfolioData = {
    name: "Priyanka S",
    role: "Full Stack Web Developer (MERN)",
    location: "Coimbatore, India",
    email: "privdiv49@gmail.com", // Assuming from context/image if available, otherwise placeholder
    linkedin: "https://www.linkedin.com/in/priyanka-selvaraj-8a9a90224",
    github: "https://github.com/PriyaPri43",
    skills: [
        { name: "React.js", icon: FaReact, level: 90 },
        { name: "Node.js", icon: FaNodeJs, level: 85 },
        { name: "Express.js", icon: SiExpress, level: 85 },
        { name: "MongoDB", icon: SiMongodb, level: 80 },
        { name: "JavaScript", icon: FaJs, level: 90 },
        { name: "HTML5", icon: FaHtml5, level: 95 },
        { name: "CSS3", icon: FaCss3Alt, level: 90 },
        { name: "Tailwind CSS", icon: SiTailwindcss, level: 85 },
        { name: "Git", icon: FaGitAlt, level: 80 },
    ],
    experience: [
        {
            company: "Bluekode Solutions",
            role: "MERN Stack Developer",
            duration: "Jan 2023 – Present",
            location: "Coimbatore",
            description: [
                "Designed and developed full-stack MERN applications.",
                "Built reusable React components with efficient state management.",
                "Developed RESTful APIs using Node.js & Express.js.",
                "Designed MongoDB schemas and validations.",
                "Integrated frontend & backend for performance and scalability.",
                "Debugged, tested, and optimized applications.",
                "Collaborated with teams and supported junior developers."
            ]
        },
        {
            company: "CADD Centre",
            role: "Career Counsellor",
            duration: "Dec 2020 – Dec 2022",
            location: "Coimbatore",
            description: [
                "Guided students in IT course selection.",
                "Conducted career counseling sessions."
            ]
        },
        {
            company: "Personiv",
            role: "Process Executive",
            duration: "Oct 2017 – June 2020",
            location: "Coimbatore",
            description: [
                "Ensured client queries were addressed and relationships maintained.",
                "Ensured quality products were delivered on time."
            ]
        }
    ],
    projects: [
        {
            title: "MERN Stack LMS",
            description: "A comprehensive Learning Management System with user authentication, course management, and progress tracking.",
            techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
            github: "https://github.com/PriyaPri43", // Placeholder
            demo: "#"
        },
        {
            title: "E-Commerce Dashboard",
            description: "Admin dashboard for managing products, orders, and users with real-time data visualization.",
            techStack: ["React", "Material UI"],
            github: "https://github.com/PriyaPri43", // Placeholder
            demo: "#"
        },
        {
            title: "Portfolio Website",
            description: "Personal portfolio website with dark theme and smooth animations.",
            techStack: ["React", "Tailwind CSS", "Framer Motion"],
            github: "https://github.com/PriyaPri43/MyPortfolio",
            demo: "https://myportfolio-beta-ruby-58.vercel.app/"
        }
    ]
};
