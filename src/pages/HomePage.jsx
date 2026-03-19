import { Link } from "react-router-dom";
import CTASection from "../components/recipes/CTASection";
import FeatureCard from "../components/common/FeatureCard";
import ResponsiveImage from "../components/ResponsiveImage";
import { FEATURE_CARDS } from "../data/featureCards";
import heroSmall from "../assets/images/image-home-hero-small.webp";
import heroLarge from "../assets/images/image-home-hero-large.webp";
import homeRealLifeSmall from "../assets/images/image-home-real-life-small.webp";
import homeRealLifeLarge from "../assets/images/image-home-real-life-large.webp";

export default function HomePage() {
  return (
    <div className="page-section">
      <section className="">
        <div className="relative">
          <div className="mx-auto px-16 md:px-12 lg:px-4 flex max-w-4xl flex-col items-center text-center">
            <h1 className="display-heading max-w-5xl text-balance text-neutral-900">
              <span className="relative inline-block">
                <span className="absolute bottom-[0.18em] left-0 h-[0.28em] w-full rounded-sm bg-orange-500/65" />
                <span className="relative">Healthy</span>
              </span>{" "}
              meals, zero fuss
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-[1.5] text-neutral-600 md:text-[1.55rem] md:leading-[1.45] lg:text-[1.5rem]">
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

          <div className="pointer-events-none absolute inset-x-0 top-50 -z-0 h-[34rem] md:h-[40rem] lg:h-[44rem]">
            <svg
              viewBox="0 0 1440 700"
              fill="none"
              className="h-full w-full"
              preserveAspectRatio="none"
            >
              <path
                d="M-40 420C90 420 90 330 220 330C350 330 350 520 480 520C610 520 610 200 740 200C870 200 870 470 1000 470C1130 470 1130 150 1260 150C1360 150 1410 250 1480 250"
                stroke="rgba(105,125,219,0.28)"
                strokeWidth="18"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <div className="container-app relative mt-12 md:mt-14 lg:mt-16">
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

          {FEATURE_CARDS.length > 0 && (
            <div className="mt-12 grid grid-cols-1 gap-16 md:mt-14 md:grid-cols-1 md:gap-20">
              {FEATURE_CARDS.map(({ id, title, text, icon }) => (
                <FeatureCard 
                  key={id}
                  title={title}
                  text={text}
                  icon={icon}
                />
              ))}
            </div>
          )}
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
                  <span className="relative inline-block font-bold">
                    <span className="absolute bottom-[0.5em] left-0 h-[0.28em] w-full rounded-sm bg-orange-500/65" />
                    <span className="relative">30 minutes</span>
                  </span>{" "}
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
