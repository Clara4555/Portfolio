import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const MagicCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [hoveredElement, setHoveredElement] = useState(null);

  useEffect(() => {
    const moveCursor = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });

    
      const hovered = e.target.closest(".hover-effect");
      setIsHovering(!!hovered);
      setHoveredElement(hovered);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  useEffect(() => {
    if (hoveredElement) {
      hoveredElement.classList.add("shake-effect");

      setTimeout(() => {
        hoveredElement.classList.remove("shake-effect");
      }, 500); 
    }
  }, [hoveredElement]);

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none mix-blend-difference"
      animate={{
        x: cursorPosition.x - 24,
        y: cursorPosition.y - 24,
        scale: isHovering ? 1.8 : 1,
        opacity: isHovering ? 0.7 : 0.4,
      }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.2,
      }}
      style={{
        width: isHovering ? "60px" : "50px",
        height: isHovering ? "60px" : "50px",
        background: isHovering ? "rgba(255, 105, 180, 0.3)" : "rgba(255, 105, 180, 0.1)",
        border: "1px solid rgba(255, 105, 180, 0.5)",
        zIndex: 9999,
      }}
    />
  );
};

export default MagicCursor;
