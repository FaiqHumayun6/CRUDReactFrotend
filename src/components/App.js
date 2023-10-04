import '../styles/App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signin from "./Signin";
import Signup from "./Signup";
import GetArtciles from './GetArticles';
import PostArtcile from './PostArticle';
import NavBar from './NavBar';

function App() {
  return (
    <div className="App">
      <div className='App-Body'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<GetArtciles />} />
          <Route path="/create_article" element={<PostArtcile />} />
          <Route path="/login" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
