import '../styles/App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signin from "./Signin";
import Signup from "./Signup";
import GetArtciles from './GetArticles';
import NavBar from './NavBar';

function App() {
  return (
    <div className="App">
      <div className='App-Body'>
<<<<<<< Updated upstream
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<GetArtciles />} />
          <Route path="/create_article" element={<PostArtcile />} />
          <Route path="/login" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
=======
        <BrowserRouter>
          {isAuthenticated ? (
            <>
              <NavBar />
              <Routes>
                <Route exact path="/" element={<GetArtciles />} />
                <Route path="/login" element={<Signin />} />
                <Route path="/signup" element={<Signup />} />
              </Routes>
            </>
          ) : (
            <Routes>
              <Route path="/login" element={<Signin />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          )}
        </BrowserRouter>
>>>>>>> Stashed changes
      </div>
    </div>
  );
}

export default App;
