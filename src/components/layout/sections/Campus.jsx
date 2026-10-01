import { ArrowUpRight } from "lucide-react";

import Reveal from "../../animation/Reveal";
import SectionHeading from "../../ui/SectionHeading";

const largeImage =
  "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=1800&q=85";

const smallImage =
  "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1000&q=85";

function Campus() {
  return (
    <section
      id="campus"
      className="section-padding bg-[var(--paper)]"
    >
      <div className="container-main">
        <Reveal>
          <SectionHeading
            eyebrow="The Campus"
            title="A place designed for discovery."
            description="Learning continues through the spaces students move through every day — classrooms, activity areas, sports facilities, residential spaces and quiet corners for reflection."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-[1.4fr_0.6fr]">
          <Reveal>
            <div className="group relative aspect-[16/10] overflow-hidden rounded-[2rem] bg-[var(--cream)]">
              <img
                src={largeImage}
                alt="School campus and learning environment"
                className="image-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-5 rounded-2xl bg-black/35 p-5 backdrop-blur-md">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#E2C45B]">
                    Campus experience
                  </p>

                  <p className="mt-1 text-lg font-semibold text-white">
                    Space to learn, play and grow.
                  </p>
                </div>

                <ArrowUpRight className="shrink-0 text-white" />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid h-full gap-5">
              <div className="overflow-hidden rounded-[2rem] bg-[var(--cream)]">
                <img
                  src={smallImage}
                  alt="Students in a collaborative learning space"
                  className="image-cover transition duration-700 hover:scale-105"
                />
              </div>

              <div className="rounded-[2rem] bg-[#12372A] p-7 text-white">
                <p className="font-serif text-3xl font-semibold">
                  Green spaces.
                  <br />
                  Open possibilities.
                </p>

                <p className="mt-4 text-sm leading-6 text-white/65">
                  A campus environment can make learning
                  feel active, social and connected to the
                  world outside the classroom.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Campus;
