import Divider from "../components/Divider.jsx";
import Scroll from "../components/ScrollIndicator.jsx";
import Island from "../components/Island.jsx";
import CharacterViewer from "../components/CharacterViewer.jsx";

function Projects() {
  return (
    <div className="container-border">
      <h1>Projects</h1>
      <img src='./src/assets/programming.png' alt='Programming Image' className="project-img"></img>
      <p className="project-description">I've found over the years that programming can be an intimidating subject to navigate, so what better way to break down those walls than to go figure it out. Here's a few projects that I have taken on due to my curosity.</p>
      <Scroll/>

      <div className="project-container">
        <h2 className="game-dev-title">Game Development</h2>
        <p className="game-dev-desc">I've recently developed a strong passion for game development and game design, finding joy in the blend of creativity, storytelling, and technical skill required in building immersive experiences. This new interest has led me to explore various aspects of the gaming process—from brainstorming unique characters to designing levels and environments. I began learning about <b>coding</b>, <b>3D modeling</b>, and <b>animation</b>, diving into software like <b>Unreal Engine</b> and <b>Blender</b>.</p>

        <h3 className="unreal-title">Unreal Engine</h3>
        <p className="unreal-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sapien orci, hendrerit vitae magna in, finibus iaculis urna. Duis nibh metus, aliquam in quam eu, tempor egestas est. Nam turpis augue, pharetra et vestibulum nec, dapibus ut mi. Donec eleifend ullamcorper leo, vitae luctus diam volutpat in. Nam id fermentum nunc. Cras non augue odio. Pellentesque tempor eget ligula vel tristique. Praesent sem est, convallis et porttitor sed, scelerisque sit amet odio. Vestibulum a dui eu leo mattis porta nec at ante.</p>

        <h3 className="blender-title">Blender</h3>
        <p className="blender-desc">Throughout my career, I've often sought a creative outlet in my work, something that allowed me to leave my personal mark. But I found myself in two challenging situations: first, coming from a very technical background, and second, having little idea how to express my creativity within game development. After some research, I stumbled upon Blender. It wasn’t intuitive at first, but with time and practice, I created several models and animations that I’m genuinely proud of! Don't forget to click around and zoom in.</p>
        
        <div className="rendered-item">
          <Island />
          <p className="rendered-item-text">A lowpoly world used for my ThreeJS Portfolio (work in progress) <a href="https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwixvPaz_qqJAxXSl4kEHRt3BqoQPAgI" target="_blank">Click Here to Check it Out!</a></p>  
        </div>
        
        <div className="rendered-item">
            <CharacterViewer />
            <p className="rendered-item-text">A lowpoly character of me inspired by the game Animal Crossing!</p>
        </div>

        <h3 className="2048-title">2048</h3>
        <p className="2048-desc">2048 has been a game that has stuck with me since my early teens. I've played it on almost every device I own, and I can admit...I'm not the best still. That being said 2048 was my first attempt at making a game in 2020. It turned out to be harder than I'd like to admit. I gave my friends access to my version of 2048 and I was met with complaints of how unresponsive it was. Hearing those complaints I decided to move on from games. Looking back I wish had tried again sooner, but there's no such thing as too late. I recently went back and decided to recreate the game properly this time. <a href="/2048">Click here if you would like to try it!</a> </p>

      </div>
      <Divider />
      <div className="project-container">
        <h2 className="web-dev">Web Developement</h2>
        <p className="Jobify">As part of every developers journey, tracking and maintaining all applications subitted to companies is important. Everyone has their own method of doing so, but I decided to create my own job posting and tracking application. This project focused on using <b>React JS</b>, <b>Express JS</b>, <b>Mongoose</b> and <b>MongoDB</b>. <a href='https://jobi-posting.onrender.com/login'>Take a look yourself!</a></p>
      </div>

    </div>
  );
}

export default Projects;