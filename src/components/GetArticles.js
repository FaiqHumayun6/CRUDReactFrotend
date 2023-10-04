import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function GetArtciles(){
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios.get("http://localhost:3001/articles", {headers: {
        'Authorization': token 
      }})
      .then((response) => {
        setArticles(response.data.status.data);
      })
      .catch((error) => {
        console.error("Error fetching articles:", error);
      });
  }, []);

  const handleClick = () => {
    navigate('/create_article', { replace: true });
  };

  return (
    <div>
      <button onClick={handleClick}>Click</button>
      <ul>
        {articles.map((article) => (
          <ol>
          <li key={article.id}>
            <h3 className="">{article.name}</h3>
          </li>
          </ol>
        ))}
      </ul>
    </div>
  );

}

export default GetArtciles;