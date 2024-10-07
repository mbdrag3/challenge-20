import React from 'react'
import image from '../../assets/me.jpg'
import '../../styles/style.css';

function AboutMe() {
    return (
        <div className='about-me-div'>
            <div className='about-me-img'>
                <img src={image}></img>
            </div>
            <div className='about-me-text'>
                <h5>Who is Michael Drag?</h5>
                <p>I am a full stack developer with experience in HTML, CSS, JavaScript, Node.js, Express, React, SQL, NoSQL, and more. I completed an edX coding bootcamp that equipped me with the tools and problem-solving skills needed to tackle any challenge.</p>
                <p>Outside of work, I enjoy music, sports, and snowboarding. Having played baseball throughout my life, I’ve gained extensive experience in teamwork and collaboration that has helped me tremendously apply these qualities to my professional career.</p>

            </div>
        </div>
    )
}

export default AboutMe