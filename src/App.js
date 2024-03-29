// import logo from './logo.svg';
import './App.css';
// import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'
// import InputSearch from './components/InputSearch';
// import SearchResult from './components/SearchResult';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import MemberCreate from './components/MemberCreate';


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/member/create" element={<MemberCreate />} />
    </Routes>
  )
}

export default App;
