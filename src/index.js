import React from "react";
import ReactDOM from "react-dom/client";  // ✅ React 18에서 'createRoot' 사용
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// ✅ React 18 방식으로 변경
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// 성능 측정 (필요하면 사용)
reportWebVitals();
