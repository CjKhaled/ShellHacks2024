import React, { useEffect, useState } from 'react';
import Event from './Event';
import './DaScroll.css';

const DaScroll = ({age, explanation}) => {
    const [scrollY, setScrollY] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const [ag]

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
            setIsVisible(window.scrollY < 150); // Fade out "History" after scrolling 150px
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="scroll-container">
            {/* Corrected transform style */}
            <div className="parallax-bg" style={{ transform: `translateY(${scrollY * 0.3}px)` }}></div>
            <div className="timeline" style={{ transform: `translateY(${scrollY * 0.5}px)` }}></div>
            <div className="life-events">
                {events.map((event, index) => (
                    <Event index={index} age={year} explanation={explanation} />
                ))}
            </div>
        </div>
    );
};

export default DaScroll;
