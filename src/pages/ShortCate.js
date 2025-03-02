
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import BackgroundWrapper from "../components/BackgroundWrapper";
import PageWrapper from "../components/PageWrapper";


import IconBackButton from "../assets/icon/IconBackButton.png"
import "../styles/pages/shortCate.css";



const ShortCate = () => {
  const navigate = useNavigate();
  const [shorterCatechism, setShorterCatechism] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("/data/shorterCatechism.json")
      .then((response) => response.json())
      .then((data) => setShorterCatechism(data.shorterCatechism))
      .catch((error) => console.error("🚨 JSON 로드 오류:", error));
  }, []);

  // 🔍 검색어 입력 시 필터링
  const filteredQuestions = shorterCatechism.filter((q) =>
    q.question.includes(searchTerm) || (q.answer && q.answer.includes(searchTerm))
  );

  return (
    <BackgroundWrapper type="white">
      <PageWrapper type="default">
        {/* ✅ 헤더 영역 (뒤로 가기 버튼 + 제목 + 검색창) */}
        <header className="shortcate-header">
        <img 
            src={IconBackButton} 
            alt="뒤로 가기"
            className="back-button"
            onClick={() => navigate("/")}
        />
        <h3 className="title">Christian to God</h3>
        </header>

        {/* ✅ 검색창 추가 */}
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="검색어를 입력하세요"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* ✅ 문답 목록 */}
        <main className="shortcate-container">
          <h2 className="shortcate-title">웨스트민스터 소요리문답</h2>
          <ul className="shortcate-list">
            {filteredQuestions.map((q) => (
              <li key={q.id} className="shortcate-item" onClick={() => navigate(`/shorter-catechism/${q.id}`)}>
                <span className="pin">📌 </span>
                <span className="question" style={{ whiteSpace: "normal", wordBreak: "break-word" }}>
                  {q.id}문) {q.question}
                </span>
                <hr className="item-divider" />
              </li>
            ))}
          </ul>
        </main>
      </PageWrapper>
    </BackgroundWrapper>
  );
};

export default ShortCate;
