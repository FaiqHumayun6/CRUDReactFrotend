import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function ArticleDetail() {

  const token = localStorage.getItem("token");
  const [article, setArticle] = useState([]);
  let {id} = useParams();

  useEffect(() => {
    getArticle();
  }, []);

  const getArticle = () => {
    axios
        .get(`http://localhost:3001/articles/${id}`, {headers: {
          'Authorization': token 
        }})
        .then((response) => {
          setArticle(response.data.status.data);
        })
        .catch((error) => {
          console.error("Error fetching articles:", error);
        });
  }

  
  return (
    <div>
      <h2>Article Detail</h2>
      <div>
        {article.name}
      </div>
    </div>
  );
}

export default ArticleDetail;
