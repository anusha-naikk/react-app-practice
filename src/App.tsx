import BigButton from "./components/Button";

function App() {
  return (
    <div
      style={{
        backgroundColor: "#ffe6f0", // soft pink background
        minHeight: "100vh", // full height
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Comic Sans MS', cursive, sans-serif",
        color: "#ff3399", // bright pink text
      }}
    >
      <h1>🌸 Stay Strong, Beautiful 🌸</h1>
      <p>We’re here with love, hope, and care 💖</p>
      <BigButton />
    </div>
  );
}

export default App;
