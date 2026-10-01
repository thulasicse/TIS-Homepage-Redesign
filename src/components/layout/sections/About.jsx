import Reveal from "../../animation/Reveal";
import SectionHeading from "../../ui/SectionHeading";
import Button from "../../ui/Button";

const image =
  "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1600&q=85";

function About() {
  return (
    <section
      id="about"
      className="section-padding bg-[var(--paper)]"
    >
      <div className="container-main grid items-center gap-12 lg:grid-cols-[1fr_0.95fr] lg:gap-20">
        <Reveal>
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-[2rem] bg-[var(--cream)]">
              <img
                src={image}
                alt="Students learning in a modern school environment"
                className="image-cover transition duration-700 hover:scale-105"
              />
            </div>

            <div className="glass absolute -bottom-6 -right-4 max-w-[220px] rounded-2xl p-5 shadow-xl sm:-right-8">
              <p className="font-serif text-3xl font-semibold text-[#12372A] dark:text-white">
                Beyond
              </p>

              <p className="mt-1 text-sm leading-6 text-[var(--muted)]">
                the classroom, toward confidence.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <SectionHeading
            eyebrow="About TIS"
            title="Education that extends beyond the classroom."
            description="Tulas International School brings together academic learning, sport, creativity, leadership and residential life in an environment designed around student growth."
          />

          <div className="mt-8 space-y-5 text-sm leading-7 text-[var(--muted)] sm:text-base">
            <p>
              The goal is not simply to prepare students for
              examinations, but to encourage curiosity,
              responsibility, communication and the confidence
              to participate in a changing world.
            </p>

            <p>
              From focused classroom learning to activities
              beyond the timetable, every experience can become
              part of a student's wider journey.
            </p>
          </div>

          <div className="mt-9">
            <Button
              href="#academics"
              variant="dark"
            >
              Discover our approach
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default About;
