import React from "react";
import {
  BrowserRouter as Router,  // ✅ BrowserRouter 가져오기
  Routes,                    // ✅ Routes 가져오기
  Route                       // ✅ Route 가져오기
} from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import ShortCate from "./pages/ShortCate";
import LargeCate from "./pages/LargeCate";
import DetailPage from "./pages/detailPage";
import InitPage from "./pages/InitPage";


const App = () => {
  return (
    <Router> {/* ✅ BrowserRouter로 감싸기 */}
      <Routes> {/* ✅ Route들을 Routes로 감싸기 */}
        <Route path="/" element={<InitPage />} />
        <Route path="/search" element={<Search />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shorter-catechism/:id" element={<DetailPage />} /> {/* ✅ 동적 라우트 */}
        <Route path="/shorter-catechism" element={<ShortCate />} />
        <Route path="/large-catechism" element={<LargeCate />} />

      </Routes>
    </Router>
  );
};

export default App;
