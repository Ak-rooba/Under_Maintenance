import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      setLoading(false);
      window.location.href = "https://clubelysium.in/";
    }, 3000);

    return () => clearTimeout(redirectTimer);
  }, []);

  return (
    <>
      {loading ? (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(255, 255, 255, 0.75)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 50,
          }}
        >
          <div
            style={{
              borderRadius: "50%",
              borderWidth: "4px",
              borderStyle: "solid",
              borderTopColor: "#7e22ce",
              borderBottomColor: "#7e22ce",
              borderLeftColor: "transparent",
              borderRightColor: "transparent",
              width: "64px",
              height: "64px",
              animation: "spin 1s linear infinite", // Corrected animation definition
            }}
          ></div>
        </div>
      ) : null}

      <p
        className=""
        style={{
          fontSize: "4rem",
          fontWeight: "bold",
          opacity: loading ? 0.5 : 1,
        }}
      >
        Under Maintenance
      </p>
    </>
  );
}

export default App;
