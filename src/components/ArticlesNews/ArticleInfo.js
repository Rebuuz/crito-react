import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ArticleInfo = () => {
  const [articleDetails, setArticleDetails] = useState([null]);
  const { id } = useParams()

  useEffect(() => {
    getArticleDetails()
  }, [])

  useEffect(() => {
    console.log(articleDetails)
  }, [articleDetails])

  const getArticleDetails = async () => {

    const result = await fetch(`https://win23-assignment.azurewebsites.net/api/articles/${id}`)

    if(result.status === 200) {
      const data = await result.json();
      const publishedDate = new Date(data.published);
      const formattedDate = publishedDate.toLocaleDateString('sv-SV', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      });

      setArticleDetails({
        ...data,
        published:formattedDate
      });
   }
  }

  return articleDetails ? (

    <div className="wrapper">
        <div className="article-section">
          <div className="container">
            <div className="article-container">
              <h2 className="title">{articleDetails.title}</h2>
              <div className="info">
                <p>{articleDetails.published}</p>
                <span className="circle"></span>
                <p>{articleDetails.category}</p>
                <span className="circle"></span>
                <p>{articleDetails.author}</p>
              </div>
              <div className="image">
                <img src={articleDetails.imageUrl} alt={articleDetails.title}></img>
              </div>
            </div>
            <div className="content">
              <p>{articleDetails.content}</p>
            </div>
          </div>
        </div>
    </div>
  ):<p>Laddar...</p>
}

export default ArticleInfo