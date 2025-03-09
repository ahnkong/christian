import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BackgroundWrapper from "../components/BackgroundWrapper";
import PageWrapper from "../components/PageWrapper";
import IconHeart from "../assets/image/imageHeart.png"
import "../styles/pages/initPage.css"
import IconJesus from "../assets/image/imageJesus.png"
const InitPage = () => {
    const navigate = useNavigate();
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setFadeOut(true);  // ✅ 페이드 아웃 시작
        }, 2000); // 2초 동안 화면 유지

        const navigateTimer = setTimeout(() => {
            navigate("/home");
        }, 2500); // 0.5초 후 페이지 이동

        return () => {
            clearTimeout(timer);
            clearTimeout(navigateTimer);
        };
    }, [navigate]);

    
    return (
        <BackgroundWrapper type="sparkle">
        {/* <BackgroundWrapper type="cloud"> */}
        <div className={`initPage-container ${fadeOut ? "fadeOut" : ""}`}>
            <header className="initPage-header">Christian to God </header>
            <main className="initPage-image-container">
                <img src={IconJesus} alt="손으로 하트를 감싸고 있는 모양" className="initPage-image" />
            </main>
            <footer className="initPage-footer">하나님의 말씀 안에서 믿음을 다지고, 교리로 신앙을 더욱 깊이 있게!</footer>
        </div>
        </BackgroundWrapper>
    );
};

export default InitPage