import { Quote } from "lucide-react";

import Reveal from "../../animation/Reveal";

function Testimonials() {
  return (
    <section className="section-padding bg-[var(--paper)]">
      <div className="container-main">
        <Reveal>
          <div className="rounded-[2rem] bg-[#F1ECE0] p-8 dark:bg-[#10221a] sm:p-12 lg:p-16">
            <Quote
              className="mb-8 text-[#C9A227]"
              size={38}
            />

            <blockquote className="max-w-5xl font-serif text-3xl font-medium leading-tight text-[#12372A] dark:text-white sm:text-5xl lg:text-6xl">
              “A school journey is not only about what
              students know, but who they become along
              the way.”
            </blockquote>

            <div className="mt-9 flex items-center gap-4">
              <div className="h-px w-10 bg-[#C9A227]" />

              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--muted)]">
                TIS school philosophy
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Testimonials;
