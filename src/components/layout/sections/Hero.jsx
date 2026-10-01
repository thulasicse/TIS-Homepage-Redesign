import { motion } from "motion/react";
import { ArrowDown, Play } from "lucide-react";
import Button from "../../ui/Button";

const heroImage =
  "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=2200&q=90";

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0B1712] text-white">
      <img
        src={heroImage}
        alt="Modern school campus architecture"
        className="absolute inset-0 h-full w-full object-cover opacity-55"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#0B1712]/95 via-[#0B1712]/65 to-[#0B1712]/25" />

      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1712] via-transparent to-[#0B1712]/30" />

      <div className="container-main relative flex min-h-screen items-end pb-20 pt-40 sm:pb-24 lg:items-center lg:pb-12">
        <div className="max-w-4xl">
          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-[#E2C45B]"
          >
            Tulas International School • Dehradun
          </motion.p>

          <motion.h1
            initial={{
              opacity: 0,
              y: 35,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.08,
            }}
            className="text-balance font-serif text-5xl font-semibold leading-[0.98] tracking-tight sm:text-7xl lg:text-[92px]"
          >
            Where curiosity
            <br />
            <span className="text-[#E2C45B]">
              becomes confidence.
            </span>
          </motion.h1>

          <motion.p
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.18,
            }}
            className="mt-7 max-w-2xl text-base leading-7 text-white/75 sm:text-lg"
          >
            A contemporary learning environment where
            academics, sports, creativity and character come
            together to shape confident young learners.
          </motion.p>

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.28,
            }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <Button href="#campus">
              Explore Campus
            </Button>

            <Button
              href="#admissions"
              variant="secondary"
            >
              Admissions
            </Button>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-7 right-6 hidden items-center gap-3 text-xs uppercase tracking-[0.18em] text-white/60 lg:flex">
        <span>Scroll to explore</span>

        <ArrowDown
          size={16}
          className="animate-bounce"
        />
      </div>

      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-6 left-1/2 hidden h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur md:flex"
      >
        <Play
          size={14}
          className="rotate-90 fill-white"
        />
      </a>
    </section>
  );
}

export default Hero;
