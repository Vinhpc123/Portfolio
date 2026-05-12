// ============================================================
// INTERFACES / TYPE DEFINITIONS
// ============================================================

export interface PersonalData {
  name: string;
  title: string;
  about: string;
  email: string;
  phone: string;
  location: string;
  github: string;
}

export interface Education {
  school: string;
  period: string;
  major: string;
  gpa: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface Project {
  name: string;
  period: string;
  role: string;
  description: string;
  technologies: string[];
  githubLink: string;
  demoLink?: string;
}

export interface ResumeData {
  personal: PersonalData;
  education: Education;
  skills: SkillGroup[];
  projects: Project[];
}

// ============================================================
// DATA
// ============================================================

export const resumeData: ResumeData = {
  personal: {
    name: "Tran Thanh Vinh",
    title: "Front-End Developer",
    about:
      "Front-End Developer with practical experience building responsive and user-friendly web applications using ReactJS, JavaScript, HTML, CSS, and TailwindCSS. Experienced in developing e-commerce features, admin dashboards, RESTful API integrations, authentication flows, and real-time chat. Seeking an entry-level Front-End Developer role to apply my skills in real-world projects and gradually broaden my technical foundation to become a Software Engineer.",
    email: "vinh7085@gmail.com",
    phone: "0355367829",
    location: "District 12, Ho Chi Minh City",
    github: "https://github.com/Vinhpc123",
  },

  education: {
    school: "University of Transport and Communications Ho Chi Minh City (UTH)",
    period: "2022 - 2026",
    major: "Information Technology (Web Development)",
    gpa: "3.30 / 4.0",
  },

  skills: [
    {
      category: "Front-end & UI/UX",
      skills: [
        "React.js",
        "TypeScript",
        "HTML5",
        "CSS3",
        "TailwindCSS",
        "UI/UX (Basic) - Figma",
      ],
    },
    {
      category: "Back-end & Database",
      skills: [
        "Node.js",
        "Express.js",
        "PHP",
        "MongoDB",
        "Mongoose",
        "Microsoft SQL Server",
        "MySQL",
        "PostgreSQL",
      ],
    },
    {
      category: "Tools & Others",
      skills: [
        "Git & GitHub workflow",
        "Postman",
        "RESTful APIs",
        "JWT Authentication",
      ],
    },
  ],

  projects: [
    {
      name: "Jewelry E-commerce & Management System",
      period: "Nov 2025 - Jan 2026",
      role: "Fullstack Developer",
      description:
        "Developed a full-stack jewelry e-commerce system with separate customer and admin/staff portals, supporting online shopping, in-store POS operations, order management, real-time customer support chat, and online payment integration.",
      technologies: [
        "React",
        "Vite",
        "Tailwind CSS",
        "React Router",
        "Axios",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "Socket.IO",
        "VNPAY",
        "JWT",
      ],
      githubLink: "https://github.com/Vinhpc123/Jewelry_store.git",
    },
    {
      name: "WatchStore",
      period: "Jul 2025 - Sep 2025",
      role: "Front-end Developer",
      description:
        "Developed a watch e-commerce website with customer-facing shopping features and an admin management dashboard. The system supports product browsing, cart and checkout flow, order management, inventory tracking, and POS support.",
      technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "Chart.js"],
      githubLink: "https://github.com/Vinhpc123/Watchshop.git",
    },
  ],
};
