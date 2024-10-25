import React from 'react';

const ScrollIndicator = () => {
    const scrollIndicatorStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        marginTop: '20px',
    };

    const scrollLineStyle = {
        width: '1px',
        height: '50px',
        backgroundColor: '#222831',
        opacity: 0.5,
    };

    return (
        <div style={scrollIndicatorStyle}>
            <div style={scrollLineStyle}></div>
        </div>
    );
};

export default ScrollIndicator;
