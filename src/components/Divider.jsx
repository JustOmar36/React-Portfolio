import React from 'react';

const ScrollIndicator = ({ text = 'D O W N   H E R E', description = '' }) => {
    const scrollIndicatorStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        marginTop: '20px',
    };

    const scrollTextStyle = {
        fontSize: '25px',
        color: '#222831',
    };

    const descriptionTextStyle = {
        fontSize: '18px',
        marginTop: '5px',
        marginBottom: '20px',
        color: '#222831',
        opacity: 0.8,
    };

    const scrollLineStyle = {
        width: '1px',
        height: '50px',
        backgroundColor: '#222831',
        opacity: 0.5,
    };

    return (
        <div style={scrollIndicatorStyle}>
            <div style={scrollTextStyle}>{text}</div>
            {description && <div style={descriptionTextStyle}>{description}</div>}
            <div style={scrollLineStyle}></div>
        </div>
    );
};

export default ScrollIndicator;
