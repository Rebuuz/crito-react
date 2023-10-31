import React from 'react';

import './SignUp.css';

const SignUp = () => {
  return (
    <section className="signup">
        <div className="container">
            <h2>Get News Updates By Signup</h2>
            <div>
                <form>
                <input type="email" className="email" value="username@domain.com" name="email" />
                </form>
                <a className="btn-yellow" href="#">Subscribe <i className="fa-regular fa-arrow-up-right"></i></a>
            </div>
        </div>
    </section>
  )
}

export default SignUp