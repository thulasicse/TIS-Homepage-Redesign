import { ArrowDownRight } from "lucide-react";

import Reveal from "../../animation/Reveal";
import Button from "../../ui/Button";

function Admissions() {
  return (
    <section
      id="admissions"
      className="section-padding bg-[#C9A227]"
    >
      <div className="container-main">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#12372A]/70">
                Admissions
              </p>

              <h2 className="mt-4 max-w-4xl font-serif text-5xl font-semibold leading-[0.98] tracking-tight text-[#12372A] sm:text-7xl">
                Ready to begin the journey?
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-7 text-[#12372A]/70 sm:text-lg">
                Discover a learning environment built around
                curiosity, confidence, character and a wider
                vision for the future.
              </p>
            </div>

            <div className="flex flex-col items-start gap-5 lg:items-end">
              <ArrowDownRight
                size={46}
                className="hidden text-[#12372A]/60 sm:block"
              />

              <Button
                href="https://tis.edu.in/"
                variant="dark"
              >
                Enquire Now
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Admissions;
