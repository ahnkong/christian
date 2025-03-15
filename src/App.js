import React from "react";
import {
  BrowserRouter as Router,  // ✅ BrowserRouter 가져오기
  Routes,                    // ✅ Routes 가져오기
  Route                       // ✅ Route 가져오기
} from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import ShorterCate from "./pages/ShorterCate";
import LargerCate from "./pages/LargerCate";
import DetailPage from "./pages/detailPage";
import InitPage from "./pages/InitPage";
import CatechismPage from "./pages/CatechismPage";
import Header from "./components/Header";

const App = () => {
  return (
    <Router> {/* ✅ BrowserRouter로 감싸기 */}
      <Routes> {/* ✅ Route들을 Routes로 감싸기 */}
        <Route path="/" element={<InitPage />} />
        <Route path="/search" element={<Search />} />
        <Route path="/home" element={<Home />} />

        <Route path="/:type" element={<CatechismPage />} />  {/* ✅ 통합된 페이지 */}
        <Route path="/:type" element={<CatechismPage />} />
        <Route path="/:type/:id" element={<DetailPage />} />  {/* ✅ 디테일 페이지 라우트 확인 */}
        {/* <Route path="/shorter-catechism" element={<ShorterCate />} />
        <Route path="/shorter-catechism/:id" element={<DetailPage />} /> 
        <Route path="/larger-catechism" element={<LargerCate />} />
        <Route path="/larger-catechism/:id" element={<DetailPage />} />  */}

      </Routes>
    </Router>
  );
};

export default App;
