// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './js/HomePage'; // 경로는 상황에 맞게 조정해 주세요.
// 필요한 다른 컴포넌트들도 임포트하세요.

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* 다른 라우트 설정이 있으면 여기에 추가하세요. */}
      </Routes>
    </Router>
  );
}

export default App;