import React from "react";
import "../styles/components/pageWrapper.css";

const PageWrapper = ({ type = "default", children }) => {
  const inlineStyles = {
    home: {
      padding: "",
      backgroundColor: "rgb(250, 250, 250)",
    },
    default: {
      backgroundColor: "white",
    },
  };

  return (
    <div className="pageWrapper" style={{ ...inlineStyles[type], overflowY: "auto", height: "100vh" }}>
      {children}
    </div>
  );
};

export default PageWrapper;
