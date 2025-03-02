

import React, { useState, useEffect } from "react";
import BackgroundWrapper from "../components/BackgroundWrapper";

const LargeCate = () => {
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
    <BackgroundWrapper type="debug"> {/* ✅ type을 문자열로 설정 */}
      <header className="header_home">
        <h1>웨스트민스터 문답</h1>
      </header>
      <section className="section_home_container">
        <ul>
          {shorterCatechism.length > 0 ? (
            shorterCatechism.map((q) => (
              <li key={q.id}>
                <strong>{q.question}</strong>
                <p>{q.answer}</p>
              </li>
            ))
          ) : (
            <p>문답 데이터를 불러오는 중...</p>
          )}
        </ul>
      </section>
    </BackgroundWrapper> 
  );
};

export default LargeCate;
