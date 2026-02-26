import TypingText from "@/components/TypingText";

export default function HeaderSection() {
  return (
    <header className="flex flex-col gap-8">
      <div className="mx-auto flex w-full max-w-screen-sm flex-col gap-8 px-2 py-12">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-1 text-xl font-medium tracking-tight text-(--text-strong)">
            <h1>Nitesh Kumar</h1>
          </div>
          <div className="text-(--text-muted)">
            22,{" "}
            <div className="inline whitespace-pre-wrap tracking-tight">
              <TypingText words={["React Native Developer", "Full Stack Developer", "Youtuber", "Backend Developer"]} />
            </div>
          </div>
        </div>

        <div className="text-(--text-muted)">
          <div>
            I’m the developer who enjoys turning vague ideas, half-written requirements,
            and “it should just work” expectations into scalable, working products.
          </div>
          <br />
          <div>
            I work primarily with React Native, backend systems, and cloud authentication,
            building full-stack applications that focus on performance, security, and
            real-world usability — not just demos that look good in screenshots.
          </div>
          <br />
          <div>
            From social platforms to developer tools, I’ve shipped apps with real-time
            features, clean APIs, and thoughtful architecture. I enjoy digging into how
            things work under the hood, fixing what breaks, and occasionally preventing
            future bugs before they happen (no promises).
          </div>
          <br />
          <div>
            Outside of code, I value clean UI, structured systems, and teamwork.
            Currently pursuing Computer Science while building, leading, and learning —
            because shipping products beats tutorials every time.
          </div>
          <div>
            You&apos;ll find me shitposting on{" "}
            <a
              target="_blank"
              rel="noreferrer"
              className="underline decoration-blue-500 decoration-wavy underline-offset-4 transition-all duration-150 ease-[cubic-bezier(0.08,0.82,0.17,1)] hover:text-(--text-strong)"
              href="https://x.com/abeenitesh"
            >
              𝕏
            </a>
            , check out my{" "}
            <a
              target="_blank"
              rel="noreferrer"
              className="underline decoration-blue-500 decoration-wavy underline-offset-4 transition-all duration-150 ease-[cubic-bezier(0.08,0.82,0.17,1)] hover:text-(--text-strong)"
              href="https://docs.google.com/document/d/1LFVl_IrRZxqXgV9cbyeDEbggzYulihvNCi70rpzcG3M/edit?usp=sharing"
            >
              resume
            </a>
            , or you can always reach me at{" "}
            <a
              target="_blank"
              rel="noreferrer"
              className="underline decoration-blue-500 decoration-wavy underline-offset-4 transition-all duration-150 ease-[cubic-bezier(0.08,0.82,0.17,1)] hover:text-(--text-strong)"
              href="mailto:itsnitesh16@gmail.com"
            >
              itsnitesh16@gmail.com
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
