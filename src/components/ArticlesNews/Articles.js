import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Articles = () => {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        getArticles()
    }, [])

    const getArticles = async () => {
        const result = await fetch('https://win23-assignment.azurewebsites.net/api/articles')
        const data = await result.json();

        const formattedArticles = data.map(article => {
            const publishedDate = new Date(article.published);
            const formattedDate = publishedDate.toLocaleDateString('sv-SV', {
                month: 'short',
                day: 'numeric',
            });
            return {...article, formattedDate};
        })
        setArticles(formattedArticles)
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
                        <Link className="article-link" key={article.id} to={`/articles/${article.id}`}>
                        <div className="article-item" key={article.id}>
                            <div className="published">
                            {article.formattedDate && (
                                    <>
                                        <p className="day">
                                            {article.formattedDate.split(' ')[0]}
                                        </p>
                                        <p className="month">
                                            {article.formattedDate.split(' ')[1]}
                                        </p>
                                    </>
                                )}
                            </div>
                            <img src={article.imageUrl} alt={article.title}></img>
                            <p>{article.category}</p>
                            <h3>{article.title}</h3>
                            <p>{article.content}</p>
                        </div>
                        </Link>
                    ))
                }
            </div>
            <div className="carousel">
                    <i className="fa-solid fa-angle-left"></i>
                    <span className="active">1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>...</span>
                    <span>9</span>
                    <i className="fa-solid fa-angle-right"></i>
            </div>
        </div>
    </section>
  )
}

export default Articles