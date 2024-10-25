import React from 'react';

function AboutMe() {
  return (
    <div className="container-border">
      <h1>About Me</h1>
      <div className="about-content">
        <div className="about-text">
          <p>This is the About Me page. You can add your personal information here.</p>
        </div>
        
        {/* Video Section */}
        <video autoPlay loop muted className="about-video">
          <source src="/assets/Me.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default AboutMe;
