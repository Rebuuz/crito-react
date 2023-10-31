import React from 'react';
import './BottomFooter.css';

const BottomFooter = () => {
  return (
    <footer className="bottom-footer">
        <div className="container">
            <div className="copyright">
                <p>© 2023 Crito - Consulting Company Inc. All Rights Reserved.</p>
            </div>
            <div className="contact-media">
                <a href="#"><i className="fa-brands fa-facebook"></i></a>
                <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
                <a href="#"><i className="fa-brands fa-instagram"></i></a>
                <a href="#"><i className="fa-brands fa-linkedin"></i></a>
            </div>
        </div>
    </footer>
  )
}

export default BottomFooter