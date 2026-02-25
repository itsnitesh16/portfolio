type SkillsSectionProps = {
  title: string;
  subtitle: string;
  skills: string[];
};

export default function SkillsSection({
  title,
  subtitle,
  skills,
}: SkillsSectionProps) {
  return (
    <section className="z-40 mx-auto flex w-full max-w-screen-sm flex-col gap-8 px-2 py-12">
      <div className="flex flex-col gap-2">
        <h2 className="font-semibold tracking-tight text-(--text-strong)">{title}</h2>
        <p className="text-sm text-(--text-muted)">{subtitle}</p>
      </div>

      <div className="grid w-full grid-cols-3 gap-8">
        {skills.map((skill) => (
          <div key={skill} className="flex w-full flex-col gap-1">
            <span className="text-sm text-(--text-muted)">{skill}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
