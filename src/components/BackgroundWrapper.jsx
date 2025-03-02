import React from "react";
import "../styles/components/backgroundWrapper.css"; // ✅ CSS 파일 import

import White from "../assets/background/background_white.png";

const BackgroundWrapper = ({ type = "white", children }) => {
  // ✅ 배경 관련 스타일만 유지
  const inlineStyles = {
    gray: {
      backgroundColor: "rgb(250, 250, 250)",
      backgroundImage: "none",
    },
    white: {
      backgroundImage: `url(${White})`,
    },
    debug: {
        backgroundColor: "rgb(113, 250, 250)",
        backgroundImage: "none",
      },
  };

  return (
    <div className="background-wrapper" style={inlineStyles[type]}>
      {children}
    </div>
  );
};

export default BackgroundWrapper;
