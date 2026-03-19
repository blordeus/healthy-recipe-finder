import { Link } from "react-router-dom";
import patternFork from "../../assets/images/pattern-fork.svg";
import patternKnife from "../../assets/images/pattern-knife.svg";

export default function CTASection({
  title = "Ready to cook smarter?",
  text = "Hit the button, pick a recipe, and get dinner on the table—fast.",
}) {
  return (
    <section className="container-app">
      <div className="relative overflow-hidden rounded-[24px] bg-neutral-200 px-6 py-14 text-center md:px-10 md:py-16">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-8 bottom-8 h-44 w-44 text-orange-500/90 md:bottom-auto md:top-8 md:h-72 md:w-60">
          <img src={patternFork} alt="Fork pattern"/>
          </div>

          <div className="absolute -right-8 top-10 md:top-12 h-36 w-36 text-neutral-300 md:h-44 md:w-44">
            <img src={patternKnife} alt="Knife pattern" className="scale-[150%]"/>
          </div>
        </div>

        <div className="relative mx-auto flex max-w-[640px] flex-col items-center">
          <h2
            className="text-[2.25rem] leading-[1.08] tracking-[-0.02em] text-neutral-900 md:text-[3rem]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {title}
          </h2>

          <p className="mt-4 max-w-[520px] text-base leading-[1.65] text-neutral-600 md:text-lg">
            {text}
          </p>

          <Link to="/recipes" className="btn-primary mt-8 min-w-[168px]">
            Browse recipes
          </Link>
        </div>
      </div>
    </section>
  );
}