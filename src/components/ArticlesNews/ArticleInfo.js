import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ArticleInfo = () => {
  const [articleDetails, setArticleDetails] = useState({});
  const { id } = useParams()

  useEffect(() => {
    getArticleDetails()
  }, [])

  const getArticleDetails = async () => {

    const result = await fetch(`https://win23-assignment.azurewebsites.net/api/articles/${id}`)

    if(result.status === 200) {

      setArticleDetails(await result.json())
    }
  }

  return (
    <div className="wrapper">
        <div className="article-section">
          <div className="container">
            <h2 className="title">{articleDetails.title}</h2>
            <p>{articleDetails.published}</p>
          </div>
        </div>
    </div>
  )
}

export default ArticleInfo