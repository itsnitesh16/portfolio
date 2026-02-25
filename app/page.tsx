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

const careerEntries = [
  {
    title: "SpotsNow",
    link: "https://spotsnow.io/",
    summary:
      "Join over 20,000 brands using podcast advertising to drive revenue.",
    roles: [
      {
        title: "Frontend Engineer",
        dates: "January 2026 - Present",
        description:
          "Owning the frontend for a platform that helps brands rapidly test podcast ads using last-minute inventory - building fast, reliable flows that turn niche, leaned-in listeners into actual conversions.",
      },
    ],
  },
  {
    title: "Station",
    link: "https://station.page/",
    summary:
      "Uncovers hidden revenue and shows you how to turn it on - while you focus on episodes.",
    roles: [
      {
        title: "Frontend Engineer",
        dates: "Jun 2025 - Present",
        description: "Led frontend development across core user-facing features including:",
        bullets: [
          "Full-featured newsletter editor",
          "Link-in-bio tool for creators",
          "Creator dashboard with analytics",
          "Community feed and engagement layer",
          "Responsive, bulletproof email HTML templates",
        ],
      },
      {
        title: "Frontend Intern",
        dates: "Sept 2024 - Mar 2025",
        description:
          "Helped build a creator-centric community platform enabling creators to engage, grow, and monetize through a clean, modern web experience.",
      },
    ],
  },
  {
    title: "Creative Propeller",
    link: "https://creativepropeller.com/",
    summary:
      "Netflix for design: pay once per month, ask for anything as much as you want.",
    roles: [
      {
        title: "Graphic Designer",
        dates: "Jun 2024 - Aug 2024",
        description:
          "Designed marketing collateral including flyers, brochures, and social content for a wide range of clients - keeping brand identity tight and visuals crisp.",
      },
    ],
  },
];

const projectEntries = [
  {
    title: "Gradii",
    link: "https://gradii.kshv.me/",
    summary:
      "A simple gradient generator tool made by designer for designers to create stunning gradients with customizable colors, text, and effects. Use it for your designs, wallpapers, presentations, or mockups or just for fun.",
    points: [
      "Started as a late-night 'my wallpaper is boring' idea - a tiny tool to generate gradients from a few colors.",
      "Evolved into a full design utility with custom color inputs, text overlays, image blending, multi-resolution export, and more.",
      "Picked up traction unexpectedly - appreciated by Guillermo Rauch (CEO of Vercel) and featured on Peerlist.",
      "Now a polished, versatile gradient generator used weekly by hundreds of users worldwide.",
    ],
  },
  {
    title: "Colors",
    link: "https://colors.kshv.me/",
    summary: "Convert color codes of any format to css color codes.",
    points: [
      "Built out of personal frustration - a fast, accurate color format converter for hex, rgb, hsl, and beyond.",
      "Expanded into a handy color workflow tool with palette generation, web-safe swatches, and quick export options for CSS variables or Tailwind configs.",
    ],
  },
];

const ossEntries = [
  {
    title: "code100x",
    link: "https://github.com/code100x",
    date: "Aug 2025",
    contributions: [
      {
        title: "CMS: UI Changes - #532",
        link: "https://github.com/code100x/daily-code/pull/532",
        description:
          "Redesigned major parts of the 100xDevs CMS UI - improving hierarchy, spacing, consistency, and overall usability.",
      },
      {
        title: "Daily Code: Major UI Revamp - #1135",
        link: "https://github.com/code100x/cms/pull/1135",
        description:
          "Delivered a significant UI overhaul for the Daily Code repository, enhancing both aesthetics and developer experience.",
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
            <h2 className="absolute right-0 bottom-0 left-0 translate-y-[35%] text-center text-[110px] font-black tracking-tighter text-white/65 lg:text-[180px]">
              NITESH
            </h2>
          </div>
        </div>
      </footer>

      <ThemeToggle />
    </div>
  );
}
