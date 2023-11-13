import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Form = () => {

    const [errorMessage, setErrorMessage] = useState('');
    const [messageSent, setMessageSent] = useState('');

    const form = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
        },

        validationSchema: Yup.object( {
            name: Yup.string()
            .required("Full name is required.")
            .min(2, "The name must consist of at least two letters."),
            email: Yup.string()
            .required("A valid  email is required.")
            .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/, "Please enter a valid email adress"),
            message: Yup.string()
            .required("A message is required.")
            .min(10, "The message must consist of at least two letters.")
        }),

        onSubmit: async (values) => {
            const result = await fetch('https://win23-assignment.azurewebsites.net/api/contactform', {
                method: 'post',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(values)
            })

            switch (result.status) {
                case 200:
                    setMessageSent('Meddelandet skickades!') 
                    console.log(result)
                    break;
                case 400:
                    setErrorMessage('Något gick fel')
                    break;
            }
            console.log(values)
        }
    })

  return (
    <form className="form" onSubmit={form.handleSubmit} noValidate>
            <div className="container">
                <div className="section-title">
                    <h2>Leave us a message</h2>
                    <h2>for any information</h2>
                </div>
                <div className="form-container">
                    <div className="input">
                        <label className={form.touched.name && form.errors.name ? 'error': ''}>{form.touched.name && form.errors.name}</label>
                        <input type="text" className="form-input" placeholder="Name*" name="name" value={form.values.name} onChange={form.handleChange} onBlur={form.handleBlur}/>
                    </div>
                    <div className="input">
                        <label className={form.touched.email && form.errors.email ? 'error': ''}>{form.touched.email && form.errors.email}</label>
                        <input type="email" className="form-input" placeholder="Email*" name="email" value={form.values.email} onChange={form.handleChange} onBlur={form.handleBlur}/>
                    </div>
                    <div className="input">
                        <label className={form.touched.message && form.errors.message ? 'error': ''}>{form.touched.message && form.errors.message}</label>
                        <textarea className="form-input" name="message" rows="5" placeholder="Your Message*" value={form.values.message} onChange={form.handleChange} onBlur={form.handleBlur}></textarea>
                    </div>
                    <p className="success-message">{messageSent}</p>
                    <button type="submit" className="btn-yellow">Send Message <i className="fa-regular fa-arrow-up-right"></i></button>
                </div>
            </div>
        </form>
  )
}

export default Form