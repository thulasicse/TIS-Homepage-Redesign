import {
  motion,
  useScroll,
  useSpring,
} from "motion/react";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(
    scrollYProgress,
    {
      stiffness: 120,
      damping: 30,
      restDelta: 0.001,
    }
  );

  return (
    <motion.div
      aria-hidden="true"
      className="fixed left-0 top-0 z-[100] h-1 w-full origin-left bg-[#C9A227]"
      style={{
        scaleX,
      }}
    />
  );
}

export default ScrollProgress;