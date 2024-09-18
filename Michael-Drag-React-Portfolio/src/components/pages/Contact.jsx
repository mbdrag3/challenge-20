import { useState } from 'react';
import '../../styles/style.css';

import { validateEmail } from '../../utils/helpers';

function Contact() {

    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
    
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;
    console.log(target);

    if (inputType === 'email') {
        setEmail(inputValue);
        if (!validateEmail(email)) {
            setErrorMessage('Email is invalid');
            return;
          }
        setErrorMessage('')
        return;
        // setEmail(inputValue);
      } else if (inputType === 'userName') {
        if (target.value.length === 0) {
            setErrorMessage('Username is empty');
          }
        else {
            setErrorMessage('')
        }
        setUserName(inputValue);
        // setErrorMessage('')
        return;
      } else {
        setMessage(inputValue);
      }

    };

    const handleFormSubmit = (e) => {
 
        e.preventDefault();
    
        // if (!validateEmail(email) || !userName) {
        //   setErrorMessage('Email or username is invalid');
        //   return;

        // }
        alert(`Hello ${userName}`);
        setUserName('');
        setMessage('');
        setEmail('');
      };

    return (
        <div className="container text-center contact-page">
          <form className="form wrapper" onSubmit={handleFormSubmit}>
            <h1 className="form-header">Get in Contact with me</h1>
            <div className="input-field">
                    <input
                        value={email}
                        name="email"
                        onChange={handleInputChange}
                        type="email"
                        placeholder="email"
                        required
                    />
                </div>

                <div className="input-field">
                    <input
                        value={userName}
                        name="userName"
                        onChange={handleInputChange}
                        type="text"
                        placeholder="username"
                    />
                </div>

                <div className="input-field">
                    <textarea
                        value={message}
                        name="message"
                        onChange={handleInputChange}
                        placeholder="Message"
                        rows="10"
                    />
                </div>
            <button type="submit">Submit</button>
            {errorMessage && (
            <div className="error-container">
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
          </form>
        </div>
      );
}

export default Contact;