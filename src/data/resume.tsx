import { Icons } from "@/components/icons";

export const DATA = {
  name: "Ragini Upadhyay",
  initials: "RU",
  url: "https://raginiupadhyay.vercel.app",
  location: "Mumbai, IN",
  locationLink: "https://www.google.com/maps/place/mumbai",
  description:
    "MCA graduate with two years of experience working at Accenture, passionate about coding, and constantly exploring new technologies. Active on GitHub and always eager to learn and share knowledge.",
  summary:
    "After graduating with an MCA from V.E.S. Institute of Technology, I have gained two years of professional experience working at Accenture. During my academic journey at Mumbai University, I developed a strong foundation in various programming languages and technologies, including Python, Java, C#, ASP.NET, HTML, and more. I have worked on projects like EduCode, an educational app for learning programming languages, and Warrior, a 2D adventure game. I am passionate about backend development and DevOps engineering, actively exploring new technologies and contributing to open-source projects. As a coding enthusiast, I am always eager to learn, share knowledge, and develop meaningful tech solutions",
  avatarUrl: "/me.jpeg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Linux",
    "Git",
    "Express",
    "NestJs",
    "Python",
    "Go",
    "MongoDB",
    "Postgres",
    "Docker",
    "Kubernetes",
    "Java",
  ],
  contact: {
    email: "raginiu98@gmail.com",
    tel: "+91",
    social: {
      GitHub: {
        url: "https://github.com/ragini-upadhyay",
        icon: Icons.github,
      },
      LinkedIn: {
        url: "https://www.linkedin.com/in/upadhyay-harsh/",
        icon: Icons.linkedin,
      },
      X: {
        url: "https://x.com/Harshs_twt",
        icon: Icons.x,
      },
    },
  },

  work: [
    {
      company: "Arka Linux GUI",
      href: "https://github.com/arch-linux-gui",
      badges: [],
      location: "Mumbai, IN",
      title: "Core Team - Developer",
      logoUrl: "/alg.png",
      start: "Mar 2024",
      end: "Present",
      description:
        "Developed a user-friendly Welcome application for Arka Linux GUI to aid users in navigating Arch-based Linux distributions efficiently, revamped the ALG website to enhance its design and functionality for a more engaging user experience, and contributed as a core team member, driving innovation and user-focused improvements for Arch Linux GUI.",
    },
    {
      company: "TCET-Opensource",
      badges: [],
      href: "https://opensource.tcetmumbai.in",
      location: "Mumbai, IN",
      title: "Production Engineer (Team Lead)",
      logoUrl: "/tcetOpensource.png",
      start: "July 2023",
      end: "Mar 2024",
      description:
        "Collaborated with the development team to establish automated daily unit tests, streamline bug identification and resolution processes, spearheaded the adoption of continuous integration and deployment practices, resulting in a 25% reduction in delivery time and a decrease in production defects, and played a key role in enhancing application performance, leading to improved response times and infrastructure scalability.",
    },
    {
      company: "TCET Shastra Coding Club",
      href: "https://www.linkedin.com/company/tcet-shastra-coding-club",
      badges: [],
      location: "Mumbai, IN",
      title: "Problem Tester",
      logoUrl: "/tcetShastra.jpg",
      start: "November 2022",
      end: "July 2023",
      description:
        "Tested coding problems, and created comprehensive solution videos for TCET-Shastra, ensuring high-quality educational content and robust problem-solving experiences for users.",
    },
  ],
  education: [
    {
      school: "Thakur College Of Engineering and Technology",
      href: "https://www.tcetmumbai.in/",
      degree: "Bachlor Of Engineering in Computer Science Engineering",
      logoUrl: "/tcet.png",
      start: "2022",
      end: "2026",
    },
  ],
  projects: [
    {
      title: "ALG Welcome",
      href: "https://github.com/arch-linux-gui/alg-welcome",
      dates: "April 2024 - Present",
      active: true,
      description:
        "A user-friendly Welcome application for Arka Linux GUI, aiding users in navigating Arch-based Linux distributions efficiently.",
      technologies: ["Go", "ReactJs", "TailwindCSS", "Wails Framework"],
      links: [
        {
          type: "Source",
          href: "https://github.com/arch-linux-gui/alg-welcome",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/welcome.png",
      video: "",
    },
    {
      title: "ALG Website",
      href: "https://github.com/arch-linux-gui/alg-welcome",
      dates: "April 2024 - Present",
      active: true,
      description:
        "Developed a comprehensive website using Next.js that includes documentation, blogs, and donation pages, enhancing user engagement and providing valuable resources for the community.",
      technologies: ["NextJs", "TailwindCSS", "Fumadocs"],
      links: [
        {
          type: "Website",
          href: "https://arkalinuxgui.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/harshau007/alg-website",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/algwebsite.png",
      video: "",
    },
    {
      title: "TCET-Linux",
      href: "https://linux.tcetmumbai.in",
      dates: "June 2023 - February 2024",
      active: true,
      description:
        "An open-source operating system providing basic services, and various software packages for students.",
      technologies: [
        "Linux",
        "Arch",
        "Shell",
        "Git",
        "GitHub",
        "GitHub Action",
      ],
      links: [
        {
          type: "Website",
          href: "https://linux.tcetmumbai.in",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/tcet-opensource/tcet-linux",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/tcetlinux.png",
      // video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "DevBox",
      href: "https://github.com/harshau007/devbox",
      dates: "April 2024 - July 2024",
      active: true,
      description:
        "DevBox is a powerful CLI tool to create and manage isolated containers for developers with their desired technology stacks, such as Node.js, Python, Rust, and more.",
      technologies: ["Go", "Docker", "Cobra CLI", "Bubbletea"],
      links: [
        {
          type: "Source",
          href: "https://github.com/harshau007/devbox",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/devbox.png",
      // video: "https://cdn.llm.report/openai-demo.mp4",
    },
  ],
  hackathons: [
    {
      title: "Ace Of Hacks",
      dates: "March 30th - 31st, 2024",
      location: "Mumbai, In",
      description:
        "A Docker monitoring web application that provides real-time insights into container performance and resource usage.",
      image:
        "https://ace-of-hacks.devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2Faed990c0b5224b4f8fbe9fa617382b0b%2Fassets%2Ffavicon%2F860.jpeg&w=1440&q=75",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/harshau007/ducker",
        },
      ],
    },
    {
      title: "Hackniche 2.0",
      dates: "February 17th - 18th, 2024",
      location: "Mumbai, In",
      description:
        "Developed a web application which helps students to find housing near their colleges.",
      image:
        "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/uploadedManual-65b3549a2ebd4_logo.png?d=200x200",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/harshau007/SahayataAwas-backend",
        },
      ],
    },
    {
      title: "Skynet Hacks",
      dates: "October 29, 2021",
      location: "Kingston, Ontario",
      description:
        "Developed a website that provides comprehensive details and updates about the James Webb Space Telescope, offering users an in-depth look at its missions and discoveries.",
      image:
        "https://d112y698adiu2z.cloudfront.net/photos/production/challenge_photos/002/117/943/datas/full_width.PNG",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/space-info-r9tpv5",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/harshau007/SKYNET-HACKATHON-PROJECT",
        },
      ],
    },
  ],
} as const;
