import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import '../styles/footer.css';

function Footer() {
    return (
        <div className='footer-div'>
            {/* <h5>Get in touch with me</h5> */}
            <a href="https://github.com/mbdrag3" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} className="footer-icon" />
            </a>
            <a href="https://www.linkedin.com/in/michael-drag-439a92243/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className="footer-icon" />
            </a>
            <a href="https://x.com/mbdrag" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} className="footer-icon" />
            </a>
        </div>
    );
}

export default Footer;
