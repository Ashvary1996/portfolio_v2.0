"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type Card = {
  id: number;
  content: React.JSX.Element | React.ReactNode | string;
  className: string;
  thumbnail: string;
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const [selected, setSelected] = useState<Card | null>(null);
  const [lastSelected, setLastSelected] = useState<Card | null>(null);

  const handleClick = (card: Card) => {
    // setLastSelected(selected);
    // setSelected(card);
    if (selected?.id === card.id) {
      // If same card clicked again → close it
      setSelected(null);
    } else {
      setLastSelected(selected);
      setSelected(card);
    }
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  return (
    <div className="w-full h-full p-10 grid grid-cols-1 md:grid-cols-3  max-w-7xl mx-auto gap-4 relative">
      {cards.map((card, i) => (
        <div key={i} className={cn(card.className, "")}>
          <motion.div
            onClick={() => {
              handleClick(card);
            }}
            className={cn(
              card.className,
              "relative overflow-hidden",
              selected?.id === card.id
                ? "fixed inset-0 m-auto h-[85vh] w-[95vw] md:w-[80vw] z-50 flex justify-center items-center rounded-xl cursor-pointer"
                : lastSelected?.id === card.id
                  ? "z-40 bg-white rounded-xl h-full w-full"
                  : "bg-white rounded-xl h-full w-full",
            )}
            layoutId={`card-${card.id}`}
          >
            {selected?.id === card.id && <SelectedCard selected={selected} />}
            <ImageComponent card={card} />
          </motion.div>
        </div>
      ))}
      <motion.div
        onClick={handleOutsideClick}
        // className={cn(
        //   "absolute h-full w-full left-0 top-0 bg-black opacity-0 z-10",
        //   selected?.id ? "pointer-events-auto" : "pointer-events-none"
        // )}
        // animate={{ opacity: selected?.id ? 0.3 : 0 }}
        className="fixed inset-0 bg-black z-40"
        animate={{ opacity: selected ? 0.5 : 0 }}
        style={{ pointerEvents: selected ? "auto" : "none" }}
      />
    </div>
  );
};

const ImageComponent = ({ card }: { card: Card }) => {
  return (
    <motion.img
      layoutId={`image-${card.id}-image`}
      src={card.thumbnail}
      height="500"
      width="500"
      // className={cn(
      // "object-cover object-top absolute inset-0 h-full w-full transition duration-200"
      // )}
      className={cn(
        "absolute inset-0 h-full w-full object-contain transition-all duration-300 cursor-pointer hover:scale-105",
      )}
      alt="thumbnail"
    />
  );
};

// const SelectedCard = ({ selected }: { selected: Card | null }) => {
//   return (
//     <div className="bg-transparent h-full w-full flex flex-col justify-end rounded-lg shadow-2xl relative z-[60]">
//       <motion.div
//         initial={{
//           opacity: 0,
//         }}
//         animate={{
//           opacity: 0.6,
//         }}
//         className="absolute inset-0 h-full w-full bg-black opacity-60 z-10"
//       />
//       <motion.div
//         layoutId={`content-${selected?.id}`}
//         initial={{
//           opacity: 0,
//           y: 100,
//         }}
//         animate={{
//           opacity: 1,
//           y: 0,
//         }}
//         exit={{
//           opacity: 0,
//           y: 100,
//         }}
//         transition={{
//           duration: 0.3,
//           ease: "easeInOut",
//         }}
//         className="relative px-8 pb-4 z-[70]"
//       >
//         {selected?.content}
//       </motion.div>
//     </div>
//   );
// };

const SelectedCard = ({ selected }: { selected: Card | null }) => {
  return (
    <div className="h-full w-full flex flex-col justify-end rounded-lg relative z-[60]">
      <motion.div
        layoutId={`content-${selected?.id}`}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="relative px-8 pb-4 z-[70]"
      >
        {selected?.content}
      </motion.div>
    </div>
  );
};
