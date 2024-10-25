import React, { useEffect, useState } from 'react';

const ScrollIndicator = ({ height = '400px'}) => {
    const [glowAnimation, setGlowAnimation] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setGlowAnimation((prev) => !prev);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const scrollIndicatorStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        marginTop: '50px',
    };

    const scrollTextStyle = {
        fontSize: '14px',
        marginBottom: '20px',
        color: '#697565',
        opacity: 0.5,
        textShadow: glowAnimation
            ? '0 0 5px rgba(105, 117, 101, 0.8), 0 0 10px rgba(115, 129, 111, 0.5), 0 0 20px rgba(105, 117, 101, 1)' 
            : 'none',
        transition: 'text-shadow 0.5s ease-in-out',
    };

    const scrollLineStyle = {
        width: '1px',
        height: height,
        backgroundColor: '#697565',
        opacity: 0.5,
    };

    return (
        <div style={scrollIndicatorStyle}>
            <div style={scrollTextStyle}>D O W N &nbsp; H E R E</div>
            <div style={scrollLineStyle}></div>
        </div>
    );
};

export default ScrollIndicator;
