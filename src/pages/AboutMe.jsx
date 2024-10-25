function AboutMe() {
  return (
    <div className="container-border">
      <h1>About Me</h1>
      <div className="about-content">
        <div className="about-text">
          <p>This is the About Me page. You can add your personal information here.</p>
        </div>
        
        {/* Video Section */}
        <img src="/src/assets/merged.gif" alt="Animated illustration" className="about-gif" />
      </div>
    </div>
  );
}

export default AboutMe;
