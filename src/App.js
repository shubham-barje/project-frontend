import './output.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginComponent from './routes/Login';
import SignupComponent from './routes/Signup';
import HomeComponent from './routes/Home'
import { useCookies } from 'react-cookie';
import LoggedInHome from './routes/LoggedInHome';
import UploadSong from './routes/UploadSong';
import MyMusic from './routes/MyMusic';
import songContext from './contexts/songContext';
import { useState } from 'react';
import SearchPage from './routes/SearchPage';
import Library from './routes/Library';

{/* // if token is dose't exist means signup is not done by user so dirct to them at here */ }
function App() {
  const [currentSong, setCurrentSong] = useState(null);
  // we use token to redirect the old user and new user via cookie
  const [cookie, setCookie] = useCookies(["token"])
  const [soundPlayed, setSoundPlayed] = useState(null)
  // default music is off so its true
  const [isPaused, setIsPaused] = useState(true)
  return (

    <div className="w-screen h-screen font-poppins">
      <BrowserRouter>
        {/* we fetch currentSong and setCurrentSong from songContext.Provide we wrap currentSong and setCurrentSong in songContext.Provider beacuse when we want to move from mymusic to home we want to play song so we use currentSong and setCurrentSong to play song .so basically our song is stop it play continously.also we can set or configure the current song */}
        {cookie.token ? (
          <songContext.Provider value={{
            currentSong,
            setCurrentSong,
            soundPlayed,
            setSoundPlayed,
            isPaused,
            setIsPaused
          }}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/home' element={<LoggedInHome />} />
              <Route path='/uploadSong' element={<UploadSong />} />
              <Route path='/myMusic' element={<MyMusic />} />
              <Route path='/search' element={<SearchPage/>}/>
              <Route path='/library' element={<Library/>} />
              <Route path='/*' element={<Navigate to="/home" />} />
            </Routes>
          </songContext.Provider>
        ) : (
          // loged out routes
          <Routes>
            <Route path="/home" element={<HomeComponent />} />
            <Route path="/login" element={<LoginComponent />} />
            <Route path="/signup" element={<SignupComponent />} />
            <Route path="*" element={<Navigate to="/login" />} />

          </Routes>
        )}

      </BrowserRouter>
    </div >

  );
}

const Home = () => {
  return <div>Hello home</div>
}

export default App;
