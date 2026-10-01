import Reveal from "../../animation/Reveal";
import SectionHeading from "../../ui/SectionHeading";
import Button from "../../ui/Button";
import { academics } from "../../../data/schoolData";

function Academics() {
  return (
    <section
      id="academics"
      className="section-padding bg-[var(--cream)]"
    >
      <div className="container-main">
        <Reveal>
          <SectionHeading
            eyebrow="Academics"
            title="A learning journey built for the future."
            description="Our academic approach combines strong foundations with practical learning, curiosity, communication and the skills students need beyond the classroom."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {academics.map((item, index) => (
            <Reveal key={item.number} delay={index * 0.08}>
              <article className="group h-full rounded-[2rem] border border-black/5 bg-[var(--paper)] p-7 transition duration-500 hover:-translate-y-2 hover:shadow-xl dark:border-white/10 dark:bg-white/5 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <span className="font-mono text-sm font-semibold tracking-[0.2em] text-[#12372A]/60 dark:text-white/50">
                    {item.number}
                  </span>

                  <span className="h-10 w-10 rounded-full border border-[#12372A]/10 transition duration-500 group-hover:rotate-45 dark:border-white/10" />
                </div>

                <h3 className="mt-12 font-serif text-2xl font-semibold text-[#12372A] dark:text-white sm:text-3xl">
                  {item.title}
                </h3>

                <p className="mt-5 text-sm leading-7 text-[var(--muted)] sm:text-base">
                  {item.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-10">
            <Button href="#admissions" variant="dark">
              Explore admissions
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Academics;