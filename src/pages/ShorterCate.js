
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import BackgroundWrapper from "../components/BackgroundWrapper";
import PageWrapper from "../components/PageWrapper";


import IconBackButton from "../assets/icon/IconBackButton.png"
import "../styles/pages/shorterCate.css";
import IconMenu from "../assets/icon/IconMenu.png"
import IconSearch from "../assets/icon/IconSearch.png"

const ShorterCate = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false); // ✅ 메뉴 상태 추가
  const [shorterCatechism, setshorterCatechism] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("/data/shorterCatechism.json")
      .then((response) => response.json())
      .then((data) => setshorterCatechism(data.shorterCatechism))
      .catch((error) => console.error("🚨 JSON 로드 오류:", error));
  }, []);

  // 🔍 검색어 입력 시 필터링
  const filteredQuestions = shorterCatechism.filter((q) =>
    q.question.includes(searchTerm) || (q.answer && q.answer.includes(searchTerm))
  );

  return (
    <BackgroundWrapper type="white">
      <PageWrapper type="default">
        <div className="shorterCate-section-container">
          <header className="shorterCate-section-header">
            <div className="header-container">
              <img
                src={IconBackButton} alt="뒤로 가기" className="back-button"
                onClick={() => navigate("/home")}
              />
              <h1 className="title">Christian to God</h1>
              <div className="menu-container">
                <img
                  src={IconMenu} alt="메뉴 아이콘" className="IconMenu"
                  onClick={() => setMenuOpen(!menuOpen)}
                />
                {menuOpen && (
                  <div className="dropdown-menu">
                    <button onClick={() => navigate("/")}>🏠 홈으로</button>
                    <button onClick={() => navigate("/shorter-catechism")}>🔍 검색</button>
                  </div>
                )}
              </div>
            </div>

            {/* ✅ 두 번째 줄: 검색창 */}
            <div className="search-container">
              <input
                className="search-input"
                type="text"
                placeholder="검색어를 입력하세요"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <img
                src={IconSearch} alt="뒤로 가기" className="search-button"
                onClick={() => navigate("/shorter-catechism")}
              />
            </div>
          </header>
        </div>

        {/* ✅ 문답 목록 */}
        <main className="shorterCate-container">
          <p className="shorterCate-title">웨스트민스터 소요리문답</p>
          <ul className="shorterCate-list">
            {filteredQuestions.map((q) => (
              <p key={q.id} className="shorterCate-item" onClick={() => navigate(`/shorter-catechism/${q.id}`)}>
                <span className="pin">📌 </span>
                <span className="question" style={{ whiteSpace: "normal", wordBreak: "break-word" }}>
                  {q.id}문 {q.question}
                </span>
                <div className="item-divider" />
              </p>
            ))}
          </ul>
        </main>
      </PageWrapper>
    </BackgroundWrapper>
  );
};

export default ShorterCate;
