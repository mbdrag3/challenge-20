import React, { useState, useEffect } from "react";
import "../../styles/home.css";

function Home() {
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const words = ["a Front End Developer", "a Back End Developer", "a Creator", "a Music Lover"];

    useEffect(() => {
        const handleTyping = () => {
            const i = loopNum % words.length;
            const fullText = words[i];

            if (isDeleting) {
                setText(fullText.substring(0, text.length - 1));
                setTypingSpeed(100); // faster speed when deleting
            } else {
                setText(fullText.substring(0, text.length + 1));
                setTypingSpeed(250); // normal typing speed
            }

            if (!isDeleting && text === fullText) {
                // Pause after typing the whole word
                setTimeout(() => setIsDeleting(true), 1000);
            } else if (isDeleting && text === "") {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const typingTimeout = setTimeout(handleTyping, typingSpeed);

        return () => clearTimeout(typingTimeout); // Cleanup timeout
    }, [text, isDeleting, typingSpeed, loopNum]);

    return (
        <div className="home-container">
            <h1>Welcome to <span>Michael Drag's portfolio</span></h1>
            <h2>I am <span>{text}</span><span className="cursor">|</span></h2>
            <p>Take a look around!</p>
        </div>
    );
}

export default Home;
