import { useEffect, useState } from "react";
import { motion } from "motion/react";

function CustomCursor() {
  const [enabled, setEnabled] = useState(false);

  const [position, setPosition] = useState({
    x: -100,
    y: -100,
  });

  const [active, setActive] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(
      "(pointer: fine)"
    );

    setEnabled(media.matches);

    const handleMedia = (event) => {
      setEnabled(event.matches);
    };

    media.addEventListener(
      "change",
      handleMedia
    );

    if (!media.matches) {
      return () => {
        media.removeEventListener(
          "change",
          handleMedia
        );
      };
    }

    const move = (event) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    const enter = (event) => {
      if (
        event.target.closest(
          "a, button, input, textarea, select"
        )
      ) {
        setActive(true);
      }
    };

    const leave = (event) => {
      if (
        event.target.closest(
          "a, button, input, textarea, select"
        )
      ) {
        setActive(false);
      }
    };

    window.addEventListener(
      "mousemove",
      move
    );

    document.addEventListener(
      "mouseover",
      enter
    );

    document.addEventListener(
      "mouseout",
      leave
    );

    return () => {
      media.removeEventListener(
        "change",
        handleMedia
      );

      window.removeEventListener(
        "mousemove",
        move
      );

      document.removeEventListener(
        "mouseover",
        enter
      );

      document.removeEventListener(
        "mouseout",
        leave
      );
    };
  }, []);

  if (!enabled) {
    return null;
  }

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[110] hidden h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#C9A227] md:block"
      animate={{
        x: position.x,
        y: position.y,
        scale: active ? 1.65 : 1,
        opacity: active ? 0.75 : 0.55,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 35,
        mass: 0.25,
      }}
    >
      <span className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A227]" />
    </motion.div>
  );
}

export default CustomCursor;