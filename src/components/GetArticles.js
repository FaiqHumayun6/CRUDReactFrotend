import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


function GetArtciles(){
  const [articles, setArticles] = useState([]);
  const [title, setTitle] = useState("");
  const token = localStorage.getItem("token");

  useEffect(() => {
    getArticles();
  }, []);

  const getArticles = () => {
    axios
        .get("http://localhost:3001/articles", {headers: {
          'Authorization': token 
        }})
        .then((response) => {
          setArticles(response.data.status.data);
        })
        .catch((error) => {
          console.error("Error fetching articles:", error);
        });
  }

  const handleClick = () => {
    axios
        .post(
          'http://localhost:3001/articles',
          {
            name: title,
            article: {
            name: title
            }
          },
          {
            headers: {
              Authorization: token,
            },
          }
        )
        .then((response) => {
          getArticles();
        }) 
        .catch((error) => {
          console.error("Error creating articles:", error);
        });
  };

  return (
    <div>
      <form className="form-group">
        <input type="text" className="form-control" value={title} placeholder="Enter title of new article" onChange={(e) => setTitle(e.target.value)}/>
        <button type="button" onClick={handleClick} className="btn btn-primary">Submit</button>
      </form>
      <div class="container">    
        <div class="row">
          {articles.map((article) => (
            <div className="col-sm-4" key={article.id}>
              <div className="panel panel-primary">
                <h1 className="panel-heading">Article</h1>
                <Link to={`/article/${article.id}`}>
                  <h6 className="list-group-item">
                    {article.name}
                  </h6>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

}

export default GetArtciles;