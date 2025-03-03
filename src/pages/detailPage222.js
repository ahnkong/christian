import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import BackgroundWrapper from "../components/BackgroundWrapper";
import "../styles/pages/detailPage.css";
import PageWrapper from "../components/PageWrapper";
import IconMenu from "../assets/icon/IconMenu.png";
import IconBackButton from "../assets/icon/IconBackButton.png";


const DetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [catechismList, setCatechismList] = useState([]);
  const [catechism, setCatechism] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false); // ✅ 메뉴 상태 추가

  useEffect(() => {
    fetch("/data/shorterCatechism.json")
      .then((response) => response.json())
      .then((data) => {
        setCatechismList(data.shorterCatechism);
        const selectedCatechism = data.shorterCatechism.find((q) => q.id === parseInt(id));
        setCatechism(selectedCatechism);
      })
      .catch((error) => console.error("🚨 JSON 로드 오류:", error));
  }, [id]);

  const handleNavigation = (direction) => {
    const currentIndex = catechismList.findIndex((q) => q.id === parseInt(id));
    if (direction === "prev" && currentIndex > 0) {
      navigate(`/shorter-catechism/${catechismList[currentIndex - 1].id}`);
    } else if (direction === "next" && currentIndex < catechismList.length - 1) {
      navigate(`/shorter-catechism/${catechismList[currentIndex + 1].id}`);
    }
  };

  if (!catechism) {
    return <p>문답 데이터를 불러오는 중...</p>;
  }

  return (
    <BackgroundWrapper type="white">
      <PageWrapper type="default">
        <header className="detail-header">
          <img 
            src={IconBackButton} 
            alt="뒤로 가기"
            className="back-button"
            onClick={() => navigate(-1)}
          />
          <h1 className="title">Christian to God</h1>
          {/* ✅ 메뉴 버튼 (클릭 시 토글) */}
          <div className="menu-container">
            <img 
              src={IconMenu} 
              alt="메뉴 아이콘" 
              className="IconMenu" 
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
        
        <main className="detail-container">
          <h2 className="detail-title">
            <span className="pin"></span>📌 {catechism.id}문 : {catechism.question}
          </h2>
          <div className="detail-content">
            <p className="detail-answer">{catechism.answer}</p>
          </div>
          <div className="detail-verses">
            {catechism.verses.map((verse, index) => (
              <div key={index} className="verse-card">
                <span className="verse-reference">{verse.book} {verse.chapter}:{verse.verse}</span>
                <p className="verse-text">{verse.text}</p>
              </div>
            ))}
          </div>
          <div className="detail-buttons">
            <button 
              className="prev-button" 
              onClick={() => handleNavigation("prev")} 
              disabled={parseInt(id) === 1}
            >
              이전
            </button>
            <button 
              className="next-button" 
              onClick={() => handleNavigation("next")} 
              disabled={parseInt(id) === catechismList.length}
            >
              다음
            </button>
          </div>
        </main>
      </PageWrapper>
    </BackgroundWrapper>
  );
};

export default DetailPage;


// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate, useLocation } from "react-router-dom";
// import BackgroundWrapper from "../components/BackgroundWrapper";
// import "../styles/pages/detailPage.css";
// import BackButton from "../components/BackButton";
// import PageWrapper from "../components/PageWrapper";
// import IconMenu from "../assets/icon/IconMenu.png"

// const DetailPage = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [catechismList, setCatechismList] = useState([]);
//   const [catechism, setCatechism] = useState(null);

//   useEffect(() => {
//     fetch("/data/shorterCatechism.json")
//       .then((response) => response.json())
//       .then((data) => {
//         setCatechismList(data.shorterCatechism);
//         const selectedCatechism = data.shorterCatechism.find((q) => q.id === parseInt(id));
//         setCatechism(selectedCatechism);
//       })
//       .catch((error) => console.error("🚨 JSON 로드 오류:", error));
//   }, [id]);

//   const handleNavigation = (direction) => {
//     const currentIndex = catechismList.findIndex((q) => q.id === parseInt(id));
//     if (direction === "prev" && currentIndex > 0) {
//       navigate(`/shorter-catechism/${catechismList[currentIndex - 1].id}`);
//     } else if (direction === "next" && currentIndex < catechismList.length - 1) {
//       navigate(`/shorter-catechism/${catechismList[currentIndex + 1].id}`);
//     }
//   };

//   if (!catechism) {
//     return <p>문답 데이터를 불러오는 중...</p>;
//   }

//   return (
//     <BackgroundWrapper type="white">
//       <PageWrapper type="default">
//       <header className="detail-header">
//         <BackButton 
//             onClick={() => location.pathname.includes("shorter-catechism") 
//             ? navigate("/shorter-catechism")  // ✅ ShortCate로 이동
//             : navigate(-1)  // ✅ 이전 페이지로 이동
//             } 
//         />
//           <h1 className="title">Christian to God</h1>
//           <img src={IconMenu} alt="메뉴 아이콘" className="IconMenu" />
//         </header>
//         <main className="detail-container">
//           <h2 className="detail-title">
//             <span className="pin">📌</span> {catechism.id}문 : {catechism.question}
//           </h2>
//           <div className="detail-content">
//             <p className="detail-answer">답 : {catechism.answer}</p>
//           </div>
//           <div className="detail-verses">
//             {catechism.verses.map((verse, index) => (
//               <div key={index} className="verse-card">
//                 <span className="verse-reference">{verse.book} {verse.chapter}:{verse.verse}</span>
//                 <p className="verse-text">{verse.text}</p>
//               </div>
//             ))}
//           </div>
//           <div className="detail-buttons">
//             <button className="prev-button" onClick={() => handleNavigation("prev")} disabled={parseInt(id) === 1}>이전</button>
//             <button className="next-button" onClick={() => handleNavigation("next")} disabled={parseInt(id) === catechismList.length}>다음</button>
//           </div>
//         </main>
//       </PageWrapper>
//     </BackgroundWrapper>
//   );
// };

// export default DetailPage;
