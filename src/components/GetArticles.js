import React, { useEffect, useState } from "react";
import axios from "axios";

function GetArtciles(){
  const [articles, setArticles] = useState([]);
  const [title, setTitle] = useState("");
  const token = localStorage.getItem("token");

  useEffect(() => {
    getArticles();
  }, []);

  const getArticles = () => {
    axios.get("http://localhost:3001/articles", {headers: {
        'Authorization': token 
      }})
      .then((response) => {
        console.log(response);
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
          console.log(response);
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
      <div className="container">    
        <div className="row">
          {articles.map((article) => (
            <div className="col-sm-4">
              <div className="panel panel-primary">
                <h1 className="panel-heading">Article</h1>
                  <div key={article.id}>
                    <h6 className="list-group-item">{article.name}</h6>
                  </div>
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

}

export default GetArtciles;