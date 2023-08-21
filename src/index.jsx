import "./style.css";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience.jsx";
import { StrictMode } from "react";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <StrictMode>
    <Canvas
      eventSource={document.getElementById("root")}
      eventPrefix="client"
      shadows
      camera={{ position: [0, 0, 20], fov: 50 }}
    >
      <Experience />
    </Canvas>
  </StrictMode>
);
