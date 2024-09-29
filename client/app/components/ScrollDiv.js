import React, { useEffect, useState } from 'react';
import './DaScroll.css';

const events = [
    { year: '2000', description: 'Born in a small town and ready to rock' },
    { year: '2005', description: 'Started school and loved learning.' },
    { year: '2010', description: 'Moved to a new city.' },
    { year: '2015', description: 'Graduated from high school.' },
    { year: '2020', description: 'Got first job.' },
    { year: '2025', description: 'Bought first car.' },
    { year: '2030', description: 'Started a business.' },
    { year: '2040', description: 'Retired and traveled the world.' }
];

const DaScroll = () => {
    const [scrollY, setScrollY] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

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
                    <div key={index} className="life-event" style={{ transform: `translateY(${scrollY * 0.1}px)` }}>
                        <h2>{event.year}</h2>
                        <p>{event.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DaScroll;
