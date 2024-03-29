import { useNavigate } from 'react-router-dom';
import InputSearch from './InputSearch';
import SearchResult from './SearchResult';

function HomePage() {
    const navigate = useNavigate();

    // 이동하고자 하는 경로로 이동하는 함수
    const goToMemberCreate = () => {
        navigate('/member/create'); // 여기에 원하는 경로를 입력합니다.
    };

    return (
        <div className="relative isolate overflow-hidden h-full bg-slate-200 py-10 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl gap-x-8 lg:max-w-none">
              <div className='text-right'>
                <button onClick={goToMemberCreate} class="right-0 mb-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
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
}

export default HomePage;