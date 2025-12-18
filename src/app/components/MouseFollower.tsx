"use client";
import { useEffect, useState } from "react";

export default function MouseFollower() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveHandler = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveHandler);
    return () => window.removeEventListener("mousemove", moveHandler);
  }, []);

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 z-[99] 
                 h-5 w-5 rounded-full 
                 bg-gradient-to-tr from-cyan-400/60 to-blue-400/70 
                 border border-cyan-300/60 
                 backdrop-blur-md shadow-[0_0_60px_rgba(34,211,238,0.6)] 
                 transition-transform duration-150 ease-out"
      style={{
        transform: `translate(${pos.x - 10}px, ${pos.y - 10}px)`, // half of 80px = 40px
      }}
    />
  );
}
