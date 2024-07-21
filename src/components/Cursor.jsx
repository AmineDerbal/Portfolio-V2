import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const Cursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const mousemove = (e) => {
      console.log({ x: e.clientX, y: e.clientY });
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', mousemove);

    return () => {
      window.removeEventListener('mousemove', mousemove);
    };
  });

  return (
    <div className=" md:block w-full h-full fixed -z-10">
      <motion.div
        animate={{ x: cursorPosition.x, y: cursorPosition.y }}
        className="circle"
      ></motion.div>
    </div>
  );
};
