import Reveal from "../../animation/Reveal";
import SectionHeading from "../../ui/SectionHeading";

import { facilities } from "../../../data/schoolData";

function Facilities() {
  return (
    <section className="section-padding bg-[var(--cream)]">
      <div className="container-main">
        <Reveal>
          <SectionHeading
            eyebrow="Facilities"
            title="Spaces that support every side of student life."
            description="Purpose-built environments help students learn, collaborate, explore interests and develop healthy routines."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {facilities.map((facility, index) => (
            <Reveal
              key={facility.title}
              delay={index * 0.06}
            >
              <article className="group overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[var(--paper)]">
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="image-cover transition duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="p-7">
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#C9A227]">
                    0{index + 1}
                  </p>

                  <h3 className="text-2xl font-semibold text-[var(--ink)]">
                    {facility.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                    {facility.text}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Facilities;
