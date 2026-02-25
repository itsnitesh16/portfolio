type OssContribution = {
  title: string;
  link: string;
  description: string;
};

type OssItem = {
  title: string;
  link: string;
  date: string;
  contributions: OssContribution[];
};

type OssSectionProps = {
  title: string;
  subtitle: string;
  items: OssItem[];
};

function ArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 opacity-65 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
      aria-hidden="true"
    >
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  );
}

export default function OssSection({ title, subtitle, items }: OssSectionProps) {
  return (
    <section className="z-40 mx-auto flex w-full max-w-screen-sm flex-col gap-8 px-2 py-12">
      <div className="flex flex-col gap-2">
        <h2 className="font-semibold tracking-tight text-(--text-strong)">{title}</h2>
        <p className="text-sm text-(--text-muted)">{subtitle}</p>
      </div>

      <div className="grid w-full grid-cols-1 gap-8">
        <div className="flex flex-col gap-8">
          {items.map((item) => (
            <div key={item.title} className="flex flex-col gap-0">
              <div className="group flex w-full flex-col gap-1">
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-2 text-(--text-strong)"
                  href={item.link}
                >
                  {item.title}
                  <ArrowIcon />
                </a>
                <div className="whitespace-nowrap text-sm text-(--text-muted)">
                  <span className="block">{item.date}</span>
                </div>
              </div>

              <div className="pt-6">
                <div className="flex flex-col">
                  {item.contributions.map((entry, index) => {
                    const isFirst = index === 0;
                    const isLast = index === item.contributions.length - 1;

                    return (
                      <div key={entry.title} className="flex gap-3 pt-6 first:pt-0">
                        <div
                          className={`relative flex w-6 shrink-0 flex-col items-center ${isFirst ? "pt-1.5" : ""}`}
                        >
                          {!isFirst && (
                            <div
                              className="h-[9px] w-[1.5px] shrink-0 bg-(--line)/80"
                              aria-hidden="true"
                            />
                          )}
                          <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-(--dot)" />
                          {!isLast && (
                            <div
                              className="flex-1 min-h-0 -mt-[3px] -mb-[calc(1.5rem+9px)] w-[1.5px] shrink-0 bg-(--line)/80"
                              aria-hidden="true"
                            />
                          )}
                        </div>

                        <div className="flex flex-1 flex-col gap-1 pb-6 last:pb-0">
                          <a
                            target="_blank"
                            rel="noreferrer"
                            className="group flex items-center gap-2 text-(--text-strong)"
                            href={entry.link}
                          >
                            {entry.title}
                            <ArrowIcon />
                          </a>
                          <div className="text-sm text-(--text-muted)">
                            <span className="block">{entry.description}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
