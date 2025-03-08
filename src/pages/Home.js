import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackgroundWrapper from "../components/BackgroundWrapper";
import "../styles/pages/home.css";

import HeartIcon from "../assets/image/imageHeart.png";
import BibleIcon from "../assets/image/imageBible.png";
import ImageBook from "../assets/image/imageBook.png";

/** ✅ 문답 카드 데이터 */
const catechismCards = [
  {
    id: 1,
    category: "웨스터민스터",
    title: "소요리 문답",
    number: "107",
    description: "자녀들과 평신도들을 교육하기 위한 소요리 문답",
    background: "yellow",
    icon: HeartIcon,
    url: "/shorter-catechism"
  },
  {
    id: 2,
    category: "웨스터민스터",
    title: "대요리 문답",
    number: "196",
    description: "목회자와 평신도들을 위한 문답",
    background: "blue",
    icon: BibleIcon,
    url: "/larger-catechism"
  },
  {
    id: 3,
    category: "하이델베르크",
    title: "하이델베르크 문답",
    number: "129",
    description: "기독교의 기본 교리",
    background: "green",
    icon: ImageBook,
    url: "/heidelberg-catechism"
  },
];

const Home = () => {
  const navigate = useNavigate();
  const [selectedTopic, setSelectedTopic] = useState("웨스터민스터");

  /** ✅ 선택된 주제에 따라 필터링 */
  const filteredCards = catechismCards.filter(card => card.category === selectedTopic);

  return (
    <BackgroundWrapper type="white">
      <header className="header_home">
        <h1>Christian to God</h1>
        <p className="header_description">공부하고 싶은 주제를 선택하세요</p>

        {/* ✅ 슬라이드 토글 버튼 */}
        <div className="toggle-switch">
          <div className="toggle-bg">
            <div 
              className={`toggle-slider ${selectedTopic === "하이델베르크" ? "right" : "left"}`}
            />
            <button
              className={`toggle-option ${selectedTopic === "웨스터민스터" ? "active" : ""}`}
              onClick={() => setSelectedTopic("웨스터민스터")}
            >
              웨스터민스터
            </button>
            <button
              className={`toggle-option ${selectedTopic === "하이델베르크" ? "active" : ""}`}
              onClick={() => setSelectedTopic("하이델베르크")}
            >
              하이델베르크
            </button>
          </div>
        </div>
      </header>

      <main className="section_home_container">
        <p className="section_title">{selectedTopic}</p>
        <div className="main_card">
          {filteredCards.map((card) => (
            <div key={card.id} className={`card ${card.background}`} onClick={() => navigate(card.url)}>
              <div className="card_content">
                {/* <span className="badge">{card.number}</span> */}
                <h3>{card.title}</h3>
                <div className="card_body">
                  <img src={card.icon} className="card_icon" alt="icon" />
                  <p className="card_text">{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
              <footer className="footer-home">
               <p>©codequest 2025 Christian to God. </p>
              </footer>
      </main>
    </BackgroundWrapper>
  );
};

export default Home;
