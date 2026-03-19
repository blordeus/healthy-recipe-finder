import CTASection from "../components/recipes/CTASection";
import ResponsiveImage from "../components/ResponsiveImage";
import BulletList from "../components/common/BulletList";

import missionSmall from "../assets/images/image-about-our-mission-small.webp";
import missionLarge from "../assets/images/image-about-our-mission-large.webp";
import beyondSmall from "../assets/images/image-about-beyond-the-plate-small.webp";
import beyondLarge from "../assets/images/image-about-beyond-the-plate-large.webp";

const whyWeExist = [
  {
    title: "Cut through the noise.",
    text: "The internet is bursting with recipes, yet most busy cooks still default to take-away or packaged foods. We curate a tight collection of fool-proof dishes so you can skip the scrolling and start cooking.",
  },
  {
    title: "Empower home kitchens.",
    text: "When you control what goes into your meals, you control how you feel. Every recipe is built around unrefined ingredients and ready in about half an hour of active prep.",
  },
  {
    title: "Make healthy look good.",
    text: "High-resolution imagery shows you exactly what success looks like because we eat with our eyes first, and confidence matters.",
  },
];

const foodPhilosophy = [
  {
    title: "Whole ingredients first.",
    text: "Fresh produce, grains, legumes, herbs, and quality fats form the backbone of every recipe.",
  },
  {
    title: "Flavor without compromise.",
    text: "Spices, citrus, and natural sweetness replace excess salt, sugar, and additives.",
  },
  {
    title: "Respect for time.",
    text: "Weeknight meals should slot into real schedules; weekend cooking can be leisurely but never wasteful.",
  },
  {
    title: "Sustainable choices.",
    text: "Short ingredient lists cut down on food waste and carbon footprint, while plant-forward dishes keep things planet-friendly.",
  },
];

const beyondThePlatePoints = [
  "Encourage family dinners and social cooking.",
  "Reduce reliance on single-use packaging and delivery waste.",
  "Spark curiosity about seasonal produce and local agriculture.",
];

export default function AboutPage() {
  return (
    <div className="page-section">
      <section className="container-app">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] lg:gap-14">
          <div className="max-w-xl">
            <span className="eyebrow">Our mission</span>

            <h1 className="mt-5 section-title text-[2.75rem] leading-[1.08] tracking-[-0.02em] md:text-[4rem]">
              Help more people cook nourishing meals, more often.
            </h1>

            <div className="mt-6 space-y-5 text-base leading-[1.7] text-neutral-600 md:text-lg">
              <p>
                Healthy Recipe Finder was created to prove that healthy eating can be
                convenient, affordable, and genuinely delicious.
              </p>
              <p>
                We showcase quick, whole-food dishes that anyone can master. No fancy
                equipment, no ultra-processed shortcuts, just honest ingredients and
                straightforward steps.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-[20px]">
            <ResponsiveImage
              small={missionSmall}
              large={missionLarge}
              alt="Woman preparing vegetables in her kitchen"
              aspect="aspect-[4/3] md:aspect-[16/11]"
              priority
            />
          </div>
        </div>
      </section>

      <section className="container-app mt-20 md:mt-24">
        <div className="section-divider pt-16 md:pt-20">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.2fr)] lg:gap-14">
            <div>
              <h2 className="section-title text-[2.5rem] leading-[1.08] tracking-[-0.02em] md:text-[3.5rem]">
                Why we exist
              </h2>
            </div>

            <BulletList items={whyWeExist} />
          </div>
        </div>
      </section>

      <section className="container-app mt-20 md:mt-24">
        <div className="section-divider pt-16 md:pt-20">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.2fr)] lg:gap-14">
            <div>
              <h2 className="section-title text-[2.5rem] leading-[1.08] tracking-[-0.02em] md:text-[3.5rem]">
                Our food philosophy
              </h2>
            </div>

            <BulletList items={foodPhilosophy} />
          </div>
        </div>
      </section>

      <section className="container-app mt-20 md:mt-24">
        <div className="section-divider pt-16 md:pt-20">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.15fr)] lg:gap-14">
            <div>
              <h2 className="section-title text-[2.5rem] leading-[1.08] tracking-[-0.02em] md:text-[3.5rem]">
                Beyond the plate
              </h2>

              <p className="mt-5 text-base leading-[1.7] text-neutral-600 md:text-lg">
                We believe food is a catalyst for community and well-being. By sharing
                approachable recipes, we hope to:
              </p>

              <ul className="mt-5 list-disc space-y-2 pl-5 text-base leading-[1.7] text-neutral-600 md:text-lg">
                {beyondThePlatePoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>

            <div className="overflow-hidden rounded-[20px]">
              <ResponsiveImage
                small={beyondSmall}
                large={beyondLarge}
                alt="Family holding vegetables and smiling in the kitchen"
                aspect="aspect-[16/10]"
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