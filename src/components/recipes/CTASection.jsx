import { Link } from "react-router-dom";

export default function CTASection({
  title = "Ready to cook smarter?",
  text = "Hit the button, pick a recipe, and get dinner on the table—fast.",
}) {
  return (
    <section className="container-app">
      <div className="relative overflow-hidden rounded-[24px] bg-neutral-200 px-6 py-14 text-center md:px-10 md:py-16">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-8 bottom-0 h-32 w-32 rounded-full border-[10px] border-orange-500/80 border-r-transparent border-t-transparent opacity-90 md:h-40 md:w-40" />
          <div className="absolute left-10 bottom-10 h-24 w-24 rotate-12 text-neutral-300 opacity-90 md:h-32 md:w-32">
            <svg viewBox="0 0 120 120" fill="none" className="h-full w-full">
              <path
                d="M44 10V64M60 10V64M76 10V64M30 10V64M30 64L79 112"
                stroke="currentColor"
                strokeWidth="8"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="absolute -right-6 top-2 h-28 w-28 text-neutral-300 opacity-90 md:h-40 md:w-40">
            <svg viewBox="0 0 140 140" fill="none" className="h-full w-full">
              <path
                d="M14 120L120 14"
                stroke="currentColor"
                strokeWidth="16"
                strokeLinecap="round"
              />
              <path
                d="M86 14H120V48"
                stroke="currentColor"
                strokeWidth="16"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="absolute right-4 top-8 h-16 w-20 text-teal-500 md:right-6 md:top-10">
            <svg viewBox="0 0 100 60" fill="none" className="h-full w-full">
              <path
                d="M2 30C15 30 15 8 28 8C41 8 41 52 54 52C67 52 67 14 80 14C90 14 94 26 98 30"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-5">
          <h2 className="section-title text-[2.25rem] leading-[1.1] tracking-[-0.02em] md:text-5xl">
            {title}
          </h2>
          <p className="max-w-[38rem] text-base leading-[1.5] text-neutral-600 md:text-lg">
            {text}
          </p>
          <Link to="/recipes" className="btn-primary mt-2 min-w-[10.5rem]">
            Browse recipes
          </Link>
        </div>
      </div>
    </section>
  );
}