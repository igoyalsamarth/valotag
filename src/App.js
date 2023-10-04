import logo from './assets/logo.png';
import Navbar from './components/Layout/navbar';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/home'
import NewsPage from './components/News/newspage';
import TounrnamentsPage from './components/Tournaments/tournamentspage';
import MatchesPage from './components/Matches/matchespage';
import TournamentInfo from './components/Tournaments/tournamentinfo';
import NewsInfo from './components/News/newsinfo';
import MatchInfo from './components/Matches/matchinfo';
import Footer from './components/Layout/footer';
import SearchBar from './components/Layout/searchbar';
import PlayersPage from './components/Players/playerspage';
import PlayerInfo from './components/Players/playerinfo';

function App() {
  return (
    <Router>
      <div className="App flex justify-center bg-[#252525]">
        <div className='wrapper flex flex-col bg-[#252525] w-[90vw] text-[#F0F5F5] font-inter p-6'>
          <div className='cols-wrapper flex flex-row '>
            <div className='col-1-wrapper flex flex-col w-[22%]'>
              <div className="flex bg-[#2C2C2C] rounded-lg px-4 py-6 text-2xl gap-2 font-bold font-inter h-[88px] items-center">
                <img src={logo} className='h-[2vw]' alt='logo' />
                ValoTag
              </div>
              <div className='flex flex-col px-4 py-5 bg-[#2C2C2C] rounded-lg mt-4 min-w-[13%]'>
                <Navbar />
              </div>
            </div>
            <div className='col-2-wrapper flex flex-col w-[78%] mx-4'>
              <div className='flex bg-[#2C2C2C] rounded-lg mb-4 h-[88px]'>
                <SearchBar />
              </div>
              <Routes>
                <Route path='/' exact element={<Home />} />
                <Route path='/news' exact element={<NewsPage />} />
                <Route path='/tournaments' exact element={<TounrnamentsPage />} />
                <Route path='/matches' exact element={<MatchesPage />} />
                <Route path='/players' exact element={<PlayersPage />} />
                <Route path='/tournaments/:id' exact element={<TournamentInfo />} />
                <Route path='/news/:id' exact element={<NewsInfo />} />
                <Route path='/matches/:id' exact element={<MatchInfo />} />
                <Route path='/players/:id' exact element={<PlayerInfo />} />
              </Routes>
            </div>
          </div>
          <div className='footer flex bg-[#2C2C2C] rounded-lg mt-6'>
            <Footer />
          </div>
        </div>
      </div>
    </Router>

  );
}

export default App;
