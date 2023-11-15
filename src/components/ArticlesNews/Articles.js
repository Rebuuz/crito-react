import React, { useEffect, useState } from 'react';

const Articles = () => {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        getArticles()
    }, [])

    const getArticles = async () => {
        const result = await fetch('https://win23-assignment.azurewebsites.net/api/articles')
        setArticles(await result.json());
    }

  return (
    <section className="articles">
        <div className="container">
            <div className="section-title">
                <h2>Our Articles & News</h2>
            </div>
            <div className="articles-container">
                {
                    articles.map(article => (
                        <div className="article-item" key={article.id}>
                            <img src={article.imageUrl}></img>
                            <p>{article.category}</p>
                            <h3>{article.title}</h3>
                            <p>{article.content}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Articles