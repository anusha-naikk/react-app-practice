import { useState } from "react";

const Button = () => {
  const [clicks, setClicks] = useState(0);

  return (
    <button
      onClick={() => setClicks(clicks + 1)}
      style={{
        backgroundColor: "#ff66b2",
        border: "none",
        padding: "2rem 4rem",
        fontSize: "2rem",
        borderRadius: "50px",
        color: "white",
        cursor: "pointer",
        boxShadow: "0 8px 20px rgba(255, 102, 178, 0.5)",
        transition: "transform 0.2s ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.05)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)";
      }}
    >
      💕 Clicked {clicks} times 💕
    </button>
  );
};

export default Button;
