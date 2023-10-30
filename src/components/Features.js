import React from 'react';

const Features = () => {
  return (
    <section className="features">
    <div className="container">
        <div className="content-left col-5">
            <p>Features</p>
            <h2>Our Accounting is trusted by thousand of companies</h2>
            <a className="btn-yellow" href="#">Learn More <i className="fa-regular fa-arrow-up-right"></i></a>
        </div>
        <div className="content-right col-7">
            <div className="content-box">
                <i className="fa-regular fa-handshake"></i>
                <h3>Business Advice</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="content-box">
                <i className="fa-regular fa-lightbulb-on"></i>
                <h3>Startup Business</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="content-box">
                <i className="fa-regular fa-chart-mixed-up-circle-dollar"></i>
                <h3>Financial Advice</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="content-box">
                <i className="fa-regular fa-folder-gear"></i>
                <h3>Risk Management</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div>
    </div>
</section>
  )
}

export default Features