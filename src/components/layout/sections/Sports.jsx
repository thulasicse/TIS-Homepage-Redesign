import { ArrowUpRight } from "lucide-react";

import Reveal from "../../animation/Reveal";
import SectionHeading from "../../ui/SectionHeading";

import { sports } from "../../../data/schoolData";

function Sports() {
  return (
    <section
      id="sports"
      className="section-padding bg-[#12372A] text-white"
    >
      <div className="container-main grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
        <Reveal>
          <SectionHeading
            eyebrow="Sports & Activities"
            title="Move. Compete. Grow."
            description="Sport is more than competition. It can build discipline, resilience, teamwork and the confidence to keep improving."
          />
        </Reveal>

        <div className="grid border-t border-white/15">
          {sports.map((sport, index) => (
            <Reveal
              key={sport}
              delay={index * 0.04}
            >
              <a
                href="#admissions"
                className="group flex items-center justify-between border-b border-white/15 py-5"
              >
                <div className="flex items-center gap-5">
                  <span className="text-xs font-bold tracking-[0.15em] text-[#E2C45B]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="font-serif text-2xl font-medium sm:text-3xl">
                    {sport}
                  </span>
                </div>

                <ArrowUpRight
                  size={22}
                  className="text-white/35 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#E2C45B]"
                />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Sports;
