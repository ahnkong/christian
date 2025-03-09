import React from "react";
import "../styles/components/backgroundWrapper.css"; // ✅ CSS 파일 import
import background_sparkle from "../assets/background/background_sparkle.gif";
import background_cloud from "../assets/background/background_cloud.gif";
import background_star from "../assets/background/background_star.gif";
import background_River from "../assets/background/background_River.gif";


import white from "../assets/background/background_white.png";
import imagePerson from "../assets/image/imagePerson.jpeg";
const BackgroundWrapper = ({ type = "white", children }) => {
  // ✅ 배경 관련 스타일만 유지
  const inlineStyles = {
    sparkle: {
      backgroundImage: `url(${background_sparkle})`, // ✅ 올바른 문법
      backgroundSize: "cover", // ✅ 화면 가득 채우도록 설정
      backgroundPosition: "center", // ✅ 이미지 중앙 정렬
      backgroundRepeat: "no-repeat", // ✅ 이미지 반복 제거
    },    
    cloud: {
      backgroundImage: `url(${background_cloud})`, // ✅ 올바른 문법
      backgroundSize: "cover", // ✅ 화면 가득 채우도록 설정
      backgroundPosition: "center", // ✅ 이미지 중앙 정렬
      backgroundRepeat: "no-repeat", // ✅ 이미지 반복 제거
    },  
    river: {
      backgroundImage: `url(${background_River})`, // ✅ 올바른 문법
      backgroundSize: "cover", // ✅ 화면 가득 채우도록 설정
      backgroundPosition: "center", // ✅ 이미지 중앙 정렬
      backgroundRepeat: "no-repeat", // ✅ 이미지 반복 제거
    },    
    star: {
      backgroundImage: `url(${background_star})`, // ✅ 올바른 문법
      backgroundSize: "cover", // ✅ 화면 가득 채우도록 설정
      backgroundPosition: "center", // ✅ 이미지 중앙 정렬
      backgroundRepeat: "no-repeat", // ✅ 이미지 반복 제거
    },
    white: {
      backgroundImage: `url(${white})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
    debug: {
      backgroundColor: "rgb(113, 250, 250)",
      backgroundImage: "none",
    },
    loading: {
      backgroundImage: `url(${imagePerson})`, // ✅ 올바른 문법
      backgroundSize: "cover", // ✅ 화면 가득 채우도록 설정
      backgroundPosition: "center", // ✅ 이미지 중앙 정렬
      backgroundRepeat: "no-repeat", // ✅ 이미지 반복 제거
    },
  };

  return (
    <div className="background-wrapper" style={inlineStyles[type]}>
      {children}
    </div>
  );
};

export default BackgroundWrapper;
