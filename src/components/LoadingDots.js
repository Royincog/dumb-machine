import React, { useState, useEffect } from "react";

function LoadingDots() {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots) => (prevDots.length < 3 ? prevDots + "•" : ""));
    }, 100); // Change dots every 1 second

    return () => clearInterval(interval); // Clean up on component unmount
  }, []);

  return <>{dots}</>;
}

export default LoadingDots;
