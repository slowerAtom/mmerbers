// import logo from './logo.svg';
import './App.css';
// import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'
// import Hello from './components/Hello';
import InputSearch from './components/InputSearch';
import SearchResult from './components/SearchResult';


function App() {
  return (
    <div className="relative isolate overflow-hidden h-full bg-slate-200 py-10 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl gap-x-8 lg:max-w-none">
          <div className='text-right'>
            <button class="right-0 mb-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Add Member
            </button>
          </div>
          <div className="">
            {/* <Hello /> */}
            <InputSearch />
          </div>
          <SearchResult />
        </div>    
      </div>
    </div>
  )
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
