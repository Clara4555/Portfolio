import React from "react";

const ShinyEffect = ({ left, right, top, size = 500 }) => {
  
  const positionStyles = {
    top: `${top}px`,
    width: `${size}px`,
    height: `${size}px`,
    zIndex: -1, 
    ...(left !== undefined ? { left: `${left}px` } : {}),
    ...(right !== undefined ? { right: `${right}px` } : {}),
  };

  return <div className="shiny-effect" style={positionStyles}></div>;
};

export default ShinyEffect;
