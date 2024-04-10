import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App /> {/* Router 및 경로 설정은 App 컴포넌트 내에서 처리 */}
  </React.StrictMode>,
);

reportWebVitals();