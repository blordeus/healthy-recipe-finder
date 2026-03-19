import { Link } from "react-router-dom";
import { Carrot, Search, Sparkles } from "lucide-react";
import CTASection from "../components/recipes/CTASection";
import ResponsiveImage from "../components/ResponsiveImage";
import heroSmall from "../assets/images/image-home-hero-small.webp";
import heroLarge from "../assets/images/image-home-hero-large.webp";
import homeRealLifeSmall from "../assets/images/image-home-real-life-small.webp";
import homeRealLifeLarge from "../assets/images/image-home-real-life-large.webp";

const featureCards = [
  {
    title: "Whole-food recipes",
    text: "Each dish uses everyday, unprocessed ingredients.",
    icon: Carrot,
    iconColor: "text-orange-500",
  },
  {
    title: "Minimum fuss",
    text: "All recipes are designed to make eating healthy quick and easy.",
    icon: Sparkles,
    iconColor: "text-teal-500",
  },
  {
    title: "Search in seconds",
    text: "Filter by name or ingredient and jump straight to the recipe you need.",
    icon: Search,
    iconColor: "text-indigo-500",
  },
];

export default function HomePage() {
  return (
    <div className="page-section">
      <section className="container-app">
        <div className="relative overflow-hidden">
          <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
            <h1 className="display-heading max-w-5xl text-balance text-neutral-900">
              <span className="relative inline-block">
                <span className="absolute bottom-[0.18em] left-0 -z-10 h-[0.28em] w-full rounded-sm bg-orange-500/65" />
                Healthy
              </span>{" "}
              meals, zero fuss
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-[1.5] text-neutral-600 md:text-[1.75rem] md:leading-[1.45] lg:text-[2rem]">
              Discover eight quick, whole-food recipes that you can cook tonight
              <span className="hidden md:inline">—</span>
              <span className="md:hidden"> </span>
              no processed junk, no guesswork.
            </p>

            <Link
              to="/recipes"
              className="btn-primary mt-8 px-8 py-4 text-base"
            >
              Start exploring
            </Link>
          </div>

          <div className="relative mt-12 md:mt-14 lg:mt-16">
            <div className="pointer-events-none absolute -left-16 top-16 hidden h-28 w-28 rounded-full border-[14px] border-indigo-500/40 border-b-transparent border-r-transparent md:block lg:h-40 lg:w-40" />
            <div className="pointer-events-none absolute -right-10 top-0 hidden h-48 w-32 rounded-full border-[18px] border-indigo-500/40 border-l-transparent border-b-transparent md:block lg:h-64 lg:w-44" />

            <div className="overflow-hidden rounded-[24px] border-[6px] border-white shadow-sm">
              <ResponsiveImage
                small={heroSmall}
                large={heroLarge}
                alt="Woman preparing vegetables in a bright kitchen"
                aspect="aspect-[16/9]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container-app mt-20 md:mt-24">
        <div className="section-divider pt-16 md:pt-20">
          <h2 className="section-title text-center text-[2.5rem] leading-[1.1] tracking-[-0.02em] md:text-5xl">
            What you’ll get
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-10 md:mt-14 md:grid-cols-3 md:gap-8">
            {featureCards.map(({ title, text, icon: Icon, iconColor }) => (
              <article key={title} className="max-w-sm">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-neutral-200 bg-white shadow-sm">
                  <Icon size={24} className={iconColor} />
                </div>
                <h3 className="mt-5 section-title text-[2rem] leading-[1.15] tracking-[-0.02em]">
                  {title}
                </h3>
                <p className="mt-4 text-lg leading-[1.55] text-neutral-600">
                  {text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-app mt-20 md:mt-24">
        <div className="section-divider pt-16 md:pt-20">
          <div className="grid items-center gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] md:gap-12 lg:gap-16">
            <div className="max-w-xl">
              <h2 className="section-title text-[2.5rem] leading-[1.08] tracking-[-0.02em] md:text-5xl">
                Built for real life
              </h2>

              <div className="mt-6 space-y-5 text-lg leading-[1.6] text-neutral-600">
                <p>
                  Cooking shouldn’t be complicated. These recipes come in under{" "}
                  <span className="font-bold text-orange-500">30 minutes</span>{" "}
                  of active time, fit busy schedules, and taste good enough to
                  repeat.
                </p>
                <p>
                  Whether you’re new to the kitchen or just need fresh ideas,
                  we’ve got you covered.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-[20px]">
              <ResponsiveImage
                small={homeRealLifeSmall}
                large={homeRealLifeLarge}
                alt="Woman preparing vegetables in a bright kitchen"
                aspect="aspect-[16/9]"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="mt-20 md:mt-24">
        <CTASection />
      </div>
    </div>
  );
}
