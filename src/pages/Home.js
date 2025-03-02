import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import BackgroundWrapper from "../components/BackgroundWrapper";
import "../styles/pages/home.css"
import PageWrapper from "../components/PageWrapper";

import HeartIcon from "../assets/image/imageHeart.png"
import BibleIcon from "../assets/image/imageBible.png"

const catechismCards = [
  {
    id: 1,
    title: "소요리 문답",
    number: "107",
    description: "자녀들과 평신도들을 교육하기 위한 소요리 문답",
    background: "yellow",
    icon: HeartIcon,
    url: "/shorter-catechism"
  },
  {
    id: 2,
    title: "대요리 문답",
    number: "196",
    description: "목회자와 평신도들을 위한 문답",
    background: "blue",
    icon: BibleIcon,
    url: "/larger-catechism"
  },
];

const Home = () => {
  const navigate = useNavigate();
  const [shorterCatechism, setShorterCatechism] = useState([]);

  useEffect(() => {
    fetch("/data/shorterCatechism.json")
      .then((response) => {
        console.log("🔍 응답 상태 코드:", response.status);
        return response.text();
      })
      .then((text) => {
        console.log("📄 응답 데이터:", text);
        return JSON.parse(text);
      })
      .then((data) => setShorterCatechism(data.shorterCatechism))
      .catch((error) => console.error("🚨 JSON 로드 오류:", error));
  }, []);

  return (
    <BackgroundWrapper type="white">
      {/* <PageWrapper type="home"> */}
      <header className="header_home">
        <h1>Christian to God</h1>
        <form className="header_search_form">
          <input className="header_search" type="text" placeholder="검색어를 입력하세요" />
          <button className="header_btn_search" type="button">검색</button>
        </form>

      <section className="home_btn_topic">
        <p className="topic_western">웨스터민스터</p>
        <p className="topic_hidel">하이델베르크</p>
      </section> 
      </header>
          
      <main className="section_home_container">
        <p>웨스트 민스터</p>
        <div className="main_card">
          {catechismCards.map((card) => (
          <div key={card.id} className={`card ${card.background}`} onClick={() => navigate(card.url)}>
            <div className="card_content">
              <span className="badge">{card.number}</span>
              <h3>{card.title}</h3>
              <div className="card_body">
                <img src={card.icon} className="card_icon" alt="icon" />
                <p className="card_text">{card.description}</p>
              </div>
            </div>
          </div>
        ))}
        </div>
    </main>
    {/* </PageWrapper> */}
    </BackgroundWrapper>
  );
};
export default Home;
