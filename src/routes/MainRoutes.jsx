import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../pages";
import { Footer, NavBar, Carts } from "../components";

export const MainRoutes = () => {
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (event) => {
    setIsDragging(true);
    setOffset({
      x: event.clientX - position.x,
      y: event.clientY - position.y,
    });
  };

  const handleMouseMove = (event) => {
    if (isDragging) {
      setPosition({
        x: event.clientX - offset.x,
        y: event.clientY - offset.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
      <NavBar />
      <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8 gap-8 flex flex-col">
        <div
          style={{
            position: "absolute",
            left: position.x,
            top: position.y,
          }}
        >
          <button
            onMouseDown={handleMouseDown}
            className="fixed"
            style={{
              cursor: "grab",
              padding: "8px 16px",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "4px",
              marginBottom: "8px",
              zIndex:"100",
            }}
          >
            Drag Me
          </button>
          <Carts />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};
