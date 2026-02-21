"use client";

/**
 * Note: Use position fixed according to your needs
 * Desktop navbar is better positioned at the bottom
 * Mobile navbar is better positioned at bottom right.
 **/

import { cn } from "@/lib/utils";

import { IconLayoutNavbarExpandFilled } from "@tabler/icons-react";

import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";

import { useRef, useState } from "react";

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
}: {
  items: {
    title: string;
    icon?: React.ReactNode;
    href?: string;
    onClick?: () => void;
  }[];
  desktopClassName?: string;
  mobileClassName?: string;
}) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
      <FloatingDockMobile items={items} className={mobileClassName} />
    </>
  );
};

const FloatingDockMobile = ({
  items,
  className,
}: {
  items: {
    title: string;
    icon?: React.ReactNode;
    href?: string;
    onClick?: () => void;
  }[];
  className?: string;
}) => {
  const [open, setOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    // <div className={cn("relative block md:hidden", className)}>
    <div className={cn("fixed top-4 right-4 z-50 md:hidden ", className)}>
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="nav"
            // className="absolute inset-x-0 bottom-full mb-2 flex flex-col gap-2"
            className="absolute right-0 top-full mt-2 flex flex-col gap-2 items-end bg-gray-600/30 p-2 rounded-4xl backdrop-blur-xl  shadow-lg shadow-black/10 dark:bg-white/30"
          >
            {items.map((item, idx) => {
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{
                    opacity: 0,
                    y: 10,
                    transition: { delay: idx * 0.05 },
                  }}
                  whileHover={{ scale: 1.4 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className="relative"
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onTouchStart={() => setHoveredIndex(idx)}
                  onTouchEnd={() => setHoveredIndex(null)}
                >
                  <a
                    href={item.href}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 dark:bg-neutral-900"
                    onClick={item.onClick}
                  >
                    <div className="h-4 w-4 flex items-center justify-center">
                      {item.icon}
                    </div>

                    {/* SHOW TITLE ONLY ON HOVER */}
                    <AnimatePresence>
                      {hoveredIndex === idx && (
                        <motion.span
                          initial={{ opacity: 0, x: 10, scale: 0.8 }}
                          animate={{ opacity: 1, x: 0, scale: 1 }}
                          exit={{ opacity: 0, x: 10, scale: 0.8 }}
                          transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 18,
                          }}
                          className="absolute right-full mr-3 whitespace-nowrap rounded-md bg-neutral-800 px-2 py-1 text-xs text-white"
                        >
                          {item.title}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </a>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen(!open)}
        title="Menu"
        className="
    group
    relative
    flex  h-11 w-12 items-center justify-center
    rounded-full
    border border-white/20 dark:border-white/10
    bg-white/60 dark:bg-neutral-900/60
    backdrop-blur-md
    shadow-lg shadow-black/10 dark:shadow-black/40
    transition-all duration-300 ease-out
    hover:scale-110 hover:shadow-xl
    active:scale-95
  cursor-pointer"
      >
        {/* glow ring */}
        <span
          className="
    absolute inset-0 rounded-full
    opacity-0 group-hover:opacity-100
    transition duration-300
    bg-linear-to-tr from-indigo-500/20 via-purple-500/20 to-pink-500/20
  "
        />

        <IconLayoutNavbarExpandFilled
          className={`
      relative z-10 h-5 w-5
      text-neutral-600 dark:text-neutral-300
      transition-transform duration-300
      ${open ? "rotate-45 scale-110" : "rotate-0"}
    `}
        />
      </button>
    </div>
  );
};

const FloatingDockDesktop = ({
  items,
  className,
}: {
  items: { title: string; icon?: React.ReactNode; href?: string }[];
  className?: string;
}) => {
  let mouseX = useMotionValue(Infinity);
  //   Hide specific items in desktop
  const filteredItems = items.filter(
    (item) => item.title !== "Resume" && item.title !== "Theme",
  );
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "mx-auto hidden h-16 items-end gap-4 rounded-2xl bg-gray-100 px-4 pb-3 md:flex dark:bg-neutral-900",
        className,
      )}
    >
      {filteredItems.map((item) => (
        <IconContainer mouseX={mouseX} key={item.title} {...item} />
      ))}
    </motion.div>
  );
};

function IconContainer({
  mouseX,
  title,
  icon,
  href,
}: {
  mouseX: MotionValue;
  title: string;
  icon?: React.ReactNode;
  href?: string;
}) {
  let ref = useRef<HTMLDivElement>(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  // let widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  // let heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  let widthTransform = useTransform(distance, [-150, 0, 150], [30, 50, 30]); // 80 to 60 for scale
  let heightTransform = useTransform(distance, [-150, 0, 150], [30, 50, 30]); // 80 t0 60   // for space
  // 2nd array mid vale is for scale
  let widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 30, 20]); //30   // icon scale
  let heightTransformIcon = useTransform(
    distance,
    [-150, 0, 150],
    [20, 30, 20],
  ); //

  // Array 2: [40, 60, 40] — the icon size in pixels at each of those distances
  // [normal,max,back to normal]

  let width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  let widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [hovered, setHovered] = useState(false);

  return (
    <a href={href}>
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative flex aspect-square items-center justify-center rounded-full bg-gray-200 dark:bg-neutral-800"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className="absolute -top-4 left-1/2 w-fit rounded-md border   font-bold  px-2 py-0.5 text-xs whitespace-pre text-neutral-700 dark:border-neutral-900 dark:bg-neutral-800 dark:text-white"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center"
        >
          {icon}
        </motion.div>
      </motion.div>
    </a>
  );
}

// Array 1: [-150, 0, 150] — mouse distance from the icon center (in pixels)

// -150 = mouse is 150px to the left
// 0 = mouse is directly over the icon
// 150 = mouse is 150px to the right

// Array 2: [40, 60, 40] — the icon size in pixels at each of those distances

// 40 = normal size when mouse is far away
// 60 = max size when mouse is directly on it
// 40 = back to normal as mouse moves away
