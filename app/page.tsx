import CareerSection from "@/components/CareerSection";
import HeaderSection from "@/components/HeaderSection";
import OssSection from "@/components/OssSection";
import SkillsSection from "@/components/SkillsSection";
import ThemeToggle from "@/components/ThemeToggle";
import ProjectsSection from "@/components/ProjectsSection";
import AiToolsSection from "@/components/AiToolsSection";

const skills = [
  // Languages
  "Python",
  "JavaScript",
  "TypeScript",
  "C++",
  "HTML5",
  "CSS3",

  // Frameworks & Libraries
  "React Native",
  "Expo",
  "Node.js",
  "Bun",
  "Express.js",
  "NativeWind",
  "Tailwind CSS",

  // Developer Tools
  "VS Code",
  "Android Studio",
  "Git",
  "Docker",
  "Postman",
  "npm",

  // Databases
  "MongoDB",
  "MySQL",
  "PostgreSQL",

  // Authentication
  "Clerk",
  "Firebase Authentication"
];

const aiTools = [
  "ChatGPT",
  "Codex CLI",
  "Claude Code",
  "Gemini",
  "GitHub Copilot",
  "Cursor AI",
];

// const careerEntries = [
//   {
//     title: "SpotsNow",
//     link: "https://spotsnow.io/",
//     summary:
//       "Join over 20,000 brands using podcast advertising to drive revenue.",
//     roles: [
//       {
//         title: "Frontend Engineer",
//         dates: "January 2026 - Present",
//         description:
//           "Owning the frontend for a platform that helps brands rapidly test podcast ads using last-minute inventory - building fast, reliable flows that turn niche, leaned-in listeners into actual conversions.",
//       },
//     ],
//   },
//   {
//     title: "Station",
//     link: "https://station.page/",
//     summary:
//       "Uncovers hidden revenue and shows you how to turn it on - while you focus on episodes.",
//     roles: [
//       {
//         title: "Frontend Engineer",
//         dates: "Jun 2025 - Present",
//         description: "Led frontend development across core user-facing features including:",
//         bullets: [
//           "Full-featured newsletter editor",
//           "Link-in-bio tool for creators",
//           "Creator dashboard with analytics",
//           "Community feed and engagement layer",
//           "Responsive, bulletproof email HTML templates",
//         ],
//       },
//       {
//         title: "Frontend Intern",
//         dates: "Sept 2024 - Mar 2025",
//         description:
//           "Helped build a creator-centric community platform enabling creators to engage, grow, and monetize through a clean, modern web experience.",
//       },
//     ],
//   },
//   {
//     title: "Creative Propeller",
//     link: "https://creativepropeller.com/",
//     summary:
//       "Netflix for design: pay once per month, ask for anything as much as you want.",
//     roles: [
//       {
//         title: "Graphic Designer",
//         dates: "Jun 2024 - Aug 2024",
//         description:
//           "Designed marketing collateral including flyers, brochures, and social content for a wide range of clients - keeping brand identity tight and visuals crisp.",
//       },
//     ],
//   },
// ];

const careerEntries = [
  {
    title: "Looking for My First Break",
    link: "#",
    summary:
      "Yes, I’m a fresher. No, that doesn’t mean I ship broken code or need hand-holding every 10 minutes.",
    roles: [
      {
        title: "Software Developer (Unofficial, Yet Serious)",
        dates: "Present",
        description:
          "Actively building real-world full-stack applications using React Native, backend APIs, and cloud authentication — because waiting for permission to learn never really worked for me.",
        bullets: [
          "Built and shipped multiple production-level apps, not just tutorial clones with renamed variables.",
          "Comfortable owning features end-to-end: UI, APIs, authentication, and data flow.",
          "Reads documentation, debugs patiently, and actually understands why things break.",
          "Looking for a team willing to invest a little trust — I’ll return it with results.",
        ],
      },
    ],
  },
  {
    title: "Academic Projects (But Executed Like Products)",
    link: "#",
    summary:
      "Projects that started as assignments and quietly turned into full-fledged applications.",
    roles: [
      {
        title: "Full-Stack Developer",
        dates: "2024 – 2025",
        description:
          "Worked on multiple mobile and backend-heavy projects while pursuing Computer Science — balancing deadlines, bugs, and the occasional existential crisis.",
        bullets: [
          "Built social platforms, developer tools, and utility apps with real authentication and databases.",
          "Handled React Native, Express.js, MongoDB, PostgreSQL, and Clerk without panicking.",
          "Collaborated in teams, reviewed code, and shipped features instead of excuses.",
          "Learned the hard way that clean architecture today saves weekends tomorrow.",
        ],
      },
    ],
  },
  {
    title: "What I’m Actually Asking For",
    link: "#",
    summary:
      "A chance. That’s it. No inflated titles, no shortcuts.",
    roles: [
      {
        title: "Fresher Who Will Outgrow the Label",
        dates: "Future",
        description:
          "Give me a chance to work with your team, and I’ll make sure you don’t regret it.",
        bullets: [
          "I may not have years of experience — but I learn fast and ship faster.",
          "I ask good questions, take feedback seriously, and improve aggressively.",
          "I care about the product, the codebase, and the people using it.",
          "I’m smarter than I look on paper — and I’ll prove it in code.",
        ],
      },
    ],
  },
];

const projectEntries = [
  {
    title: "ChirpChain",
    link: "https://github.com/itsnitesh16/twitter-expo-app.git",
    summary:
      "A full-stack social media mobile app inspired by Twitter, featuring real-time interactions, secure authentication, and scalable backend architecture.",
    points: [
      "Built a Twitter-style app with posts, comments, likes, follows, and a real-time feed — because social apps are never 'simple'.",
      "Implemented secure authentication and profile routing using Clerk, ensuring users stay logged in (and out) correctly.",
      "Designed modular Express.js APIs with webhook integration to support notifications and direct messaging.",
      "Focused on performance, clean architecture, and smooth UX rather than just shipping another demo app.",
    ],
  },
  {
    title: "Stackmend",
    link: "https://github.com/itsnitesh16/StackMend",
    summary:
      "A developer-focused platform for sharing errors, discovering solutions, and leveraging AI-assisted and community-driven debugging.",
    points: [
      "Led React Native app development in a team project, coordinating features while keeping the app stable under pressure.",
      "Implemented error submission, tag-based search, profile management, and secure authentication.",
      "Collaborated with teammates building the Next.js web version, gaining real experience in cross-platform architecture.",
      "Turned developer frustration into a searchable, structured knowledge base — because Stack Overflow tabs were getting out of hand.",
    ],
  },
  {
    title: "Recipe App",
    link: "https://github.com/itsnitesh16/recipe-expo-app",
    summary:
      "A full-stack cooking application with authentication, real-time search, and personalized recipe management.",
    points: [
      "Built a mobile app with secure email-based authentication and user-specific favorites using Clerk and PostgreSQL.",
      "Integrated TheMealDB API for dynamic recipe search, filters, and detailed recipe views with embedded videos.",
      "Designed backend services to persist user preferences instead of trusting browser memory.",
    ],
  },
  {
    title: "Bookshelf App",
    link: "https://github.com/itsnitesh16/bookshelf-app",
    summary:
      "A personal book management app to track, rate, and review books with personalized recommendations.",
    points: [
      "Developed a React Native app for managing book collections, reviews, and ratings — without overengineering it.",
      "Built a custom REST API using Node.js and MySQL for structured and reliable data storage.",
      "Focused on clean UI and intuitive workflows to make cataloging books feel less like homework.",
    ],
  },
  {
    title: "Socializer",
    link: "https://github.com/itsnitesh16/socializer-reactnative",
    summary:
      "A cross-platform social media app with real-time interactions and media sharing.",
    points: [
      "Implemented image posting, real-time likes, comments, and follow/unfollow functionality.",
      "Added bookmarking, notifications, and editable profiles for a more personalized social experience.",
      "Handled state management and API integration to keep interactions smooth and predictable.",
    ],
  },
];

const ossEntries = [
  {
    title: "Open Source (Warming Up)",
    link: "https://github.com/itsnitesh16",
    date: "Present",
    contributions: [
      {
        title: "First Contribution — Pending",
        link: "#",
        description:
          "Currently reading issues, understanding large codebases, and preparing my first real open-source contribution. Haven’t pushed the code yet — but the motivation is very much alive.",
      },
      {
        title: "Learning the Hard Part",
        link: "#",
        description:
          "Learning how to contribute without breaking things, spamming maintainers, or opening PRs titled 'fix typo'. Progress is slow, but intentional.",
      },
    ],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-(--bg) text-(--text-strong)">
      <main className="mx-auto max-w-[720px] px-5 pt-40 sm:px-6 sm:pt-52 md:px-0 md:pt-46">
        <HeaderSection />

        <div className="mt-2">
          <SkillsSection
            title="Skills"
            subtitle="Technologies and tools I work with"
            skills={skills}
          />
          <AiToolsSection
            title="AI Tools"
            subtitle="AI tools I work with"
            tools={aiTools}
          />
        </div>

        <div className="mt-2 space-y-2">
          <CareerSection
            title="Career"
            subtitle="Work experience and roles"
            items={careerEntries}
          />
          <ProjectsSection
            title="Projects I Built"
            subtitle="Personal projects and experiments"
            items={projectEntries}
          />
          <OssSection
            title="OSS Contributions"
            subtitle="Open source projects I've contributed to"
            items={ossEntries}
          />
        </div>
      </main>

      <footer className="relative z-10 flex h-48 w-full items-center justify-center">
        <div
          className="pointer-events-none absolute bottom-0 left-0 -z-10 h-80 w-full"
          style={{
            background:
              "radial-gradient(1920px 100% at 50% 100%, rgba(59, 130, 246, 0.6) 0%, rgba(80, 56, 255, 0.5) 50%, transparent 100%)",
            maskImage:
              "radial-gradient(1920px 100% at 50% 100%, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 50%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(1920px 100% at 50% 100%, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 50%, transparent 100%)",
            opacity: 1,
          }}
        >
          <div
            className="absolute inset-0 mix-blend-overlay opacity-40"
            style={{
              backgroundImage:
                "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iLjA1Ii8+PC9zdmc+')",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto flex h-48 w-full max-w-screen-sm items-center justify-center">
          <div className="relative mx-auto flex h-full w-full max-w-screen-sm items-start overflow-hidden">
            <h2 className="absolute right-0 bottom-0 left-0 translate-y-[35%] text-center text-[100px] font-black tracking-tighter text-white/65 lg:text-[180px]">
              NITESH
            </h2>
          </div>
        </div>
      </footer>

      <ThemeToggle />
    </div>
  );
}
