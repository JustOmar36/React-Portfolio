import Scroll from "../components/ScrollIndicator.jsx";

function AboutMe() {
  return (
    <div className="container-border">
      <header>
        <h1>About Me</h1>
        <div className="about-content">
        <div className="left-text">
          <p className="about-name">Hello! My name is <b>Omar</b></p>
          <p className="about-desc">I'm a <b>developer</b> and <b>data analyst</b> based out of Minneapolis, Minnesota. During my coding journey I've developed and colaborated on projcets ranging from <b>Data Analysis</b> to <b>Web Development</b> to <b>Game Design</b>.<br/><br/>
            Thank you for stopping by!
          </p>
        </div>
        <img src="/src/assets/Me GIF.gif" alt="Animated illustration" className="about-gif" />
        </div>
      </header>

      <Scroll />

      <div className="about-content">
        <img src="/src/assets/education.png" alt="education" className="education-img"></img>
        <div className="right-text">
          <h2>Education</h2>
          <p>I spent my junior year of high school as an exchange student in North Carolina, where I took my first coding class and learned HTML and CSS. This experience inspired me to pursue my undergraduate studies abroad. In 2019, I arrived in Minneapolis to attend the University of Minnesota Twin Cities on a full scholarship, majoring in <b>Computer Science</b>. While there, I collaborated with professors and peers on projects in <b>data analysis</b>, <b>artificial intelligence</b>, <b>data mining</b>, and <b>software engineering</b>. I also completed internships that allowed me to learn from industry experts. In 2023 I recieved my degree and have worked alongside governmental institutions, non-profits and educational instituations as a <b>data analyst</b>.</p>
        </div>
      </div>

      <div className="about-content">
        <div className="left-text">
          <h2>Weight Training</h2>
          <p>If you don't find me behind a computer screen you'll probably find me at the gym trying to hit a new PR. These days I work finding a healther balance between work and health.</p>
        </div>
        <img src="/src/assets/weight-lifting.png" alt="lifting" className="lifting-img"></img>
      </div>

      <div className="about-content">
        <img src="/src/assets/ghost.png" alt="gaming" className="gaming-img"></img>
        <div className="right-text">
          <h2>Gaming</h2>
          <p>If you don't find me at the gym then you'll probably find me gaming. I love my RPGs such as Elden Ring, Skyrim and Baldur's Gate. I am also a fan of online games such as League of Legends and Valorant. Recently I found interest in trying to create my own games. I have been on the journey to learn <b>Unreal Engine 5</b> and <b>Blender</b>. Visit my <a href = '/projects'>Projects</a> page to see what I've worked on!</p>
        </div>
      </div>

    </div>
  );
}

export default AboutMe;
