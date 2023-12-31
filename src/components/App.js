import '../styles/App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signin from "./Signin";
import Signup from "./Signup";
import GetArtciles from './GetArticles';
import ArticleDetail from './ArticleDetail';
import NavBar from './NavBar';

function App() {
  const isAuthenticated = !!localStorage.getItem('token');
  return (
    <div className="App">
      <div className='App-Body'>
        <BrowserRouter>
          {isAuthenticated ? (
            <>
              <NavBar />
              <Routes>
                <Route exact path="/" element={<GetArtciles />} />
                <Route path="/article/:id" element={<ArticleDetail />} />
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
      </div>
    </div>
  );
}

export default App;
