import React from "react";

const CustomButton = ({ width, height, text }) => {
  return (
    <button
      style={{
        width: width || "100px", 
        height: height || "40px", 
        backgroundColor: "#39D5FF", 
        color: "#fff", 
        borderRadius: "8px",
        border: "none",
        cursor: "pointer",
      }}
      className="hover:bg-blue-700"
    >
      {text || "Button"}
    </button>
  );
};

export default CustomButton;
