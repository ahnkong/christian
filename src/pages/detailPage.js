import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import BackgroundWrapper from "../components/BackgroundWrapper";
import "../styles/pages/detailPage.css";
import BackButton from "../components/BackButton";
import PageWrapper from "../components/PageWrapper";
import IconMenu from "../assets/icon/IconMenu.png";
import IconBackButton from "../assets/icon/IconBackButton.png";


const DetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [catechismList, setCatechismList] = useState([]);
  const [catechism, setCatechism] = useState(null);
  const [selectedVerse, setSelectedVerse] = useState(null);
  const [isFlipped, setIsFlipped] = useState(false); // 카드 뒤집기 상태
  const [menuOpen, setMenuOpen] = useState(false); // ✅ 메뉴 상태 추가
  useEffect(() => {
    fetch("/data/shorterCatechism.json")
      .then((response) => response.json())
      .then((data) => {
        setCatechismList(data.shorterCatechism);
        const selectedCatechism = data.shorterCatechism.find((q) => q.id === parseInt(id));
        setCatechism(selectedCatechism);

        // ✅ 첫 번째 성경 구절이 기본으로 보이게 설정
        if (selectedCatechism.verses.length > 0) {
          setSelectedVerse(selectedCatechism.verses[0]);
        }
      })
      .catch((error) => console.error("🚨 JSON 로드 오류:", error));
  }, [id]);


  const handleVerseClick = (verse) => {
    setSelectedVerse(verse); // ✅ 클릭하면 해당 구절 표시
  };

  const toggleFlip = () => {
    setIsFlipped(!isFlipped); // ✅ 카드 뒤집기 토글
  };

  if (!catechism) {
    return <p>문답 데이터를 불러오는 중...</p>;
  }


  if (!catechism) {
    return <p>문답 데이터를 불러오는 중...</p>;
  }

  return (
    <BackgroundWrapper type="white">
      <PageWrapper type="default" id="detailPage" className="detailPage">
        <header className="detail-header">
          <img
            className="back-button"
            src={IconBackButton}
            alt="뒤로 가기"
            onClick={() => navigate("/shorter-catechism")}
          />
          <h1 className="title">Christian to God</h1>
          <div className="menu-container">
            <img
              src={IconMenu} alt="메뉴 아이콘" className="IconMenu"
              onClick={() => setMenuOpen(!menuOpen)} // ✅ 메뉴 열기/닫기
            />
            {menuOpen && (
              <div className="dropdown-menu">
                <button onClick={() => navigate("/")}>🏠 홈으로</button>
                <button onClick={() => navigate("/shorter-catechism")}>🔍 검색</button>
              </div>
            )}
          </div>
        </header>

        {/* 메인 */}
        <section className="detailMain-container">
          {/* <h2 className="shortcate-title">웨스트민스터 소요리문답</h2> */}
          <h2 className="main-title">
            <span className="pin">📌 {catechism.id}문<br /></span>
            <span clsssName="pin_content">{catechism.question}</span>
          </h2>
        </section>

        <section className="detailMain-answer-container">
          <div className="detail-content">
            <p className="detail-answer">{catechism.answer}</p>
            <span className="pin_moreExplain"> + 해설보기</span>
          </div>
        </section>


        {/* ✅ 성경 구절 태그 버튼 */}
        <section className="tag-container">
          <div className="verses-scroll">
            {catechism.verses.map((verse, index) => (
              <button
                key={index}
                className={`verse-tag ${selectedVerse === verse ? "active" : ""}`}
                onClick={() => handleVerseClick(verse)}
              >
                {verse.book} {verse.chapter}:{verse.verse}
              </button>
            ))}
          </div>

          {/* ✅ 선택된 성경 구절 기본 표시 */}
          {selectedVerse && (
            <div className="verse-box">
              <p className="verse-reference">{selectedVerse.book} {selectedVerse.chapter}:{selectedVerse.verse}</p>
              <p className="verse-text">{selectedVerse.text}</p>
            </div>
          )}

        </section>
        {/* <div className="detail-buttons">
            <button className="prev-button" disabled={parseInt(id) === 1}>이전</button>
            <button className="next-button" disabled={parseInt(id) === catechismList.length}>다음</button>
          </div> */}

        <section className="buttons-container">
          <div className="button-container">
            <p> * 문답 이동 버튼 * </p>
            <div className="detail-buttons">
              {/* ✅ 이전 버튼 (첫 번째 문답이면 비활성화) */}
              <button
                className="prev-button"
                onClick={() => {
                  const prevId = parseInt(id) - 1;
                  if (prevId >= 1) {
                    navigate(`/shorter-catechism/${prevId}`);
                  }
                }}
                disabled={parseInt(id) === 1}
              >
                이전
              </button>

              {/* ✅ 다음 버튼 (마지막 문답이면 비활성화) */}
              <button
                className="next-button"
                onClick={() => {
                  const nextId = parseInt(id) + 1;
                  if (nextId <= catechismList.length) {
                    navigate(`/shorter-catechism/${nextId}`);
                  }
                }}
                disabled={parseInt(id) === catechismList.length}
              >
                다음
              </button>
            </div>
          </div>
        </section>
      </PageWrapper>
    </BackgroundWrapper>
  );
};

export default DetailPage;
