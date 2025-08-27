import { useEffect, useRef } from "react";
import '../css/MouseMove.css'

export default function CursorMove() {
     const cursorRef = useRef(null);

     useEffect(() => {
          const handleMouseMove = (e) => {
               if (cursorRef.current) {
                    cursorRef.current.style.top = `${e.clientY}px`;
                    cursorRef.current.style.left = `${e.clientX}px`;
                    cursorRef.current.style.display = "block";
               }

               if (timeoutId) clearTimeout(timeoutId);
               timeoutId = setTimeout(() => {
                    if (cursorRef.current) {
                         cursorRef.current.style.display = "none";
                    }
               }, 5000);
          };

          const handleMouseOut = () => {
               if (cursorRef.current) {
                    cursorRef.current.style.display = "none";
               }
          };

          document.addEventListener("mousemove", handleMouseMove);
          document.addEventListener("mouseout", handleMouseOut);

          return () => {
               document.removeEventListener("mousemove", handleMouseMove);
               document.removeEventListener("mouseout", handleMouseOut);
          };
     }, []);

     return (
          <div ref={cursorRef} className="cursor-move" style={{
               position: "fixed", zIndex: "9999", width: "7px", height: "7px",
               borderRadius: "50%", backgroundColor: "#ffffff90", pointerEvents: "none", top: "50%", left: "50%",
          }} ></div>
     );
}
